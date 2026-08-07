# Beyond the Door OP — Platform & Prompt Guide

Use the locked stills in `/stills` as **image-to-video** start frames.
Tools will not auto-match each other — force continuity with **IN/OUT light + color + motif** from `OPENING_KEYFRAME_BRIDGE_BIBLE.md`.

## Global prompt rules (every snippet)

1. Upload the locked still as the **first frame / reference image**.
2. Ask for **subtle motion first**; raise motion only if the beat needs impact.
3. End every clip on a **4–6 frame hold** of the OUT motif (bloom / eye / flare / shatter).
4. Always add negatives: `do not change character faces, hair, or wardrobe; do not add extra Digimon; do not invent logos; keep text/HUD readable if present`.
5. If a tool warps identity, regenerate at **lower motion / higher image strength**.

### Universal prompt shell

```
Animate this locked anime OP keyframe. Keep composition, characters, wardrobe, and Digimon exact.
START: [IN from bridge bible]
ACTION: [one clear motion only]
END: hold [OUT motif] for the last few frames
Camera: [subtle push / static / whip — pick one]
Style: Digimon Story cinematic opening, sharp anime lines
Avoid: face morph, outfit change, extra limbs, random text, style drift
```

---

## Which platform for which snippet

| # | Beat | Best platform | Why | Motion strength |
|---|---|---|---|---|
| **01** | Phone reflection | **Luma Ray / Runway** | Quiet atmosphere + glass light; subtle camera | Very low |
| **02** | Feris lab / Chernobog | **Kling** | Face lock + creature eye glow | Low–med |
| **03** | Vesper investigation | **Runway / Kling** | Desk + screen ambience | Low |
| **04** | Partner wireframes gate | **Kling / Hailuo** | Preserve hologram silhouettes | Low |
| **05** | Hushed Wonder / Tuskmon | **Luma / Kling** | Soft awe, gentle creature breath | Low |
| **06** | Junko memory / Kotemon | **Kling** | Split-emotion face + memory dissolve | Low |
| **07** | Bureau Zero barrier break | **Kling** (alt: Runway) | Multi-character sprint + shatter impact | Med–high |
| **08** | Junko holds Feris / Devidramon + HUD | **Hailuo / Kling** (low motion) | Must keep HUD + Devidramon readable | Low |
| **09** | Red Thread lineup | **Kling / Runway** | Wide lineup + thread whip | Med |
| **10** | Carmilla / Magatsu | **Luma / Runway** | Void atmosphere, core pulse | Med |
| **11** | Susanoomon sword up | **Kling** | Giant Digimon + slash energy | Med–high |
| **12** | Carmilla freed | **Luma / Runway** | Soft release light, emotional hold | Very low |
| **13** | Sunset park hands | **Kling** | Face lock for Feris/Junko smile | Very low |
| **13c** | Vesper Bureau report | **Runway / Hailuo** | Desk + emblem flare, little body motion | Low |
| **13d** | Yujiro token | **Luma / Kling** | Neon rain + prop glow | Low |
| **13e** | Makoto hospital | **Hailuo / Kling** (low) | Keep medical screen text stable | Very low |
| **13f** | Sato / Project Mir | **Runway / Kling** | Alert cascade → shatter | Med |
| **13g** | Six Rulers split | **Runway / Pika** | Panel assemble + white glitch | Med |
| **14** | Japanese Door title | **Luma / Runway** | Sacred hold, almost static | Minimal |

### Quick platform roles

- **Kling** — character identity, Digimon bodies, action (02, 06–09, 11, 13)
- **Runway** — cinematic camera + atmospheric bridges (01, 03, 10, 12, 13f–14)
- **Luma** — soft light, emotion holds, title/atmosphere (01, 05, 12, 14)
- **Hailuo** — still-faithful / HUD / UI / readable text (04, 08, 13c, 13e)
- **Pika** — stylized smash/glitch accents (13g helper, FX overlays)

---

## Per-snippet prompt cards

Durations are starting points — trim to the TV-size track.

### 01 Phone reflection — Luma/Runway · ~1.5–2.5s
```
START: black quiet night → phone screen lights up
ACTION: faint reflection stirs in the glass; soft screen glow breathes
END: white-blue screen flare fills frame
Camera: barely-there push-in
```

### 02 Feris lab / Chernobog — Kling · ~2–3s
```
START: cool lab fluorescents from phone flare
ACTION: Feris breathes tense; Chernobog shadow eyes brighten yellow
END: cut on yellow eye flash bloom
Keep Feris female tomboy design locked to still
```

### 03 Vesper investigation — Runway/Kling · ~2s
```
START: cool monitor blue after eye flash
ACTION: screens flicker data; Vesper subtle glance / paper shift
END: cyan digital streaks shoot toward camera
```

### 04 Partner wireframes — Kling/Hailuo · ~2s
```
START: cyan streaks resolve into gate
ACTION: partner wireframes pulse/scan; gate light opens
END: hard cut on gold-green wonder flash
Do not solidify wrong Digimon species
```

### 05 Hushed Wonder — Luma/Kling · ~2–2.5s
```
START: soft gold-green wonder light
ACTION: Tuskmon slow breath; dust/light motes; awe hold
END: light dims into warm sepia/rose memory dissolve
```

