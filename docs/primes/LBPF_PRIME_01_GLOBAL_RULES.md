**START METADATA**

1.0.1  Metadata Field           Prime 01 - Global Rules and Standards
1.0.2  Title                    LBPF_PRIME_01_GLOBAL_RULES.md
1.0.3  Version                  V1.0.0
1.0.4  Version History          2026-01-30: Initial creation following TOBE Prime structure
1.0.5  Date Modified            2026-01-30 @ 16.30 hour
1.0.6  Date Created             2026-01-30 @ 16.30 hour
1.0.7  File Type                MD
1.0.8  Tags                     prime, global-rules, standards, lbpf
1.0.9  Description              Global operating rules for LisboaPorFavor project. Foundation that governs all LBPF operations.
1.0.10 Source                   USER
1.0.11 Confidentiality Level    INTERNAL
1.0.12 Owner                    USER
1.0.13 Canonical path           lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_01_GLOBAL_RULES.md
1.0.14 Local mirror             (optional)
1.0.15 Remote mirror            GitHub: Whassup-world/LisboaPorFavor-vanilla

**END METADATA**

---

2.0.0  SESSION START PROTOCOL

2.0.1  When starting work on LBPF, read Prime 01-03 and relevant Core docs
2.0.2  LBPF follows TOBE Prime system for consistency
2.0.3  Brand compliance is MANDATORY - see LBPF_BRAND_PACK.md in Core

2.1.0  PRIMES (MANDATORY)
2.1.1  lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_01_GLOBAL_RULES.md
2.1.2  lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_02_RULES_AND_ROLES.md
2.1.3  lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_03_SOURCE_OF_TRUTH.md
2.1.4  lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_06_TODO.md

2.2.0  CORE (PROJECT KNOWLEDGE BASE)
2.2.1  lisboaporfavor-vanilla/docs/core/LBPF_BRAND_PACK.md
2.2.2  lisboaporfavor-vanilla/docs/core/LBPF_BUSINESS_PLAN.md

**END SESSION PROTOCOL**

---

3.0.0  HOW WE WORK (canonical)

3.1.0  PURPOSE
3.1.1  This file defines global operating rules for LisboaPorFavor project
3.1.2  Designed to make AI collaboration safe, fast, and consistent
3.1.3  All docs, webpages, and content must use correct grammar and professional language
3.1.4  Fix spelling/grammar immediately when found (MANDATORY)

3.1.5  SYSTEM GOAL
3.1.6  Build a professional tour guide marketplace + training academy
3.1.7  Prime docs define rules, roles, and traceable behavior
3.1.8  Core docs provide project context and brand standards
3.1.9  System must prevent silent drift: capture missing/unclear rules and upgrade correct Prime/Core

3.2.0  PRIME PURPOSE MAP (WHAT GOES WHERE)
3.2.1  Prime 01 (this file) -> global operating rules, project-wide conventions
3.2.2  Prime 02 -> rules, roles, communication format, workflow discipline
3.2.3  Prime 03 -> authority hierarchy, routing rules, "what overrides what"

3.3.0  QUALITY STANDARD
3.3.1  We aim for professional-grade decisions, not shortcuts
3.3.2  If a suggestion introduces future pain:
3.3.3  Acknowledge the idea
3.3.4  State the risk in one sentence
3.3.5  Propose a better alternative
3.3.6  Let Owner decide

3.4.0  VERSION CONTROL STANDARD (MANDATORY)
3.4.1  Version format: vX.Y.Z
3.4.2  X = Major version (breaking changes)
3.4.3  Y = Minor version (non-breaking features)
3.4.4  Z = Patch version (fixes only)

---

4.0.0  GOVERNANCE

4.1.0  FREEZE DEFINITION
4.1.1  Backbone docs are FROZEN once approved
4.1.2  No modifications without explicit approval from Owner

4.2.0  BRAND STRICT MODE (MANDATORY FOR LBPF)
4.2.1  LBPF_BRAND_PACK.md is the ONLY source of truth for visual tokens
4.2.2  No colors, spacing, radii, shadows outside the brand pack
4.2.3  Any new visual need must be proposed in brand pack FIRST
4.2.4  Then added to css/brand-components.css
4.2.5  Then used in page-specific CSS
4.2.6  This applies to ALL work: CSS, HTML, components, layouts

