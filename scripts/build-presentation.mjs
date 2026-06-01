// Buzzin Website — Executive Review Presentation Generator
// Generates: Buzzin-Website-Presentation.pptx in the project root.
// Usage: node scripts/build-presentation.mjs

import PptxGenJS from "pptxgenjs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const OUTPUT_PATH = path.resolve(__dirname, "..", "Buzzin-Website-Presentation.pptx")

// ─── Brand palette ──────────────────────────────────────────────────
const NAVY = "1E2547"
const DEEP_NAVY = "161B35"
const NIGHT = "0D1023"
const AMBER = "F5A623"
const AMBER_SOFT = "F7C04D"
const AMBER_GLOW = "FFD37A"
const OFFWHITE = "FAFAFA"
const WHITE = "FFFFFF"
const GREY = "A1A1AA"
const MUTED = "71717A"
const HAIRLINE = "2A3258"

// ─── Fonts ─────────────────────────────────────────────────────────
const HEAD_FONT = "Georgia"
const SANS_FONT = "Segoe UI"
const MONO_FONT = "Consolas"

// ─── PPTX setup ────────────────────────────────────────────────────
const pptx = new PptxGenJS()
pptx.layout = "LAYOUT_WIDE" // 13.333 x 7.5 inches
pptx.title = "Buzzin Website — Executive Review"
pptx.author = "Omar Hegazy"
pptx.company = "Buzzin FZCO"
pptx.subject = "Repositioning a Category Leader"

const W = 13.333
const H = 7.5

// ─── Reusable helpers ──────────────────────────────────────────────

function addBackground(slide, color = NAVY) {
  slide.background = { color }
}

function addHexDecor(slide) {
  // Decorative hex-like dots (subtle pattern in the corner)
  const baseX = 11.3
  const baseY = 0.5
  const colorOpts = { fill: { color: AMBER, transparency: 88 }, line: { color: AMBER, transparency: 88 } }
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      slide.addShape("hexagon", {
        x: baseX + col * 0.45,
        y: baseY + row * 0.4,
        w: 0.35,
        h: 0.4,
        ...colorOpts,
      })
    }
  }
}

function addAmberRule(slide, x = 0.6, y = 1.05, w = 0.6) {
  slide.addShape("rect", {
    x, y, w, h: 0.04,
    fill: { color: AMBER },
    line: { color: AMBER },
  })
}

function addEyebrow(slide, text, y = 0.85, x = 0.6) {
  slide.addText(text.toUpperCase(), {
    x, y, w: 12, h: 0.3,
    fontFace: SANS_FONT,
    fontSize: 11,
    bold: true,
    color: AMBER,
    charSpacing: 4,
  })
}

function addFooter(slide, page) {
  // Hairline at the bottom
  slide.addShape("rect", {
    x: 0.6, y: 7.05, w: W - 1.2, h: 0.01,
    fill: { color: HAIRLINE },
    line: { color: HAIRLINE },
  })
  slide.addText("Buzzin Website  ·  Designed and shipped by Omar Hegazy — Solutions Engineer", {
    x: 0.6, y: 7.12, w: 9, h: 0.3,
    fontFace: SANS_FONT, fontSize: 9, color: GREY,
  })
  slide.addText(`${page} / 16`, {
    x: W - 1.6, y: 7.12, w: 1, h: 0.3,
    fontFace: SANS_FONT, fontSize: 9, color: GREY, align: "right",
  })
}

function addHeadline(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? 0.6,
    y: opts.y ?? 1.25,
    w: opts.w ?? W - 1.2,
    h: opts.h ?? 1.4,
    fontFace: HEAD_FONT,
    fontSize: opts.size ?? 40,
    bold: false,
    color: opts.color ?? OFFWHITE,
    italic: opts.italic ?? false,
  })
}

function addSubhead(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? 0.6,
    y: opts.y ?? 2.4,
    w: opts.w ?? W - 1.2,
    h: opts.h ?? 0.7,
    fontFace: SANS_FONT,
    fontSize: opts.size ?? 16,
    color: opts.color ?? GREY,
  })
}

