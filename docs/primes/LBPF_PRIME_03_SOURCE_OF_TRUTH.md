**START METADATA**

1.0.1  Metadata Field           Prime 03 - Source of Truth
1.0.2  Title                    LBPF_PRIME_03_SOURCE_OF_TRUTH.md
1.0.3  Version                  V1.0.0
1.0.4  Version History          2026-01-30: Initial creation following TOBE Prime structure
1.0.5  Date Modified            2026-01-30 @ 16.30 hour
1.0.6  Date Created             2026-01-30 @ 16.30 hour
1.0.7  File Type                MD
1.0.8  Tags                     prime, source-of-truth, authority, lbpf
1.0.9  Description              Authority hierarchy and routing rules for LisboaPorFavor project
1.0.10 Source                   USER
1.0.11 Confidentiality Level    INTERNAL
1.0.12 Owner                    USER
1.0.13 Canonical path           lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_03_SOURCE_OF_TRUTH.md
1.0.14 Local mirror             (optional)
1.0.15 Remote mirror            GitHub: Whassup-world/LisboaPorFavor-vanilla

**END METADATA**

---

1.0.0  WHAT "SOURCE OF TRUTH" MEANS FOR LBPF

1.0.1  This file defines authority hierarchy and routing rules
1.0.2  Primes contain rules for their domains; Prime 03 defines what overrides what
1.0.3  If Prime docs conflict, work stops until reconciled

---

2.0.0  AUTHORITY HIERARCHY (WHAT OVERRIDES WHAT)

2.1.0  TIER 1: PRIMES (HIGHEST AUTHORITY)
2.1.1  LBPF_PRIME_01_GLOBAL_RULES.md - Global operating rules
2.1.2  LBPF_PRIME_02_RULES_AND_ROLES.md - Workflow and roles
2.1.3  LBPF_PRIME_03_SOURCE_OF_TRUTH.md - This file

2.2.0  TIER 2: CORE (CANONICAL KNOWLEDGE)
2.2.1  LBPF_BRAND_PACK.md - Visual system (MANDATORY for all CSS/HTML)
2.2.2  LBPF_ARCHITECTURE.md - Technical stack and file structure
2.2.3  LBPF_BUSINESS_PLAN.md - Vision, strategy, 3-tier system
2.2.4  LBPF_WORKFLOW.md - How to work on this project

2.3.0  TIER 3: IMPLEMENTATION
2.3.1  CSS files (template.css, brand-components.css, page-specific)
2.3.2  HTML files (index.html, lxtourguide.html, admin-guide.html)
2.3.3  JS files (components, pages, data)

2.4.0  TIER 4: ARCHIVE
2.4.1  Old versions, deprecated docs, experiments
2.4.2  Reference only, not authoritative

---

3.0.0  CANONICAL DOCUMENTS FOR LBPF

3.1.0  PRIME (CANONICAL)
3.1.1  docs/primes/LBPF_PRIME_01_GLOBAL_RULES.md
3.1.2  docs/primes/LBPF_PRIME_02_RULES_AND_ROLES.md
3.1.3  docs/primes/LBPF_PRIME_03_SOURCE_OF_TRUTH.md

3.2.0  CORE (CANONICAL)
3.2.1  docs/core/LBPF_BRAND_PACK.md
3.2.2  docs/core/LBPF_BUSINESS_PLAN.md

---

4.0.0  ROUTING MAP (WHERE INFORMATION MUST LIVE)

4.1.0  GLOBAL RULES AND STANDARDS
4.1.1  Destination: LBPF_PRIME_01_GLOBAL_RULES.md
4.1.2  Content: Project-wide conventions, quality standards, version control

4.2.0  WORKFLOW AND ROLES
4.2.1  Destination: LBPF_PRIME_02_RULES_AND_ROLES.md
4.2.2  Content: Communication protocol, safety rules, session protocols

4.3.0  AUTHORITY AND CONFLICTS
4.3.1  Destination: LBPF_PRIME_03_SOURCE_OF_TRUTH.md (this file)
4.3.2  Content: What overrides what, routing rules, canonical doc list

4.4.0  BRAND AND VISUAL SYSTEM
4.4.1  Destination: docs/core/LBPF_BRAND_PACK.md
4.4.2  Content: Colors, typography, spacing, components, topic system
4.4.3  CRITICAL: This is MANDATORY reading before any CSS/HTML work

4.5.0  BUSINESS VISION AND STRATEGY
4.5.1  Destination: docs/core/LBPF_BUSINESS_PLAN.md
4.5.2  Content: 3-tier system, marketplace vision, guide training academy

4.6.0  TECHNICAL ARCHITECTURE AND WORKFLOW
4.6.1  Destination: LBPF_PRIME_01_GLOBAL_RULES.md (sections 9 and 10)
4.6.2  Content: File structure, tech stack, git workflow, session protocols
4.6.3  Reason: Keep inline to minimize MD files

---

5.0.0  DECISION INTEGRATION RULE

5.1.0  NO SEPARATE DECISION FILES
5.1.1  Decisions are absorbed into the correct Prime or Core doc
5.1.2  Do not create DECISION_*.md files
5.1.3  Compact knowledge into existing canonical docs

5.2.0  WHEN A DECISION IS MADE
5.2.1  Identify which Prime or Core doc it belongs to
5.2.2  Add to that doc with date and reasoning
5.2.3  Update version history in metadata
5.2.4  Archive old decision files to docs/archive/

---

6.0.0  CONFLICT RESOLUTION

6.1.0  IF PRIMES CONFLICT
6.1.1  Work stops immediately
6.1.2  Flag conflict to user
6.1.3  Propose resolution options (A/B/C)
6.1.4  Wait for user decision
6.1.5  Update conflicting Prime(s)

6.2.0  IF CORE CONFLICTS WITH PRIME
6.2.1  Prime always wins
6.2.2  Update Core doc to align
6.2.3  Document change in version history

6.3.0  IF IMPLEMENTATION CONFLICTS WITH CORE/PRIME
6.3.1  Core/Prime always wins
6.3.2  Fix implementation
6.3.3  Do not modify Core/Prime without approval

---

7.0.0  MINIMUM-MDS RULE (ANTI-BLOAT)

7.1.0  DEFAULT BEHAVIOR
7.1.1  Keep number of MD files as low as possible
7.1.2  Prefer upgrading existing canonical doc over creating new doc
7.1.3  Get approval before creating new Prime or Core doc

7.2.0  WHEN UNCERTAIN WHERE CONTENT BELONGS
7.2.1  Propose destination to user
7.2.2  Do not create random new files
7.2.3  Use existing structure

---

**End**

---
