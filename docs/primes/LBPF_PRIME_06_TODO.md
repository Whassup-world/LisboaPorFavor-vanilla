**START METADATA**

1.0.1  Metadata Field           Prime 06 - TODO and Task Management
1.0.2  Title                    LBPF_PRIME_06_TODO.md
1.0.3  Version                  V1.0.0
1.0.4  Version History          2026-01-31: Initial creation following TOBE Prime structure
1.0.5  Date Modified            2026-01-31 @ 13.42 hour
1.0.6  Date Created             2026-01-31 @ 13.42 hour
1.0.7  File Type                MD
1.0.8  Tags                     prime, todo, tasks, knowledge-extraction, lbpf
1.0.9  Description              TODO inbox for LBPF project. Tracks knowledge extraction from archived Bootstrap files and ongoing tasks.
1.0.10 Source                   USER
1.0.11 Confidentiality Level    INTERNAL
1.0.12 Owner                    USER
1.0.13 Canonical path           lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_06_TODO.md
1.0.14 Local mirror             (optional)
1.0.15 Remote mirror            GitHub: Whassup-world/LisboaPorFavor-vanilla

**END METADATA**

---

2.0.0  INBOX

2.0.1  Knowledge extraction in progress: consolidating 12 months of research from Bootstrap archives into canonical LBPF docs
2.0.2  Goal: Extract all valuable knowledge, update canonical docs, archive old files when fully extracted

2.0.3  DEFAULTS
2.0.4  Max age: 7 days (review and process or defer)
2.0.5  Priority: HIGH for knowledge extraction (prevents knowledge loss)

---

3.0.0  KNOWLEDGE EXTRACTION TASKS

3.1.0  TODO ITEM
3.1.1  Title: Extract MASTER_BUSINESS_BLUEPRINT.md knowledge to LBPF_BUSINESS_PLAN.md
3.1.2  Source: Previous_Projects_LBPF/Archive_Bootstrap_Versions/2026-01-05_lisboaporfavor-bootstrap/MASTER_BUSINESS_BLUEPRINT.md
3.1.3  Destination: docs/core/LBPF_BUSINESS_PLAN.md
3.1.4  Content to extract:
3.1.5  - SEO strategy (keywords, content pillars: food, history, street art)
3.1.6  - Social media strategy (Instagram calendar, engagement tactics, "Tour guide's perspective")
3.1.7  - Content strategy ("Day Trip Tuesday" series, transportation guides, photo galleries)
3.1.8  - Tour route documentation (5 bike tours, segway tours)
3.1.9  - Monthly planning framework
3.1.10 Priority: HIGH
3.1.11 Created: 2026-01-31
3.1.12 Due by: 2026-02-07
3.1.13 Lane: COMPLETED (2026-01-31)

3.2.0  TODO ITEM
3.2.1  Title: Sync "Write Once Fill All" rule to TOBE Prime 01
3.2.2  Description: New global rule added to LBPF_PRIME_01 section 3.5.0 must be synced to TOBE project
3.2.3  Action: Add identical rule to TOBE_PRIME_01_GLOBAL_RULES.md
3.2.4  Rationale: Cross-project consistency - this is a universal workflow rule
3.2.5  Priority: MEDIUM
3.2.6  Created: 2026-01-31
3.2.7  Due by: 2026-02-07
3.2.8  Lane: INBOX

3.2.0  TODO ITEM
3.2.1  Title: Scan Archive_Bootstrap_Versions for additional valuable knowledge files
3.2.2  Source: Previous_Projects_LBPF/Archive_Bootstrap_Versions/
3.2.3  Action: Identify all MD files with business/brand/technical knowledge
3.2.4  Add extraction tasks for each valuable file found
3.2.5  Priority: HIGH
3.2.6  Created: 2026-01-31
3.2.7  Due by: 2026-02-07
3.2.8  Lane: INBOX

3.3.0  TODO ITEM
3.3.1  Title: Clean up git status (deleted PNGs, untracked template folder)
3.3.2  Problem: Git shows deleted cancelation policy PNGs and untracked docs/template/ folder
3.3.3  Action: Stage deletions, investigate template folder, commit cleanup
3.3.4  Priority: MEDIUM
3.3.5  Created: 2026-01-31
3.3.6  Due by: 2026-02-01
3.3.7  Lane: INBOX