function addBullets(slide, bullets, opts = {}) {
  const items = bullets.map((b) => ({
    text: b,
    options: {
      bullet: { code: "25A0" }, // square bullet
      paraSpaceAfter: opts.spaceAfter ?? 10,
    },
  }))
  slide.addText(items, {
    x: opts.x ?? 0.7,
    y: opts.y ?? 3.4,
    w: opts.w ?? W - 1.4,
    h: opts.h ?? 3.4,
    fontFace: SANS_FONT,
    fontSize: opts.size ?? 14,
    color: opts.color ?? OFFWHITE,
    lineSpacing: 22,
    valign: "top",
  })
}

function addStatCard(slide, x, y, w, h, value, label, accent = AMBER) {
  slide.addShape("roundRect", {
    x, y, w, h,
    fill: { color: DEEP_NAVY },
    line: { color: HAIRLINE, width: 0.75 },
    rectRadius: 0.12,
  })
  slide.addText(value, {
    x: x + 0.15, y: y + 0.15, w: w - 0.3, h: h * 0.5,
    fontFace: HEAD_FONT, fontSize: 34, color: accent, bold: false,
  })
  slide.addText(label, {
    x: x + 0.15, y: y + h * 0.55, w: w - 0.3, h: h * 0.4,
    fontFace: SANS_FONT, fontSize: 11, color: GREY,
  })
}

function addPillarCard(slide, x, y, w, h, num, title, body) {
  slide.addShape("roundRect", {
    x, y, w, h,
    fill: { color: DEEP_NAVY },
    line: { color: HAIRLINE, width: 0.75 },
    rectRadius: 0.12,
  })
  slide.addText(num, {
    x: x + 0.25, y: y + 0.2, w: 0.9, h: 0.5,
    fontFace: HEAD_FONT, fontSize: 26, color: AMBER,
  })
  slide.addText(title, {
    x: x + 0.25, y: y + 0.75, w: w - 0.5, h: 0.5,
    fontFace: SANS_FONT, fontSize: 14, color: OFFWHITE, bold: true,
  })
  slide.addText(body, {
    x: x + 0.25, y: y + 1.3, w: w - 0.5, h: h - 1.5,
    fontFace: SANS_FONT, fontSize: 11.5, color: GREY, lineSpacing: 18,
    valign: "top",
  })
}

function addStandardSlide(eyebrow, page) {
  const slide = pptx.addSlide()
  addBackground(slide, NAVY)
  addHexDecor(slide)
  addEyebrow(slide, eyebrow)
  addAmberRule(slide)
  addFooter(slide, page)
  return slide
}

// ─── SLIDE 1 — Title ───────────────────────────────────────────────
{
  const slide = pptx.addSlide()
  addBackground(slide, DEEP_NAVY)

  // Big amber radial-ish accent (circle behind title)
  slide.addShape("ellipse", {
    x: -3, y: 2, w: 8, h: 8,
    fill: { color: AMBER, transparency: 92 },
    line: { color: AMBER, transparency: 100 },
  })

  // Hex decor on top-right
  addHexDecor(slide)

  // Amber rule
  slide.addShape("rect", {
    x: 0.8, y: 2.4, w: 1.0, h: 0.05,
    fill: { color: AMBER }, line: { color: AMBER },
  })

  slide.addText("BUZZIN  ·  EXECUTIVE REVIEW", {
    x: 0.8, y: 2.0, w: 12, h: 0.35,
    fontFace: SANS_FONT, fontSize: 12, color: AMBER, bold: true, charSpacing: 6,
  })

  slide.addText("Buzzin Website", {
    x: 0.8, y: 2.8, w: 12, h: 1.4,
    fontFace: HEAD_FONT, fontSize: 64, color: OFFWHITE,
  })

  slide.addText("Repositioning a category leader.", {
    x: 0.8, y: 4.2, w: 12, h: 0.8,
    fontFace: HEAD_FONT, fontSize: 28, color: AMBER_SOFT, italic: true,
  })

  slide.addText("From a single-product VMS vendor to the operating system for premises intelligence — ten integrated modules, one dashboard, one audit trail.", {
    x: 0.8, y: 5.2, w: 11, h: 1.0,
    fontFace: SANS_FONT, fontSize: 15, color: GREY, lineSpacing: 22,
  })

  // Bottom credit block
  slide.addShape("rect", {
    x: 0.8, y: 6.6, w: 0.1, h: 0.45,
    fill: { color: AMBER }, line: { color: AMBER },
  })
  slide.addText("Designed, engineered, and shipped by", {
    x: 1.0, y: 6.55, w: 8, h: 0.3,
    fontFace: SANS_FONT, fontSize: 10, color: GREY,
  })
  slide.addText("Omar Hegazy  —  Solutions Engineer  ·  May 2026", {
    x: 1.0, y: 6.82, w: 8, h: 0.3,
    fontFace: SANS_FONT, fontSize: 13, color: OFFWHITE, bold: true,
  })

  slide.addText("buzzin-mu.vercel.app/en   ·   buzzin.ae", {
    x: W - 5.2, y: 6.82, w: 4.6, h: 0.3,
    fontFace: MONO_FONT, fontSize: 11, color: AMBER, align: "right",
  })
}

