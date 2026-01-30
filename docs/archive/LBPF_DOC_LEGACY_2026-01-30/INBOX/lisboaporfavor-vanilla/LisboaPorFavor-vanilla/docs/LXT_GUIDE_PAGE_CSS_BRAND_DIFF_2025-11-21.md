# LXT Guide Page – BRAND STRICT CSS Diff (2025-11-21)

**Scope:** Full audit of `css/guide-page.css` for the LXT guide page (including legacy guide layout and new bento hero/tiles) against:

- `docs/LBPF_BRAND_PACK.md` (colors, spacing, radii, shadows, components)
- `css/template.css` (implementation tokens)
- `css/brand-components.css` (pills, cards, tiles, nav)

Goal: identify all **non-token visual values** (colors, radii, shadows, spacing, gradients, component patterns) and propose how to:

1. Map them to **existing tokens**, or
2. Introduce **new tokens** in the Brand Pack, then use them here.

No CSS has been changed yet; this is an analysis document.

---

## 1. Color audit

### 1.1 On-brand / tokenised colors (OK)

These already align with Brand Pack and `template.css`:

- `var(--lbpf-color-primary)`, `var(--lbpf-color-secondary)`, `var(--lbpf-color-accent)`, `var(--lbpf-color-accent-soft)`
- `var(--lbpf-surface)`, `var(--lbpf-text)`, `var(--lbpf-text-muted)`
- `var(--text-primary)`, `var(--text-secondary)` (legacy tokens mapped in `template.css`)
- PT/Lisbon palette in `:root`:
  - `--pt-green: #046A38;`
  - `--pt-red: #DA291C;`
  - `--pt-yellow: #FFE900;`
  - `--pt-blue: #002D72;`
  - `--pt-white: #FFFFFF;`
  - `--lx-gold: #D3AF26;`
  - `--lx-green: #417948;`
  - `--lx-black: #000000;`
  - `--lx-silver: #CAC9C9;`

These are **fine** under BRAND STRICT.

### 1.2 Neutrals and greys (need mapping)

The following greys/near-blacks appear as literals:

- `#1F2937`, `#111827`, `#4B5563`, `#6B7280`, `#9CA3AF`, `#D1D5DB`, `#E5E7EB`, `#F3F4F6`, `#F9FAFB`

**Usage examples (non-exhaustive but representative):**

- `.tour-title`, `.review-name` → `color: #1F2937;`
- `.review-date`, `.tour-description`, many meta texts → `color: #6B7280;`
- `.calendar-day` → `color: #9CA3AF;`
- `.booking-calendar`, `.bento-calendar` → `border: 1px solid #E5E7EB; background: #F9FAFB;`
- `.bento-calendar-nav-btn:hover` → `background: #F3F4F6;`
- `.bento-time-pill` → `border: 1px solid #D1D5DB; background: #F9FAFB;`

**Brand situation:** Brand Pack defines text roles and a single `surface` color, but **does not yet define a neutral grey scale**.

**Proposal (new tokens):**

Add a neutral scale to Brand Pack and map usages:

- `--lbpf-neutral-900: #111827;` (deep UI grey for labels/headings)
- `--lbpf-neutral-800: #1F2937;`
- `--lbpf-neutral-600: #4B5563;`
- `--lbpf-neutral-500: #6B7280;`
- `--lbpf-neutral-400: #9CA3AF;`
- `--lbpf-neutral-300: #D1D5DB;`
- `--lbpf-neutral-200: #E5E7EB;`
- `--lbpf-neutral-100: #F3F4F6;`
- `--lbpf-neutral-50:  #F9FAFB;`

Then gradually replace raw literals with these tokens, or with existing `--lbpf-text` / `--lbpf-text-muted` where appropriate.

### 1.3 Non-core accent colors (blues, greens, ambers)

Several bright “Tailwind-style” colors are used for badges, CTA buttons, and calendar states:

Representative values:

- Amber / golds: `#F59E0B`, `#FBBF24`, `#FACC15`, `#FEF9C3`
- Greens: `#10B981`, `#059669`, `#047857`, `rgba(11, 138, 68, …)`
- Blues: `#2563EB`, `rgba(59, 130, 246, ...)`, `#0EA5E9`, `#6366F1`
- Status red: `rgba(248, 113, 113, ...)`, etc.

**Usage examples:**

- `.stars`, `.review-stars` → `color: #F59E0B;`
- `.guide-bento-reviews-pill` → gold/amber gradient `linear-gradient(... #FEF9C3, #FACC15)`
- `.guide-tag-qualified` → blue gradient `rgba(59,130,246,0.9)` …
- `.guide-tag-languages` → green gradient `rgba(16,185,129,0.9)` …
- `.guide-tag-partner` → red gradient `rgba(248,113,113,0.95)` …
- `.btn-success` → `background: #10B981;` (emerald)
- `.bento-tour-cta`, `.bento-booking-btn` → gradient `#0EA5E9` → `#6366F1`.

**Brand situation:**

- Core Brand defines **Portugal/Lisbon palette** for topics.
- Current LXT uses **Tailwind-like accent set** that is not yet documented in Brand Pack.

**Options to resolve (to discuss/decide before editing CSS):**

1. **Re-map to PT/Lisbon palette** (preferred for long term):
   - Replace blue gradients with `ptBlue`-based tokens.
   - Replace green success with `ptGreen` / `lisbonGreen` variants.
   - Replace amber/gold combos with `lisbonGold`-based tokens and `--lbpf-color-accent`.
2. **If you want to keep current look for v1**, create a temporary accent group in Brand Pack:
   - `--lxt-accent-amber` (for stars/review badges)
   - `--lxt-accent-emerald`
   - `--lxt-accent-blue`
   - `--lxt-accent-red`

Then define named application rules (e.g. “Review stars use `--lxt-accent-amber`”) so they’re not hidden in CSS.

Under **BRAND STRICT**, we must not keep these as raw literals—either they become official tokens or they are replaced by PT/Lisbon colors.

### 1.4 Whites and surfaces

- Many blocks use `background: white;` explicitly.
- Brand Pack defines **Warm Off-White surface** and `--lbpf-surface`.

**Proposal:**

- For public-facing cards (gallery container, guide cards, tour cards, review cards):
  - Prefer `background: var(--lbpf-surface)` or define `--lbpf-surface-elevated` and use that.
- For elements meant to sit on photos/gradients (glass tiles), keep actual white but document as a specific token (e.g. `--lbpf-tile-glass-surface`).

---

## 2. Radii & shadows

### 2.1 Radii in `guide-page.css`

Non-token radii in use include:

- `border-radius: 6px;` (inputs, small pills)
- `border-radius: 8px;` (gallery items, calendar day, some cards)
- `border-radius: 10px;` (tour image wrappers)
- `border-radius: 12px;` (gallery container, hero cards, tour cards, many others)
- `border-radius: 16px;` (review strip cards, some bento cards)
- `border-radius: 18px;` (guide-bento-logo-block)
- `border-radius: 20px;`, `24px;` (CTAs, buttons)
- `border-radius: 50%` (avatars, circular icons)
- `border-radius: 999px` (pills, time pills)

**Brand situation:**

- Brand Pack currently lists:
  - `radius-none = 0`
  - `radius-sm = 4px`
  - `radius-md = 8px`
  - `radius-pill = 999px`
- `brand-components.css` updates this for tiles/cards:
  - `--lbpf-radius-sm: 6px;`
  - `--lbpf-radius-md: 16px;` (aligned with LXT bento).

This is already a **mismatch** between the textual Brand Pack (§4.2) and implementation tokens.

**Proposal (for Brand Pack before touching CSS):**

1. Update Brand Pack radius scale to match implementation and LXT reality:
   - `radius-sm = 4–6px` (small inputs, small cards) → tokenised as `--lbpf-radius-sm: 6px`.
   - `radius-md = 12–16px` (standard cards, tiles) → `--lbpf-radius-md: 16px`.
   - Introduce `radius-lg` if we want a distinct large card radius (e.g. 20px) for special sections like hero cards.
