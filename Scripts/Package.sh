#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

export sitocttEnv=Offline
export HUGO_ENV=production
sh "${swd}/Clean.sh"
sh "${swd}/Build.sh"

cd ./build/public
#zip -9 -r ./offline.zip *
7z a -tzip -mcp=437 -mx9 ./offline.zip *

cd "${owd}"
