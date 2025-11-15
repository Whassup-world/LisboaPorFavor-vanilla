# 🚀 Local Development Server

## Quick Start

**1. Start Server:**
```powershell
cd "D:\Backup and Documents\W\Windsurf\lisboaporfavor-vanilla"
py -m http.server 8080
```

**2. Open in Browser:**
- Homepage: `http://localhost:8080/index.html`
- Guides List: `http://localhost:8080/guides.html` (placeholder)
- LXTourGuide: `http://localhost:8080/lxtourguide.html`
- Documentation: `http://localhost:8080/docs/DOCUMENTATION.html`

**3. Stop Server:**
- Press `Ctrl + C` in PowerShell

---

## Site Structure (Production Ready)

```
/                           → Root (like domain.com/)
├── index.html             → Homepage
├── guides.html            → Guides overview
├── lxtourguide.html       → Guide detail example
├── tours/                 → Tour pages (to build)
├── docs/                  → Internal documentation
│   └── DOCUMENTATION.html → Searchable doc index
├── css/                   → Stylesheets
├── js/                    → JavaScript
├── images/                → Assets
└── data/                  → JSON data files
```

---

## Navigation

**All pages use same navbar:**
- Guides → `/guides.html`
- Tours → `/tours/` (placeholder)
- Local Partners → `#partners` (placeholder)
- Activities → `#activities` (placeholder)
- Experiences → `#experiences` (placeholder)
- Info → `#info` (placeholder)
- History → `#history` (placeholder)
- 📚 Docs → `/docs/DOCUMENTATION.html` (internal, remove for production)

---

## Deployment Notes

**When deploying to production:**
1. Remove "📚 Docs" link from navbar (line 23 in `js/components/navbar.js`)
2. Keep `/docs/` folder but don't link to it publicly
3. All relative paths work as-is (no changes needed)
4. Upload entire folder structure to domain root

**URLs become:**
- `lisboaporfavor.com/index.html` (or just `/`)
- `lisboaporfavor.com/lxtourguide.html`
- `lisboaporfavor.com/docs/DOCUMENTATION.html` (not linked, direct access only)

---

## Current Status

✅ **Working Pages:**
- Homepage with hero
- LXTourGuide detail page
- Documentation index (searchable)

🟡 **Placeholder Pages:**
- guides.html (exists but empty)

🔴 **To Build:**
- Tour pages
- Admin page
- Other category pages

---

**Server must run from vanilla root for all paths to work correctly!**
