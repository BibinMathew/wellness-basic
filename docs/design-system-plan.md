# Design System Plan (Next.js + Tailwind + shadcn/ui + lucide-react)

## 1) Component Inventory

### Button
- **Variants:** `default` (primary), `secondary`, `outline`, `ghost`, `link`, `destructive`.
- **Sizes:** `sm`, `default`, `lg`, `icon`.
- **Usage notes:**
  - Primary actions use `default`.
  - Secondary page actions use `secondary`/`outline`.
  - Toolbar or low-emphasis actions use `ghost`.
  - Use `icon` size with lucide-react icons for compact controls.

### Card
- **Subcomponents:** `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
- **Use cases:** feature blocks, directory result items, profile summary modules.
- **Variants to define:** `default`, `interactive` (hover elevation), `muted` (neutral background).

### Badge
- **Variants:** `default`, `secondary`, `outline`, `success`, `warning`.
- **Use cases:** status labels, category tags, availability, role indicators.

### Tabs
- **Subcomponents:** `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`.
- **Use cases:** switching between profile sections, directory filters, landing proof content.
- **Behavior:** keyboard navigable with arrow keys; active trigger has clear focus + selected state.

### Accordion
- **Subcomponents:** `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`.
- **Use cases:** FAQs, policy summaries, expandable profile details.
- **Variants:** single-open and multi-open.

### Dialog
- **Subcomponents:** `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter`.
- **Use cases:** confirmations, quick actions, form overlays.
- **Behavior:** focus trap, ESC to close, return focus to trigger.

### Input
- **Types:** text, email, password, search.
- **Companion patterns:** `Label`, helper text, validation message.
- **States:** default, hover, focus-visible ring, invalid, disabled.

### Select
- **Subcomponents:** `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectValue`.
- **Use cases:** sorting, filter selection, form choices.
- **Behavior:** keyboard navigation (up/down, enter, escape), strong selected styling.

---

## 2) Global Layout Components

### Header
- Sticky top navigation with logo, primary nav links, and right-side CTA.
- Includes mobile menu trigger and responsive nav drawer/sheet.
- Recommended slots: `brand`, `nav`, `actions`.

### Footer
- Multi-column layout for product links, policy links, support, and social links.
- Include legal line and copyright area.
- Optional compact variant for internal pages.

### Section
- Standardized vertical rhythm wrapper.
- Suggested spacing: `py-16 md:py-20 lg:py-24`.
- Supports section-level variants (`default`, `muted`, `accent`).

### Container
- Consistent max-width and horizontal padding.
- Suggested base classes: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`.
- Used across all templates to keep alignment consistent.

---

## 3) Page Templates

### Landing Page Template
1. **Hero:** heading, subcopy, primary + secondary CTAs.
2. **Trust/Social proof:** logos, metrics, testimonial snippets.
3. **Value sections:** cards for key offerings/use cases.
4. **How it works:** 3-step visual or icon list.
5. **FAQ:** accordion.
6. **Final CTA + Footer.**

### Directory Listing Template
1. **Top controls:** search input, select filters, optional tabs.
2. **Active filter chips:** removable badges.
3. **Results grid/list:** card-based items.
4. **Pagination or infinite load area.**
5. **Empty state:** clear message + reset filters action.

### Profile Page Template
1. **Header block:** avatar/icon, name, role, quick badges.
2. **Primary actions:** contact/bookmark/schedule button group.
3. **Tabbed content:** overview, details, availability, reviews/resources.
4. **Related content:** recommendation cards.
5. **Sticky action panel (optional desktop).**

---

## 4) Accessibility Notes

- **Contrast:**
  - Body text must meet WCAG AA (4.5:1).
  - Large text/UI labels should meet at least 3:1.
  - Avoid low-contrast muted text on tinted backgrounds.
- **Keyboard navigation:**
  - Ensure complete keyboard access for dialogs, tabs, accordions, and selects.
  - Preserve logical tab order and avoid keyboard traps (except intentional modal focus trap).
- **Focus states:**
  - Use `focus-visible` rings consistently (2px+ visible outline/ring).
  - Do not remove outlines without replacement.
  - Ensure focus state contrast is visible on light and dark/muted surfaces.
- **Semantic structure:**
  - Use landmark elements (`header`, `main`, `footer`, `nav`, `section`).
  - Use heading hierarchy in order (`h1` → `h2` → `h3`).
- **Forms:**
  - Every input/select has an associated label.
  - Error messages should be descriptive and tied to fields (`aria-describedby`).

---

## 5) Tailwind Class Patterns (Spacing + Typography)

### Typography tokens (utility composition)
- **Display:** `text-4xl font-semibold tracking-tight md:text-5xl`
- **H1:** `text-3xl font-semibold tracking-tight md:text-4xl`
- **H2:** `text-2xl font-semibold tracking-tight md:text-3xl`
- **H3:** `text-xl font-medium tracking-tight md:text-2xl`
- **Body:** `text-base leading-7 text-muted-foreground`
- **Small text:** `text-sm leading-6 text-muted-foreground`
- **Caption/meta:** `text-xs leading-5 text-muted-foreground`

### Consistent spacing patterns
- **Page shell:** `flex min-h-screen flex-col`
- **Main area:** `flex-1`
- **Section wrapper:** `py-16 md:py-20 lg:py-24`
- **Stack spacing:**
  - Tight stack: `space-y-2`
  - Standard stack: `space-y-4`
  - Relaxed stack: `space-y-6`
- **Card padding:** `p-4 md:p-6`
- **Content max width:** `max-w-3xl`

### Responsive grid/list patterns
- **Feature grid:** `grid gap-4 sm:grid-cols-2 lg:grid-cols-3`
- **Directory list:** `grid gap-4 md:grid-cols-2 xl:grid-cols-3`
- **Two-column content:** `grid gap-8 lg:grid-cols-[2fr_1fr]`

### Interaction/state patterns
- **Action button baseline:**
  - `inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors`
- **Focus ring baseline:**
  - `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
- **Disabled baseline:**
  - `disabled:pointer-events-none disabled:opacity-50`
