#!/usr/bin/env python3
ModificationMetadataKey = "lastmod"
KeepOriginalMetadata = ["draft", "date", "lastmod"]
DestinationLanguages = ["it", "en", "es", "fr"] # "de", "eo"
IncludePaths = ["/"]
ExcludePaths = ["/note/2024-09-19-Raspberry-Output-Audio-Both.md", "/miscellanea/Devlogs.md"] # "/miscellanea/PicoBlog.md"

import subprocess
from os import getcwd, listdir
from os.path import dirname, realpath, isfile, isdir
from pathlib import Path
from translate_shell.translate import translate

# TODO somehow handle overriding frontmatter data for some translation (title, slug, ...) (via in other files or commented metadata lines?)
# TODO handle deleted files? (it should probably be done in another sh script, not here)

def printf(*objects):
	print(*objects, end='')

def get_source_language(document_path):
	return document_path.split('/')[0]

def read_original_document(document_path):
	return open(("../content/" + document_path), 'r').read()

def make_destination_path(document_path, destination_language):
	return ("./translate/" + destination_language + '/'
		+ '/'.join(document_path.split('/')[1:]))

def is_translation_uptodate(source_path, destination_path):
	original_lines = split_with_frontmatter(read_original_document(source_path))[1].splitlines()
	translated_lines = split_with_frontmatter(open(destination_path, 'r').read())[1].splitlines()
	for [index, original_line] in enumerate(original_lines):
		line_key = original_line.split('=')[0]
		if line_key.strip().lower() == ModificationMetadataKey:
			if original_line != translated_lines[index]:
				return False
			break
	return True

# TODO handle when the same document is available in multiple source languages?
def needs_translation(source_path, destination_language=None):
	for exclude_path in ExcludePaths:
		document_path = ('/' + '/'.join(source_path.split('/')[1:]))
		if (document_path == exclude_path) or document_path.startswith(exclude_path.rstrip('/') + '/'):
			return False
	if not read_original_document(source_path).strip():
		return False
	if destination_language:
		destination_path = make_destination_path(source_path, destination_language)
		if isfile(destination_path) and is_translation_uptodate(source_path, destination_path):
			return False
	return True

def find_documents(folder_path):
	documents_queue, documents = [], {}
	for document_path in Path(folder_path).rglob('*.*'):
		if isfile(document_path):
			documents_queue.append('/'.join(str(document_path).split('/')[2:]))
	for document in documents_queue:
		if needs_translation(document):
			documents[document] = []
			for destination_language in list(set(DestinationLanguages) - {get_source_language(document)}):
				if needs_translation(document, destination_language):
					documents[document].append(destination_language)
	return documents

def split_with_frontmatter(document_text):
	text_header = document_text.strip().splitlines()[0].strip()
	if text_header in ["---", "+++"]:
		text_tokens = document_text.split(text_header)
		return [text_header, text_tokens[1], text_header, text_header.join(text_tokens[2:])]

def fix_frontmatter(translated_text, reference_text):
	result = ''
	reference_lines = reference_text.splitlines()
	for [index, translated_line] in enumerate(translated_text.splitlines()):
		if translated_line.strip() and (translated_line.lstrip() == translated_line):
			reference_line = reference_lines[index]
			line_key = reference_line.split('=')[0]
			if line_key.strip().lower() in KeepOriginalMetadata:
				translated_line = reference_line
			else:
				line_value = '='.join(translated_line.split('=')[1:])
				translated_line = line_key
				if line_value:
					translated_line += ('=' + line_value)
		result += (translated_line + '\n')
	return result

# <https://stackoverflow.com/a/18815890>
def ascii_to_number(text:str) -> int:
	return int(''.join(format(ord(i), 'b').zfill(8) for i in text), 2)