3.4.0  TODO ITEM
3.4.1  Title: Replace 3 Placeholder Hero Images with Professional Lisbon Photos
3.4.2  Description: CRITICAL - Replace placeholder images in hero-config.json with high-quality professional Lisbon photography
3.4.3  Current placeholders: Parc-Eduardo.jpg (used 2x), cais-das-colunas-view.webp
3.4.4  Required: 3 unique professional photos showcasing different Lisbon scenes
3.4.5  Actions:
3.4.6  - Source/shoot 3 professional Lisbon photos (Alfama, Belém, Tram 28 or similar iconic scenes)
3.4.7  - Optimize images: WebP format + JPEG fallback, <200KB each
3.4.8  - Update hero-config.json with new image paths and proper alt text
3.4.9  - Test carousel rotation on multiple devices
3.4.10 Priority: CRITICAL
3.4.11 Created: 2026-01-31
3.4.12 Due by: 2026-02-07 (MAX DATE - OVERRIDES 72-HOUR RULE)
3.4.13 Lane: INBOX
3.4.14 Blocker: MVP cannot launch with placeholder images
3.4.15 Reference: /data/hero-config.json

3.4.16 TODO ITEM
3.4.17 Title: Hero Image System - MVP Implementation (End Feb 2026)
3.4.18 Description: Implement dynamic hero image system for guide pages with carousel and mobile-first design
3.4.19 Actions:
3.4.20 - Create /data/hero-config.json with 7 daily rotation images
3.4.21 - Create /js/hero-manager.js with carousel logic (3-5 images, 8s intervals, fade transitions)
3.4.22 - Update lxtourguide.html to use dynamic hero system
3.4.23 - Add CSS for smooth transitions and overlays
3.4.24 - Test mobile responsiveness (320px, 481px, 769px, 1025px, 1440px+)
3.4.25 - Optimize images (WebP + JPEG fallback, <200KB each)
3.4.26 Priority: HIGH
3.4.27 Created: 2026-01-31
3.4.28 Due by: 2026-02-28 (MVP Launch)
3.4.29 Lane: INBOX
3.4.30 Reference: LBPF_TOOLS_AND_SPECS.md section 0.0.0

3.5.0  TODO ITEM
3.5.1  Title: Hero Image System - Phase 1 (March 2026 - First Client Tour)
3.5.2  Description: Add dynamic overlays and UGC workflow for first tour
3.5.3  Actions:
3.5.4  - Implement dynamic overlay system for offers/promotions
3.5.5  - Create UGC submission workflow (guide tour reports)
3.5.6  - Build client photo album generation (manual process)
3.5.7  - Add structured data markup for SEO
3.5.8  Priority: MEDIUM
3.5.9  Created: 2026-01-31
3.5.10 Due by: 2026-03-15
3.5.11 Lane: INBOX
3.5.12 Reference: LBPF_TOOLS_AND_SPECS.md section 0.5.0

3.6.0  TODO ITEM
3.6.1  Title: Hero Image System - Phase 2 (Q2 2026)
3.6.2  Description: Add video backgrounds and AI-powered photo sorting
3.6.3  Actions:
3.6.4  - Implement video background support (desktop only, mobile fallback to images)
3.6.5  - Build AI-powered photo sorting (A: Website, B: Social Media, C: Client Albums)
3.6.6  - Automate photo album generation
3.6.7  - Add A/B testing for hero effectiveness
3.6.8  Priority: LOW
3.6.9  Created: 2026-01-31
3.6.10 Due by: 2026-06-30
3.6.11 Lane: DEFERRED
3.6.12 Reference: LBPF_TOOLS_AND_SPECS.md section 0.5.0

