#!/bin/sh
# Common action after the base site build succeeded

cp -vr ./Assets/* ./public/

# Compile self-executable assets
#for Dir in public public.*
#do
	find ./public/Assets/ -type f -name "*.*.SelfBuild.js" -exec sh -c "echo {}; node {}; rm {}" \;
#done
