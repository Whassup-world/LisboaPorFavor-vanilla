---
id: training-access-soft-skills
slug: training-access-soft-skills
title: Training Access Model & Soft Skills Scoring – LBPF Vanilla
status: draft
applies_to:
  - alfama-food-culture-walk
  - lisbon-bike-tour-belem
---

# Training Access Model & Soft Skills Scoring

Internal spec for how guides, admins and partners access training content in the vanilla project, and how soft skills are scored and refreshed.

## 1. Roles & visibility

- **Public visitors**  
  - See only public tour pages (cards, short descriptions, key facts).  
  - **No access** to full curricula, checklists or internal training docs.

- **Guides (per tour)**  
  - Have a **per-tour training level**: Beginner, Advanced, Expert.  
  - Can access **only the materials needed** for their current training/refresher on that tour.  
  - Do **not** keep a permanent library of all theory/practice once they leave.

- **LBPF staff / admins**  
  - Full access to all training docs, checklists, scores and history.  
  - Sole authority to update training levels and soft skills scores.

- **Agency / external partners**  
  - See aggregated training status (e.g. "Advanced on Alfama", "Beginner on Belém").  
  - Do **not** see raw internal theory notes or full curricula by default.

## 2. Access rules (per guide, per tour)

1. **Beginner level**  
   - Access to:
     - Basic theory notes for the tour (summary, key stops, safety basics).
     - Beginner-level checklists and quizzes.  
   - No access to Expert-level design docs or full variations.

2. **Advanced level**  
   - Access to:
     - All Beginner materials for that tour.  
     - Advanced practice checklists, mock tour scripts, observation forms.  
   - No access to other tours by default unless they are also in training there.

3. **Expert level**  
   - Access to:
     - All theory/practice for that tour.  
     - Design notes for variations and special groups.  
   - Can view aggregated feedback for that tour (to help mentor juniors).

4. **Guide leaves / is deactivated**  
   - Access to internal training pages, specs and MD docs is **removed**.  
   - Their personal history (levels, scores, passed exams) stays in the system for admins only.

## 3. Soft skills scoring (1–10)

Soft skills are scored **per guide, per tour** on three tags:

- **Storytelling**  
- **Safety**  
- **Service**

Scale and rules:

- **1–4 = fail**  
  - Serious issues in that soft skill.  
  - **Action:** full retraining on theory and practice for that tag.

- **5 = auto refresher**  
  - Borderline performance – not a full fail, but not acceptable to leave unchecked.  
  - **Action:** simplified refresher / redo of key modules for that soft skill on that tour.

- **6–8 = acceptable**  
  - Solid performance with room for improvement.  
  - **Action:** monitored at next evaluation; optional targeted tips.

- **9–10 = strong**  
  - Consistently excellent behaviour.  
  - **Action:** candidate for Expert/mentor track and for leading special groups.

## 4. Who can see and edit scores

- **Guides**  
  - Can see their **own** levels (Beginner/Advanced/Expert) and a simple view of their soft skills per tour (for example: "Safety: 6/10").
  - Cannot edit scores.

- **LBPF staff / admins**  
  - Can see and edit all scores and history.  
  - Can trigger refresher or retraining tasks based on scores.

- **Partners**  
  - See only high-level status, never raw 1–10 values.

## 5. When scores are updated

- After **theory exams** (quizzes, written tests).  
- After **mock tours** and **observed real tours**.  
- During **periodic reviews** (e.g. once per season or if complaints/praise accumulate).

## 6. Refresher vs. full retraining

- **Refresher (score = 5)**  
  - Short, focused update:  
    - Re-watch or re-read specific theory modules for that soft skill.  
    - One short observed segment on tour (for example: intro + one key stop).

- **Full retraining (score 1–4)**  
  - Re-do the normal training sequence for that tour level:  
    - Theory modules.  
    - Shadowing / co-guiding.  
    - New mock or observed tour.

This spec is for future tooling in the admin/guide interfaces. No automatic logic is implemented yet in the vanilla project.
