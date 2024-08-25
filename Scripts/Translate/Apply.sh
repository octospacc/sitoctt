#!/bin/sh
. "$(dirname "$(realpath "$0")")/../Lib/Globals.sh"
cd "${swd}/../build"

if [ -n "$(ls ./translate)" ]
then cp -r ./translate/* ./content/
fi

cd "${owd}"
