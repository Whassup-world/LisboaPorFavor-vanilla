**START METADATA**

1.0.1  Metadata Field           Core - Brand Pack
1.0.2  Title                    LBPF_BRAND_PACK.md
1.0.3  Version                  V1.0.0
1.0.4  Version History          2026-01-31: Added metadata section
                                2025-11-18: Initial creation
1.0.5  Date Modified            2026-01-31 @ 15.52 hour
1.0.6  Date Created             2025-11-18 @ 00.00 hour
1.0.7  File Type                MD
1.0.8  Tags                     lbpf, brand, design-system, colors, typography, components
1.0.9  Description              Visual brand system for LisboaPorFavor including color palette, typography, component styles, and design guidelines
1.0.10 Source                   USER
1.0.11 Confidentiality Level    INTERNAL
1.0.12 Owner                    USER
1.0.13 Canonical path           lisboaporfavor-vanilla/docs/core/LBPF_BRAND_PACK.md
1.0.14 Local mirror             (optional)
1.0.15 Remote mirror            GitHub: Whassup-world/LisboaPorFavor-vanilla

**END METADATA**

---

# LBPF Brand Pack · LisboaPorFavor (Draft)

**Last updated:** 2026-01-31

This brand pack defines the visual system for the LisboaPorFavor vanilla site. It is written so both humans and AIs can use it, and it should stay in sync with TOBE Brand Lab later.

---

## 1. Brand Mood

- Travel + fashion magazine feel.
- Premium but warm and welcoming (not corporate, not "cheap tourist").
- Strong tie to Portugal (red/green) without looking like Christmas.

Use photography and layout to feel cinematic and story-driven.

---

## 2. Color System

### 2.1 Roles

- **Primary** – main LBPF color (key buttons, important links, some headings).
- **Secondary** – supporting accent (badges, highlights, map pins, smaller CTAs).
- **Accent** – premium touches used sparingly (borders, icons, small highlights).
- **Surfaces** – backgrounds (cards, page backgrounds).
- **Text** – main body text and muted/supporting text.

### 2.2 Palette (first iteration)

_Exact hex can be tuned later; names describe the feeling._

- **Primary – Deep Wine Red**  
  Usage: primary buttons, key highlights, some headings.  
  Feel: rich red wine / lipstick, more elegant than bright tomato.

- **Secondary – Dark Emerald Green**  
  Usage: badges, supporting CTAs, special labels, map markers.  
  Feel: Lisbon tiles / azulejos green, works alongside wine red.

- **Accent – Warm Gold / Champagne**  
  Usage: subtle lines, icons, borders, small highlights.  
  Feel: premium, sunlit, not yellow highlighter.

- **Surface – Warm Off‑White**  
  Usage: page background, card backgrounds.  
  Feel: light cream/eggshell, not pure white.

- **Text – Deep Charcoal**  
  Usage: main text color.  
  Feel: very dark brown/grey, easier on the eyes than pure black.

Implementation note: in CSS these will become variables like `--lbpf-color-primary`, `--lbpf-color-secondary`, `--lbpf-color-accent`, `--lbpf-surface`, `--lbpf-text`.

### 2.3 Portugal & Lisbon palette (for topics & accents)

These are the exact national and city colors. They are mainly used for **topics, tags, and special accents**, not for the general LBPF shell.

- **Portugal green** `#046A38`  
  Deep national green. Used as a strong accent for Food & Drinks tags, map pins, and selected highlights.
- **Portugal red** `#DA291C`  
  National red. Used for History/heritage tags and important warning labels (sparingly).
- **Portugal yellow** `#FFE900`  
  Bright flag yellow. Used for Events/Festivals highlights and background tints.
- **Portugal blue** `#002D72`  
  Deep blue. Works as a strong accent for Tours & Experiences or background for light text.
- **Portugal white** `#FFFFFF`  
  Pure white for text or surfaces when strong contrast is needed.
