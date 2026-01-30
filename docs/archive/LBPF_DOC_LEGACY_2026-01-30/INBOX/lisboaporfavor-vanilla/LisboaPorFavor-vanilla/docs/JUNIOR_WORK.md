# Junior AI - Project Execution Log

**Purpose:** Complete audit trail + shared communication channel for multi-agent workflow  
**Format:** Request → Questions → Deliverables → Review → Acceptance  
**Archive:** Tasks older than 30 days moved to `/docs/junior-archive/` with referral

---

## 🤖 JUNIOR AI PROTOCOL

**Your Role:** Execute tasks assigned below with precision and clarity

**How to Operate:**
1. Read task instructions carefully
2. Update status to 🔵 In Progress when you start
3. If you have questions: Add them under "Junior Questions" section
4. When complete: Update status to 🟠 Review Required
5. Report deliverables location and summary

**When Unclear:**
- Do NOT guess or assume
- Add question under "Junior Questions" with format: **Q[number]:** [Your question]
- Senior AI monitors this file and will answer immediately
- Resume work after answer received

**Quality Standards:**
- Be thorough - don't skip files or steps
- Be accurate - double-check file paths and data
- Be clear - summaries must be concise but informative
- Report any errors or issues encountered

---

## ACTIVE TASKS

### TASK #001 - Documentation Scan & Categorization
**Date/Time:** Nov 15, 2025 - 3:05pm  
**Completed:** Nov 15, 2025 - 3:42pm  
**Status:** ✅ Accepted  
**Recommended AI:** Claude Haiku or GPT-4o-mini (data collection task)  
**Executed By:** Senior AI (file access required)

**Objective:**
Scan entire Windsurf folder for markdown files, read each one, extract metadata, and categorize them for building a searchable documentation index.