// ─── SLIDE 2 — Executive Summary ───────────────────────────────────
{
  const slide = addStandardSlide("Executive Summary", 2)
  addHeadline(slide, "A sales asset, not a brochure.")
  addSubhead(slide, "Four things this website does for Buzzin every day, with zero ongoing agency cost.")

  const cards = [
    { num: "01", title: "Full marketing site, owned in-house", body: "Built from scratch on a modern stack. No agency dependency. Every page changeable in hours, not months." },
    { num: "02", title: "Repositions the company", body: "Ten integrated modules, one platform, one audit trail. The story is now category leader, not vendor." },
    { num: "03", title: "Engineered for serious buyers", body: "Direct copy, hard numbers, named clients. Aimed at VP Operations, Heads of Community, School Principals." },
    { num: "04", title: "Live, indexed, mobile-first", body: "GCC-ready (English + Arabic), WhatsApp + email + phone lead capture built in." },
  ]
  cards.forEach((c, i) => {
    addPillarCard(slide, 0.6 + i * 3.1, 3.5, 2.9, 3.2, c.num, c.title, c.body)
  })
}

// ─── SLIDE 3 — The Strategy ────────────────────────────────────────
{
  const slide = addStandardSlide("Strategy", 3)
  addHeadline(slide, "Why we rebuilt the website.")
  addSubhead(slide, "Three strategic shifts the new site is built to deliver.")

  const cards = [
    { num: "01", title: "Reposition the company", body: "From \u201CBuzzin = visitor management\u201D to \u201CBuzzin = the premises intelligence platform.\u201D Ten modules. One dashboard. One audit trail." },
    { num: "02", title: "Speak to the senior buyer", body: "Direct, outcome-led copy aimed at VP Operations, Heads of Community at Aldar / Asteco, and Principals at Taaleem / Brighton College — not feature browsers." },
    { num: "03", title: "Convert credibility into demos", body: "Every page funnels to /book-demo. Every claim has a number, a client name, or a compliance reference next to it." },
  ]
  cards.forEach((c, i) => {
    addPillarCard(slide, 0.6 + i * 4.15, 3.5, 3.95, 3.2, c.num, c.title, c.body)
  })
}

// ─── SLIDE 4 — What I Built (Scope) ────────────────────────────────
{
  const slide = addStandardSlide("Scope", 4)
  addHeadline(slide, "One person.  The whole site.")
  addSubhead(slide, "Twenty-three pages and a full delivery system, shipped end to end.")

  // Left column — Pages
  slide.addText("PAGES SHIPPED", {
    x: 0.7, y: 3.3, w: 5.5, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "Homepage, Platform overview, Why Buzzin, About, Security & Compliance",
    "10 module pages — VMS, Work Permit, Events, Attendance, QMS, Booking, Safeguarding, KMS, Patrolling, Parking",
    "3 industry pages — Hospitality, Real Estate, Education",
    "Book Demo, Contact, FAQ, Careers, Privacy, Terms, HTML Sitemap, 404",
  ], { x: 0.7, y: 3.65, w: 5.7, h: 3.2, size: 12 })

  // Right column — Systems
  slide.addText("SYSTEMS SHIPPED", {
    x: 6.8, y: 3.3, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "Design system, animation system, brand-aligned component library",
    "SEO + JSON-LD structured data, XML sitemap, robots.txt, breadcrumbs",
    "Contact API, Careers API with CV upload, MongoDB lead storage",
    "Resend email pipeline, WhatsApp deep-linking, theme + locale routing",
    "Sanity CMS schemas (12 document types), Vercel deployment",
  ], { x: 6.8, y: 3.65, w: 6.0, h: 3.2, size: 12 })
}

