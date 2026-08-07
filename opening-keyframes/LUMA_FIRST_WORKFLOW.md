# Luma-first OP workflow (Master lock)

**Decision:** Lyric half (and further OP gens) run through **Luma** first. Kling only if a take drifts identity badly.

## Why
- Luma: multi-keyframe interpolation (pin several stills in one clip)
- Our packs already have **START + END** per beat; add **mids** when a beat needs an in-between pose

## Duration (Luma UI)
Only **5s** and **10s** — no 3s/4s.
- **5s** = single beat (trim in edit to music)
- **10s** = hero beat or two steps via multi-keyframe

Board with edit targets: `LYRIC_HALF_STORYBOARD.md`

## How to feed Luma
1. Use plates from `lyric_half_stills/` (and cold-open stills if redoing).
2. Minimum: **START + END**.
3. Better on **10s** clips: **START → mid → END**  
   e.g. L3 memory · L4 Wonder · L11 BZ burst · L13 cleave · paired flashes
4. Model: **Ray 3.2** (control) or **Ray 3.14** (cheaper/faster tests). Create Video, not Modify, for new shots.
5. Aspect **16:9**. Prompt: obey keyframes; natural motion; no redesign.

## Still QC
Fix weak context plates **before** burning credits when Master flags them.

## Fallback
Luma melts identity on a hero shot → Kling START+END rescue for that beat only.
