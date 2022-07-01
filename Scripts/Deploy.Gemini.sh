#!/bin/sh

git clone --depth 1 https://gitlab.com/octtspacc/octt.gmi
cd octt.gmi
mv ../public.gmi ./sitoctt

git config user.email "$GitUserEmail"
git config user.name "$GitUserName"
git add .
git commit -m "Agg. $(date)"
git push
