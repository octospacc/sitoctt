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

if [ -n "${sitocttEnv}" ]
then
	sed -i -e "s|#${sitocttEnv}:||g" ./hugo.toml
	mv "./layouts/partials/assetsRoot.${sitocttEnv}.html" ./layouts/partials/assetsRoot.html || true
fi

sh "${swd}/Translate/Get.sh"
sh "${swd}/Translate/Apply.sh"
hugo $@

cd "${owd}"
