# LBPF Architecture

**Last updated:** 2026-01-30  
**Version:** V1.0.0

---

## 1. Project Structure

```
lisboaporfavor-vanilla/
├── docs/
│   ├── primes/              # LBPF Prime system (governance)
│   ├── core/                # Canonical knowledge base
│   └── archive/             # Old versions, deprecated docs
├── css/
│   ├── template.css         # Global tokens, layout system
│   ├── brand-components.css # Reusable primitives (pills, cards, tiles)
│   ├── guide-page.css       # Guide/tour bento layout
│   ├── admin-guide.css      # Admin-specific styling
│   ├── main.css             # Homepage styling
│   └── fixes.css            # Temporary fixes
├── js/
│   ├── components/          # Navbar, hero, footer (modular)
│   ├── pages/               # Page-specific logic
│   └── app.js               # Main orchestrator
├── data/
│   ├── tours.js             # Tour content
│   └── guides.js            # Guide content
├── images/
│   ├── _rawslug/            # Unprocessed images
│   ├── guides/              # Guide profile images
│   └── lbpf logo/           # Brand assets
├── index.html               # Homepage
├── lxtourguide.html         # Guide detail page (Bento template)
├── admin-guide.html         # Guide admin dashboard
├── admin.html               # Main LBPF admin
└── [legal pages].html       # Privacy, terms, FAQ, etc.
```

---

## 2. Technical Stack

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), no frameworks
- **Vanilla JavaScript** - Component-based, no frameworks
- **Fonts:** Playfair Display (headings) + Inter (body)

### **Architecture Pattern**
- **Component-based:** Modular JS/CSS files
- **Token system:** CSS variables for brand consistency
- **Template types:** Main public, Guide/tour detail, Admin/staff
- **Data separation:** Content in data/ folder, logic in js/

### **No Build System**
- Direct file serving (no webpack, no npm build)
- Browser-native ES modules where needed
- Simple, maintainable, rookie-proof

---

## 3. Template System

### **3.1 Main Public Template** (`index.html`)
- Uses LBPF core colors (wine red, emerald green, warm gold)
- Component-based footer (auto-injected via JS)
- Modular navbar and hero
- Topic cards use Portugal/Lisbon palette

### **3.2 Guide/Tour Detail Template** (`lxtourguide.html`)
- **Bento layout** (Hero Blocks 1-4 + Tile Block 5)
- Hero: Avatar, name, tagline, rating, tags, logo
- Tiles: Bio, Reviews, Tours, Availability, Favourites, Photobook, Social
- Mobile-first responsive (880px max width)
- Brand-compliant using tokens from brand-components.css

### **3.3 Admin/Staff Template** (`admin-guide.html`)
- Muted UI (white + Lisbon grey)
- Same structure as public guide page
- Editable fields (textareas, text formatter)
- Admin header with Save/Preview buttons

---

## 4. CSS Architecture

### **Layer 1: Global Tokens** (`template.css`)
- CSS variables for colors, spacing, typography
- Page container (max 1280px)
- Navbar and footer base styles
- Legacy token mapping for compatibility

### **Layer 2: Brand Components** (`brand-components.css`)
- Reusable primitives: pills, cards, tiles
- Consistent radii, shadows, hover states
- Topic color system integration
- Used across all three template types

### **Layer 3: Page-Specific** (`guide-page.css`, `main.css`, etc.)
- Template-specific layouts
- Uses tokens from Layer 1 and components from Layer 2
- No ad-hoc colors or spacing values

---

## 5. JavaScript Architecture

### **Component Pattern**
```javascript
// components/footer.js
function createFooter() {
  return `<footer>...</footer>`;
}

(function() {
  // Auto-inject on DOM ready
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = createFooter();
  }
})();
```

### **Page Pattern**
```javascript
// pages/main.js
function renderHomePage() {
  // Page-specific logic
}
```

### **Data Pattern**
```javascript
// data/guides.js
window.guidesData = [
  { id: 'lxtourguide', name: 'LXTourguide', ... }
];
```

---

## 6. Brand Compliance System

### **BRAND STRICT Mode**
1. Read `LBPF_BRAND_PACK.md` before any CSS/HTML work
2. Use only defined tokens (no ad-hoc values)
3. Propose new visual needs in brand pack FIRST
4. Add to `brand-components.css` after approval
5. Then use in page-specific CSS

### **Token Categories**
- **Colors:** LBPF core + Portugal/Lisbon palette + neutral greys
- **Typography:** Font families, weights, sizes
- **Spacing:** 4/8px scale (space-4 through space-64)
- **Radii:** none, sm, md, pill
- **Shadows:** soft, strong

---

## 7. Development Workflow

### **File Editing Order**
1. Read relevant Prime and Core docs
2. Check brand pack for visual tokens
3. Edit/create files following component pattern
4. Test in browser
5. Commit to git with descriptive message
6. Push to GitHub

### **Adding New Features**
1. Identify which template type (main/guide/admin)
2. Check if existing component can be reused
3. If new component needed, add to brand-components.css
4. Use component in page-specific CSS
5. Update architecture doc if structure changes

---

## 8. Deployment

### **Current Status**
- Development: Local file serving
- Version control: Git + GitHub (Whassup-world/LisboaPorFavor-vanilla)
- Production: TBD (Hostinger or similar)

### **Pre-Deployment Checklist**
- [ ] All images optimized and in correct folders
- [ ] All links tested (internal and external)
- [ ] Mobile responsiveness verified
- [ ] Brand compliance check complete
- [ ] Git committed and pushed
- [ ] Legal pages complete (privacy, terms, etc.)

---

## 9. Future Enhancements

### **Phase 1 (Current)**
- Bento guide template working
- Brand system frozen
- Basic admin dashboard

### **Phase 2 (Next)**
- CMS form for creating new guides
- Tour page templates (15+ tours goal)
- Calendar integration for availability

### **Phase 3 (Future)**
- Guide training academy content
- Agency partnership portal
- Booking system integration

---

**End**
