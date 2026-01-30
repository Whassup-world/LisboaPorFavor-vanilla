# LBPF_AUTH_V1 · Supabase-based Authentication Plan

_Last updated: 2025-11-24_

## 1. Goals

1. Protect personal data (clients, guides, agents) and future booking/payment flows.
2. Start **cheap and simple**, but on a professional, standards-based stack.
3. Use an approach that can be **migrated** later (to another IdP or self-hosted auth) without losing users.
4. Keep the current **vanilla marketing site** on Hostinger separate from the authenticated **LBPF App**.

---

## 2. Scope & Non-goals

In scope for v1:
- Authentication (sign-up / sign-in / sign-out).
- Basic **role handling**: `client`, `guide`, `agent`, `admin`.
- Storage of core profile information (name, email, role, guide ID, etc.).
- Row-level access control on bookings and guide/agent data.

Out of scope for v1:
- Full billing logic (Stripe, invoices, refunds).
- Fine-grained permissions per feature (that can be layered on later).
- Enterprise SSO for external organisations.

---

## 3. Chosen platform: Supabase Auth + Postgres

- One Supabase project dedicated to LBPF.
- Auth & database live together; users table is tightly integrated with Postgres.
- Start on **free tier**, move to first paid tier only once usage or storage demands it.
- Data remains in **plain Postgres tables**, making future exports and migrations realistic.

### 3.1 Domains

- Marketing (static): `www.lisboaporfavor.com` on Hostinger.
- LBPF App (authenticated): subdomain like `app.lisboaporfavor.com` or a dedicated domain from the hosting bundle (TBD).
- TOBE Lab remains at `tobernottobe.eu` and is conceptually separate from production LBPF.

### 3.2 Where things live (mental model)

- **Front-end HTML/CSS/JS**  
  - Public marketing pages are static files on Hostinger (vanilla project).  
  - The LBPF App (admin/guide/agent/client dashboards) is a web app that can also be hosted on Hostinger or another static host, but it talks to Supabase over HTTPS.
- **Database & sensitive data**  
  - All persistent app data (profiles, guides, tours, bookings, reviews) and all authentication live in **Supabase Postgres + Auth**.  
  - The browser stays on your domain; it just calls Supabase APIs in the background; users do **not** “leave the site” to see data.
- **Media (images & video)**  
  - Web-ready images live in storage (Supabase Storage or similar) and are referenced by URL from the DB.  
  - Long-form video is hosted on platforms like YouTube/Vimeo and embedded on your pages; streaming happens from there but users visually stay on your site.

---

## 4. Roles and user model

Supabase Auth user (internal) → `auth.users`.

Application-level profile mirrors user data in a `profiles` table:

- `id (uuid)` – matches `auth.users.id`.
- `role` – enum: `client`, `guide`, `agent`, `admin`.
- `display_name` – human-readable name.
- `email` – duplicated from auth for convenience.
- `guide_id` – optional, e.g. "PTLIS00001".
- Timestamps: `created_at`, `updated_at`.

Additional tables:

- `guides`  – one-to-one with `profiles` where role = `guide`.
  - Bio, avatar URL, languages, certifications, hero tagline, public slug.
- `agents`  – one-to-one with `profiles` where role = `agent`.
  - Company name, contact person, phone, notes.
- `bookings` – core booking records.
  - `id`, `client_id`, `guide_id`, `tour_id`, `agent_id?`, start time, people count, price, currency, status, created/updated.

---

## 5. Login methods and policy

Baseline:
- **Email + password** for all user types.
- Password rules: minimum length, encourage password manager; optional 2FA/MFA once stable in Supabase.

Social logins:
- **Google** and **Apple** may be offered for clients where useful (later phase).
- **GitHub** login is reserved for **internal admin/developer accounts only**, not for public LBPF users.

Policy:
- All public-facing copy and UI should present **email/password first**.
- Social logins must be optional enhancements, never the only path.

---

## 6. Access control (Row Level Security)

General principle: **least privilege** using Postgres RLS policies.

- `clients`  
  - Can read/write their own `bookings` rows only.  
  - Cannot see other clients, guides, or agents except what is deliberately exposed via public views.

- `guides`  
  - Can read/update their own `guides` row and limited fields in `profiles` (display name, avatar, etc.).  
  - Can read `bookings` where `guide_id = current_user.id` (or mapped guide ID).

- `agents`  
  - Can read `bookings` for guides associated with their agency.  
  - Can read `guides` that are partnered with them; cannot see or edit other agents.

- `admins`  
  - Bypass most RLS restrictions for oversight (implemented via a special role flag).

Implementation detail: RLS policies should rely on `auth.uid()` and role stored in `profiles.role`.

---

## 7. Core flows (v1)

### 7.1 Guide onboarding

1. Admin invites a guide (manual in v1): create user in Supabase with role `guide` and send link.
2. Guide logs in via email/password.
3. Guide fills out profile (languages, avatar, bio, tagline) and availability prototype.
4. Data is written to `guides` and `profiles`; public guide page (LXT) reads from this later.

### 7.2 Agent onboarding

1. Admin creates an `agent` profile and associated user.  
2. Agent logs in and can view the guides associated with their agency and the bookings they manage.

### 7.3 Client booking (future wiring)

1. Anonymous visitor browses tours on `www.lisboaporfavor.com`.
2. On "Book" CTA, user is redirected to LBPF App domain where Supabase powers login/sign-up.
3. Client creates account, confirms email, then creates a booking.
4. Booking is stored in `bookings`; guide and (optionally) agent see it in their dashboards.

---

## 8. Phasing

**Phase 0 – Now**
- Vanilla site on Hostinger; no real logins for external people.
- Admin demo pages remain hidden and clearly marked as prototypes.
 - Existing Hostinger MySQL sample database (e.g. `restaurant_details`, `reviews`) is treated as **archive/prototype only**; it is not part of LBPF Auth v1. It can be exported for reference and eventually deleted once Supabase is live.

**Phase 1 – Supabase Auth v1 (internal + early guides)**
- Create Supabase project and core tables (`profiles`, `guides`, `agents`, `bookings`).
- Implement email/password login and basic role routing for guides/agents/admin.
- Expose minimal dashboards for guide profile editing and viewing prototype bookings.

**Phase 2 – Client bookings and payments**
- Add client role, booking creation flow, and restrictions via RLS.
- Integrate Stripe or equivalent for payments (separate spec).
- Harden security (2FA, password policies, basic audit logging).

**Phase 3 – Scale and refine**
- Add optional Google/Apple social logins.
- Add richer roles/permissions if needed (per-agency limits, feature flags).
- Reevaluate whether to stay on Supabase or move to a more custom identity stack.

---

## 9. Migration and vendor exit strategy

- All application data lives in **Postgres tables** that we control via SQL.
- If we outgrow Supabase:
  - Export `auth.users` and our tables.
  - Import into a new Postgres/Keycloak/self-hosted solution.
  - Update the frontend to trust a new OIDC issuer.
- The **role model and table shapes** defined here should stay stable to minimise migration pain.
