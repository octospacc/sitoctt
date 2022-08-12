#!/bin/sh

# Why does Python-Markdown on Termux shit itself with local third-party extensions?

python3 ../staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--Minify="False" \
	--ContextParts="{'Head':'Privacy.html'}" \
	--MarkdownExts="('attr_list', 'def_list', 'footnotes', 'md_in_html', 'tables')"
