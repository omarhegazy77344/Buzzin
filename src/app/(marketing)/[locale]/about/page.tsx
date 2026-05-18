import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, MapPin, Mail, Phone } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { StatsBar } from "@/components/marketing/stats-bar"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { AboutExclusivityBlock } from "@/components/marketing/about-exclusivity-block"
import {
  SectionReveal, StaggerGrid, StaggerItem,
} from "@/components/marketing/hospitality-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "About Buzzin FZCO | Premises Intelligence Platform — Dubai, UAE",
  description:
    "Buzzin FZCO is a Dubai-based enterprise premises intelligence platform trusted by Aldar, Atlantis, Taaleem, Fairmont, and 300+ organisations across UAE, KSA, Kuwait, and Lebanon. Headquartered at Dtec, Dubai Silicon Oasis.",
  openGraph: {
    title: "About Buzzin FZCO | Dubai Premises Intelligence Platform",
    description:
      "Enterprise premises management platform headquartered in Dubai. Exclusive partner to Aldar and Asteco. 300+ organisations across 5 countries.",
  },
}

/* ─── Data ─── */

const proofChips = [
  "300+ Organisations",
  "5 Countries",
  "20M+ Interactions",
  "Dtec, Dubai Silicon Oasis",
]

const principles = [
  {
    number: "01",
    title: "Simplicity",
    body: "Complex operations should not require complex software. Every feature we build is tested against one question: can a non-technical person use this on day one?",
  },
  {
    number: "02",
    title: "Flexibility",
    body: "No two premises are identical. Buzzin adapts to your workflows — not the other way around. Custom development is available on request.",
  },
  {
    number: "03",
    title: "Conviction",
    body: "We do not just implement a system. We solve problems with you and stand behind the solution. We do not disappear after go-live.",
  },
]

const countries = [
  { flag: "\uD83C\uDDE6\uD83C\uDDEA", name: "UAE", status: "Headquarters \u2014 Dubai Silicon Oasis" },
  { flag: "\uD83C\uDDF8\uD83C\uDDE6", name: "Saudi Arabia", status: "Active \u2014 Riyadh & Jeddah" },
  { flag: "\uD83C\uDDF0\uD83C\uDDFC", name: "Kuwait", status: "Active" },
  { flag: "\uD83C\uDDF1\uD83C\uDDE7", name: "Lebanon", status: "Active" },
]

const sectors = [
  {
    name: "Hospitality",
    count: "7 clients",
    pills: ["Atlantis", "Fairmont", "Kempinski", "Hyatt"],
    linkLabel: "See hospitality \u2192",
    href: "/en/industries/hospitality",
  },
  {
    name: "Real Estate & Communities",
    count: "7 clients",
    pills: ["Aldar", "Asteco", "DAMAC", "Azizi"],
    linkLabel: "See real estate \u2192",
    href: "/en/industries/residential-real-estate",
  },
  {
    name: "Education",
    count: "7 clients",
    pills: ["Taaleem", "Brighton College", "GEMS", "Rashid & Latifa"],
    linkLabel: "See education \u2192",
    href: "/en/industries/education",
  },
  {
    name: "Financial & Commercial",
    count: "2 clients",
    pills: ["Central Park Towers DIFC", "Masdar City"],
    linkLabel: "Learn more \u2192",
    href: "/en/industries",
  },
  {
    name: "Government",
    count: "3 clients",
    pills: ["Rashid & Latifa Schools", "Massar Sharjah"],
    linkLabel: "Learn more \u2192",
    href: "/en/industries",
  },
]

const aboutSteps = [
  {
    number: "01",
    title: "We assess your premises",
    desc: "Our team visits your site, reviews your workflows, and maps your exact operational requirements. No generic setup \u2014 every deployment is configured to how your operation actually works.",
  },
  {
    number: "02",
    title: "We configure and deploy",
    desc: "Cloud-hosted. No servers required. One Android tablet to get started. Live within days, not months. No IT team needed on your side.",
  },
  {
    number: "03",
    title: "We stay with you",
    desc: "SLA-backed support via phone, email, and WhatsApp. Remote troubleshooting, over-the-air updates, and routine site visits. We do not disappear after go-live.",
  },
]

const certs = [
  "ISO 27001 Certified",
  "SOC 1 / 2 / 3",
  "GDPR Aligned",
  "UAE Pass Integrated",
  "On-Premises Available",
  "5-Year Data Retention",
]

