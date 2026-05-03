import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, FileCheck, Fingerprint, Server, ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { PageHero } from "@/components/marketing/page-hero"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "Buzzin holds ISO 27001, SOC 1/2/3, GDPR alignment, UAE Pass integration, and on-prem availability. Enterprise-grade security built for GCC compliance requirements.",
}

const certifications = [
  {
    icon: Shield,
    title: "ISO 27001",
    subtitle: "Information Security Management",
    desc: "Our information security management system is aligned with ISO/IEC 27001, covering risk management, access control, incident response, and continuous improvement. Evidence pack available under NDA.",
  },
  {
    icon: Lock,
    title: "SOC 1 / SOC 2 / SOC 3",
    subtitle: "Service Organisation Controls",
    desc: "Buzzin maintains SOC-aligned controls for availability, confidentiality, processing integrity, and security. Enterprise customers may request SOC reporting documentation as part of due diligence.",
  },
  {
    icon: FileCheck,
    title: "GDPR Aligned",
    subtitle: "Data Protection by Design",
    desc: "Our data handling is structured for GDPR compliance: lawful basis for every processing activity, Data Processing Agreements for all vendors, 72-hour breach notification, and Data Protection Impact Assessments for high-risk deployments.",
  },
  {
    icon: Fingerprint,
    title: "UAE Pass Integrated",
    subtitle: "National Identity Verification",
    desc: "Visitor Management and Safeguarding are pre-integrated with UAE Pass, enabling government-grade identity verification at the point of entry \u2014 no third-party IdP required.",
  },
  {
    icon: Server,
    title: "On-Premises Available",
    subtitle: "Sovereign Data Residency",
    desc: "Where data residency is a regulatory or governance requirement, Buzzin can be deployed fully on-premises within your own infrastructure. No data leaves your network.",
  },
]

const controls = [
  "AES-256 encryption at rest and TLS 1.3 in transit",
  "Role-based access control with least-privilege enforcement",
  "Multi-factor authentication on all admin accounts",
  "Tamper-proof audit logs with 90-day default retention",
  "Annual penetration testing by independent third party",
  "Continuous security monitoring with automated alerting",
  "Vendor risk management programme covering all integrations",
  "Documented incident response plan with defined SLAs",
  "Quarterly security reviews for enterprise accounts",
  "Employee security training and phishing simulation programme",
]

const faqs = [
  {
    q: "Where is Buzzin data hosted?",
    a: "By default, Buzzin is cloud-hosted on infrastructure within the UAE and broader GCC region. Customers with sovereign data requirements can deploy Buzzin fully on-premises within their own data centres \u2014 no cloud dependency.",
  },
  {
    q: "How does Buzzin handle data from sensitive populations such as schoolchildren?",
    a: "Our Safeguarding module is purpose-built for KHDA compliance. Biometric and guardian data is encrypted, access-controlled, and retained only for the regulatory minimum period. All data subject requests (access, deletion) are fulfilled within 30 days.",
  },
  {
    q: "Does Buzzin share customer data with third parties?",
    a: "No. Buzzin does not sell or share customer premises data with third parties for any commercial purpose. Vendors used for infrastructure (hosting, communications) are bound by data processing agreements and may only act on documented instructions.",
  },
  {
    q: "What happens to data if we cancel?",
    a: "Upon termination, your data remains available for export for 90 days, after which it is permanently deleted from our systems. We will provide a signed deletion certificate upon request.",
  },
  {
    q: "Can we conduct our own security audit or penetration test?",
    a: "Yes, subject to a signed Rules of Engagement document. We accommodate customer-directed penetration testing and provide access to our security documentation, architecture diagrams, and control evidence under NDA.",
  },
  {
    q: "How does Buzzin respond to a security incident affecting our data?",
    a: "Our incident response plan requires notification to affected customers within 72 hours of confirming a breach, including details of the data involved, likely impact, and remediation steps taken. We also handle any required regulatory notifications on your behalf where contracted to do so.",
  },
]

export default function SecurityCompliancePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Security & Compliance"
          title="Enterprise-grade security. GCC-native compliance."
          description="ISO 27001 aligned, SOC reported, GDPR structured, UAE Pass integrated, and available on-premises for sovereign deployments. Security is not a feature on Buzzin \u2014 it is the foundation."
        >
          <Button size="lg" asChild>
            <Link href="/book-demo" className="flex items-center gap-2">
              Request Security Pack
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <Link href="/privacy-policy">View Privacy Policy</Link>
          </Button>
        </PageHero>

        {/* ── CERT CARDS ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Certifications & frameworks
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Built for the security and compliance bar set by financial institutions, schools, and luxury hotels.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" interval={0.07}>
              {certifications.map((c) => (
                <AnimateOnScroll
                  key={c.title}
                  className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-brand"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20">
                    <c.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                  <p className="text-body-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                    {c.subtitle}
                  </p>
                  <p className="mt-3 text-body-sm leading-relaxed text-[var(--text-secondary)]">
                    {c.desc}
                  </p>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ── TECHNICAL CONTROLS ── */}
        <section className="bg-[#141830] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-amber-400">
                Technical controls
              </p>
              <h2 className="font-display text-display-md font-bold text-white md:text-display-lg">
                Ten controls that meet the standard set by DIFC, KHDA, and UAE government tenants.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll
              className="mx-auto mt-12 grid max-w-4xl gap-3 md:grid-cols-2"
              interval={0.06}
            >
              {controls.map((c) => (
                <AnimateOnScroll
                  key={c}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" strokeWidth={1.5} />
                  <span className="text-body-sm text-gray-300">{c}</span>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Security FAQ
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Questions your InfoSec team will ask. Answered.
              </h2>
            </AnimateOnScroll>

            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={faq.q} delay={i * 0.05}>
                  <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-7">
                    <h3 className="font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
                      {faq.q}
                    </h3>
                    <p className="mt-3 text-body-md leading-relaxed text-[var(--text-secondary)]">{faq.a}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>

        <StrategicCta
          eyebrow="Due diligence ready"
          headline="Request the Buzzin Security Pack."
          subline="ISO alignment evidence, SOC documentation, architecture diagrams, and a completed vendor security questionnaire \u2014 available under NDA within one business day."
          primaryLabel="Request Security Pack"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
