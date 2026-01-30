# 🎯 SOURCE OF TRUTH - Vanilla Project

**Last Updated:** December 31, 2025 - 3:47pm  
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

## 1) Canonical operations (reduce "in my head")

1.1 **Image management (canonical for now)**

1.1.1 Read: `lisboaporfavor-vanilla/images/IMAGE_MANAGEMENT.md`

1.1.2 Status: Keep using it as the working policy while we ship MVP.

1.1.3 TODO (reassess placement): We may later move/merge this into a more appropriate canonical location (Brand vs Tech). For now it stays referenced here.

1.2 **Research + marketing inputs (post-MVP accessible; do NOT archive-only)**

1.2.1 Current source location (legacy but valuable):

1.2.1.1 `lisboaporfavor-bootstrap/data/chrome-links/` (532 bookmarks + categorized lists + `summary.md`)

1.2.1.2 `lisboaporfavor-bootstrap/data/research/` (analysis + proposed structure + action plan)

1.2.2 Target "see later" location (near Vanilla):

1.2.2.1 `lisboaporfavor-vanilla/LBPF_DOC/Research/`

1.2.3 Policy:

1.2.3.1 We keep research accessible for marketing/SM after MVP.

1.2.3.2 We only archive the bootstrap copies after their contents are safely moved/linked from the canonical Vanilla structure.

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

## 🚨 DECEMBER 31, 2025 - LESSONS LEARNED

**Critical Incident:**
- AI deleted folders without permission
- Lost ~326 items including backups
- Violated MASTER_INDEX.md rules

**New Rules Added:**
6. ❌ NEVER DELETE FOLDERS without explicit "DELETE" command
7. ❌ NEVER run destructive commands without permission

**Protocol:**
- ANALYZE ONLY when asked to analyze
- WAIT for explicit command before acting
- UPDATE existing MD files, don't create new ones

---

## 📝 SESSION PROTOCOL

**Every session starts with:**
1. Read MASTER_INDEX.md (root) - **SESSION START PROTOCOL**
2. Read THIS FILE (SOURCE_OF_TRUTH.md) - **PROJECT TRUTH**
3. Read CRITICAL_FILES_INDEX.md - **PROTECTED FILES LIST**
4. Check git log for recent work
5. Report orientation and proceed

**Critical Rules from MASTER_INDEX.md:**
- NEVER DELETE FOLDERS without explicit "DELETE" command
- NEVER run destructive commands without permission
- UPDATE existing MD files, don't create new ones
- MOVE to Previous_Projects_LBPF archive instead of delete

---

## 🔄 2026-01-05 · Consolidation ledger (Bootstrap -> Vanilla)

1. Canonical decision

1.1 `lisboaporfavor-vanilla/` is the only valid LBPF folder for active work.

1.2 Decision record: `lisboaporfavor-vanilla/LBPF_DOC/DECISION_2026-01-05_LBPF_CANONICAL_FOLDER_AND_BOOTSTRAP_ARCHIVE.md`.

2. LBPF docs moved out of `Tobernottobe.eu/`

2.1 `Tobernottobe.eu/LBPF_AUTH_V1.md` -> `lisboaporfavor-vanilla/LBPF_DOC/LBPF_AUTH_V1.md`

2.2 `Tobernottobe.eu/DECISION_2025-11-20_GUIDE_BENTO_TEMPLATE.md` -> `lisboaporfavor-vanilla/LBPF_DOC/DECISION_2025-11-20_GUIDE_BENTO_TEMPLATE.md`

2.3 `Tobernottobe.eu/BRAINSTORM_2025-11-20_GUIDE_CMS_FORM.md` -> `lisboaporfavor-vanilla/LBPF_DOC/BRAINSTORM_2025-11-20_GUIDE_CMS_FORM.md`

3. Bootstrap salvage

3.1 Scripts moved:

3.1.1 `lisboaporfavor-bootstrap/scripts/*` -> `lisboaporfavor-vanilla/scripts/bootstrap/*`

3.2 Images moved:

3.2.1 `lisboaporfavor-bootstrap/public/images/_rawslug/*` -> `lisboaporfavor-vanilla/images/_bootstrap_rawslug/*`

4. Bootstrap archived

4.1 `lisboaporfavor-bootstrap/` -> `Previous_Projects_LBPF/Archive_Bootstrap_Versions/2026-01-05_lisboaporfavor-bootstrap/`

**This is the single source of truth for vanilla project. Update when reality changes.**
