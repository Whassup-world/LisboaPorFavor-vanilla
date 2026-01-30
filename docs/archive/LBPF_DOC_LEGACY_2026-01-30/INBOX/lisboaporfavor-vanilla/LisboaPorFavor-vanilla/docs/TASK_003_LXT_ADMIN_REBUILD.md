# TASK #003: LXT Guide Page + Admin Dashboard Rebuild
**Status:** Planning Phase  
**Created:** Nov 27, 2025  
**Priority:** 🔴 Critical (blocks launch)

---

## CONTEXT

User has reviewed the initial `lxtourguide-clean.html` and `admin-guide.html` files and provided detailed visual/functional requirements based on the reference image (official review site mockup). The current bento tile structure is correct, but hero layout, tile spacing, content, and admin functionality need significant refinement.

**Key Constraint:** User is frustrated with repeated failed attempts. This plan must be executable without assumptions.

---

## REQUIREMENTS BREAKDOWN

### A. LXT PUBLIC PAGE (`lxtourguide-clean.html`)

#### Hero Section (Yellow Circle Annotation)
**Current Issue:** Hero layout doesn't match reference image proportions.

**Requirements:**
1. **Layout:** 3-column grid (Avatar | Text Block | Logo)
   - Avatar: centered, ~100-120px diameter
   - Text Block: centered, guide name + tagline + rating + "See all reviews" pill
   - Logo: centered, similar size to avatar (~100-120px)
   - All three sections horizontally centered on page

2. **Mobile Responsiveness:**
   - Stack vertically on screens < 768px
   - Avatar → Text → Logo (top to bottom)
   - Full width with padding

3. **Spacing:**
   - Hero padding: maintain current `1.1rem 1.25rem`
   - Bottom spacing to first tile: **add gap** (currently touching)

#### Tile Spacing (Orange Circle Annotation)
**Current Issue:** No gap between hero and tile grid.

**Fix:**
- Add `margin-top: 1.5rem` to `.guide-bento-tiles` section
- Verify on mobile (no collapse)

#### Review Pill Color (Red Circle Annotation)
**Current Issue:** Yellow color doesn't match official review site branding.

**Fix:**
- Check `brand-components.css` for `.lbpf-pill--reviews` color
- Should match official review site accent (appears to be gold/accent from LBPF_BRAND_PACK.md)
- Verify contrast ratio (WCAG AA minimum)

---

### B. CONTENT TILES (Bottom to Top: 8 → 1)

#### Tile 8: Social Media & Contact (Top)
**Current:** Generic text placeholder.

**New Requirements:**
1. **Contact Block (no personal info):**
   - Email: `[general-guide-email]@lisboaporfavor.com` (forwarding setup TBD)
   - WhatsApp: `+351 [forwarding-number]` (masked, forwarding setup TBD)
   - Display as: "📧 Email" + "💬 WhatsApp" (emoji + label)
   - Links prepared but not live until forwarding configured

2. **Social Media:**
   - Instagram, Facebook, YouTube, Pinterest
   - Use brand emoji/icons (not custom)
   - Links prepared for future population

3. **Layout:** 2 rows (Contact + Social)

---

#### Tile 7: Gallery (Image Height Issue)
**Current:** Images cropped to `height: 160px; object-fit: cover`.

**New Requirements:**
1. **Image Height:** Use original aspect ratios (no hard crop)
   - Change to `height: auto; max-height: 200px; object-fit: contain`
   - Preserve guide + client faces (no decapitation)

2. **Grid:** Show all 6 images (currently showing subset)
   - 3 columns on desktop
   - 2 columns on tablet
   - 1 column on mobile

3. **Future:** Prepare for 12+ images (pagination or "Load more" button)

---

#### Tile 6: Photobook (Digital Tour Highlights)
**New Tile Requirement:**

1. **Purpose:** Post-tour digital photobook with highlights
   - Images: guide + client photos (after consent)
   - Marketing upsell: "Download full photobook" (affiliate pricing)
   - Sample: 4-6 random images from gallery as demo

