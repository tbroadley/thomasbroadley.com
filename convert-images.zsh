#!/bin/zsh
set -euo pipefail
IFS=$'\n\t'

rm blog/**/*.jpg || true
rm docs/blog/**/*.jpg || true

mogrify -format jpg blog/**/*.png

for file in blog/**/*.jpg; do cp $file $file.original; done
mogrify -format jpg -resize 64x64 blog/**/*.png
for file in blog/**/*.jpg; do mv $file $(echo $file | sed s/.jpg//).thumbnail.jpg; done
for file in blog/**/*.jpg.original; do mv $file $(echo $file | sed s/.original//); done

yarn build
