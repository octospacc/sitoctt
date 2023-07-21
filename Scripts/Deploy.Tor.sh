#!/bin/sh

python3 ../staticoso/App/Source/Build.py \
	--SiteDomain="http://sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion" \
	--FolderRoots="{'*':'/', 'Assets':'/sitoctt-assets'}" \
	--NoScripts=True

sh ./Scripts/PostBuild.Common.sh
sh ./Scripts/Prepare.NoStyle.sh
