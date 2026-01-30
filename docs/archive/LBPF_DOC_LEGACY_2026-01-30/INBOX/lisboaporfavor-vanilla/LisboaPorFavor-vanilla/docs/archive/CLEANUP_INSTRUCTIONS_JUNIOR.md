# CLEANUP INSTRUCTIONS - Junior AI Task

**Date:** Nov 14, 2025  
**Task:** Organize Windsurf folder - move old projects to archive  
**Estimated Time:** 15 minutes  
**Risk Level:** LOW (moving, not deleting)

---

## 📋 TASK OVERVIEW

**Problem:** 20+ old project folders scattered in Windsurf directory  
**Solution:** Create organized archive structure and move old projects there

**DO NOT DELETE ANYTHING - ONLY MOVE**

**🚨 CRITICAL: Read `CRITICAL_FILES_INDEX.md` before moving ANY folder**

---

## 🎯 TARGET STRUCTURE

```
D:\Backup and Documents\W\Windsurf\
├── MASTER_INDEX.md (KEEP - God MD)
├── lisboaporfavor-bootstrap\ (KEEP - Active React project)
├── lisboaporfavor-vanilla\ (KEEP - Active Vanilla JS project)
├── TEST\ (KEEP - Template source)
├── backups\ (KEEP - Recent backups)
│
└── Previous_Projects_LBPF\ (CREATE THIS)
    ├── Archive_Bootstrap_Versions\
    │   ├── lisboaporfavor-bootstrap-backup-oct-23-2025\
    │   └── [other bootstrap backups]\
    │
    ├── Archive_Old_Versions\
    │   ├── LisboaPorFavor\
    │   ├── LisboaPorFavor-github-latest\
    │   ├── LisboaPorFavor-github-sync\
    │   ├── LisboaPorFavor-latest\
    │   ├── lisboaporfavor-v1.5\
    │   └── lisboaporfavor-v1.6\
    │
    ├── Archive_Projects_Folder\
    │   └── [contents of current projects\ folder]\
    │
    └── ARCHIVE_INDEX.md (summary of what's here)
```

---

## 📊 FOLDER CATEGORIZATION

### ACTIVE PROJECTS (DO NOT MOVE)
1. **lisboaporfavor-bootstrap** (14/11/2025 21:07)
   - React version, actively developed
   - 🟢 KEEP in root

2. **lisboaporfavor-vanilla** (14/11/2025 22:08)
   - Vanilla JS version, frozen template
   - 🟢 KEEP in root

3. **TEST** (if exists)
   - Template source files
   - 🟢 KEEP in root

4. **backups** (14/11/2025 21:50)
   - Recent backup folder
   - 🟢 KEEP in root

