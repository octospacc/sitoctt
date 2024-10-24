#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

alias asroot=""
if [ "$(whoami)" != root ] && [ "$(uname -o)" != Android ]
then alias asroot=sudo
fi

hugoexternal=true
if [ -n "$(which apt)" ]
then
	asroot apt update
	asroot apt install -y python3 python-pip nodejs findutils git wget tar gzip
	if [ "$(uname -o)" != Android ]
	then
		# Debian(s)
		asroot apt install -y npm p7zip-full
	else
		# Termux
		asroot apt install -y hugo p7zip
		hugoexternal=false
	fi
elif [ -n "$(which apk)" ]
then
	asroot apk update
	asroot apk add hugo python3 py3-pip nodejs npm findutils git wget tar gzip 7zip
	hugoexternal=false
fi

if [ "${hugoexternal}" = true ]
then
	exehome="$([ -n "${XDG_DATA_HOME}" ] \
		&& echo "${XDG_DATA_HOME}" \
		|| echo "${HOME}/.local" \
	)/bin"
	exedepot="${exehome}/hugo.tmp"
	exearchive="${exedepot}/hugo_extended.tar.gz"

	sysarch="$(uname -m)"
	if [ "${sysarch}" = x86_64 ]
	then sysarch=amd64
	elif [ "${sysarch}" = aarch64 ]
	then sysarch=arm64
	fi

	mkdir -p "${exedepot}"
	wget -O "${exearchive}" "https://github.com/gohugoio/hugo/releases/download/v${HugoVersion}/hugo_extended_${HugoVersion}_linux-${sysarch}.tar.gz"
	tar xvf "${exearchive}" --directory "${exedepot}"
	mv "${exedepot}/hugo" "${exehome}/hugo"
	chmod +x "${exehome}/hugo"
	rm -rf "${exedepot}"

	if [ -z "$(which hugo)" ]
	then
		BinaryPath='PATH="${PATH}:'"${BinaryHome}"'"'
		eval "${BinaryPath}"
		echo                 >> ~/.profile
		echo "${BinaryPath}" >> ~/.profile
	fi
fi

cd ./Scripts
PIP_BREAK_SYSTEM_PACKAGES=1 "${Python3}" -m pip install -U -r ./requirements.txt
#npm install

cd ./Lib
wget -O ./translate-shell.bash https://git.io/trans

cd "${owd}"
