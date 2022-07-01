#!/bin/sh

git config --global user.email "$GitUserEmail"
git config --global user.name "$GitUserName"
git config --global credential.helper store
echo "https://$GitUserName:$GitPassword@gitlab.com" > .git-credentials

git clone --depth 1 https://gitlab.com/octtspacc/octt.gmi
cd octt.gmi
mv ../public.gmi ./sitoctt

git add .
git commit -m "Agg. $(date)"
git push
