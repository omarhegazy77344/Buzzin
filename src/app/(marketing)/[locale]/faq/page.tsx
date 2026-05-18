import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircle, Calendar, Mail } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { SectionReveal, StaggerGrid, StaggerItem } from "@/components/marketing/hospitality-layout"
import { FaqAccordion } from "@/components/marketing/faq-accordion"
import { FaqCategoryNav } from "@/components/marketing/faq-category-nav"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "FAQ | Buzzin \u2014 Premises Intelligence Platform UAE",
  description:
    "Frequently asked questions about Buzzin premises management platform. How it works, implementation time, security, integrations, pricing, and support. Trusted by Aldar, Atlantis, and 300+ organisations.",
  openGraph: {
    title: "FAQ | Buzzin Premises Management UAE",
    description:
      "Common questions about Buzzin \u2014 implementation, security, integrations, and how it works for your industry.",
  },
}

/* ─── FAQ Data ─── */

const faqData = [
  {
    category: "Getting Started",
    id: "getting-started",
    items: [
      {
        q: "What exactly is Buzzin?",
        a: (
          <>
            Buzzin is a premises intelligence platform &mdash; a single system that manages every person, permit, and patrol across your physical operation. It is not just a visitor management system. It has nine integrated modules covering visitor check-in, contractor permits, queue management, event check-in, amenity booking, attendance tracking, safeguarding, security patrols, and parking. Every module shares the same data and dashboard.
          </>
        ),
      },
      {
        q: "Who is Buzzin for?",
        a: (
          <>
            Buzzin is built for enterprise organisations that manage complex physical premises &mdash; residential property developers, luxury hotels, international schools, corporate headquarters, financial district buildings, and government institutions. Current clients include Aldar Properties, Atlantis The Palm, Taaleem, Fairmont, and 300+ organisations across UAE, KSA, Kuwait, and Lebanon.
          </>
        ),
      },
      {
        q: "Is Buzzin only for large organisations?",
        a: (
          <>
            Buzzin works for single-site operations and multi-community portfolios. A single hotel with one kiosk and a property developer managing 40 communities both run on the same platform. The system scales to your operation &mdash; you start with what you need and expand over time.
          </>
        ),
      },
      {
        q: "What hardware do I need?",
        a: (
          <>
            One Android tablet (Android 8.0+, 8GB+ RAM) to get started. Buzzin can also supply an NFC card reader, branded badge printer, and kiosk stand as optional hardware. No servers required &mdash; the platform is cloud-hosted. For on-premises deployment, your own server infrastructure is used.
          </>
        ),
      },
      {
        q: "What modules are currently live?",
        a: (
          <>
            Seven modules are currently live: <Link href="/en/platform/visitor-management-system" className="text-[var(--text-brand)] hover:underline">Visitor Management System</Link>, Work Permit System, Event Management, Attendance Management, <Link href="/en/platform/queue-management" className="text-[var(--text-brand)] hover:underline">Queue Management System</Link>, Booking Management, and <Link href="/en/platform/safeguarding" className="text-[var(--text-brand)] hover:underline">Safeguarding</Link>. Patrolling System and Parking Management are in final development and coming soon.
          </>
        ),
      },
    ],
  },
  {
    category: "Implementation",
    id: "implementation",
    items: [
      {
        q: "How long does it take to go live?",
        a: (
          <>
            Most deployments are live within days of the site assessment &mdash; not months. The process is: site visit and workflow review, platform configuration to your specific operation, hardware setup if required, and staff training. There is no complex IT project required on your side. One Android tablet and a stable Wi-Fi or 4G connection is all you need.
          </>
        ),
      },
      {
        q: "Do I need an IT team to deploy Buzzin?",
        a: (
          <>
            No. The platform is cloud-hosted and requires no server infrastructure on your side. Your IT team does not need to be involved in a standard deployment. For enterprise Active Directory or SSO integration, a brief IT conversation is useful but not required to go live.
          </>
        ),
      },
      {
        q: "Can Buzzin be customised for our specific operation?",
        a: (
          <>
            Yes &mdash; and this is one of the primary reasons enterprise clients choose Buzzin. Permit types, approval workflows, document requirements, access rules, notification settings, and branded kiosk interfaces are all configurable. For requirements that go beyond configuration, Buzzin offers custom module development &mdash; the <Link href="/en/industries/residential-real-estate" className="text-[var(--text-brand)] hover:underline">Queue Management System was built specifically for Aldar Properties</Link>.
          </>
        ),
      },
      {
        q: "What happens during the site visit?",
        a: (
          <>
            Our team visits your premises, maps your visitor and contractor flows, reviews your compliance requirements, and configures the platform around how you actually operate. Nothing is generic &mdash; the deployment is built specifically for your premises type, your team, and your operational challenges.
          </>
        ),
      },
    ],
  },
  {
    category: "Security & Data",
    id: "security-data",
    items: [
      {
        q: "Is Buzzin ISO 27001 certified?",
        a: (
          <>
            Yes. Buzzin is ISO 27001 certified &mdash; the international standard for information security management systems. The platform also aligns with SOC 1/2/3 and GDPR. ISO 27001 and SOC reports are available on request with a signed NDA. <Link href="/en/security-compliance" className="text-[var(--text-brand)] hover:underline">View security documentation</Link>.
          </>
        ),
      },
      {
        q: "Where is our data stored?",
        a: (
          <>
            By default, data is stored in encrypted cloud storage on AWS, GCP, or Azure in regional data centres. For organisations with strict data residency requirements &mdash; financial institutions, government entities &mdash; full on-premises deployment is available where all data remains within your own infrastructure.
          </>
        ),
      },
      {
        q: "How long is visitor data retained?",
        a: (
          <>
            Visitor and contractor data is retained securely for 5 years by default. Custom data retention policies are available on request. The right to deletion is fully supported in compliance with GDPR and UAE PDPL requirements.
          </>
        ),
      },
      {
        q: "Is sensitive data stored on the tablet?",
        a: (
          <>
            No. The kiosk tablet processes check-in data in real time but stores nothing locally. All data syncs to the cloud immediately. If the tablet is lost or stolen, no visitor data is at risk. The device can also be remotely wiped via MDM.
          </>
        ),
      },
      {
        q: "Is Buzzin compliant with UAE data protection law?",
        a: (
          <>
            Yes. Buzzin aligns with the UAE Personal Data Protection Law (PDPL), GDPR, and KHDA safeguarding requirements. UAE Pass and ICP App integration means visitor identity is verified against UAE federal government systems &mdash; not just self-declared information.
          </>
        ),
      },
    ],
  },
  {
    category: "Integrations",
    id: "integrations",
    items: [
      {
        q: "Does Buzzin integrate with UAE Pass?",
        a: (
          <>
            Yes. UAE Pass integration is native to the platform &mdash; visitors and residents can scan their UAE Pass QR code at the kiosk for instant, government-verified identity confirmation. No additional setup required.
          </>
        ),
      },
      {
        q: "Does Buzzin integrate with Active Directory or SSO?",
        a: (
          <>
            Yes. Active Directory integration and Single Sign-On are available on request. This enables automated user synchronisation, centralised identity management, and streamlined access control for enterprise IT environments.
          </>
        ),
      },
      {
        q: "Does Buzzin integrate with access control hardware?",
        a: (
          <>
            Yes. Buzzin integrates with turnstiles, gate barriers, and ANPR camera systems to automate visitor and vehicle entry workflows. NFC card readers and badge printers are supplied directly by Buzzin.
          </>
        ),
      },
      {
        q: "Can Buzzin connect to our CRM or other systems?",
        a: (
          <>
            Yes. The Queue Management System has native Salesforce integration. For other CRM or third-party system integrations, Buzzin offers workflow customisation and third-party API integration on request. Contact the team to discuss your specific requirements.
          </>
        ),
      },
    ],
  },
  {
    category: "Support",
    id: "support",
    items: [
      {
        q: "What support do we get after go-live?",
        a: (
          <>
            SLA-backed support via phone, email, and WhatsApp. Remote troubleshooting and over-the-air updates for all platform updates and fixes. MDM-based remote access for device issues. Routine site visits for maintenance, performance checks, and hardware inspection. User training is provided during deployment and available on request afterwards.
          </>
        ),
      },
      {
        q: "What happens if our tablet stops working?",
        a: (
          <>
            Buzzin can remotely access and troubleshoot the tablet via MDM in most cases without a site visit. If hardware replacement is required, Buzzin coordinates this directly. The platform has 99.9% uptime SLA for cloud infrastructure.
          </>
        ),
      },
      {
        q: "Is there 24/7 support available?",
        a: (
          <>
            Critical support is available 24/7 via WhatsApp at +971 4 320 1265. Standard support requests are responded to within 4 business hours. SLA terms are defined per deployment and available on request.
          </>
        ),
      },
    ],
  },
  {
    category: "Pricing",
    id: "pricing",
    items: [
      {
        q: "How is Buzzin priced?",
        a: (
          <>
            Buzzin is a subscription-based platform. Pricing is based on your deployment scale &mdash; number of sites, modules required, and transaction volume. We do not publish standard pricing because every deployment is configured specifically for the client. Book a demo to receive a quote tailored to your operation.
          </>
        ),
      },
      {
        q: "Is there a minimum contract term?",
        a: (
          <>
            Standard deployments are on annual subscription terms. Multi-year agreements are available and preferred for enterprise clients &mdash; Aldar Properties and Asteco are both on 5-year exclusive agreements. Speak to the team about the terms that work for your organisation.
          </>
        ),
      },
      {
        q: "Are there additional costs for hardware?",
        a: (
          <>
            The subscription covers the software platform. Hardware &mdash; tablets, NFC readers, badge printers, kiosk stands &mdash; is priced separately and can be supplied by Buzzin or sourced independently. WhatsApp and SMS notification add-ons may also incur additional charges depending on volume.
          </>
        ),
      },
    ],
  },
]

