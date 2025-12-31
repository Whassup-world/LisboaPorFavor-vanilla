# Guide/Admin v2 Plan · Senior Draft (2025-11-26)

## 1. Context & goals

- Unify **LXT guide page** and **Admin/Pocket Admin** on the vanilla template + LBPF Brand Pack.
- Treat existing guide/admin implementations (Bootstrap, old Hostinger pages, mixed stacks) as **reference only**, never reused directly.
- Put **Admin** at the centre:
  - HQ Admin with full CMS.
  - Guide/Agent views as filtered slices of the same data and components.
- Prepare for Supabase Auth + Postgres without blocking the 2026-01-01 launch (requests-only bookings are acceptable initially).

## 2. Pages & URLs (v2)

### 2.1 Public guide page

- Working name: `lxtourguide-v2.html` (can later replace `lxtourguide.html` once stable).
- Uses locked template shell (navbar/footer) plus `lbpf-guide-bento-page` body class.
- Reads guide/tour data from a JSON source (`data/guides.json` + `data/tours.json` or equivalent) that later maps 1:1 to Supabase tables.

### 2.2 Admin / dashboards

- HQ Admin dashboard: `/admin-v2.html`.
- Guide/Agent dashboard: `/guide-admin-v2.html` (Pocket Admin-friendly layout, responsive down to mobile).
- Both share:
  - `page-container` with 880px content width.
  - `bento-grid` layout for tiles.
  - `lbpf-tile` + variants (`--bento`, `--dashboard`) from `brand-components.css`.
- Role determines which tiles and data sets are shown; implementation can start as static/demo JSON before wiring to Supabase.

## 3. Information architecture & tiles

### 3.1 Guide page (public)

Sections/blocks:
1. **Hero (Guide Bento Hero)**
   - Avatar, name, tagline, rating line + review count, key tags, LBPF logo block (as per frozen Bento Template v1).
   - Layout **no longer assumes a fixed 75/25 split** between content and logo. On desktop, aim for a balanced ~1/3 avatar, ~1/3 text, ~1/3 logo/card block inside the hero tile, while keeping mobile stacked.
   - Avatar must render as a **perfect circle** at all breakpoints (no visible oval distortion).
   - **Mobile hero content (portrait baseline):**
     - Top label: "Partner of LisboaPorFavor" (small, centered over the card).
     - `LXtourguide` name centered.
     - Avatar left, LBPF logo right, both with similar dimensions; logo tile does **not** repeat the long "Discover Lisbon..." text on mobile.
     - Unified guide tagline text: "Your local guide for the Lisbon Area" used consistently across pages.
     - Rating line `★★★★★ 5.0 · 20 reviews` remains under the tagline.
     - Hero tags (ID, Qualified, Partner, Languages, Local Expert, etc.) remain **inside the hero tile**, but are arranged for clarity rather than competing with the background.
     - Pill CTAs: `See my bio` and `See all reviews` are grouped together near the **bottom edge of the hero card** as review-related pills, improving focus on the main hero content above.
2. **Interactive bento tiles band**
   - Tiles: Bio, Reviews, Tours, Availability, Favourite spots, Gallery / Reviews & Photobook, Social/Contact.
   - Accordion behaviour (only one expanded) as already defined in the Bento Template decisions.
   - **Gallery tile behaviour:**
     - Shows a horizontal row (or compact grid) of thumbnails that respect the original image proportions; images must fit fully within the tile (no hard vertical cropping that cuts off heads).
     - Tile height is large enough to display the full thumbnails while still clearly belonging to the same component family as the other tiles.
     - Support at least 6 images comfortably and allow for **additional images** (e.g. scrollable row or multi-row layout) so the tile looks rich for clients without breaking layout.
3. **Support sections**
   - Tour highlights band (links into Tours system).
   - CTA band (book/request, which will later link into LBPF App for authenticated bookings).

### 3.2 HQ Admin dashboard

Bento tiles grouped roughly as an **overview grid** of `lbpf-tile--dashboard` cards. This is an indication of the **information layout** for Admin v2 (what should be visible where), not a promise of deep CMS controls in v1.
1. **Today & upcoming**
   - Next tours list, key alerts, unread requests.
2. **People & roles**
   - Guides management, Agents management, Clients (search).
3. **Tours & inventory**
   - Tours library (create/edit tours), Time slots / schedules prototype.
   - For each guide, show which **tours they are currently qualified for**, with a short description and clear link back to the public tour detail pattern (no editing of external booking links from here).
4. **Bookings & operations**
   - Bookings list with filters (status, dates, guide/agent).
5. **Brand & media**
   - Global media library (images, hero assets), brand tokens view-only.
6. **Settings & auth**
   - Users & roles (internal admins/guides/agents), audit/debug tools.

### 3.3 Guide/Agent dashboard (Pocket Admin)

- Uses **subset** of HQ components:
  - Guide: My next tours, My profile, Availability, Requests, Tour controls.
  - Agent: Assigned guides, Bookings for my agency, Requests.
- Same visual language as public guide bento (tiles, pills) but calmer admin styling.

