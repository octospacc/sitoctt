#!/usr/bin/env python3
import hashlib, os, shutil, sys, time
from pathlib import Path

GoogleLangs = ['af', 'sq', 'am', 'ar', 'hy', 'as', 'ay', 'az', 'bm', 'eu', 'be', 'bn', 'bho', 'bs', 'bg', 'ca', 'ceb', 'ny', 'zh', 'zh_HANT', 'co', 'hr', 'cs', 'da', 'dv', 'doi', 'nl', 'en', 'eo', 'et', 'ee', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gn', 'gu', 'ht', 'ha', 'haw', 'iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'ilo', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'rw', 'gom', 'ko', 'kri', 'ku', 'ckb', 'ky', 'lo', 'la', 'lv', 'ln', 'lt', 'lg', 'lb', 'mk', 'mai', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mni-Mtei', 'lus', 'mn', 'my', 'ne', 'no', 'or', 'om', 'ps', 'fa', 'pl', 'pt', 'pa', 'qu', 'ro', 'ru', 'sm', 'sa', 'gd', 'nso', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'tt', 'te', 'th', 'ti', 'ts', 'tr', 'tk', 'ak', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'] # {LingvaURL}/api/v1/languages
DeepLLangs = ['et', 'ja', 'lt', 'lv', 'de', 'hu', 'ru', 'zh', 'ro', 'da', 'it', 'es', 'nl', 'fr', 'sk', 'sl', 'pt', 'en', 'sv', 'fi', 'pl', 'el', 'bg', 'cs'] # All from output of `deepl --help`
UserAgent = 'sitoctt:Translate.py'

Engine = 'Google' # 'Google' or 'DeepL'
SourceLang = 'it'
DestLangs = GoogleLangs

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
		if Engine.lower() == 'google':
			return json.loads(urlopen(Request(f'{LingvaURL}/api/v1/{SourceLang}/{Lang}/{URLParse.quote(Text, safe="")}', headers={'User-Agent':UserAgent})).read())["translation"]
		elif Engine.lower() == 'deepl':
			return Translate.translate(Text)
	except Exception as e:
		print(e)
		return False

if Engine.lower() == 'google':
	LingvaURL = sys.argv[1]
	import json
	from urllib import parse as URLParse
	from urllib.request import urlopen, Request
elif Engine.lower() == 'deepl':
	from deepl import deepl

try:
	DestLangs.remove(SourceLang)
except Exception:
	pass

for Lang in DestLangs:
	if Engine.lower() == 'deepl':
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
			if not Target: # There were more than 2 line breaks
				Trans += '\n\n'
				continue
			Done = ''
			while not Done:
				time.sleep(0.5 + (Backoff*1.025))
				Backoff += 1.025
				Done = TryTranslate(Target)
			Trans = GetMetaComment(Target, i, len(Paragraphs), Done) + '\n' + Done + '\n\n' + Trans

		with open(f'i18n/{Lang}/{File}', 'w') as f:
			f.write(Trans)
