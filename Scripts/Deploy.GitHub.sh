#!/bin/sh

python3.10 ./staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--DynamicParts="{'Head':['Twemoji.html'], 'Footer':['StatCounter.html']}"
