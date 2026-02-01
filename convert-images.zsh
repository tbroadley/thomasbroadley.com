#!/bin/zsh
set -euo pipefail
IFS=$'\n\t'

mogrify -format jpg blog/**/*.png

for file in blog/**/*.jpg; do cp $file $file.original; done

mogrify -format jpg -resize 64x64 blog/**/*.png
for file in blog/**/*.jpg; do mv $file $(echo $file | sed s/.jpg//).jpg.thumbnail; done

mogrify -format jpg -resize 512x512 blog/**/*.png
for file in blog/**/*.jpg; do mv $file $(echo $file | sed s/.jpg//).jpg.og; done

for file in blog/**/*.jpg.original; do mv $file $(echo $file | sed s/.original//); done
for file in blog/**/*.jpg.thumbnail; do mv $file $(echo $file | sed s/.jpg.thumbnail//).thumbnail.jpg; done
for file in blog/**/*.jpg.og; do mv $file $(echo $file | sed s/.jpg.og//).og.jpg; done

yarn build
