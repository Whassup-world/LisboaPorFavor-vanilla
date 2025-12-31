# 🎯 SOURCE OF TRUTH - Vanilla Project

**Last Updated:** Nov 15, 2025 - 3:47pm  
**Status:** Active Development  
**Project:** LisboaPorFavor Vanilla (Investor Showcase + Guide Training Platform)

---

## 📍 CURRENT PROJECT

**Active Folder:** `D:\Backup and Documents\W\Windsurf\lisboaporfavor-vanilla\`

**Tech Stack:**
- Frontend: Vanilla HTML/CSS/JS (no framework)
- Template: Locked foundation (Nov 15)
- Images: 353 files (guides, tours, assets)
- Deployment: Static hosting ready

**Why Vanilla:**
- ✅ Fast loading (no framework overhead)
- ✅ Easy maintenance
- ✅ Professional template locked
- ✅ Investor-ready showcase
- ✅ Guide training platform foundation

---

## 🎯 PROJECT PURPOSE

**Three-Tier System:**

**1. PUBLIC FACING (Marketing/Teaser)**
- Tour cards: ~10 highlights, map direction only
- Minimal details until booking
- Template-driven (scalable to 15+ tours)

**2. GUIDE TRAINING ACADEMY**
- Students = Tour Guides
- Study theoretical lessons at home
- Access 60+ full tour curricula
- Take practical exams with agents
- Freelance model after certification

**3. AGENCY PARTNERSHIP**
- "Apply with Agent" system
- Agents grant access to content
- Guides work multiple agencies

---

## ✅ COMPLETED WORK

### **Nov 15, 2025:**
- ✅ LXTourGuide detail page (lxtourguide.html)
- ✅ Template locked (navbar, footer, hero, sections)
- ✅ Image management system (IMAGE_MANAGEMENT.md)
- ✅ Multi-agent delegation system (JUNIOR_WORK.md, tasks/)
- ✅ Documentation inventory (48 MDs cataloged)
- ✅ File consolidation into docs/ structure

### **Template Foundation (Locked):**
- Transparent navbar with frosted pills
- Brown #49403C color unity
- 880px content width
- Auto-injection for navbar/footer
- Git restore point: 21b2c11

---

## 📊 CURRENT STATUS

**Pages Built:**
- ✅ index.html (homepage with hero)
- ✅ lxtourguide.html (complete guide detail page)
- 🟡 guides.html (placeholder, needs build)

**Components:**
- ✅ Navbar (locked template)
- ✅ Footer (locked template)
- ✅ Hero section
- ✅ Gallery with lightbox
- ✅ Guide info cards
- ✅ Tour cards
- ✅ Review cards
- ✅ CTA banner (hero style)

**Data Files:**
- ✅ data/guide-lxtourguide.js (complete)
- ✅ data/guides.js (exists)
- ✅ data/tours.js (exists)

---

## 🚀 NEXT PRIORITIES

### **Immediate (This Session):**
1. Build searchable HTML index for docs/
2. Google Reviews integration
3. Calendar/booking system
4. Dual social media strategy (LBPF + guides)

### **Short Term (Next Sessions):**
1. Personal recommendations section
2. QR codes for guide pages
3. Training/qualification/ID display
4. Guides overview page (guides.html)
5. Tour pages (2 flagship examples)

### **Future:**
1. Admin page with CMS tools
2. Link external tools (Google Workspace)
3. Complete guide certification workflow
4. Scale to 15+ tours by end of year

### **Guide/Admin v2 Rebuild Rule (Nov 26, 2025):**
1. The LXT guide page and all Admin/Pocket Admin pages must be rebuilt as **v2** using the current vanilla template + Brand Pack only.
2. **No legacy or prototype code** from earlier projects may be copy-pasted into v2 if it conflicts with the locked template, brand tokens, or current architecture.
3. Old implementations (Bootstrap, jQuery, mixed stacks, Hostinger demos) are allowed **as reference only**; any pattern reused must be re-implemented cleanly against the new standards.
4. Quick CSS/JS shortcuts that bypass `template.css`, `brand-components.css`, or `LBPF_BRAND_PACK.md` are not allowed in v2.

---

## 📁 PROJECT STRUCTURE

```
lisboaporfavor-vanilla/
├── index.html              # Homepage
├── lxtourguide.html       # Guide detail example
├── guides.html            # Guides overview (to build)
├── SOURCE_OF_TRUTH.md     # This file
├── css/
│   ├── template.css       # LOCKED - do not modify
│   ├── guide-page.css     # Guide page specific
│   └── main.css           # Homepage specific
├── js/
│   ├── app.js             # Main init
│   ├── components/        # Navbar, footer (LOCKED)
│   └── pages/             # Page-specific logic
├── data/
│   ├── guides.js          # Guide profiles
│   ├── tours.js           # Tour data
│   └── guide-lxtourguide.js  # Individual guide data
├── images/
│   ├── guides/            # Guide photos
│   ├── tours/             # Tour photos
│   └── _rawslug/          # General assets
├── docs/
│   ├── template/          # UI/design docs
│   ├── architecture/      # System design
│   ├── tasks/             # Task specifications
│   ├── research/          # Analysis & findings
│   ├── archive/           # Old versions
│   ├── JUNIOR_WORK.md     # Multi-agent execution log
│   └── md-inventory.json  # Documentation catalog
└── tasks/
    └── README.md          # Task library for delegation
