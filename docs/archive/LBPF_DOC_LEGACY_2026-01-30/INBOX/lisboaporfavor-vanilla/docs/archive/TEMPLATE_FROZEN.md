# FROZEN TEMPLATE - LisboaPorFavor Vanilla

**Date Frozen:** November 14, 2025  
**Status:** ✅ PRODUCTION READY - DO NOT MODIFY BASE COMPONENTS

---

## 🔒 FROZEN COMPONENTS (DO NOT TOUCH)

### 1. Navbar (`js/components/navbar.js`)
- **Structure:** Logo + 7 nav items + Search bar
- **Styling:** `css/template.css` (glassy, scrolled effects)
- **DO NOT:** Change layout, add items, modify CSS

### 2. Hero Section (`js/components/hero.js`)
- **Image:** `images/hero.webp` (top 65% crop from split-image.js)
- **Height:** 100vh (full viewport)
- **Background:** Fixed attachment
- **DO NOT:** Change height, positioning, or image path structure

### 3. Footer (`js/components/footer.js`)
- **Sections:** Main grid → Social → Brand
- **Payment icons:** SVG badges (VISA, MC, PayPal, Stripe)
- **Social icons:** Emojis (📷📘▶️📌)
- **DO NOT:** Change structure or icon format

### 4. Bottom Image Section
- **Image:** `images/main.webp` (bottom 35% crop)
- **Height:** 400px
- **Parallax:** Enabled via `initParallax()`
- **DO NOT:** Change height or crop ratio

### 5. Core CSS (`css/template.css`)
- **Source:** Copied from TEST/page-builder.css
- **DO NOT:** Modify navbar, hero, footer, or image-section styles

---

## ✅ WHAT YOU CAN CHANGE

### Page Content (`js/pages/*.js`)
- **Current:** `main.js` has demo content (cards, text, info boxes)
- **Safe to edit:** All content inside `<section class="content-section">`
- **Add pages:** Create `tours.js`, `guides.js`, etc.

### Page-Specific Styles (`css/main.css`)
- **Safe to add:** New styles for page content
- **Keep:** Max-width constraint (880px) for readability

### Data Files (`data/`)
- **Safe to edit:** `tours.js`, `guides.js`
- **Add more:** Any JSON/JS data files

### Images (`images/`)
- **Safe to add:** New images for content
- **DO NOT:** Replace `hero.webp` or `main.webp` without re-cropping

---

## 📋 TEMPLATE STRUCTURE

```
Navbar (fixed, glassy)
    ↓
Hero (100vh, background-image: hero.webp)
    ↓
Content Section (880px max-width, white background)
    ↓
Bottom Image (400px, parallax, main.webp)
    ↓
Footer (tight to image, no gap)
```

---

## 🎨 IMAGE SPECIFICATIONS & PLACEMENT

### ⚠️ CRITICAL: Hero and Main Image Relationship

**The hero and main image are TWO PARTS of ONE ORIGINAL IMAGE**

```
Original Photo (lisbon-street.webp)
├── Top 65% → hero.webp (hero section background)
└── Bottom 35% → main.webp (bottom image section)
```

**Why this matters:**
- They must ALWAYS come from the same source photo
- Split ratio is 65/35 for visual balance
- Changing one without the other breaks visual continuity

### Hero Image (Top Section)

**File:** `images/hero.webp`
- **Size:** 573KB
- **Crop:** Top 65% of original full photo
- **Usage:** Background image for hero section
- **CSS:** `background-attachment: fixed` creates parallax
- **Dimensions:** ~1440x1310px
- **Position:** Starts at viewport top (under fixed navbar)

**Placement Rules:**
1. Hero height is ALWAYS `100vh` (full viewport)
2. NO `padding-top` or `margin-top`
3. Navbar overlays it (navbar is `position: fixed`)
4. Image crops from top edge naturally

### Main Image (Bottom Section)

