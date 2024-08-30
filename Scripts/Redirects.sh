#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

# TODO handle new capitalization of folders
# TODO handle un-nested pages
# TODO handle 0000- posts
# TODO handle miscellanea
# FUTURE: old yyyy-mm-dd to new yyyy/mm/dd

#cd ./build/public/it
#find . -type f -name index.html -exec sh -c '
#set -e
#cp "{}" "../it.tmp/{}"
#'
#cd ../../..

#cd ./build/public
#cp -r ./it ./it.tmp
#cd ./it.tmp

cd ./build/public
find . -type f -name index.html -exec sh -c '
set -e
nicepath="$(echo "{}" | rev | cut -d/ -f2- | rev)"
nicename="$(echo "${nicepath}" | rev | cut -d/ -f1 | rev)"
#extrapaths=""
#for replace in \
#	"note Posts/Notes/Linux" \
#	"note Posts/Notes" \
#	"post Posts" \
#; do
#	set $replace
#	newpath="$(echo "{}" | sed -e "s|/$2/|/$1/|")"
#	if [ "${newpath}" != "{}" ]
#	then extrapaths="${extrapaths} ${newpath}"
#	fi
#done
for path in "${nicepath}" #${extrapaths}
do cat ../layouts/alias.html \
	| sed -e "s|{{ .Permalink }}|./${nicename}/|g" \
	| sed -e "s|{{ $canonicalUrl }}|./${nicename}/|g" \
	| sed -e "s|{{ site.Language.LanguageCode }}||g" \
> "${path}.html"
done
#if [ "$(echo "{}" | cut -d/ -f2)" = it ]
#then
#	destpath="$(echo "${nicepath}" | cut -d/ -f3-).html"
#	mkdir -p "${destpath}"
#	rm -rf "${destpath}"
#	sed -e "s|{URL}|/$(echo "${nicepath}" | cut -d/ -f2-)/|g" ../../redirectTemplate.html > "${destpath}"
#fi
' \;
#cd ../..

cd "${owd}"
