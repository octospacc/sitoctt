#!/bin/sh

RepoUrl="https://gitlab.com/octtspacc/sitoctt.git"
BranchThis="sitoctt-next"
BranchTranslate="translate-cache"
HugoVersion="0.133.0"

#/bin/sh!

set -e
owd="$(pwd)"
swd="$(dirname "$(realpath "$0")")"
if [ ! -e "${swd}/Lib/Globals.sh" ]
then swd="${swd}/.."
fi
eval "$(sed -e 's| = |=|g' "${swd}/../assets/SiteProps.toml")"

Python3="$([ -n "$(which python3)" ] && echo python3 || echo python)"
