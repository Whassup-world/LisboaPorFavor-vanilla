# DECISION · 2025-11-21 · LBPF Pocket Admin v1 (Guide App)

**Project:** LisboaPorFavor Vanilla (`lisboaporfavor-vanilla`)
**Area:** Guide Pocket Admin
**Status:** Baseline spec locked for implementation

---

## 1. Problem

Guides need a **safe, simple way on their phone** to:

1. Update important profile fields (tagline, welcome text, avatar, languages).
2. Manage their availability (quick on/off, block days, "I’m sick today").
3. Control a tour lifecycle (Start, End, upload SM content, add remarks).

Without:

- Exposing edit UI to public visitors.
- Allowing unreviewed changes to go live on the public guide page.

Admin staff need:

- A clear view of **guide drafts vs published profiles**.
- A stream of SM content and tour incidents tied to specific guides/tours.

---

## 2. Decision

We will build a **separate Pocket Admin web app** called `guide-admin.html` inside the vanilla project.

1. **Separate entry point**
   - New page: `guide-admin.html` (mobile-first but OK on desktop).
   - Not linked from the public navbar; access only via **magic link** (email/WhatsApp) in future.
   - Uses existing LBPF brand tokens from `css/template.css` and guidance from `LBPF_BRAND_PACK.md`.

2. **Screens for v1**
   - **Home** – cards for next tour, My profile, Availability, Requests.
   - **Edit profile** – tagline, welcome text, avatar, languages, short note to admin.
   - **Availability** – simple day/slot toggles (Morning/Afternoon/Evening) + quick block/sick actions.
   - **Tour controls** – Start/End tour and debrief (remarks + SM upload) per upcoming tour.

3. **Data model (v1, local/mock)**
   - Read initial data from `data/guide-lxtourguide.js` (`window.lxtourguideData`).
   - Keep a local `draft` object separate from `lxtourguideData`.
   - Saving in Pocket Admin only updates the `draft` (for now logged to console / shown in JSON preview); no backend yet.

4. **Safety rules**
   - Public `lxtourguide.html` continues to read only the **published** data (for now still `lxtourguideData`).
   - Nothing in `guide-admin.html` is reachable from public navigation.
   - Mobile edits are treated as **drafts requiring admin approval** (approval flow to be wired in admin shell later).

---

## 3. Out of scope for v1 (can be added later)

1. Real authentication / magic-link backend.
2. True draft/publish storage (database or JSON export/import flow).
3. Full tour start geolocation / QR verification.
4. Social Boost score computation and bonus ledgers.
5. Drag-and-drop card reordering inside Pocket Admin.

These are documented in `BRAINSTORM_2025-11-21_GUIDE_TOUR_LIFECYCLE_AND_SOCIAL_BOOST.md` and admin TODOs.

---

## 4. Implementation notes

1. **Brand pack alignment**
   - Use LBPF variables from `template.css` (`--lbpf-color-primary`, `--lbpf-surface`, `--lbpf-text`, spacing tokens, radii, shadows).
   - Pocket Admin UI style = closer to **admin/staff** template type: calm backgrounds, white cards, light shadows, very limited topic colors.

2. **Layout**
   - Mobile-first single-column layout, with a sticky top header and optional bottom nav.
   - Cards follow spacing rules from brand pack (16–24px padding, 8–16px gaps, `radius-md`, `shadow-soft`).

3. **JS structure**
   - A small script inside `guide-admin.html` that:
     - Imports `guide-lxtourguide.js`.
     - Initializes a `pocketAdmin` state (`draft` + `currentScreen`).
     - Handles screen switching and form submission.

---

## 5. Next actions

1. Create `guide-admin.html` in `lisboaporfavor-vanilla` respecting this decision and LBPF brand tokens.
2. Implement client-side-only state with mock data from `guide-lxtourguide.js`.
3. Keep all changes isolated to this new file; do **not** alter `lxtourguide.html` or public nav yet.
4. After Pocket Admin v1 exists, revisit admin shell to design the **guide draft approval view**.
