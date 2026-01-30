# LBPF BRAND Audit – 2025-11-21

**Scope:** Visual BRAND STRICT check across main public pages, LXT guide, static legal pages, Admin, and Pocket Admin.

Pages and layers scanned:
- `index.html` (+ `css/template.css`, `css/main.css`, `css/fixes.css`)
- `guides.html`
- `lxtourguide.html` (+ `css/guide-page.css`, `css/brand-components.css`)
- `contact.html`
- `terms.html`
- `admin.html` (Admin main shell)
- `guide-admin.html` (Pocket Admin)

Tokens + spec reference:
- `docs/LBPF_BRAND_PACK.md` (including §9 Brand Components System + §9.4 BRAND STRICT)
- `css/template.css` (color, spacing, layout tokens)
- `css/brand-components.css` (pills, cards, tiles, nav)

---

## 1. Global layers

- **`css/template.css`** – **Status: 🟢 On-brand**
  - Uses Brand Pack tokens for colors, spacing, typography, layout.
  - Defines `--lbpf-color-*`, `--space-*`, `--content-width`, `--background`, etc.
  - No conflicting visual system detected.

- **`css/brand-components.css`** – **Status: 🟢 On-brand (v1)**
  - Defines `lbpf-pill`, `lbpf-card`, `lbpf-tile`, `lbpf-nav-pill` using brand tokens.
  - Tile spec (`lbpf-tile`) aligns to LXT bento shape and padding.
  - Still uses some raw values (e.g. exact box-shadow RGBA) which are not yet referenced as named tokens in the Brand Pack, but they are confined to this shared layer.

---

## 2. Main public shell (index, guides overview)

### 2.1 `index.html` + `css/main.css`

- **Status:** 🟡 Mostly on-brand
- **Uses:** `css/template.css`, `css/main.css`, `css/fixes.css` (see below).
- **Positive:**
  - Layout and spacing for main sections use brand tokens: `var(--space-32/64)`, `var(--surface)`, `var(--content-width)`.
  - Typography and colors often use `var(--text-primary/secondary)`, `var(--primary)`.
  - Cards (category, featured guide, partner) conceptually match Brand’s card patterns.
- **Differences vs Brand STRICT:**
  - **Radii & shadows:** cards and reviews use raw values (`border-radius: 12px`, `16px`, shadows like `0 2px 12px rgba(...)`, `0 10px 25px rgba(...)`) instead of `radius-*` and `shadow-*` tokens.
  - **Surfaces:** many blocks use `background: white;` rather than `var(--lbpf-surface)` or a documented `surface-variant` token.
  - **Gradients / overlays:** `mini-hero` (`background: linear-gradient(...) url('images/hero.webp')`) is not described in the Brand Pack as a named hero style.

### 2.2 `guides.html`

- **Status:** 🟡 Mostly on-brand but inline
- **Uses:** `css/template.css`, `css/main.css`, `css/fixes.css`.
- **Differences:**
  - Inline styles use hard-coded colors like `#49403C`, `#667eea`, without mapping back to Brand tokens.
  - Buttons: background `#49403C` and `#667eea` are not expressed as `lbpf-pill` / `lbpf-pill--primary` usages.

### 2.3 `css/fixes.css`

- **Status:** 🔴 Off-brand overrides
- **Role:** Legacy quick fixes.
- **Problematic rules:**
  - `body { background: #FFFFFF; }` – overrides `body` background from `template.css` (`var(--background)`).
  - Other overrides (`.hero-section + .category-cards-section`, `.image-section`) use raw values and `!important`.
- **Conclusion:** This file conflicts with BRAND STRICT and should eventually be refactored or removed once template heroes and transitions are stable.

---

## 3. Static legal/contact pages

### 3.1 `contact.html`

- **Status:** 🟡 Content OK, styling semi off-brand
- **Uses:** `css/template.css`, `css/main.css`.
- **Differences vs Brand:**
  - Many inline styles with hard-coded colors:
    - Headings: `color: #49403C;` (close to brand but not expressed via token).
    - Body text: `color: #666;` (not mapped to `--lbpf-text-muted`).
    - Primary and social buttons: `background: #667eea;` – blue that is not part of the LBPF core or PT/Lisbon palette.
  - Card shells: `background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);` rather than `lbpf-card` primitives.

### 3.2 `terms.html`

- **Status:** 🟡 Content OK, styling semi off-brand
- **Uses:** `css/template.css`, `css/main.css`.
- **Differences:**
  - Same pattern as `contact.html`: heavy inline styles with `#49403C`, `#666`, `#667eea`, and other status colors (`#28a745`, `#ffc107`, `#dc3545`) not defined as Brand tokens.
  - Cards + grids use raw borders, radii and shadows instead of `lbpf-card`.

