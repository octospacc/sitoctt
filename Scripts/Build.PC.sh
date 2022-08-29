#!/bin/sh

source ./.env

python3 ../staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--Minify="False" \
	--GemtextHeader="\
# Spacc

" #\
	#--DiffBuild="True" \
	#--GemtextOutput=True #\
	#--MastodonURL="https://botsin.space" \
	#--MastodonToken="$MastodonToken"
