import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { PageHero } from "@/components/marketing/page-hero"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"
import { FaqAccordion } from "@/components/marketing/faq-accordion"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about the Buzzin premises intelligence platform \u2014 deployment, pricing, security, integrations, and more.",
}

export const faqCategories = [
  {
    category: "Platform & modules",
    items: [
      {
        q: "What does \u2018premises intelligence\u2019 actually mean?",
        a: "Premises intelligence is the practice of knowing, in real time, exactly who is on your premises, why they are there, and what they are authorised to do \u2014 and having a tamper-proof record of all of it. Buzzin turns that from a manual, paper-based operation into a connected digital platform across visitor management, permits, queues, events, attendance, booking, safeguarding, and patrolling.",
      },
      {
        q: "How many modules does Buzzin include?",
        a: "Buzzin currently offers nine integrated modules: Visitor Management (VMS), Work Permit, Queue Management (QMS), Event Management, Attendance, Booking, Safeguarding, Patrolling, and NFC Access. All share a single audit log and data layer \u2014 there are no silos between them.",
      },
      {
        q: "Do I have to use all modules, or can I start with one?",
        a: "You can start with a single module and expand over time. Most customers start with Visitor Management or Work Permit and add modules as operational value is proven. There is no forced bundling.",
      },
      {
        q: "Is there a mobile app for visitors or guards?",
        a: "Yes. Guards use the Buzzin Patrol app on Android to scan NFC checkpoints and complete patrol rounds. Visitors can pre-register via a mobile browser link \u2014 no app download required. Self-service kiosks are available for on-site check-in.",
      },
    ],
  },
  {
    category: "Deployment & setup",
    items: [
      {
        q: "How long does it take to go live?",
        a: "Most organisations are fully live within days of hardware delivery \u2014 not months. We handle configuration, staff training, and kiosk setup on-site. The record for a single-site VMS deployment is two hours from unboxing to first visitor.",
      },
      {
        q: "What hardware do I need?",
        a: "For Visitor Management, the minimum setup is one Android tablet (10-inch, NFC-capable) and a receipt printer for visitor badges. For larger deployments, we supply turnstile integrations, guard NFC tags, and kiosk enclosures. Buzzin is also compatible with most existing gate hardware.",
      },
      {
        q: "Is Buzzin cloud-hosted or on-premises?",
        a: "By default, Buzzin is cloud-hosted on UAE and GCC regional infrastructure. For customers with sovereign data or compliance requirements \u2014 government entities, financial institutions, international schools with KHDA mandates \u2014 we offer a fully on-premises deployment within your own data centre.",
      },
      {
        q: "Can Buzzin integrate with our existing access control system?",
        a: "Yes. Buzzin integrates with major access control systems including Gallagher, Lenel, CCURE, and custom MQTT or Wiegand-based systems. Integration scope is confirmed during the pre-sales discovery call.",
      },
    ],
  },
  {
    category: "Security & compliance",
    items: [
      {
        q: "Is Buzzin ISO 27001 certified?",
        a: "Buzzin operates an information security management system aligned with ISO/IEC 27001. Evidence documentation is available under NDA for enterprise customers conducting due diligence. Contact hello@buzzin.ae to request the security pack.",
      },
      {
        q: "How does Buzzin handle UAE Pass and Emirates ID?",
        a: "Buzzin has a pre-built integration with UAE Pass for identity verification at the point of check-in. Emirates ID can be scanned at the kiosk to auto-populate visitor details. No third-party IdP or custom development is required.",
      },
      {
        q: "Is Buzzin compliant with KHDA requirements for schools?",
        a: "Yes. Our Safeguarding module is specifically designed for KHDA compliance: authorised guardian verification, photo matching, relationship confirmation, and a full audit trail that satisfies KHDA inspection requirements. Several Buzzin schools have been through KHDA inspections with our audit logs as evidence.",
      },
      {
        q: "What happens to visitor data after a visit is complete?",
        a: "Visitor records are retained for the period configured by your administrator, subject to any regulatory minimums that apply in your jurisdiction. You can export or delete records at any time. Buzzin does not share visitor data with any third party.",
      },
    ],
  },
  {
    category: "Pricing & contracts",
    items: [
      {
        q: "How is Buzzin priced?",
        a: "Buzzin is priced as an annual SaaS subscription, with pricing based on the number of active modules, sites, and transaction volume. We do not publish pricing publicly because enterprise deployments vary significantly \u2014 book a demo and we will provide a proposal within 24 hours.",
      },
      {
        q: "Is there a minimum contract term?",
        a: "Our standard contracts are annual. Multi-year agreements are available and include fixed pricing for the term. Our exclusive partnership with Aldar and Asteco runs over multiple years.",
      },
      {
        q: "Do you offer a pilot or proof of concept before a full contract?",
        a: "Yes. For enterprise accounts, we can structure a paid pilot across a defined set of sites before full rollout. The pilot scope, success criteria, and commercial terms are agreed upfront so there are no surprises.",
      },
      {
        q: "What is included in the subscription fee?",
        a: "The subscription covers platform access, all module updates, onboarding support, and SLA-backed support via phone, email, and WhatsApp. Hardware (tablets, kiosks, NFC tags) is priced separately.",
      },
    ],
  },
  {
    category: "Support & partnership",
    items: [
      {
        q: "What does support look like after go-live?",
        a: "All enterprise customers have a named Customer Success Manager and access to support via phone, email, and WhatsApp. Response times are governed by your SLA \u2014 critical issues are acknowledged within one hour during business hours. We also conduct quarterly strategic reviews to ensure the platform is growing with your operation.",
      },
      {
        q: "How often is the platform updated?",
        a: "Buzzin updates are delivered over the air \u2014 no downtime, no manual upgrades, no IT involvement. We release new features and improvements regularly. Enterprise customers receive advance notice of any changes that affect workflows.",
      },
      {
        q: "Do you offer training for our staff?",
        a: "Yes. On-site training for reception, security, and administrative teams is included in the onboarding package. We also provide video training resources and a knowledge base accessible to all platform users.",
      },
      {
        q: "Can we customise the platform for our branding?",
        a: "Yes. The visitor-facing screens, printed visitor badges, invitation emails, and kiosk interface can all be branded with your logo, colours, and custom messaging. This is included in the enterprise tier.",
      },
    ],
  },
  {
    category: "Industries",
    items: [
      {
        q: "Which industries does Buzzin serve?",
        a: "Buzzin is deployed across residential real estate, hospitality (hotels and luxury resorts), education (international schools and universities), corporate offices, financial district buildings, and government-affiliated institutions. Each vertical has specific module configurations and compliance frameworks supported out of the box.",
      },
      {
        q: "We operate across multiple countries. Can Buzzin handle that?",
        a: "Yes. Buzzin is currently deployed across UAE, Saudi Arabia, and Lebanon. The platform supports multi-jurisdiction deployments with per-region data residency, Arabic and English interfaces, and country-specific compliance frameworks managed from a single admin console.",
      },
      {
        q: "Do you have references in our industry?",
        a: "Almost certainly. Our client base includes Atlantis The Palm, Fairmont, Kempinski, and Grand Hyatt in hospitality; Aldar, Asteco, Azizi, and Deyaar in real estate; Taaleem, Brighton College, GEMS, and Bloom World Academy in education; and DIFC and Masdar City in financial and government. Reference calls can be arranged as part of the evaluation process.",
      },
      {
        q: "We are a smaller property with a tight budget. Is Buzzin for us?",
        a: "Buzzin is primarily designed for enterprise-scale operations with multiple sites or high visitor volumes. That said, single-site deployments are supported. Speak to us about what your operation looks like and we will be honest about fit and pricing.",
      },
    ],
  },
]

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Answers to the questions your team will ask before signing."
          description="Six categories covering the platform, deployment, security, pricing, support, and industries. If your question is not here, email hello@buzzin.ae."
        />

        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <StaggerOnScroll className="space-y-12" interval={0.06}>
                {faqCategories.map((cat, i) => (
                  <AnimateOnScroll key={cat.category} delay={i * 0.04}>
                    <div>
                      <h2 className="mb-5 font-heading text-heading-lg font-bold text-[var(--text-primary)] md:text-heading-xl">
                        {cat.category}
                      </h2>
                      <FaqAccordion items={cat.items} />
                    </div>
                  </AnimateOnScroll>
                ))}
              </StaggerOnScroll>

              <AnimateOnScroll className="mt-14 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-8 text-center" delay={0.1}>
                <p className="font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
                  Still have a question?
                </p>
                <p className="mt-2 text-body-md text-[var(--text-secondary)]">
                  Email{" "}
                  <a href="mailto:hello@buzzin.ae" className="text-[var(--text-brand)] underline underline-offset-4">
                    hello@buzzin.ae
                  </a>{" "}
                  or{" "}
                  <Link href="/contact" className="text-[var(--text-brand)] underline underline-offset-4">
                    use the contact page
                  </Link>
                  . We reply within four business hours.
                </p>
              </AnimateOnScroll>
            </div>
          </Container>
        </section>

        <StrategicCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