3.7.0  TODO ITEM
3.7.1  Title: Document Admin Rights vs Guide Rights + Penalty System
3.7.2  Description: Define access control hierarchy and guide moderation system
3.7.3  Key Concepts:
3.7.4  - Guide pages are ONE page with public/private views (not separate pages)
3.7.5  - Admin has TOTAL rights (can override any guide changes)
3.7.6  - Guide admin has LIMITED rights (tagline, bio, tours, availability only)
3.7.7  - Penalty system: Warning → Yellow Card → Red Card
3.7.8  - Yellow Card: Admin must take site offline or block guide
3.7.9  - Red Card: Same as yellow (guide blocked from platform)
3.7.10 - Guides can "wander off" or break community guidelines
3.7.11 Actions:
3.7.12 - Document in LBPF_PRIME_02_RULES_AND_ROLES.md
3.7.13 - Create penalty system workflow
3.7.14 - Define community guidelines for guides
3.7.15 - Add admin override UI in admin.html
3.7.16 Priority: HIGH
3.7.17 Created: 2026-01-31
3.7.18 Due by: 2026-02-14
3.7.19 Lane: INBOX
3.7.20 Reference: Admin rights hierarchy

3.8.0  TODO ITEM
3.8.1  Title: Implement Login System for Public/Private Page Views
3.8.2  Description: Guide pages need authentication to switch between public view and admin edit mode
3.8.3  Current State: Guide pages are conceptually 1 page with 2 views (public vs private/admin)
3.8.4  Required:
3.8.5  - Login system for guides to access admin-guide.html
3.8.6  - Login system for LBPF admin to access admin.html
3.8.7  - Session management (who is logged in, what role)
3.8.8  - Role-based access control (Guide vs Admin)
3.8.9  - Redirect logic (public → login → admin view)
3.8.10 Actions:
3.8.11 - Design login UI (simple email/password or OAuth)
3.8.12 - Implement authentication backend (future: Node.js + JWT)
3.8.13 - Add session storage (localStorage for MVP, database later)
3.8.14 - Create role-based routing logic
3.8.15 - Add "Edit Mode" toggle for logged-in guides on lxtourguide.html
3.8.16 Priority: CRITICAL
3.8.17 Created: 2026-01-31
3.8.18 Due by: 2026-02-07 (MOVED UP - guides need to test)
3.8.19 Lane: INBOX
3.8.20 Blocker: Cannot launch MVP without guide login
3.8.21 Blocker: First batch of guides need to "play" with system
3.8.22 Reference: Authentication system design

3.9.0  TODO ITEM
3.9.1  Title: Major Admin.html Overhaul (DEFERRED until LX + admin-guide complete)
3.9.2  Description: Complete redesign of admin.html to match brand standards and professional quality
3.9.3  Current Critical Issues:
3.9.4  - Navbar has different vertical dimensions on several pages (causes page "hop")
3.9.5  - Very simplistic UI (not brand-conformant)
3.9.6  - Guide onboarding looks cheap and unprofessional
3.9.7  - Logo was invisible (fixed: removed border-radius: 999px)
3.9.8  Missing Features:
3.9.9  - Brand management section
3.9.10 - CSM (Customer Success Management) tools
3.9.11 - Social Media calendar
3.9.12 - Communication hub (email, chat, WhatsApp integration)
3.9.13 - Note: Google Workspace + own domain + pro hosting (Hostinger) available
3.9.14 Actions (DEFERRED):
3.9.15 - Fix navbar height consistency across all pages
3.9.16 - Redesign UI to match LBPF_BRAND_PACK.md standards
3.9.17 - Redesign guide onboarding flow (professional quality)
3.9.18 - Add Brand management section
3.9.19 - Add CSM tools and workflows
3.9.20 - Add Social Media calendar integration
3.9.21 - Add Communication hub (email/chat/WhatsApp)
3.9.22 - Integrate Google Workspace + Hostinger services
3.9.23 Priority: HIGH (but DEFERRED)
3.9.24 Created: 2026-01-31
3.9.25 Due by: TBD (after lxtourguide + admin-guide completion)
3.9.26 Lane: DEFERRED
3.9.27 Note: User wants to finish LX + admin-guide first, then move to main page and admin.html
3.9.28 Note: All 3 pages (lxtourguide, admin-guide, admin) must work together flawlessly
3.9.29 Reference: admin.html, LBPF_BRAND_PACK.md

