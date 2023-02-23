#!/bin/sh

staticosoCommit="c35aa94345ce16c9109fd5a9f35c5aa9498fb664"

#git clone --depth 1 https://gitlab.com/octtspacc/staticoso

wget \
	-O ./staticoso.tar.bz2 \
	https://gitlab.com/octtspacc/staticoso/-/archive/$staticosoCommit/staticoso-$staticosoCommit.tar.bz2
tar xvf ./staticoso.tar.bz2
mv ./staticoso-$staticosoCommit ./staticoso
