#!/bin/sh

python3 staticoso/Source/Build.py \
	--SiteName="sitoctt" \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--SiteLang="it" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--ContextParts="{'Footer':['StatCounter.html']}" \
	--MastodonURL="https://botsin.space" \
	--MastodonToken="$MastodonToken" \
	--GemtextOut=True \
	--GemtextHeader="# sitoctt
Alcune informazioni importanti sono disponibili su:
=> /octt/index.gmi octocapsula/index

"
