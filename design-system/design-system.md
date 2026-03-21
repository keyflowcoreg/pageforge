# Design System: AI-POWERED LANDING PAGE GENERATOR FOR BUSINESSES, SAAS, AND CREATORS. ONE-CLICK PROFESSIONAL PAGES WITH AI COPY, MODERN DESIGN, AND CONVERSION OPTIMIZATION.

> **Category:** SaaS (General) | **Style:** Glassmorphism | **Severity:** HIGH

---

## Style: Glassmorphism

**Keywords:** Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer
**Best For:** Modern SaaS, financial dashboards, high-end corporate, lifestyle apps, modal overlays, navigation
**Performance:** ⚠ Good | **Accessibility:** ⚠ Ensure 4.5:1

**AI Prompt:**

> Design a glassmorphic interface with frosted glass effect. Use backdrop blur (10-20px), translucent overlays (rgba 10-30% opacity), vibrant background colors, subtle borders, light source reflection, layered depth. Perfect for modern overlays and cards.

**CSS Effects:**
```css
backdrop-filter: blur(15px), background: rgba(255, 255, 255, 0.15), border: 1px solid rgba(255,255,255,0.2), -webkit-backdrop-filter: blur(15px), z-index layering for depth
```

**Implementation Checklist:**
- ☐ Backdrop-filter blur 10-20px
- ☐ Translucent white 15-30% opacity
- ☐ Subtle border 1px light
- ☐ Vibrant background verified
- ☐ Text contrast 4.5:1 checked

---

## Color Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| primary | `#7C3AED` | `--color-primary` | Buttons, links, brand elements |
| on-primary | `#FFFFFF` | `--color-on-primary` | Text on primary backgrounds |
| secondary | `#6366F1` | `--color-secondary` | Secondary actions, highlights |
| on-secondary | `#FFFFFF` | `--color-on-secondary` | Text on secondary backgrounds |
| accent | `#EC4899` | `--color-accent` | CTAs, badges, focus indicators |
| on-accent | `#FFFFFF` | `--color-on-accent` | Text on accent backgrounds |
| background | `#FAF5FF` | `--color-background` | Page background |
| foreground | `#0F172A` | `--color-foreground` | Primary text |
| card | `#FFFFFF` | `--color-card` | Card surfaces |
| card-foreground | `#0F172A` | `--color-card-foreground` | Text on cards |
| muted | `#F7F3FD` | `--color-muted` | Subtle backgrounds, disabled states |
| muted-foreground | `#64748B` | `--color-muted-foreground` | Secondary text, placeholders |
| border | `#EFE7FC` | `--color-border` | Dividers, input borders |
| destructive | `#DC2626` | `--color-destructive` | Errors, deletions |
| on-destructive | `#FFFFFF` | `--color-on-destructive` | Text on destructive bg |
| ring | `#7C3AED` | `--color-ring` | Focus rings |

> AI purple + generation pink

---

## Typography

**Pairing:** Enterprise SaaS Mobile (Plus Jakarta Sans)
- **Heading:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Code:** JetBrains Mono
- **Mood:** enterprise, saas, b2b, professional, indigo, modern, approachable, legible, ios dynamic type, android scaling
- **Best For:** B2B SaaS apps, productivity tools, government and finance mobile apps, admin dashboards, enterprise onboarding
- **Google Fonts:** [Load fonts](https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
```

**Tailwind Config:**
```js
fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] }
```

---

## Recommended Components

> All components from [shadcn/ui](https://ui.shadcn.com) and [21st.dev](https://21st.dev)

### shadcn/ui Button
Primary CTA and secondary actions
```bash
npx shadcn@latest add button
```

### shadcn/ui Dialog
Modals for onboarding and confirmations
```bash
npx shadcn@latest add dialog
```

### shadcn/ui Form
React Hook Form + Zod validated forms
```bash
npx shadcn@latest add form
```

### shadcn/ui Navigation Menu
Top navigation with dropdowns
```bash
npx shadcn@latest add navigation-menu
```

### shadcn/ui Sheet
Slide-out sidebar panels
```bash
npx shadcn@latest add sheet
```

### shadcn/ui Tooltip
Feature hints and info tooltips
```bash
npx shadcn@latest add tooltip
```

---

## Layout Pattern

**Pattern:** AI Personalization Landing

**Section Order:**
1. 1. Dynamic hero (personalized)
2. 2. Relevant features
3. 3. Tailored testimonials
4. 4. Smart CTA

**CTA Placement:** Context-aware placement based on user segment
**Color Strategy:** Adaptive based on user data. A/B test color variations per segment.

**Conversion Tips:** 20%+ conversion with personalization. Requires analytics integration. Fallback for new users.

---

## Animations

**Library:** CSS + Tailwind animate

**Install:**
```bash
npm install tailwindcss-animate
```

**Recommended Effects:** Backdrop blur transitions, glass card hover lift, frosted overlay entrance

**Style-Specific Effects:** Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth

---

## Anti-patterns to Avoid

- Excessive animation
- Dark mode by default

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum (WCAG AA)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive breakpoints: 375px, 768px, 1024px, 1440px
- [ ] Dark mode tokens defined
- [ ] All images have `alt` attributes
