# Koode Wellness — Mini Brand & Homepage UX/UI Spec

## 1) Mini Brand Kit

### Brand Positioning Snapshot
- **Brand feel:** Calm, premium, trustworthy, warm, modern.
- **Avoid:** Clinical, hospital-like, playful-childish, heavy “self-help guru” vibe.
- **Audience fit:** Students + professionals now, enterprise/corporate-ready later.
- **Faceless direction:** No founder-centric visuals; use abstract human warmth (light, texture, space, language).

---

### Color System

Use soft, desaturated tones with controlled contrast. Keep bright accents minimal.

#### Primary
- **Primary 600 (Core Brand):** `#2F6D66` (Deep teal)
- **Primary 500:** `#3E7F78`
- **Primary 100:** `#E8F3F1`

Usage:
- Primary 600 for key CTAs, links, focus states.
- Primary 100 for subtle section backgrounds and tags.

#### Secondary
- **Secondary 600:** `#3D4F7A` (Muted indigo)
- **Secondary 100:** `#EAEFFA`
- **Accent warm:** `#C69A63` (Muted gold, sparing use)

Usage:
- Secondary for supporting emphasis, category chips, alternate CTA styles.
- Warm accent only for premium highlight details (icons, dividers, tiny indicators).

#### Neutrals
- **Neutral 900:** `#1C1F26` (Headings)
- **Neutral 700:** `#4B5565` (Body text)
- **Neutral 500:** `#7A8496` (Muted text)
- **Neutral 200:** `#E6EAF0` (Borders)
- **Neutral 100:** `#F5F7FA` (Panels)
- **Neutral 50:** `#FBFCFE` (Page background)
- **White:** `#FFFFFF`

#### Semantic Colors (non-clinical)
- **Success:** `#2E8B6E`
- **Warning:** `#B7791F`
- **Error:** `#C05656`

Keep semantic colors low-saturation and avoid “medical alert red” intensity.

---

### Typography (Google Fonts)

#### Option A (Recommended)
- **Heading:** `Plus Jakarta Sans` (600/700)
- **Body/UI:** `Inter` (400/500/600)

Why: SaaS-modern, clear at small sizes, premium without feeling corporate-cold.

#### Option B (Softer alternative)
- **Heading:** `Manrope`
- **Body/UI:** `Inter`

#### Type Scale
- Display: 48/56, 700
- H1: 40/48, 700
- H2: 32/40, 700
- H3: 24/32, 600
- Body L: 18/30, 400
- Body: 16/26, 400
- Small: 14/22, 400
- Caption: 12/18, 500

Rules:
- Keep line length ~60–75 chars for body copy.
- Use sentence case (not all caps) for warmth.
- Malayalam text: match body size + 1px if needed for readability.

---

### Spacing / Radius / Shadow

#### Spacing scale (8pt system)
- `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96`

#### Border radius
- Inputs/buttons: `12px`
- Cards: `16px`
- Large containers/hero media: `24px`
- Pills/chips: `999px`

#### Shadows (soft premium)
- **Shadow sm:** `0 2px 8px rgba(28,31,38,0.06)`
- **Shadow md:** `0 8px 24px rgba(28,31,38,0.10)`
- **Shadow lg:** `0 16px 48px rgba(28,31,38,0.12)`

Rules:
- Prefer 1 subtle shadow + border over multiple stacked effects.
- Don’t use hard black shadows.

---

## 2) UI Principles

### Layout Grid
- Desktop container: `max-width: 1200px`, horizontal padding `24px`.
- 12-column grid, `24px` gutters.
- Tablet/mobile: collapse to 8/4 columns.
- Section vertical rhythm: `80–96px` desktop, `56–64px` mobile.

### Section Structure Pattern
Each section should follow:
1. Eyebrow/label (optional)
2. Clear heading
3. One-line supportive copy
4. Primary action or interaction
5. Optional secondary action

Keep one primary goal per section.

### Component Style Rules

#### Buttons
- Primary: solid Primary 600, white text, 12px radius.
- Secondary: white background, neutral border, dark text.
- Tertiary: text-only with subtle underline on hover.
- Heights: 44px (default), 52px (hero CTA).

#### Cards
- White background + neutral border + shadow sm.
- 16px radius, 20–24px padding.
- Headline + 2–3 lines max summary; avoid dense text blocks.