**Instructions:**
1. Scan `D:\Backup and Documents\W\Windsurf\` recursively for all `.md` files
2. **EXCLUDE these folders:** node_modules, .git, BACKUPS
3. For each .md file found, extract:
   - Filename (just the name, e.g., "README.md")
   - Full absolute path
   - 2-line summary of content (read file, summarize purpose)
   - Last modified date
   - Suggested category: template | architecture | tasks | research | archive
4. Save results as JSON array to: `D:\Backup and Documents\W\Windsurf\lisboaporfavor-vanilla\docs\md-inventory.json`

**JSON Format:**
```json
[
  {
    "filename": "README.md",
    "path": "D:\\Backup and Documents\\W\\Windsurf\\lisboaporfavor-vanilla\\README.md",
    "summary": "Project overview and structure. Quick start guide for vanilla JS implementation.",
    "lastModified": "2025-11-15",
    "category": "architecture"
  }
]
```

**Categorization Guide:**
- **template**: UI design, navbar, footer, styling decisions
- **architecture**: Project structure, tech decisions, system design
- **tasks**: Task specs, how-to guides, execution instructions
- **research**: Analysis, findings, competitor research
- **archive**: Old versions, deprecated docs, backups

**Deliverables:**
✅ **File:** `D:\Backup and Documents\W\Windsurf\lisboaporfavor-vanilla\docs\md-inventory.json`  
✅ **Total Files:** 48 markdown files scanned and categorized  
✅ **Categories:** 5 categories used (template, architecture, tasks, research, archive)  
✅ **Format:** Valid JSON array with all required fields

**Senior Review:**
✅ **Quality:** Excellent - all files categorized appropriately  
✅ **Accuracy:** File paths verified, summaries clear and concise  
✅ **Completeness:** All .md files in scope captured  
✅ **Format:** JSON structure valid and ready for HTML index builder  

**Notes:**
- Task required file system access, executed by Senior AI instead of Junior
- Bootstrap project docs (Oct 27) marked as archive (outdated)
- Vanilla project has minimal docs currently
- Ready for next step: Build searchable HTML index from this JSON

### TASK #002 - Guide/Admin v2 Rebuild · Multi-AI Workflow
**Date/Time:** Nov 26, 2025 - 1:15pm  
**Status:** 🟡 Requested  
**Recommended AI:**
- Senior: Windsurf Cascade (file access, architecture)
- Junior: Web-based assistant (content-only, no file access), e.g. Claude Haiku, GPT-4o-mini, or GPT-5.1 Codex Low/mini

**Objective:**
Design and implement a **clean v2 rebuild** for the LXT public guide page **and** the non-public Admin/Pocket Admin that:
1. Uses **new files and new code** for v2 (`lxtourguide-v2.html`, `admin-v2.html`, `guide-admin-v2.html` and related CSS/JS), built on the vanilla template and `LBPF_BRAND_PACK.md`.
2. Treats all legacy/Bootstrap/experimental code as **reference only** (no copy-paste of conflicting or prototype code into v2 files).
3. Centres the **Admin** role (HQ + guide/agent views) in the architecture from the start, so public + admin are designed as one system, not separate prototypes.

**Docs Junior MUST read before asking questions:**
- `lisboaporfavor-vanilla/docs/LBPF_BRAND_PACK.md`
- `lisboaporfavor-vanilla/docs/GUIDE_ADMIN_V2_PLAN_2025-11-26.md`
- `lisboaporfavor-bootstrap/MASTER_BUSINESS_BLUEPRINT.md`

**Workflow Protocol:**
1. **Senior AI (planning phase)**
   - Drafts a clear, step-by-step rebuild plan (sections, components, data flows, auth touchpoints).
   - Produces concrete prompts/instructions that a Junior AI could follow.
2. **Junior AI (review & Q&A phase)**
   - Reads the Senior plan **before any coding happens**.
   - Adds questions under a `Junior Questions` heading using format: `Q1, Q2, ...`.
   - Challenges unclear assumptions, missing edge cases, and risks (especially around Admin/guide/agent overlap).
3. **Senior AI (clarification phase)**
   - Answers each Junior question inline.
   - Updates the plan where needed so both AIs agree on scope and approach.
4. **Human approval (final gate)**
   - You review the final plan + Q&A.
   - Only after you explicitly mark it **"Approved for coding" with date** may any AI start editing HTML/CSS/JS files.

**Deliverables:**
1. Dated plan document in `docs/` (or within this file) summarising:
   - Page structure for guide/admin v2.
   - Component list mapped to Brand Pack tokens.
   - Data dependencies (what will later come from Supabase vs static JSON).
2. Q&A log between Senior and Junior AIs, captured in markdown.
3. Explicit approval note from you (date + short comment) before implementation starts.

**Acceptance Criteria:**
- Plan is **implementable without guessing** (any competent dev could follow it).
- All major Admin/guide/agent overlaps are identified and handled.
- No instructions rely on reusing conflicting legacy code.
- Approval note from you is recorded and linked to this task.

#### Junior Questions – 2025-11-26 (GPT-5.1 Codex Low/mini)

Summary (Junior view of v2 goals):
1. Apply the LBPF Brand Pack consistently across public guide and admin surfaces on a single vanilla stack.
2. Build a balanced hero card (~1/3 avatar, ~1/3 text, ~1/3 logo) with a circular avatar and clear mobile layout rules.
3. Treat mobile as baseline: no horizontal page scroll, single-column tiles, and thumb-friendly CTAs.
4. Use a structured bento tile band (Bio, Reviews, Tours, Availability, Favourites, Gallery/Photobook, Social/Contact) with accordion behaviour.
5. Fix the gallery tile so it shows full thumbnails, supports at least 6 images, and can grow without breaking layout.
6. Provide an HQ Admin overview dashboard with tiles for Today, People, Tours/Inventory, Bookings, Brand & media, and Settings.
7. Restrict Pocket Admin to safe mobile operations only, while HQ Admin handles high-risk changes.
8. Introduce commerce placeholders (Bokun/Stripe/manual) in the data model and CTAs without yet implementing full billing.
9. Align hero/footer behaviour, gallery, and mobile layout with explicit acceptance criteria.
10. Keep all docs in sync so AIs and humans share the same plan before coding.

Junior Questions:
Q1: For the mobile hero, do we need fixed pixel sizes (e.g. avatar/logo width, hero card height), or is it enough to follow proportional guidance with CSS breakpoints?
Q2: The hero tag pills stay inside the card—should they appear in one or two rows, and do we preserve current Brand Pack color assignments for each tag type?
Q3: When more than six images are present in the gallery tile, should it scroll horizontally (swipe row) or expand vertically into additional rows?
Q4: Should gallery thumbnails retain original aspect ratios exactly (no cropping) or be normalized (e.g. fixed aspect ratio) even if that crops edges slightly?
Q5: When guides edit profile snippets or availability in Pocket Admin, do those changes go live immediately or wait for HQ Admin approval?
Q6: For the "tours qualified for" reminder in HQ Admin, do we show only title + short summary, or also include status badges (Active/Pending, etc.)?
Q7: Before Bokun/Stripe go live, what should the primary "Book" CTA do—open a mailto, an on-site request form, or a configurable placeholder page?
Q8: Where should we document the mapping between LBPF products and Bokun/Stripe IDs—in a new `LBPF_COMMERCE_MODEL_V1.md` file or appended to the existing business blueprint?
Q9: Step 1 instructions still feel vague—should Junior begin with an audit of current `lxtourguide.html` + `guide-page.css` to map gaps against the approved v2 plan, and what exact output do you expect from that audit?

#### Senior Answers – 2025-11-26 (Cascade)

A1: No fixed pixel sizes for hero elements. Use proportional layout and CSS breakpoints (desktop vs mobile) with sensible minimum sizes (e.g. avatar/logo not smaller than a comfortable tap target), but avoid hard-coded heights that make the hero brittle on different phones.

A2: Aim for **one to two rows** of pills inside the hero on both desktop and mobile; allow wrapping but avoid more than two dense rows. Keep the existing Brand Pack color assignments for each tag type (ID, Partner, Languages, Local Expert, etc.) so the semantics stay consistent.

A3: Prefer **vertical expansion into additional rows** over horizontal scrolling for the gallery tile, to stay aligned with the "no horizontal scroll" comfort rule on mobile. Show at least one full row of up to six thumbnails; if there are more images, they wrap into a second (or third) row inside the tile.

A4: Thumbnails should **retain original aspect ratio**, scaled down to fit within a shared max height so heads and important content are not cropped. No aggressive cropping; minor letterboxing/padding is acceptable inside the tile to keep the grid tidy.

A5: Guide edits to personal fields and availability in Pocket Admin can go **live immediately**, but they should be limited in scope and logged so HQ Admin can review changes later. We do not introduce an approval queue in v2; heavy-weight approvals are a future enhancement.

A6: For each "tours qualified for" entry in HQ Admin, show **title + short summary + a small status badge** (e.g. Active, Paused, Draft/Pending). Status comes from the tour data model; editing those statuses remains an HQ Admin action.

A7: Before Bokun/Stripe are live, the primary "Book" CTA should open a **simple on-site request form/modal** (not a mailto) that collects contact details and desired date/time, then creates a request/booking record and notifies Admin/guide by email. This keeps the experience on LBPF and is easy to reroute to Bokun/Stripe later.

A8: Create a dedicated `LBPF_COMMERCE_MODEL_V1.md` in `lisboaporfavor-vanilla/docs/` for the detailed mapping between LBPF products and Bokun/Stripe IDs (plus rules, examples). The Master Business Blueprint remains the high-level vision; the commerce model file is the operational spec that AIs and humans should follow.

A9: Yes—Step 1 is a structured audit. Junior should review `lxtourguide.html`, `guide-page.css`, and related JS, then produce a concise gap checklist inside this task (or linked doc) covering: hero layout differences, tile behaviour, gallery limits, footer alignment, and missing commerce placeholders. That checklist becomes the blueprint for the editing pass so no changes happen without a mapped plan.

#### Step 1 – Gap checklist (Senior · 2025-11-26)

1. **Hero layout vs v2 spec**  
   - Current desktop split is still roughly 70/30 between `.guide-bento-main-left` and `.guide-bento-logo-block` (via base + `@media (min-width: 769px)`), not yet the more balanced ~1/3 avatar, ~1/3 text, ~1/3 logo feel described in the v2 plan.  
   - Mobile hero keeps a row-based layout and old copy: tagline remains the longer "Local expert for Alfama, Belem and Lisbon by foot or by bike.", rating shows `4.9 · 120 reviews`, and the hero tags row plus review pill are not yet arranged as: centered `LXtourguide` name, unified tagline "Your local guide for the Lisbon Area", `★★★★★ 5.0 · 20 reviews`, hero tags clearly inside the hero card, and `See my bio` / `See all reviews` pills grouped near the bottom edge of the hero card.  
   - Avatar element uses equal width/height and `border-radius: 50%`, so it is structurally circular; visual issues on devices are more about spacing and layout than the underlying shape.

2. **Tiles band & accordion behaviour**  
   - `lxtourguide.html` already defines tiles: About, Reviews, Tours, Availability, Rewards, Favourites, Gallery, Social/Contact, and JS enforces one-open-at-a-time accordion behaviour; this matches the general pattern in the v2 plan.  
   - `bento-grid` is a single column by default and also remains a single column on narrow mobile via media rules, which matches the mobile baseline.  
   - Tile labels and titles match the intended wording (e.g. "See my bio", "See my guest reviews", "See my tours", "See my available dates", "See my favourite spots", "See my gallery"), so no major renaming is required.

3. **Gallery tile & photobook behaviour**  
   - Data file `guide-lxtourguide.js` supplies 6 images, but `populatePhotobookTile` in `guide-bento-lxtourguide.js` slices to `data.images.slice(0, 3)`, so only 3 thumbnails are rendered. The v2 plan expects at least 6 visible, and room for more.  
   - CSS for `.bento-photobook-photo img` uses a fixed `height: 72px` with `object-fit: cover`, which can crop heads and key content; the spec requires full thumbnails that respect original proportions (letterboxing/padding is acceptable).  
   - Layout is a fixed 3-column grid with no logic for additional rows or scroll when more than 3 images exist; we need a layout that comfortably shows 6+ images and can expand to additional rows or a scrollable strip without breaking the tile.

4. **Booking tile & commerce placeholders**  
   - The Availability tile currently offers a calendar, guest/children inputs, time-of-day pills and a "Request confirmation / info" button. The JS builds a human-readable confirmation line in-place but does **not** collect contact details, create a structured booking/request record, or send any notification email.  
   - Tour objects in `guide-lxtourguide.js` do not yet include `external_system`, `external_product_id` / `external_url`, or `pricing_strategy` fields as defined in Section 8 of the v2 plan.  
   - CTAs like "See available dates" (per tour) and the tile-level request button are close to the desired pre-Bokun behaviour but should be aligned with a single clear "Book / Request" path that we can later rewire to Bokun/Stripe using the new commerce model.

5. **Footer alignment & mobile columns**  
   - `lxtourguide.html` uses `<div id="footer-placeholder"></div>` with `footer.js` injecting the shared footer. `guide-page.css` sets background/box-shadow overrides for `.lbpf-guide-bento-page footer` but does not adjust inner footer content to the 880px / 816px content frame.  
   - Known issue from your feedback: footer columns (GENERAL / LEGAL / RELATIONS / PAYMENTS) feel pushed too far left versus the main template. We will need to refine the footer component/template so content lines up with the same grid and uses at least two columns/blocks side by side on mobile where space allows.

6. **Admin & Pocket Admin status**  
   - This audit confirms that `admin-v2.html` / `guide-admin-v2.html` do **not** yet exist in `lisboaporfavor-vanilla`; there is no conflicting v2 admin layout to migrate.  
   - HQ Admin and Pocket Admin will therefore be created cleanly in Phase A using the v2 plan (overview tiles, safe mobile operations) without reusing legacy admin UIs.

7. **Auth & navigation placeholders**  
   - The current LXTourguide page does not expose non-functional "Sign in" / "Dashboard" entry points pointing to `/app` or `/admin-v2.html` in the navbar/footer as described in Section 5.  
   - These will be added at template level during implementation so that public pages remain static but provide clear entry points into the future Supabase-backed app.

****Approved for coding – 2025-11-26 – [LBPF Admin]
****

---

### TASK #003 - LXT Public Page + Admin Dashboard Rebuild (v2 Implementation)
**Date/Time:** Nov 27, 2025 - 2:11pm  
**Status:** 🟡 Requested  
**Recommended AI:**
- Senior: Windsurf Nova (architecture, CSS refinement, hero layout)
- Junior: Web-based assistant (HTML content, tile updates, form logic)

**Objective:**
Implement detailed refinements to `lxtourguide-clean.html` and `admin-guide.html` based on user visual feedback (reference image provided). Rebuild hero layout, fix tile spacing, refine content tiles (8 tiles total), and prepare admin dashboard for guide management.

**Key Requirements from User Feedback:**

**LXT Public Page:**
1. **Hero Layout (3-column grid):**
   - Avatar (centered, ~100-120px) | Text Block (centered) | Logo (centered, similar size)
   - Mobile: stack vertically (Avatar → Text → Logo)
   - All sections horizontally centered

2. **Tile Spacing:**
   - Add gap between hero and tile grid (currently touching)
   - Review pill color: verify yellow matches official review site branding

3. **Content Tiles (8 total, bottom to top):**
   - **Tile 8 (Social):** Contact block (email + WhatsApp, masked, no personal info) + social media links
   - **Tile 7 (Gallery):** Fix image heights (use original aspect ratios, no hard crop), show all 6 images, prepare for 12+
   - **Tile 6 (Photobook):** New tile - post-tour digital highlights with sample images + affiliate upsell
   - **Tile 5 (Availability):** Redesign booking form with specific time ranges (AM 08:30-12:00, PM 13:00-17:30, Evening 19:00-22:30, Private full day), guest/children selectors, login requirement, clear form after send
   - **Tile 4 (Rewards):** Keep as placeholder
   - **Tile 3 (Favourites):** Keep as is
   - **Tile 2 (Reviews):** Convert to 3-column grid (desktop), content grows vertically, match official review site style
   - **Tile 1 (Bio):** Sober style, optional image/drawing, editable in admin

4. **Mobile Responsiveness:**
   - Fully functional on small screens
   - No horizontal scroll
   - Thumb-friendly CTAs

**Admin Dashboard:**
1. **Same UI/UX as LXT:** Expandable tiles, same dimensions
2. **No hero image/background:** Use whitish brand background
3. **All tiles editable:** Content, images, availability, etc.
4. **Tile-specific features:**
   - Availability: Set red unavailable dates with diagonal line through them
   - Tours: Link to LBPF main page, optional affiliate upsell
   - Photobook: Upload/manage photos with consent workflow
   - Profile: Edit guide info
   - Operations: Edit contact, meeting points, tour type
5. **Guide Login:** QR code for guides to show clients (no need to type URL)

**Docs to Reference:**
- `LBPF_BRAND_PACK.md` (colors, spacing, typography)
- `GUIDE_ADMIN_V2_PLAN_2025-11-26.md` (hero proportions, tile structure)
- `TASK_003_LXT_ADMIN_REBUILD.md` (detailed execution plan with 6 user questions)

**Workflow:**
1. **Junior AI (review phase):**
   - Read `TASK_003_LXT_ADMIN_REBUILD.md` (detailed plan)
   - Add questions under "Junior Questions" if anything is unclear
   - Do NOT start coding until Senior answers all questions

2. **Senior AI (clarification phase):**
   - Answer each Junior question inline
   - Update plan if needed

3. **Implementation (after approval):**
   - Phase 1: Hero layout fix (30 min)
   - Phase 2: Tile content refinement (1 hour)
   - Phase 3: Admin page build (1.5 hours)
   - Phase 4: Auth placeholder (30 min)

**Deliverables:**
1. Updated `lxtourguide-clean.html` with refined hero + tiles
2. Updated `admin-guide.html` with editable tiles + QR code
3. Updated `css/guide-page.css` with hero grid, tile spacing, gallery fixes
4. Test report: mobile responsiveness (iPhone 12, iPad)

**Acceptance Criteria:**
- Hero matches reference image proportions
- All 8 tiles render correctly (mobile + desktop)
- Gallery shows all 6 images with original aspect ratios
- Booking form shows time ranges + login requirement
- Reviews use a horizontal carousel on desktop (scrollable row) and a vertical stack on mobile, rendered inside the Reviews tile from local data only (no external widgets yet)
 - Small-screen spec: on screens  3c= 768px review cards are full-width inside the content frame, with 1216px inner padding, minimum tap height ~72px, and no horizontal scroll (pure vertical stack)
- Admin tiles editable with save/approval buttons
- QR code generates and prints
- No horizontal scroll on mobile
- Brand compliance verified

**User Decisions – 2025-11-27 (for TASK #003):**
- **Q1 – Contact channel:** For now implement a placeholder contact tile with a choice between WhatsApp or Email, showing a simple message form with sender info and an auto-reply text. No real forwarding yet; this is for visual/UX inspection only.
- **Q2 – Photobook / upsell ownership:** Logged-in clients are dedicated to this guide for 10 days. Any upsell / photobook actions in that window should be attributed to the guide and written to a logfile placeholder (front-end stub only in v1).
- **Q3 – Links / upsell scope:** Tile 0 and upsell links must stay strictly inside the LBPF main + guide pages (no external domains). Link to main-site sections for museums, tickets, transport, restaurants, etc.; no linking outside MAIN and/or GUIDE allowed.
- **Q4 – Reviews layout:** On desktop, reviews should use a horizontal carousel-style layout (scrollable row). Mobile can keep a vertical stack. Tours will use a separate pattern later.
- **Q5 – Photobook images:** For now use existing guide images (from the gallery) as the sample photobook content. Later, additional dedicated images can be uploaded by the guide.
- **Q6 – Implementation timeline:** Implementation is continuous (all phases in one coding pass), not split into separate sprints.
  
**V2 Front-end Only Note:** For TASK #003, all new components are V2 front-end UI only. Links use internal LBPF main/guide routes as placeholders without real integrations yet, and only LBPF Admin is allowed to prepare or modify these link destinations (guides cannot configure external links).

#### Junior Questions – [Optional]

*Junior AI can add extra questions here after reading `TASK_003_LXT_ADMIN_REBUILD.md` if anything is still unclear.*

#### Senior Approval – 2025-11-27

*TASK #003 is **Approved for coding** – 2025-11-27 – [LBPF Admin]. Senior AI will log any further clarifications here during review.*

---

## COMPLETED TASKS

*Accepted tasks will appear here for 30 days before archiving*

---

## ARCHIVED TASKS

*Tasks moved to `/docs/junior-archive/` after 30 days*

### TASK #XXX - [Task Name] [Date]
**Status:** ✅ Accepted  
**Archive Location:** `/docs/junior-archive/TASK_XXX_[name].md`  
**Quick Summary:** [1-line summary]

---

## STATUS LEGEND

- 🟡 Requested (sent to Junior AI)
- 🔵 In Progress (Junior AI working)
- 🟠 Review Required (deliverables submitted)
- ✅ Accepted (reviewed and approved by Senior)
- 🔴 Rejected (needs revision - reason provided)