/* ─── Page ─── */

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD — Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Buzzin FZCO",
            url: "https://buzzin.ae",
            logo: "https://buzzin.ae/images/logo-light.png",
            description: "Enterprise premises intelligence platform for UAE and GCC organisations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dtec, Dubai Silicon Oasis",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971-4-3201265",
              contactType: "sales",
              email: "info@buzzin.ae",
              availableLanguage: ["English", "Arabic"],
            },
            areaServed: ["AE", "SA", "KW", "LB"],
            foundingLocation: "Dubai, UAE",
            sameAs: [],
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
              { "@type": "ListItem", position: 2, name: "About", item: "https://buzzin.ae/en/about" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            <div className="mx-auto max-w-[720px] text-center">
              <SectionReveal>
                <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  &mdash; Our Story
                </p>
              </SectionReveal>

              <SectionReveal>
                <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
                  <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
                  <span className="mx-1.5">/</span>
                  <span>About</span>
                </nav>
              </SectionReveal>

              <SectionReveal>
                <h1 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[4rem]">
                  Built in Dubai.{"\n"}Built for the GCC.{"\n"}Built to last.
                </h1>
              </SectionReveal>

              <SectionReveal>
                <p className="mx-auto mt-5 max-w-[580px] font-body text-[18px] font-light leading-[1.75] text-[var(--text-secondary)]">
                  Buzzin FZCO is a premises intelligence platform headquartered at Dtec, Dubai Silicon Oasis. We give the people who run complex physical spaces &mdash; property developers, luxury hotels, international schools, and financial districts &mdash; total control and intelligence over every person, permit, and patrol across their entire operation.
                </p>
              </SectionReveal>

              <StaggerGrid className="mt-7 flex flex-wrap justify-center gap-3" interval={0.1}>
                {proofChips.map((chip) => (
                  <StaggerItem key={chip}>
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-4 py-2 font-heading text-[12px] font-semibold text-amber-700">
                      {chip}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 2 — STATS BAR ━━━ */}
        <StatsBar />

        {/* ━━━ SECTION 3 — WHAT WE BELIEVE ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; What We Believe
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Simplicity and power are not opposites.
              </h2>
            </SectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <SectionReveal>
                <p className="font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  The UAE&apos;s enterprise market deserves software that is both powerful enough for Aldar&apos;s 40-community portfolio and simple enough for a school receptionist to use on their first day.
                </p>
                <p className="mt-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  We built Buzzin around three principles that every client has confirmed: simplicity in the day-to-day, flexibility to adapt to any use case, and the depth of features that enterprise operations actually need.
                </p>
                <p className="mt-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  When Aldar asked us to build a new module, we built it. When DAMAC had a complex multi-site use case, we solved it. When Taaleem needed a platform that could scale across 40 schools without losing simplicity, we delivered it. This is how we work.
                </p>
              </SectionReveal>

              <StaggerGrid className="flex flex-col gap-4" interval={0.12}>
                {principles.map((p) => (
                  <StaggerItem key={p.number}>
                    <div className="flex gap-4 rounded-xl border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] px-[22px] py-5 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.3)]">
                      <span className="shrink-0 font-heading text-[1.75rem] font-extrabold leading-none text-[var(--text-brand)]">
                        {p.number}
                      </span>
                      <div>
                        <p className="mb-1 font-heading text-[14px] font-bold text-[var(--text-primary)]">{p.title}</p>
                        <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{p.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — WHERE WE OPERATE ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Where We Operate
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Dubai-headquartered. GCC-wide.
              </h2>
              <p className="mt-3 mb-10 max-w-[480px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Buzzin is registered and headquartered in Dubai, UAE. We deploy and support clients across five countries with the same standard of service.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-2 gap-5 lg:grid-cols-4" interval={0.1}>
              {countries.map((c) => (
                <StaggerItem key={c.name}>
                  <div className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.35)] hover:-translate-y-[2px]">
                    <p className="mb-2 font-heading text-[2rem]">{c.flag}</p>
                    <p className="mb-1 font-heading text-[16px] font-bold text-[var(--text-primary)]">{c.name}</p>
                    <p className="font-body text-[12px] text-[var(--text-muted)]">{c.status}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <SectionReveal className="mt-8 flex justify-center">
              <div className="inline-flex flex-col items-center rounded-xl bg-[var(--bg-canvas)] px-6 py-5">
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  Headquarters
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    <span className="font-body text-[13px] text-[var(--text-muted)]">Dtec, Dubai Silicon Oasis, Dubai, UAE</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    <a href="mailto:info@buzzin.ae" className="font-body text-[13px] text-[var(--text-muted)] hover:text-[var(--text-brand)]">
                      info@buzzin.ae
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    <a href="tel:+97143201265" className="font-body text-[13px] text-[var(--text-muted)] hover:text-[var(--text-brand)]">
                      +971 4 3201265
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — ALL SECTORS WE SERVE ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Who We Serve
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Trusted across every enterprise sector.
              </h2>
              <p className="mt-3 mb-10 max-w-[480px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                From luxury hotels to government schools, from financial districts to residential communities &mdash; Buzzin operates across the full spectrum of the UAE enterprise market.
              </p>
            </SectionReveal>

            <StaggerGrid className="flex flex-col gap-4" interval={0.08}>
              {sectors.map((s) => (
                <StaggerItem key={s.name}>
                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-4 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.3)]">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-heading text-[15px] font-bold text-[var(--text-primary)]">{s.name}</span>
                      <span className="rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 font-heading text-[11px] font-semibold text-[var(--text-brand)]">
                        {s.count}
                      </span>
                      <div className="hidden flex-wrap gap-2 sm:flex">
                        {s.pills.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-full border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-1 font-body text-[11px] text-[var(--text-muted)]"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={s.href}
                      className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      {s.linkLabel}
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — EXCLUSIVITY ━━━ */}
        <AboutExclusivityBlock />

        {/* ━━━ SECTION 7 — HOW WE WORK ━━━ */}
        <HowItWorks steps={aboutSteps} />

        {/* ━━━ SECTION 8 — CERTIFICATIONS ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <SectionReveal className="text-center">
              <p className="mb-2 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Security &amp; Compliance
              </p>
              <h2 className="font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Enterprise-grade security. GCC&#8209;native&nbsp;compliance.
              </h2>
            </SectionReveal>

            <StaggerGrid className="mt-6 flex flex-wrap justify-center gap-3" interval={0.06}>
              {certs.map((cert) => (
                <StaggerItem key={cert}>
                  <div className="flex items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] px-[18px] py-2.5 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.3)]">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                    <span className="font-heading text-[11px] font-bold text-[var(--text-primary)]">{cert}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <p className="mt-4 text-center">
              <Link
                href="/en/security-compliance"
                className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
              >
                View full security documentation &rarr;
              </Link>
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 9 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to see Buzzin in action?",
            subline:
              "We will walk you through the platform in a 30-minute demo tailored to your industry and your specific premises.",
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
            href="/en/platform"
            className="font-body text-[13px] text-white/60 transition-colors hover:text-white"
          >
            See all platform modules &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
