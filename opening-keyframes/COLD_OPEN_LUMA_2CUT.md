# Cold Open — Luma 2×10s · multi-keyframe directed

**Platform:** Luma · Create Video · **Ray 3.2** · 16:9 · audio off  
**Gens:** **two snippets of 10s** (20s generated).  
**Music:** ~**18s** of cold open before lyrics; leave **~2s** slack for edit trim.  
**Stills:** `opening-keyframes/cold_open_20s/` · `/opt/cursor/artifacts/cold_open_20s_READY/`  
**Cap:** up to **16 keyframes** per gen — direct every step.

### Master timing (edit clock)
| Time | Beat |
|---|---|
| **0–10s** | Cut 1 — phone → Feris → Vesper → Yujiro → Junko running |
| **10–13s** | Cut 2 open — Junko already speeding → **punch screen @ ~13s** |
| **14–18s** | **Title hold** (04L living) |
| **~18s** | **Dive into Feris’s phone** → white / portal for cut to school (lyric L1) |
| **18–20s** | Gen slack — trim in edit |
| **~19s** | Lyrics (may overlap last dive / first school frame) |

---

## Cut 1 — Journey · **10s**

**Job:** land every world step; **end on Junko already running** (no punch yet, no title).

### Keyframe ladder (exact times — clip-local)

| # | Time | Still | Direct |
|---|---|---|---|
| 1 | **0.000s** | `01a_phone_wide.png` | Wide phone START |
| 2 | **0.900s** | `01b_phone_face.png` | Closer to glass |
| 3 | **1.800s** | `01c_phone_dive.png` | Dive / digital tunnel peak |
| 4 | **2.600s** | `02_feris_lab_wonder.png` | Lab land — Feris already there |
| 5 | **4.200s** | `02_feris_lab_wonder.png` | Alive hold (soft life-motion) |
| 6 | **5.100s** | `03_vesper.png` | Tear → Vesper; notebook only, **no phone** |
| 7 | **6.400s** | `03_vesper.png` | Vesper alive + holo glitch |
| 8 | **7.100s** | `Y_yujiro_gotsumon.png` | Tear → Yujiro + Gotsumon breakthrough |
| 9 | **8.200s** | `Y_yujiro_gotsumon.png` | Full run; city passing |
| 10 | **8.700s** | `J_junko_sprint.png` | Tear → Junko sprint |
| 11 | **10.000s** | `J_junko_sprint.png` | END — running / speeding (handoff) |

If duplicates rejected: keep times for 1,2,3,4,6,8,10,11 only.

Tear beats sit in the gaps: ~5.0s (→Vesper), ~7.0s (→Yujiro), ~8.6s (→Junko).

### Prompt (Cut 1)
```
Multi-keyframe Digimon OP cold open. Obey EVERY keyframe in order. 150 BPM. Natural motion between pins.

KF1–3: phone wide → closer → dive through white-blue digital tunnel.
KF4–5: Feris lab — ALREADY in lab (no Pokéball pop-in). Black-red sailor crop + open jacket, midriff toned not ripped. Soft life-motion; Chernobog subtle. Hard cyan/magenta digital tear.
KF6–7: Vesper room — notebook/papers only, NO phone. Alive reading; train holo glitchy. Hard cyan/magenta tear.
KF8–9: Yujiro (sandy-blonde + TWO purple streaks) + classic Gotsumon full run; neon city passing.
KF10–11: Junko sprint — twin tails, sweat, white+black bear pins, kendo bag; END already running / picking up speed.

Between worlds: hard cyan/magenta digital tear / pixel shatter — not slow morph. NO title. NO punch in this clip. No redesign, no extra logos, no extra characters. Prefer sharp identity.
```

### Edit
Cut at Junko run → smash into Cut 2.

---

## Cut 2 — Punch → title hold → phone dive · **10s**

**Job:** covers edit clock **~10–20s**.  
- **~10–13s:** Junko speeds → **punches screen @ ~13s**  
- **~14–18s:** living **title hold**  
- **~18s:** dive into Feris’s **phone** → white for school cut  
- **18–20s:** slack / trim

