#!/bin/sh

python3.10 ./staticoso/App/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io', 'Assets':'http://http.sitoctt-assets.octt.eu.org/public'}" \
	--DynamicParts="{'Head':['Twemoji.html'], 'Footer':['StatCounter.html'], 'Other':['CountWindow.html']}"

sh ./Scripts/PostBuild.Common.sh
sh ./Scripts/Prepare.NoStyle.sh