// ─── SLIDE 5 — Technology Stack ────────────────────────────────────
{
  const slide = addStandardSlide("Technology", 5)
  addHeadline(slide, "Modern, fast, and built to last.")
  addSubhead(slide, "The same stack the world's most-trafficked product sites are built on.")

  const rows = [
    ["Framework & Runtime",  "Next.js 16 (App Router), React 19, TypeScript strict, Vercel edge CDN"],
    ["UI & Motion",          "Tailwind CSS 4, Framer Motion, GSAP for stat counters"],
    ["Content & Localisation","Sanity.io schemas, next-intl, English + Arabic routing"],
    ["Forms & Leads",         "react-hook-form, zod validation, MongoDB, Resend email"],
    ["Performance",           "Static generation, next/font, next/image, edge delivery"],
    ["Quality",               "TypeScript strict mode, ESLint, accessibility-first markup"],
  ]
  rows.forEach((r, i) => {
    const y = 3.35 + i * 0.55
    slide.addShape("rect", {
      x: 0.6, y, w: W - 1.2, h: 0.5,
      fill: { color: DEEP_NAVY }, line: { color: HAIRLINE, width: 0.5 },
    })
    slide.addText(r[0], {
      x: 0.85, y: y + 0.05, w: 3.5, h: 0.4,
      fontFace: SANS_FONT, fontSize: 12, color: AMBER, bold: true,
    })
    slide.addText(r[1], {
      x: 4.4, y: y + 0.05, w: W - 5.0, h: 0.4,
      fontFace: SANS_FONT, fontSize: 12, color: OFFWHITE,
    })
  })
}

// ─── SLIDE 6 — Brand & Design System ───────────────────────────────
{
  const slide = addStandardSlide("Design", 6)
  addHeadline(slide, "\u201CConfidence does not shout.\u201D")
  addSubhead(slide, "The visual identity is cinematic, not corporate.  Amber on navy.  Generous space.")

  // Colour swatches
  const swatches = [
    { color: NAVY, label: "Primary  ·  #1E2547" },
    { color: DEEP_NAVY, label: "Deep Navy  ·  #161B35" },
    { color: AMBER, label: "Brand Amber  ·  #F5A623" },
    { color: AMBER_SOFT, label: "Amber Soft  ·  #F7C04D" },
    { color: OFFWHITE, label: "Off-white  ·  #FAFAFA" },
  ]
  swatches.forEach((s, i) => {
    const x = 0.6 + i * 2.5
    slide.addShape("roundRect", {
      x, y: 3.4, w: 2.3, h: 1.4,
      fill: { color: s.color }, line: { color: HAIRLINE, width: 0.5 },
      rectRadius: 0.1,
    })
    slide.addText(s.label, {
      x, y: 4.9, w: 2.3, h: 0.3,
      fontFace: SANS_FONT, fontSize: 10, color: GREY, align: "center",
    })
  })

  // Type list
  slide.addText("TYPOGRAPHY", {
    x: 0.6, y: 5.55, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "DM Serif Display  —  hero headlines",
    "Syne  —  section tags, UI, badges",
    "Plus Jakarta Sans  —  body text",
    "Cairo + Tajawal  —  Arabic headings and body",
  ], { x: 0.7, y: 5.85, w: 6, h: 1.2, size: 12 })

  // Design principles
  slide.addText("PRINCIPLES", {
    x: 7.0, y: 5.55, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "White space is deliberate, not empty",
    "Dark makes amber meaningful",
    "Every section purpose-built, never a template",
    "Details are the product",
  ], { x: 7.1, y: 5.85, w: 6, h: 1.2, size: 12 })
}

// ─── SLIDE 7 — Animation & Interaction ─────────────────────────────
{
  const slide = addStandardSlide("Motion", 7)
  addHeadline(slide, "Motion that communicates character.")
  addSubhead(slide, "Animation as identity — never decoration.")

  addBullets(slide, [
    "Scroll-triggered reveals on every section, with a custom brand-eased curve",
    "Staggered grids so feature and step cards arrive in rhythm, not all at once",
    "Floating notification cards on hero dashboards, bobbing on a 3.5-second loop",
    "GSAP-driven stat counters that animate from zero — \u201C20M+ interactions\u201D counts up live",
    "Bidirectional re-trigger so animations replay as the visitor scrolls back up",
    "Full prefers-reduced-motion support — accessible to every visitor",
  ], { x: 0.7, y: 3.4, w: W - 1.4, h: 3.5, size: 14 })
}

