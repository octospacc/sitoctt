#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

mkdir -p ./build
cd ./build
cp -r \
	../archetypes ../i18n  \
	../content    ../assets \
	../layouts    ../themes  \
	../hugo.toml  ../static   \
./

if [ "${sitocttEnv}" = GitHub ]
then cp ./layouts/partials/assetsRoot.GitHub.html ./layouts/partials/assetsRoot.html
fi

sh "${swd}/Translate/Get.sh"
sh "${swd}/Translate/Apply.sh"
hugo $@

cd "${owd}"