2. In `guide-page.css`, replace raw radii with:
   - `border-radius: var(--lbpf-radius-md);` for main cards/tiles.
   - `border-radius: var(--lbpf-radius-sm);` for smaller blocks (inputs, image thumbs).
   - Keep `border-radius: 50%` and `999px` as shape semantics, already allowed via `radius-pill`.

### 2.2 Shadows in `guide-page.css`

Distinct literal shadows include:

- `0 1px 4px rgba(0, 0, 0, 0.06);`
- `0 2px 8px rgba(0, 0, 0, 0.08);`
- `0 4px 16px rgba(0, 0, 0, 0.12);`
- `0 2px 12px rgba(0, 0, 0, 0.08);`
- `0 8px 24px rgba(0, 0, 0, 0.12);`
- `0 10px 25px rgba(0, 0, 0, 0.08);` (review strip cards on home but similar patterns here)
- `0 18px 45px rgba(0, 0, 0, 0.18);`
- `0 28px 70px rgba(0, 0, 0, 0.26);` (hero glass tile & bento tiles)

**Brand situation:**

- Brand Pack defines conceptual `shadow-soft` and `shadow-strong` but not exact values.
- `template.css` defines `--shadow-sm`, `--shadow-md`, `--shadow-lg`.
- `brand-components.css` maps:
  - `--lbpf-shadow-soft: var(--shadow-md, ...)`
  - `--lbpf-shadow-strong: var(--shadow-lg, ...)`.

**Proposal:**

1. In Brand Pack, explicitly tie:
   - `shadow-soft` → `--lbpf-shadow-soft`
   - `shadow-strong` → `--lbpf-shadow-strong`
   - Add optional `shadow-hero` for glass hero tile (the very strong 0 28px 70px).
2. In `guide-page.css`, replace:
   - Small card shadows (gallery, tour cards, review cards) → `box-shadow: var(--lbpf-shadow-soft);`
   - Emphasised tiles/hero tiles → `box-shadow: var(--lbpf-shadow-strong);` or new `--lbpf-shadow-hero`.

---

## 3. Spacing & typography scale

### 3.1 Spacing

`guide-page.css` uses a mix of:

- Brand-aligned values: `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, etc.
- Non-token values: `0.35rem`, `0.4rem`, `0.6rem`, `0.65rem`, `0.72rem`, `0.8rem`, `0.85rem`, `1.1rem`, `1.25rem`, `1.75rem`.

**Brand situation:**

- Spacing tokens defined: `--space-4` (0.25rem), `--space-8` (0.5rem), `--space-12` (0.75rem), `--space-16` (1rem), `--space-24` (1.5rem), `--space-32` (2rem), `--space-40` (2.5rem), `--space-64` (4rem).

**Proposal:**

1. **Map where exact matches exist** (e.g. `0.75rem` → `var(--space-12)`, `1.5rem` → `var(--space-24)`).
2. For close-but-not-equal numbers:
   - Round to nearest existing token **unless** that tiny difference is visually critical.
   - If critical (e.g. hero inner padding `1.1rem 1.25rem`), either:
     - Standardise on token (e.g. `var(--space-16)`), or
     - Introduce a named exception token (e.g. `--lbpf-hero-inner-padding-x`) and document it in Brand Pack.

### 3.2 Font sizes

`guide-page.css` uses a range of `font-size` values: `0.72rem`, `0.75rem`, `0.8rem`, `0.85rem`, `0.9rem`, `0.95rem`, `1.05rem`, `1.125rem`, `1.5rem`, etc.

Brand Pack defines roles but not an explicit font-size scale.

**Proposal:**

- Add a simple font-size role table to Brand Pack (Body, Meta, Label, Tag, Heading levels) and then:
  - Map `0.9rem` as standard body in tiles.
  - Map `0.72–0.8rem` as “meta / label / tag”.
  - Map `1.125–1.5rem` to heading levels inside tiles.

This is more of a **documentation and naming** task than a hard refactor.

---

## 4. Component patterns in `guide-page.css`

### 4.1 Cards (non-bento)

Examples: `.guide-info-card`, `.welcome-card`, `.tour-card`, `.review-card`, `.booking-card`.

Common pattern:

- `background: white;`
- `border-radius: 8px` or `12px`;
- `padding: 1.5rem;`
- Shadow variations (`0 1px 4px ...`, `0 2px 12px ...`).

**Brand intent:** these should be **`lbpf-card`** or `lbpf-card--hero` variants.

**Proposal:**

- Refactor these to share a `.lbpf-card` base (implemented in `brand-components.css`) with modifiers for hero/booking/emphasis.

### 4.2 Buttons and CTAs

Classes: `.btn-outline`, `.btn-success`, `.cta-button`, `.guide-page .btn-primary`, `.guide-page .btn-secondary`, `.bento-booking-btn`, `.bento-tour-cta`.

Issues:

- Many use their own colors, gradients, radii, and shadows, not derived from `lbpf-pill` or primary CTA spec.

**Proposal:**

- Map all primary CTAs to `lbpf-pill lbpf-pill--primary` or a clearly documented `lbpf-cta-primary` primitive.
- Outline/secondary CTAs: derive from a `lbpf-pill--ghost` / `lbpf-pill--secondary` concept rather than custom styles.

### 4.3 Pills and tags (hero + bento)

Classes: `.guide-tag`, `.guide-tag-*`, `.guide-bento-reviews-pill`, `.time-pill`, `.bento-time-pill`, calendar tags, etc.

Issues:

- Many of these are effectively **pills**, but they implement their own radii, borders, and gradients instead of using `lbpf-pill`, `lbpf-pill--tag`.

**Proposal:**

- Consolidate all pill-like elements under the `lbpf-pill` family in `brand-components.css`, with:
  - Topic-based color variants (using PT/Lisbon topic palette).
  - State variants for success/warning/info, explicitly tokenised.

### 4.4 Glass tiles and hero shell

Classes: `.lbpf-guide-bento-page .guide-bento-hero-inner`, `.lbpf-guide-bento-page .bento-tile`, `.bento-tile--open`.

Issues:

- They define their own glass gradients, strong shadows, blur/saturate levels inline.

**Proposal:**

- Define a **glass tile pattern** in Brand Pack:
  - Variables for gradient stops (e.g. `--lbpf-glass-highlight`, `--lbpf-glass-shadow`).
  - Document `backdrop-filter` usage.
- Implement once in `brand-components.css` as a `lbpf-tile--bento-glass` variant.
- Strip per-page redefinition from `guide-page.css` once this variant is stable.

---

## 5. Media queries & layout

Media queries (`@media (min-width: 769px)`, `@media (max-width: 1024px)`, `@media (max-width: 768px)`) mostly handle layout (grid columns, flex direction, padding). These are **not inherently off-brand**.

The only BRAND STRICT concern is where they change **visual primitives** (backgrounds, borders, shadows) with raw values (e.g. footer background `#F3F4F6`, border-top `#E5E7EB`). These should be mapped to the neutral/surface tokens proposed above.

---

## 6. Summary for next steps (LXT only)

1. **Update Brand Pack text (with you):**
   - Add a neutral grey scale and, if desired, a temporary LXT accent scale.
   - Reconcile radius tokens (set `radius-md` to match LXT reality and `brand-components.css`).
   - Clarify shadow levels including an optional `shadow-hero`.
   - Add a small font-size role table.

2. **Then refactor `css/guide-page.css` (no visual redesign):**
   - Replace raw greys and neutrals with the new neutral tokens.
   - Replace amber/blue/green accents with either PT/Lisbon palette tokens or approved accent tokens.
   - Replace radii/shadows with `--lbpf-radius-*` and `--lbpf-shadow-*` tokens.
   - Move pill/button patterns to `lbpf-pill` / CTA primitives where possible.

3. **Only after this LXT cleanup:**
   - Revisit Admin main and Pocket Admin to reuse the same tokens and primitives.

This document is deliberately conservative: it does **not** decide the exact new token names/values in the Brand Pack without your sign-off, but highlights all places in `guide-page.css` where hidden visual rules currently live and need to be moved into the Brand system.
