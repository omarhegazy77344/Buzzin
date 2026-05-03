import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"

export const dynamic = "force-static"

type IndustryData = {
  slug: string
  name: string
  eyebrow: string
  headline: string
  description: string
  problem: string
  clients: string[]
  modules: string[]
  moduleSlugs: string[]
  outcomes: string[]
  proof: string
}

const industries: IndustryData[] = [
  {
    slug: "residential-real-estate",
    name: "Residential Real Estate",
    eyebrow: "Real estate & communities",
    headline: "Managing a community on WhatsApp is not a strategy. It is a liability.",
    description: "Aldar, Asteco, Azizi, Deyaar, and Masaar trust Buzzin to run their residential communities across the UAE. From visitor registration at the gate to contractor permit compliance and amenity booking \u2014 one platform, every community.",
    problem: "Managing multiple communities from a WhatsApp group is not a strategy. It\u2019s a liability.",
    clients: ["Aldar Properties", "Asteco", "Azizi Developments", "Deyaar", "Al Barari", "Masaar", "DAMAC"],
    modules: ["Visitor Management", "Work Permit", "Booking", "Patrolling"],
    moduleSlugs: ["visitor-management-system", "work-permit-system", "booking-management", "patrolling"],
    outcomes: [
      "Every visitor to every community is registered, verified, and time-stamped",
      "Contractor permits issued digitally with QR gate verification and expiry tracking",
      "Amenity bookings handled without double-bookings or WhatsApp chaos",
      "Guard patrols verified by NFC checkpoint scans across all sites",
      "Full audit trail available for community management and regulatory review",
      "Multi-site management from a single admin console",
    ],
    proof: "Exclusive multi-year premises partner for Aldar Properties and Asteco across their entire UAE portfolio.",
  },
  {
    slug: "education",
    name: "Education",
    eyebrow: "Schools & universities",
    headline: "Your duty of care does not end at the classroom door \u2014 and KHDA knows it.",
    description: "Taaleem, Brighton College, GEMS Education, Bloom World Academy, and Rashid & Latifa Schools use Buzzin to manage who enters their campuses, verify authorised guardians on pick-up day, and maintain the KHDA-ready audit trail that protects both the institution and the families it serves.",
    problem: "Your duty of care does not end at the classroom door \u2014 and KHDA knows it.",
    clients: ["Taaleem", "Brighton College Abu Dhabi", "GEMS Education", "Bloom World Academy", "Citizens School", "Rashid & Latifa Schools", "VISS"],
    modules: ["Safeguarding", "Visitor Management", "Work Permit", "Events"],
    moduleSlugs: ["safeguarding", "visitor-management-system", "work-permit-system", "event-management"],
    outcomes: [
      "Every person collecting a child is verified against an authorised guardian list in real time",
      "KHDA-ready audit trail with photo ID matching and relationship confirmation",
      "All campus visitors registered, verified, and logged with Emirates ID or UAE Pass",
      "Contractor and maintenance permits issued digitally with gate QR verification",
      "Open day events managed with branded invitations and 8-second check-in at the door",
      "Emergency evacuation list is live and always accurate \u2014 never a printed sheet",
    ],
    proof: "Trusted by 7 schools and universities across the UAE, including KHDA-inspected institutions.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    eyebrow: "Hotels & luxury resorts",
    headline: "Every manual process at your front of house is a brand experience failure.",
    description: "Atlantis The Palm, Fairmont, Kempinski Central Avenue, Grand Hyatt Dubai, and Paramount Hotel use Buzzin to replace paper guest registers, WhatsApp contractor coordination, and lobby chaos with a single integrated platform.",
    problem: "Every manual process at your front of house is a brand experience failure.",
    clients: ["Atlantis The Palm", "Fairmont", "Kempinski Central Avenue", "Grand Hyatt Dubai", "Paramount Hotel Midtown"],
    modules: ["Queue Management", "Visitor Management", "Work Permit", "Events"],
    moduleSlugs: ["queue-management", "visitor-management-system", "work-permit-system", "event-management"],
    outcomes: [
      "Lobby queues managed with WhatsApp tokens, VIP priority lanes, and live wait-time displays",
      "Every contractor and maintenance worker registered with a digital permit before they reach the floor",
      "Branded event invitations, live RSVP tracking, and 8-second QR check-in at the door",
      "Guest and visitor records always audit-ready for any security or compliance review",
      "Kiosk self-service at peak periods to protect front desk team capacity",
      "Real-time occupancy data across all F&B and event spaces",
    ],
    proof: "Operating at Atlantis The Palm since 2020 \u2014 the first enterprise hospitality deployment.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    eyebrow: "Office buildings & headquarters",
    headline: "A paper visitor register in 2026 is not a security measure. It is a liability.",
    description: "Al-Futtaim, EDAMCO, and corporate tower operators across Dubai use Buzzin to manage visitor access, contractor compliance, and staff attendance from a single platform \u2014 without the overhead of enterprise IT projects.",
    problem: "A paper visitor register in 2026 is not a security measure. It is a liability.",
    clients: ["Al-Futtaim", "EDAMCO", "Central Park Towers DIFC"],
    modules: ["Visitor Management", "Attendance", "Work Permit"],
    moduleSlugs: ["visitor-management-system", "attendance-management", "work-permit-system"],
    outcomes: [
      "Every visitor screened against a watchlist and host-notified in under 5 seconds",
      "Staff attendance tracked by NFC badge tap with real-time punctuality alerts to managers",
      "Contractor permits issued with document requirements enforced before approval",
      "Pre-registration links cut lobby wait times for recurring visitors to near zero",
      "Complete audit log exportable in under 30 seconds for compliance or incident review",
      "Multi-floor, multi-tenant access control from a single admin console",
    ],
    proof: "Deployed at corporate headquarters from Dubai Silicon Oasis to DIFC.",
  },
  {
    slug: "financial-districts",
    name: "Financial Districts",
    eyebrow: "DIFC, ADGM & financial centres",
    headline: "At this address, best effort is not acceptable. Absolute certainty is the standard.",
    description: "Central Park Towers DIFC and financial district operators use Buzzin for enterprise-grade visitor management, NFC access control, and a compliance audit trail that meets the standard set by DFSA and ADGM regulations.",
    problem: "At this address, best effort is not acceptable. Absolute certainty is the standard.",
    clients: ["Central Park Towers DIFC"],
    modules: ["Visitor Management", "NFC Access Control", "Turnstile Integration"],
    moduleSlugs: ["visitor-management-system", "nfc-access", "patrolling"],
    outcomes: [
      "Visitor identity verified against UAE Pass and Emirates ID at every entry point",
      "NFC badge issuance and revocation without physical retrieval \u2014 managed from the admin console",
      "Turnstile integration with Gallagher, Lenel, and CCURE access control systems",
      "Tamper-proof audit trail that satisfies DFSA and ADGM compliance review requirements",
      "Watchlist and blocklist enforcement at entry with instant security alert",
      "On-premises deployment option for sovereign data residency requirements",
    ],
    proof: "ISO 27001 aligned and SOC-reported \u2014 meeting the security bar of financial institution tenants.",
  },
  {
    slug: "government",
    name: "Government",
    eyebrow: "Government & public institutions",
    headline: "Government-trusted premises management \u2014 from Rashid & Latifa Schools to Massar Sharjah.",
    description: "Rashid & Latifa Schools, Massar Sharjah, and Masdar City use Buzzin with native UAE Pass integration, Arabic-first UI, and on-premises deployment where data sovereignty is required by mandate.",
    problem: "Government-trusted premises management \u2014 from Rashid & Latifa Schools to Massar Sharjah.",
    clients: ["Rashid & Latifa Schools", "Massar Sharjah", "Masdar City"],
    modules: ["Visitor Management", "Safeguarding", "UAE Pass"],
    moduleSlugs: ["visitor-management-system", "safeguarding", "patrolling"],
    outcomes: [
      "UAE Pass-enabled identity verification at every entry \u2014 no third-party IdP required",
      "Arabic-first interface with full RTL support for staff and visitor-facing screens",
      "On-premises deployment available for sovereign data residency mandates",
      "KHDA-compliant safeguarding for government schools with guardian verification",
      "Real-time evacuation list that is always accurate \u2014 essential for government safety standards",
      "Audit trail aligned with UAE data governance and regulatory reporting requirements",
    ],
    proof: "Trusted across government-affiliated institutions in Dubai, Abu Dhabi, and Sharjah.",
  },
]