```

---

## 🎨 BRAND STRICT IMPLEMENTATION (humans + AI)

1. **Brand as master**
   - `docs/LBPF_BRAND_PACK.md` plus the tokens in `css/template.css` are the single source of truth for all visual decisions (colors, radii, shadows, spacing, component primitives).
   - No CSS or HTML in this project may introduce new visual rules that are not defined there as tokens.

2. **Working protocol**
   - Before changing any CSS/HTML, humans and AI must read this file and the Brand Pack.
   - For guide/tour work, start with `css/guide-page.css` and align it to Brand tokens first; only then extend the same system to Admin/Pocket Admin.

3. **AI behaviour**
   - Any AI assistant must treat any value not clearly mapped to a Brand token as a **proposal**, surface it to the human, and apply it only after the Brand Pack has been updated.
   - Quick fixes or ad-hoc styles outside the Brand system are not allowed.

4. **Cascade role & reread discipline**
   - Cascade acts as: expert coder, system architect, business/marketing advisor, and proactive personal advisor to the human owner.
   - At the start of every session, Cascade must reread: this `SOURCE_OF_TRUTH.md`, the current `ACTIVE_SESSION.md` (if present) and any guide/admin plan docs that apply (e.g. `GUIDE_ADMIN_V2_PLAN_2025-11-26.md`, `LBPF_BRAND_PACK.md`).
   - In long sessions, Cascade should periodically re-check these same docs before asking questions, to avoid re-asking anything already documented.

## 🔒 LOCKED FILES (DO NOT MODIFY)

**Template Files:**
- `css/template.css` (navbar, footer, colors)
- `js/components/navbar.js`
- `js/components/footer.js`

**Restore Point:** Git commit 21b2c11  
**Documentation:** `docs/template/TEMPLATE_RESTORE_POINT_NOV15.md`

---

## 💾 GIT STATUS

**Latest Commits:**
- `2e3de2c` - Task #001 complete (documentation inventory)
- `d5c59ec` - Add recommended AI to tasks
- `aa1bd47` - Enhanced Junior AI protocol
- `b1425ee` - Junior AI delegation system
- `1f69fd6` - LXTourGuide page complete
- `21b2c11` - Template foundation locked

**Session backup protocol:**
- At the end of each working session (or when explicitly requested), AI and humans summarise the work done.
- All relevant changes are committed with a clear message and **pushed to the GitHub remote** so GitHub acts as the canonical backup/restore point.

---

## 🔄 MULTI-AGENT SYSTEM

**Senior AI (Windsurf):**
- Architecture & strategy
- File system tasks
- Code generation
- Quality control

**Junior AI (Web):**
- Content writing
- Research & analysis
- Non-file-access tasks

**Communication:** `docs/JUNIOR_WORK.md` (shared control panel)

---

## 📝 SESSION PROTOCOL

**Every session starts with:**
1. Read MASTER_INDEX.md (root)
2. Read THIS FILE (SOURCE_OF_TRUTH.md)
3. Check git log for recent work
4. Report orientation and proceed

---

**This is the single source of truth for vanilla project. Update when reality changes.**
