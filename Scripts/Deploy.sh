#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

sh "${swd}/Requirements.sh"
rm -rf ./dist

sh "${swd}/Produce.sh"
mv ./build/public ./dist

sh "${swd}/Package.sh"
mv ./build/public/offline.zip ./dist/

cd "${owd}"