export function generateStaticParams() {
  return industries.map((i) => ({ vertical: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>
}): Promise<Metadata> {
  const { vertical } = await params
  const ind = industries.find((i) => i.slug === vertical)
  if (!ind) return {}
  return {
    title: `${ind.name} | Industries`,
    description: ind.description,
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ vertical: string }>
}) {
  const { vertical } = await params
  const ind = industries.find((i) => i.slug === vertical)
  if (!ind) notFound()

  const otherIndustries = industries.filter((i) => i.slug !== ind.slug)

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <Container>
            <AnimateOnScroll>
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <ArrowLeft className="h-4 w-4" /> Industries
              </Link>
            </AnimateOnScroll>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimateOnScroll direction="left">
                <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  {ind.eyebrow}
                </p>
                <h1 className="font-display text-display-lg font-bold leading-[1.05] text-[var(--text-primary)] md:text-display-xl">
                  {ind.headline}
                </h1>
                <p className="mt-5 text-body-lg text-[var(--text-secondary)]">{ind.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link href="/book-demo" className="flex items-center gap-2">
                      Book a Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" asChild>
                    <Link href="/platform">Platform overview</Link>
                  </Button>
                </div>
              </AnimateOnScroll>

              {/* OUTCOMES */}
              <AnimateOnScroll direction="right">
                <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 md:p-9">
                  <h2 className="font-heading text-heading-lg font-bold text-[var(--text-primary)]">
                    What changes when Buzzin goes live
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {ind.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" strokeWidth={1.5} />
                        <span className="text-body-sm text-[var(--text-secondary)]">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </Container>
        </section>

        {/* ── MODULES ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Recommended modules
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                The Buzzin configuration most common in {ind.name}.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2" interval={0.07}>
              {ind.modules.map((mod, idx) => (
                <AnimateOnScroll key={mod}>
                  <Link
                    href={`/platform/${ind.moduleSlugs[idx] ?? ""}`}
                    className="group flex items-center justify-between rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-4 transition-all hover:border-amber-500/30 hover:-translate-y-0.5 hover:shadow-brand"
                  >
                    <span className="font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
                      {mod}
                    </span>
                    <ArrowRight className="h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ── PROOF ── */}
        <section className="bg-[var(--bg-proof)] py-16 text-white md:py-20">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-amber-400">
                Trusted by {ind.name} leaders
              </p>
              <p className="font-display text-display-md text-white md:text-display-lg">
                {ind.proof}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {ind.clients.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-heading text-body-sm font-medium text-gray-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* ── OTHER INDUSTRIES ── */}
        <section className="bg-[var(--bg-canvas)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Other industries
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Buzzin runs across six verticals.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" interval={0.06}>
              {otherIndustries.map((i) => (
                <AnimateOnScroll key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-5 transition-all hover:border-amber-500/30 hover:-translate-y-0.5 hover:shadow-brand"
                  >
                    <div>
                      <p className="font-heading text-overline font-semibold uppercase tracking-wider text-[var(--text-brand)]">
                        {i.eyebrow}
                      </p>
                      <p className="mt-0.5 font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
                        {i.name}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        <StrategicCta
          headline={`See Buzzin built for ${ind.name}.`}
          subline={`A 30-minute session with a specialist who has deployed in your vertical across the GCC.`}
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
