import type { Metadata } from "next"
import Link from "next/link"
import {
  Car, Link as LinkIcon, BadgeCheck, AlertTriangle, BarChart2, Settings,
  Building2, Hotel, Briefcase,
  CheckCircle, ShieldCheck, XCircle, Users,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import {
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Parking Management System | Buzzin \u2014 ANPR, Visitor Parking, Coming Soon",
  description:
    "Buzzin Parking Management \u2014 ANPR camera integration, visitor parking linked to VMS check-in, resident permit management, and smart bay tracking. Coming soon.",
  openGraph: {
    title: "Parking Management | Buzzin (Coming Soon)",
    description:
      "ANPR cameras. VMS-linked visitor parking. Resident permits. Smart bay tracking. Coming soon to the Buzzin platform.",
  },
  robots: { index: true, follow: true },
}

/* ─── Data ─── */

const consequences = [
  "Visitor parks without checking in, and security has no way to link the vehicle to an approved visitor record",
  "Resident bays taken by contractors because there is no digital permit system and no automated enforcement",
  "Parking disputes every day. There is no system of record for who is authorised to park where and when.",
  "No ANPR integration, so number plate recognition is manual, slow, and prone to error",
  "Visitor parking is not linked to VMS, meaning two separate processes for a single arrival event",
]

const features = [
  {
    icon: Car,
    title: "ANPR Camera Integration",
    body: "Automatic Number Plate Recognition cameras integrated at entry and exit. Plates are read automatically with no manual input required at the barrier.",
  },
  {
    icon: LinkIcon,
    title: "VMS-Linked Visitor Parking",
    body: "When a visitor is approved at reception, their vehicle registration is linked to their check-in. Gate barrier opens automatically when they arrive.",
  },
  {
    icon: BadgeCheck,
    title: "Resident Permit Management",
    body: "Digital resident parking permits with expiry dates, bay allocations, and renewal workflows. No physical sticker required.",
  },
  {
    icon: AlertTriangle,
    title: "Unauthorised Vehicle Alerts",
    body: "When an unregistered vehicle is detected in a restricted bay, security management gets an instant alert. No manual monitoring required.",
  },
  {
    icon: BarChart2,
    title: "Occupancy Analytics",
    body: "Real-time bay occupancy dashboard. Peak usage hours. Average visitor dwell time. Enforcement event history.",
  },
  {
    icon: Settings,
    title: "Contractor Vehicle Management",
    body: "Contractor vehicles linked to active work permits. Vehicle access is automatically revoked when the permit expires, with no manual gate instruction needed.",
  },
]

const connections = [
  "When a visitor is approved at the VMS kiosk, their vehicle plate is automatically permitted",
  "When the visitor departs, the vehicle permit is revoked automatically",
  "While a contractor permit is active, vehicle access stays valid for the permit duration only",
  "If a visitor overstays, an alert fires to security at the expected departure time",
]

const sectors = [
  {
    icon: Building2,
    title: "Residential Communities",
    body: "Resident bay allocation. Visitor parking linked to VMS. Contractor vehicle permits. ANPR at community gates.",
  },
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    body: "Guest valet and self-park management. Staff parking permits. Event parking overflow management.",
  },
  {
    icon: Briefcase,
    title: "Commercial Buildings",
    body: "Tenant parking allocations. Visitor parking linked to lobby check-in. Utilisation reporting for property management.",
  },
]

/* ─── Dashboard Mock ─── */