### Keyframe ladder
| # | Still | Direct | Edit clock (approx) |
|---|---|---|---|
| 1 | `J_junko_sprint.png` | Already speeding from Cut 1 | ~10.0 |
| 2 | `J_junko_sprint.png` | Angry / fight-ready; accelerating into camera | ~11.0 |
| 3 | `J_end_jump_punch.png` | **PUNCH** — fist to screen/camera; impact @ **~13s** | ~12.5–13.0 |
| 4 | `04L_group_logo.png` | Shatter/tear resolve → title; Digimon **fast teleport** onto marks | ~13.5–14.0 |
| 5 | `04L_group_logo.png` | Title alive hold — lights flicker; soft tamer/Digimon idle; cyan letter edge-crawl | ~14–16 |
| 6 | `04L_group_logo.png` | Continue title hold (same plate) | ~16–17.5 |
| 7 | `04L_mid_phone_dive.png` | Camera begins dive toward Feris’s glowing phone center | ~17.5–18.0 |
| 8 | `04L_end_phone_dive_white.png` | Phone fills frame → **WHITE** — cut point to school | ~18.0–19.0 |

**8 pins** directed; room left in the 16 budget. Space KF3 so the punch lands near the **3s mark of this clip** (= 13s global if Cut 1 is full 10s).

### Timing inside Cut 2 (clip-local)
| Clip time | Global | Beat |
|---|---|---|
| 0.0–3.0s | 10–13 | Speed → **punch** |
| 3.0–3.5s | 13–13.5 | Cyan/magenta shatter → title |
| 3.5–8.0s | 13.5–18 | **Title hold** (~4.5s living) |
| 8.0–10s | 18–20 | **Phone dive → white** (trim; school cut on white) |

### Prompt (Cut 2)
```
Multi-keyframe Digimon OP finale. Obey EVERY keyframe in order. 150 BPM. Continues from Junko already running.

KF1–2: Junko already high speed; turns angry/fight-ready; charges toward camera. Face stays sharp — brows/mouth for anger, no melt.
KF3: JUMP PUNCH into screen — match punch end frame; fist/body sell the hit @ ~3s into this clip. Prefer sharp identity; avoid face smear toward camera.
On impact: VERY QUICK hard cyan/magenta digital tear / pixel shatter.
KF4–6: 04L v20 TITLE — DIGIMON STORY: BEYOND THE DOOR. Tamers already in composition. Wireframe Digimon DIGITALLY TELEPORT / EMERGE INTO marks FAST (cyan flash → on marks; NO unfurl/unroll/peel). Then LONG living title hold: city lights flicker; soft hair/clothes/breath; Digimon idle glow; title cyan edge-crawl / neon pulse. Side boards readable.
KF7–8: Near end, camera DIVES into Feris’s glowing center phone → phone fills frame → PURE WHITE for cut into school / next OP half.

No redesign, no extra logos, no extra characters. Prefer sharp identity over extreme blur.
```

### Edit
- Keep punch on the **13s** music hit (trim Cut 1/2 junction if needed).  
- Title visible **14→18**.  
- Cut to school (L1) on the **white / phone** at **~18s**.  
- Discard or keep ~2s tail as slack.

---

## Music / edit summary

| Global | Source |
|---|---|
| 0–10 | Cut 1 |
| 10–13 | Cut 2 — speed → punch |
| 14–18 | Cut 2 — title hold |
| ~18 | Cut 2 — phone dive → white → **school** |
| ~19 | Lyrics (may sit under dive/school join) |
| 18–20 | Unused gen tail |

---

## Still checklist
- Cut 1: `01a` `01b` `01c` `02` `03` `Y` `J`  
- Cut 2: `J` `J_end_jump_punch` `04L` `04L_mid_phone_dive` `04L_end_phone_dive_white`  

If punch melts again on Luma: keep KF3 but soften prompt to “impact / screen hit” with less face foreshortening, or punch on KF3 with face locked from KF2.
