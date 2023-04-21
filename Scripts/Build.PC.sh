#!/bin/sh
[ -e ./.env ] && . ./.env

python3 ../staticoso/App/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io', 'Assets':'https://sitoctt-assets.octt.eu.org'}" \
	--DynamicParts="{'Foot':['Eruda.html']}" \
	--MinifyOutput="False" \
	--MinifyAssets="False" \
	--GemtextHeader="\
# Spacc

" \
	--MastodonURL="https://botsin.space" \
	--MastodonToken="$MastodonToken;Debug=True" \
	--ActivityPubHoursLimit="0" \
	--GemtextOutput=False
	#--DiffBuild="True" \
	#--GemtextOutput=True #\
	#--MastodonURL="https://botsin.space" \
	#--MastodonToken="$MastodonToken"

sh ./Scripts/PostBuild.Common.sh