- **Lisbon gold** `#D3AF26`  
  Lisbon coat-of-arms gold. Used for premium details (badges, icons, subtle borders).
- **Lisbon green** `#417948`  
  Softer green used as the base Food & Drinks topic color (backgrounds and soft accents).
- **Lisbon black** `#000000`  
  Used for typography in high-contrast layouts and some Nightlife accents.
- **Lisbon light grey** `#CAC9C9`  
  Neutral grey used for admin surfaces, dividers, and muted UI elements.

Implementation note: in CSS these become tokens such as `--pt-green`, `--pt-red`, `--pt-yellow`, `--pt-blue`, `--lisbon-gold`, `--lisbon-green`, `--lisbon-grey` and are referenced by the topic & tag system below.

### 2.4 Neutral greys (UI scale)

These neutrals are used for UI chrome (inputs, dividers, calendars, light panels) on both **guide** and **admin** templates. They support, but do not replace, the core LBPF text/surface roles.

- **Neutral 900** `#111827` – deep UI grey for strong labels, icons, and high-contrast text on light panels.  
- **Neutral 800** `#1F2937` – headings/subheads on grey cards; strong body text in functional UI.  
- **Neutral 600** `#4B5563` – medium grey text for important meta information.  
- **Neutral 500** `#6B7280` – secondary/meta text (dates, hints, helper copy).  
- **Neutral 400** `#9CA3AF` – icons, placeholders, subtle dividers.  
- **Neutral 300** `#D1D5DB` – input borders, pill borders, very light dividers.  
- **Neutral 200** `#E5E7EB` – calendar outlines, card separators, table rows.  
- **Neutral 100** `#F3F4F6` – light grey surface (panels, sticky cards).  
- **Neutral 50**  `#F9FAFB` – lightest grey surface; used as the base background for the LXT guide bento page.

Implementation note: in CSS these map to variables like `--lbpf-neutral-900` … `--lbpf-neutral-50`, defined in `css/brand-components.css` and reused by guide + admin templates. Page-specific CSS must use these tokens, not ad-hoc grey hex values.

### 2.5 LXT PT/Lisbon usage (balanced mode)

For the **LXT guide bento page** (`guideTour` template) we use a **balanced** application of the PT/Lisbon palette:

- **CTAs (book / request / primary actions)**  
  - Backgrounds use LBPF wine red tokens: `--lbpf-color-primary` and `--lbpf-color-primary-dark`.  
  - Text is white or Portugal white `#FFFFFF` (tokenised as `--pt-white` where needed).

- **Ratings & review emphasis**  
  - Star icons and the "See all reviews" pill use LBPF accent gold `--lbpf-color-accent` plus neutral greys for text and borders.  
  - No Tailwind-style amber/orange hexes; everything derives from accent gold + neutrals.

- **Hero tags & status chips (Qualified, Languages, Partner, Expert, ID, etc.)**  
  - Use the **Portugal & Lisbon palette** as topic/status colors:
    - Qualified / Tours & Experiences → Portugal blue `#002D72`.  
    - Languages / availability/info → Portugal green `#046A38` and Lisbon green `#417948`.  
    - Partner / warnings → Portugal red `#DA291C`.  
    - Expert / premium / ID badges → Lisbon gold `#D3AF26` plus neutral greys.
  - Tags are implemented as `lbpf-pill` / `lbpf-pill--tag` style components, not bespoke per-class visuals.

- **Calendar availability**  
  - Available states blend PT greens (Portugal green / Lisbon green) with neutral greys (`--lbpf-neutral-*`) for outlines and muted days.  
  - Selected states use LBPF accent gold plus neutrals, not random yellows.

Implementation note: any LXT color that is not clearly one of: **core LBPF**, **Portugal/Lisbon palette**, or **neutral grey token** must be treated as a proposal and added here first before it appears in CSS.

---

## 3. Typography

### 3.1 Font Families

- **Headings (H1–H3)** – `Playfair Display`, serif.  
  Usage: page titles, big hero headlines, important section headings.

