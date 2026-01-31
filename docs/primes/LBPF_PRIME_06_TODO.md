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
3.4.1  Title: Hero Image System - MVP Implementation (End Feb 2026)
3.4.2  Description: Implement dynamic hero image system for guide pages with carousel and mobile-first design
3.4.3  Actions:
3.4.4  - Create /data/hero-config.json with 7 daily rotation images
3.4.5  - Create /js/hero-manager.js with carousel logic (3-5 images, 8s intervals, fade transitions)
3.4.6  - Update lxtourguide.html to use dynamic hero system
3.4.7  - Add CSS for smooth transitions and overlays
3.4.8  - Test mobile responsiveness (320px, 481px, 769px, 1025px, 1440px+)
3.4.9  - Optimize images (WebP + JPEG fallback, <200KB each)
3.4.10 Priority: HIGH
3.4.11 Created: 2026-01-31
3.4.12 Due by: 2026-02-28 (MVP Launch)
3.4.13 Lane: INBOX
3.4.14 Reference: LBPF_TOOLS_AND_SPECS.md section 0.0.0

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