3.10.0 TODO ITEM
3.10.1 Title: Implement Tour Categorization & Indexing System
3.10.2 Description: Create structured tour categorization for better navigation and SEO
3.10.3 Current State: Tours now have category labels (e.g., "Walking tour – Food, market & culture")
3.10.4 Required:
3.10.5 - Define tour categories: Walking tours, Bike tours, E-bike tours, Custom tours
3.10.6 - Add subcategories: Food & culture, Monuments & riverside, Hills & viewpoints, etc.
3.10.7 - Create tour index/catalog page listing all tours by category
3.10.8 - Add filtering/sorting by category, duration, group size
3.10.9 - Implement SEO-friendly URL structure (e.g., /tours/walking/alfama-food-culture)
3.10.10 Actions:
3.10.11 - Design tour taxonomy (categories, subcategories, tags)
3.10.12 - Create tour index page (tours.html or tours-catalog.html)
3.10.13 - Add category metadata to tour landing pages
3.10.14 - Implement filtering UI on tour index
3.10.15 - Add structured data markup for tours (schema.org/TouristTrip)
3.10.16 Priority: MEDIUM
3.10.17 Created: 2026-01-31
3.10.18 Due by: 2026-02-14
3.10.19 Lane: INBOX
3.10.20 Reference: Tour categorization system

3.11.0 TODO ITEM
3.11.1 Title: Add Breadcrumb Navigation System
3.11.2 Description: Implement breadcrumb navigation for better UX and SEO
3.11.3 Current State: No breadcrumb navigation on any pages
3.11.4 Required:
3.11.5 - Add breadcrumbs to all tour landing pages
3.11.6 - Add breadcrumbs to guide pages
3.11.7 - Format: Home > Tours > [Category] > [Tour Name]
3.11.8 - Example: Home > Tours > Walking Tours > Alfama Vintage Market Walking tour with tastings
3.11.9 Actions:
3.11.10 - Design breadcrumb component (HTML + CSS)
3.11.11 - Add breadcrumb to tour landing page template
3.11.12 - Add breadcrumb to guide page template
3.11.13 - Implement breadcrumb structured data (schema.org/BreadcrumbList)
3.11.14 - Ensure mobile-responsive breadcrumb design
3.11.15 Priority: MEDIUM
3.11.16 Created: 2026-01-31
3.11.17 Due by: 2026-02-14
3.11.18 Lane: INBOX
3.11.19 Reference: Breadcrumb navigation

---

4.0.0  ACTIVE

4.0.1  None (waiting for user direction)

---

5.0.0  DEFERRED

5.0.1  None

---

6.0.0  DONE

6.0.1  2026-01-30: Moved nested duplicate folder to archive
6.0.2  2026-01-30: Created TOBE-matching Prime structure (3 Primes + 2 Core)
6.0.3  2026-01-30: Cleaned up root folder (garbage, bento, tasks to archive)
6.0.4  2026-01-30: Committed and pushed all cleanup to GitHub

---

7.0.0  ARCHIVE FOLDERS TO PROCESS

7.1.0  Previous_Projects_LBPF/Archive_Bootstrap_Versions/2026-01-05_lisboaporfavor-bootstrap/
7.1.1  Status: Contains MASTER_BUSINESS_BLUEPRINT.md (extraction pending)
7.1.2  Other files: TBD (needs scan)

7.2.0  Previous_Projects_LBPF/Archive_Bootstrap_Versions/lisboaporfavor-bootstrap-backup-oct-23-2025/
7.2.1  Status: Not yet scanned
7.2.2  Action: Scan for valuable knowledge files

7.3.0  lisboaporfavor-vanilla/docs/archive/LBPF_DOC_LEGACY_2026-01-30/
7.3.1  Status: Already processed (decision files absorbed into Primes)
7.3.2  Action: None (complete)

---

8.0.0  LINKS

8.1.0  PRIMES
8.1.1  docs/primes/LBPF_PRIME_01_GLOBAL_RULES.md
8.1.2  docs/primes/LBPF_PRIME_02_RULES_AND_ROLES.md
8.1.3  docs/primes/LBPF_PRIME_03_SOURCE_OF_TRUTH.md

8.2.0  CORE
8.2.1  docs/core/LBPF_BRAND_PACK.md
8.2.2  docs/core/LBPF_BUSINESS_PLAN.md

---

**End**

---
