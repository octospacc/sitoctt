#!/bin/sh

source ./.env

python3 ../staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io', 'Assets':'https://octtspacc.gitlab.io/sitoctt-assets'}" \
	--Minify="False" \
	--GemtextHeader="\
# Spacc

" #\
	#--DiffBuild="True" \
	#--GemtextOutput=True #\
	#--MastodonURL="https://botsin.space" \
	#--MastodonToken="$MastodonToken"