### OLD BOOTSTRAP VERSIONS (MOVE)
1. **lisboaporfavor-bootstrap-backup-oct-23-2025** (23/10/2025)
   - Old backup from October
   - 🔴 MOVE to: `Previous_Projects_LBPF\Archive_Bootstrap_Versions\`

### OLD PROJECT VERSIONS (MOVE)
1. **LisboaPorFavor** (29/08/2025 14:58)
   - Old version, August
   - 🔴 MOVE to: `Previous_Projects_LBPF\Archive_Old_Versions\`

2. **LisboaPorFavor-github-latest** (29/08/2025 14:58)
   - Old GitHub sync, August
   - 🔴 MOVE to: `Previous_Projects_LBPF\Archive_Old_Versions\`

3. **LisboaPorFavor-github-sync** (29/08/2025 14:58)
   - Old GitHub sync, August
   - 🔴 MOVE to: `Previous_Projects_LBPF\Archive_Old_Versions\`

4. **LisboaPorFavor-latest** (29/08/2025 14:58)
   - Old version, August
   - 🔴 MOVE to: `Previous_Projects_LBPF\Archive_Old_Versions\`

5. **lisboaporfavor-v1.5** (28/08/2025 15:54)
   - Version 1.5, August
   - 🔴 MOVE to: `Previous_Projects_LBPF\Archive_Old_Versions\`

6. **lisboaporfavor-v1.6** (29/08/2025 12:10)
   - Version 1.6, August
   - 🔴 MOVE to: `Previous_Projects_LBPF\Archive_Old_Versions\`

### PROJECTS FOLDER (INVESTIGATE & MOVE)
**Location:** `D:\Backup and Documents\W\Windsurf\projects\`

**Contents (from screenshot):**
- LisboaPorFavor (16/03/2025)
- LisboaPorFavor_Apps (03/03/2025)
- LisboaPorFavor_V1.1 (11/05/2025)
- LisboaPorFavor_V1.1_BACKUP (11/05/2025)
- LisboaPorFavor-v1.2 (06/03/2025)
- lisboaporfavor-v1.3 (30/07/2025)
- lisboaporfavor-v1.5-restored (26/08/2025)
- tobernottobe.eu (10/07/2025)

**Action:** 🔴 MOVE entire `projects\` folder contents to:
`Previous_Projects_LBPF\Archive_Projects_Folder\`

### OTHER FOLDERS (KEEP OR INVESTIGATE)
1. **## LBPF links** (26/10/2025)
   - Recent links, might be active
   - 🟡 ASK USER before moving

2. **Boilerplate** (30/07/2025)
   - Template files
   - 🟡 ASK USER before moving

3. **branding** (30/07/2025)
   - Brand assets
   - 🟢 KEEP (might be needed)

4. **delete** (30/07/2025)
   - Already marked for deletion
   - 🟡 ASK USER to review

5. **docs** (30/07/2025)
   - Documentation
   - 🟢 KEEP

6. **experiments** (30/07/2025)
   - Experiment files
   - 🟡 ASK USER before moving

7. **Import Webpage** (12/08/2025)
   - Import tool
   - 🟡 ASK USER before moving

8. **Research Tourguide Lisbon** (22/08/2025)
   - Research files
   - 🟢 KEEP (might be active)

---

## 🔧 EXECUTION STEPS

### Step 1: Create Archive Structure
```powershell
# Create main archive folder
New-Item -ItemType Directory -Path "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF"

# Create subfolders
New-Item -ItemType Directory -Path "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF\Archive_Bootstrap_Versions"
New-Item -ItemType Directory -Path "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF\Archive_Old_Versions"
New-Item -ItemType Directory -Path "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF\Archive_Projects_Folder"
```

### Step 2: Move Old Bootstrap Versions
```powershell
Move-Item "D:\Backup and Documents\W\Windsurf\lisboaporfavor-bootstrap-backup-oct-23-2025" "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF\Archive_Bootstrap_Versions\"
```

### Step 3: Move Old Project Versions
```powershell
$oldVersions = @(
    "LisboaPorFavor",
    "LisboaPorFavor-github-latest",
    "LisboaPorFavor-github-sync",
    "LisboaPorFavor-latest",
    "lisboaporfavor-v1.5",
    "lisboaporfavor-v1.6"
)

foreach ($folder in $oldVersions) {
    Move-Item "D:\Backup and Documents\W\Windsurf\$folder" "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF\Archive_Old_Versions\"
}
```

### Step 4: Move Projects Folder Contents
```powershell
# Get all items in projects folder
$projectItems = Get-ChildItem "D:\Backup and Documents\W\Windsurf\projects"

# Move each item
foreach ($item in $projectItems) {
    Move-Item $item.FullName "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF\Archive_Projects_Folder\"
}

# Remove empty projects folder
Remove-Item "D:\Backup and Documents\W\Windsurf\projects" -Force
```

### Step 5: Create Archive Index
```powershell
# Create ARCHIVE_INDEX.md documenting what's archived
# (See template below)
```

---

## 📝 ARCHIVE_INDEX.md TEMPLATE

```markdown
# Archive Index - Previous LisboaPorFavor Projects

**Archive Date:** Nov 14, 2025  
**Archived By:** Junior AI Cleanup Task  
**Original Location:** D:\Backup and Documents\W\Windsurf\

---

## Archive Structure