---

## 4. Guide detail + LXT bento

### 4.1 `lxtourguide.html` + `css/guide-page.css`

- **Status:** 🟡 Strong visual identity but partially outside Brand STRICT
- **Positive:**
  - Uses `var(--content-width)`, `var(--background)`, `var(--text-primary/secondary)` for layout and typography.
  - PT/Lisbon palette variables defined at top (`--pt-green`, `--pt-red`, `--lx-gold`, etc.) are aligned conceptually with §2.3 of Brand Pack.
  - Bento tiles use the shared `lbpf-tile` spec via `css/brand-components.css`.
- **Off-brand / hidden rules:**
  - **Radii & shadows:** repeated use of `border-radius: 8px/12px/16px`, and strong shadows (`0 28px 70px rgba(...)`) not expressed via `radius-*` / `shadow-*` tokens.
  - **Gradients:**
    - Hero inner (`.guide-bento-hero-inner`) and tiles use custom radial gradients and blur/saturate combinations that are not yet named in the Brand Pack.
  - **Pills & tags:** `.guide-tag-*` and `.guide-bento-reviews-pill` use Tailwind-style color combos (e.g. `rgba(59,130,246,0.9)`, `#FACC15`, `#10B981`) instead of topic/brand tokens and `lbpf-pill` variants.
  - **Booking/CTA buttons:** classes like `.btn-success`, `.tour-badge`, `.cta-button` use raw blues/greens/oranges outside the LBPF/Portugal/Lisbon palette.

- **Conclusion:** LXT is visually coherent but encodes many decisions directly in `guide-page.css`. Under BRAND STRICT these need to be either:
  - Mapped to existing tokens; or
  - Promoted to new tokens and documented in the Brand Pack before reuse.

---

## 5. Admin main (`admin.html`)

- **Status:** 🔴 Visually functional, but its own mini design system
- **Uses:** `css/template.css`, `css/guide-page.css` + large inline `<style>` block.
- **Differences vs Brand:**
  - Heavy use of Tailwind-style greys (`#f3f4f6`, `#0f172a`, `#020617`, `#e5e7eb`, `#6b7280`, `#111827`) not defined as tokens.
  - Shell and sidebar backgrounds (`#020617` dark shell) are not aligned with Admin template guidance (Lisbon light grey + calm surfaces).
  - Reuses `guide-page.css` booking/guide styles inside Admin, creating a coupling between public guide layout and admin forms.
  - No use of `lbpf-card` / `lbpf-tile` primitives yet; it defines its own pill/button/card patterns inline.

---

## 6. Pocket Admin (`guide-admin.html`)

- **Status:** 🟡 Closer to BRAND, but still mixed
- **Uses:** `css/template.css`, `css/brand-components.css` + inline `<style>`.
- **Positive:**
  - Page background and shell use `background: var(--background);`.
  - Header avatar pill, status tags, and main actions reuse `lbpf-pill` variants (`--ghost`, `--tag`).
  - Main cards/tiles use `lbpf-tile lbpf-tile--dashboard` for shape and padding.
- **Differences:**
  - Inline CSS still uses Tailwind-like neutral colors (`#e5e7eb`, `#111827`, `#6b7280`) instead of mapped Brand tokens.
  - Bottom nav background gradient (`rgba(243,244,246,...)`) is not documented as an admin nav pattern in the Brand Pack.
  - Form controls (inputs, textareas) define their own borders, radii, and focus shadows rather than a shared input primitive.

---

## 7. Summary & priorities

1. **Global tokens + Brand Pack** – ✅ Solid foundation; BRAND STRICT rules now written for humans + AI.
2. **Main public pages (index + main.css)** – 🟡 Mostly on-brand; clean up radii/shadows and white card surfaces into `lbpf-card` primitives.
3. **Static legal/contact pages** – 🟡 Content fine; styling uses ad-hoc colors (especially blues and status colors) and inline CSS.
4. **LXT guide + bento (guide-page.css)** – 🟡 Strong look but many hidden rules (gradients, pill colors, shadows) that must be mapped into Brand tokens.
5. **Admin main (admin.html)** – 🔴 Separate mini design language built on Tailwind-like greys; needs refit to shared Brand primitives.
6. **Pocket Admin (guide-admin.html)** – 🟡 Already using Brand components, but still has non-token neutrals and custom nav/background treatments.

Next recommended steps under BRAND STRICT:
1. Normalise `css/guide-page.css` (LXT) to use only Brand + component tokens, promoting any necessary new values into the Brand Pack.
2. Refactor Admin main and Pocket Admin to drop inline visual rules and rely on `template.css` + `brand-components.css` + a small shared admin CSS.
3. Gradually replace inline styling in `contact.html` and `terms.html` with reusable card / pill primitives.
