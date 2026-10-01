# PM portfolio teardown — what's generic, what works, what to change

Source: a LinkedIn thread where ~35 PMs posted their portfolio sites (July 2026).

## Coverage — what was actually looked at

- **20 sites** analysed in full via text fetch (hero copy, section order, case-study structure, metrics, phrasing).
- **5 sites** additionally screenshotted at desktop width: Ankush Mathur, Mouli Sarkar, Israel Oyemomi, Christin Thomas, Evelise Melo. Chosen as two Lovable templates, one dark template, and two custom-domain builds.
- **6 sites returned nothing** to a fetcher — client-rendered SPAs with no server HTML: rohanmashlesh.com, shamitha-srinivas-portfolio.netlify.app, dhirajk.netlify.app, abhi2312.hirewiser.in, harishwar-portfolio.vercel.app, essessvi.vercel.app.
- **Deliberately excluded:** the 2 Notion sites, the Gamma site, the Wix site and the Behance profile (platform chrome dominates, so they say nothing about design choices), and 4 posts with no URL at all.

So: conclusions on **copy and structure** rest on 20 sites. Conclusions on **visual design** rest on 5, and are correspondingly weaker — treat them as strong hypotheses, not proven frequencies.

---

## 1. The generic fingerprint

### Copy tells

**The single worst offender — one headline formula, four times:**

| Site | Headline |
|---|---|
| Evelise Melo | "I turn **ambiguity** into products people **rely on**." |
| Mouli Sarkar | "I turn **messy problems** into products people **trust**." |
| Vijaya Shanthi | "I turn **messy financial problems** into AI products people **trust**." |
| Aman Sharma | "I turn **messy data** into product decisions." |

Four people, independently, wrote the same sentence. None of them know it. Any hiring manager reading two of these in one sitting discounts both.

**Second formula — "PM who ships":**
- Christin Thomas: "Product Manager who ships."
- Prasad Akki: "Product Manager who ships AI-native products at national scale."

**Other recurring copy devices:**

1. **"Hi, I'm [Name]."** opener — Mouli, Aryan, and others.
2. **Availability micro-line with a coloured dot** — near-universal. "Open to full-time, fractional, consulting & freelance opportunities" (Ankush), "Product Owner · available for interesting problems" (Mouli), "Open to Product Manager roles · Remote · International" (Israel), "Available immediately · PM / AI PM · Bengaluru or Remote" (Prasad).
3. **"Selected work"** as a section heading — at least 6 sites.
4. **Vanity stat triad in the hero** — "6+ years / 3 case studies / 4 industries served" (Israel), "12+ products / 50K+ users / 6 years" (Anukul). Round, unfalsifiable, no denominator.
5. **Skills/Toolkit grid** — 12+ sites. Logos or tags for Figma, Jira, SQL, Mixpanel, Amplitude. Communicates nothing; every PM has these.
6. **"Let's talk" / "Let's build something" / "Work with me"** as the closing CTA.

**The cliché lexicon**, ranked by frequency across the 20:
`cross-functional` · `data-driven` · `0→1` · `end-to-end` · `stakeholder alignment` · `north-star metric` · `ship` · `user-centric` / `user-first` · `solve real problems` · `move the needle` / `move the metrics that matter` · `customer obsession` · `outcomes over output` · `bridge business and engineering`

### Structural tells

7. **Section order is effectively fixed.** About → Work/Projects → Skills/Toolkit → Experience → Contact. Roughly 15 of 20 follow it exactly. Variation is cosmetic renaming ("Toolkit" for "Skills", "Selected Work" for "Projects").
8. **Case studies that aren't on the site.** Multiple sites link out to Notion, a PDF, or Figma rather than putting the thinking on the page (Atharva, Vigneshwar). Israel gates his behind "Request full case study" — friction on the one thing a hiring manager actually wants.
9. **No server-rendered HTML.** 6 of 26. Google, LinkedIn link previews, and any recruiter tooling see a blank page. This is a silent, serious own-goal.
10. **Metrics without denominators or baselines.** "+42% WoW" (of what, from what base?), "99.5% uptime", "10M+ data points", "50+ clients". The strongest sites always give the base.

