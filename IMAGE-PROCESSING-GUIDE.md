# 📸 Wedding Photo Processing Guide

# 📸 Wedding Photo Processing Guide

## ✅ **Current Workflow: Optimized & Clean**

**Your photos are optimized with WebP format for 87-92% file size reduction!**

### **Simple Commands:**
- 🚀 **`npm run optimize-images`** - Complete workflow (copy + convert to WebP)
- 📂 **`npm run process-images`** - Copy images only  
- 🔄 **`npm run convert-webp`** - Convert existing JPEGs to WebP

### **Results:**
- 📄 Original JPEGs: 16-19MB each
- 🚀 WebP versions: 1.4-2.3MB each (87-92% smaller!)

---

## 🚀 Quick Start

1. **Add Your Photos**
   ```bash
   # Place photos in these directories:
   src-images/engagement/    # Engagement photos
   src-images/venue/         # Venue photos  
   src-images/ceremony/      # Wedding ceremony photos
   src-images/backgrounds/   # Background images
   ```

2. **Process Everything**
   ```bash
   npm run optimize-images
   ```

3. **Done!** Your photos are now web-optimized and display in the gallery.

---

## 🔧 **How It Works**

1. **Copy Stage**: Copies images from `src-images/` to `public/images/`
2. **WebP Stage**: Converts all JPEGs to WebP format (90% quality)
3. **Website**: Automatically uses WebP with JPEG fallback

### **Generated Files:**
```
public/images/engagement/
├── DSC04046.JPG     # Original (fallback)
├── DSC04046.webp    # Optimized (primary)
├── DSC04948.JPG     
├── DSC04948.webp    
└── ...
```

### **Browser Support:**
- ✅ **Modern browsers**: Load fast WebP versions
- ✅ **Older browsers**: Automatically use JPEG fallbacks
- ✅ **All devices**: Responsive loading with lazy loading

---

## 📋 **File Structure**

```
wedding/
├── src-images/              # Your original photos (not in git)
│   ├── engagement/         
│   ├── venue/              
│   ├── ceremony/           
│   └── backgrounds/        
├── public/images/          # Web-optimized photos (in git)
│   ├── engagement/         # Both .JPG and .webp files
│   ├── venue/              
│   ├── ceremony/           
│   └── backgrounds/        
└── scripts/
    ├── convert-to-webp.sh      # WebP conversion
    └── simple-process-images.js # Image copying
```

**That's it!** Your wedding website now has professional image optimization. 🎉

