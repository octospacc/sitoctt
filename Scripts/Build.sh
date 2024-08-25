#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

mkdir -p ./build
cd ./build
cp -r \
	../i18n                  \
	../archetypes  ../content \
	../layouts     ../themes   \
	../config.toml ../hugo.toml \
./

sh "${swd}/Translate/Get.sh"
sh "${swd}/Translate/Apply.sh"
hugo $@

cd "${owd}"
