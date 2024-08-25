#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

cd ./build/public
find . -type f -name index.html -exec sh -c '
nicepath="$(echo "{}" | rev | cut -d/ -f2- | rev)"
niceurl="./$(echo "${nicepath}" | rev | cut -d/ -f1 | rev)/"
sed -e "s|{URL}|${niceurl}|g" ../../redirectTemplate.html > "${nicepath}.html"
' \;

cd "${owd}"
