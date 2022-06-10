#!/bin/sh

File=twemoji-amazing-local.css

mkdir -p Scripts.out/Twemoji
cd Scripts.out/Twemoji

# Get latest Twemoji SVGs
git clone --depth 1 "https://github.com/twitter/twemoji"
mv twemoji/assets/svg svg
rm -rf twemoji

# Get latest Twemoji-Amazing CSS
wget https://nightly.link/SebastianAigner/twemoji-amazing/workflows/build_css/master/artifact.zip
unzip artifact.zip
rm artifact.zip
mv twemoji-amazing.css $File

# Replace spaces with tabs, save space
sed -i 's/    /	/' $File
# Blank out CDN URL
sed -i 's/https:\/\/twemoji.maxcdn.com\/v\/latest\///' $File

# Personal CSS patches
cat >> $File << [EOF]

/* 
	Personal CSS patches from
	https://gitlab.com/octtspacc/sitoctt
*/

.twa span {
	/* Prevents image and text emoji overlap */
	font-size: 0px;
}

[EOF]
