import type { Metadata } from "next"
import Link from "next/link"
import {
  Building2, GraduationCap,
  Smartphone, Cloud, Wifi, RefreshCw, ArrowRight,
  XCircle, CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { PlatformOverview } from "@/components/marketing/platform-overview"
import { defaultModules, type PlatformModule } from "@/lib/content-defaults"
import {
  SectionReveal, StaggerGrid, StaggerItem,
} from "@/components/marketing/hospitality-layout"
import { PlatformHero } from "@/components/marketing/platform-hero"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Platform Overview | Buzzin \u2014 7+ Integrated Premises Management Modules",
  description:
    "7+ integrated premises management modules on one platform. Visitor management, work permits, queue management, safeguarding, patrolling, booking, events, attendance, key management, and parking. Trusted by Aldar, Atlantis, Taaleem, and 550+ organisations.",
  openGraph: {
    title: "Buzzin Platform \u2014 7+ Integrated Modules",
    description:
      "Visitor management, contractor permits, queue management, safeguarding, key management, and more. 7+ modules sharing the same data and dashboard.",
  },
}

/* ─── Data ─── */

const platformPageModules: PlatformModule[] = [
  ...defaultModules,
  {
    name: "Patrolling",
    shortName: "Patrolling",
    slug: "patrolling",
    desc: "NFC checkpoint scanning. Timestamped rounds. Missed patrol alerts.",
    shortDesc: "Guard patrols",
    hoverLine: "Prove every patrol round with NFC checkpoint scans.",
    longDesc: "Digitise security patrols with NFC checkpoint scanning. Every round is timestamped, every missed station is flagged, and reports can be exported in seconds. Replaces handwritten logbooks with verifiable proof.",
    benefits: [
      "NFC checkpoint scanning at every patrol station",
      "Timestamped rounds with GPS confirmation",
      "Missed patrol alerts sent to supervisors in real time",
      "Patrol reports exportable in seconds for management review",
    ],
    status: "comingSoon",
    badge: null,
  },
  {
    name: "Parking Management",
    shortName: "Parking",
    slug: "parking-management",
    desc: "ANPR integration. Visitor parking linked to VMS. Smart bay tracking.",
    shortDesc: "Smart parking",
    hoverLine: "Link visitor parking to your VMS with ANPR.",
    longDesc: "Integrate parking with your visitor and resident management. ANPR cameras recognise plates on entry, visitor parking is linked to VMS pre-registration, and resident permits are managed digitally. No more stickers, no more barrier queues.",
    benefits: [
      "ANPR integration for automatic plate recognition",
      "Visitor parking linked to VMS pre-registration",
      "Resident permit management done digitally, replacing stickers",
      "Smart bay tracking with occupancy analytics",
    ],
    status: "comingSoon",
    badge: null,
  },
]

const pageModules = [
  {
    name: "Visitor Management System",
    slug: "visitor-management-system",
    desc: "Emirates ID and UAE Pass scanning. 3\u20135 second check-in. WhatsApp host alerts. 30M+ interactions processed.",
    status: "core" as const,
    sectors: ["All Sectors"],
  },
  {
    name: "Work Permit System",
    slug: "work-permit-system",
    desc: "QR-coded digital permits. Contractor self-registration. RERA-ready audit trail. 81,085 permits in Q1 2026.",
    status: "core" as const,
    sectors: ["Real Estate", "Construction"],
  },
  {
    name: "Event Management",
    slug: "event-management",
    desc: "Unique QR per attendee. Time and location controlled access. Branded invitations. Full attendance log.",
    status: "core" as const,
    sectors: ["Hospitality"],
  },
  {
    name: "Attendance Management",
    slug: "attendance-management",
    desc: "NFC card or phone tap. Real-time punctuality alerts. Shift reports. Late arrival notifications.",
    status: "core" as const,
    sectors: ["Education"],
  },
  {
    name: "Queue Management System",
    slug: "queue-management",
    desc: "VIP priority routing. WhatsApp tokens. Self-service Emirates ID kiosk. Built first for Aldar Properties.",
    status: "new" as const,
    sectors: ["Real Estate"],
  },
  {
    name: "Booking Management",
    slug: "booking-management",
    desc: "Live amenity calendar. Auto-approve rules. QR access pass issued on booking confirmation.",
    status: "new" as const,
    sectors: ["Real Estate", "Hospitality"],
  },
  {
    name: "Safeguarding System",
    slug: "safeguarding",
    desc: "KHDA-ready. Authorised pickup verification. UAE Child Safety Law 2026 compliant. Built for schools.",
    status: "soon" as const,
    sectors: ["Education"],
  },
  {
    name: "Patrolling System",
    slug: "patrolling",
    desc: "NFC checkpoint scanning. Timestamped rounds. Missed patrol alerts. Board-ready reports.",
    status: "soon" as const,
    sectors: ["Real Estate", "Security"],
  },
  {
    name: "Parking Management",
    slug: "parking-management",
    desc: "ANPR integration. Visitor parking linked to VMS. Resident permit management. Smart bay tracking.",
    status: "soon" as const,
    sectors: ["Real Estate", "Hospitality"],
  },
  {
    name: "Key Management System",
    slug: "key-management",
    desc: "NFC key tracking. Real-time status board. Overdue escalations. Immutable audit trail. Built for Atlantis.",
    status: "soon" as const,
    sectors: ["Hospitality", "Real Estate"],
  },
]

