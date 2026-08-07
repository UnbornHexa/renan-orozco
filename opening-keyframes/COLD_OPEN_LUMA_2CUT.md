# Cold Open — Luma 2-cut · multi-keyframe directed

**Platform:** Luma · Create Video · **Ray 3.2** · 16:9 · audio off  
**Gens:** **Cut 1 = 10s** · **Cut 2 = 5s** (then hold title in edit to lyrics @**19s**)  
**Cap:** up to **16 keyframes** per gen — use them to *direct* each step (not just START/END).  
**Stills:** `opening-keyframes/cold_open_20s/` · `/opt/cursor/artifacts/cold_open_20s_READY/`

**Transition language (every world change):** hard cyan/magenta digital tear / pixel shatter — not slow morph.

---

## Cut 1 — Journey · **10s** · up to 16 KFs

**Story:** phone → dive → Feris lab → Vesper → Yujiro run → Junko run (already speeding). **No title.**

### Keyframe ladder (pin in this order)

| # | Still | Direct this beat |
|---|---|---|
| 1 | `01a_phone_wide.png` | Wide phone / portal windows — cold open START |
| 2 | `01b_phone_face.png` | Closer to phone glass (guide only — do not warp phone into a smear) |
| 3 | `01c_phone_dive.png` | Through glass / digital tunnel — peak dive energy |
| 4 | `02_feris_lab_wonder.png` | Land lab — Feris **already there** (no Pokéball pop-in) |
| 5 | `02_feris_lab_wonder.png` | *(same plate again)* short alive hold — soft hair/hand/Chernobog life |
| 6 | `03_vesper.png` | After cyan/magenta tear — Vesper room; notebook only, **no phone** |
| 7 | `03_vesper.png` | *(same again)* Vesper reading / pages shift; holo station glitchy |
| 8 | `Y_yujiro_gotsumon.png` | Mid-tear breakthrough — Yujiro + Gotsumon bursting into neon street |
| 9 | `Y_yujiro_gotsumon.png` | Full run — city passing; arms cycling (not frozen point) |
| 10 | `J_junko_sprint.png` | Digital tear → Junko already sprinting |
| 11 | `J_junko_sprint.png` | END — Junko picking up speed / twin tails live; ready for Cut 2 |

Using **11 pins** (duplicates = “hold / continue action on this world”). If Luma rejects duplicate images, skip the repeat rows and keep 1→2→3→4→6→8→10→11 (**8 pins**).

Optional extras if you want all 16 later: dedicated tear stills, Gotsumon warn mid, Junko closer charge — only after Master QC.

### Timing map inside 10s (guide for KF spacing)
| Time | Pins | Beat |
|---|---|---|
| 0.0–2.5s | 1–3 | Phone → dive |
| 2.5–5.0s | 4–5 | Feris lab alive |
| 5.0–7.0s | 6–7 | Tear → Vesper alive |
| 7.0–8.5s | 8–9 | Tear → Yujiro run |
| 8.5–10s | 10–11 | Tear → Junko speed |

### Prompt (Cut 1)
```
Multi-keyframe Digimon OP cold open — obey EVERY keyframe in order as hard composition/identity locks. Natural motion between pins. 150 BPM.

KF1–3 PHONE DIVE: wide phone → closer glass → dive through white-blue digital tunnel. Strong motion only in the dive.
KF4–5 FERIS LAB: she is ALREADY in the lab (not a pop-in). Black-red sailor crop + open jacket, midriff toned not ripped. Soft life-motion; Chernobog subtle. Then hard cyan/magenta digital tear.
KF6–7 VESPER: investigation room; notebook/papers only — NO phone. Eyes/pages alive; train-station holo glitchy. Then hard cyan/magenta tear through center.
KF8–9 YUJIRO: sandy-blonde + TWO purple streaks; classic Gotsumon; full running ROM; neon city passing around them.
KF10–11 JUNKO: already sprinting; twin tails bounce; sweat; white+black bear hairpins; kendo bag; world on her stride; END already picking up speed.

Between worlds: hard cyan/magenta digital tear / pixel shatter — instant, not slow morph. No title. No punch. No Pokéball entrances. No redesign, no extra logos, no extra characters. Prefer sharp identity over blur.
```

---

## Cut 2 — Title · **5s** · directed KFs

**Story:** Junko already angry + into screen → tear → title alive; Digimon **fast teleport** onto marks.

### Keyframe ladder
| # | Still | Direct this beat |
|---|---|---|
| 1 | `J_junko_sprint.png` | START — already high speed (match Cut 1 end) |
| 2 | `J_junko_sprint.png` | Angry + charging into camera/screen — **body rush, NO punch / no fist foreshorten** |
| 3 | `04L_group_logo.png` | Tear resolve — title plate; tamers in place; Digimon **just** teleported onto marks (or appearing) |
| 4 | `04L_group_logo.png` | Living title hold — lights flicker; soft tamer/Digimon idle; cyan edge-crawl on letters |
| 5 | `04L_group_logo.png` | END hold — stable living title for edit pad to 19s |

**5 pins** is enough for 5s; leave headroom. Do **not** use `J_end_jump_punch` (punch melt). Phone-dive whites optional later, not in this short finale.

### Timing map inside 5s
| Time | Pins | Beat |
|---|---|---|
| 0.0–1.2s | 1–2 | Speed / angry into screen |
| 1.2–1.6s | →3 | Cyan/magenta tear |
| 1.6–5.0s | 3–5 | Title + fast Digimon teleport + alive hold |

### Prompt (Cut 2)
```
Multi-keyframe Digimon OP title land. Obey each keyframe. 150 BPM. Continues from prior Junko run — ALREADY speeding. NO punch, NO jump-punch, NO fist-to-camera melt.

KF1–2: Junko sprint → angry charge INTO screen (body rush). Face sharp; expression = brows/mouth only.
Then VERY QUICK hard cyan/magenta digital tear / pixel shatter.
KF3–5: 04L v20 title DIGIMON STORY: BEYOND THE DOOR. Tamers already in end composition. Wireframe Digimon DIGITALLY TELEPORT / EMERGE INTO marks FAST — cyan data flash → on marks. Do NOT unfurl/unroll/peel/stretch. Then living hold: city flicker, soft hair/clothes/breath, Digimon idle glow, title cyan edge-crawl. No phone dive.

No redesign, no extra logos, no extra characters. Prefer sharp identity.
```

### Edit after Cut 2
Hold last title frames **~15→19s** until lyrics, then lyric half.

---

## Music

| Edit | Source |
|---|---|
| 0–10s | Cut 1 |
| 10–15s | Cut 2 |
| 15–19s | Title hold |
| 19s+ | Lyrics |

---

## Directing tips (16 KF budget)
- **Duplicates of the same still** = “stay in this world / continue micro-motion” when Luma allows.
- Put **hard tears between different worlds** in the prompt at those KF boundaries.
- Don’t spend all 16 on tiny face tweaks — spend them on **world steps** (phone→lab→Vesper→Y→J→title).
- If a morph appears between far plates, add a mid pin closer to one side or shorten that interval in the KF spacing.