### Visual tells

From the 5 screenshotted, plus palette hints from the rest. Two templates dominate:

**Template A — "warm minimal"** (Ankush, Mouli):
- Cream / off-white ground (`#FDFCF7`-ish)
- One earthy accent — dark green or terracotta
- Pill-shaped availability badge, or dot + line
- Very large bold geometric sans headline, with **keyword spans in the accent colour**
- Circular headshot, right of hero
- Filled + outline CTA pair
- Faint grid or dot background texture

**Template B — "dark premium"** (Israel):
- Near-black navy with a subtle gradient
- Blue-to-white **gradient-filled name text**
- Glassmorphic floating "metric chips" overlaid on the headshot
- Rounded stat cards, 1px border, faint glow
- Filled / outline / text CTA triad
- Sun-moon theme toggle

Both are Lovable defaults. They are competent and completely anonymous.

**Not one of the 20 sites used a committed non-neutral background colour.** Every single one is white, cream, off-white, near-black, or navy-black. This is the single largest unoccupied space in the category.

**The third failure mode — restraint without tension** (Evelise): pure white, everything centred, circular photo, serif headline, zero colour. Clean and completely forgettable. Worth noting because this is the failure mode the *previous* version of this site had.

---

## 2. What genuinely works

Ranked by how much signal it carries, with who does it.

### 2.1 Admitted failure, with operational specifics — **the strongest single differentiator**

**Akshit Hajela** ends every case study with "What I'd do differently", containing real regrets: the merchant detail update feature should have shipped at launch rather than after; self-service adoption underperformed and sales-assisted should have launched in parallel. He's also explicit about pulling back automation where the data didn't support it.

**Evelise Melo** documents recommending *against* a B2B hospital product — a "say no" decision.

**Vinaya Kulkarni**, on her side projects: "One even shut down."

This is rare, it's unfakeable, and it's the thing that makes every other claim on the page more credible. Almost nobody does it.

### 2.2 Regulation and constraint as the *strategy*, not the obstacle

Akshit positions RBI / NPCI / PCI-DSS work as strategic surface. **Rajaa Khan** builds an entire identity on constraint: low-literacy users, feature phones, offline-first sync, a six-channel telco distribution map (USSD, SMS, IVR, web, app), regional LLM fine-tuning for Urdu/Punjabi/Sindhi/Pashto dialects rather than translation.

Most PMs treat compliance as friction to be skipped over. Treating it as the interesting part is instantly differentiating — and it is directly our territory.

### 2.3 Proof-of-build over description

**Christin Thomas** publishes eval numbers on his own side projects: ~81% token reduction, 0.965 answer faithfulness, 14/14 evals passing. **Prasad Akki** runs an "AI Lab" section of weekend builds with live links. **Anukul Saini** ships free tools (QR generator, resume builder) as leverage assets.

The pattern: a live link beats a screenshot, and a screenshot beats a paragraph.

### 2.4 Third-party validation

**Prasad Akki** cites a Nobel-laureate economist (Michael Kremer) presenting his evaluation findings. Nothing else on any of these 20 sites carries that weight per word.

### 2.5 A named point of view

**Simple Things Labs** (Yashdeep): "Simple is the hard part." Six numbered principles. Positions as a studio, not a jobseeker.
**Aryan Panwar**: "This isn't a portfolio; it's evidence."
**Vinaya Kulkarni**: "From prescriptions to products — the diagnostic instinct never left." — the best domain-transfer line in the set.

### 2.6 Numbers with denominators

Akshit: "1.2L of 4.2L eligible merchants migrated (29% DIY conversion)", "18K→6K→15K monthly activations; 75% recovery of regulatory collapse". The base and the trajectory are both there. Compare "+42% WoW" with no base.