### 06 Junko memory — Kling · ~2.5s
```
START: warm memory dissolve
ACTION: childhood memory warmth, then red fracture crack across frame
END: cyber sprint streak wipe
```

### 07 Barrier break — Kling · ~2–3s
```
START: team already sprinting through cyber streaks
ACTION: team + partners smash Bureau Zero crimson octagon barrier
END: shattered crimson 0-slash octagon fills frame
Keep partners: Chernobog/PicoDevimon, Holmes/Pulsemon, Kotemon, Gotsumon
```

### 08 Junko / Feris / Devidramon — Hailuo/Kling · ~2.5–3.5s
```
START: emergency red Tokyo night from barrier shards
ACTION: Junko strains holding Feris; Devidramon looms; HUD panels flicker
END: Devidramon two red eyes bloom / eye flare
LOW MOTION — preserve Bureau Zero HUD text and Devidramon shape
```

### 09 Red Thread lineup — Kling/Runway · ~2.5s
```
START: eye flare softens into red threads across sky
ACTION: threads pull taut between pairs; wind in coats
END: threads converge/whip into purple-black Magatsu void
```

### 10 Magatsu field / torii cocoon — Luma/Runway · ~2–3s
```
START: Digicore interior (digital crimson/void sky, not outdoor sky)
ACTION: Feris runs with spear toward black torii; red threads everywhere bind torii legs into a SOLID opaque red-thread cocoon (no Digimon/Dracmon inside); Magatsu looms (lacquered black wood, white ceremonial robes, crow feet, hairless gold head adornments, gentle smiling mask) before blackened sun
END: cocoon throb / Magatsu presence → gold lightning crack
Preserve: Digicore sky, single black torii, cold temple, solid cocoon, no Dracmon
```

### 11 Susanoomon sword up — Kling · ~2.5–3.5s
```
START: gold lightning from previous
ACTION: Susanoomon raises sword; Feris energy upward; divine slash builds
END: upward gold beam whites out top of frame
Sword direction: UP
```

### 12 Carmilla freed — Luma/Runway · ~2s
```
START: gold whiteout settles into soft release light
ACTION: Carmilla freed, gentle breath/hair; warm hope hold
END: warm release softens into golden sunset wash
```

### 13 Sunset park — Kling · ~1–1.5s (foreshadow flash)
```
START: golden sunset park wash
ACTION: Feris (shorter tomboy girl) and Junko smile; clasped hands subtle squeeze; hair in breeze
END: warm gold-rose flare on hands → smash to cool blue
LOW MOTION — protect faces
```

### 13c Vesper Bureau report — Runway/Hailuo · ~1–1.5s
```
START: cool blue monitors
ACTION: Vesper eyes scan folder/laptop; Bureau Zero emblem flares crimson
END: crimson emblem bloom carries out
```

### 13d Yujiro token — Luma/Kling · ~1–1.5s
```
START: residual crimson becomes neon rain
ACTION: Red Thread token glows in Yujiro’s hand
END: token red glyph fills frame
```

### 13e Makoto hospital — Hailuo/Kling · ~1–1.5s
```
START: hospital bay after red fill
ACTION: Makoto weak breath; RESTRICTED stamp pulses; medical screens flicker (arm + leg trauma stay readable)
END: restricted red pulse
VERY LOW MOTION — do not scramble monitor text
```

### 13f Sato / Project Mir — Runway/Kling · ~1–1.5s
```
START: alert red; Sato silver hair locked
ACTION: Project Mir FAIL cascade; screens crack
END: screens shatter into six shards flying out
```

### 13g Six Rulers — Runway/Pika · ~1–1.5s
```
START: shards assemble into six vertical panels
ACTION: panels glitch/settle; center/right panel whites out
END: white bloom smash into door light
```

### 14 Japanese Door title — Luma/Runway · ~2–4s
```
START: white becomes sacred Japanese door light
ACTION: almost static; subtle light breathe on door/title
END: title hold / music end sting
```

---

## Edit assembly tips

1. Export snippets with **handles** (extra 3–6 frames) on both ends.
2. Cut on the OUT bloom into the next IN color — not mid-action.
3. If two tools disagree on color grade, grade in post toward the **outgoing motif color**.
4. Foreshadow pack (13–13g) should feel like **flash cuts** on the lyric/beat, not full scenes.
5. Keep Feris identity notes everywhere she appears: **female tomboy, large bust, slightly shorter than Junko**; **jacket always** over sailor-crop+skirt or sports-top+shorts; **prefer midriff showing** with athletic **toned** abs (**not ripped**).
6. Keep Yujiro hair locked to **13d/KF04** everywhere: messy **sandy-blonde / light brown** + **two purple streaks side-by-side** (not silver/lavender).
7. Gotsumon = classic rock form; Kotemon = **two** eyes behind mask (not four); Junko athletic = **kendo bag**; Feris = sailor+skirt **or** sports+shorts (never mixed).

Master, Ikaros remains ready if you want ready-to-paste prompts tuned to one specific tool’s UI (Kling vs Runway fields, etc.).
