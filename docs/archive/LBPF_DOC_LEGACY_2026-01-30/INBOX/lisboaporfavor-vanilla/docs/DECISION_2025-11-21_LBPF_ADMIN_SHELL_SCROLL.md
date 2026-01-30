# DECISION · 2025-11-21 · LBPF Admin Shell Scroll & Sticky Nav

**Project:** LisboaPorFavor Vanilla (`lisboaporfavor-vanilla`)
**Area:** Admin shell (admin.html)
**Status:** Locked as v0.2 for admin layout

---

## 1. Problem

Admin shell needed to behave like a proper desktop app:

1. Keep the **header** (logo + user pill + session timer + settings) fixed.
2. Keep the **Navigation Sidebar** fixed on the left.
3. Allow only the **main workspace area** (forms, agenda, settings cards) to scroll.
4. Avoid double-scroll or awkward page scroll that moves the entire shell.

---

## 2. Options considered

A. Use normal page scroll, let everything move together.
- ✅ Simple to implement.
- ❌ Feels less like a control room, header + nav disappear on scroll.

B. Make the sidebar `position: sticky` while the page itself scrolls.
- ✅ Sidebar mostly stays visible.
- ❌ Header and content heights harder to control; can still get double-scroll behaviour.

C. Treat admin.html as a **full-height app shell**:
- **Body** is locked to viewport height, overflow hidden.
- **Shell** fills 100vh.
- **Header + sidebar** fixed within the shell.
- **Main content** gets the only vertical scrollbar.

---

## 3. Decision

We chose **Option C: full-height app shell with internal scroll**.

- `body.admin-page` is locked to **100vh** with `overflow: hidden`.
- `.admin-shell` is a flex column filling the viewport.
- `.admin-shell-body` uses `overflow: hidden` to contain scrolling.
- `.admin-shell-main` has `overflow-y: auto` and `height: 100%`, so **only the main workspace scrolls**.

Effect:
- Header + Navigation Sidebar stay visible at all times on desktop.
- Main page, Guides & tours, Agenda, Messaging, Components, Settings sections scroll inside the workspace area.
- Admin feels like a small desktop app, not a long web page.

---

## 4. Reasoning (why this is locked)

1. Matches the mental model of an **operations console**.
2. Keeps navigation and context visible while working through long forms (New Guide, New Tour) or future Agenda boards.
3. Plays nicely with the existing **desktop-only** lock (mobile overlay remains).
4. Keeps future integrations (analytics, booking engines, messaging) within a predictable layout.

---

## 5. Scope of this decision

Locked for:
1. The **overall admin shell behaviour** (header + nav fixed, main scrolls).
2. Desktop breakpoints for `admin.html` in the vanilla project.

Not locked (can change later):
1. Exact widths of sidebar and paddings in the main area.
2. Visual styling of cards, buttons and form elements inside the workspace.
3. Additional sections or re-ordering of nav items, as long as the scroll pattern stays the same.

---

## 6. Next actions

1. **Tomorrow / next LBPF session**
   - Polish **Guides & tours onboarding** flows (New guide + New tour forms) and JSON preview.
   - Start wiring bento guide page (LXTourguide) for **live testing** on phone, reusing this admin as the control room.

2. **Future**
   - Add real account data to the header pill and role labels.
   - Attach agenda and settings sections to real analytics / booking engines.
   - Consider keyboard shortcuts or quick-nav inside the admin shell.
