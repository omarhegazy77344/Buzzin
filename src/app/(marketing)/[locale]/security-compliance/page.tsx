import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Cloud, Server, GitMerge, Database } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import {
  SectionReveal, StaggerGrid, StaggerItem,
} from "@/components/marketing/hospitality-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Security & Compliance | Buzzin — GDPR, UAE PDPL, UAE Pass, On-Premises",
  description:
    "GDPR aligned, UAE PDPL compliant, UAE Pass and ICP App integrated. TLS 1.2+ encryption and on-premises deployment available. Trusted by financial institutions, government schools, and luxury hospitality groups across the UAE.",
  openGraph: {
    title: "Security & Compliance | Buzzin FZCO",
    description:
      "GDPR and UAE PDPL aligned. UAE Pass and ICP integrated. TLS 1.2+ end-to-end. On-premises available. Enterprise security for UAE premises management.",
  },
}

/* ─── Data ─── */

const heroBadges = [
  { label: "SECURITY & COMPLIANCE", color: "amber" as const },
  { label: "GDPR & UAE PDPL ALIGNED", color: "emerald" as const, pulse: true },
]

const heroCerts = [
  "GDPR Aligned",
  "UAE PDPL",
  "UAE Pass",
  "ICP App",
  "On-Premises",
  "TLS 1.2+",
]

const certCards = [
  {
    abbr: "GDPR",
    name: "General Data Protection Regulation",
    body: "Buzzin is aligned with GDPR requirements for data collection, storage, processing, and the rights of data subjects, including the right to deletion and data portability.",
    means: "Every visitor who checks in has their data handled under GDPR-aligned policies with full support for subject access requests, deletion, and portability.",
  },
  {
    abbr: "UAE PDPL",
    name: "UAE Personal Data Protection Law",
    body: "Buzzin\u2019s data handling is aligned with the UAE Personal Data Protection Law (Federal Decree-Law No. 45/2021), covering lawful processing, consent, retention, and the rights of data subjects under UAE jurisdiction.",
    means: "Your visitor and contractor data is processed under UAE law, with retention policies and access controls that match local regulatory expectations.",
  },
  {
    abbr: "TLS",
    name: "End-to-End Encryption",
    body: "All data in transit is encrypted using HTTPS/TLS 1.2+. Data at rest is encrypted with AES-256. No plaintext storage of sensitive visitor or contractor records anywhere in the platform.",
    means: "Your data is unreadable in transit and unreadable at rest. Even Buzzin engineers cannot access it without role-based authorisation.",
  },
]

const uaeIntegrations = [
  {
    abbr: "UAE",
    name: "UAE Pass Integration",
    body: "UAE Pass is the UAE government\u2019s national digital identity platform. Buzzin integrates natively, so visitors and residents can scan their UAE Pass QR code at the kiosk for instant, government-verified identity confirmation.",
    means: "Visitors are verified against the UAE national identity database in real time, not a self-declared name on a form.",
  },
  {
    abbr: "ICP",
    name: "ICP App Integration",
    body: "The ICP App (Identity and Citizenship Platform) enables real-time verification of Emirates ID, residency status, and passport details for all residents and visitors in the UAE.",
    means: "Every contractor and visitor on your premises has their identity verified against federal government records rather than a photocopy of their ID.",
  },
]

const deploymentOptions = [
  {
    icon: Cloud,
    title: "Cloud-Hosted",
    body: "Buzzin-managed cloud infrastructure on AWS, GCP, or Azure. Encrypted storage, automated backups, 99.9% uptime SLA. Data stored in regional data centres.",
    bestFor: "Most organisations. Fastest deployment, zero infrastructure overhead, automatic updates.",
  },
  {
    icon: Server,
    title: "On-Premises",
    body: "Full deployment on your own servers or private cloud environment. Your data never leaves your infrastructure. Complete data sovereignty.",
    bestFor: "Financial institutions, government entities, and organisations with strict data residency requirements",
  },
  {
    icon: GitMerge,
    title: "Hybrid",
    body: "Core platform in Buzzin cloud with sensitive data stored on your own infrastructure. Balance of convenience and control.",
    bestFor: "Enterprise organisations requiring flexibility across multiple sites and compliance frameworks",
  },
]

