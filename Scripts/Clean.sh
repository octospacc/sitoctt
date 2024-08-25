#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

rm -rf ./build ./public ./resources

cd "${owd}"
