#!/usr/bin/env python3
import hashlib
import os
import shutil
from pathlib import Path
from deepl import deepl

SourceLang = 'it'
DestLangs = ['et', 'ja', 'lt', 'lv', 'de', 'hu', 'ru', 'zh', 'ro', 'da', 'it', 'es', 'nl', 'fr', 'sk', 'sl', 'pt', 'en', 'sv', 'fi', 'pl', 'el', 'bg', 'cs'] # All from output of `deepl --help`

# With shutil.copytree copy only folder struct, no files; https://stackoverflow.com/a/15664273
def IgnoreFiles(Dir, Files):
    return [f for f in Files if os.path.isfile(os.path.join(Dir, f))]

def FindTextFiles():
	List = []
	for Dir in ('Pages/', 'Posts/'):
		for Ext in ('htm', 'html', 'markdown', 'md', 'pug', 'txt'):
			for File in Path(Dir).rglob(f'*.{Ext}'):
				List += [File]
	return List

def GetMetaComment(Paragraph, Num, Count):
	return f'<!-- Paragraph {abs(Count-Num)} {hashlib.md5(Paragraph.encode()).hexdigest()} {{TranslationHash}} --->'

def StrReverse(Str):
	_ = list(Str)
	_.reverse()
	return ''.join(_)

DestLangs.remove(SourceLang)
for Lang in DestLangs:
	Translate = deepl.DeepLCLI(SourceLang, Lang)
	for Dir in ('Pages', 'Posts/'):
		shutil.copytree(Dir, f'i18n/{Lang}/{Dir}', ignore=IgnoreFiles, dirs_exist_ok=True)

	for File in FindTextFiles():
		with open(File, 'r') as f:
			FullSource, Target, Trans = f.read(), '', ''
		print(f'\n{Lang}/{File}:', end='')

		Paragraphs = StrReverse(FullSource).split('\n\n')
		for i,Paragraph in enumerate(Paragraphs): # Assuming no single paragraph is > 5000 chars
			print(f' {i}', end='')
			Target = StrReverse(Paragraph)
			#if len(Target+Paragraph) < 5000:
			#	Target += GetMetaComment(Paragraph, Num) + '\n' + Paragraph + '\n\n'
			#	#print(Paragraph)
			#	continue
			#with open('Translate.tmp', 'w') as f:
			#	f.write(Target)
			if not Target: # There were more than 2 line breaks
				Trans += '\n\n'
				continue
			#while True:
			try:
				#Trans += GetMetaComment(Target, i) + '\n' + Translate.translate(Target) + '\n\n'
				Trans = GetMetaComment(Target, i, len(Paragraphs)) + '\n' + Translate.translate(Target) + '\n\n' + Trans
				Target = ''
			except deepl.DeepLCLIPageLoadError:
				raise
			except Exception as e:
				print(e)
				#Trans += GetMetaComment(Target, i) + '\n' + Target + '\n\n'
				Trans = GetMetaComment(Target, i, len(Paragraphs)) + '\n' + Target + '\n\n' + Trans
					#continue
			#Translate.translate(Paragraph)
			#Trans += os.popen(f'cat ./Translate.tmp | deepl -s --fr {SourceLang} --to {Lang}').read()
		print(Trans)
		exit()
