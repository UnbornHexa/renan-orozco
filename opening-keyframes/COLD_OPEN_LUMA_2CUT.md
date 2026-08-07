# Cold Open — Luma method (revised after failed 2×10 multi-world gen)

## Why the last take failed (Master report)
- Transitions felt **basic** — Ray was *blending stills*, not playing our cyan/magenta tear language.
- Prompt was **mostly ignored** — with many distant keyframes, **images override text**.
- Shot felt **extremely still** — too many pins (esp. duplicates of the same plate) locks the model to “hold photo,” so little life-motion.

**Lesson:** Luma multi-KF is for **same-world pose/camera steps**, not five different OP worlds in one 10s interpolate. World changes = **separate gens + edit smash** (or a dedicated 5s tear clip).

---

## New rule set (Luma)
1. **≤4 keyframes** per gen (usually **2–3**).
2. All KFs in one gen must be the **same world / same characters** (or a single intentional transition pair that is still “one idea”).
3. Leave **time gaps** between pins so Ray can move — don’t stack holds every second.
4. Prompt = **strong motion verbs**; keep identity locks short.
5. Digital tears / glitch: either  
   - **edit** (smash cut + glitch overlay), or  
   - a **tiny dedicated** 5s gen that is *only* tear energy (start world A → end world B), not a full story chapter.
6. Prefer **5s** for single-scene life; use **10s** only when one scene needs a long hold (title) or one clear action arc (Junko run→punch).

---

## Revised cold-open gen list (edit clock → ~18s + slack)

| # | Gen | Dur | Keyframes (times) | Job |
|---|---|---|---|---|
| **C1** | Phone dive | **5s** | `01a` @ **0.000** → `01c` @ **2.200** → `02` @ **5.000** | Only dive→lab. Strong tunnel motion. |
| **C2** | Feris lab | **5s** | `02` @ **0.000** → `02` @ **5.000** *(or one KF + motion prompt)* | Alive lab only — hair, breathe, Chernobog; **no world change**. |
| **C3** | Tear → Vesper | **5s** | `02` @ **0.000** → `03` @ **5.000** | One transition only; prompt = hard digital tear mid-clip. |
| **C4** | Vesper | **5s** | `03` @ **0.000** → `03` @ **5.000** | Alive casework + holo glitch; no exit. |
| **C5** | Tear → Yujiro run | **5s** | `03` @ **0.000** → `Y` @ **5.000** | Breakthrough run into neon. |
| **C6** | Tear → Junko + punch | **10s** | `Y` @ **0.000** → `J` @ **3.500** → `J_end_jump_punch` @ **8.000** → `J_end` or white flash @ **10.000** | Run handoff + punch; keep punch late. Trim to music so punch hits **global ~13**. |
| **C7** | Title hold | **10s** | `04L` @ **0.000** → `04L` @ **6.500** → `04L_mid_phone_dive` @ **8.000** → `04L_end_phone_dive_white` @ **10.000** | Living title then phone dive. Edit: use as **global 14→18** hold + dive; trim head. |

**Edit assemble:** C1–C5 smash with glitch overlays if tears are weak → C6 trimmed so punch ≈13s → C7 for title 14–18 + dive @18 → school.

If Master insists on **only 2 gens**, use:
- **10s A:** C1 idea only compressed — `01a@0` → `01c@3` → `02@6` → `02@10` (phone→lab→alive **only**)  
- **10s B:** `J@0` → `J_end@3` → `04L@4` → `04L@7.5` → `04L_mid@8` → `04L_white@10` (punch→title→dive)  
…and put Vesper/Yujiro as **edit inserts** from old Kling takes or extra 5s gens. Forcing Vesper+Yujiro into those two again will remelt.

---

## Prompt style that moves (example — Feris lab 5s)
```
Single scene. Image-to-video from Feris lab keyframe. Strong natural anime motion — NOT a slideshow.
Feris breathes, weight shifts, short blue hair sways, hand/fingers move slightly on device, jacket fabric moves, Chernobog wings/eyes subtle life.
Camera: slow push-in. Keep face, sailor black-red crop, midriff, jacket locked.
No scene change. No morph to another location. No freeze.
```

## Prompt style for one tear only (example — lab→Vesper 5s)
```
START lab keyframe → END Vesper keyframe. Mid-clip: hard cyan/magenta digital glitch tear / pixel shatter rips the lab into Vesper’s room. Fast, violent, Digimon-OP transition — not a soft dissolve.
Before tear: Feris slight life-motion. After tear: Vesper alive with notebook (NO phone), holo station glitching.
Do not slowly morph faces/rooms; prefer a hard digital rupture then settle.
```

---

## Title / punch notes
- Punch: keep in a gen that is **mostly Junko** (few KFs), not after four world hops.
- Title: **one plate + time to breathe**; Digimon teleport in prompt, but don’t pin 5 identical 04L frames or it freezes — **2–3 pins max** across 10s.
- Phone dive: last 2s of title gen only.

---

## Status
Old “11 KF across 5 worlds in 10s” board = **retired**.  
Use this file for new Luma attempts. Kling rescue still OK if Luma stays still on hero faces.
