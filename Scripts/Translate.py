#!/usr/bin/env python3
import hashlib
import os
import shutil
import time
from pathlib import Path
from deepl import deepl

SourceLang = 'it'
DestLangs = ['et', 'ja', 'lt', 'lv', 'de', 'hu', 'ru', 'zh', 'ro', 'da', 'it', 'es', 'nl', 'fr', 'sk', 'sl', 'pt', 'en', 'sv', 'fi', 'pl', 'el', 'bg', 'cs'] # All from output of `deepl --help`

# With shutil.copytree copy only folder struct, no files; https://stackoverflow.com/a/15664273
def IgnoreFiles(Dir, Files):
    return [f for f in Files if os.path.isfile(os.path.join(Dir, f))]

def FindTextFiles():
	List = []
	#for Dir in ('Posts/'): #('Pages/', 'Posts/'):
	for Ext in ('htm', 'html', 'markdown', 'md', 'pug', 'txt'):
		for File in Path(Dir).rglob(f'*.{Ext}'):
			List += [File]
	return List

def GetMetaComment(Paragraph, Num, Count, Translation=None):
	return f'<!-- Paragraph {abs(Count-Num)} {hashlib.md5(Paragraph.encode()).hexdigest()} {hashlib.md5(Translation.encode()).hexdigest() if Translation else ""} --->'

def StrReverse(Str):
	_ = list(Str)
	_.reverse()
	return ''.join(_)

def TryTranslate(Text):
	try:
		#Trans += GetMetaComment(Target, i) + '\n' + Translate.translate(Target) + '\n\n'
		#Trans = GetMetaComment(Target, i, len(Paragraphs)) + '\n' + Translate.translate(Target) + '\n\n' + Trans
		return Translate.translate(Text)
		#Target = ''
	#except deepl.DeepLCLIPageLoadError:
	#	raise
	except Exception as e:
		print(e)
		return False
		#Trans += GetMetaComment(Target, i) + '\n' + Target + '\n\n'
		#Trans = GetMetaComment(Target, i, len(Paragraphs)) + '\n' + Target + '\n\n' + Trans

DestLangs.remove(SourceLang)
for Lang in DestLangs:
	Translate = deepl.DeepLCLI(SourceLang, Lang)
	for Dir in ('Pages', 'Posts/'):
		shutil.copytree(Dir, f'i18n/{Lang}/{Dir}', ignore=IgnoreFiles, dirs_exist_ok=True)

	for File in FindTextFiles():
		if os.path.isfile(f'i18n/{Lang}/{File}'): # Skip already translated pages - This will evolve into a skip only if not updated
			continue

		with open(File, 'r') as f:
			FullSource, Target, Trans = f.read(), '', ''
		print(f'\n{Lang}/{File}:', end='')

		Paragraphs = StrReverse(FullSource).split('\n\n')
		for i,Paragraph in enumerate(Paragraphs): # Assuming no single paragraph is > 5000 chars
			print(f' {i}', end='')
			Backoff = 0
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
			Done = ''
			while not Done:
				time.sleep(5 + (Backoff*1.25))
				Backoff += 1.25
				Done = TryTranslate(Target)
			Trans = GetMetaComment(Target, i, len(Paragraphs), Done) + '\n' + Done + '\n\n' + Trans
			#while True:
				#continue
			#Translate.translate(Paragraph)
			#Trans += os.popen(f'cat ./Translate.tmp | deepl -s --fr {SourceLang} --to {Lang}').read()

		with open(f'i18n/{Lang}/{File}', 'w') as f:
			f.write(Trans)
		#print(Trans)
		#exit()
