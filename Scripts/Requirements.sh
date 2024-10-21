#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

sh "${swd}/Dependencies.Build.sh"
sh "${swd}/Dependencies.Runtime.sh"

cd "${owd}"
