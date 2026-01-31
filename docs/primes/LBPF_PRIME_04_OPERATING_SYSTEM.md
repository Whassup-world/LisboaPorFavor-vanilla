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

3.0.0  LIFECYCLE GATES (MANDATORY)

3.1.0  BEFORE DEVELOPMENT GATE
3.1.1  Define outcome and acceptance criteria
3.1.2  Confirm backup/restore plan
3.1.3  Backup is defined as: committed locally AND pushed to remote (not just local commits)
3.1.4  Define restore method for this repo:
3.1.5  Git restore (clone from remote + checkout the desired commit)
3.1.6  Non-git assets (if any): list exact folder paths and how they are backed up
3.1.7  Define backup cadence:
3.1.8  End-of-session push if any meaningful change happened
3.1.9  Immediate push after security changes, data/schema changes, or doc migrations
3.1.10 Define remote location: GitHub Whassup-world/LisboaPorFavor-vanilla
3.1.11 Confirm security constraints (auth boundary, private-by-default areas)

3.2.0  DURING DEVELOPMENT GATE
3.2.1  Small reversible steps
3.2.2  No silent destructive actions
3.2.3  Add minimal tests or verification steps where risk exists
3.2.4  Keep docs in sync only when scope is stable

3.3.0  AFTER DEVELOPMENT GATE
3.3.1  Confirm monitoring/logging approach
3.3.2  Confirm incident response basics
3.3.3  Confirm rollback plan

---

4.0.0  SECURITY LANE (MANDATORY)

4.1.0  THREAT CHECKLIST FOR ANY ADMIN/TOOLING PAGE
4.1.1  CSRF
4.1.2  XSS
4.1.3  Path traversal
4.1.4  Upload validation and size limits
4.1.5  SSRF (if downloading external assets)
4.1.6  Secrets handling (no credentials in repo)

4.2.0  AUTHENTICATION INVARIANT
4.2.1  If a user is on an admin page, they are authenticated
4.2.2  Admin "home after login" must land on an authenticated hub

---

5.0.0  AI GOVERNANCE LANE (MANDATORY)

5.1.0  APPROVAL GATES
5.1.1  Code changes are allowed only after Owner approval
5.1.2  Security-sensitive changes require explicit approval
5.1.3  Data model/schema locks require explicit approval

5.2.0  TRACEABILITY
5.2.1  Decisions and brainstorms are recorded as input files in docs/
5.2.2  Useful content is absorbed into the appropriate dedicated document (Prime or canonical doc)
5.2.3  After absorption, the input file is moved to docs/archive/

5.3.0  STOP RULES
5.3.1  If Prime docs conflict, work stops until resolved

---

6.0.0  RELEASE DISCIPLINE (GIT)

6.1.0  We do not commit generated noise (example: editor backup folders)
6.2.0  Commit only after structure is stable (reorg complete)
6.3.0  Each commit message must state:
6.3.1  What changed
6.3.2  Why
6.3.3  Any migration or link impact

6.4.0  BACKUP RULE (GIT)
6.4.1  Backup is only complete after push to remote succeeds
6.4.2  A local commit without a push is not a backup

6.5.0  BACKUP TRIGGERS (MANDATORY PUSH)
6.5.1  Any security/auth change
6.5.2  Any data model / schema change
6.5.3  Any docs migration (move/rename/archive) or link repair
6.5.4  End-of-session if any meaningful change happened

6.6.0  BACKUP VERIFICATION (DO NOT ASSUME)
6.6.1  Confirm the pushed commit exists on the remote (web UI or equivalent verification)
6.6.2  If push fails or remote is unclear: stop and notify Owner before proceeding

---

7.0.0  PROJECT EXECUTION FRAMEWORK

7.1.0  PROJECT INITIALIZATION
7.1.1  Requirements Validation
7.1.2  Resource Assessment
7.1.3  Timeline Planning
7.1.4  Risk Analysis

7.2.0  EXECUTION PROCESS
7.2.1  Development Standards
7.2.2  Quality Controls
7.2.3  Progress Tracking
7.2.4  Issue Management

7.3.0  MONITORING AND CONTROL
7.3.1  Performance Metrics
7.3.2  Quality Metrics
7.3.3  Risk Indicators
7.3.4  Resource Usage

7.4.0  CLOSURE PROCEDURES
7.4.1  Deliverable Verification
7.4.2  Documentation Review
7.4.3  Knowledge Transfer
7.4.4  Lessons Learned

---

8.0.0  BUSINESS ALIGNMENT

8.1.0  VALUE CREATION
8.1.1  Cost Management
8.1.2  Quality Standards
8.1.3  Innovation Balance
8.1.4  Resource Optimization

8.2.0  MARKET POSITION
8.2.1  Competitive Analysis
8.2.2  Trend Monitoring
8.2.3  Adaptation Strategy
8.2.4  Growth Planning

8.3.0  OPERATIONAL EXCELLENCE
8.3.1  Process Optimization
8.3.2  Quality Management
8.3.3  Efficiency Metrics
8.3.4  Continuous Improvement

---

9.0.0  LINKS

9.1.0  PRIMES
9.1.1  docs/primes/LBPF_PRIME_01_GLOBAL_RULES.md
9.1.2  docs/primes/LBPF_PRIME_02_RULES_AND_ROLES.md
9.1.3  docs/primes/LBPF_PRIME_03_SOURCE_OF_TRUTH.md

---

**End**

---
