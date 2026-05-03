# Buzzin marketing website — handbook

Single reference for the Buzzin landing experience: brand, design system, engineering, copy, content layer, module positioning, and how we work in this repo. Paths are relative to the repository root unless stated otherwise.

---

## Table of contents

1. [Brand guidelines](#1-brand-guidelines)
2. [Design system](#2-design-system)
3. [Technical specification](#3-technical-specification)
4. [Copywriting standards](#4-copywriting-standards)
5. [API, content, and data models](#5-api-content-and-data-models)
6. [Module status](#6-module-status)
7. [Coding style and conventions](#7-coding-style-and-conventions)
8. [Deployment, repository, and related assets](#8-deployment-repository-and-related-assets)

---

## 1. Brand guidelines

### 1.1 Product positioning

- **Buzzin** is positioned as the **premises intelligence platform** for enterprise **UAE and GCC**: visitor management, permits, queues, events, attendance, booking, safeguarding, and related operations on **one integrated platform** (marketing copy references **9 integrated modules** in site metadata; the interactive platform section currently surfaces **seven** named modules—see [Module status](#6-module-status)).

### 1.2 Logo

| Usage | Asset (public path) | Notes |
|--------|---------------------|--------|
| Navbar / theme-aware | `/images/logo-light.png`, `/images/logo-dark.png` | `BrandLogo` defaults; SSR uses dark variant until theme resolves. |
| Favicon | `/icon.svg` (also `src/app/icon.svg`) | Transparent SVG; metadata in `src/app/layout.tsx` points `icon`, `shortcut`, and `apple` to `/icon.svg`. |
| CMS (optional) | Sanity `siteSettings` | `logoLight` / `logoDark` image URLs via GROQ when wired. |

Keep logo clear at small sizes; avoid placing light logos on light backgrounds without a container.

### 1.3 Color palette

**Strategic colors**

- **Navy (primary UI / text on light):** `#1E2547` — aligns with Tailwind `navy-800` and CSS `--text-primary` (light mode).
- **Deep surfaces:** `#161B35` (`navy-900`), `#0D1023` (`navy-950`) — footer, dark hero canvas, dark mode page.
- **Brand amber / gold:** `#F5A623` (Tailwind `amber-500`) — CTAs, borders, focus rings, honeycomb accents.
- **Amber accents (light mode brand text):** `#E0941D` — `--text-brand` (light); dark mode brand text uses `#F7C04D` (`amber-400`).
- **Sky / canvas (light):** `#EBF5FB` — hero and canvas backgrounds (`sky-100`).

**Semantic CSS variables** (see `src/app/globals.css`)

- Backgrounds: `--bg-page`, `--bg-canvas`, `--bg-surface`, `--bg-hero`, `--bg-trust`, `--bg-proof`, `--bg-footer`, overlays.
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-muted`, `--text-inverse`, `--text-brand`.
- Borders: `--border-default`, `--border-subtle`, `--border-strong`, `--border-brand`.
- Shadows: `--shadow-brand`, `--shadow-focus` (amber focus ring).

Light and dark themes are switched with **`data-theme="light"`** / **`data-theme="dark"`** on the document (Tailwind `darkMode: ["selector", '[data-theme="dark"]']`).

### 1.4 Typography

| Role | Font | Variable | Typical Tailwind |
|------|------|----------|------------------|
| Display / editorial accent | DM Serif Display | `--font-dm-serif` | `font-display` |
| Headings (Latin) | Syne | `--font-syne` | `font-heading` |
| Body (Latin) | Plus Jakarta Sans | `--font-jakarta` | `font-body` (default on `<body>`) |
| Headings (Arabic) | Cairo | `--font-cairo` | `font-heading-ar` |
| Body (Arabic) | Tajawal | `--font-tajawal` | `font-body-ar` |

**RTL:** Marketing locale layout sets `dir="rtl"` and `font-body-ar` for Arabic (`src/app/(marketing)/[locale]/layout.tsx`). `globals.css` sets Tajawal on `[dir="rtl"] body`.

**Scale** (from `tailwind.config.ts`): `display-2xl` through `display-md`, `heading-xl`–`heading-sm`, `body-lg`–`body-xs`, `overline` (small caps style with letter-spacing).

### 1.5 Tone in one line

Confident, specific, GCC-aware: numbers, named clients, compliance (KHDA, UAE Pass), and “before vs after” contrast—not generic SaaS fluff.

---

## 2. Design system

### 2.1 Tokens

- **Colors:** Tailwind extended palette `amber`, `navy`, `sky` plus semantic CSS variables in `globals.css`.
- **Motion:** CSS variables `--ease-smooth`, `--ease-expo-out`, `--ease-spring`, durations `--duration-fast` through `--duration-slower`, stagger tokens. **`prefers-reduced-motion: reduce`** collapses animations/transitions globally.
- **Framer Motion presets:** `src/lib/motion.ts` — `BRAND_EASE` `[0.25, 0.1, 0.25, 1]`, `VIEWPORT` `{ once: false, amount: 0.2 }`, helpers `fadeUp`, `fadeUpScale`, `scaleIn`, `slideX`, `stagger`, `hexReveal`.
- **Hex grid:** Single circumradius token `--hex-s` per grid class (`.hex-grid` for client hive, `.hex-grid-platform` for platform modules). Geometry uses flat-top hex math; clip path `polygon(25% 0%, 75% 0%, …)`.

### 2.2 Components (high level)

| Area | Location | Purpose |
|------|----------|---------|
| Marketing sections | `src/components/marketing/*` | Navbar, footer, stats, platform overview, industries, exclusivity, security bar, how-it-works, CTA, WhatsApp FAB |
| Sandbox / hero & hive | `src/components/sandbox/*` | `HeroVariantD`, `ClientsVariantD`, other variants |
| UI primitives | `src/components/ui/*` | `BrandLogo`, `Section` / headers, `AnimateOnScroll`, buttons, etc. |
| Providers | `src/components/providers/*` | Theme (`next-themes`, `attribute="data-theme"`) |

### 2.3 Spacing and layout

- Tailwind extended spacing: `18`, `22`, `26`, `30`, `34`, `38` (rem-based).
- **Max width:** `max-w-site` (80rem), `max-w-prose` (42rem).
- **Radius:** `rounded-2xl`–`4xl` tokens extended in Tailwind.
- **Shadows:** Navy-tinted elevations plus `shadow-brand`, `shadow-brand-lg`, `shadow-focus`.

### 2.4 Patterns

- **Scroll reveal:** `AnimateOnScroll` / `StaggerOnScroll` with shared motion presets; section titles use motion in `SectionHeader`.
- **Platform modules:** Hover crossfades short line vs `hoverLine`; click opens in-grid expanded hex overlay with `longDesc` and benefits (see `platform-overview.tsx`).
- **Security vs getting started:** Security is a darker **proof band** (`--bg-proof`); getting started is a lighter **journey / timeline** (`how-it-works.tsx`).

---

## 3. Technical specification

### 3.1 Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js** (App Router), React 19 |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS v4** with `@import "tailwindcss"` and `@config` in `globals.css` |
| Animation | **Framer Motion**; **GSAP** in dependencies (use where appropriate) |
| i18n | **next-intl**; locales `en`, `ar` (`src/i18n/config.ts`) |
| Theming | **next-themes** with `data-theme` |
| CMS | **Sanity** (`sanity`, `next-sanity`, `@sanity/client`, Studio at `src/app/studio`) |
| Forms / validation | **react-hook-form**, **zod**, **@hookform/resolvers** |
| Carousel / marquee | **embla-carousel-react**, **react-fast-marquee** |
| Icons | **lucide-react**, **@sanity/icons** |
| Optional lead storage | **mongodb** driver + `src/lib/leads/*` (provider pattern; HubSpot stub) |

### 3.2 Key dependencies (from `package.json`)

Production highlights: `next`, `react`, `react-dom`, `framer-motion`, `next-intl`, `next-themes`, `clsx`, `tailwind-merge`, `sanity`, `next-sanity`, `@sanity/client`, `embla-carousel-react`, `react-fast-marquee`, `lucide-react`, `@radix-ui/react-slot`, `mongodb`, `zod`, `react-hook-form`.

Dev: `tailwindcss`, `@tailwindcss/postcss`, `typescript`, `eslint`, `eslint-config-next`.

### 3.3 Folder structure (conceptual)

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout, fonts, metadata, ThemeProvider
│   ├── globals.css           # Design tokens, hex grid, base styles
│   ├── icon.svg              # Favicon source
│   ├── page.tsx              # Root page (may redirect)
│   ├── studio/               # Sanity Studio route
│   └── (marketing)/[locale]/ # Localized marketing routes
│       ├── layout.tsx
│       ├── page.tsx          # Main landing composition
│       └── *-sandbox/        # Component sandboxes
├── components/
│   ├── marketing/            # Production marketing sections
│   ├── sandbox/              # Hero / client grid variants
│   ├── providers/
│   └── ui/
├── i18n/                     # Locale config
├── lib/                      # cn, fonts, motion, content-defaults, leads
└── sanity/                   # Sanity client, queries, schema, structure
public/
├── images/                   # hero, clients, logos (served statically)
```

### 3.4 Main landing page section order

Current `src/app/(marketing)/[locale]/page.tsx` order:

1. `Navbar`  
2. `HeroVariantD`  
3. `StatsBar`  
4. `PlatformOverview`  
5. `IndustryTransformationSection`  
6. `ClientsVariantD` (Buzzin Hive — before exclusivity)  
7. `Exclusivity`  
8. `SecurityBar`  
9. `HowItWorks`  
10. `CtaBanner`  
11. `Footer`, `WhatsAppFab`

### 3.5 Environment and CMS

- Sanity configuration: `src/sanity/env.ts` (project id, dataset, API version—do not commit secrets; use `.env.local`).
- Scripts: `npm run seed:sanity` for `scripts/seed-sanity.mjs`.

---

## 4. Copywriting standards

### 4.1 Voice

- **Authoritative and concrete:** Prefer measurable claims (“5-second check-in”, “under 30 seconds”, “8-second entry”) where accurate.
- **Regional credibility:** UAE Pass, Emirates ID, KHDA, GCC, named venues and developers.
- **Problem → outcome:** Before/after rows in `defaultBeforeAfterRows` exemplify the pattern.
- **Partnership, not vendor fluff:** Exclusivity and “Grow Together” step stress long-term alignment.

### 4.2 Key messages (from defaults and metadata)

- **Hero overline:** Trusted scale (“300+ organisations across 5 countries”).
- **Hero headline:** Premises intelligence platform for enterprise UAE & GCC.
- **Proof points:** `defaultStats` — 20M+ interactions, 300+ orgs, 4 countries, 9 integrated modules (align marketing with actual module list when copy changes).
- **Exclusivity:** Aldar + Asteco multi-year framing; growth multiplier copy in `defaultExclusivity`.
- **Security strip:** Certifications list in `defaultSecurityCerts` (ISO 27001, SOC, GDPR aligned, UAE Pass, on-prem).
- **CTA:** Demo-first (`/book-demo`), WhatsApp prefill in `defaultCtaBanner`, four-hour response promise.
- **Footer:** GCC positioning, contact block in `defaultFooter`.

### 4.3 Formatting

- Use **non-breaking spaces** (`\u00a0`) in TypeScript strings where typography needs to avoid bad breaks (already used in content file).
- Use **curly quotes** (`\u2014` em dash, `\u2019`) for polished editorial tone in stored copy.

### 4.4 Default content source

- **`src/lib/content-defaults.ts`** is the single source for marketing defaults (hero, ticker, stats, modules, industries, before/after, exclusivity, security certs, how-it-works, CTA, footer).
- Sanity documents can drive production content when pages are wired to GROQ; until then, components often import these defaults directly.

---

## 5. API, content, and data models

### 5.1 REST / Route Handlers

There are **no** `src/app/api/**/route.ts` handlers in this repository at present. Demo and lead flows may be extended later.

### 5.2 Lead submission model (code-level)

`src/lib/leads/types.ts` — `LeadSubmission`:

- Optional: `name`, `email`, `phone`, `company`, `industry`, `premisesDescription`
- Required context: `locale` (`"en" | "ar"`), `channel` (`"form" | "whatsapp" | "phone"`)
- Optional attribution: `sourcePage`, `utmSource`, `utmMedium`, `utmCampaign`
- Optional: `createdAt`

`getLeadProvider()` (`src/lib/leads/provider.ts`) selects implementation via **`LEAD_STORAGE_PROVIDER`** (`mongodb` default, `hubspot` stub).

### 5.3 Sanity as content API

Content is fetched with **GROQ** via `next-sanity` / `@sanity/client`. Example queries live in `src/sanity/lib/queries.ts`:

| Query constant | Purpose |
|----------------|---------|
| `SITE_SETTINGS_QUERY` | Site name, phone, WhatsApp, email, address, tagline, logos, social, default SEO |
| `HOMEPAGE_QUERY` | Homepage title, hero strings, carousel images, trust client refs, primary CTA block, SEO |
| `CLIENTS_TICKER_QUERY` | Clients flagged for homepage ticker |
| `CLIENTS_TRUST_QUERY` | Clients flagged for trust bar |

### 5.4 Sanity document types (schema index)

Defined in `src/sanity/schemaTypes/index.ts`:

- **Documents:** `locale`, `siteSettings`, `homepage`, `modulePage`, `industryPage`, `blogPost`, `seoLandingPage`, `simpleTextPage`, `bookDemoPage`, `faq`, `ctaBlock`, `client`
- **Objects / fields:** localized string/text/alt/rich text, `imageWithAlt`, `seoMetadata`, `simpleBlockContent`

**Client document** (`client.ts`) fields include: `clientName`, `logoColor`, `logoGreyscale`, `logoWhite`, `sector` (Hospitality, Real Estate, Education, Financial, Government), `country` (UAE, KSA, Lebanon), booleans `showOnHomepageTicker`, `showOnTrustBar`.

**Homepage document** (`homepage.ts`) includes localized hero fields, `heroCarouselImages`, references to `ctaBlock` and `client[]`, rich text, SEO.

### 5.5 Platform module content model (frontend)

`PlatformModule` in `content-defaults.ts`:

- `name`, `shortName`, `slug`, `desc`, `shortDesc`, `hoverLine`, `longDesc`, `benefits[]`
- `status`: `"live" | "new" | "comingSoon"`
- `badge`: `"star" | "greenDot" | null`

---

## 6. Module status

Interactive **platform** section modules (order in `defaultModules`):

| Module | Short | Status | Badge | Notes |
|--------|-------|--------|-------|--------|
| Visitor Management | VMS | live | star | Flagship / highlighted |
| Work Permit | Work Permit | live | — | |
| Queue Management | QMS | new | green dot | “Newly released” style |
| Event Management | Events | live | — | |
| Attendance | Attendance | live | — | |
| Booking | Booking | new | green dot | |
| Safeguarding | Safeguarding | coming soon | — | Long-form copy still valuable for pipeline |

**Marketing / industry copy** may reference additional capabilities (e.g. **Patrolling**, **NFC Access**, **Turnstile Integration**, **UAE Pass**) in `defaultIndustries`—treat those as **industry-specific messaging**, not necessarily as separate tiles on the current homepage grid.

**Reconcile counts:** Site metadata mentions “9 integrated modules”; the typed `defaultModules` array has **seven** entries. Update either the stat line or the module list when the product story changes.

---

## 7. Coding style and conventions

### 7.1 TypeScript and React

- **Strict mode** enabled in `tsconfig.json`.
- Prefer **explicit types** for exported APIs and shared content (`PlatformModule`, etc.).
- Use **`"use client"`** only when the file needs hooks, browser APIs, or client-only libraries (Framer Motion in interactive sections, theme, forms).

### 7.2 Imports and paths

- Use the **`@/*`** alias mapped to `./src/*` (e.g. `@/lib/cn`, `@/components/marketing/navbar`).

### 7.3 Styling

- Prefer **Tailwind** utilities; use **`cn()`** from `src/lib/cn.ts` (`clsx` + `tailwind-merge`) whenever classes are conditional or merged.
- Prefer **semantic CSS variables** (`var(--text-primary)`) for theme-aware colors in custom CSS.

### 7.4 Motion and accessibility

- Use **`BRAND_EASE`** and **`VIEWPORT`** from `src/lib/motion.ts` for consistency.
- **Hex / logo cells:** Avoid putting `transform`-based motion on a parent that also positions children with `translate(-50%,-50%)`—apply scroll/hidden variants on the **tile** that owns positioning (pattern used in client hive and platform grid).
- Respect **reduced motion** via global CSS (do not fight it with inline `!important`).

### 7.5 Images

- Use **`next/image`** with explicit `width` / `height` (or fill + container) where applicable.
- **Logos in hive:** `loading="eager"` where flicker or lazy-load caused issues.
- **Brand logo:** `priority` and `suppressHydrationWarning`; SSR path defaults to dark logo until mounted.

### 7.6 Content edits

- Marketing copy and module blurbs: start in **`src/lib/content-defaults.ts`** unless the page is fully CMS-driven.
- After changing defaults, sanity-check **RTL** for string length and line breaks on Arabic locale.

### 7.7 Git and versioning

- Repository: `https://github.com/omarhegazy77344/Buzzin.git` (see `package.json`).
- Version tags (e.g. **v1.0**) are used for release milestones; prefer clear commit messages that state user-visible changes.

---

## 8. Deployment, repository, and related assets

### 8.1 Hosting

- The site is designed for **Vercel** (Next.js). Connecting the GitHub repo enables **automatic deployments** on push to the tracked branch (typically `main`).

### 8.2 Public assets

- **`public/images/hero/`** — Hero carousel PNGs (see `defaultHeroCarouselImages`).
- **`public/images/clients/`** — Client logos for the hive and related UI; filenames include a mix of kebab-case and legacy spacing (e.g. `Al futaim.png`)—**prefer kebab-case for new files** and update imports when renaming.
- **`public/images/logo-light.png`**, **`logo-dark.png`** — Navbar/footer brand marks.

### 8.3 Sandboxes

- `hero-sandbox`, `client-sandbox`, `landing-reference` under `(marketing)/[locale]/` are for **internal comparison** and experiments; production home is **`page.tsx`** in the same folder.

### 8.4 Related documentation

- This file is the **canonical** overview for the marketing site in this repo. Splitting into separate `01-*.md` … `06-*.md` files is optional; the sections above mirror that structure inside one document.

---

*Last updated to reflect the repository layout and conventions as of the handbook authoring. When behavior or copy diverges from this file, treat the code and committed content as source of truth and update this handbook in the same change.*