// ─── SLIDE 8 — SEO Strategy ────────────────────────────────────────
{
  const slide = addStandardSlide("SEO", 8)
  addHeadline(slide, "Built to be found.")
  addSubhead(slide, "Owned distribution that compounds over time — no advertising spend required to start.")

  // Two columns
  slide.addText("ON-PAGE & STRUCTURED DATA", {
    x: 0.6, y: 3.35, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "Unique title, description, and Open Graph for every page",
    "SoftwareApplication JSON-LD on every module page",
    "Organization schema on the homepage",
    "BreadcrumbList site-wide  +  FAQPage on the FAQ",
  ], { x: 0.7, y: 3.65, w: 6, h: 2.5, size: 12.5 })

  slide.addText("TECHNICAL FOUNDATIONS", {
    x: 7.0, y: 3.35, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "XML sitemap (English + Arabic) and robots.txt",
    "Static generation = instant time-to-first-byte",
    "Internal linking from every page to its related modules",
    "Semantic HTML, alt text, accessibility-first markup",
  ], { x: 7.1, y: 3.65, w: 6, h: 2.5, size: 12.5 })

  // Keywords strip
  slide.addText("PRIMARY KEYWORDS", {
    x: 0.6, y: 6.05, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  slide.addText("visitor management system UAE  ·  digital work permit system UAE  ·  KHDA safeguarding system  ·  NFC attendance management UAE  ·  amenity booking management UAE  ·  ANPR parking management UAE", {
    x: 0.6, y: 6.35, w: W - 1.2, h: 0.6,
    fontFace: SANS_FONT, fontSize: 11, color: OFFWHITE, italic: true,
  })
}

// ─── SLIDE 9 — Content Strategy & Copy ─────────────────────────────
{
  const slide = addStandardSlide("Copy", 9)
  addHeadline(slide, "Every word earns its place.")
  addSubhead(slide, "Calibrated for the decision-maker who signs contracts, not the user running a free trial.")

  // Left — Rules
  slide.addText("WRITING PRINCIPLES", {
    x: 0.6, y: 3.35, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "Direct, declarative copy  —  no hype, no superlatives",
    "Numbers are always specific  —  81,085 permits, not \u201Cthousands\u201D",
    "Outcome first, mechanism second",
    "Proof sits next to claims  —  client names beside every value prop",
  ], { x: 0.7, y: 3.65, w: 6, h: 2.5, size: 12.5 })

  // Right — Stats
  addStatCard(slide, 7.2, 3.4, 2.85, 1.3, "20M+", "Interactions processed across the GCC")
  addStatCard(slide, 10.2, 3.4, 2.85, 1.3, "300+", "Organisations running Buzzin daily")
  addStatCard(slide, 7.2, 4.85, 2.85, 1.3, "5 sec", "Average visitor check-in")
  addStatCard(slide, 10.2, 4.85, 2.85, 1.3, "71\u00D7", "Growth in access events 2024 \u2192 2025")

  // Trust strip
  slide.addText("TRUSTED BY", {
    x: 0.6, y: 6.15, w: 4, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  slide.addText("Atlantis  ·  Aldar  ·  Asteco  ·  Fairmont  ·  Kempinski  ·  Grand Hyatt  ·  Taaleem  ·  Brighton College  ·  GEMS  ·  DAMAC  ·  Al-Futtaim  ·  Masdar City", {
    x: 0.6, y: 6.45, w: W - 1.2, h: 0.5,
    fontFace: SANS_FONT, fontSize: 11.5, color: OFFWHITE,
  })
}

// ─── SLIDE 10 — Lead Generation & Integrations ─────────────────────
{
  const slide = addStandardSlide("Lead Generation", 10)
  addHeadline(slide, "How the website converts.")
  addSubhead(slide, "Four channels.  One pipeline.  Zero advertising spend to start producing leads.")

  // Flow boxes
  const boxes = [
    { title: "Demo Form",  body: "Validated with react-hook-form + zod.  Lands on /book-demo from every page." },
    { title: "WhatsApp",   body: "Floating button on every page.  Pre-filled message opens on desktop and mobile." },
    { title: "Phone CTA",  body: "+971 4 320 1265 in the navbar and footer.  Tap-to-call on mobile." },
    { title: "Careers",    body: "Job applications with CV upload (up to 5MB), routed to talents@buzzin.ae." },
  ]
  boxes.forEach((b, i) => {
    const x = 0.6 + i * 3.1
    slide.addShape("roundRect", {
      x, y: 3.4, w: 2.9, h: 1.5,
      fill: { color: DEEP_NAVY }, line: { color: AMBER, width: 0.75 },
      rectRadius: 0.1,
    })
    slide.addText(b.title, {
      x: x + 0.2, y: 3.5, w: 2.6, h: 0.4,
      fontFace: SANS_FONT, fontSize: 14, color: AMBER, bold: true,
    })
    slide.addText(b.body, {
      x: x + 0.2, y: 3.95, w: 2.6, h: 0.95,
      fontFace: SANS_FONT, fontSize: 10.5, color: OFFWHITE, lineSpacing: 16,
    })
  })

  // Arrow down
  slide.addShape("downArrow", {
    x: W / 2 - 0.25, y: 5.05, w: 0.5, h: 0.45,
    fill: { color: AMBER }, line: { color: AMBER },
  })

  // Pipeline strip
  slide.addShape("roundRect", {
    x: 0.6, y: 5.6, w: W - 1.2, h: 1.3,
    fill: { color: NIGHT }, line: { color: AMBER, width: 0.75 },
    rectRadius: 0.1,
  })
  slide.addText("UNIFIED LEAD PIPELINE", {
    x: 0.8, y: 5.7, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  slide.addText("Lead lands  \u2192  /api/contact  \u2192  MongoDB lead storage  +  Resend email  \u2192  Notification to info@buzzin.ae  +  automatic confirmation to the prospect.  Provider is abstracted  \u2014  HubSpot, Salesforce, or any CRM is a code-level swap.", {
    x: 0.8, y: 6.05, w: W - 1.6, h: 0.8,
    fontFace: SANS_FONT, fontSize: 12, color: OFFWHITE, lineSpacing: 18,
  })
}

// ─── SLIDE 11 — Mobile, Accessibility, Performance ─────────────────
{
  const slide = addStandardSlide("Mobile & Performance", 11)
  addHeadline(slide, "Built for the device the buyer actually uses.")
  addSubhead(slide, "Mobile-first, accessible by default, and served from Vercel's edge CDN worldwide.")

  // Three columns
  const cols = [
    { title: "Mobile-first design", points: [
      "Every layout starts as one column on phones",
      "Expands at sm, md, and lg breakpoints",
      "Hamburger nav with full accordion menu",
      "WhatsApp button always in the thumb zone",
    ]},
    { title: "Accessibility", points: [
      "Semantic HTML throughout",
      "Alt text on every image",
      "ARIA labels on every icon-only button",
      "Respects prefers-reduced-motion",
    ]},
    { title: "Performance", points: [
      "Static generation at build time",
      "Zero server work at request time",
      "next/font for zero layout shift",
      "Edge-cached worldwide",
    ]},
  ]
  cols.forEach((c, i) => {
    const x = 0.6 + i * 4.15
    slide.addShape("roundRect", {
      x, y: 3.4, w: 3.95, h: 3.3,
      fill: { color: DEEP_NAVY }, line: { color: HAIRLINE, width: 0.5 },
      rectRadius: 0.1,
    })
    slide.addText(c.title, {
      x: x + 0.25, y: 3.55, w: 3.5, h: 0.4,
      fontFace: SANS_FONT, fontSize: 15, color: AMBER, bold: true,
    })
    addBullets(slide, c.points, {
      x: x + 0.3, y: 4.1, w: 3.7, h: 2.5, size: 12,
    })
  })
}

// ─── SLIDE 12 — How This Helps the Company ─────────────────────────
{
  const slide = addStandardSlide("Business Impact", 12)
  addHeadline(slide, "What the website does for Buzzin every day.")
  addSubhead(slide, "Four outcomes, all measurable, all compounding over time.")

  const cards = [
    { num: "01", title: "More demos, lower cost per lead", body: "Every page is a converter \u2014 form, WhatsApp, phone, email.  No paid ads required to start producing leads." },
    { num: "02", title: "Stronger positioning in deals", body: "When a buyer at Aldar or Atlantis searches Buzzin mid-deal, they land on a site that signals scale and leadership." },
    { num: "03", title: "Recruiting and employer brand", body: "A working careers page with CV upload tells talent the company is serious and well-run." },
    { num: "04", title: "Owned distribution", body: "SEO compounds.  Every new module page adds a new keyword footprint and a new search entry point." },
  ]
  cards.forEach((c, i) => {
    addPillarCard(slide, 0.6 + i * 3.1, 3.4, 2.9, 3.3, c.num, c.title, c.body)
  })
}

// ─── SLIDE 13 — Compliance, Security, Trust Signals ────────────────
{
  const slide = addStandardSlide("Trust & Compliance", 13)
  addHeadline(slide, "Designed to clear procurement.")
  addSubhead(slide, "Senior buyers don't sign anything until the security posture is visible.  Ours is on every page.")

  // Cert pills row
  const certs = ["ISO 27001", "SOC 1 / 2 / 3", "GDPR Aligned", "UAE PDPL", "UAE Pass", "On-Prem Ready"]
  certs.forEach((c, i) => {
    const x = 0.6 + i * 2.1
    slide.addShape("roundRect", {
      x, y: 3.5, w: 2.0, h: 0.55,
      fill: { color: DEEP_NAVY }, line: { color: AMBER, width: 0.75 },
      rectRadius: 0.27,
    })
    slide.addText(c, {
      x, y: 3.55, w: 2.0, h: 0.45,
      fontFace: SANS_FONT, fontSize: 11.5, color: OFFWHITE, bold: true, align: "center",
    })
  })

  // Two columns of trust signals
  slide.addText("VISIBLE THROUGHOUT THE SITE", {
    x: 0.6, y: 4.5, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "Dedicated Security & Compliance page",
    "Certifications strip on every module page",
    "Privacy Policy + Terms of Service in the footer",
    "Real client names only \u2014 no inflated logos",
  ], { x: 0.7, y: 4.8, w: 6, h: 2.2, size: 12.5 })

  slide.addText("WHY IT MATTERS", {
    x: 7.0, y: 4.5, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "Shortens procurement cycles in regulated industries",
    "Removes a key objection before it's raised",
    "Signals enterprise maturity to first-time visitors",
    "Aligned with UAE data protection standards",
  ], { x: 7.1, y: 4.8, w: 6, h: 2.2, size: 12.5 })
}

// ─── SLIDE 14 — What's Next (Roadmap) ──────────────────────────────
{
  const slide = addStandardSlide("Roadmap", 14)
  addHeadline(slide, "Where we go from here.")
  addSubhead(slide, "Six investments that turn the website from a launch into a compounding asset.")

  const roadmap = [
    { num: "01", title: "Launch the Arabic version with native copy",  body: "Framework, fonts, RTL routing already in place. Missing piece: professional Arabic translation. Unlocks KSA, Kuwait, and Lebanon search traffic." },
    { num: "02", title: "Connect Google Analytics 4 + Search Console", body: "Track which pages drive demos, which keywords land impressions, which industries convert. Feed data back into copy and SEO." },
    { num: "03", title: "Launch Google Ads on high-intent terms",     body: "Pair existing landing pages with paid search on \u201Cvisitor management system UAE\u201D and the other 13 primary keywords." },
    { num: "04", title: "Plug lead capture into HubSpot or Salesforce", body: "Provider abstraction is already built. Demos flow straight into sales with no extra engineering work." },
    { num: "05", title: "Activate the Sanity CMS for marketing",       body: "Schemas already defined. Marketing can update copy, stats, and case studies without code changes." },
    { num: "06", title: "Add a Case Studies / Insights section",       body: "Long-form proof articles for Aldar, Atlantis, Taaleem rollouts. SEO depth, sales enablement, and outbound link-bait." },
  ]
  roadmap.forEach((r, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const x = 0.6 + col * 4.15
    const y = 3.4 + row * 1.85
    slide.addShape("roundRect", {
      x, y, w: 3.95, h: 1.7,
      fill: { color: DEEP_NAVY }, line: { color: HAIRLINE, width: 0.5 },
      rectRadius: 0.1,
    })
    slide.addText(r.num, {
      x: x + 0.2, y: y + 0.1, w: 0.8, h: 0.4,
      fontFace: HEAD_FONT, fontSize: 18, color: AMBER,
    })
    slide.addText(r.title, {
      x: x + 0.85, y: y + 0.1, w: 3.0, h: 0.45,
      fontFace: SANS_FONT, fontSize: 12, color: OFFWHITE, bold: true,
    })
    slide.addText(r.body, {
      x: x + 0.2, y: y + 0.6, w: 3.6, h: 1.05,
      fontFace: SANS_FONT, fontSize: 10.5, color: GREY, lineSpacing: 15,
      valign: "top",
    })
  })
}

// ─── SLIDE 15 — Effort & Ownership ─────────────────────────────────
{
  const slide = addStandardSlide("Ownership", 15)
  addHeadline(slide, "Every pixel.  Every line.  Every word.")
  addSubhead(slide, "Planned, architected, designed, built, written, optimised, and deployed in-house.")

  // Big stats row
  addStatCard(slide, 0.6, 3.4, 4.0, 1.6, "23", "Pages shipped end to end")
  addStatCard(slide, 4.8, 3.4, 4.0, 1.6, "10+", "Integrated platform modules")
  addStatCard(slide, 9.0, 3.4, 3.7, 1.6, "0", "External agency cost")

  // Coverage
  slide.addText("COVERAGE", {
    x: 0.6, y: 5.25, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 3,
  })
  addBullets(slide, [
    "Full-stack engineering  —  Next.js, React, TypeScript, Tailwind",
    "Design system, UX writing, SEO, JSON-LD structured data",
    "Animations, forms, APIs, email pipeline, MongoDB integration",
    "Vercel deployment, performance tuning, accessibility, mobile-first",
  ], { x: 0.7, y: 5.55, w: W - 1.4, h: 1.4, size: 13 })
}

// ─── SLIDE 16 — Closing ────────────────────────────────────────────
{
  const slide = pptx.addSlide()
  addBackground(slide, NIGHT)

  // Background accent
  slide.addShape("ellipse", {
    x: 9, y: -2, w: 8, h: 8,
    fill: { color: AMBER, transparency: 92 },
    line: { color: AMBER, transparency: 100 },
  })

  slide.addShape("rect", {
    x: 0.8, y: 3.2, w: 1.0, h: 0.05,
    fill: { color: AMBER }, line: { color: AMBER },
  })
  slide.addText("CLOSING", {
    x: 0.8, y: 2.8, w: 6, h: 0.35,
    fontFace: SANS_FONT, fontSize: 11, color: AMBER, bold: true, charSpacing: 4,
  })

  slide.addText("Buzzin's website is now a sales asset \u2014 not a brochure.", {
    x: 0.8, y: 3.5, w: 12, h: 1.8,
    fontFace: HEAD_FONT, fontSize: 40, color: OFFWHITE, lineSpacing: 44,
  })

  // Credit
  slide.addShape("rect", {
    x: 0.8, y: 5.7, w: 0.1, h: 0.45,
    fill: { color: AMBER }, line: { color: AMBER },
  })
  slide.addText("Designed and shipped by", {
    x: 1.0, y: 5.65, w: 8, h: 0.3,
    fontFace: SANS_FONT, fontSize: 11, color: GREY,
  })
  slide.addText("Omar Hegazy  —  Solutions Engineer", {
    x: 1.0, y: 5.92, w: 8, h: 0.3,
    fontFace: SANS_FONT, fontSize: 15, color: OFFWHITE, bold: true,
  })

  // URLs
  slide.addText("Visit live", {
    x: 0.8, y: 6.55, w: 6, h: 0.3,
    fontFace: SANS_FONT, fontSize: 10, color: GREY,
  })
  slide.addText("buzzin-mu.vercel.app/en   \u00B7   buzzin.ae", {
    x: 0.8, y: 6.8, w: 8, h: 0.4,
    fontFace: MONO_FONT, fontSize: 14, color: AMBER, bold: true,
  })
}

// ─── Save ──────────────────────────────────────────────────────────
pptx.writeFile({ fileName: OUTPUT_PATH }).then((file) => {
  console.log(`\n\u2713 Presentation generated: ${file}\n`)
}).catch((err) => {
  console.error("Failed to write PPTX:", err)
  process.exit(1)
})
