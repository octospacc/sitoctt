#!/bin/sh
. "$(dirname "$(realpath "$0")")/.Globals.sh"

if [ -n "$(ls ./translate)" ]
then cp -r ./translate/* ./content/
fi
