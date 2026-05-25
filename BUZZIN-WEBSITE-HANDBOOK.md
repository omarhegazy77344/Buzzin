# Buzzin FZCO — Website Technical & Design Handbook

> Internal documentation for the **buzzin.ae** marketing website.
> Last updated: 25 May 2026

---

## 1. Project Overview

### What this website is

This is the public marketing website for **Buzzin FZCO** — a premises intelligence platform serving hospitality, residential real estate, and education sectors across the UAE, Saudi Arabia, Kuwait, and Lebanon. The website is the primary lead-generation and brand-positioning asset for the company.

### Who it is for

The buyer persona is a senior operations or security decision-maker:

- VP Operations or GM at a luxury hospitality group (e.g., Atlantis The Palm, Fairmont)
- Head of Community Management at a residential developer (e.g., Aldar Properties, Asteco)
- School Principal or Head of Compliance at an international school group (e.g., Taaleem, Brighton College UAE)

These buyers care about compliance, audit readiness, operational control, and brand experience — not feature lists.

### What the website is trying to achieve

1. **Demo bookings** — every page funnels toward `/book-demo`
2. **SEO ranking** — target keywords like "visitor management system UAE", "digital work permit system UAE", "KHDA safeguarding system"
3. **Brand positioning** — reposition Buzzin from a single-product VMS vendor to "the operating system for premises intelligence"

### Core repositioning

> From: "Buzzin is a visitor management system."
> To: "Buzzin is the premises intelligence platform — nine integrated modules, one dashboard, one audit trail."

### URLs

| Environment | URL |
|---|---|
| Live preview | `buzzin-mu.vercel.app/en` |
| Production domain | `buzzin.ae` |
| Hosting | Vercel |

---

## 2. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | ^16.2.2 | App Router, static generation, API routes |
| React | ^19.2.4 | UI rendering |
| TypeScript | ^5.9.3 | Type safety across the entire codebase |
| Tailwind CSS | ^4.2.2 | Utility-first styling with design tokens |
| Framer Motion | ^12.38.0 | Scroll-triggered animations, hero entrances, stagger effects |
| GSAP | ^3.14.2 | Stat counter animations, ecosystem diagram effects |
| Sanity.io | ^5.19.0 | Headless CMS (schemas defined, partial integration) |
| next-sanity | ^12.2.1 | Sanity client and live preview helpers for Next.js |
| next-intl | ^4.9.0 | Internationalisation framework (en/ar) |
| next-themes | ^0.4.6 | Light/dark mode toggle |
| Resend | ^6.12.3 | Transactional email delivery (demo requests, careers) |
| MongoDB | ^7.1.1 | Lead storage database |
| react-hook-form | ^7.72.1 | Form state management (book-demo, contact, careers) |
| zod | ^4.3.6 | Schema-based form validation |
| @hookform/resolvers | ^5.2.2 | Connects zod schemas to react-hook-form |
| lucide-react | ^1.7.0 | Icon library (all UI icons) |
| embla-carousel-react | ^8.6.0 | Hero image carousel |
| react-fast-marquee | ^1.6.5 | Client logo ticker strip |
| clsx + tailwind-merge | ^2.1.1 / ^3.5.0 | Conditional className utility (`cn()`) |
| @radix-ui/react-slot | ^1.2.4 | Polymorphic `asChild` prop for Button component |
| PostCSS | ^8.5.8 | CSS processing pipeline |
| ESLint + eslint-config-next | ^9.39.4 / ^16.2.2 | Code linting |

### Sanity plugins

| Plugin | Purpose |
|---|---|
| @sanity/document-internationalization | Document-level i18n for CMS content |
| @sanity/language-filter | Language field filtering in the Studio |
| sanity-plugin-internationalized-array | Array-based field translation |
| @sanity/vision | GROQ query playground in Studio |
| @sanity/icons | Icon set for Sanity Studio UI |

### Scripts

```json
"dev": "next dev --turbopack",
"build": "next build",
"start": "next start",
"lint": "eslint .",
"seed:sanity": "node scripts/seed-sanity.mjs"
```

The dev server uses Turbopack for faster local development.

---

## 3. Project Structure