const techControlsLeft = [
  {
    title: "HTTPS/TLS 1.2+ encryption",
    body: "All data in transit encrypted using TLS 1.2 or higher. No unencrypted connections accepted.",
  },
  {
    title: "Encrypted cloud storage",
    body: "Data at rest encrypted using AES-256. No plaintext storage of sensitive visitor or contractor data.",
  },
  {
    title: "No sensitive data on tablets",
    body: "The Android kiosk tablet processes data in real time but stores nothing locally. All data syncs to cloud and is cleared from device.",
  },
  {
    title: "Role-based access control",
    body: "Four user roles (Admin, Manager, Security Guard, Host), each with precisely scoped permissions. No user can access beyond their role.",
  },
  {
    title: "Multi-layer intrusion prevention",
    body: "Network firewalls, automated threat detection, and intrusion prevention systems operate continuously across Buzzin infrastructure.",
  },
]

const techControlsRight = [
  {
    title: "Real-time sync, no local storage",
    body: "All check-in and check-out events sync in real time between tablet and cloud. If connectivity drops, the queue is synced automatically on reconnect.",
  },
  {
    title: "Automated threat detection",
    body: "Continuous monitoring for unusual access patterns, failed authentication attempts, and anomalous data requests.",
  },
  {
    title: "MDM remote access",
    body: "All deployed tablets are managed via Mobile Device Management. Buzzin can remotely troubleshoot, update, or wipe any device if required.",
  },
  {
    title: "Event logs and audit trail",
    body: "Every system action (login, check-in, permit approval, report export) is logged with timestamp, user, and device. Logs are immutable.",
  },
  {
    title: "OTA updates, zero downtime",
    body: "All platform updates are delivered over the air. No scheduled downtime for maintenance. Updates deploy to all devices automatically.",
  },
]

const sectorCompliance = [
  {
    name: "Education",
    href: "/en/industries/education",
    items: [
      "UAE Federal Decree-Law No.\u00a026/2025: Child Digital Safety Law compliance by January 2027",
      "KHDA-ready safeguarding audit logs, exportable for inspection",
      "Authorised pickup verification with photo ID checked at gate",
      "GDPR and UAE PDPL aligned data handling for student-related data",
    ],
  },
  {
    name: "Financial & DIFC",
    href: "/en/industries",
    items: [
      "On-premises deployment available so data never leaves your infrastructure",
      "Role-based access with full audit trail for compliance reviewers",
      "Full audit log exportable for compliance reviewers and internal auditors",
      "Every visitor interaction logged with timestamp and identity record",
    ],
  },
  {
    name: "Residential & Real Estate",
    href: "/en/industries/residential-real-estate",
    items: [
      "RERA-ready contractor permit audit trail, exportable on demand",
      "5-year data retention for all visitor and contractor records",
      "Multi-community compliance dashboard with portfolio-level view",
      "UAE PDPL aligned visitor data collection and retention",
    ],
  },
  {
    name: "Government & Schools",
    href: "/en/industries/education",
    items: [
      "KHDA inspection readiness: digital log replaces paper register",
      "UAE Pass and ICP integration for government-verified identity",
      "On-premises deployment available for government data requirements",
      "Complete audit export in under 30 seconds for any inspection",
    ],
  },
]

const trustRows = [
  {
    sector: "Financial",
    body: "Full visitor audit trail for DIFC compliance requirements",
    client: "Central Park Towers DIFC",
  },
  {
    sector: "Education",
    body: "KHDA safeguarding compliance across multiple campuses",
    client: "Taaleem Group",
  },
  {
    sector: "Hospitality",
    body: "Guest and contractor management at luxury property standard",
    client: "Atlantis The Palm",
  },
]

/* ─── Page ─── */

