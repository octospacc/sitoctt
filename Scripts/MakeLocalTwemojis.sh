#!/bin/sh

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
mv twemoji-amazing.css twemoji-amazing-local.css

# Replace spaces with tabs, save space
sed -i 's/    /	/' twemoji-amazing-local.css
# Blank out CDN URL
sed -i 's/https:\/\/twemoji.maxcdn.com\/v\/latest\///' twemoji-amazing-local.css

# Personal CSS patches
cat >> twemoji-amazing-local.css << [EOF]

/* 
	Personal CSS patches from
	https://gitlab.com/octtspacc/postoctt
*/

.twa span {
    /* Prevents image and text emoji overlap */
    font-size: 0px;
}

[EOF]

#wget -O "twemoji-amazing-local.css" "https://octtspacc.gitlab.io/sitoctt-assets/twemoji-amazing.css"
#sed -i 's/https:\/\/twemoji.maxcdn.com\/v\/latest\///' twemoji-amazing-local.css

#From="https://twemoji.maxcdn.com/v/latest/svg"
#for i in $(grep "    background-image: url(" "twemoji-amazing-local.css" | cut -c30- | cut -c${#From}- | rev | cut -c3- | rev)
#do
#	wget -O "$i" "$From/$i"
#done
