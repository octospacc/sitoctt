#!/bin/sh

Time=time

source ./.env
python3 -m cProfile \
	-s $Time \
	../staticoso/Source/Build.py \
	--SiteDomain="https://sitoctt.octt.eu.org" \
	--FolderRoots="{'*':'https://octtspacc.gitlab.io'}" \
	--Minify="False" \
	--DiffBuild="True" \
	> /tmp/staticoso-$Time.txt


	#--DiffBuild="True" \
	#--GemtextOutput=True \
