# Image Management Strategy
**LisboaPorFavor - Vanilla Project**  
**Created:** November 15, 2025  
**Purpose:** Futureproof image/video organization for scalability

---

## 📁 Folder Structure

```
images/
├── guides/                    # Guide profile & gallery images
│   ├── lxtourguide/
│   │   ├── LXtourguide-profile.png        # Avatar
│   │   ├── LXTourguide Logo.jpg           # Logo
│   │   └── IMG-*.jpg                       # Gallery photos
│   ├── [guide-handle]/
│   │   ├── [handle]-profile.png
│   │   └── IMG-*.jpg
│   └── ...
│
├── tours/                     # Tour images & content
│   ├── alfama-vintage-market/
│   │   ├── hero.jpg           # Main tour image
│   │   ├── gallery/           # Tour gallery
│   │   └── thumbnails/        # Optimized thumbs
│   ├── belem-bike-tour/
│   └── ...
│
├── _rawslug/                  # General content images
│   ├── landmarks/
│   ├── food/
│   ├── streets/
│   └── misc/
│
├── admin/                     # Admin/CMS related images
│   ├── icons/
│   └── ui/
│
└── optimized/                 # Auto-generated optimized versions
    ├── webp/                  # WebP format
    ├── thumbnails/            # 400x300 thumbs
    └── compressed/            # Compressed originals
```

---

## 🎯 Naming Conventions

### Guides
**Format:** `[handle]-[type].[ext]`

Examples:
- `lxtourguide-profile.png` - Profile avatar
- `lxtourguide-logo.jpg` - Guide logo/branding
- `IMG-[DATE]-WA[NUMBER].jpg` - Gallery photos (WhatsApp format)

### Tours
**Format:** `[tour-slug]-[type]-[number].[ext]`

Examples:
- `alfama-vintage-market-hero.jpg`
- `alfama-vintage-market-gallery-01.jpg`
- `alfama-vintage-market-thumb.jpg`

### General Content
**Format:** `[descriptive-name].[ext]`

Examples:
- `lisbon-street.webp`
- `bifana.webp`
- `cais-das-colunas-view.webp`

---

## 📊 Image Specifications

### Avatars (Guide Profiles)
- **Size:** 200x200px minimum
- **Format:** PNG (transparency) or JPG
- **Max File Size:** 100KB
- **Aspect Ratio:** 1:1 (square)

### Tour Hero Images
- **Size:** 1200x800px minimum
- **Format:** WebP (primary), JPG (fallback)
- **Max File Size:** 200KB (WebP), 300KB (JPG)
- **Aspect Ratio:** 3:2

### Gallery Images
- **Size:** 1200px width minimum
- **Format:** JPG or WebP
- **Max File Size:** 300KB
- **Aspect Ratio:** Flexible (maintain original)

### Thumbnails
- **Size:** 400x300px
- **Format:** WebP
- **Max File Size:** 50KB
- **Aspect Ratio:** 4:3

---

## 🚀 Optimization Strategy

### Current (Manual)
1. Upload original images to appropriate folder
2. Reference in data files using relative paths
3. Browser loads full-size images

### Future (Automated - Phase 2)
1. **Upload Pipeline:**
   - Original uploaded to `/images/uploads/`
   - Auto-resize to multiple sizes (200, 400, 800, 1200, 1600px widths)
   - Auto-convert to WebP + keep JPG fallback
   - Auto-compress (target: 80% quality)
   - Move to appropriate folder

2. **CDN Integration:**
   - Use Cloudinary / ImageKit / Cloudflare Images
   - On-the-fly resizing and optimization
   - Automatic WebP/AVIF serving
   - Lazy loading support

3. **Naming Convention:**
   ```
   /optimized/
   ├── webp/
   │   ├── [name]-200w.webp
   │   ├── [name]-400w.webp
   │   ├── [name]-800w.webp
   │   └── [name]-1200w.webp
   └── jpg/
       ├── [name]-200w.jpg
       └── ...
   ```

---

## 🎬 Video Management (Future)

### Structure
```
videos/
├── tours/
│   ├── [tour-slug]/
│   │   ├── hero-video.mp4
│   │   ├── gallery/
│   │   └── thumbnails/
│   └── ...
├── guides/
│   ├── [handle]/
│   │   └── intro-video.mp4
│   └── ...
└── general/
```

### Specifications
- **Format:** MP4 (H.264), WebM (VP9)
- **Max Size:** 50MB (recommended: 10MB)
- **Resolution:** 1920x1080 (max), 1280x720 (recommended)
- **Duration:** 15-60 seconds (hero), 2-5 min (tour previews)
- **Hosting:** Vimeo/YouTube (embed) or Cloudflare Stream

---

## 📝 Data File Integration

