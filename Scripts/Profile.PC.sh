#!/bin/sh
[ -e ./.env ] && . ./.env
Time=time

python3 -m cProfile \
	-s $Time \
	../staticoso/App/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io', 'Assets':'https://octtspacc.gitlab.io/sitoctt-assets'}" \
	--Minify="False" \
	--DiffBuild="True" \
	> /tmp/staticoso-$Time.txt


	#--DiffBuild="True" \
	#--GemtextOutput=True \
