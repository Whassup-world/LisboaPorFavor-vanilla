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
**Status:** 🟡 Requested  
**Recommended AI:** Claude Haiku or GPT-4o-mini (data collection task)

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

**When Complete:**
1. Update status to 🟠 Review Required
2. Report total files scanned
3. Note any issues or files you couldn't categorize

**Junior Questions:**
*Add questions here if needed*

**Deliverables:**
*Report location and summary when complete*

**Senior Review:**
*Pending*

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
