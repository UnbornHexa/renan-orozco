# Kling OP — Start / End Frame Storyboard

Kling Image-to-Video asks for **start frame** and **end frame**.  
We use that to **chain** the OP: each snippet’s **END** is the next snippet’s **START** (or a bridge still that *is* that handoff).

## Rule (locked)

| Slot | What to upload |
|---|---|
| **START** | Locked still for this beat |
| **END** | Locked still for the **next** beat |

Kling must morph A → B. Prompt describes the motion **between** them and the bridge motif (light/color) from the Bridge Bible.

### Exceptions
- **Last snippet (14):** START = 14, END = 14 (or 14 with softer title hold / slight push). No next still.
- If a jump is too violent and Kling melts characters, generate a **bridge end still** (same scene as START, OUT motif only) and use that as END; next snippet still STARTs on the next locked still. Prefer chain-to-next first.

### Kling settings (default)
- Model: 3.0  
- 720p · **5s** · 16:9 · **1** sample  
- Native Audio: **OFF**  
- Prompt: one motion + “match start and end frames exactly; do not redesign characters”

---

## Chain table (cut order)

Still folder: `Beyond_the_Door_OP_Locked_Keyframes/stills/`

| Snippet | START frame | END frame | Bridge motif (prompt must hit) |
|---|---|---|---|
| **01** | `01_phone_reflection.png` | `02_feris_lab_chernobog.png` | phone white-blue flare → lab cool light |
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

## Prompt shell for every chained snippet

```
Image-to-video using the given START and END frames.
Begin exactly on the start frame. End exactly on the end frame.
Animate a continuous Digimon Story anime OP transition between them.
Bridge: [motif from table].
Keep character designs, wardrobe, Digimon species, and composition locked to the frames.
Subtle cinematic motion; do not redesign faces, add extra characters, or invent logos.
Native audio off.
```

Fill `[motif from table]` per row. Add one line of beat-specific action from the Bridge Bible if needed (e.g. “Junko restrains Feris; Devidramon eyes bloom”).

---

## Production order (credits)

Generate in chain order when possible so you can **watch continuity** as you go:

**Pass A:** 01→02, 02→03, 12→13, 13→13c, 13g→14  
**Pass B:** 03→04 … 11→12  
**Pass C:** foreshadow 13c→13d→13e→13f→13g  

If a pair fails (melt / ignore end frame):  
1. Retry once with stronger “END FRAME LOCK” language.  
2. Only then bake a dedicated OUT still for that beat.

---

## Foreshadow pack note

13→13g are short in the final edit (~0.8–1.5s), but Kling can still render **5s**; trim in the timeline. The start/end chain still applies so flashes smash correctly.
