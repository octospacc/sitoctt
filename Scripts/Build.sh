#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

mkdir -p ./build
cd ./build
cp -r \
	../archetypes ../i18n  \
	../content    ../static \
	../layouts    ../themes  \
	../hugo.toml              \
./

sh "${swd}/Translate/Get.sh"
sh "${swd}/Translate/Apply.sh"
hugo $@

cd "${owd}"
