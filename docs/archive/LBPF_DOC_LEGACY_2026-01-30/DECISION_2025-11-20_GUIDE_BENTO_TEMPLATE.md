# DECISION · 2025-11-20 · LBPF Guide Bento Template v1

**Scope:** LXTourguide guide page layout (hero + tiles + calendar) for LBPF Friday MVP.

---

## 1. Problem

We needed a **professional, reusable guide page template** for LBPF that:

1. Feels like a modern product page (not a legacy card layout).
2. Works on both **desktop and phone** with precise alignment and limited width (816px usable).
3. Scales to **new guides** later via a CMS / God Tool form.

The existing `lxtourguide.html` layout (hero card + right sidebar availability card) was not aligned with the new brand and UX goals.

---

## 2. Context

1. We designed and iterated on `guide-bento-test.html` inside `lisboaporfavor-vanilla`:
   - **Hero Blocks 1–4**: avatar, name, tagline, rating + "See all reviews" pill, hero tags, LBPF logo block.
   - **Block 5**: interactive **bento tiles** acting as buttons with accordion behavior (only one open):
     - Tile 1: See my bio.
     - Tile 2: Reviews.
     - Tile 3: See my tours.
     - Tile 4: Check availability (mini calendar + booking controls).
     - Tile 5: Favourite spots.
     - Tile 6: Reviews & photobook.
     - Tile 7: Social & contact.
   - On phone and desktop we respected the 880px container / 816px content width.

2. Hero state:
   - Original frozen hero was **dark** (photo background + gradient) with bright tags and a yellow reviews pill.
   - For the template prototype we also created a **light skin** version (`#F9FAFB` background) while keeping structure identical.
   - **Block 3 (logo block)** contains the LBPF logo + tagline and is treated as a single, tappable block.

3. Tiles state:
   - Tiles have consistent padding, radius, hover, and open/close animation.
   - The "Check availability" tile contains a compact month view calendar with month navigation and time-of-day pills.

---

## 3. Options Considered

1. **Keep current `lxtourguide.html` layout** and only tweak colors/typography.
2. **Partially update** the old layout (e.g. badges, hero only) but keep sidebar calendar.
3. **Adopt a new "Guide Bento" pattern** as the canonical guide page template (hero + tiles + embedded calendar).

---

## 4. Decision

We choose **Option 3**.

- `guide-bento-test.html` becomes **Guide Bento Template v1** for LXTourguide and future guides.
- Hero **Blocks 1–4** and tile **Block 5** structure are **frozen** as the reference pattern for LBPF MVP.
- **Block 3 (logo block)** is defined as a **clickable home button**: the whole block (logo + tagline) should navigate back to the LBPF home page.
- Visual skin (dark vs light background) is considered a **theme**, not a structural change.

---

## 5. Reasoning

1. **Pattern-first:** A single, strong guide template makes it possible to auto-generate new guide pages from a CMS form and JSON schema.
2. **UX quality:** The hero + tiles model looks and feels like a premium listing page while staying simple enough for MVP.
3. **Scalability:** Tiles map cleanly to future CMS fields (bio, reviews, tours, availability, favourites, photobook, social/contact, QR, LBPF contact).
4. **Demonstration value:** For Friday, we can show one fully built guide (LXTourguide) while clearly hinting that more guides can be created by filling a form.

---

## 6. Next Actions

1. **Polish Guide Bento Template v1**
   - Refine type, spacing, colors, and hover states for all tiles on desktop + phone.
   - Clean up placeholder copy and make it professional but still adaptable per guide.
   - Ensure the **logo block (Block 3)** is implemented as a button/link to LBPF home.

2. **Define Guide CMS form & schema**
   - See `BRAINSTORM_2025-11-20_GUIDE_CMS_FORM.md`.
   - Extract all required/optional fields per block (hero, tiles, calendar, social, QR, LBPF contact).

3. **Integrate with LBPF data**
   - Map the template to `guide-lxtourguide.js` fields (welcome texts, tours, images, reviews).
   - Plan a future `guides.json` or similar structure that new guides can be written into.

---

## 7. Related Documents

- `BRAINSTORM_2025-11-20_GUIDE_CMS_FORM.md` – form + schema ideas for generating guide pages.
- `MASTER_CMS_GOD_TOOL_BLUEPRINT.md` – main architecture; will gain a Guide Bento Template section.
- `DECISION_2025-11-17_TOBE_GOD_TOOL_PATTERN_ENGINE.md` – high-level God Tool / pattern engine vision.
- `BRAINSTORM_2025-11-17_TOBE_GOD_TOOL_PATTERN_ENGINE.md` – earlier pattern engine brainstorm.
