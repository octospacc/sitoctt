#!/bin/sh

python3 ./staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io', 'Assets':'https://sitoctt-assets.octt.eu.org'}" \
	--DynamicParts="{'Head':['Twemoji.html'], 'Footer':['StatCounter.html'], 'Other':['CountWindow.html']}" \
	--MastodonURL="https://botsin.space" \
	--MastodonToken="$MastodonToken" \
	--GemtextOutput=True \
	--GemtextHeader="\
# sitoctt
Alcune informazioni importanti sono disponibili su:
=> /octt/index.gmi octocapsula/index

"
