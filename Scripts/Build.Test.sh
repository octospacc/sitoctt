#!/bin/sh

source ./.env

python3 ../staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--FeedEntries=10 \
	--Minify="False" \
	--GemtextHeader="# Spacc

" #\
	#--GemtextOut=True #\
	#--SitemapOut=True \
	#--MastodonURL="https://botsin.space" \
	#--MastodonToken="$MastodonToken"