**File:** `images/main.webp`
- **Size:** 377KB
- **Crop:** Bottom 35% of same original photo
- **Usage:** Image section before footer
- **Height:** 400px (reduced from TEST's 700px)
- **Dimensions:** ~1440x706px
- **Parallax:** Yes, via `initParallax()` in main.js

**Placement Rules:**
1. Section height is 400px (set in `css/fixes.css`)
2. `margin-bottom: 0` (tight to footer)
3. Image inside is 120% height for parallax effect
4. Goes directly from content section → image → footer (no gaps)

### 📸 How Images Were Created

**Source:** `D:\Backup and Documents\W\Windsurf\lisboaporfavor-bootstrap\public\images\_rawslug\lisbon-street.webp`

**Tools:**
1. **Split Script:** `D:\Backup and Documents\W\TEST\split-image.js` (automated cropping)
2. **JSON Config:** `D:\Backup and Documents\W\TEST\page-config.json` (defines which images to use)
3. **Alternative:** `D:\Backup and Documents\W\TEST\generate-image-crops.mjs` (generic crop generator)

**Process:**
```javascript
// split-image.js does this:
const heroHeight = Math.floor(height * 0.65);  // Top 65%
const mainHeight = height - heroHeight;        // Bottom 35%

// Extracts:
// hero-lisbon.webp (0, 0, width, heroHeight)
// main-lisbon.webp (0, heroHeight, width, mainHeight)
```

**Result:** Two perfectly aligned image sections that look like one continuous photo when scrolling.

### 🔄 To Replace Images with New Photo

**IMPORTANT: You must create BOTH images from the SAME source!**

1. **Place new source photo in TEST folder**
   ```bash
   cd "D:\Backup and Documents\W\TEST"
   # Copy your new photo: lisbon-street-new.webp
   ```

2. **Update split-image.js source path** (line 8-11)
   ```javascript
   const sourcePath = path.join(
     'D:', 'Backup and Documents', 'W', 'Windsurf', 
     'lisboaporfavor-bootstrap', 'public', 'images', 
     '_rawslug', 'YOUR-NEW-PHOTO.webp'  // Change this
   );
   ```

3. **Run the split script**
   ```bash
   node split-image.js
   ```

4. **Copy outputs to vanilla project**
   ```bash
   # Creates: hero-lisbon.webp + main-lisbon.webp
   Copy-Item hero-lisbon.webp "../Windsurf/lisboaporfavor-vanilla/images/hero.webp" -Force
   Copy-Item main-lisbon.webp "../Windsurf/lisboaporfavor-vanilla/images/main.webp" -Force
   ```

5. **Verify alignment**
   - Open `http://localhost:8000`
   - Scroll down - hero bottom should seamlessly connect to main image top
   - If misaligned, check source photo dimensions and re-split

### 🔧 Alternative: Generic Crop Tool

**If you want to crop ANY image (not just lisbon-street.webp):**

Use `generate-image-crops.mjs`:
```bash
cd "D:\Backup and Documents\W\TEST"
node generate-image-crops.mjs path/to/your-photo.jpg output-folder/
```

This creates:
- `output-folder/hero.webp` (top 2/3)
- `output-folder/main.webp` (bottom 1/3)

**Note:** Uses 2/3 split (67/33) vs our 65/35. Adjust ratio in the script if needed.

### 📋 JSON Configuration (TEST Reference)

**How TEST template defines images:**

`page-config.json`:
```json
{
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "image": "hero.webp"  // Points to hero image
    },
    {
      "id": "main-image",
      "type": "image",
      "image": "main.webp",  // Points to bottom image
      "height": "25vh"       // Original TEST height (we use 400px)
    }
  ]
}
```

**In vanilla project:** We hardcode these paths in `hero.js` and `main.js` instead of using JSON config.

### ❌ NEVER Do This

1. ❌ Use different source photos for hero and main
2. ❌ Change split ratio from 65/35 without testing
3. ❌ Manually crop images in Photoshop (use split-image.js)
4. ❌ Add padding-top to hero section
5. ❌ Add margin-bottom to image-section or margin-top to footer

### ✅ Image Alignment Checklist

- [ ] Hero shows top portion of building/scene
- [ ] Main image shows bottom portion of same building/scene
- [ ] No visual break between content section and main image
- [ ] No gap between main image and footer
- [ ] Scrolling feels like one continuous scene
- [ ] Both images from same source file
- [ ] Split ratio is 65/35

---

## 🐛 KNOWN ISSUES (For Later)

### Language Dropdown Blue Highlight
- **Issue:** Option selection still shows blue (browser default)
- **Location:** `.language-selector select option` in footer
- **Status:** Low priority, defer to later session
- **Note:** Attempted fixes in `css/fixes.css` lines 73-88

---

## 🚀 HOW TO USE THIS TEMPLATE

### Creating a New Page

1. **Create page file:**
   ```bash
   js/pages/tours.js
   ```

2. **Follow this structure:**
   ```javascript
   function createToursPage() {
     return `
       <section class="content-section">
         <div>
           <h2 class="content-title">Your Page Title</h2>
           <p class="content-description">Your content...</p>
         </div>
       </section>
       
       <div class="image-section">
         <img src="images/main.webp" alt="Lisbon" id="parallax-image">
       </div>
     `;
   }
   ```

3. **Add to app.js:**
   - Import the page function
   - Update page builder logic

---

## ⚠️ CRITICAL RULES

1. **Never touch hero height** - It's 100vh, no padding-top, no hacks
2. **Never change image-section → footer gap** - They must be tight (margin: 0)
3. **Never modify template.css base styles** - Only add to main.css or fixes.css
4. **Always use content-section max-width** - Keeps content readable
5. **Test on localhost:8000** - Never file:// protocol for images

---

## 📁 FILE MANIFEST

### Core Template Files (FROZEN)
- `index.html`
- `css/template.css`
- `js/components/navbar.js`
- `js/components/hero.js`
- `js/components/footer.js`
- `js/app.js`

### Editable Files
- `js/pages/main.js` (or create new page files)
- `css/main.css`
- `css/fixes.css` (temporary fixes only)
- `data/tours.js`
- `data/guides.js`

### Images (Core)
- `images/hero.webp` ✅
- `images/main.webp` ✅
- `images/logo-720.png` ✅
- `images/favicon.png` ✅

---

## 🎯 SUCCESS CRITERIA

Template is working correctly if:
- ✅ Hero is full viewport height (no grey gap)
- ✅ Images load (hero + bottom)
- ✅ Footer sits tight against bottom image
- ✅ Content is max 880px wide
- ✅ Navbar has glassy scroll effect
- ✅ Social icons show emojis
- ✅ Payment icons show SVG badges

---

## 📞 TROUBLESHOOTING

### Grey Gap Under Hero
→ Check `css/fixes.css` - hero should have NO padding-top

### Images Not Loading
→ Use `http://localhost:8000` not `file://`
→ Check paths are relative: `images/hero.webp`

### Footer Gap
→ Check `.image-section` has `margin-bottom: 0`
→ Check `footer` has `margin-top: 0`

### Content Too Wide
→ Ensure content inside `<section class="content-section"><div>...</div></section>`
→ Max-width applied to inner `<div>`

---

## 🔐 TEMPLATE VERSION

- **Version:** 1.0 FROZEN
- **Based on:** TEST/page-builder.js + TEST/page-builder.css
- **Project:** lisboaporfavor-vanilla
- **Backup:** lisboaporfavor-bootstrap (archived)

---

**🎉 Template is production-ready. Build pages on top of this foundation without touching base components.**
