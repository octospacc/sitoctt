#!/bin/sh
. "$(dirname "$(realpath "$0")")/../Lib/Globals.sh"
cd "${swd}/../build"

if [ ! -d ./translate ]
then git clone --depth 1 --branch "${BranchTranslate}" "${RepoUrl}" ./translate
fi

cd "${owd}"
