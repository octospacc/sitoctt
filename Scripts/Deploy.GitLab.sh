#!/bin/sh

python3 staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--ContextParts="{'Footer':['StatCounter.html']}" \
	--MastodonURL="https://botsin.space" \
	--MastodonToken="$MastodonToken" \
	--SitemapOut=True \
	--GemtextOut=True \
	--GemtextHeader="# sitoctt
Alcune informazioni importanti sono disponibili su:
=> /octt/index.gmi octocapsula/index

"
