# BRAINSTORM · 2025-11-21 · LBPF Guide & Tour Lifecycle + Social Boost

**Scope:** How LBPF handles guide edits, tour lifecycle, and social-media-driven motivation/bonuses.

---

## 1. Devices & contexts

1. **Desktop (admin shell)**
   - For staff/admins to:
     - Create/approve **guides** (Guides onboarding workspace).
     - Create/approve **tours** (Tours onboarding workspace).
     - Review guide/tour drafts, SM uploads, incidents, bonuses.

2. **Guide phone (Pocket Admin)**
   - For guides to:
     - Edit their profile in a **limited, safe way** (no direct publish).
     - Update availability / presence.
     - Start/end tours.
     - Upload SM-style content after a tour.

3. **Public site (clients)**
   - Only sees **approved** guide and tour data.
   - Never exposes edit options.

---

## 2. Mobile guide edit (Pocket Admin)

### 2.1 Entry & safety

- Access via a dedicated route, e.g. `/guide-admin.html` or `lxtourguide.html?mode=edit`.
- Only reachable via **login link** (email / WhatsApp) sent by LBPF.
- Public navbar does NOT link to this; visitors don’t discover it.
- Backend (future): validate one-time codes or sessions per guide.

### 2.2 Home screen (most used actions)

Sections/cards:

1. **Today / Upcoming**
   - Next tour(s) with start time + location.
   - Button: `Open tour controls` (Start / End / Upload content).

2. **My profile (quick edit)**
   - Fields:
     - Tagline.
     - Short welcome text.
     - Avatar / profile photo (upload or choose).
     - Languages.
     - Short availability note (e.g. "No evenings in July").
   - All changes save as **draft**, flagged for admin approval.

3. **Availability**
   - Simple controls:
     - On/off switches for common slots (mornings / afternoons / evenings).
     - Quick "block date" or "I’m sick" flag.

4. **Request new tour training**
   - Button that opens a short form:
     - Free-text description of the idea.
     - Preferred neighbourhood(s).
     - Target guest type.
   - Creates an **admin task**, not a live tour.

### 2.3 Approval model

- Data model: `guideDraft` vs `guidePublished`.
- Pocket Admin always edits `guideDraft`.
- Public site reads `guidePublished` only.
- Admin shell shows a list of pending guide changes with a compare view and actions:
  - `Approve & publish`.
  - `Request changes` (send note to guide).

---

## 3. Tour lifecycle (presence, location, incidents)

### 3.1 Tour start (presence check)

- Best UX: handled inside a **small app view** (Pocket Admin today, native app later).
- Flow:
  1. Guide opens Today/Upcoming and taps **Start tour**.
  2. App tries to capture **geolocation** (if guide allowed previously).
  3. We log: `startTime`, `startLocation`, `guideId`, `tourId`.

- If geolocation is **not allowed**:
  - Alternatives to verify presence:
    - **QR code at meeting point**: guide scans to confirm being at the right spot.
    - **Code from client ticket**: guide types a short code from the client’s confirmation.
    - **Photo-based check**: guide takes a quick "check-in" photo that is stored but not shown publicly.

- For private tours with hotel pickups (multiple hotels with similar names):
  - The stored tour instance contains a **precise address or plus-code**.
  - Geolocation or QR check uses that target to validate approximate match.

- Late / no-show handling:
  - If no "Start tour" logged by `startTime + gracePeriod`:
    - Alert staff to find a replacement.
    - Notify client via messaging.
    - Mark guide as late/no-show → affects ranking.

### 3.2 Tour end + debrief screen

- When tour is done, guide taps **End tour**.
- Show a compact debrief screen:
  1. **Tour finished** confirmation.
  2. **Incidents & remarks**:
     - Free-text box for: misbehaving clients, safety issues, operational incidents.
  3. **Upload SM content**:
     - 3–8 photos and/or short video clips.
     - 1–2 short captions with strong SM angle.
  4. Button: **Tour closed** (submits everything).

- All submitted data stays internal until reviewed:
  - Incidents go to **operations/legal**.
  - Photos/captions go to content/marketing for approval.

---

## 4. Social Boost & bonuses

### 4.1 Social Boost score (KEEP)

- For each tour instance with SM upload, calculate a **Social Boost score** based on e.g.:
  - Number & quality of photos/captions submitted.
  - Whether content is used on the site / socials.
  - Basic engagement metrics later (likes, saves, shares) if available.
- Score is stored per `(guideId, tourId, date)`.
- Guide sees a simple history: e.g. "This month: 4 Social Boosts".

### 4.2 SM content as part of payment (KEEP)

- Policy idea: SM upload is **part of the job**, not optional:
  - No SM upload ⇒ lower base pay or no bonus.
  - Good, usable content ⇒ qualifies for higher pay or bonus.
- Makes the guide feel like a co-creator:
  - They see that content helps sell future tours and drives **upsell**.

### 4.3 Bonus / affiliate-style model (KEEP)

- Weekly or bi-weekly bonus ledger per guide:
  - Inputs:
    - Number of approved content drops.
    - Social Boost score sum.
    - Any bookings or upsells attributed to those content pieces.
  - Output:
    - Extra € per guide per period.
- This can evolve into an **affiliate-like** model:
  - Guides who consistently produce high-performing content earn an extra tier of rewards.

---

## 5. Open questions / next design steps

1. How strict should the geolocation / QR requirement be per tour type?
2. How do we visually show Social Boost and bonuses to guides without over-complicating the Pocket Admin UI?
3. When we wire the LBPF Guide Bento page, how much of this lifecycle data (content drops, upsells) should be visible on the public page vs kept internal?
