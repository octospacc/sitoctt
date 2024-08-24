#!/bin/sh
. "$(dirname "$(realpath "$0")")/.Globals.sh"

if [ ! -d ./translate ]
then git clone --depth 1 --branch "${BranchTranslate}" "${RepoUrl}" ./translate
fi
