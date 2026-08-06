# Kling OP — Start / End Frame Storyboard

Kling Image-to-Video asks for **start frame** and **end frame**.  
We use that to **chain** the OP: each snippet’s **END** is the next snippet’s **START** (or a bridge still that *is* that handoff).

## Rule (locked)

| Slot | What to upload |
|---|---|
| **START** | Locked still for this beat |
| **END** | Locked still for the **next** beat |

Kling must morph A → B. Prompt describes the motion **between** them and the bridge motif (light/color) from the Bridge Bible.

## Music lock — 150 BPM (upbeat OP, not flat throttle)

The OP track is **~150 BPM**. That means the piece is always **alive** — but **not** full throttle every second.

| Gear | When | Camera / energy in prompts |
|---|---|---|
| **Hype** | Action, smash bridges, 01 dive, 07–11, foreshadow hits | dive / whip / rush / shatter on the beat |
| **Upbeat** | Most “quieter” story beats (02–06, 12–13, hospital/foreshadow) | forward motion, light pulse, confident move — **never sleepy** |
| **Hold** | Title card 14, brief emotional landings | still upbeat pulse / breath on tempo — not dead static |

**Rule:** even soft scenes stay **upbeat** (tempo in the body of the shot). Save true smash energy for hype bridges.  
**Avoid as default:** “slow drift”, “barely-there”, “sleepy”, “gentle float”.  
**OK when earned:** warmer, less violent motion — still with 150 BPM life.

### Exceptions
- **Last snippet (14):** START = 14, END = 14 (title hold with light pulse on the beat). No next still.
- If a jump is too violent and Kling melts characters, generate a **bridge end still** (same scene as START, OUT motif only) and use that as END; next snippet still STARTs on the next locked still. Prefer chain-to-next first.

### Kling settings (default)
- Model: 3.0  
- 720p · **5s** · 16:9 · **1** sample  
- Native Audio: **OFF** (we cut to the real 150 BPM track in edit)  
- Prompt: energetic motion + start/end frame lock + “do not redesign characters”

---

## Chain table (cut order)

Still folder: `Beyond_the_Door_OP_Locked_Keyframes/stills/`

| Snippet | START frame | END frame | Bridge motif (prompt must hit) |
|---|---|---|---|
| **01** | `01_phone_reflection.png` | `02_feris_lab_chernobog.png` | **dive into phone** → white-blue smash → lab (150 BPM hype) |
| **02** | `02_feris_lab_chernobog.png` | `03_vesper_investigation.png` | Chernobog yellow eye flash → monitor blue |
| **03** | `03_vesper_investigation.png` | `04_partner_wireframes_gate.png` | data streaks → cyan gate |
| **04** | `04_partner_wireframes_gate.png` | `05_hushed_wonder_tuskmon.png` | gate open → gold-green wonder |
| **05** | `05_hushed_wonder_tuskmon.png` | `06_junko_memory_kotemon.png` | wonder dims → warm memory / sepia-rose |
| **06** | `06_junko_memory_kotemon.png` | `07_bureau_zero_barrier.png` | memory crack → cyber sprint into team motion |
| **07** | `07_bureau_zero_barrier.png` | `08_junko_feris_devidramon.png` | crimson octagon shatter → emergency Tokyo red |
| **08** | `08_junko_feris_devidramon.png` | `09_red_thread_lineup.png` | Devidramon two red eyes flare → red threads in sky |
| **09** | `09_red_thread_lineup.png` | `10_carmilla_magatsu.png` | threads converge → Digicore / Magatsu void-crimson |
| **10** | `10_carmilla_magatsu.png` | `11_susanoomon_sword_up.png` | cocoon/Magatsu throb → gold Susanoomon lightning |
| **11** | `11_susanoomon_sword_up.png` | `12_carmilla_freed.png` | upward sword whiteout → soft Carmilla release light |
| **12** | `12_carmilla_freed.png` | `13_junko_feris_sunset_park.png` | warm release → golden sunset park |
| **13** | `13_junko_feris_sunset_park.png` | `13c_vesper_bureau_report.png` | hands gold-rose flare → cool Bureau blue |
| **13c** | `13c_vesper_bureau_report.png` | `13d_yujiro_red_thread_token.png` | BZ crimson emblem flare → neon rain / token |
| **13d** | `13d_yujiro_red_thread_token.png` | `13e_makoto_hospital_file.png` | token red glyph fill → hospital red seal |
| **13e** | `13e_makoto_hospital_file.png` | `13f_sato_project_mir.png` | RESTRICTED pulse → Project Mir alert red |
| **13f** | `13f_sato_project_mir.png` | `13g_six_rulers_split.png` | FAILED screens shatter → six panels assemble |
| **13g** | `13g_six_rulers_split.png` | `14_japanese_door_title.png` | panel white bloom → door / title light |
| **14** | `14_japanese_door_title.png` | `14_japanese_door_title.png` | sacred hold / end sting (same frame) |

---

## Prompt shell for every chained snippet (150 BPM)

```
Image-to-video using the given START and END frames.
Begin exactly on the start frame. End exactly on the end frame.
150 BPM anime opening energy: fast, hyped, exciting — not slow or sleepy.
Animate a continuous Digimon Story OP transition between the frames.
Bridge action: [motif / dive-whip-smash from table].
Match start and end compositions hard. Keep characters, wardrobe, Digimon locked.
Do not redesign faces, add extra characters, or invent logos.
```

---

## Ready prompt — KF01 → KF02 (start here)

**START:** `01_phone_reflection.png`  
**END:** `02_feris_lab_chernobog.png`

```
Image-to-video using these START and END frames.
Begin exactly on the phone reflection night shot. End exactly on the Feris lab / Chernobog shot.
150 BPM hyped Digimon anime OP energy — exciting and urgent, NOT slow.
Phone screen pulses bright; camera RUSHES and DIVES into the phone glass / screen like a warp.
White-blue digital flare smash as we punch through the reflection into the cool lab.
Resolve cleanly into the end frame: Feris in the lab with Chernobog’s shadow.
Keep both frames’ designs locked. No extra characters, no logo inventing, no sleepy camera drift.
```

---

## Production order (credits)

Generate in chain order when possible so you can **watch continuity** as you go:

**Pass A:** 01→02, 02→03, 12→13, 13→13c, 13g→14  
**Pass B:** 03→04 … 11→12  
**Pass C:** foreshadow 13c→13d→13e→13f→13g  

If a pair fails (melt / ignore end frame):  
1. Retry once with stronger “END FRAME LOCK” language (keep 150 BPM energy).  
2. Only then bake a dedicated OUT still for that beat.

---

## Foreshadow pack note

13→13g are short in the final edit (~0.8–1.5s on a 150 BPM grid — often 2–4 beats), but Kling can still render **5s**; trim on the downbeats in the timeline. The start/end chain still applies so flashes smash correctly.
