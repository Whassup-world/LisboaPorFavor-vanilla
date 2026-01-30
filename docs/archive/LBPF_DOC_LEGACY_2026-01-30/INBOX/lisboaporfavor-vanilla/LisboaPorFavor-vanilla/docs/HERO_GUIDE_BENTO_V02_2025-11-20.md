# LBPF Guide Bento Hero · Desktop V0.2 (2025-11-20)

**Project:** lisboaporfavor-vanilla  
**Page:** guide-bento-test-v02.html  
**Pattern:** Guide Bento Template v1 · Hero Blocks 1–4  
**Status:** FROZEN for desktop (only phone tweaks allowed)

---

## 1. Layout frame

1. **Content width**  
   - Uses global `page-container` from `template.css`.
   - `--content-width: 880px` with 32px padding left + right → **816px usable**.

2. **Hero behaves like a wide tile**  
   - `.guide-bento-hero-main` (avatar + text + logo) has horizontal padding:
     - Desktop (`@media (min-width: 769px)`): `padding: 0 1.25rem;`
   - `.guide-bento-hero-tags-row` (tags row under hero) also:
     - Desktop: `padding: 0 1.25rem;`
   - This mirrors `.bento-tile { padding: 1.1rem 1.25rem; }` so hero and tiles share the same **visual content edges**.

3. **Left / right structure (desktop)**  
   - `.guide-bento-hero-main` is a flex row:
     - Left: `.guide-bento-main-left` (avatar + heading + rating + reviews pill).
     - Right: `.guide-bento-logo-block` (LBPF logo home chip).
   - Desktop proportions:
     - `.guide-bento-main-left { flex: 1 1 auto; max-width: 70%; }`
     - `.guide-bento-logo-block { flex: 0 0 auto; max-width: 30%; }`

---

## 2. Block contents (desktop)

### 2.1 Avatar block

- Element: `.guide-bento-avatar`  
- Style: circular gold chip with guide initials.
- Current example copy: `LX`.

### 2.2 Heading block

- Wrapper: `.guide-bento-heading`
- Name (H1): `.guide-bento-name`
  - Example: `LXTourguide`.
- Tagline: `.guide-bento-tagline`
  - **Desktop/phone copy (frozen):**  
    `Local expert for Alfama, Belem and Lisbon by foot or by bike.`
  - Max 2 lines, approx 70–90 characters.

### 2.3 Rating + "See all reviews" pill

- Wrapper row: `.guide-bento-meta-row`
- Rating snapshot: `.guide-bento-rating-line`
  - Stars, rating number, review count.  
  - Example: `★★★★★ 4.9 · 120 reviews`.
- Reviews pill: `.guide-bento-reviews-pill`
  - Full-width within heading column on desktop.  
  - Visual style: soft yellow gradient pill, centered text, subtle shadow.

### 2.4 Tags row

- Wrapper row under hero: `.guide-bento-hero-tags-row`
- Tags container: `.guide-bento-hero-tags`
- Individual tags: `.guide-tag` + variants (`-id`, `-qualified`, `-verified`, `-partner`, `-languages`, `-expert`).
- Behaviour: wraps on multiple lines, aligned to same content edges as tiles.

### 2.5 Logo block (LBPF home chip)

- Block: `.guide-bento-logo-block` inside an `<a href="index.html">`  
  - Whole block (logo + text) is a **home button**.
- Logo image: `.guide-bento-logo`  
  - Example: `images/logo-720.png`.
- Logo tagline: `.guide-bento-logo-tagline`
  - **Copy (frozen):**  
    `Discover Lisbon`  
    `the way locals`  
    `actually live it`
  - Implemented with `<br>` in HTML.
- Visual style: upright rounded rectangle chip, transparent background, gold border, soft shadow.

---

## 3. Behaviour by breakpoint

### 3.1 Desktop (≥ 769px)

- `.guide-bento-hero-main` is a horizontal flex row with:
  - Avatar + heading + rating + pill on the left.
  - Logo block on the right.
- Horizontal content edges of hero align with tiles via `padding: 0 1.25rem`.
- Tags row below hero shares the same horizontal padding as tiles.

### 3.2 Phone (≤ 768px)

- Phone hero behaviour is **not yet frozen**.  
- Upcoming work (Option C) will adjust only `@media (max-width: 768px)` to make the hero behave like a clean vertical column while keeping this desktop spec untouched.

---

## 4. Copy snapshot (current LXTourguide example)

- **Name:** `LXTourguide`
- **Tagline:** `Local expert for Alfama, Belem and Lisbon by foot or by bike.`
- **Rating:** `★★★★★ 4.9 · 120 reviews`
- **Logo tagline:** `Discover Lisbon / the way locals / actually live it`
- **Tags:**  
  - `ID: PTLIS00001`  
  - `Qualified for 5 tours`  
  - `✓ Identified Guide`  
  - `Partner`  
  - `English · Dutch · German`  
  - `Local Expert`

---

## 5. Frozen rules

1. Desktop hero layout (Blocks 1–4) is frozen as of **2025‑11‑20**.  
2. Any future changes must explicitly state `SCREEN: DESKTOP` and be captured in a new decision doc.  
3. Phone hero can be refined next (Option C) using only `@media (max-width: 768px)`.