function ParkingDashboardMock() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-5 rounded-[20px] bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]" />

      <div className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[0_24px_60px_rgba(30,37,71,0.10)]">
        <div className="flex items-center justify-between bg-[var(--bg-proof)] px-4 py-2.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[var(--text-brand)]">
            Parking Dashboard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-heading text-[9px] font-semibold text-emerald-400">COMING SOON</span>
          </span>
        </div>

        <div className="p-[14px]">
          {/* KPI row */}
          <div className="mb-[10px] grid grid-cols-3 gap-2">
            {[
              { val: "247", label: "Total Bays", pct: 100, color: "bg-amber-500" },
              { val: "31", label: "Available", pct: 13, color: "bg-emerald-500" },
              { val: "12", label: "Visitor Bays", pct: 50, color: "bg-[var(--bg-proof)]" },
            ].map((k) => (
              <div key={k.label} className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5">
                <p className="font-heading text-[20px] font-bold text-[var(--text-primary)]">{k.val}</p>
                <p className="font-body text-[9px] text-[var(--text-muted)]">{k.label}</p>
                <div className="mt-1.5 h-[3px] w-full rounded-full bg-[var(--border-subtle)]">
                  <div className={`h-full rounded-full ${k.color}`} style={{ width: `${k.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* ANPR log */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-[10px]">
            <p className="mb-2 font-heading text-[9px] font-semibold uppercase text-[var(--text-muted)]">
              Recent Vehicle Activity
            </p>
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] py-[5px]">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-600" strokeWidth={2} />
                <span className="font-body text-[10px] font-semibold text-[var(--text-primary)]">DXB&middot;A&middot;12345</span>
              </div>
              <span className="font-body text-[9px] text-emerald-700">Visitor &middot; Gate 1</span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] py-[5px]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3 w-3 text-amber-600" strokeWidth={2} />
                <span className="font-body text-[10px] font-semibold text-[var(--text-primary)]">AUH&middot;B&middot;67890</span>
              </div>
              <span className="font-body text-[9px] text-amber-700">Resident Permit</span>
            </div>
            <div className="flex items-center justify-between py-[5px]">
              <div className="flex items-center gap-2">
                <XCircle className="h-3 w-3 text-red-500" strokeWidth={2} />
                <span className="font-body text-[10px] font-semibold text-[var(--text-primary)]">SHJ&middot;C&middot;11111</span>
              </div>
              <span className="font-body text-[9px] text-red-500">No permit</span>
            </div>
          </div>

          {/* Link strip */}
          <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/[0.08] px-2.5 py-[7px]">
            <Car className="h-3 w-3 text-[var(--text-brand)]" strokeWidth={2} />
            <span className="font-body text-[9px] text-amber-700">
              VMS sync active · visitor vehicles auto-approved
            </span>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="border-t border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center">
          <span className="font-heading text-[10px] font-semibold text-emerald-700">
            This module is currently in development
          </span>
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute -right-3 -top-3.5 z-[2] animate-float rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Visitor Approved</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">Plate linked &middot; Gate opens automatically</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ─── */

export default function ParkingManagementPage() {
  return (
    <>
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
              { "@type": "ListItem", position: 3, name: "Parking Management", item: "https://buzzin.ae/en/platform/parking-management" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO (white) ━━━ */}
        <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
              <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/platform" className="hover:text-[var(--text-secondary)]">Platform</Link>
              <span className="mx-1.5">/</span>
              <span>Parking Management</span>
            </nav>

            <VmsHero
              left={
                <>
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Parking Management
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Coming Soon
                    </span>
                  </HeroBlock>

                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-[var(--text-primary)]">
                      Visitor parking. Resident permits. ANPR integration. One system.
                    </h1>
                  </HeroBlock>

                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-body-lg leading-[1.7] text-[var(--text-secondary)]">
                      Parking is the first interaction a visitor has with your property. Buzzin Parking Management connects directly to visitor check-in, so the moment a guest is approved, their vehicle is too.
                    </p>
                  </HeroBlock>

                  <HeroBlock className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8">
                    {[
                      { val: "ANPR", label: "camera integration" },
                      { val: "VMS", label: "linked visitor parking" },
                      { val: "Smart", label: "bay tracking" },
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

                  <HeroBlock className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <Link href="/en/book-demo">Register Interest &rarr;</Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <Link href="/en/platform">See Live Modules</Link>
                    </Button>
                  </HeroBlock>
                </>
              }
              right={<ParkingDashboardMock />}
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
              <h2 className="mt-4 max-w-[540px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Parking without identity verification is just a queue. Not access control.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Community Manager Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.4rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;We had 40 resident spaces and a waiting list of 60. Visitors were using resident bays. Contractors were parking all day. We had no system, just a security guard with a clipboard and a problem he could not solve.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Community Manager, Residential Development, Abu Dhabi
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  When parking is managed manually, it creates daily friction for residents, guests, and operations alike. Visitor parking should connect directly to who has been approved at reception, not operate as a separate disconnected system.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What Unmanaged Parking Costs You
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

        {/* ━━━ SECTION 3 — WHAT THE MODULE WILL DO ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Coming to Buzzin
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Parking connected to every other module in the platform.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Six capabilities arriving together: ANPR, VMS-linked visitor parking, resident permits, contractor controls, alerts, and analytics. All sharing one record.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {features.map((f) => (
                <VmsStaggerItem key={f.title}>
                  <div className="relative h-full overflow-hidden rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                    <span className="absolute right-3 top-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-heading text-[8px] font-bold uppercase tracking-wide text-emerald-600">
                      Coming Soon
                    </span>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                      <f.icon className="h-[18px] w-[18px] text-[var(--text-brand)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-heading text-[14px] font-bold text-[var(--text-primary)]">{f.title}</h3>
                    <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{f.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — VMS CONNECTION ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Connected to VMS
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Arrival at the gate is the same event as arrival at reception.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-6 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  Buzzin Parking Management is not a standalone product. It connects directly to the Visitor Management System, so the moment a visitor is approved at reception, their vehicle is linked to that approval. The barrier opens because the visitor is verified, not because someone pressed a button.
                </p>
                <div className="space-y-3">
                  {connections.map((c) => (
                    <div key={c} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={2} />
                      <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{c}</p>
                    </div>
                  ))}
                </div>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <div className="rounded-2xl bg-[var(--bg-proof)] p-7">
                  <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Platform Connection
                  </p>

                  <div className="mb-2 flex items-center justify-between rounded-xl border border-white/[0.10] bg-white/[0.07] px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Users className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.75} />
                      <span className="font-heading text-[13px] font-bold text-white">
                        Visitor Management (VMS)
                      </span>
                    </div>
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.06] px-2.5 py-0.5 font-heading text-[9px] font-semibold text-white/55">
                      Core &middot; Live
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-amber-500/25 bg-amber-500/[0.12] px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Car className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.75} />
                      <span className="font-heading text-[13px] font-bold text-[var(--text-brand)]">
                        Parking Management
                      </span>
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 font-heading text-[9px] font-bold text-emerald-400">
                      Coming Soon
                    </span>
                  </div>

                  <p className="mt-3 font-body text-[12px] font-light leading-[1.6] text-white/50">
                    Visitor identity approved in VMS &rarr; vehicle access granted in Parking. One event. One platform.
                  </p>
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — WHO IT IS FOR ━━━ */}
        <section className="bg-[var(--bg-page)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Who It Serves
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Any property with a parking control requirement.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3" interval={0.1}>
              {sectors.map((s) => (
                <VmsStaggerItem key={s.title}>
                  <div className="h-full rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.35)]">
                    <s.icon className="mb-3 h-[22px] w-[22px] text-[var(--text-brand)]" strokeWidth={1.5} />
                    <h3 className="mb-2 font-heading text-[14px] font-bold text-[var(--text-primary)]">{s.title}</h3>
                    <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{s.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — NOTIFY CTA (amber reversal) ━━━ */}
        <section className="relative overflow-hidden bg-amber-500 py-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <Container className="relative z-[1]">
            <VmsSectionReveal className="mx-auto max-w-[600px] text-center">
              <h2 className="font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Parking Management is in development. Tell us your requirements now.
              </h2>
              <p className="mt-3 mb-6 font-body text-[14px] leading-[1.7] text-[rgba(30,37,71,0.7)]">
                We are building this module with specific client requirements in mind. If you have ANPR, resident permits, or VMS-linked parking needs, tell us and we will include your use case in the build.
              </p>

              <Link
                href="/en/book-demo"
                className="inline-flex items-center rounded-lg bg-[var(--bg-proof)] px-6 py-3 font-heading text-[13px] font-bold text-white transition-all hover:-translate-y-px hover:shadow-lg"
              >
                Discuss Your Parking Requirements &rarr;
              </Link>

              <p className="mt-3 font-body text-[13px] text-[rgba(30,37,71,0.6)]">
                Or{" "}
                <Link href="/en/platform" className="font-semibold text-[var(--text-primary)] hover:underline">
                  see all live modules &rarr;
                </Link>
              </p>
            </VmsSectionReveal>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
