#!/bin/sh
. "$(dirname "$(realpath "$0")")/.Globals.sh"
cd "${swd}/.."

mkdir -p ./build
cd ./build
cp -r \
	../archetypes  ../content \
	../layouts     ../themes   \
	../config.toml ../hugo.toml \
./
sh "${swd}/Translate.Get.sh"
$([ -n "$(which python3)" ] && echo python3 || echo python) "${swd}/Translate.Main.py"
sh "${swd}/Translate.Apply.sh"
hugo
sh "${swd}/Translate.Push.sh"

cd "${owd}"
