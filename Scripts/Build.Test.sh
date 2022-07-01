#!/bin/sh

source ./.env

python3 ../staticoso/Source/Build.py \
	--SiteName="sitoctt" \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--SiteLang="it" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--GemtextOut=True #\
	#--MastodonURL="https://botsin.space" \
	#--MastodonToken="$MastodonToken"
	#--GemtextOut=True #\