- **Body text (paragraphs)** – `Inter`, sans-serif.  
  Usage: all normal running text, tour descriptions, FAQs.

- **Small labels / meta text** – also `Inter`, uppercase with a bit of letter-spacing.

### 3.2 Roles & Weights

Keep it simple for V1:

- **Display / Hero title**: Playfair Display, 700 weight.  
- **Section headings**: Playfair Display, 600–700 weight.  
- **Body text**: Inter, 400 weight.  
- **Emphasis / buttons**: Inter, 500–600 weight.

---

## 4. Spacing System (4/8 scale)

We use a simple spacing scale based on 4px units.

- `space-4`  = 4px  (0.25rem)
- `space-8`  = 8px  (0.5rem)
- `space-12` = 12px (0.75rem)
- `space-16` = 16px (1.0rem)
- `space-24` = 24px (1.5rem)
- `space-32` = 32px (2.0rem)
- `space-40` = 40px (2.5rem)
- `space-64` = 64px (4.0rem)

Usage examples:

- Section top/bottom padding: 32–64px depending on importance.  
- Card padding: 16–24px.  
- Gaps between cards: 24–32px.

Implementation note: in CSS these become variables like `--space-4`, `--space-8`, `--space-16`, etc.

### 4.2 Radii & shadows

Radii tokens (used for cards, buttons, pills):

- `radius-none`  = 0px (flat corners)  
- `radius-sm`  = 4px (small rounding for cards and inputs)  
- `radius-md`  = 8px (default for larger cards and sections)  
- `radius-pill`  = 999px (fully rounded pills and primary CTAs)

Shadow tokens (used to control how "glossy" elements feel):

- `shadow-soft`  = soft, subtle shadow for cards and content blocks.  
- `shadow-strong`  = stronger, more obvious shadow for key CTAs or spotlight tiles.

Implementation note: radii and shadows are applied consistently to keep the site looking premium. For example, guide/tour cards and topic pills both use `radius-md` or `radius-pill` and `shadow-soft`, while only hero CTAs use `shadow-strong`.

---

## 6. Component Standards

### 6.1 Tour Cards (Benchmark Layout - Jan 31, 2026 - FINAL)

**Structure:**
```
.tour-card (flexbox column, height: 100%)
  └─ .tour-card-image (180px height, object-fit: contain)
  └─ .tour-card-content (padding: 1rem 1.5rem 1.5rem)
      ├─ h4 (tour name, center-aligned, min-height: 2.5em, line-height: 1.25)
      ├─ .tour-category (center-aligned, italic)
      ├─ .tour-meta (duration/capacity, center-aligned)
      ├─ .tour-description (left-aligned, flex-grow: 1)
      ├─ .tour-booking-note (center-aligned, italic, secondary color)
      └─ .tour-btn (width: 100%, margin-top: 0)
```

**Critical Alignment Solution:**
- **h4 uses `min-height: 2.5em` with `line-height: 1.25`** to reserve exactly 2 lines of vertical space
- This ensures descriptions start at the same vertical position regardless of header wrapping
- Single-line headers (e.g., "Belem Classic Bike Tour") occupy same space as two-line headers (e.g., "Alfama Vintage Market Walking tour with tastings")
- **Display: block** (not flexbox) for predictable text flow

**Text Boundaries:**
- Text starts 1.5rem from left edge (right of boundary line)
- Text cannot extend beyond CTA borders on right side
- All child elements have `margin: 0` on left/right
- Container padding controls all spacing

**Image Specifications:**
- **Recommended:** 16:9 landscape (640×360px or 800×450px)
- **Alternative:** 3:2 landscape (600×400px)
- **Avoid:** Portrait orientation (creates awkward letterboxing)

**Visual Hierarchy:**
1. Image (zoomed to show full composition)
2. Tour name (h4, bold, center, 2-line reserved space)
3. Category (italic, secondary color, center)
4. Duration & capacity (secondary color, center)
5. Description (grows to fill space, left-aligned)
6. Booking note (center, italic, secondary color)
7. CTA button (pushed to bottom, gold background)

