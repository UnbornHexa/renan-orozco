# Luma-first OP workflow (Master lock)

**Decision:** Lyric half (and further OP gens) run through **Luma** first. Kling only if a take drifts identity badly.

## Why
- Luma: multi-keyframe interpolation (pin several stills in one clip)
- Our packs already have **START + END** per beat; add **mids** when a beat needs an in-between pose

## How to feed Luma
1. Use plates from `lyric_half_stills/` (and cold-open stills if redoing).
2. Minimum: **START + END** (same as Kling pairs).
3. Better: **START → mid → END** (or more) when the beat has clear steps  
   e.g. L3: thoughtful Junko → memory stronger → walks over screen  
   e.g. L6: dull eyes → color returning → full recognition  
   e.g. L11: BZ symbol → cracking → kids rush through
4. Keep duration ≥ **3s**; match song bands in `OP_SONG_ENERGY_MAP.md` / `LYRIC_HALF_STORYBOARD.md`.
5. Prompt light: obey keyframe composition/identity; allow natural motion; no redesign.

## Still QC (before burning credits)
Some generated lyric plates lost context — Master will call which to regen. Prefer fixing stills **before** Luma gens.

## Fallback
If Luma melts faces / Digimon / wardrobe on a hero shot → one Kling START+END rescue for that beat only.
