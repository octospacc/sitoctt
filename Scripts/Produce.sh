#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

export HUGO_ENV=production
sh "${swd}/Clean.sh"
sh "${swd}/Build.sh"
sh "${swd}/Redirects.sh"

cd "${owd}"
