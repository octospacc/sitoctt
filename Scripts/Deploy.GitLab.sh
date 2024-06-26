#!/bin/sh

python3 ./staticoso/App/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io', 'Assets':'https://sitoctt-assets.octt.eu.org'}" \
	--DynamicParts="{'Head':['Twemoji.html'], 'Footer':['StatCounter.html'], 'Other':['CountWindow.html']}" \
	--MastodonURL="https://poliversity.it" \
	--MastodonToken="$MastodonToken" \
	--ActivityPubHoursLimit=96 \
	--GemtextOutput=True \
	--GemtextHeader="\
# sitoctt
Alcune informazioni importanti sono disponibili su:
=> /octt/index.gmi octocapsula/index

"

sh ./Scripts/PostBuild.Common.sh
sh ./Scripts/Prepare.NoStyle.sh