const industries = [
  { icon: Building2, name: "Residential & Real Estate", modules: "6 modules available", clients: "Aldar \u00B7 Asteco \u00B7 DAMAC \u00B7 Azizi", href: "/en/industries/residential-real-estate" },
  { icon: Building2, name: "Hospitality", modules: "5 modules available", clients: "Atlantis \u00B7 Fairmont \u00B7 Kempinski \u00B7 Hyatt", href: "/en/industries/hospitality" },
  { icon: GraduationCap, name: "Education", modules: "5 modules available", clients: "Taaleem \u00B7 Brighton \u00B7 GEMS", href: "/en/industries/education" },
]

const techSpecs = [
  { icon: Smartphone, title: "One Android tablet", body: "Android 8.0+. That is all you need to go live. No servers. No complex infrastructure." },
  { icon: Cloud, title: "Cloud or on-premises", body: "AWS, GCP, or Azure cloud hosting. Full on-premises deployment also available for data sovereignty requirements." },
  { icon: Wifi, title: "Wi-Fi or 4G/LTE", body: "Requires stable internet. Real-time sync between kiosk and cloud with no data stored on device." },
  { icon: RefreshCw, title: "OTA updates", body: "All platform updates delivered over the air. Zero downtime. Zero manual intervention required." },
]

const painRows = [
  "4 separate vendor contracts",
  "Data does not sync between systems",
  "4 separate audit trails, or none at all",
  "When something goes wrong, nobody knows which system to check",
]

const benefitRows = [
  "One subscription, all modules",
  "Every module shares the same data",
  "A single immutable audit trail",
  "When something happens, the whole platform knows instantly",
]

function statusBadge(status: "core" | "new" | "soon") {
  if (status === "new")
    return (
      <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[10px] font-bold text-[var(--text-brand)]">
        New
      </span>
    )
  if (status === "soon")
    return (
      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[10px] font-semibold text-emerald-600">
        Coming Soon
      </span>
    )
  return (
    <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1 font-heading text-[10px] font-semibold text-[var(--text-muted)]">
      Core
    </span>
  )
}

/* ─── Page ─── */

