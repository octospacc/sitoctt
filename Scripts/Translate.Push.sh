#!/bin/sh
. "$(dirname "$(realpath "$0")")/.Globals.sh"

cd ./translate
git add . && git commit -m . && git push || true
cd ..
