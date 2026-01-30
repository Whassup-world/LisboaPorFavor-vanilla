# DECISION_2026-01-05 · LBPF Canonical Folder + Bootstrap Archive

## Problem

LBPF materials were split across multiple folders (including `Tobernottobe.eu/` and `lisboaporfavor-bootstrap/`), creating link drift and duplicated sources of truth.

## Options considered

1. Keep LBPF docs distributed across TOBE + Bootstrap + Vanilla.
2. Make `lisboaporfavor-vanilla/` the only canonical LBPF workspace and archive the Bootstrap repo.

## Decision

We choose option 2.

1. `lisboaporfavor-vanilla/` is the only valid LBPF folder for active work.
2. `lisboaporfavor-bootstrap/` is treated as non-canonical and is archived to `Previous_Projects_LBPF/` after salvaging any reusable docs/scripts/images.

## Reasoning

This minimizes MD bloat, reduces scope mixing, and makes link repair deterministic because there are only two active roots (TOBE + LBPF).

## Next action

1. Repair/verify any internal references that still point to moved locations.
2. Build the local dBase split (private + public) for upload preparation.