### 3.4 Security & change control (mobile)

- Pocket Admin (guide/agent) is primarily for **operational use on phones**, not for high-risk configuration.
- Allowed on mobile:
  - Updating personal details that only affect the guide (bio snippets, languages, profile photo) within limits we define.
  - Managing availability, confirming or responding to requests, viewing assigned tours.
- **Not allowed on mobile:**
  - Creating or editing **external links** (Bokun/Stripe URLs, partner URLs, social profile links) – these are HQ Admin only.
  - Changing core pricing, commissions, or system-level configuration.
- HQ Admin (desktop) remains the only place where major structural or external-link changes are approved and applied.

## 4. Data model touchpoints (for later Supabase wiring)

For each surface, identify the eventual table/view:

- Guides: `guides` table (1:1 with profile for role = guide).
- Tours: `tours` + `tour_instances` (or `time_slots`) for dated availabilities.
- Bookings: `bookings` with foreign keys to `client`, `guide`, `agent`, `tour`.
- Media: `media_assets` with `owner_type` (`guide|tour|brand`), `owner_id`, `kind` (`image|video_embed`), `storage_path` or `embed_url`.

v2 HTML/JS should:

- Consume data from JSON shaped like these tables.
- Keep IDs/keys stable so JSON can later be swapped for Supabase queries with minimal change.

## 5. Auth & navigation placeholders

- For v2 implementation we will:
  - Add non-functional **"Sign in" / "Dashboard"** entry points in the navbar/footer pointing to `/app` or `/admin-v2.html`.
  - Inside admin pages, mark areas that will become Supabase-protected screens (but initially can be opened directly for demo/testing).
- Once Supabase is connected:
  - Public pages stay fully static.
  - Admin/guide/agent dashboards check Supabase session and redirect to login if needed.

## 6. Implementation phases for v2

1. **Phase A – Static v2 pages**
   - Build `lxtourguide-v2.html`, `admin-v2.html`, `guide-admin-v2.html` using current template + Brand Pack.
   - Use static JSON data; no real auth.
2. **Phase B – Data shape & mock CMS**
   - Align JSON structures with planned Supabase tables.
   - Add simple in-page controls (filters, sorting) using only front-end JS.
3. **Phase C – Supabase integration**
   - Replace JSON loaders with Supabase queries for guides/tours/bookings.
   - Wire up minimal login and role-based routing.

## 7. Mobile baseline & acceptance criteria

- **Primary reference device:** narrow portrait Android (~360–414px width, ~800–900px height).  
- **Guide hero (screenshot like I1):**
  - Entire hero tile (avatar, name, rating, tags, LBPF logo block) must fit within the first viewport with **no horizontal scroll**.
  - Text and pills must use tap-friendly sizes; primary CTAs at least 44px high.
  - Background image may crop, but the tile itself may not be clipped or overlap strangely with the section below.
- **Tiles band and sections:**
  - `bento-grid` collapses to a **single column** with consistent vertical gap.
  - No tile content should be cut off on the sides; long text wraps cleanly.
- **Pocket Admin (guide/agent):**
  - Next tour, availability, and requests tiles must be fully usable on phone (no horizontal scroll; buttons large enough to tap).
  - Bottom navigation (if present) must be reachable with thumb (bottom-aligned, not hidden behind browser chrome).

### 7.1 Footer alignment (shared template)

- Footer content (GENERAL / LEGAL / RELATIONS / PAYMENTS columns) must visually align within the 880px content grid used elsewhere in the template, not feel pushed too far left on wide screens.
- On mobile, footer sections should avoid an excessively long single column; aim for **at least two columns/blocks side by side** where space allows, while keeping tap targets comfortable.

## 8. Commerce & Bokun placeholder
  - Each tour/product in JSON (and later Supabase) includes optional fields:
    - `external_system` (e.g. `bokun`, `stripe_link`, `manual`).
    - `external_product_id` or `external_url` (Bokun product ID or checkout URL).
    - `pricing_strategy` / notes (summary of how it is sold now).
  - Bookings table later can store an `external_booking_id` for reconciliation.
- **UI placeholder:**
  - CTAs such as "Book this tour" or "Add to day plan" exist visually in v2, but during early phases they may:
    - Link to a placeholder page, or
    - Open a simple form / mailto, or
    - Deep-link to Bokun/Stripe when those are ready.
- **AI/readability requirement:**
  - All commerce decisions (how Bokun/Stripe are used, mapping between LBPF products and external systems) must be documented in a dedicated markdown spec so AIs and humans can retrieve them later.

## 9. Non-goals for v2

- No copy-paste from legacy Bootstrap/Hostinger code; they serve only as conceptual reference.
- No full Stripe or Bokun billing logic implemented directly in the LBPF app at this phase; external systems handle payments.
- No complex CMS UI (field-by-field editing) yet; initial version can link to simple forms or be edited directly in JSON until we define forms.

---

_This is the Senior plan draft for TASK #002. Junior AI is expected to read this, raise questions (Q1, Q2, …), and challenge unclear parts before any code is written. After your approval of the final plan + Q&A, implementation can begin._