# <https://stackoverflow.com/a/699891>, <https://stackoverflow.com/a/40559005>
def number_to_ascii(number:int) -> str:
	binary = format(int(number), '016b')
	binary = binary.zfill(len(binary) + (8 - (len(binary) % 8)))
	return ''.join(chr(int(binary[(i * 8):((i * 8) + 8)], 2)) for i in range(len(binary) // 8))

# TODO add checks for number-strings to ensure they aren't already in the literal text
# TODO handle code blocks and .notranslate HTML elements
# TODO fix strange bugs
def wrap_for_translation(original_text):
	#return original_text
	original_text = (original_text
		.replace("{{%", "{{@%").replace("%}}", "%@}}")
		.replace("{{<", "{{@<").replace(">}}", ">@}}"))
	original_tokens = original_text.split("{{@")
	#[(("{{@" if i else '') + c) for [i, c] in enumerate(original_text.split("{{@"))]
	for i in range(1, len(original_tokens)):
		token_tokens = original_tokens[i].split("@}}")
		token_tokens[0] = (f"{TranslationMagic}__" + str(ascii_to_number("{{@" + token_tokens[0] + "@}}")) + "__").replace("9", "9_")
		original_tokens[i] = ''.join(token_tokens)
	#print(unwrap_from_translation(''.join(original_tokens)))
	#exit(1)
	return ''.join(original_tokens)

def unwrap_from_translation(translated_text):
	#return translated_text
	translated_tokens = translated_text.split(f"{TranslationMagic}__")
	for i in range(1, len(translated_tokens)):
		token_tokens = translated_tokens[i].split("__")
		token_tokens[0] = number_to_ascii(token_tokens[0].replace(' ', '').replace('_', ''))
		translated_tokens[i] = (token_tokens[0] + "__".join(token_tokens[1:]))
	return (''.join(translated_tokens)
		.replace("{{@%", "{{%").replace("%@}}", "%}}")
		.replace("{{@<", "{{<").replace(">@}}", ">}}"))

def translate_document(document_path, documents):
	printf(f"* {document_path} ->")
	for destination_language in documents[document_path]:
		source_language = get_source_language(document_path)
		original_text = wrap_for_translation(read_original_document(document_path))
		printf('', destination_language)
		try:
			is_python_translator = True
			translated = translate(original_text, destination_language, source_language)
			if not len(translated.results):
				raise Exception("Unhandled error")
		except Exception as exception:
			printf('❌', exception)
			try:
				is_python_translator = False
				temporary_path = ("./tmp/" + document_path)
				Path('/'.join(temporary_path.split('/')[:-1])).mkdir(parents=True, exist_ok=True)
				open(temporary_path, 'w').write(original_text)
				translated = subprocess.run(
					("bash", "../Scripts/Lib/translate-shell.bash", "-brief", "-no-autocorrect",
						"-t", destination_language, "-s", source_language,
						("file://" + temporary_path)),
					stdout=subprocess.PIPE,
					stderr=subprocess.PIPE)
				if translated.stderr:
					raise Exception(translated.stderr.decode())
			except Exception as exception:
				printf('❌', exception)
				continue
		printf('✅')
		translated_text = (translated.results[0].paraphrase
			if is_python_translator else translated.stdout.decode())
		translated_preamble = ("\n\n{{< noticeAutomaticTranslation " + source_language + " >}}\n\n")
		if (translated_tokens := split_with_frontmatter(translated_text)):
			translated_tokens[1] = fix_frontmatter(translated_tokens[1], original_text.split(translated_tokens[0])[1])
			if translated_tokens[3].strip():
				translated_tokens.insert(3, translated_preamble)
			translated_text = ''.join(translated_tokens)
		elif translated_text.strip():
			translated_text = (translated_preamble + translated_text)
		destination_path = make_destination_path(document_path, destination_language)
		Path('/'.join(destination_path.split('/')[:-1])).mkdir(parents=True, exist_ok=True)
		open(destination_path, 'w').write(unwrap_from_translation(translated_text))
	printf('\n')

def main():
	for source_language in listdir('../content'):
		for folder_path in IncludePaths:
			documents = find_documents('../content/' + source_language + folder_path)
			for document_path in documents:
				if len(documents[document_path]):
					translate_document(document_path, documents)

def read_from_scripts(relative_path:str):
	return open((dirname(realpath(__file__)) + '/../' + relative_path), 'r').read()

TranslationMagic = ("__" + str(ascii_to_number("sitoctt")))

if __name__ == "__main__":
	globals_text = read_from_scripts('Lib/Globals.sh')
	exec(globals_text.split('#' + globals_text.splitlines()[0].split('#!')[1] + '!')[0])
	#exec(read_from_scripts('../config.toml'))
	main()