/* ─── Page ─── */

export default function FaqPage() {
  return (
    <>
      {/* JSON-LD — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What exactly is Buzzin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Buzzin is a premises intelligence platform with nine integrated modules covering visitor check-in, contractor permits, queue management, event check-in, amenity booking, attendance tracking, safeguarding, security patrols, and parking.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to go live?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most deployments are live within days of the site assessment. One Android tablet and a stable internet connection is all you need. No IT project required.",
                },
              },
              {
                "@type": "Question",
                name: "Is Buzzin ISO 27001 certified?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Buzzin is ISO 27001 certified. The platform also aligns with SOC 1/2/3 and GDPR. Reports available on request with signed NDA.",
                },
              },
              {
                "@type": "Question",
                name: "Does Buzzin integrate with UAE Pass?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. UAE Pass integration is native to the platform. Visitors scan their UAE Pass QR code for instant government-verified identity confirmation.",
                },
              },
              {
                "@type": "Question",
                name: "Where is our data stored?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Data is stored in encrypted cloud storage on AWS, GCP, or Azure. Full on-premises deployment is available for organisations with strict data residency requirements.",
                },
              },
              {
                "@type": "Question",
                name: "How is Buzzin priced?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Buzzin is subscription-based, priced by deployment scale. We do not publish standard pricing \u2014 book a demo to receive a tailored quote.",
                },
              },
            ],
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
              { "@type": "ListItem", position: 2, name: "FAQ", item: "https://buzzin.ae/en/faq" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            <div className="mx-auto max-w-[680px] text-center">
              <SectionReveal>
                <nav className="mb-5 font-body text-[12px] text-[var(--text-muted)]">
                  <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
                  <span className="mx-1.5">/</span>
                  <span>FAQ</span>
                </nav>
              </SectionReveal>

              <SectionReveal>
                <p className="mb-5 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  &mdash; FAQ
                </p>
              </SectionReveal>

              <SectionReveal>
                <h1 className="mb-4 font-display text-[2.25rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[3.5rem]">
                  Questions we hear before every demo.
                </h1>
              </SectionReveal>

              <SectionReveal>
                <p className="mx-auto mb-7 max-w-[540px] font-body text-[17px] font-light leading-[1.75] text-[var(--text-secondary)]">
                  Everything you want to know about how Buzzin works, how long it takes to deploy, what it costs, and whether it works for your specific operation.
                </p>
              </SectionReveal>

              <SectionReveal>
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <p className="font-body text-[14px] text-[var(--text-muted)]">
                    Don&apos;t see your question?{" "}
                    <a
                      href="https://wa.me/97143201265"
                      className="font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 2 — FAQ CATEGORIES + ACCORDIONS ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr]">
              {/* Left — sticky category nav */}
              <div className="hidden lg:block">
                <FaqCategoryNav />
              </div>

              {/* Right — FAQ accordions by category */}
              <div className="flex flex-col gap-10">
                {faqData.map((cat) => (
                  <SectionReveal key={cat.id}>
                    <FaqAccordion
                      category={cat.category}
                      categoryId={cat.id}
                      items={cat.items}
                    />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — STILL HAVE QUESTIONS ━━━ */}
        <section className="bg-[var(--bg-page)] py-14 md:py-16">
          <Container>
            <div className="mx-auto max-w-[600px] text-center">
              <SectionReveal>
                <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  &mdash; Still Have Questions
                </p>
                <h2 className="mb-3 font-heading text-[2rem] font-bold text-[var(--text-primary)]">
                  We answer every question before the demo.
                </h2>
                <p className="mb-7 font-body text-[15px] font-light leading-[1.7] text-[var(--text-muted)]">
                  No question is too specific. If your procurement team has a security questionnaire, we will complete it. If your IT team has integration questions, we will answer them.
                </p>
              </SectionReveal>
            </div>

            <StaggerGrid className="mx-auto grid max-w-[800px] grid-cols-1 gap-4 md:grid-cols-3" interval={0.1}>
              {/* WhatsApp */}
              <StaggerItem>
                <a
                  href="https://wa.me/97143201265?text=Hi%2C%20I%20have%20a%20question%20about%20Buzzin%20before%20booking%20a%20demo."
                  className="flex flex-col items-center rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center transition-all duration-200 hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md"
                >
                  <MessageCircle className="mb-3 h-6 w-6 text-[#25D366]" strokeWidth={1.5} />
                  <p className="mb-1 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Chat Now</p>
                  <p className="mb-1.5 font-heading text-[14px] font-bold text-[var(--text-primary)]">WhatsApp</p>
                  <p className="font-body text-[12px] leading-[1.5] text-[var(--text-muted)]">Available 24/7 &mdash; fastest response</p>
                </a>
              </StaggerItem>

              {/* Book a Demo */}
              <StaggerItem>
                <Link
                  href="/en/book-demo"
                  className="flex flex-col items-center rounded-[14px] border-2 border-[var(--text-brand)] bg-amber-500/[0.06] p-6 text-center transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md"
                >
                  <Calendar className="mb-3 h-6 w-6 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <p className="mb-1 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Book a Demo</p>
                  <p className="mb-1.5 font-heading text-[14px] font-bold text-[var(--text-primary)]">30-minute call</p>
                  <p className="font-body text-[12px] leading-[1.5] text-[var(--text-muted)]">We answer all questions during the demo &mdash; tailored to your operation</p>
                </Link>
              </StaggerItem>

              {/* Email */}
              <StaggerItem>
                <a
                  href="mailto:info@buzzin.ae"
                  className="flex flex-col items-center rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center transition-all duration-200 hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md"
                >
                  <Mail className="mb-3 h-6 w-6 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <p className="mb-1 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Email Us</p>
                  <p className="mb-1.5 font-heading text-[14px] font-bold text-[var(--text-primary)]">info@buzzin.ae</p>
                  <p className="font-body text-[12px] leading-[1.5] text-[var(--text-muted)]">Detailed questions welcome &mdash; we respond within 4 business hours</p>
                </a>
              </StaggerItem>
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to see the answers in action?",
            subline:
              "A 30-minute demo answers every question faster than any FAQ page. We tailor it to your industry and your specific premises.",
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