### Current Approach
Images referenced in data files:

```javascript
// data/guide-lxtourguide.js
{
  avatarUrl: "/images/guides/lxtourguide/LXtourguide-profile.png",
  images: [
    { src: "/images/guides/lxtourguide/IMG-20250727-WA0009.jpg", alt: "..." }
  ]
}
```

### Future Approach (Responsive Images)
```javascript
{
  avatarUrl: {
    src: "/images/guides/lxtourguide/profile.jpg",
    srcset: {
      webp: [
        "/optimized/webp/lxtourguide-profile-200w.webp 200w",
        "/optimized/webp/lxtourguide-profile-400w.webp 400w"
      ],
      jpg: [
        "/optimized/jpg/lxtourguide-profile-200w.jpg 200w",
        "/optimized/jpg/lxtourguide-profile-400w.jpg 400w"
      ]
    },
    sizes: "(max-width: 768px) 100px, 200px"
  }
}
```

---

## 🔒 Storage Strategy

### Phase 1 (Current): Local Storage
- All images stored in `/images/` folder
- Served directly from web server
- Simple, no external dependencies

**Pros:**
- ✅ Full control
- ✅ No costs
- ✅ Simple setup

**Cons:**
- ⚠️ No optimization
- ⚠️ Slow loading
- ⚠️ No CDN
- ⚠️ Server bandwidth costs

### Phase 2 (Future): Hybrid Approach
**Small/Critical:** Local storage (avatars, icons)  
**Large/Gallery:** CDN (tour images, videos)

**Recommended CDN:**
1. **Cloudflare Images** - Best value, R2 integration
2. **Cloudinary** - Best features, generous free tier
3. **ImageKit** - Good balance, real-time optimization

### Phase 3 (Scale): Full CDN
- All images served via CDN
- Local storage only for uploads
- Automated sync pipeline

---

## 📊 Performance Targets

### Current Performance
- **First Load:** ~2-3s (with images)
- **Image Size:** 200-500KB per image
- **Total Page Weight:** 2-5MB (LXTourGuide page)

### Target Performance (Future)
- **First Load:** <1s (Lighthouse 90+)
- **Image Size:** 50-150KB per image (WebP)
- **Total Page Weight:** <500KB (initial), lazy-load rest
- **LCP:** <2.5s
- **CLS:** <0.1

**Optimization Techniques:**
- ✅ WebP/AVIF format
- ✅ Responsive images (srcset)
- ✅ Lazy loading
- ✅ CDN delivery
- ✅ Compression (80% quality)
- ✅ Proper caching headers

---

## 🛠️ Maintenance

### Weekly Tasks
- [ ] Review new uploads
- [ ] Check for duplicates
- [ ] Verify naming consistency
- [ ] Delete unused images

### Monthly Tasks
- [ ] Audit total storage size
- [ ] Compress/optimize large images
- [ ] Update this document if structure changes
- [ ] Review CDN usage/costs (when applicable)

### Quarterly Tasks
- [ ] Full image audit
- [ ] Performance review
- [ ] Consider migration to CDN (if not yet done)
- [ ] Update optimization pipeline

---

## 📈 Scalability Plan

### Current Capacity
- **Images:** ~350 files (10MB guides + 976MB _rawslug)
- **Storage:** ~1GB total
- **Growth Rate:** Unknown (new project)

### Projected Growth (Year 1)
- **Guides:** 60 guides × 10 images = 600 images
- **Tours:** 15 tours × 15 images = 225 images
- **General:** +500 images (content, blogs, etc.)
- **Total:** ~1,325 images = ~5-7GB

### Storage Plan
**0-100 guides:** Local storage OK  
**100-500 guides:** Migrate to CDN recommended  
**500+ guides:** CDN required

---

## 🚨 Important Rules

1. **Never delete original files** - Keep backups
2. **Always use relative paths** - `/images/...` not `http://...`
3. **Name files descriptively** - No `IMG_001.jpg`
4. **Compress before upload** - Use TinyPNG, Squoosh, etc.
5. **Maintain folder structure** - Don't dump everything in root
6. **Document changes** - Update this file when structure changes

---

## 🔗 Useful Tools

### Image Optimization
- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **ImageOptim** - https://imageoptim.com/

### CDN Services
- **Cloudflare Images** - https://www.cloudflare.com/products/cloudflare-images/
- **Cloudinary** - https://cloudinary.com/
- **ImageKit** - https://imagekit.io/

### Conversion
- **CloudConvert** - https://cloudconvert.com/
- **XnConvert** - https://www.xnview.com/en/xnconvert/

---

**Status:** ✅ Structure Defined  
**Next Action:** Implement automated optimization pipeline (Phase 2)  
**Owner:** Development Team  
**Last Updated:** November 15, 2025