4.3.0  SAFETY PROTOCOL
4.3.1  Before restructuring, create dated backup
4.3.2  When moving content: copy first, confirm, then delete source
4.3.3  End session: confirm decisions, back up to GitHub and local
4.3.4  Verification rule: if absorbing/exporting content, verify it actually moved
4.3.5  Deviation rule: if AI wants different path than user request, communicate first

---

5.0.0  PROJECT EXECUTION

5.1.0  LBPF PROJECT VISION
5.1.1  NOT just a tour booking site
5.1.2  Three-tier system: Public facing + Guide Training Academy + Agency Partnership
5.1.3  Goal: 15+ tours by end of year, scalable template system

5.2.0  TEMPLATE TYPES
5.2.1  Main public pages (index.html) - LBPF shell colors
5.2.2  Guide/tour detail pages (lxtourguide.html) - Bento layout with topic colors
5.2.3  Admin/staff pages (admin-guide.html) - Muted, functional UI

5.3.0  DEVELOPMENT STANDARDS
5.3.1  Component-based architecture (modular JS/CSS)
5.3.2  Brand token system (CSS variables)
5.3.3  Mobile-first responsive design
5.3.4  Accessibility compliance

---

6.0.0  PRIORITY SYSTEM
6.0.1  Rate tasks as:
6.0.2  🔴 Critical (blocks launch / costs money / security)
6.0.3  🟡 Important (improves UX / saves time)
6.0.4  🟢 Nice-to-have (polish / future)

---

7.0.0  WHAT NOT TO DO
7.0.1  Don't create new MD files without approval
7.0.2  Don't add colors/spacing outside brand pack
7.0.3  Don't break component modularity
7.0.4  Don't assume scope without asking
7.0.5  Don't let user make mistakes silently - flag them tactfully

---

8.0.0  DOCUMENT STANDARDS

8.1.0  METADATA REQUIREMENTS
8.1.1  All docs must have metadata header
8.1.2  Use decimal numbering (X.Y.Z)
8.1.3  Track version history
8.1.4  Specify canonical path

8.2.0  INDEXING SYSTEM
8.2.1  Format: X.Y.Z numbering
8.2.2  X: Main category (1-9)
8.2.3  Y: Subcategory (0-9)
8.2.4  Z: Detail level (0-9)

---

9.0.0  ESSENTIAL ARCHITECTURE (INLINE)

9.1.0  PROJECT STRUCTURE
9.1.1  lisboaporfavor-vanilla/ (root)
9.1.2  docs/ (primes/, core/, archive/)
9.1.3  css/ (template.css, brand-components.css, page-specific)
9.1.4  js/ (components/, pages/, app.js)
9.1.5  data/ (tours.js, guides.js)
9.1.6  images/ (_rawslug/, guides/, lbpf logo/)
9.1.7  HTML files in root (index.html, lxtourguide.html, admin-guide.html)

9.2.0  TECH STACK
9.2.1  HTML5 + CSS3 + Vanilla JavaScript (no frameworks)
9.2.2  Component-based architecture (modular JS/CSS)
9.2.3  CSS variables for brand tokens
9.2.4  No build system (browser-native)

9.3.0  TEMPLATE TYPES
9.3.1  Main public (index.html) - LBPF shell colors
9.3.2  Guide/tour detail (lxtourguide.html) - Bento layout with topic colors
9.3.3  Admin/staff (admin-guide.html) - Muted, functional UI

---

10.0.0  ESSENTIAL WORKFLOW (INLINE)

10.1.0  SESSION START
10.1.1  Read LBPF_PRIME_01, 02, 03
10.1.2  Read LBPF_BRAND_PACK.md before CSS/HTML work
10.1.3  Check git status before starting

10.2.0  GIT WORKFLOW
10.2.1  Before changes: git status, git pull
10.2.2  After changes: git add -A, git commit -m "message", git push
10.2.3  Commit format: feat:/fix:/docs:/style:/refactor:/chore:
10.2.4  Backup = committed AND pushed to GitHub

10.3.0  CSS/HTML WORKFLOW (BRAND STRICT)
10.3.1  Read LBPF_BRAND_PACK.md first
10.3.2  Use only defined tokens (no ad-hoc values)
10.3.3  Propose new visual needs in brand pack FIRST
10.3.4  Add to brand-components.css after approval
10.3.5  Then use in page-specific CSS

10.4.0  SESSION END
10.4.1  Commit all changes
10.4.2  Push to GitHub
10.4.3  Verify push succeeded
10.4.4  Ask: "Anything I should remember for next time?"

---

**End**

---