#### Inputs
- 48px height, 12px radius.
- Border neutral 200; on focus use 2px primary ring (`#2F6D66` @ 20% alpha).
- Helper text simple and non-alarming.

#### Navigation
- Minimal top nav: logo left, key links center/right, CTA right.
- Sticky nav with translucent white background + blur (subtle premium cue).

#### Visual Language
- Abstract illustrations, gradients, soft geometric forms.
- No stethoscope/medical symbols.
- Use diverse, non-identifiable silhouettes or hands/journals/work desk scenes if photography is used.

---

## 3) Homepage Wireframe (in words)

### A. Hero (Above the Fold)
- **Headline:** Emotional wellness, made practical for everyday life.
- **Subcopy:** Non-medical, guided support for stress, burnout, focus, relationships, and life transitions.
- **Actions:**
  - Primary CTA: “Get started”
  - Secondary CTA: “Explore programs”
- **Trust line:** “Private by design • Non-judgmental • English + മലയാളം”
- **Visual:** Abstract calming gradient + product UI mock card stack.

### B. Social Proof / Trust Bar
- Logos (institutions/companies as available).
- 3 compact metrics (e.g., sessions completed, average satisfaction, returning users).
- 1–2 short testimonials with first name + role only.

### C. Category Blocks (What users can get help with)
6-card responsive grid:
- Stress & Overwhelm
- Academic / Work Pressure
- Sleep & Routine Reset
- Relationship & Family Strain
- Emotional Clarity & Journaling
- Confidence & Communication

Each card: icon, title, one-line outcome-focused description, “Learn more”.

### D. How It Works (3 steps)
1. Choose your focus area.
2. Get a guided plan and sessions.
3. Build sustainable emotional habits.

Add micro reassurance below: “No diagnosis. No labels. Just structured support.”

### E. Safety + Privacy Section
- Explain boundaries clearly:
  - Non-medical emotional wellness platform.
  - Not for emergency/crisis situations.
  - Escalation resources shown when needed.
- Use calm, responsible language and link to full safety policy.

### F. Bilingual & Accessibility Strip
- Highlight English + Malayalam support.
- Mention plain-language content and mobile-first design.

### G. Final CTA Block
- Headline: “Start feeling more grounded, one small step at a time.”
- Primary CTA: “Begin now”
- Secondary CTA: “Talk to support”
- Supporting line: “Designed for students, professionals, and growing teams.”

### H. Footer
- Safety policy, privacy, terms, contact, FAQs.
- Optional “For organizations” link for future B2B expansion.

---

## 4) Microcopy Style Rules

### Tone
- Calm, respectful, practical, hopeful.
- Use “with you” language, not “fix you” language.
- Speak like a trusted guide, not a clinician or motivational speaker.

### Voice Principles
- Short sentences.
- Concrete outcomes (“sleep better”, “feel less overwhelmed”) over abstract claims.
- Permission-based phrasing (“when you’re ready”, “you can start small”).
- Neutral and inclusive; avoid moral framing.

### Words/Phrases to Avoid
- “therapy”, “treatment”, “diagnosis”, “patient”, “cure”, “disorder” (unless legally required in policy context)
- “broken”, “abnormal”, “mentally weak”, “fix yourself”, “guaranteed results”

### Preferred Alternatives
- “guided emotional wellness support”
- “structured conversations” / “guided sessions”
- “focus area” instead of “condition”
- “support professional” or “wellness guide” (as applicable)
- “progress” instead of “recovery” (for non-clinical context)

### UX Copy Patterns
- **CTA labels:**
  - “Get started”
  - “See how it works”
  - “Continue in മലയാളം”
- **Empty state:**
  - “You’re starting fresh. Choose one area to begin.”
- **Reassurance copy:**
  - “Private by design.”
  - “No labels. No judgment.”
- **Boundary copy:**
  - “Koode Wellness offers non-medical emotional wellness support and is not a crisis service.”

### Bilingual Strategy (English + Malayalam)
- Keep meaning equivalent, not literal word-by-word translation.
- For Malayalam UI labels, prefer natural spoken readability over formal literary terms.
- Avoid mixing scripts in one sentence unless for brand/product names.

---

## Quality Benchmark (SaaS-like)
Aim for the polish level of modern SaaS landing pages:
- Generous whitespace
- Tight typography hierarchy
- Low cognitive load per section
- Strong CTA clarity
- High trust signaling without hype
