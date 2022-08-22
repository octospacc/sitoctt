#!/bin/sh

git clone --depth 1 https://github.com/LukeEmmet/html2gmi
cd html2gmi
go get github.com/LukeEmmet/html2gmi

echo "#!/bin/sh" > ./html2gmi
echo "cd $PWD; go run ." >> ./html2gmi

#cat > ./html2gmi << [EOF]
##!/bin/sh
#cd $PWD
#go run .
#[EOF]

chmod +x ./html2gmi
PATH=$PATH:$PWD
cd ..
