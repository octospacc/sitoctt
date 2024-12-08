#!/bin/sh
. "$(dirname "$(realpath "$0")")/Lib/Globals.sh"
cd "${swd}/.."

mkdir -p ./static/res/lib
cd ./static/res/lib

wget --continue "https://spaccinc.gitlab.io/SpaccDotWeb/SpaccDotWeb.Alt.min.js"
wget --continue "https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"
wget --continue "https://uicdn.toast.com/editor/latest/toastui-editor.min.css"

cd "${owd}"
