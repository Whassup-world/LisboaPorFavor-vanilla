# BRAINSTORM · 2025-11-20 · Guide CMS Form & Schema

**Challenge:** Design a single form (or small wizard) that can populate the **Guide Bento Template v1** (hero + tiles + calendar) for LXTourguide and future guides, while keeping professional quality and some personality.

---

## 1. Context Snapshot

1. **Template in play**
   - `guide-bento-test.html` in `lisboaporfavor-vanilla` is now the **Guide Bento Template v1**.
   - Hero Blocks 1–4 and Block 5 tiles (bio, reviews, tours, availability, favourites, photobook, social/contact) are frozen structurally.
   - Availability calendar lives **inside** the "Check availability" tile, not in a separate sidebar.

2. **Data sources today**
   - `guide-lxtourguide.js` holds welcome text, images, tours, etc.
   - Future: we want a `guides.json`-style structure that multiple guides can share.

3. **Goal for the form**
   - Non-technical person fills out a **Guide profile form**.
   - The system can render a complete guide page without hand-editing HTML/CSS/JS.

---

## 2. Ideas (rated)

### Idea A – Very rigid multi-step wizard (🔴)

- Steps: Identity → Hero → Tours → Availability → Favourites → Photobook → Social.
- Every field required, tightly validated.
- Pros:
  - Predictable layout, easy to render.
- Cons:
  - Kills personality, hard to adapt for different guides.
  - High friction to fill out; too many mandatory fields.

### Idea B – Core schema + controlled creative fields (🟢)

- Split fields into **core schema** and a few **creative slots** per block.
- Examples:
  - Hero: name, slug, avatar initial/image, tagline, rating snapshot, hero tags, hero theme (light/dark/background image).
  - Tile 1 (Bio): short summary + 3–6 bullet points; optional free paragraph.
  - Tile 2 (Reviews): numeric snapshot + 2–3 highlight quotes.
  - Tile 3 (Tours): references to tour IDs, not full text; template renders cards.
  - Tile 4 (Availability): simple flags and config (calendar mode, time-of-day options).
  - Tile 5 (Favourites): list of 3–5 `PlaceSnippet` objects (name, area, 1–2 lines).
  - Tile 6 (Photobook): enable/disable + copy fields; emphasis that photos are **from guides and guests**.
  - Tile 7 (Social + Contact): per-channel handles/URLs + QR code asset + LBPF contact behavior.
- Pros:
  - Strong structure but enough flexibility for human flavour.
  - Easy to map to JSON and render consistently.
- Cons:
  - Slightly more complex to design up front.

### Idea C – Free-form copy + AI normalization (🟡 for later)

- Form asks for loose answers ("Describe your bio", "List your favourite spots").
- An AI step normalizes into the structured schema behind the scenes.
- Pros:
  - Very flexible, low friction for guides.
- Cons:
  - Overkill for MVP; adds complexity and dependency.

---

## 3. Decision

We pick **Idea B – Core schema + controlled creative fields** as the model for the **Guide CMS form v1**.

- The form will explicitly mirror the **Guide Bento Template v1** blocks.
- Each block gets a small set of required fields + optional creative slots.
- The schema will live in `MASTER_CMS_GOD_TOOL_BLUEPRINT.md` as the **GuideBentoPage** pattern.

---

## 4. Draft Field Map (per block)

### 4.1 Hero (Blocks 1–4)

- `guideId` (slug / unique ID)
- `name`
- `avatarInitial` / `avatarImage`
- `tagline`
- `ratingSnapshot` (stars, ratingNumber, reviewCount)
- `tags[]` (ID, Qualified, Verified, Partner, Languages, Local Expert…)
- `partnerLabel` (e.g. "Partner of LisboaPorFavor")
- `heroTheme` (light | dark | photoBackgroundKey)
- `seeAllReviewsLink` (URL or route name)
- `logoBlock.link` (LBPF home URL)

### 4.2 Tile 1 – Bio

- `bio.label` ("About your guide")
- `bio.title` ("See my bio")
- `bio.summary` (1–2 sentences)
- `bio.paragraphs[]`
- `bio.bullets[]` (3–6 items)

### 4.3 Tile 2 – Reviews

- `reviews.summaryLine` (e.g. "120 reviews · 4.9/5")
- `reviews.highlightQuotes[]` (short, 1–2 sentences each)
- `reviews.fullListAnchor` (ID/URL of main reviews section)

### 4.4 Tile 3 – Tours

- `tours.tileTitle`
- `tours.tileSummary`
- `tours.featuredTourIds[]` (at least 2; resolved from central tours data)

### 4.5 Tile 4 – Availability

- `availability.calendarMode` (demo | live later)
- `availability.timeOfDayOptions[]` (AM, PM, Evening, Private…)
- `availability.requestCtaLabel`

### 4.6 Tile 5 – Favourite Spots

- `favourites.summary`
- `favourites.spots[]`:
  - `name`
  - `area`
  - `type` (café, miradouro, tasca, etc.)
  - `oneLiner`

### 4.7 Tile 6 – Reviews & Photobook

- `photobook.enabled`
- `photobook.summary`
- `photobook.includes` (what is in the book: route, photos from **guests and guides**, tips, etc.)

### 4.8 Tile 7 – Social + Contact + QR

- `social.instagram`, `social.facebook`, `social.youtube`, `social.pinterest`
- `contact.messageGuideEnabled`
- `contact.freePhotobookWhenReview` (flag + copy)
- `contact.qrCodeImage` (asset reference)
- `contact.lbpfSupportChannel` (how guide contacts LBPF from the app)

---

## 5. Next Steps

1. Add a **GuideBentoPage pattern section** to `MASTER_CMS_GOD_TOOL_BLUEPRINT.md` using the field map above.
2. Define the JSON shape for a `GuideProfile` / `GuideBentoPage` object.
3. Later, align the TOBE Pattern Engine so it can treat this as a reusable pattern, not just a one-off LBPF page.