export default function PlatformPage() {
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
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <PlatformHero />

        {/* ━━━ SECTION 2 — PLATFORM HIVE ━━━ */}
        <PlatformOverview modules={platformPageModules} />

        {/* ━━━ SECTION 3 — ALL MODULES ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                All Modules
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                The full module list, with details.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                Click any module to see the full feature set, how it works, and which organisations use it.
              </p>
            </SectionReveal>

            {/* Table header */}
            <div className="hidden grid-cols-[2fr_1fr_1fr] gap-4 border-b border-[var(--border-default)] pb-3 md:grid">
              <span className="font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-muted)]">Module</span>
              <span className="font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-muted)]">Status</span>
              <span className="text-right font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-muted)]">Sector</span>
            </div>

            <StaggerGrid className="flex flex-col" interval={0.06}>
              {pageModules.map((m) => {
                const href = `/en/platform/${m.slug}`
                return (
                  <StaggerItem key={m.slug}>
                    <Link
                      href={href}
                      className="group grid grid-cols-1 items-center gap-2 border-b border-[var(--border-subtle)] py-[18px] transition-all duration-[220ms] hover:bg-amber-500/[0.03] hover:px-2 md:grid-cols-[2fr_1fr_1fr] md:gap-4"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-heading text-[15px] font-bold text-[var(--text-primary)] group-hover:text-[var(--text-brand)]">
                          {m.name}
                        </span>
                        <span className="font-body text-[13px] leading-[1.45] text-[var(--text-muted)]">{m.desc}</span>
                      </div>
                      <div className="mt-2 md:mt-0">
                        {statusBadge(m.status)}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center justify-end gap-2 md:mt-0">
                        {m.sectors.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1 font-body text-[10px] text-[var(--text-muted)]"
                          >
                            {s}
                          </span>
                        ))}
                        <ArrowRight className="hidden h-3.5 w-3.5 text-[var(--text-brand)] opacity-0 transition-opacity group-hover:opacity-100 md:block" strokeWidth={1.5} />
                      </div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — THE INTEGRATION STORY ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Why Integration Matters
              </p>
              <h2 className="mt-4 max-w-[540px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                10+ separate tools would cost more and do less.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                Most organisations manage visitors, contractors, queues, and bookings with separate tools from separate vendors. The real cost is not just the licences. It is the gaps between systems: disconnected data, duplicated audit trails, and blind spots that nobody owns.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-6 md:grid-cols-3" interval={0.12}>
              {/* Without */}
              <StaggerItem>
                <div className="rounded-[14px] border border-red-500/20 bg-[#FFF5F5] p-6">
                  <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-wide text-red-500">
                    Without Buzzin
                  </p>
                  <div className="space-y-2.5">
                    {painRows.map((row) => (
                      <div key={row} className="flex gap-2">
                        <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" strokeWidth={1.5} />
                        <p className="font-body text-[13px] leading-[1.5] text-red-800">{row}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>

              {/* Arrow */}
              <StaggerItem>
                <div className="flex h-full flex-col items-center justify-center rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center">
                  <span className="mb-2 font-heading text-[2.5rem] font-extrabold text-[var(--text-brand)]">&rarr;</span>
                  <p className="mb-2 font-heading text-[13px] font-bold text-[var(--text-primary)]">
                    One platform replaces all of them
                  </p>
                  <p className="font-body text-[12px] leading-[1.55] text-[var(--text-muted)]">
                    Same data. Same dashboard. Same audit trail.
                  </p>
                </div>
              </StaggerItem>

              {/* With */}
              <StaggerItem>
                <div className="rounded-[14px] border border-emerald-500/20 bg-[#F0FDF4] p-6">
                  <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-wide text-emerald-600">
                    With Buzzin
                  </p>
                  <div className="space-y-2.5">
                    {benefitRows.map((row) => (
                      <div key={row} className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" strokeWidth={1.5} />
                        <p className="font-body text-[13px] font-semibold leading-[1.5] text-emerald-800">{row}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — INDUSTRIES ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Industries
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Built around how your industry actually operates.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                The platform is configured differently for each sector. Modules, workflows, and compliance requirements are all specific to your industry.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {industries.map((ind) => {
                const Icon = ind.icon
                return (
                  <StaggerItem key={ind.name}>
                    <Link
                      href={ind.href}
                      className="block rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-[22px] transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md"
                    >
                      <div className="mb-2.5 flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                        <span className="font-heading text-[14px] font-bold text-[var(--text-primary)]">{ind.name}</span>
                      </div>
                      <span className="mb-2.5 inline-block rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1 font-heading text-[10px] font-semibold text-[var(--text-muted)]">
                        {ind.modules}
                      </span>
                      <p className="mb-3.5 font-body text-[12px] leading-[1.5] text-[var(--text-muted)]">{ind.clients}</p>
                      <span className="font-body text-[12px] font-semibold text-[var(--text-brand)]">
                        See {ind.name.toLowerCase().includes("&") ? "sector" : ind.name.toLowerCase()} &rarr;
                      </span>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — TECH SPECS ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Technical
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Built to deploy fast and run forever.
              </h2>
            </SectionReveal>

            <StaggerGrid className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4" interval={0.1}>
              {techSpecs.map((t) => {
                const Icon = t.icon
                return (
                  <StaggerItem key={t.title}>
                    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center">
                      <Icon className="mx-auto mb-2.5 h-6 w-6 text-[var(--text-brand)]" strokeWidth={1.5} />
                      <p className="mb-1.5 font-heading text-[13px] font-bold text-[var(--text-primary)]">{t.title}</p>
                      <p className="font-body text-[12px] leading-[1.55] text-[var(--text-muted)]">{t.body}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — SECURITY ━━━ */}
        <SecurityBar />
        <div className="bg-[#141830] pb-4 text-center">
          <Link
            href="/en/security-compliance"
            className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
          >
            View full security documentation &rarr;
          </Link>
        </div>

        {/* ━━━ SECTION 8 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to see all 7+ modules working together?",
            subline:
              "We will walk you through the platform in a 30-minute demo \u2014 showing exactly how the modules relevant to your premises connect in practice.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <Link
            href="/en/why-buzzin"
            className="font-body text-[13px] text-white/60 transition-colors hover:text-white"
          >
            Why organisations choose Buzzin &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