export default function SecurityCompliancePage() {
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
              { "@type": "ListItem", position: 2, name: "Security & Compliance", item: "https://buzzin.ae/en/security-compliance" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] pt-28 pb-20 md:pt-36 md:pb-24">
          <HexagonPattern className="text-white/[0.04]" />

          <Container className="relative z-[1]">
            <div className="mx-auto max-w-[760px] text-center">
              {/* Breadcrumb */}
              <SectionReveal>
                <nav className="mb-5 font-body text-[12px] font-normal text-white/40">
                  <Link href="/en" className="hover:text-white/60">Home</Link>
                  <span className="mx-1.5">/</span>
                  <span>Security &amp; Compliance</span>
                </nav>
              </SectionReveal>

              {/* Top badges */}
              <StaggerGrid className="mb-5 flex flex-wrap justify-center gap-3" interval={0.08}>
                {heroBadges.map((b) => (
                  <StaggerItem key={b.label}>
                    <span
                      className={
                        b.color === "emerald"
                          ? "inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase text-emerald-400"
                          : "inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase text-amber-400"
                      }
                    >
                      {b.pulse && (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      )}
                      {b.label}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGrid>

              {/* H1 */}
              <SectionReveal>
                <h1 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-white md:text-[4rem]">
                  Security built for the GCC.{"\n"}Compliance you can prove.
                </h1>
              </SectionReveal>

              {/* Sub */}
              <SectionReveal>
                <p className="mx-auto mt-4 max-w-[580px] font-body text-[18px] font-light leading-[1.75] text-white/70">
                  Financial institutions at DIFC, government schools under KHDA, and luxury hospitality groups across the UAE all trust Buzzin with their data. Here is exactly how we protect it and keep your organisation compliant.
                </p>
              </SectionReveal>

              {/* Cert badges */}
              <StaggerGrid className="mt-8 flex flex-wrap justify-center gap-3" interval={0.06}>
                {heroCerts.map((cert) => (
                  <StaggerItem key={cert}>
                    <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.08] px-4 py-[9px] font-heading text-[11px] font-semibold text-white/80 transition-all duration-200 hover:bg-white/[0.14]">
                      <CheckCircle className="h-3.5 w-3.5 text-[var(--text-brand)]" strokeWidth={1.5} />
                      {cert}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 2 — CORE CERTIFICATIONS ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Certifications
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                The certifications that matter to enterprise procurement.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                These are not checkboxes. Each certification represents a specific commitment to how your data is handled, stored, and protected.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-6 md:grid-cols-3" interval={0.12}>
              {certCards.map((c) => (
                <StaggerItem key={c.abbr}>
                  <div className="rounded-2xl border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-7 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-3.5 py-2 font-heading text-[14px] font-extrabold text-[var(--text-brand)]">
                        {c.abbr}
                      </span>
                      <span className="font-heading text-[15px] font-bold text-[var(--text-primary)]">{c.name}</span>
                    </div>
                    <p className="font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">{c.body}</p>
                    <div className="mt-4">
                      <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                        What this means for you
                      </p>
                      <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{c.means}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — UAE INTEGRATIONS ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                UAE Digital Infrastructure
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Built for the UAE national identity ecosystem.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                Buzzin connects natively with the UAE government&apos;s digital identity systems. This is not an add-on; it is a core part of how the platform verifies every visitor and contractor.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-8 md:grid-cols-2" interval={0.1}>
              {uaeIntegrations.map((u) => (
                <StaggerItem key={u.abbr}>
                  <div className="rounded-[14px] border-[1.5px] border-[rgba(245,166,35,0.2)] bg-[var(--bg-surface)] p-6">
                    <div className="mb-3.5 flex items-center gap-3">
                      <span className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-3.5 py-2 font-heading text-[14px] font-extrabold text-[var(--text-brand)]">
                        {u.abbr}
                      </span>
                      <span className="font-heading text-[15px] font-bold text-[var(--text-primary)]">{u.name}</span>
                    </div>
                    <p className="mb-4 font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">{u.body}</p>
                    <div>
                      <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                        What this means for you
                      </p>
                      <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{u.means}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — DATA PROTECTION ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Data Protection
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Your data. Your control.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                Buzzin gives you full control over how your data is stored, retained, and accessed, with deployment options to match your organisation&apos;s requirements.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-6 md:grid-cols-3" interval={0.12}>
              {deploymentOptions.map((d) => {
                const Icon = d.icon
                return (
                  <StaggerItem key={d.title}>
                    <div className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.35)]">
                      <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                        <Icon className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                      </div>
                      <p className="mb-2 font-heading text-[15px] font-bold text-[var(--text-primary)]">{d.title}</p>
                      <p className="mb-3.5 font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{d.body}</p>
                      <p className="mb-1 font-heading text-[10px] font-semibold uppercase tracking-wide text-[var(--text-brand)]">
                        Best for
                      </p>
                      <p className="font-body text-[12px] text-[var(--text-muted)]">{d.bestFor}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerGrid>

            {/* Data retention row */}
            <SectionReveal>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[var(--bg-canvas)] px-6 py-5">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-heading text-[14px] font-bold text-[var(--text-primary)]">
                      Data retained securely for 5 years
                    </p>
                    <p className="font-body text-[13px] text-[var(--text-muted)]">
                      Configurable retention policies available on request
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/en/contact">Discuss your requirements &rarr;</Link>
                </Button>
              </div>
            </SectionReveal>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — TECHNICAL SECURITY ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Technical Security
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What happens under the hood.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                For IT teams and security reviewers: the exact technical controls in place across the Buzzin platform.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <StaggerGrid className="flex flex-col gap-3.5" interval={0.06}>
                {techControlsLeft.map((t) => (
                  <StaggerItem key={t.title}>
                    <div className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                      <div>
                        <p className="font-heading text-[14px] font-semibold text-[var(--text-primary)]">{t.title}</p>
                        <p className="mt-0.5 font-body text-[13px] leading-[1.5] text-[var(--text-muted)]">{t.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>

              <StaggerGrid className="flex flex-col gap-3.5" interval={0.06}>
                {techControlsRight.map((t) => (
                  <StaggerItem key={t.title}>
                    <div className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                      <div>
                        <p className="font-heading text-[14px] font-semibold text-[var(--text-primary)]">{t.title}</p>
                        <p className="mt-0.5 font-body text-[13px] leading-[1.5] text-[var(--text-muted)]">{t.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — COMPLIANCE BY SECTOR ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Compliance by Sector
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Specific compliance requirements for your industry.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                Different sectors have different regulatory requirements. Here is how Buzzin addresses the specific compliance needs of each industry.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-5 md:grid-cols-2" interval={0.1}>
              {sectorCompliance.map((s) => (
                <StaggerItem key={s.name}>
                  <div className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.35)]">
                    <div className="mb-3.5 flex items-center justify-between">
                      <span className="font-heading text-[15px] font-bold text-[var(--text-primary)]">{s.name}</span>
                      <Link
                        href={s.href}
                        className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
                      >
                        See sector &rarr;
                      </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                      {s.items.map((item) => (
                        <div key={item} className="flex gap-2">
                          <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--text-brand)]" />
                          <p className="font-body text-[13px] leading-[1.5] text-[var(--text-secondary)]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — WHO TRUSTS OUR SECURITY ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-14 md:py-16">
          <HexagonPattern className="text-white/[0.04]" />

          <Container className="relative z-[1]">
            <div className="mx-auto max-w-[800px] text-center">
              <SectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-amber-400">
                  Trusted By
                </p>
                <h2 className="mt-4 font-heading text-[2rem] font-bold text-white">
                  The organisations with the highest security standards in the GCC trust Buzzin.
                </h2>
              </SectionReveal>

              <StaggerGrid className="mx-auto mt-8 flex max-w-[600px] flex-col gap-4 text-left" interval={0.1}>
                {trustRows.map((t) => (
                  <StaggerItem key={t.client}>
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.05] px-[22px] py-[18px] transition-colors hover:bg-white/[0.08]">
                      <div className="flex items-center gap-4">
                        <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[10px] font-semibold text-amber-400">
                          {t.sector}
                        </span>
                        <p className="font-body text-[13px] text-white/60">{t.body}</p>
                      </div>
                      <span className="font-heading text-[13px] font-bold text-amber-400">{t.client}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 8 — BOTTOM CTA ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <div className="mx-auto max-w-[640px] text-center">
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Security Questions
                </p>
                <h2 className="mt-4 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Have specific security or compliance requirements?
                </h2>
                <p className="mx-auto mt-3 mb-7 max-w-[500px] font-body text-[15px] font-light text-[var(--text-muted)]">
                  Our team can provide SOC reports, answer procurement security questionnaires, and discuss on-premises deployment options, all under NDA if required.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="primary" asChild>
                    <Link href="/en/book-demo">Book a Security Review Call &rarr;</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/en/contact">Contact Our Team</Link>
                  </Button>
                  <button
                    disabled
                    className="inline-flex h-10 cursor-not-allowed items-center justify-center rounded-md border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 font-heading text-body-md font-semibold text-[var(--text-primary)] opacity-60"
                    title="Security documentation available on request — contact us"
                  >
                    Download Security Overview
                  </button>
                </div>

                <p className="mt-4 font-body text-[13px] text-[var(--text-muted)]">
                  SOC reports and security questionnaires available on request with signed NDA.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/en/about"
                    className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                  >
                    Back to About &rarr;
                  </Link>
                  <Link
                    href="/en/platform"
                    className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                  >
                    See all platform modules &rarr;
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
