# DECISION · 2025-11-20 · LBPF Brand Pack & Topic System

**Project:** LisboaPorFavor Vanilla  
**Context:** We need an operational brand system (not just a moodboard) that TOBE and LBPF can both use to check consistency across main, guide, tour, and admin pages.

---

## 1. Problem

LBPF had partial brand guidance (mood, rough colors, typography, spacing) but:

- No explicit mapping to Portugal/Lisbon national colors.  
- No topic/tag color system (Food, History, Events, etc.).  
- No clear rules for how templates (main/guide/admin) should use these tokens.  
- TOBE could not yet read a structured brand object to audit layout vs. brand.

We need a **frozen, documented brand pack** before applying a bold TOBE-style skin to the main and guide pages for investor/partner pitches.

---

## 2. Options considered

1. **Minimal update** – keep LBPF_BRAND_PACK as-is, just add hex codes.  
2. **Token-only update** – define color/spacing tokens but skip topics/templates.  
3. **Full operational brand system (chosen)** – extend the brand pack with:
   - Portugal/Lisbon palette,  
   - topic/tag system,  
   - radii/shadows,  
   - template usage rules,  
   - TOBE Brand schema preview.

---

## 3. Decision (frozen today)

We adopt **Option 3**:

- `docs/LBPF_BRAND_PACK.md` is now the **canonical brand system** for the vanilla project.  
- Portugal & Lisbon colors are explicitly defined and reserved for **topics/tags/accents**, not the general shell.  
- Main public, guide/tour detail, and admin templates each have clear brand-usage rules.  
- A TOBE Brand schema preview lives at the bottom of the file so the lab can later export/import this as a JSON brand object.

This file is the **recovery point** for all future brand-related changes.

---

## 4. What changed in LBPF_BRAND_PACK.md

High-level (see the file for exact wording):

- Added **Portugal & Lisbon palette** section with exact hex values:  
  `#046A38 #DA291C #FFE900 #002D72 #FFFFFF #D3AF26 #417948 #000000 #CAC9C9` and clear usage notes.
- Kept the existing LBPF shell roles (primary/secondary/accent/surfaces/text) as the base for the site frame.
- Added **radii & shadows** tokens (`radius-*`, `shadow-soft/strong`) for glossy pills and magazine-style cards.
- Defined a **topic & tag system**:
  - Food & Drinks, History & Culture, Tours & Experiences, Nightlife, Markets & Shopping, Events & Festivals.  
  - Food & Drinks subtopics: Dishes, Petiscos, Pastries, Wine/Port, Other drinks (same green family, separated by icons + tints).
- Documented **template usage** for:
  - Main public pages,  
  - Guide/tour detail pages,  
  - Admin/staff pages (non-public, muted colors, topic chips only).
- Added a **TOBE Brand schema preview** showing how `corePalette`, `ptLisbonPalette`, `topics`, and `templates` map into a JSON object.

---

## 5. Reasoning (short)

- We need to move fast on a **weekend pitch** with guides/agents, but also avoid another layout disaster.  
- Freezing the brand system first means future TOBE work and vanilla styling all reference the **same tokens** instead of inventing new ones ad hoc.  
- Portugal/Lisbon colors are powerful but can look cheap if misused; constraining them to topics/tags keeps the site premium.

---

## 6. Next actions

1. **Apply a TOBE-style "pitch skin"** to the vanilla project using these tokens (today/tomorrow):
   - Start with `index.html` (main public page).  
   - Then `lxtourguide.html` (bento guide page).  
   - Add glossy/glass pills and magazine-style cards using `radius-pill`, `shadow-soft/strong`, and the topic colors.
2. **Wire simple navigation** between main ↔ guide ↔ placeholder new-guide/new-tour/admin pages, even if those pages remain visually simple for now.
3. **Later:** extend TOBE Lab so it can:
   - Import this brand schema,  
   - Compare patterns (hero, tiles, cards) against brand rules,  
   - Flag mismatches (e.g. wrong topic color on a card).

Treat this DECISION file plus `docs/LBPF_BRAND_PACK.md` as the **brand recovery point** for the vanilla project as of 2025-11-20.
