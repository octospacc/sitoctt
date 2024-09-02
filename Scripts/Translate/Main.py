#!/usr/bin/env python3
DestinationLanguages = ["it", "en", "fr"] # "de", "eo", "es"
IncludePaths = ["/"]
ExcludePaths = ["/categories"] # "/miscellanea"

import subprocess
from os import getcwd, listdir
from os.path import dirname, realpath, isfile, isdir
from pathlib import Path
from translate_shell.translate import translate

# TODO handle frontmatter properly, some data must be translated (title, ...) but other must not (date, ...)
# TODO also somehow handle overriding data for some translation (title, slug, ...)
# TODO add warning about automatic translation at the beginning
# TODO handle deleted files? (it should probably be done in another sh script, not here)

def printf(*objects):
	print(*objects, end='')

def get_source_language(document_path):
	return document_path.split('/')[0]

def make_destination_path(document_path, destination_language):
	return ('./translate/' + destination_language + '/'
		+ '/'.join(document_path.split('/')[1:]))

# TODO check for edit date in already translated documents and update them if needed
def is_translation_uptodate(source_path, destination_path):
	return True

# TODO handle when the same document is available in multiple source languages?
def needs_translation(source_path, destination_language=None):
	for folder_path in ExcludePaths:
		if ('/' + '/'.join(source_path.split('/')[1:])).startswith(folder_path + '/'):
			return False
	if not open('../content/' + source_path).read().strip():
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

def fix_frontmatter(translated_text, reference_text):
	result = ''
	reference_lines = reference_text.splitlines()
	for [index, translated_line] in enumerate(translated_text.splitlines()):
		if translated_line.strip() and (translated_line.lstrip() == translated_line):
			reference_line = reference_lines[index]
			line_key = reference_line.split('=')[0]
			if line_key.strip().lower() in ["draft", "date", "lastmod"]:
				translated_line = reference_line
			else:
				line_value = '='.join(translated_line.split('=')[1:])
				translated_line = line_key
				if line_value:
					translated_line += ('=' + line_value)
		result += (translated_line + '\n')
	return result

def translate_document(document_path, documents):
	printf(f"* {document_path} ->")
	for destination_language in documents[document_path]:
		source_language = get_source_language(document_path)
		original_text = open(("../content/" + document_path), 'r').read()
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
				translated = subprocess.run(
					("bash", "../Scripts/Lib/translate-shell.bash", "-brief",
						"-t", destination_language, "-s", source_language,
						("file://" + "../content/" + document_path)),
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
		text_header = translated_text.strip().splitlines()[0].strip()
		translated_preamble = ("\n\n{{< noticeAutomaticTranslation " + source_language + " >}}\n\n")
		if text_header in ["---", "+++"]:
			text_tokens = translated_text.split(text_header)
			translated_body = text_header.join(text_tokens[2:])
			translated_text = (text_header +
				fix_frontmatter(text_tokens[1], original_text.split(text_header)[1]) +
			text_header)
			if translated_body.strip():
				translated_text += (translated_preamble + translated_body)
		elif translated_text.strip():
			translated_text = (translated_preamble + translated_text)
		destination_path = make_destination_path(document_path, destination_language)
		Path('/'.join(destination_path.split('/')[:-1])).mkdir(parents=True, exist_ok=True)
		open(destination_path, 'w').write(translated_text)
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

if __name__ == "__main__":
	globals_text = read_from_scripts('Lib/Globals.sh')
	exec(globals_text.split('#' + globals_text.splitlines()[0].split('#!')[1] + '!')[0])
	#exec(read_from_scripts('../config.toml'))
	main()