### Archive_Bootstrap_Versions\
- **lisboaporfavor-bootstrap-backup-oct-23-2025**
  - Date: Oct 23, 2025
  - Type: Bootstrap React backup
  - Size: [calculated during move]
  - Notes: Pre-cleanup backup

### Archive_Old_Versions\
- **LisboaPorFavor** (Aug 29, 2025)
  - Original project version
  - Tech: [inspect and note]
  
- **LisboaPorFavor-github-latest** (Aug 29, 2025)
  - GitHub sync version
  
- **LisboaPorFavor-github-sync** (Aug 29, 2025)
  - GitHub sync version
  
- **LisboaPorFavor-latest** (Aug 29, 2025)
  - Latest version tag
  
- **lisboaporfavor-v1.5** (Aug 28, 2025)
  - Version 1.5
  
- **lisboaporfavor-v1.6** (Aug 29, 2025)
  - Version 1.6

### Archive_Projects_Folder\
- **LisboaPorFavor** (Mar 16, 2025) - Very old version
- **LisboaPorFavor_Apps** (Mar 3, 2025) - Apps component
- **LisboaPorFavor_V1.1** (May 11, 2025) - Version 1.1
- **LisboaPorFavor_V1.1_BACKUP** (May 11, 2025) - V1.1 backup
- **LisboaPorFavor-v1.2** (Mar 6, 2025) - Version 1.2
- **lisboaporfavor-v1.3** (Jul 30, 2025) - Version 1.3
- **lisboaporfavor-v1.5-restored** (Aug 26, 2025) - V1.5 restored
- **tobernottobe.eu** (Jul 10, 2025) - Separate project

---

## Quick Restore Guide

**If you need to restore something:**

1. Identify which archive folder contains the version
2. Copy (don't move) back to Windsurf root
3. Update MASTER_INDEX.md
4. Commit to git

**Active Projects (Not Archived):**
- lisboaporfavor-bootstrap (React)
- lisboaporfavor-vanilla (Plain JS)
```

---

## ⚠️ SAFETY CHECKS

**Before moving anything:**
1. ✅ Verify `lisboaporfavor-bootstrap` still works
2. ✅ Verify `lisboaporfavor-vanilla` still works
3. ✅ Confirm `backups\vanilla-2025-11-14_2150` exists
4. ✅ Check no file is open in IDE

**After moving:**
1. ✅ Verify active projects still load
2. ✅ Verify no broken symlinks
3. ✅ Update MASTER_INDEX.md with new structure

---

## 🎯 SUCCESS CRITERIA

**When done, Windsurf folder should contain:**
1. MASTER_INDEX.md
2. lisboaporfavor-bootstrap\
3. lisboaporfavor-vanilla\
4. TEST\ (if exists)
5. backups\
6. Previous_Projects_LBPF\
7. Research Tourguide Lisbon\ (if kept)
8. branding\ (if kept)
9. docs\ (if kept)
10. Other utility folders (ask user)

**Total reduction:** ~13 folders moved to archive

---

## 📋 CHECKLIST

- [ ] Create `Previous_Projects_LBPF\` structure
- [ ] Move bootstrap backups
- [ ] Move old versions (6 folders)
- [ ] Move projects folder contents (8+ items)
- [ ] Create ARCHIVE_INDEX.md
- [ ] Test active projects still work
- [ ] Update MASTER_INDEX.md
- [ ] Report completion to senior AI

---

## 🚨 IF SOMETHING GOES WRONG

**All moves are reversible:**
```powershell
# Undo last move
Move-Item "D:\Backup and Documents\W\Windsurf\Previous_Projects_LBPF\Archive_Old_Versions\[folder]" "D:\Backup and Documents\W\Windsurf\"
```

**Full restore from backup:**
```powershell
# Restore from today's backup
Copy-Item -Recurse "D:\Backup and Documents\W\Windsurf\backups\vanilla-2025-11-14_2150" "D:\Backup and Documents\W\Windsurf\lisboaporfavor-vanilla-restored"
```

---

**Ready to execute?** Ask user for final approval before starting moves.
