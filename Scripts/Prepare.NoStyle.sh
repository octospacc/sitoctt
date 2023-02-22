#!/bin/sh

HeadInject="
<style>
body {
	color: #000000;
	background-color: #FFFFFF;
}
@media (prefers-color-scheme: dark) {
	body {
		color: #FFFFFF;
		background-color: #000000;
	}
}
img {
	max-width: 100%;
	max-height: 100vh;
}
</style>
"

cp -r ./public ./public.Plain
mv ./public.Plain ./public/Plain
cd ./public/Plain

find . -name "*.html" \
	-exec sed -i "s|<style>|<!--style>|g" {} \; \
	-exec sed -i "s|</style>|</style--->|g" {} \;

find . -name "*.html" \
	-exec sed -i "s|<head>|<head>\n$(echo $HeadInject)|" {} \;

find . -name "*.css" \
	-exec sh -c 'if [ "$(basename {})" != "Global.css" ]; then echo > {}; fi' \;
