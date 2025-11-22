# DECISION · 2025-11-20 · LBPF Guide Bento Hero Desktop V0.2

## 1. Problem

We needed the LBPF Guide Bento hero (LXTourguide page) to look **professional and consistent** with the bento tiles below:

- Hero and tiles must share the same horizontal content edges (within the 880 → 816px frame).
- The hero should behave visually like a **"tile 0"** above the 7 bento tiles.
- Layout must be robust for future guides and ready for CMS/GuideBentoPage schema.

## 2. Options considered (short)

1. **Ad-hoc alignment tweaks**  
   - Manually nudging avatar, tagline and logo until the screenshot looked “okay”.  
   - Risk: hidden margins/padding, hard to reproduce for future guides.

2. **Hero as a structured wide tile (chosen)**  
   - Treat the hero as a wide tile with the **same inner padding** as `.bento-tile`.
   - Keep the 880/816 content frame and the left/right structure (avatar+heading vs logo), but align them using predictable rules.

## 3. Decision

We chose **Option 2: Hero as a structured wide tile** and froze **Desktop Hero V0.2** as the canonical pattern for LBPF Guide Bento Template v1.

Key points:

1. Hero lives in the normal `page-container` with `--content-width: 880px` and 32px padding each side (816px usable).  
2. On desktop, `.guide-bento-hero-main` and `.guide-bento-hero-tags-row` now use the same horizontal padding as `.bento-tile` (`padding: 0 1.25rem`), so hero content lines up with tile content.  
3. Left/right structure is kept as a 70/30 flex split between avatar+text and the LBPF logo block.  
4. The LBPF logo block is a single clickable home chip (logo + tagline) with a compact upright rectangle style.  
5. Final copy and detailed spec are stored in `docs/HERO_GUIDE_BENTO_V02_2025-11-20.md`.

## 4. Rationale (2–3 sentences)

This decision makes the hero look and feel like part of the same design system as the bento tiles, with clear, repeatable rules instead of ad-hoc manual nudging. It gives future guides and the CMS a stable, documented pattern while still allowing us to refine **phone behaviour** separately using media queries.

## 5. Next actions

1. **Phone hero polish (Option C)**  
   - Refine only `@media (max-width: 768px)` to make the hero a clean vertical column on small screens, while keeping this desktop spec untouched.

2. **CMS blueprint alignment**  
   - Ensure `GuideBentoPage.HeroBlock` in `MASTER_CMS_GOD_TOOL_BLUEPRINT.md` maps cleanly onto the frozen desktop hero spec (name, tagline, rating snapshot, tags, partner label, logo block).