2. **Content:**
   - Title: "See your tour highlights"
   - Subtitle: "Digital photobook with guide & client photos"
   - Sample images grid (4-6 images)
   - CTA: "Download full photobook" (placeholder, links to affiliate pricing page)
   - Discount space: "Special offer for tour clients" (affiliate contact info)

3. **Layout:** Same as gallery (3-col grid, responsive)

---

#### Tile 5: Availability & Booking (Major Redesign)
**Current:** Calendar + booking form (functional but needs refinement).

**New Requirements:**

1. **Admin Integration:**
   - Admin sets availability (red background + diagonal line through unavailable dates)
   - Public page shows live availability
   - Unavailable dates: visual indicator (red + strikethrough)

2. **Tour Selection:**
   - Dropdown: "Choose tour" (linked to guide's qualified tours)
   - Show 2 featured tours on public page (configurable in admin)
   - Optional: show all qualified tours (with affiliate upsell note)

3. **Guest/Children Selection:**
   - Guests: 1-12 (current)
   - Children: 0-12 **with note "Under 120cm"**
   - Smaller font/compact layout

4. **Time of Day (More Specific):**
   - **AM:** 08:30 - 12:00
   - **PM:** 13:00 - 17:30
   - **Evening:** 19:00 - 22:30
   - **Private:** Full day (custom time)
   - Display as pills (current) but with time ranges in tooltip/label

5. **Booking Flow:**
   - Button text: "Request confirmation" (not "Request confirmation / info")
   - After click: show confirmation message
   - After confirmation: "Send request" button
   - After send: clear form + success message
   - **Requirement:** Clients must be logged in to send request (Supabase auth placeholder)

6. **Mobile:** Compact layout, stack vertically

---

#### Tile 4: Rewards
**Current:** Placeholder text.

**New Requirements:**
- Keep as is (placeholder for future loyalty program)
- No changes needed for v1

---

#### Tile 3: Favourite Spots
**Current:** 3 bullet points + description.

**New Requirements:**
- Keep as is (content-driven, no changes needed)

---

#### Tile 2: Reviews
**Current:** Placeholder for reviews array.

**New Requirements:**
- Should be 3 tiles horizontally (3-column grid)
- Content grows vertically (expandable per review)
- Visually match official review sites (clean, minimal)
- Each review: author + rating + text
- Layout: card-style, not list

---

#### Tile 1: Bio (Bottom)
**Current:** Welcome text.

**New Requirements:**
- "Sober style" (minimal, professional)
- Optional: small image/drawing (guide portrait or Lisbon illustration)
- Can be placed in admin for customization
- Keep text as is

---

### C. ADMIN PAGE (`admin-guide.html`)

#### General Requirements
1. **No Hero Image/Background:** Use whitish brand background (or slightly different from LXT)
2. **Same UI/UX as LXT:** Expandable tiles, same dimensions
3. **Tile Functionality:** Edit → Save → Request Approval (LBPF admin)
4. **All LXT tiles manageable:** Content, images, availability, etc.

#### Admin Tiles (Same 8 as LXT, but editable)

1. **Today, Messages & Agenda:** Display-only (no edit needed yet)
2. **Profile:** Edit guide info (ID, languages, bio, etc.)
3. **Tours & Availability:** 
   - Manage qualified tours (2 featured + optional all)
   - Set availability (calendar with red unavailable dates)
   - Diagonal line through unavailable dates
4. **Bookings & Agenda:** Display-only (Bokun integration TBD)
5. **Photobook:** Upload/manage tour photos (consent + review workflow)
6. **Messages from LBPF:** Display-only (LBPF sends messages)
7. **Tour Operations:** Edit contact, meeting points, tour type, etc.
8. **Settings & Access:** Login, access controls (Supabase TBD)

#### Admin Login
**Requirement:** QR code for guides to show clients (no need to type URL)

**Implementation:**
- Generate QR code pointing to: `app.lisboaporfavor.com/admin-guide?guide=PTLIS00001`
- QR code displayed in admin dashboard (printable)
- Clients scan → redirected to guide's admin page (read-only view or login prompt)
- **Question:** Should clients see guide's admin page or just public page?

---

## EXECUTION PLAN

### Phase 1: Hero Layout Fix (30 min)
**Files:** `lxtourguide-clean.html`, `css/guide-page.css`

1. Restructure hero to 3-column grid (Avatar | Text | Logo)
2. Center all sections horizontally
3. Add mobile stack (vertical on < 768px)
4. Add `margin-top: 1.5rem` to tiles section
5. Test on mobile (iPhone 12, tablet)

**Success Criteria:**
- Hero matches reference image proportions
- Mobile responsive (no overflow)
- Spacing between hero and tiles visible

---

### Phase 2: Tile Content Refinement (1 hour)

#### Tile 8 (Social): Contact block + social links
#### Tile 7 (Gallery): Fix image heights, show all 6
#### Tile 6 (Photobook): New tile with sample images + affiliate CTA
#### Tile 5 (Availability): Redesign booking form with time ranges + login requirement
#### Tile 2 (Reviews): Convert to 3-column grid layout
#### Tile 1 (Bio): Add optional image placeholder

**Success Criteria:**
- All tiles render correctly
- Mobile responsive
- Contact info masked (no personal data)
- Booking form shows time ranges
- Reviews use a horizontal carousel on desktop (scrollable row) and a vertical stack on mobile, rendered inside the Reviews tile from local data only (no external widgets yet)
 - Small-screen spec: on screens  3c= 768px review cards are full-width inside the content frame, with 1216px inner padding, minimum tap height ~72px, and no horizontal scroll (pure vertical stack)

---

### Phase 3: Admin Page Build (1.5 hours)

1. Create `admin-guide.html` with same tile structure
2. Add edit forms for each tile (expandable)
3. Add save/request approval buttons
4. Add QR code generator (printable)
5. Test on mobile

**Success Criteria:**
- Admin tiles editable
- QR code generates and prints
- Mobile responsive
- Same UI/UX as public page

---

### Phase 4: Authentication Placeholder (30 min)

1. Add Supabase auth check (booking form)
2. Add login redirect for admin page
3. Add QR code link with guide ID

**Success Criteria:**
- Booking form shows "Login required" if not authenticated
- Admin page shows login prompt if not authenticated
- QR code links to admin page with guide ID

---

## QUESTIONS FOR USER

1. **Contact Forwarding:** How should we set up email/WhatsApp forwarding?
   - Option A: Central LBPF email with guide forwarding rules
   - Option B: Twilio/SendGrid for email forwarding
   - Option C: Placeholder for now (implement later)

2. **Photobook Affiliate:** Should the photobook CTA link to:
   - Option A: LBPF affiliate page (with guide ID)
   - Option B: External affiliate partner
   - Option C: Placeholder for now

3. **Admin QR Code:** Should clients see:
   - Option A: Guide's admin page (read-only)
   - Option B: Public guide page (current)
   - Option C: Login page (clients create account)

4. **Reviews Grid:** Should reviews be:
   - Option A: 3 columns on desktop, 1 on mobile (current plan)
   - Option B: 2 columns on desktop, 1 on mobile
   - Option C: Carousel (swipe on mobile)

5. **Photobook Images:** Should we:
   - Option A: Use random images from gallery as sample
   - Option B: Use hardcoded sample images
   - Option C: Upload separate photobook images in admin

6. **Timeline:** Should this be:
   - Option A: One continuous build (3-4 hours)
   - Option B: Phased (Phase 1 today, rest later)
   - Option C: Split between Senior (Nova) and Junior AI

---

## NOTES

- **No new CSS file needed:** Use existing `css/guide-page.css`
- **No legacy code:** All changes are new implementations
- **Mobile-first:** Test on iPhone 12 + iPad
- **Brand compliance:** All colors/spacing from LBPF_BRAND_PACK.md
- **Supabase auth:** Placeholder only (full integration in Phase 2)
- **Front-end only V2:** All new components in this V2 are front-end UI only; links are internal placeholders (within LBPF main/guide pages) and do not call external systems yet. Only LBPF Admin prepares or changes link destinations; guides cannot configure external links.

---

## NEXT STEP

User answers 6 questions above → Nova creates detailed code specs for Junior AI → Junior AI implements → Nova reviews → Deploy

**Estimated Total Time:** 3-4 hours (Senior planning + Junior coding + testing)