**Key CSS Values:**
```css
.tour-card h4 {
  min-height: 2.5em;
  line-height: 1.25;
  display: block;
  text-align: center;
}
```

This layout is the **standard benchmark** for all tour card implementations across the LBPF platform.

---

## 5. How this maps to implementation

1. **Vanilla CSS**  
   - Define color, typography, and spacing tokens as CSS variables in the main stylesheet.  
   - Use them for Landing/Home first, then extend to guide/tour pages.

2. **TOBE Brand Lab (future)**  
   - Extend Brand Lab to support the same concepts: brand colors, typography roles, spacing scale.  
   - Ensure TOBE exports these values so LBPF can import them without re-deciding.

3. **Multi-brand future**  
   - Later, add multiple token sets (one per brand) while reusing the same patterns/layout.

This document is intentionally short. If anything here changes significantly, update this file and mirror it into TOBE's blueprint where relevant.

---

## 6. Topic & tag color system

This section defines how the Portugal/Lisbon palette is used for topics and tags so we can quickly see matching vs non-matching elements.

### 6.1 Main topics

Planned public-facing topics:

- **Food & Drinks**  
  Base topic color: Lisbon green `#417948` (soft) with Portugal green `#046A38` (strong).  
  Usage: restaurants, cafés, wine bars, tastings.
- **History & Culture**  
  Base topic color: Portugal red `#DA291C`.  
  Usage: monuments, museums, neighbourhood history, walking tours.
- **Tours & Experiences**  
  Base topic color: Portugal blue `#002D72`.  
  Usage: city tours, boat trips, tuk-tuks, MTB experiences.
- **Nightlife**  
  Base topic color: Lisbon black `#000000` with Lisbon gold `#D3AF26` as accent.  
  Usage: bars, clubs, late-night Fado, rooftop events.
- **Markets & Shopping**  
  Base topic color: Portugal yellow `#FFE900` with Lisbon gold `#D3AF26`.  
  Usage: markets, boutiques, concept stores, souvenirs.
- **Events & Festivals**  
  Base topic color: bright combinations of Portugal yellow `#FFE900` and Portugal red `#DA291C`.  
  Usage: concerts, festivals, seasonal events.

### 6.2 Food & Drinks subtopics

Food & Drinks is broken down into subtopics:

- **Dishes**  
- **Petiscos** (tapas)  
- **Pastries**  
- **Wine / Port**  
- **Other drinks**

All Food & Drinks subtopics share the same base green family (Lisbon green / Portugal green).  
Differences are shown via **icons/emoji and tints**, not totally new colors. For example:

- Dishes  – plate/knife and fork icon, slightly darker tint.  
- Petiscos  – small plates icon, playful tint.  
- Pastries  – pastry/croissant icon, lighter tint.  
- Wine / Port  – wine glass icon, deep green + wine-red accents.  
- Other drinks  – glass/cocktail icon.

Implementation note: in CSS, subtopics can be represented as modifier classes (for example `.topic-food.topic-pastries`) that adjust the icon and tint while staying within the Food & Drinks green base.

### 6.3 Topic usage rules

1. Topic colors are used mainly for **tags, pills, badges, and topic bands**, not for the global navbar or footer background.  
2. Each card or tag should use **only one topic color family** at a time.  
3. Admin/non-public views can show topic colors more softly (lower opacity or grey borders).

---

## 7. Template types & layout usage

We distinguish at least three template types:

1. **Main public pages** (homepage, public tours overview)  
   - Use the mature LBPF shell (primary/secondary/accent, surfaces, text).  
   - Topic colors appear on cards, tags, and certain sections (e.g. a Food & Drinks band), but not in the main navbar background.  
   - CTAs use LBPF primary color plus `radius-pill` and `shadow-strong` for key actions.
