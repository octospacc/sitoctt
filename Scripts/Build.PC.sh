#!/bin/sh

source ./.env

python3 ../staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io', 'Assets':'https://sitoctt-assets.octt.eu.org'}" \
	--DynamicParts="{'Foot':['Eruda.html']}" \
	--MinifyOutput="False" \
	--MinifyAssets="False" \
	--GemtextHeader="\
# Spacc

" #\
	#--DiffBuild="True" \
	#--GemtextOutput=True #\
	#--MastodonURL="https://botsin.space" \
	#--MastodonToken="$MastodonToken"
