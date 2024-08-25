#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

mkdir -p ./build
cd ./build
sh "${swd}/Build.sh"

"${Python3}" "${swd}/Translate/Main.py"
sh "${swd}/Translate/Apply.sh"
hugo $@
sh "${swd}/Translate/Push.sh"

cd "${owd}"
