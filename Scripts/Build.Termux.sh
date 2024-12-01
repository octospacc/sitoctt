#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."
sh "${swd}/Build.sh" --noBuildLock serve
cd "${owd}"
