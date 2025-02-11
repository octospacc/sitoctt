#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

mkdir -p ./static/res/lib
cd ./static/res/lib

downloadfile(){
	wget -O "./$2" "https://$1/$2"
}

downloadfile spaccinc.gitlab.io/SpaccDotWeb SpaccDotWeb.Alt.min.js
downloadfile uicdn.toast.com/editor/latest toastui-editor-all.min.js
downloadfile uicdn.toast.com/editor/latest toastui-editor.min.css

cd "${owd}"
