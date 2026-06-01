import type { Metadata } from "next"
import Link from "next/link"
import {
  Crown, MessageSquare, ScanLine, LayoutGrid, BarChart2, Plug,
  XCircle, ArrowRight, CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { QueueDashboardMock } from "@/components/marketing/queue-dashboard-mock"
import {
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Queue Management System UAE | Buzzin — VIP Priority, WhatsApp Tokens, Emirates ID Kiosk",
  description:
    "Digital queue management system for UAE enterprise. VIP priority routing, WhatsApp tokens, self-service Emirates ID kiosk. Built first for Aldar Properties. Trusted by 300+ organisations across UAE and GCC.",
  openGraph: {
    title: "Queue Management System UAE | Buzzin",
    description:
      "VIP priority routing. WhatsApp tokens. Self-service Emirates ID kiosk. Built first for Aldar Properties.",
  },
}

/* ─── Data ─── */

const steps = [
  { title: "Resident joins the queue", body: "Emirates ID scanned at self-service kiosk, or they join remotely via WhatsApp link. No staff involvement required." },
  { title: "Token sent instantly", body: "Resident receives their queue number and estimated wait time via WhatsApp or SMS. They can wait anywhere instead of standing in a physical line." },
  { title: "VIP routing applied", body: "Residents with VIP or premium status are automatically routed to priority counters. No manual intervention needed." },
  { title: "Counter calls the number", body: "Digital display shows the next number. Staff call via the dashboard. Resident is notified on their phone when it is their turn." },
  { title: "Service logged to platform", body: "Every interaction logged with timestamp, service type, and wait duration. Full analytics available in real time." },
]

const features = [
  {
    icon: Crown, title: "VIP Priority Routing",
    items: [
      "Residents with premium status bypass standard queue",
      "Automatic routing, no staff manual override needed",
      "Multiple priority tiers supported",
      "Priority status synced from resident database",
      "VIP counter dedicated or shared based on configuration",
    ],
  },
  {
    icon: MessageSquare, title: "WhatsApp & SMS Tokens",
    items: [
      "Queue number sent to phone on joining",
      "Estimated wait time updated in real time",
      "Notification when turn approaches",
      "Resident can join queue remotely before arriving",
      "SMS fallback for non-WhatsApp users",
    ],
  },
  {
    icon: ScanLine, title: "Self-Service Emirates ID Kiosk",
    items: [
      "Emirates ID scan to join queue",
      "No staff involvement to register",
      "Visitor type auto-detected from ID data",
      "Language selection Arabic and English",
      "Accessible interface for all users",
    ],
  },
  {
    icon: LayoutGrid, title: "Counter Management",
    items: [
      "Multiple service counters one dashboard",
      "Open, pause, or close counters in real time",
      "Staff call next number from counter dashboard",
      "Transfer between counters if required",
      "Supervisor override available",
    ],
  },
  {
    icon: BarChart2, title: "Analytics & Reporting",
    items: [
      "Real-time queue length and wait time dashboard",
      "Peak hour identification",
      "Average service time per counter",
      "Daily, weekly, monthly reports",
      "Export for operations review",
    ],
  },
  {
    icon: Plug, title: "Integrations",
    items: [
      "Salesforce CRM integration (queue events logged automatically)",
      "Buzzin VMS integration links visitor history to queue record",
      "Pre-booking integration: reserved time slots skip the queue",
      "Active Directory for staff login",
      "API available for custom integrations",
    ],
  },
]

const consequences = [
  "Residents leave without being served because there is no way to notify them when it is their turn",
  "VIP residents wait in the same queue as everyone else, with no differentiated service level",
  "Staff spend time managing the physical queue instead of serving customers",
  "No data on peak times, wait durations, or service efficiency. You cannot improve what you cannot measure.",
  "Every service interaction logged separately with no connection to visitor or permit history",
]

const proofCards = [
  {
    name: "Aldar Properties",
    body: "Queue management built specifically for Aldar service centres. VIP priority routing and Salesforce integration included from day one.",
    tag: "Real Estate",
    href: "/en/industries/residential-real-estate",
  },
  {
    name: "Asteco",
    body: "Digital queue management deployed across Asteco community service points. Residents served faster, staff overhead reduced.",
    tag: "Property Management",
  },
]

const aldarRows = [
  "Built to Aldar\u2019s exact operational requirements, not a generic system configured to fit",
  "VIP routing designed for the premium resident experience Aldar\u2019s communities demand",
  "Salesforce integration built in from day one, not bolted on later",
  "Now available to all Buzzin clients with the same system and configuration flexibility",
]

const beforeAfter = [
  {
    before: "Residents arrive and take a physical number with no idea how long the wait will be. Some leave frustrated.",
    after: "Residents join queue via WhatsApp or kiosk. They receive a token with estimated wait time on their phone and can wait anywhere they choose.",
  },
  {
    before: "VIP resident waits in the same queue as everyone else. The premium service level is not reflected.",
    after: "VIP resident automatically routed to priority counter with no staff involvement required.",
  },
  {
    before: "Staff spend half their day managing the physical queue instead of serving customers at the counter",
    after: "Kiosk handles queue entry. Staff focus entirely on service, not crowd management.",
  },
  {
    before: "No data on peak times or wait durations. Impossible to staff correctly or improve service speed.",
    after: "Real-time analytics dashboard showing peak hours, average wait times, and counter performance.",
  },
]

/* ─── Page ─── */

export default function QueueManagementPage() {
  return (
    <>
      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Queue Management System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android",
            description:
              "Digital queue management system for UAE with VIP priority routing, WhatsApp tokens, and self-service Emirates ID kiosk. Built first for Aldar Properties.",
            offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
            provider: { "@type": "Organization", name: "Buzzin FZCO", url: "https://buzzin.ae" },
          }),
        }}
      />

      {/* JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://buzzin.ae/en" },
              { "@type": "ListItem", position: 2, name: "Platform", item: "https://buzzin.ae/en/platform" },
              { "@type": "ListItem", position: 3, name: "Queue Management System", item: "https://buzzin.ae/en/platform/queue-management" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            {/* Breadcrumb */}
            <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
              <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/platform" className="hover:text-[var(--text-secondary)]">Platform</Link>
              <span className="mx-1.5">/</span>
              <span>Queue Management System</span>
            </nav>

            <VmsHero
              left={
                <>
                  {/* Badges */}
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Queue Management
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-amber-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                      New Module · Live
                    </span>
                  </HeroBlock>

                  {/* H1 */}
                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-[var(--text-primary)]">
                      No more queues at your reception. Intelligent digital routing, built for the&nbsp;UAE.
                    </h1>
                  </HeroBlock>

                  {/* Sub */}
                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-body-lg leading-[1.7] text-[var(--text-secondary)]">
                      WhatsApp and SMS queue tokens. Self-service Emirates ID kiosk. VIP priority routing. Salesforce integration. Built first for Aldar Properties, now available across the entire Buzzin platform.
                    </p>
                  </HeroBlock>

                  {/* Micro-stats */}
                  <HeroBlock className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8">
                    {[
                      { val: "VIP", label: "priority routing built in" },
                      { val: "WhatsApp", label: "and SMS queue tokens" },
                      { val: "Zero", label: "staff needed to join queue" },
                    ].map((s, i) => (
                      <div key={s.label} className="flex items-center gap-4 sm:gap-8">
                        {i > 0 && <div className="hidden h-10 w-px bg-[var(--border-default)] sm:block" />}
                        <div>
                          <p className="font-heading text-[28px] font-bold text-[var(--text-brand)]">{s.val}</p>
                          <p className="font-body text-[12px] text-[var(--text-muted)]">{s.label}</p>
                        </div>
                      </div>
                    ))}
                  </HeroBlock>

                  {/* CTAs */}
                  <HeroBlock className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <Link href="/en/book-demo">Book a Free Demo &rarr;</Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <Link href="#how-it-works">How It Works</Link>
                    </Button>
                  </HeroBlock>
                </>
              }
              right={<QueueDashboardMock />}
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — THE PROBLEM ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Problem
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                A queue at your service centre is not just inconvenient. It is a brand problem.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Service Centre Manager Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;Residents were waiting 45 minutes with no idea how long was left. Some left and came back angry. Some just never came back. For a premium community, that is not acceptable.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Service Centre Manager, Residential Community, Abu Dhabi
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Without a digital queue system, every person who walks in faces the same uncertainty: how long will this take? VIP residents wait alongside everyone else. Staff are overwhelmed managing the physical flow manually.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Costs You
                </p>
                <div className="space-y-3">
                  {consequences.map((c) => (
                    <div key={c} className="flex gap-3">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                      <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{c}</p>
                    </div>
                  ))}
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — HOW IT WORKS ━━━ */}
        <section id="how-it-works" className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                How It Works
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Join from a phone. Served without waiting.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                The entire queue flow is digital. Residents join remotely, receive their position on WhatsApp, and arrive at the counter when it is their turn.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="relative grid grid-cols-1 gap-4 md:grid-cols-5" interval={0.15}>
              {steps.map((s, i) => (
                <VmsStaggerItem key={s.title}>
                  <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
                    <span className="block font-heading text-[4.5rem] font-bold leading-none text-[var(--border-default)]">
                      {i + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-[1rem] font-semibold text-[var(--text-primary)]">{s.title}</h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.6] text-[var(--text-muted)]">{s.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — FEATURES ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Features
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Intelligent queue management for UAE enterprise.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                VIP routing, WhatsApp tokens, self-service kiosk, counter management, real-time analytics, and CRM integration in one module.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {features.map((f) => (
                <VmsStaggerItem key={f.title}>
                  <div className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                        <f.icon className="h-[18px] w-[18px] text-[var(--text-brand)]" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading text-[15px] font-bold text-[var(--text-primary)]">{f.title}</h3>
                    </div>
                    <ul className="mt-3.5 space-y-2">
                      {f.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[5px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--text-brand)]" />
                          <span className="font-body text-[13px] text-[var(--text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — BUILT FOR ALDAR ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Origin Story
              </p>
                <h2 className="mt-4 max-w-[420px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  When Aldar needed a queue management system, they asked Buzzin to build it.
                </h2>
                <p className="mt-3 mb-6 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  The Queue Management System was not adapted from a generic product. It was built from scratch in partnership with Aldar Properties to solve a specific operational challenge across their service centres: VIP routing for premium residents, WhatsApp tokens so people do not physically queue, and Salesforce integration so every service event logs to CRM.
                </p>
                <div className="space-y-3.5">
                  {aldarRows.map((row) => (
                    <div key={row} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                      <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{row}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <Button size="lg" asChild>
                    <Link href="/en/book-demo">Book a Demo &rarr;</Link>
                  </Button>
                </div>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <div className="rounded-2xl border border-amber-500/20 bg-[var(--bg-proof)] p-7">
                  <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Built First For
                  </p>
                  <Link href="/en/industries/residential-real-estate" className="font-heading text-[1.5rem] font-extrabold text-[var(--text-brand)] hover:underline">
                    Aldar Properties
                  </Link>
                  <p className="mt-3 font-body text-[13px] leading-[1.65] text-white/60">
                    The QMS module was developed specifically to solve Aldar&apos;s service centre challenge. It is now part of the core Buzzin platform available to all clients.
                  </p>
                  <div className="my-4 h-px bg-white/10" />
                  <div className="space-y-2">
                    {[
                      { label: "Built for", value: "Aldar Properties" },
                      { label: "Module status", value: "Live · New" },
                      { label: "Integration", value: "Salesforce native" },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center justify-between">
                        <span className="font-body text-[12px] text-white/40">{r.label}</span>
                        <span className="font-heading text-[12px] font-bold text-[var(--text-brand)]">{r.value}</span>
                      </div>
                    ))}
                  </div>
                  <span className="mt-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">
                    Real Estate
                  </span>
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — CLIENT PROOF ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
          <HexagonPattern className="text-white/[0.04]" />
          <Container className="relative">
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Trusted By
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-white">
                Built for the UAE&apos;s most demanding communities.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2" interval={0.12}>
              {proofCards.map((c) => (
                <VmsStaggerItem key={c.name}>
                  <div className="rounded-[14px] border border-white/[0.08] bg-white/[0.05] p-6 transition-colors duration-300 hover:bg-white/[0.08]">
                    {c.href ? (
                      <Link href={c.href} className="font-heading text-[16px] font-bold text-[var(--text-brand)] hover:underline">{c.name}</Link>
                    ) : (
                      <p className="font-heading text-[16px] font-bold text-[var(--text-brand)]">{c.name}</p>
                    )}
                    <p className="mt-2 font-body text-[13px] leading-[1.65] text-white/60">{c.body}</p>
                    <span className="mt-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">
                      {c.tag}
                    </span>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>

            <p className="mt-6 text-center font-body text-[13px] text-white/40">
              And 300+ organisations across UAE, KSA, Kuwait, and Lebanon.
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — BEFORE / AFTER ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Transformation
              </p>
              <h2 className="mt-4 mb-10 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What changes when your queue goes digital.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="space-y-2.5" interval={0.1}>
              {beforeAfter.map((row, i) => (
                <VmsStaggerItem key={i}>
                  <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--border-default)] md:grid-cols-[1fr_40px_1fr]">
                    <div className="bg-[#FFF5F5] px-5 py-4">
                      <p className="mb-1.5 font-heading text-[9px] font-bold uppercase tracking-wide text-red-500">Before</p>
                      <p className="font-body text-[13px] leading-[1.55] text-red-800">{row.before}</p>
                    </div>
                    <div className="hidden items-center justify-center border-x border-[var(--border-default)] bg-white md:flex">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">
                        <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="bg-[#F0FDF4] px-5 py-4">
                      <p className="mb-1.5 font-heading text-[9px] font-bold uppercase tracking-wide text-emerald-600">With Buzzin</p>
                      <p className="font-body text-[13px] font-semibold leading-[1.55] text-emerald-800">{row.after}</p>
                    </div>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 8 — SECURITY ━━━ */}
        <SecurityBar />

        {/* ━━━ SECTION 9 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to eliminate the queue at your service centre?",
            subline:
              "We will show you exactly how Buzzin QMS works for your operation, including VIP routing and any CRM integrations you need.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/platform" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
              See all platform modules &rarr;
            </Link>
            <Link href="/en/industries/residential-real-estate" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
              See how we work for real estate &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
