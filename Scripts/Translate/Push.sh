#!/bin/sh
. "$(dirname "$(realpath "$0")")/../Lib/Globals.sh"
cd "${swd}/../build"

cd ./translate
git add . && git commit -m . && git push || true
cd ..

cd "${owd}"
