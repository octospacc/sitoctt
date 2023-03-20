#!/bin/sh

GetArchive() {
# $1: Branch name or commit hash
	wget \
		-O ./staticoso.tar.bz2 \
		https://gitlab.com/octtspacc/staticoso/-/archive/$1/staticoso-$1.tar.bz2
	tar xvf ./staticoso.tar.bz2
	mv ./staticoso-$1 ./staticoso
}

GetArchive Dev
