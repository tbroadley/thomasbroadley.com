#!/bin/zsh
set -euo pipefail
IFS=$'\n\t'

# Process PNG files
echo "Converting PNGs to JPG..."
for file in blog/**/*.png; do
  [[ -f "$file" ]] || continue
  base="${file%.png}"
  
  # Create original-size JPG
  convert "$file" "${base}.jpg"
  
  # Create thumbnail (64x64)
  convert "$file" -resize 64x64 "${base}.thumbnail.jpg"
  
  # Create OG image (512x512)
  convert "$file" -resize 512x512 "${base}.og.jpg"
  
  echo "Processed: $file"
done

# Process JPG files (but skip our generated thumbnails and og images)
echo "Processing source JPGs..."
for file in blog/**/*.jpg; do
  [[ -f "$file" ]] || continue
  
  # Skip if this is a generated thumbnail or og image
  [[ "$file" == *.thumbnail.jpg ]] && continue
  [[ "$file" == *.og.jpg ]] && continue
  
  base="${file%.jpg}"
  
  # Create thumbnail (64x64)
  convert "$file" -resize 64x64 "${base}.thumbnail.jpg"
  
  # Create OG image (512x512)
  convert "$file" -resize 512x512 "${base}.og.jpg"
  
  echo "Processed: $file"
done

echo "Image processing complete!"
yarn build