---

## 3. Honest audit of our build

### 3.1 Where we've accidentally landed on the template

| Device | Us | Also used by |
|---|---|---|
| Availability line with **pulsing coloured dot** | `● Available — permanent roles & contract work · London` | Ankush, Mouli, Israel, Prasad |
| Headshot to the right of hero | yes | Ankush, Israel |
| Stat row directly under hero | 4 cells | Israel, Anukul |
| Very large bold sans headline | yes | all of Template A and B |
| "Things I've built" / selected-work heading | yes | ~6 sites |
| Section order hero → work → method → built → career → contact | yes | the median order, roughly |

The pulsing dot is the one that actually stings. It's a Lovable signature and we have it verbatim.

### 3.2 Where we're genuinely differentiated — protect these

- **Prussian blue ground.** Zero of 20 sites use a committed non-neutral colour field. This is our single biggest advantage and it should not be softened.
- **Signature graphic device** — tick rules, indexed cells, mono demoted to labels. No other site has a repeatable graphic idea.
- **"The fork" as explicit case-study structure.** Only Akshit does anything equivalent.
- **The integration diagram.** Nobody in the set has a bespoke technical diagram of their own system.
- **Real regulatory depth** (Class 2a avoidance, FHIR, EMPI, clinical safety governance) — Akshit is the only comparable, and he's in payments not health.

### 3.3 What we're missing that the best sites have

1. **No admitted failure.** We cut ERS Connect for confidentiality and lost the one thing that most distinguishes the top sites. This is the biggest gap.
2. **Side projects aren't verifiable.** "Not mockups. Deployed, with users." — but StayRight and Halve have no links. That claim currently can't be checked.
3. **No third-party validation** of any kind.
4. **Some claims lack denominators.** "£2M at-risk contracts retained" — out of what book of business?
5. **No writing.** Several of the strongest sites have it. We cut the blog, which was right given no cadence — but it's a real gap versus Akshit and Prasad.

---

## 4. Recommended changes, ranked

### P0 — do before shipping

1. **Kill the pulsing dot and the availability pill.** Replace with a plain mono line, no dot, no rounded container. Same information, none of the template signature.
2. **Add "What I'd do differently" to all three case studies.** Confidentiality blocked the ERS story, but not the *lessons* — each existing case study has a real regret available:
   - *Automated Outcomes* — clinical risk should have been in the room before the PRD, not six weeks into build; the scope cut was forced rather than chosen.
   - *Scotland / FHIR* — the demographics edge cases we excluded were a deliberate deferral, and it created known follow-up work.
   - *Vodafone* — the operating model should have come first; the recovery was the easy half.
3. **Make StayRight and Halve live links.** Otherwise delete the "deployed, with users" claim.
4. **Verify server-rendered HTML.** We're on the App Router with server components so this should be fine, but confirm the animated diagram doesn't push `'use client'` up to the page and empty the server payload. Check with `curl -s https://... | grep "software usually dies"`.

### P1 — worth doing

5. **Add denominators** to the £2M figure and the 4,000→7,000 user growth.
6. **Add a "Now" line** — what you're currently building or reading. Cheap, human, and it dates the page as maintained. Vinaya does this well.
7. **Reconsider the four-stat hero row.** Ours are better than the median because they have context lines — but it is still the most template-y block on the page. Consider three stats, or folding them into the diagram.

### P2 — if the material exists

8. **Third-party validation** — a line from a clinical safety officer, a commissioner, or an NHS Scotland counterpart would outperform anything else per word.
9. **Writing** — only if you'll commit to a real cadence. A stale blog is worse than none.

---

## 5. The one-line summary

The category has converged on two Lovable templates, one headline formula, and a fixed section order. The escape routes that actually work are: **a committed colour**, **an admitted failure**, **constraint framed as strategy**, and **live links instead of claims**. We already have the first and the third. We need the second and the fourth.