2. **Guide and tour detail pages**  
   - Use the same LBPF shell for layout and typography.  
   - Topic colors help users see **what kind** of guide/tour this is (Food & Drinks, History, etc.).  
   - Guide tags and bento tiles use topic colors in a controlled way so the page stays premium, not noisy.
3. **Admin / staff / agent pages (non-public, after login)**  
   - Base surfaces: white and Lisbon light grey `#CAC9C9`.  
   - Text: black and deep charcoal.  
   - Topic colors only in small indicators (status chips, small tags) so the interface stays calm and functional.

Implementation note: template types can be represented as body classes (for example `body.lbpf-main`, `body.lbpf-guide`, `body.lbpf-admin`) so CSS can enforce different usage rules per template.

---

## 8. TOBE Brand schema (preview)

This brand pack will later mirror into a TOBE Brand object that can be exported and checked.
A simplified JSON shape:

```json
{
  "brandId": "lisboaporfavor",
  "corePalette": {
    "primary": "#xxxxxx",
    "secondary": "#xxxxxx",
    "accent": "#xxxxxx",
    "surface": "#xxxxxx",
    "text": "#xxxxxx"
  },
  "ptLisbonPalette": {
    "ptGreen": "#046A38",
    "ptRed": "#DA291C",
    "ptYellow": "#FFE900",
    "ptBlue": "#002D72",
    "lisbonGold": "#D3AF26",
    "lisbonGreen": "#417948",
    "lisbonGrey": "#CAC9C9"
  },
  "topics": {
    "foodDrinks": {
      "base": "#417948",
      "strong": "#046A38",
      "subtopics": [
        "dishes",
        "petiscos",
        "pastries",
        "winePort",
        "otherDrinks"
      ]
    },
    "historyCulture": { "base": "#DA291C" },
    "toursExperiences": { "base": "#002D72" },
    "nightlife": { "base": "#000000", "accent": "#D3AF26" },
    "marketsShopping": { "base": "#FFE900", "accent": "#D3AF26" },
    "eventsFestivals": { "base": "#FFE900" }
  },
  "templates": [
    "mainPublic",
    "guideTour",
    "adminStaff"
  ]
}
```

Exact LBPF core hex values (`#xxxxxx`) can be filled once the final palette is locked. The important part now is that topics and PT/Lisbon colors are defined and consistent across templates.

---

## 9. Brand Components System (global)

This section defines **global UI components** (pills, cards, tiles, nav chips) that must look and behave consistently across all three template types:

- `mainPublic` – homepage and general public pages
- `guideTour` – guide and tour detail pages (including bento)
- `adminStaff` – admin / staff / agents (desktop shell + Pocket Admin)

### 9.1 Component primitives

We build everything on a small set of primitives that use the tokens from sections 2–4:

1. **Pills / chips**  (for tags, filters, small CTAs)
   - Base: `lbpf-pill` → `radius-pill`, `shadow-soft`, Inter 500–600, `--lbpf-text`.
   - Role modifiers:
     - `lbpf-pill--primary`  (primary action, wine red background).
     - `lbpf-pill--ghost`  (transparent/glassy, subtle border, used on photos/hero backgrounds).
     - `lbpf-pill--tag`  (topic tags, uses topic color family; smaller font, tighter padding).
   - State modifiers (optional later): `--active`, `--disabled`, `--warning`.

2. **Cards** (rectangular surfaces with content)
   - Base: `lbpf-card` → `radius-md`, `shadow-soft`, `--lbpf-surface` background.
   - Variants:
     - `lbpf-card--hero` (stronger shadow, larger padding, can sit on photo/gradient backgrounds).
     - `lbpf-card--admin` (flatter, calmer; less shadow, more grey for `adminStaff`).

3. **Tiles** (interactive cards that feel more “bento” / prominent)
   - Base: `lbpf-tile` → same as `lbpf-card`, but:
     - Higher `shadow-strong` when active.
     - Optional glossy/gradient background for `guideTour` hero/bento.
   - Variants:
     - `lbpf-tile--bento` (used on guide bento grid).
     - `lbpf-tile--dashboard` (used on admin dashboards).

