# LBPF Workflow

**Last updated:** 2026-01-30  
**Version:** V1.0.0

---

## 1. Session Start Protocol

### **Before Starting Work**
1. Read LBPF_PRIME_01_GLOBAL_RULES.md
2. Read LBPF_PRIME_02_RULES_AND_ROLES.md
3. Read LBPF_PRIME_03_SOURCE_OF_TRUTH.md
4. Read relevant Core docs (especially LBPF_BRAND_PACK.md for CSS/HTML work)

### **Confirm Understanding**
- List 3 key rules affecting current task
- State current authority hierarchy
- List active constraints
- Flag any conflicts found

---

## 2. Git Workflow

### **Before Making Changes**
```bash
# Check current status
git status

# Pull latest changes
git pull origin master

# Create feature branch (optional for larger work)
git checkout -b feature/your-feature-name
```

### **After Making Changes**
```bash
# Stage all changes
git add -A

# Commit with descriptive message
git commit -m "feat: Add guide bento template structure"

# Push to GitHub
git push origin master
```

### **Commit Message Format**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Formatting, CSS changes
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance tasks

---

## 3. CSS/HTML Workflow (BRAND STRICT)

### **Step 1: Read Brand Pack**
- Open `docs/core/LBPF_BRAND_PACK.md`
- Identify which tokens you need (colors, spacing, radii, shadows)
- Verify tokens exist in brand pack

### **Step 2: Check Existing Components**
- Open `css/brand-components.css`
- Check if component already exists (pill, card, tile)
- Reuse existing component if possible

### **Step 3: Implement**
- Use tokens from `css/template.css` (CSS variables)
- Use components from `css/brand-components.css`
- Add page-specific styles to appropriate CSS file
- **NO ad-hoc colors, spacing, or radii**

### **Step 4: If New Visual Need**
1. Propose in LBPF_BRAND_PACK.md first
2. Get user approval
3. Add to brand pack with reasoning
4. Add to `css/brand-components.css`
5. Then use in page-specific CSS

---

## 4. Component Development Workflow

### **Creating New Component**
1. Identify template type (main/guide/admin)
2. Check if existing component can be reused
3. If new component needed:
   - Add to `js/components/` folder
   - Follow existing pattern (createX function + auto-inject)
   - Document dependencies
   - Test across all pages that use it

### **Component File Pattern**
```javascript
// components/componentName.js
function createComponentName() {
  return `
    <div class="component-name">
      <!-- Component HTML -->
    </div>
  `;
}

// Auto-inject on DOM ready
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponent);
  } else {
    injectComponent();
  }
  
  function injectComponent() {
    const placeholder = document.getElementById('component-placeholder');
    if (placeholder) {
      placeholder.innerHTML = createComponentName();
    }
  }
})();
```

---

## 5. Page Development Workflow

### **Creating New Page**
1. Copy template from existing similar page
2. Update `<title>` and meta tags
3. Link correct CSS files (template.css, brand-components.css, page-specific)
4. Link correct JS files (components, page-specific, app.js)
5. Add footer placeholder: `<div id="footer-placeholder"></div>`
6. Test responsive design (desktop, tablet, mobile)

### **Page Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | LisboaPorFavor</title>
  
  <!-- CSS -->
  <link rel="stylesheet" href="css/template.css">
  <link rel="stylesheet" href="css/brand-components.css">
  <link rel="stylesheet" href="css/page-specific.css">
</head>
<body>
  <main>
    <!-- Page content -->
  </main>
  
  <div id="footer-placeholder"></div>
  
  <!-- Scripts -->
  <script src="js/components/footer.js"></script>
  <script src="js/pages/page-specific.js"></script>
</body>
</html>
```

---

## 6. Testing Workflow

### **Before Committing**
- [ ] Test in Chrome/Edge
- [ ] Test responsive (desktop, tablet, mobile)
- [ ] Verify all links work
- [ ] Check console for errors
- [ ] Verify footer renders correctly
- [ ] Check brand compliance (colors, spacing match tokens)

### **After Committing**
- [ ] Push to GitHub
- [ ] Verify GitHub shows latest commit
- [ ] Test on another device if possible

---

## 7. Documentation Workflow

### **When to Update Docs**
- New feature added → Update LBPF_ARCHITECTURE.md
- New visual token → Update LBPF_BRAND_PACK.md
- New workflow → Update LBPF_WORKFLOW.md (this file)
- Business decision → Update LBPF_BUSINESS_PLAN.md
- New rule → Update appropriate Prime file

### **Documentation Standards**
- Use metadata header (see Prime files for format)
- Use decimal numbering (X.Y.Z)
- Keep language clear and concise
- Include examples where helpful
- Update version history when changed

---

## 8. Backup Protocol

### **After Every Session**
1. Commit all changes to git
2. Push to GitHub
3. Verify push succeeded
4. Local backup happens automatically (git history)

### **GitHub as Backup**
- Repository: `Whassup-world/LisboaPorFavor-vanilla`
- All commits are backed up automatically
- Can restore any previous version via git

### **Manual Backup (Optional)**
- For major milestones, create dated backup folder
- Copy entire project to `Previous_Projects_LBPF/`
- Document what the backup contains

---

## 9. Troubleshooting Workflow

### **CSS Not Applying**
1. Check browser console for errors
2. Verify CSS file is linked in HTML
3. Check CSS selector specificity
4. Clear browser cache (Ctrl+Shift+R)
5. Verify CSS file path is correct

### **JavaScript Not Working**
1. Check browser console for errors
2. Verify JS file is linked in HTML
3. Check file load order (dependencies first)
4. Verify placeholder IDs match
5. Test with console.log() statements

### **Git Issues**
1. Check git status
2. Verify remote URL: `git remote -v`
3. Pull latest: `git pull origin master`
4. If conflicts, resolve manually
5. If stuck, ask user for help

---

## 10. Session End Protocol

### **Before Closing**
1. Confirm all work saved
2. Commit to git
3. Push to GitHub
4. Update this workflow doc if new patterns emerged
5. Ask user: "Anything I should remember for next time?"

---

**End**
