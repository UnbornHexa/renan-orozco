# Luma-first OP workflow (Master lock)

**Decision:** Lyric half (and further OP gens) run through **Luma** first. Kling only if a take drifts identity badly.

## Why
- Luma: multi-keyframe interpolation (pin several stills in one clip)
- Our packs already have **START + END** per beat; add **mids** when a beat needs an in-between pose

## Duration (Luma UI)
Only **5s** and **10s** — no 3s/4s.
- **5s** = single beat (trim in edit to music)
- **10s** = hero beat or two steps via multi-keyframe

Boards:
- Cold open 2×10s: `COLD_OPEN_LUMA_2CUT.md` (journey + punch@13 → title 14–18 → phone dive@18)
- Lyric half: `LYRIC_HALF_STORYBOARD.md`

## How to feed Luma
1. Use plates from `cold_open_20s/` / `lyric_half_stills/`.
2. Minimum: **START + END**.
3. **Prefer multi-keyframe direction** — up to **16 keyframes** per gen. Pin each story step (and short holds) so Ray interpolates under your control, not freeform.
4. Cold open: follow the full ladder in `COLD_OPEN_LUMA_2CUT.md`.
5. Model: **Ray 3.2** (control) or **Ray 3.14** (cheaper/faster tests). Create Video, not Modify, for new shots.
6. Aspect **16:9**. Prompt: obey every keyframe in order; natural motion between pins; hard cyan/magenta tears on world changes; no redesign.

## Still QC
Fix weak context plates **before** burning credits when Master flags them.

## Fallback
Luma melts identity on a hero shot → Kling START+END rescue for that beat only.