4. **Nav items / pills** (bottom nav, sidebar, tabs)
   - Base: `lbpf-nav-pill` → pill shape, small icon + label.
   - State modifiers: `lbpf-nav-pill--active`, `--muted`.

Implementation note: these primitives will live in a shared CSS file (for example `css/brand-components.css`) and be referenced by the three template types so we can adjust them in one place.

### 9.2 Template-specific usage rules

1. **Main public (`mainPublic`)**
   - `lbpf-pill--primary` used for key CTAs only (book, contact, subscribe).
   - `lbpf-pill--ghost` used on photos/hero bands when we want a subtle action.
   - Topic tags use `lbpf-pill lbpf-pill--tag` with the topic color family.
   - Cards and tiles use `lbpf-card` / `lbpf-tile`, with bolder versions only for the main hero.

2. **Guide / tour detail (`guideTour`)**
   - Guide tags and bento tiles use `lbpf-pill--tag` and `lbpf-tile--bento` so every guide/tour page feels like the same system (even if photos differ).
   - The LXT guide bento hero uses a `lbpf-card--hero`/`lbpf-tile--bento` combination with PT/Lisbon gradients, not ad hoc styles.
   - Pills for reviews, languages, and tour meta all derive from `lbpf-pill` variants.

3. **Admin / staff (`adminStaff`)**
   - Same primitives, but with calmer application:
     - Backgrounds: more `--lisbon-grey` + white.
     - `lbpf-card--admin` for most cards; minimal gradients.
     - Pills mainly for status (draft/published), filters, and small actions.
   - Pocket Admin bottom nav and buttons also use `lbpf-nav-pill` / `lbpf-pill--ghost` to stay on-brand while remaining functional.

### 9.3 Change propagation rules

1. **Single source of truth**
   - Any change to shapes, radii, shadows, or base pill/card styles happens **only** in the brand components layer, not per-page CSS.

2. **New UI work**
   - Before adding a new visual pattern (button, tile, chip), decide: can it reuse an existing primitive?
   - If not, add a new primitive/variant here (and to `brand-components.css`) instead of hardcoding styles in page-specific CSS.

3. **Admin visibility (future)**
   - The admin shell can later include a read-only "Brand & Components" view that:
     - Renders the current `lbpf-pill`, `lbpf-card`, `lbpf-tile`, `lbpf-nav-pill` variants.
     - Shows which tokens (colors, fonts, radii, shadows) they are using.

This system ensures that once we refine the brand look (for example, slightly different radius or gloss level), **Main, Guide, and Admin templates all update automatically** without hand-editing every page.

### 9.4 BRAND STRICT implementation rules (humans + AI)

1. **Source of truth**
   - This Brand Pack plus the tokens in `css/template.css` are the only allowed definitions for colors, radii, shadows, spacing, and core component primitives.
   - No page-specific CSS (for example `guide-page.css`, `main.css`, admin CSS) may introduce new visual values that are not defined here as tokens.

2. **Change process**
   - When a new visual need appears (new color, radius, shadow, spacing, or component behaviour), it must be proposed in this document first.
   - Once approved, add or update the corresponding token(s) and primitives here, then implement them in `css/brand-components.css` and only then use them in page-specific CSS.

3. **Implementation order**
   - For guide / tour work, always start from `css/guide-page.css` and align it to these tokens before touching Admin or other templates.
   - Admin / Pocket Admin styles must reuse the same tokens and primitives; they may not define their own independent visual system.

4. **AI and human collaboration**
   - Any AI assistant working on this project must read this file and `SOURCE_OF_TRUTH.md` before changing CSS/HTML.
   - If an AI wants to use a value that is not clearly mapped to a Brand token, it must treat it as a **proposal**, surface it to the human, and only apply it after it has been written into this Brand Pack.
   - Human coders must follow the same rule: no "quick CSS hacks" outside the token system; all changes must flow through this document.
