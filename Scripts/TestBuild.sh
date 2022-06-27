#!/bin/sh

python3 ../staticoso/Source/Build.py \
	--SiteName="sitoctt" \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--SiteLang="it" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}"
