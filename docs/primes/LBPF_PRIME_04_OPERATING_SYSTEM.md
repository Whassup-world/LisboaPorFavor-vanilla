**START METADATA**

1.0.1  Metadata Field           Prime 04 - Operating System
1.0.2  Title                    LBPF_PRIME_04_OPERATING_SYSTEM.md
1.0.3  Version                  V1.0.0
1.0.4  Version History          2026-01-31: Initial creation from TOBE Prime structure
1.0.5  Date Modified            2026-01-31 @ 14.03 hour
1.0.6  Date Created             2026-01-31 @ 14.03 hour
1.0.7  File Type                MD
1.0.8  Tags                     prime, operating-system, lifecycle, security, lbpf
1.0.9  Description              LBPF Operating System - dev lifecycle, security, AI governance, release discipline
1.0.10 Source                   USER
1.0.11 Confidentiality Level    INTERNAL
1.0.12 Owner                    USER
1.0.13 Canonical path           lisboaporfavor-vanilla/docs/primes/LBPF_PRIME_04_OPERATING_SYSTEM.md
1.0.14 Local mirror             (optional)
1.0.15 Remote mirror            GitHub: Whassup-world/LisboaPorFavor-vanilla

**END METADATA**

---

2.0.0  PURPOSE
2.1.0  THIS DOCUMENT ENSURES PRIME COVERS THE FULL LIFECYCLE
2.1.1  Before development
2.1.2  During development
2.1.3  After development (operations)
2.1.4  Special rules for AI collaboration

---

2.0.0  LIFECYCLE GATES (MANDATORY)

2.1.0  BEFORE DEVELOPMENT GATE
2.1.1  Define outcome and acceptance criteria
2.1.2  Confirm backup/restore plan
2.1.3  Backup is defined as: committed locally AND pushed to remote (not just local commits)
2.1.4  Define restore method for this repo:
2.1.5  Git restore (clone from remote + checkout the desired commit)
2.1.6  Non-git assets (if any): list exact folder paths and how they are backed up
2.1.7  Define backup cadence:
2.1.8  End-of-session push if any meaningful change happened
2.1.9  Immediate push after security changes, data/schema changes, or doc migrations
2.1.10 Define remote location: GitHub Whassup-world/LisboaPorFavor-vanilla
2.1.11 Confirm security constraints (auth boundary, private-by-default areas)

2.2.0  DURING DEVELOPMENT GATE
2.2.1  Small reversible steps
2.2.2  No silent destructive actions
2.2.3  Add minimal tests or verification steps where risk exists
2.2.4  Keep docs in sync only when scope is stable

2.3.0  AFTER DEVELOPMENT GATE
2.3.1  Confirm monitoring/logging approach
2.3.2  Confirm incident response basics
2.3.3  Confirm rollback plan

---

3.0.0  SECURITY LANE (MANDATORY)

3.1.0  THREAT CHECKLIST FOR ANY ADMIN/TOOLING PAGE
3.1.1  CSRF
3.1.2  XSS
3.1.3  Path traversal
3.1.4  Upload validation and size limits
3.1.5  SSRF (if downloading external assets)
3.1.6  Secrets handling (no credentials in repo)

3.2.0  AUTHENTICATION INVARIANT
3.2.1  If a user is on an admin page, they are authenticated
3.2.2  Admin "home after login" must land on an authenticated hub

---

4.0.0  AI GOVERNANCE LANE (MANDATORY)

4.1.0  APPROVAL GATES
4.1.1  Code changes are allowed only after Owner approval
4.1.2  Security-sensitive changes require explicit approval
4.1.3  Data model/schema locks require explicit approval

4.2.0  TRACEABILITY
4.2.1  Decisions and brainstorms are recorded as input files in docs/
4.2.2  Useful content is absorbed into the appropriate dedicated document (Prime or canonical doc)
4.2.3  After absorption, the input file is moved to docs/archive/

4.3.0  STOP RULES
4.3.1  If Prime docs conflict, work stops until resolved

---

5.0.0  RELEASE DISCIPLINE (GIT)

5.1.0  We do not commit generated noise (example: editor backup folders)
5.2.0  Commit only after structure is stable (reorg complete)
5.3.0  Each commit message must state:
5.3.1  What changed
5.3.2  Why
5.3.3  Any migration or link impact

5.4.0  BACKUP RULE (GIT)
5.4.1  Backup is only complete after push to remote succeeds
5.4.2  A local commit without a push is not a backup

5.5.0  BACKUP TRIGGERS (MANDATORY PUSH)
5.5.1  Any security/auth change
5.5.2  Any data model / schema change
5.5.3  Any docs migration (move/rename/archive) or link repair
5.5.4  End-of-session if any meaningful change happened

5.6.0  BACKUP VERIFICATION (DO NOT ASSUME)
5.6.1  Confirm the pushed commit exists on the remote (web UI or equivalent verification)
5.6.2  If push fails or remote is unclear: stop and notify Owner before proceeding

---

6.0.0  PROJECT EXECUTION FRAMEWORK

6.1.0  PROJECT INITIALIZATION
6.1.1  Requirements Validation
6.1.2  Resource Assessment
6.1.3  Timeline Planning
6.1.4  Risk Analysis

6.2.0  EXECUTION PROCESS
6.2.1  Development Standards
6.2.2  Quality Controls
6.2.3  Progress Tracking
6.2.4  Issue Management

6.3.0  MONITORING AND CONTROL
6.3.1  Performance Metrics
6.3.2  Quality Metrics
6.3.3  Risk Indicators
6.3.4  Resource Usage

6.4.0  CLOSURE PROCEDURES
6.4.1  Deliverable Verification
6.4.2  Documentation Review
6.4.3  Knowledge Transfer
6.4.4  Lessons Learned

---

7.0.0  BUSINESS ALIGNMENT

7.1.0  VALUE CREATION
7.1.1  Cost Management
7.1.2  Quality Standards
7.1.3  Innovation Balance
7.1.4  Resource Optimization

7.2.0  MARKET POSITION
7.2.1  Competitive Analysis
7.2.2  Trend Monitoring
7.2.3  Adaptation Strategy
7.2.4  Growth Planning

7.3.0  OPERATIONAL EXCELLENCE
7.3.1  Process Optimization
7.3.2  Quality Management
7.3.3  Efficiency Metrics
7.3.4  Continuous Improvement

---

8.0.0  LINKS

8.1.0  PRIMES
8.1.1  docs/primes/LBPF_PRIME_01_GLOBAL_RULES.md
8.1.2  docs/primes/LBPF_PRIME_02_RULES_AND_ROLES.md
8.1.3  docs/primes/LBPF_PRIME_03_SOURCE_OF_TRUTH.md

---

**End**

---
