#!/bin/bash

# WebP Conversion Script for Wedding Photos
# Converts JPEG files to WebP format with high quality

echo "🖼️  Converting JPEGs to WebP format..."
echo "======================================"

# Function to convert images in a directory
convert_directory() {
    local source_dir="$1"
    local target_dir="$2"
    
    if [ ! -d "$source_dir" ]; then
        echo "❌ Source directory not found: $source_dir"
        return 1
    fi
    
    # Create target directory if it doesn't exist
    mkdir -p "$target_dir"
    
    # Count total files for progress
    local total_files=$(find "$source_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | wc -l)
    local current=0
    
    if [ "$total_files" -eq 0 ]; then
        echo "📂 No JPEG files found in $source_dir"
        return 0
    fi
    
    echo "📂 Processing $(basename "$source_dir") ($total_files images):"
    
    # Convert each JPEG/JPG file to WebP
    find "$source_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r file; do
        current=$((current + 1))
        local filename=$(basename "$file")
        local name_without_ext="${filename%.*}"
        local webp_file="$target_dir/${name_without_ext}.webp"
        
        echo "  Converting ($current/$total_files): $filename → ${name_without_ext}.webp"
        
        # Convert with high quality (90%), fast encoding, and preserve metadata
        if cwebp -q 90 -m 6 -metadata all "$file" -o "$webp_file" 2>/dev/null; then
            # Get file sizes for comparison
            local original_size=$(stat -f%z "$file" 2>/dev/null || echo "0")
            local webp_size=$(stat -f%z "$webp_file" 2>/dev/null || echo "0")
            
            if [ "$original_size" -gt 0 ] && [ "$webp_size" -gt 0 ]; then
                local savings=$(( (original_size - webp_size) * 100 / original_size ))
                echo "    ✅ Saved ${savings}% ($(numfmt --to=iec $original_size) → $(numfmt --to=iec $webp_size))"
            else
                echo "    ✅ Converted successfully"
            fi
        else
            echo "    ❌ Failed to convert $filename"
        fi
    done
}

# Convert engagement photos
convert_directory "public/images/engagement" "public/images/engagement"

# Convert other categories if they exist
convert_directory "public/images/venue" "public/images/venue"
convert_directory "public/images/ceremony" "public/images/ceremony"
convert_directory "public/images/backgrounds" "public/images/backgrounds"

echo ""
echo "✅ WebP conversion complete!"
echo ""
echo "💡 Your images are now available in both formats:"
echo "   📄 Original: DSC04046.JPG"
echo "   🚀 Optimized: DSC04046.webp"
echo ""
echo "The website will now use WebP for better performance! 🎉"