```
D:\New Buzzin Web Page Clone
├── public/
│   ├── images/
│   │   ├── hero/              # Hero carousel images
│   │   ├── homepage/          # Homepage section images
│   │   ├── platform/          # Module page illustrations and photos
│   │   ├── industries/        # Industry page images
│   │   ├── company/           # About/company page assets
│   │   ├── clients/           # Client logo PNGs
│   │   ├── illustration/      # Storyset vector illustrations
│   │   └── logo-dark.png      # Footer logo (white on dark)
│   └── robots.txt
├── scripts/
│   └── seed-sanity.mjs        # Sanity seeding script
├── src/
│   ├── app/
│   │   ├── globals.css         # CSS custom properties (light/dark tokens)
│   │   ├── layout.tsx          # Root layout (fonts, theme provider)
│   │   ├── not-found.tsx       # Root 404 page
│   │   ├── sitemap.ts          # XML sitemap generator
│   │   ├── api/
│   │   │   ├── contact/route.ts   # Demo + contact form handler
│   │   │   └── careers/route.ts   # Careers application handler
│   │   ├── (marketing)/
│   │   │   └── [locale]/          # Language-segmented routes
│   │   │       ├── layout.tsx     # Marketing layout (Navbar, Footer)
│   │   │       ├── page.tsx       # Homepage
│   │   │       ├── platform/
│   │   │       │   ├── page.tsx                        # Platform overview
│   │   │       │   ├── visitor-management-system/      # VMS module
│   │   │       │   ├── work-permit-system/             # Work Permit module
│   │   │       │   ├── event-management/               # Events module
│   │   │       │   ├── attendance-management/          # Attendance module
│   │   │       │   ├── queue-management/               # QMS module
│   │   │       │   ├── booking-management/             # Booking module
│   │   │       │   ├── safeguarding/                   # Safeguarding module
│   │   │       │   ├── key-management/                 # KMS module (coming soon)
│   │   │       │   ├── patrolling/                     # Patrolling (coming soon)
│   │   │       │   └── parking-management/             # Parking (coming soon)
│   │   │       ├── industries/
│   │   │       │   ├── page.tsx                        # Industries overview
│   │   │       │   ├── residential-real-estate/
│   │   │       │   ├── hospitality/
│   │   │       │   └── education/
│   │   │       ├── why-buzzin/
│   │   │       ├── about/
│   │   │       ├── security-compliance/
│   │   │       ├── book-demo/
│   │   │       ├── contact/
│   │   │       ├── faq/
│   │   │       ├── careers/
│   │   │       ├── privacy-policy/
│   │   │       ├── terms-of-service/
│   │   │       ├── sitemap/                            # Human-readable HTML sitemap
│   │   │       └── not-found.tsx                       # Locale-level 404
│   │   └── studio/
│   │       └── [[...tool]]/page.tsx                    # Sanity Studio route
│   ├── components/
│   │   ├── marketing/          # Page-level and section components
│   │   ├── ui/                 # Primitive reusable UI components
│   │   └── sandbox/            # Design variant experiments
│   ├── lib/
│   │   ├── cn.ts               # clsx + tailwind-merge utility
│   │   ├── fonts.ts            # next/font Google Fonts loader
│   │   ├── motion.ts           # Framer Motion shared variants and constants
│   │   ├── content-defaults.ts # Hardcoded site content and module data
│   │   └── leads/
│   │       ├── types.ts        # LeadSubmission type
│   │       ├── provider.ts     # Lead provider factory (Mongo / HubSpot)
│   │       └── mongodb.ts      # MongoDB lead persistence
│   └── sanity/
│       ├── env.ts              # Sanity project ID, dataset, API version
│       ├── lib/
│       │   ├── client.ts       # Sanity client instance
│       │   ├── live.ts         # Sanity Live subscription helpers
│       │   └── queries.ts      # GROQ queries
│       ├── schemaTypes/
│       │   ├── index.ts        # Schema type registry
│       │   ├── documents/      # 12 document schemas
│       │   ├── fields/         # 4 localized field types
│       │   └── objects/        # 3 reusable object schemas
│       └── structure/
│           └── index.ts        # Sanity Studio desk structure
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

### Key conventions

- **All marketing pages** live under `src/app/(marketing)/[locale]/` — the `(marketing)` route group is invisible in the URL
- The `[locale]` segment handles language routing (`/en/...`, `/ar/...`)
- Static assets for specific modules are in `public/images/platform/`
- All component imports use the `@/` alias mapped to `./src/*`

---

## 4. Routing & Internationalisation

### Language routing

The `[locale]` dynamic route segment in `src/app/(marketing)/[locale]/` provides language-based URL segmentation:

- English: `/en/platform/visitor-management-system`
- Arabic: `/ar/platform/visitor-management-system`

The `next-intl` package (^4.9.0) provides the internationalisation framework. Locale configuration lives in `src/i18n/config.ts`:

```typescript
export const locales = ["en", "ar"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"
```

### Middleware

`src/middleware.ts` handles locale detection and redirection:

1. **Public paths** (`/studio`, `/api`, `/_next`, `/images`, `/favicon`) are passed through unchanged
2. If the URL already contains a valid locale prefix (`/en/...` or `/ar/...`), it sets an `x-locale` header and proceeds
3. If no locale is detected, the visitor is **redirected** to the default locale prefix (`/en/...`)

The matcher excludes static assets and internal Next.js paths:

```typescript
matcher: ["/((?!_next|studio|api|images|favicon\\.ico|.*\\..*).*)"]
```

### RTL handling

Arabic uses RTL layout via the `dir="rtl"` attribute on the HTML element. The global CSS switches the base font:

```css
[dir="rtl"] body {
  font-family: var(--font-tajawal), system-ui, sans-serif;
}
```

Arabic fonts loaded via `next/font/google`:
- **Cairo** (headings) — weights 400, 600, 700
- **Tajawal** (body) — weights 400, 500, 700

Both Arabic fonts have `preload: false` to avoid loading them for English visitors.

### Metadata

Each page exports its own `metadata` object using the Next.js `Metadata` type. There is no centralised metadata template — each page defines its own `title`, `description`, and `openGraph` fields.

### Sitemap generation

The XML sitemap at `src/app/sitemap.ts` generates entries for both `en` and `ar` locale prefixes across all routes. Each route is generated with a priority and change frequency.

---

## 5. Design System & Brand Identity

### 5.1 Brand Colors

All colors are defined as CSS custom properties in `src/app/globals.css` with light and dark mode variants.

**Light mode tokens:**

| Token | Value | Usage |
|---|---|---|
| `--text-brand` | `#E0941D` | CTAs, accents, highlights, section tags |
| `--text-primary` | `#1E2547` | Headlines, primary text (navy) |
| `--text-secondary` | `#52525B` | Body text |
| `--text-tertiary` | `#71717A` | Supportive text |
| `--text-muted` | `#A1A1AA` | Captions, labels |
| `--text-inverse` | `#FFFFFF` | Text on dark backgrounds |
| `--bg-page` | `#FFFFFF` | Default page background |
| `--bg-canvas` | `#EBF5FB` | Alternate section background (sky blue) |
| `--bg-surface` | `#FFFFFF` | Cards and elevated surfaces |
| `--bg-proof` | `#1E2547` | Navy proof sections, hero backgrounds |
| `--bg-footer` | `#161B35` | Footer background |
| `--border-default` | `#E4E4E7` | Standard borders |
| `--border-subtle` | `#F4F4F5` | Subtle dividers |
| `--border-strong` | `#D4D4D8` | Emphasis borders |
| `--border-brand` | `#F5A623` | Amber accent borders |

**Dark mode tokens** (defined under `[data-theme="dark"]`) shift backgrounds to deep navy tones (#0D1023, #161B35, #1E2547) and lighten text to #FAFAFA / #D4D4D8. The brand amber shifts to `#F7C04D` for better contrast on dark surfaces.

**Tailwind extended palette** (in `tailwind.config.ts`):

- `amber-50` through `amber-950` — 11-stop amber scale centred on `amber-500: #F5A623`
- `navy-50` through `navy-950` — 11-stop navy scale centred on `navy-800: #1E2547`
- `sky-50` through `sky-500` — 6-stop sky blue scale for canvas backgrounds

**Design direction — "Amber in the Dark":**

Amber (#F5A623) is the dominant brand colour. Navy (#1E2547) is the foundation. The design philosophy is cinematic rather than corporate — dark sections make amber glow. Navy sections are used for:
- Client proof sections
- Hero backgrounds on industry pages and coming-soon pages
- The footer
- SecurityBar component
- Exclusivity partnership callouts

White space is deliberate and generous. The site avoids dense, feature-packed layouts in favour of breathing room that communicates confidence.

### 5.2 Typography

Fonts are loaded via `next/font/google` in `src/lib/fonts.ts` and applied as CSS variables on the root layout.

| Font | CSS Variable | Tailwind Class | Weights | Usage |
|---|---|---|---|---|
| DM Serif Display | `--font-dm-serif` | `font-display` | 400 | Large display headlines (H1 on hero sections), blockquotes |
| Syne | `--font-syne` | `font-heading` | 400, 500, 600, 700 | Section tags, badges, navigation, UI labels, card titles, H2/H3 |
| Plus Jakarta Sans | `--font-jakarta` | `font-body` | 400, 500, 600, 700 | Body text, descriptions, sub-headlines |
| Cairo | `--font-cairo` | `font-heading-ar` | 400, 600, 700 | Arabic headings |
| Tajawal | `--font-tajawal` | `font-body-ar` | 400, 500, 700 | Arabic body text |

**Type scale** (from `tailwind.config.ts`):

| Class | Size | Line Height | Letter Spacing |
|---|---|---|---|
| `text-display-2xl` | 4.5rem | 1.1 | -0.03em |
| `text-display-xl` | 3.75rem | 1.1 | -0.03em |
| `text-display-lg` | 3rem | 1.15 | -0.02em |
| `text-display-md` | 2.25rem | 1.2 | -0.02em |
| `text-heading-xl` | 1.875rem | 1.25 | -0.02em |
| `text-heading-lg` | 1.5rem | 1.3 | -0.01em |
| `text-body-lg` | 1.125rem | 1.6 | — |
| `text-body-md` | 1rem | 1.6 | — |
| `text-body-sm` | 0.875rem | 1.5 | — |
| `text-overline` | 0.6875rem | 1.6 | 0.08em |

### 5.3 Spacing & Layout

**Container:** The `Container` component (in `src/components/ui/container.tsx`) provides a centred max-width wrapper. The Tailwind config defines `max-w-site: 80rem` (1280px).

**Section padding pattern:**
- Standard sections: `py-16 md:py-20`
- Hero sections: `pt-28 pb-16 md:pt-36 md:pb-20` (accounts for fixed navbar height)
- Compact sections: `py-14 md:py-16`

**Grid systems:**
- Two-column hero: `grid-cols-[1.1fr_0.9fr]` (left-heavy for text, right for visual)
- Feature cards: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (responsive 3-column)
- Step cards: `grid-cols-1 md:grid-cols-5` (5 horizontal steps) or `md:grid-cols-2` (2×2 grid)
- Before/after: Full-width rows with `md:grid-cols-2` internal split

**Mobile-first:** All layouts start from a single-column mobile view and expand at `sm:`, `md:`, and `lg:` breakpoints.

### 5.4 Design Philosophy

These principles are embedded in every page:

1. **"Confidence does not shout"** — Copy is direct and declarative. No exclamation marks, no superlatives, no hype language.
2. **White space is not emptiness** — Generous spacing between sections and elements communicates maturity and premium positioning.
3. **Dark makes amber meaningful** — Navy proof sections (#1E2547) make amber (#F5A623) glow. This is the visual identity of the brand.
4. **Motion communicates character** — Scroll-triggered reveals, floating cards, and staggered entrances give the site personality without being distracting.
5. **Details are the product** — Every stat is specific (81,085 permits, not "thousands"), every animation is intentional, every border radius is consistent.
6. **Must feel unmistakably Buzzin** — The hexagon pattern, the amber/navy palette, the floating dashboard cards, the "— SECTION TAG" eyebrows — these elements repeat across every page to create brand recognition.
7. **Never a generic SaaS template** — No stock hero images, no gradient meshes, no generic feature grids. Every section is purpose-built.

### 5.5 Component Patterns

**Hero section structure:** Two-column layout — left column contains badges, H1 (DM Serif Display), sub-headline (Plus Jakarta Sans), stat row with amber numbers, and CTA buttons. Right column contains a dashboard mock card with ambient amber radial glow and floating notification cards.

**Floating cards:** Small notification-style cards positioned absolute, using the `animate-float` keyframe (3.5s ease-in-out infinite, 6px vertical travel). Second card uses `[animation-delay:1.8s]`.

**Before/after comparison rows:** Full-width rows with red XCircle (before) on the left and green CheckCircle (after) on the right, separated by a vertical border on desktop.

**Feature card grid:** 6 cards in a 3-column grid. Each card has a 36px amber-tinted icon container, Syne bold title, and Plus Jakarta Sans body text. Border hover transitions to amber tint with subtle lift (`hover:-translate-y-[2px]`).

**Section tag pattern:** Every section opens with an amber overline: `"— SECTION NAME"` using Syne 600 at `text-overline` size with `tracking-[0.12em]`.

**Navy proof sections:** Use `bg-[var(--bg-proof)]` background with `HexagonPattern` overlay at `text-white/[0.04]` opacity.

**Module badge system:**
- **Core:** Muted border pill — `bg-[var(--bg-canvas)]`, muted text
- **New:** Amber pill — `bg-amber-500/10`, amber text
- **Coming Soon:** Emerald pill — `bg-emerald-500/10`, emerald text with optional pulse dot

---

## 6. Animation System

### Framer Motion

All page-level animations use Framer Motion. The shared constants are in `src/lib/motion.ts`.

**Brand easing curve:**

```typescript
export const BRAND_EASE = [0.25, 0.1, 0.25, 1] as const
```

**Global viewport config:**

```typescript
export const VIEWPORT = { once: false, amount: 0.2 } as const
```

> ⚠️ `once: false` means all animations re-trigger when scrolling in both directions. This was a deliberate design decision applied site-wide.

**Standard section reveal:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.15 }}
  transition={{ duration: 0.6, ease: BRAND_EASE }}
>
  {children}
</motion.div>
```

This pattern is wrapped in the `VmsSectionReveal` component from `vms-page-layout.tsx`.

**Stagger children values:**

| Component Type | Interval |
|---|---|
| Feature cards | 0.1s |
| Step cards | 0.15s |
| Timeline rows | 0.12s |
| Sector cards | 0.1s |
| Proof cards | 0.12s |
| Before/after rows | 0.1s |
| Module list rows | 0.06s |

**Hero entrance:** Uses a stagger container (`staggerChildren: 0.15`) with `fadeUp` variants (y: 30 → 0, duration: 0.7s). The right-side dashboard card fades in with a slight scale (0.96 → 1) after a 0.3s delay.

**Floating card bob animation** (Tailwind keyframe in `tailwind.config.ts`):

```typescript
float: {
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-6px)" },
}
// Duration: 3.5s, ease-in-out, infinite
```

Applied via class `animate-float`. Second card uses `[animation-delay:1.8s]`.

**Available motion utilities** in `src/lib/motion.ts`:

| Function | Description |
|---|---|
| `fadeUp(y, duration, delay)` | Vertical fade-in from below |
| `fadeUpScale(y, scale, duration, delay)` | Fade + scale from below |
| `scaleIn(from, duration, delay)` | Scale-in from smaller |
| `slideX(direction, offset, duration, delay)` | Horizontal slide-in |
| `stagger(interval, delay)` | Parent stagger container |
| `hexReveal` | Ring-based hexagon reveal |

### GSAP

GSAP (^3.14.2) with ScrollTrigger is available in the project and used for:
- Stat counter animations (number counting up on scroll)
- Ecosystem/platform diagram animations on the homepage

### CSS animations

Additional keyframes defined in `tailwind.config.ts`:

| Animation | Duration | Description |
|---|---|---|
| `fade-in-up` | 0.6s | Simple fade + translateY entrance |
| `marquee` | 30s (configurable via `--marquee-duration`) | Infinite horizontal scroll for client logo ticker |
| `pulse-ring` | 2.5s | Expanding ring pulse effect |
| `float` | 3.5s | Vertical bob for floating cards |

### Reduced motion

The global CSS includes `@media (prefers-reduced-motion: reduce)` that forces all animation durations to near-zero.

---

## 7. Page Inventory

### Main Pages

| Route | File | Type | Primary Keyword |
|---|---|---|---|
| `/en` | `(marketing)/[locale]/page.tsx` | Homepage | premises management UAE |
| `/en/why-buzzin` | `(marketing)/[locale]/why-buzzin/page.tsx` | Company | why Buzzin platform |
| `/en/about` | `(marketing)/[locale]/about/page.tsx` | Company | about Buzzin FZCO |
| `/en/security-compliance` | `(marketing)/[locale]/security-compliance/page.tsx` | Company | ISO 27001 UAE security |
| `/en/book-demo` | `(marketing)/[locale]/book-demo/page.tsx` | Conversion | book demo visitor management |
| `/en/contact` | `(marketing)/[locale]/contact/page.tsx` | Conversion | contact Buzzin UAE |
| `/en/faq` | `(marketing)/[locale]/faq/page.tsx` | Support | FAQ premises management |
| `/en/careers` | `(marketing)/[locale]/careers/page.tsx` | Company | careers Buzzin Dubai |
| `/en/sitemap` | `(marketing)/[locale]/sitemap/page.tsx` | Utility | sitemap |

### Sandbox & Reference Pages (not linked in navigation)

| Route | File | Purpose |
|---|---|---|
| `/en/hero-sandbox` | `(marketing)/[locale]/hero-sandbox/page.tsx` | Hero design variant comparison |
| `/en/client-sandbox` | `(marketing)/[locale]/client-sandbox/page.tsx` | Client logo display variant comparison |
| `/en/landing-reference` | `(marketing)/[locale]/landing-reference/page.tsx` | Landing page layout reference |

### Platform Module Pages

| Route | File | Status | Primary Keyword |
|---|---|---|---|
| `/en/platform` | `platform/page.tsx` | Overview | platform modules UAE |
| `/en/platform/visitor-management-system` | `platform/visitor-management-system/page.tsx` | Core — Live | visitor management system UAE |
| `/en/platform/work-permit-system` | `platform/work-permit-system/page.tsx` | Core — Live | digital work permit system UAE |
| `/en/platform/event-management` | `platform/event-management/page.tsx` | Core — Live | event check-in system UAE |
| `/en/platform/attendance-management` | `platform/attendance-management/page.tsx` | Core — Live | NFC attendance management UAE |
| `/en/platform/queue-management` | `platform/queue-management/page.tsx` | New — Live | queue management system UAE |
| `/en/platform/booking-management` | `platform/booking-management/page.tsx` | New — Live | amenity booking management UAE |
| `/en/platform/safeguarding` | `platform/safeguarding/page.tsx` | New — Live | KHDA safeguarding system UAE |
| `/en/platform/key-management` | `platform/key-management/page.tsx` | Coming Soon | NFC key management system UAE |
| `/en/platform/patrolling` | `platform/patrolling/page.tsx` | Coming Soon | NFC patrolling system UAE |
| `/en/platform/parking-management` | `platform/parking-management/page.tsx` | Coming Soon | ANPR parking management UAE |

### Industry Pages

| Route | File | Primary Keyword |
|---|---|---|
| `/en/industries` | `industries/page.tsx` | premises management industries UAE |
| `/en/industries/residential-real-estate` | `industries/residential-real-estate/page.tsx` | visitor management residential UAE |
| `/en/industries/hospitality` | `industries/hospitality/page.tsx` | hotel visitor management UAE |
| `/en/industries/education` | `industries/education/page.tsx` | school visitor management UAE |

### Legal & Utility Pages

| Route | File | robots |
|---|---|---|
| `/en/privacy-policy` | `privacy-policy/page.tsx` | noindex |
| `/en/terms-of-service` | `terms-of-service/page.tsx` | noindex |
| 404 | `not-found.tsx` (root + locale) | — |

All marketing file paths above are relative to `src/app/(marketing)/[locale]/`.

### Other App Routes

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.tsx` | Root page (redirects to `/en`) |
| `/studio` | `src/app/studio/[[...tool]]/page.tsx` | Sanity Studio (catch-all) |

---

## 8. Shared Components

### Layout Components

| Component | File | Client? | Description |
|---|---|---|---|
| `Navbar` | `components/marketing/navbar.tsx` | Yes | Fixed header with Platform and Industries dropdowns, mobile accordion, phone CTA, locale switcher, theme toggle |
| `Footer` | `components/marketing/footer.tsx` | No | 5-column footer with platform/industry/company link groups, legal links, contact info |
| `WhatsAppFab` | `components/marketing/whatsapp-fab.tsx` | Yes | Fixed bottom-right floating WhatsApp button |

### Reusable Section Components

| Component | File | Props | Description |
|---|---|---|---|
| `CtaBanner` | `components/marketing/cta-banner.tsx` | `content?: CtaBannerContent` | Amber gradient CTA with headline, sub, primary + WhatsApp buttons, phone number. Uses defaults from `content-defaults.ts` when no props passed. |
| `SecurityBar` | `components/marketing/security-bar.tsx` | `certs?: string[]` | Dark navy section with ISO 27001, SOC 1/2/3, GDPR, UAE Pass, On-Prem pills. Default certs from `content-defaults.ts`. |
| `VmsHero` | `components/marketing/vms-page-layout.tsx` | `left: ReactNode, right: ReactNode` | Two-column hero grid (1.1fr / 0.9fr) with staggered entrance animation |
| `HeroBlock` | `components/marketing/vms-page-layout.tsx` | `children, className?` | Individual animated block within VmsHero (uses fadeUp variant) |
| `DashboardMock` | `components/marketing/vms-page-layout.tsx` | — | Generic dashboard hero card with KPI row, bar chart, module stats, and two floating cards |
| `VmsSectionReveal` | `components/marketing/vms-page-layout.tsx` | `children, className?` | whileInView fade-up wrapper for section headings and content |
| `VmsStaggerGrid` | `components/marketing/vms-page-layout.tsx` | `children, className?, interval?` | Stagger parent that triggers children sequentially |
| `VmsStaggerItem` | `components/marketing/vms-page-layout.tsx` | `children, className?` | Individual stagger child with fade-up entrance |

### Module-Specific Dashboard Mocks

| Component | File | Used On |
|---|---|---|
| `BookingCalendarMock` | `components/marketing/booking-calendar-mock.tsx` | Booking Management page |
| `AttendanceDashboardMock` | `components/marketing/attendance-dashboard-mock.tsx` | Attendance Management page |
| `KmsDashboardMock` | `components/marketing/kms-dashboard-mock.tsx` | Key Management page |

The Parking Management page has its dashboard mock (`ParkingDashboardMock`) defined inline in the page file.

### UI Primitives

| Component | File | Description |
|---|---|---|
| `Button` | `components/ui/button.tsx` | Polymorphic button with 4 variants (primary, secondary, ghost, whatsapp) and 3 sizes (sm, md, lg). Supports `asChild` via Radix Slot. |
| `Container` | `components/ui/container.tsx` | Centred max-width wrapper |
| `HexagonPattern` | `components/ui/hexagon-pattern.tsx` | SVG hexagon background overlay for navy sections |
| `BrandLogo` | `components/ui/brand-logo.tsx` | Logo image component |
| `ThemeToggle` | `components/ui/theme-toggle.tsx` | Light/dark mode switch |
| `LocaleSwitcher` | `components/ui/locale-switcher.tsx` | en/ar language toggle |

### Form Components

| Component | File | Description |
|---|---|---|
| `BookDemoForm` | `components/marketing/book-demo-form.tsx` | react-hook-form + zod demo request form |
| `CareersForm` | `components/marketing/careers-form.tsx` | Job application form with CV upload (drag-and-drop, 5MB max) |
| `ContactLayout` | `components/marketing/contact-layout.tsx` | Contact page form + info layout |

### Other Marketing Components

| Component | File | Description |
|---|---|---|
| `IndustryChips` | `components/marketing/industry-chips.tsx` | Clickable industry filter chips |
| `IndustriesHero` | `components/marketing/industries-hero.tsx` | Industries overview hero |
| `HospitalityLayout` | `components/marketing/hospitality-layout.tsx` | Hospitality industry page layout |
| `NotFoundContent` | `components/marketing/not-found-content.tsx` | Shared 404 page content with animation |

---

## 9. CMS — Sanity.io

### Current status

Sanity schemas are **fully defined** but the website currently uses **hardcoded content** from `src/lib/content-defaults.ts` for all marketing pages. The Sanity Studio is accessible at `/studio` but content is not yet consumed by the frontend pages.

### Why Sanity was chosen

- Structured content modelling for multi-locale content
- Real-time collaborative editing
- Document-level internationalisation (en + ar)
- Image CDN via `cdn.sanity.io` (configured in `next.config.ts`)

### Schema types defined

**Documents (12):**
`homepage`, `modulePage`, `industryPage`, `blogPost`, `seoLandingPage`, `simpleTextPage`, `bookDemoPage`, `faq`, `ctaBlock`, `client`, `siteSettings`, `locale`

**Localised field types (4):**
`localizedString`, `localizedText`, `localizedAltText`, `localizedRichText`

**Object types (3):**
`imageWithAlt`, `seoMetadata`, `simpleBlockContent`

### Sanity environment

```typescript
// src/sanity/env.ts
apiVersion: "2026-02-01"
dataset: "production"
projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
```

### content-defaults.ts

This file (`src/lib/content-defaults.ts`) is the single source of truth for all hardcoded content used across the site. It exports:

| Export | Description |
|---|---|
| `defaultHeroCarouselImages` | 7 hero carousel image paths |
| `defaultHero` | Homepage hero copy (overline, headline, sub, CTAs) |
| `defaultTickerClients` | 10 client names for logo marquee |
| `defaultStats` | 4 stat counters (20M+, 300+, 4, 9) |
| `defaultModules` | Complete array of all platform modules with status, descriptions, benefits |
| `defaultIndustries` | 3 industry entries (Residential, Education, Hospitality) |
| `defaultBeforeAfterRows` | 6 before/after comparison rows |
| `defaultExclusivity` | Aldar/Asteco exclusive partnership content |
| `defaultSecurityCerts` | 5 security certifications |
| `defaultHowItWorks` | 3-step onboarding process |
| `defaultCtaBanner` | Default CTA banner copy |
| `defaultFooter` | Footer tagline, phone, email, address |

### Migration plan

When Sanity is fully connected, pages will query content from Sanity and fall back to `content-defaults.ts` values. The Sanity schemas are designed to match the structure of the defaults.

---

## 10. API Routes

### `/api/contact` — Demo Requests & Contact Form

| Property | Value |
|---|---|
| **File** | `src/app/api/contact/route.ts` |
| **Method** | POST |
| **Content-Type** | application/json |
| **Handles** | Both demo requests (`type: "demo"`) and contact messages (`type: "contact"`) |

**Request body (demo):**

```typescript
{
  type: "demo",
  name: string,       // min 2 chars
  company: string,    // min 2 chars
  email: string,      // must contain @
  phone: string,      // min 8 chars, required for demo
  jobTitle: string,   // min 2 chars
  industry: string,   // required
  message?: string
}
```

**Request body (contact):**

```typescript
{
  type: "contact",
  name: string,
  company: string,
  email: string,
  phone?: string,
  subject: string,    // required
  message?: string
}
```

**Behaviour:**
1. Validates input
2. Saves to MongoDB (non-blocking — failure logged but does not block response)
3. Sends notification email to `info@buzzin.ae`
4. Sends confirmation email to the submitter

### `/api/careers` — Job Applications

| Property | Value |
|---|---|
| **File** | `src/app/api/careers/route.ts` |
| **Method** | POST |
| **Content-Type** | multipart/form-data |

**Form fields:**

| Field | Type | Required | Validation |
|---|---|---|---|
| `fullName` | string | Yes | min 2 chars |
| `email` | string | Yes | must contain @ |
| `phone` | string | Yes | min 8 chars |
| `role` | string | Yes | non-empty |
| `location` | string | Yes | non-empty |
| `linkedin` | string | No | — |
| `message` | string | Yes | min 10 chars |
| `cv` | File | No | max 5MB, PDF/Word only |

**Behaviour:**
1. Parses `FormData` including file upload
2. Sends notification email to `talents@buzzin.ae` with CV attachment
3. Sends confirmation email to the applicant

---

## 11. Email System

### Provider

**Resend** (^6.12.3) handles all transactional email. The API key is read from `RESEND_API_KEY`.

### Email routing

| Form | Notification TO | Confirmation TO | FROM |
|---|---|---|---|
| Demo request | `info@buzzin.ae` | Submitter's email | `RESEND_FROM_EMAIL` or `Buzzin <noreply@buzzin.ae>` |
| Contact form | `info@buzzin.ae` | Submitter's email | Same |
| Careers application | `talents@buzzin.ae` | Applicant's email | Same |

### Email templates

All emails use inline HTML (no external template engine). Templates include:
- Company contact details (phone, WhatsApp, email)
- Business address: Dtec, Dubai Silicon Oasis, Dubai, UAE
- Links to site pages (About, Why Buzzin) in career confirmations

### Development behaviour

When `RESEND_API_KEY` is not set, submissions are logged to the console instead of sent. This allows local development without email configuration.

---

## 12. SEO Strategy

### 12.1 On-Page SEO

Every page exports a `metadata` object with:
- `title` — always includes "| Buzzin" and the primary keyword
- `description` — outcome-focused, includes specific numbers where possible
- `openGraph.title` and `openGraph.description` — shorter variants of the above

Example:

```typescript
export const metadata: Metadata = {
  title: "Visitor Management System UAE | Buzzin — 5-Second Digital Check-In",
  description: "Replace paper logbooks with 5-second digital check-in. UAE Pass and Emirates ID integration. Trusted by Atlantis, Aldar, Taaleem, and 300+ organisations.",
}
```

### 12.2 Structured Data (JSON-LD)

| Schema Type | Pages |
|---|---|
| `SoftwareApplication` | All module pages (VMS, Work Permit, QMS, Events, Attendance, Booking, Safeguarding, KMS) |
| `BreadcrumbList` | All pages |
| `Organization` | Homepage |
| `FAQPage` | FAQ page |

JSON-LD is embedded as `<script type="application/ld+json">` in the page JSX, not in the `<head>`.

### 12.3 Target Keywords

| Page | Primary Keyword |
|---|---|
| Homepage | premises management UAE |
| VMS | visitor management system UAE |
| Work Permit | digital work permit system UAE |
| QMS | queue management system UAE |
| Events | event check-in system UAE |
| Attendance | NFC attendance management UAE |
| Booking | amenity booking management UAE |
| Safeguarding | KHDA safeguarding system UAE |
| Key Management | NFC key management system UAE |
| Patrolling | NFC patrolling system UAE |
| Parking | ANPR parking management UAE |
| Residential | visitor management residential community UAE |
| Hospitality | hotel visitor management UAE |
| Education | school visitor management KHDA UAE |

### 12.4 Technical SEO

- **Static generation:** All marketing pages use `export const dynamic = "force-static"`
- **robots.txt:** Located at `public/robots.txt`
- **XML sitemap:** Generated at `/sitemap.xml` by `src/app/sitemap.ts`, covers all routes in both `en` and `ar` locales
- **noindex pages:** Privacy Policy, Terms of Service, and KMS (coming soon) use `robots: { index: false, follow: true }`
- **Breadcrumbs:** Every page has a visible breadcrumb trail below the navbar
- **Internal linking:** Every page links to related modules, the platform overview, and relevant industry pages

### 12.5 Content Strategy

- **Direct and outcome-focused** — headlines state the result, not the feature
- **Before/after pattern** — every module page includes a comparison section for SEO-rich content
- **Social proof placement** — client quotes appear immediately after the problem section
- **Specific numbers** — "81,085 permits processed in Q1 2026", not "thousands of permits"

---

## 13. Performance Strategy

### Static generation

Every marketing page exports `export const dynamic = "force-static"`. Pages are pre-rendered at build time and served from Vercel's CDN edge network. No server-side rendering occurs at request time for marketing pages.

### Font loading

All 5 fonts are loaded via `next/font/google` with `display: "swap"` to prevent layout shift. Arabic fonts use `preload: false` to avoid downloading unused font files for English visitors.

### Image optimisation

- `next/image` is used for all images with `priority` on above-the-fold hero images
- Remote images from `cdn.sanity.io` are configured in `next.config.ts`

### Bundle considerations

- Framer Motion and GSAP are the largest animation dependencies
- `"use client"` is only added to components that require client-side interactivity (forms, navbar, animations)
- Server Components are the default for all page-level components

---

## 14. Environment Variables

| Variable | Purpose | Public? | Required? |
|---|---|---|---|
| `RESEND_API_KEY` | Email delivery via Resend | No | Yes (for emails) |
| `RESEND_FROM_EMAIL` | FROM address override | No | No (defaults to `Buzzin <noreply@buzzin.ae>`) |
| `MONGODB_URI` | MongoDB connection string for lead storage | No | Yes (for lead storage) |
| `MONGODB_DB_NAME` | MongoDB database name | No | No (defaults to `buzzin`) |
| `LEAD_STORAGE_PROVIDER` | Lead storage backend (`mongodb` or `hubspot`) | No | No (defaults to `mongodb`) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project identifier | Yes | Yes (for CMS) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | Yes | No (defaults to `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version | Yes | No (defaults to `2026-02-01`) |
| `SANITY_API_READ_TOKEN` | Sanity read token for live preview | No | No (for Sanity Live) |
| `SANITY_API_WRITE_TOKEN` | Sanity write token for seeding | No | No (for `seed:sanity` script) |

> ⚠️ `NEXT_PUBLIC_` prefixed variables are exposed to the browser. Private keys (Resend, MongoDB) are server-only.

---

## 15. Deployment

### Platform

Hosted on **Vercel**. The project auto-deploys on git push.

### Build

```bash
next build
```

Output is statically generated for all marketing pages. API routes run as serverless functions.

### Custom domain

Production domain: `buzzin.ae`
Preview: `buzzin-mu.vercel.app`

### Environment setup

All environment variables must be configured in the Vercel project settings under **Settings → Environment Variables**. Separate values can be set for Production, Preview, and Development environments.

### Build considerations

- Turbopack is used in development (`next dev --turbopack`) but not in production builds
- TypeScript strict mode is enabled — all type errors must be resolved before deploy
- ESLint runs via `eslint .` and should pass before merge

---

## 16. Content & Copy Guidelines

### Writing principles

1. **Direct and confident** — never startup casual. The buyer is a VP Operations, not a Product Hunt browser.
2. **Numbers always specific** — "81,085 permits" not "thousands". "5-second check-in" not "fast check-in".
3. **Outcome-focused headlines** — "Every visitor. Known. Verified. Accounted for." not "Visitor Management Features".
4. **The buyer's fear is loss of control** — framing always centres on accountability, compliance, and proof.
5. **Proof always near claims** — client names and stats appear immediately after value propositions.

### Words to never use

`innovative`, `cutting-edge`, `seamlessly`, `leverage`, `robust`, `revolutionary`, `game-changing`, `best-in-class`, `next-generation`

### Formatting conventions

- Headlines often end with a full stop
- Section eyebrows use the pattern: `"— SECTION NAME"` (em dash + space + uppercase)
- Quote attribution: `"— Title, Organisation, City"`
- Em dashes (`—`) are used for interruptions and lists, not hyphens
- Non-breaking spaces (`\u00a0`) are used before em dashes in flowing text

### Client name usage

Only use client names that appear in `content-defaults.ts` or are explicitly approved. Never invent or assume client relationships.

---

## 17. Module Status Reference

| # | Module | Short Name | Status | Badge | In Nav? | In Footer? | Page Exists? |
|---|---|---|---|---|---|---|---|
| 1 | Visitor Management | VMS | `live` | `star` | ✅ | ✅ | ✅ |
| 2 | Work Permit | Work Permit | `live` | `null` | ✅ | ✅ | ✅ |
| 3 | Queue Management | QMS | `new` | `greenDot` | ✅ | ✅ | ✅ |
| 4 | Event Management | Events | `live` | `null` | ✅ | ✅ | ✅ |
| 5 | Attendance | Attendance | `live` | `null` | ✅ | ✅ | ✅ |
| 6 | Booking | Booking | `new` | `greenDot` | ✅ | ✅ | ✅ |
| 7 | Key Management | KMS | `comingSoon` | `null` | ❌ | ❌ | ✅ |
| 8 | Safeguarding | Safeguarding | `comingSoon` | `greenDot` | ❌ | ❌ | ✅ |
| 9 | Patrolling | — | — | — | ❌ | ✅ | ✅ |
| 10 | Parking | — | — | — | ❌ | ❌ | ✅ |

> Modules 9 and 10 (Patrolling, Parking) are defined in page-level data but not in `content-defaults.ts` `defaultModules` array (they have standalone page files only).

**Nav visibility logic:** The navbar filters modules to show only those with `status === "live"` or `status === "new"`. Coming-soon modules are automatically excluded.

**Footer:** Lists specific modules manually in `platformLinks` array — not derived from `defaultModules`.

---

## 18. Client & Proof Points Reference

### Approved Clients by Sector

**Hospitality:**
Atlantis The Palm, Fairmont, Kempinski, Grand Hyatt Dubai

**Real Estate:**
Aldar Properties, Asteco, DAMAC, Azizi, Al-Futtaim

**Education:**
Taaleem, Brighton College UAE, GEMS Education

**Other:**
Masdar City

**Ticker clients** (from `defaultTickerClients`):
Atlantis The Palm, Aldar, Kempinski, Brighton College, Asteco, Grand Hyatt Dubai, GEMS Education, Taaleem, Masdar City, Al-Futtaim

### Key Proof Points

| Proof Point | Source |
|---|---|
| 20M+ secure interactions processed across the GCC | `defaultStats` |
| 300+ active organisations across 5 countries | `defaultStats` |
| 4 countries — UAE, Saudi Arabia, Lebanon | `defaultStats` |
| 9 fully integrated modules | `defaultStats` |
| 71× growth in secure access events 2024 → 2025 | `defaultExclusivity` |
| Exclusive multi-year partner for Aldar and Asteco | `defaultExclusivity` |
| ISO 27001, SOC 1/2/3, GDPR Aligned | `defaultSecurityCerts` |
| UAE Pass integration | `defaultSecurityCerts` |
| On-Prem deployment available | `defaultSecurityCerts` |

---

## 19. Known Issues & Technical Debt

### Content hardcoding

⚠️ **All marketing content is hardcoded in TypeScript files.** The Sanity CMS has schemas defined but no content is fetched from Sanity for any marketing page. All text, stats, and copy live in `content-defaults.ts` or directly in page files.

### Safeguarding module status inconsistency

⚠️ The Safeguarding module has `status: "comingSoon"` in `content-defaults.ts`, but its page (`safeguarding/page.tsx`) presents it as a live, fully-featured module with `robots: { index: true }`. The page was built as a live page but the nav/footer links were removed in a prior task. The `status` field in `content-defaults.ts` should be updated to match the page's live positioning.

### Patrolling and Parking not in defaultModules

⚠️ Patrolling and Parking Management have standalone page files but do not have entries in the `defaultModules` array in `content-defaults.ts`. They exist only in the `pageModules` array within the platform overview page.

### Footer legal links are locale-hardcoded

⚠️ Footer legal links use hardcoded `/en/privacy-policy` and `/en/terms-of-service` paths instead of dynamic locale-based paths.

### HubSpot lead provider stub

The `HubSpotLeadProvider` class in `src/lib/leads/provider.ts` throws `"HubSpot provider is not enabled yet"`. It is a placeholder for future CRM integration.

### No automated tests

There are no test files in the project. The `test` script in `package.json` echoes an error message.

### Arabic content

While the internationalisation framework (next-intl) and Arabic fonts are configured, the actual Arabic translations for page content are not yet implemented. The Arabic locale route exists but serves English content.

---

## 20. How to Add a New Page

1. **Create the file** at `src/app/(marketing)/[locale]/your-page/page.tsx`

2. **Add static generation:**
   ```typescript
   export const dynamic = "force-static"
   ```

3. **Export metadata:**
   ```typescript
   export const metadata: Metadata = {
     title: "Page Title | Buzzin",
     description: "SEO description with specific outcomes and numbers.",
   }
   ```

4. **Import shared components:**
   ```typescript
   import { Navbar } from "@/components/marketing/navbar"
   import { Footer } from "@/components/marketing/footer"
   import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
   import { Container } from "@/components/ui/container"
   import { SecurityBar } from "@/components/marketing/security-bar"
   import { CtaBanner } from "@/components/marketing/cta-banner"
   ```

5. **Add breadcrumb** below the Navbar:
   ```tsx
   <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
     <Link href="/en">Home</Link>
     <span className="mx-1.5">/</span>
     <span>Your Page</span>
   </nav>
   ```

6. **Use section tag pattern** for every section:
   ```tsx
   <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
     &mdash; Section Name
   </p>
   ```

7. **Use animation wrappers** with `VmsSectionReveal`, `VmsStaggerGrid`, and `VmsStaggerItem` — all use `viewport={{ once: false }}` for bidirectional scroll animations.

8. **Add to sitemap** in `src/app/sitemap.ts`:
   ```typescript
   { path: "/your-page", priority: 0.8, changeFrequency: "monthly" },
   ```

9. **Add to navigation** (if needed): Update `navLinks` in `navbar.tsx`

10. **Add to footer** (if needed): Update link arrays in `footer.tsx`

11. **Add to HTML sitemap**: Update `src/app/(marketing)/[locale]/sitemap/page.tsx`

---

## 21. How to Add a New Module Page

Module pages follow a strict established pattern. Every module page includes these sections:

### Standard module page structure

| # | Section | Background | Components Used |
|---|---|---|---|
| 1 | Hero | `--bg-page` (white) | `VmsHero`, `HeroBlock`, dashboard mock |
| 2 | The Problem | `--bg-canvas` (sky) | `VmsSectionReveal`, quote + consequence rows |
| 3 | How It Works | `--bg-page` (white) | `VmsStaggerGrid`, 5 step cards |
| 4 | Hardware (optional) | `--bg-canvas` | 3 hardware cards |
| 5 | Features | `--bg-page` | `VmsStaggerGrid`, 6 feature cards (3 cols) |
| 6 | Use Cases (optional) | `--bg-canvas` | 6 use-case cards |
| 7 | Client Proof | `--bg-proof` (navy) | `HexagonPattern`, proof cards |
| 8 | Before / After | `--bg-canvas` | Comparison rows (red X / green check) |
| 9 | Security | `#141830` | `SecurityBar` shared component |
| 10 | Bottom CTA | amber gradient | `CtaBanner` shared component |

### Hero dashboard mock pattern

Each module has a unique dashboard mock component in `src/components/marketing/`:

1. **Ambient glow** — `bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]`
2. **Card shell** — `rounded-2xl border shadow-[0_24px_60px_rgba(30,37,71,0.10)]`
3. **Navy header bar** — `bg-[var(--bg-proof)]` with module name + LIVE pulse dot
4. **KPI row** — 3-column grid with values and progress bars
5. **Data preview** — Log rows or calendar specific to the module
6. **Alert strip** — Amber-tinted notification bar
7. **Floating card top-right** — `animate-float`, notification-style card
8. **Floating card bottom-left** — `animate-float [animation-delay:1.8s]`

### JSON-LD

Every module page includes two JSON-LD blocks:

```tsx
// SoftwareApplication
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Buzzin [Module Name]",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "...",
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
  "provider": { "@type": "Organization", "name": "Buzzin FZCO", "url": "https://buzzin.ae" }
}

// BreadcrumbList
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### Checklist for new module page

- [ ] Create dashboard mock component in `src/components/marketing/`
- [ ] Create page file at `src/app/(marketing)/[locale]/platform/[slug]/page.tsx`
- [ ] Add `export const dynamic = "force-static"` and metadata
- [ ] Add JSON-LD (SoftwareApplication + BreadcrumbList)
- [ ] Add entry to `defaultModules` in `content-defaults.ts`
- [ ] Add entry to `pageModules` in `platform/page.tsx`
- [ ] Add to `src/app/sitemap.ts`
- [ ] Add to `src/app/(marketing)/[locale]/sitemap/page.tsx`
- [ ] If live: add to `footer.tsx` `platformLinks` and navbar will auto-include

---

## 22. How to Update Content

### Hardcoded content locations

| Content | File |
|---|---|
| Module definitions (name, description, status, benefits) | `src/lib/content-defaults.ts` → `defaultModules` |
| Industry definitions | `src/lib/content-defaults.ts` → `defaultIndustries` |
| Client ticker names | `src/lib/content-defaults.ts` → `defaultTickerClients` |
| Homepage stats | `src/lib/content-defaults.ts` → `defaultStats` |
| Before/after comparison rows | `src/lib/content-defaults.ts` → `defaultBeforeAfterRows` |
| Exclusivity partnership | `src/lib/content-defaults.ts` → `defaultExclusivity` |
| Security certifications | `src/lib/content-defaults.ts` → `defaultSecurityCerts` |
| CTA banner defaults | `src/lib/content-defaults.ts` → `defaultCtaBanner` |
| Footer content | `src/lib/content-defaults.ts` → `defaultFooter` |
| Navbar links | `src/components/marketing/navbar.tsx` → `navLinks`, `industryItems` |
| Footer links | `src/components/marketing/footer.tsx` → `platformLinks`, `industryLinks`, `companyLinks` |
| Page-specific content | Individual page files (e.g., features, steps, quotes) |

### Updating specific items

**Phone number:** Appears in `content-defaults.ts` (`defaultCtaBanner.phone`, `defaultFooter.phone`) and `navbar.tsx` (hardcoded `tel:+97143201265`).

**Email addresses:** `defaultFooter.email` for general, hardcoded in API routes for notification destinations.

**Adding a new client:** Add to `defaultTickerClients` in `content-defaults.ts`. If sector-specific, add to relevant industry arrays and proof sections in individual page files.

**Updating stats:** Modify `defaultStats` in `content-defaults.ts`. Individual page files may also contain page-specific stats that need separate updating.

---

## 23. Brand Assets

| Asset | Location | Usage |
|---|---|---|
| Dark logo (footer) | `public/images/logo-dark.png` | Footer, dark backgrounds |
| Hero carousel images (7) | `public/images/hero/` | Homepage carousel |
| VMS dashboard | `public/images/platform/vms-dashboard.png` | VMS page |
| VMS kiosk lobby | `public/images/platform/vms-kiosk-lobby.jpg` | VMS page |
| Booking dashboard | `public/images/platform/booking-dashboard.png` | Booking page |
| Booking illustration | `public/images/platform/booking-illustration.png` | Booking page |
| Work permit dashboard | `public/images/platform/work-permit-dashboard.png` | Work Permit page |
| Work permit gate | `public/images/platform/work-permit-gate.jpg` | Work Permit page |
| Attendance illustration | `public/images/platform/attendance-illustration.png` | Attendance page |
| QMS illustration | `public/images/platform/qms-illustration.png` | QMS page |
| Safeguarding illustration | `public/images/platform/safeguarding-illustration.png` | Safeguarding page |
| Patrolling guard | `public/images/platform/patrolling-guard.jpg` | Patrolling page |
| Patrolling night | `public/images/platform/patrolling-night.jpg` | Patrolling page |
| Platform hexgrid | `public/images/homepage/platform-hexgrid.jpg` | Homepage |
| Hero entrance | `public/images/homepage/hero-entrance.jpg` | Homepage |
| CTA skyline | `public/images/homepage/cta-skyline.jpg` | Homepage |
| Residential community | `public/images/industries/residential-community.jpg` | Industries |
| Platform network | `public/images/company/platform-network.png` | About/company page |

Illustrations use the **Storyset Amico** flat vector style with primary amber (#F5A623) and secondary navy (#1E2547) colouring.

---

## 24. Contact & Business Information

| Field | Value |
|---|---|
| Company | Buzzin FZCO |
| Address | Dtec, Dubai Silicon Oasis, Dubai, UAE |
| General email | info@buzzin.ae |
| Careers email | talents@buzzin.ae |
| Phone | +971 4 320 1265 |
| WhatsApp | wa.me/97143201265 |
| Live preview | buzzin-mu.vercel.app/en |
| Production | buzzin.ae |

---

## 25. Changelog

| Date | Change |
|---|---|
| 25 May 2026 | Patrolling, Parking Management, and Safeguarding pages created |
| 25 May 2026 | Key Management System (coming soon) page created |
| 25 May 2026 | Platform overview links updated to point all module pages directly |
| 25 May 2026 | HTML sitemap updated with clickable links for all modules |
| 25 May 2026 | This handbook created |
