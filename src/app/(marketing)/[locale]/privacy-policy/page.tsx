import type { Metadata } from "next"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { PageHero } from "@/components/marketing/page-hero"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Buzzin FZCO collects, processes, stores, and protects personal data across its premises intelligence platform.",
}

const sections = [
  {
    id: "controller",
    title: "1. Data controller",
    body: [
      "Buzzin FZCO (\"Buzzin\", \"we\", \"us\") is the data controller for personal data processed through buzzin.ae and the Buzzin platform unless we are acting as a processor on behalf of an enterprise customer.",
      "Registered address: Dtec, Dubai Silicon Oasis, Dubai, United Arab Emirates. Contact: hello@buzzin.ae \u00b7 +971 4 320 1265.",
    ],
  },
  {
    id: "data",
    title: "2. Information we collect",
    body: [
      "Account and contact data: name, business email, phone number, organisation, role, and country.",
      "Premises data captured by our software on behalf of customers: visitor names, ID document references, photos, host details, vehicle details, badge IDs, and timestamps for entry/exit, permits, queue tokens, attendance, bookings, patrols, and events.",
      "Technical data: IP address, browser type, device fingerprint, operating system, locale, referring URL, and pages viewed on buzzin.ae.",
      "Communication data: demo enquiries, WhatsApp conversations initiated from our site, and support tickets you raise with us.",
    ],
  },
  {
    id: "use",
    title: "3. How we use your data",
    body: [
      "Provide the platform, including authenticating users, issuing access credentials, and operating the modules our customers subscribe to.",
      "Respond to demo requests, sales enquiries, and customer support, and manage the related contractual relationship.",
      "Improve our products, conduct analytics, prevent fraud, and meet regulatory and contractual obligations across the GCC.",
      "Send service announcements, security alerts, and \u2014 where permitted \u2014 occasional marketing messages with a clear opt-out.",
    ],
  },
  {
    id: "lawful",
    title: "4. Lawful basis",
    body: [
      "We process personal data on the basis of contract performance, legitimate interests (e.g. operating a B2B platform), legal obligations (e.g. UAE data and security regulations), and consent where required (e.g. marketing communications).",
      "Where we act as a processor for an enterprise customer, the customer determines the lawful basis and purpose; please contact them directly to exercise rights related to that data.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing and disclosure",
    body: [
      "We share personal data with vetted infrastructure providers (cloud hosting, identity verification, communications), customer-authorised integrations such as UAE Pass, and competent authorities where required by law.",
      "We do not sell personal data. All vendors are bound by written agreements covering security, confidentiality, and processing scope.",
    ],
  },
  {
    id: "retention",
    title: "6. Retention",
    body: [
      "Premises data is retained for the period configured by the customer in their tenant, subject to applicable regulatory minimums (for example, audit, KHDA, or building safety requirements).",
      "Marketing and contact data is retained for as long as you remain an active contact and for a reasonable period thereafter, unless you ask us to delete it.",
    ],
  },
  {
    id: "transfers",
    title: "7. International transfers",
    body: [
      "Buzzin operates primarily on infrastructure hosted within the UAE and the wider GCC. Where data is transferred outside the region, we apply contractual safeguards aligned with GDPR adequacy expectations and customer-specific data residency commitments, including on-prem deployments where required.",
    ],
  },
  {
    id: "rights",
    title: "8. Your rights",
    body: [
      "Subject to local law, you have the right to access, correct, delete, port, restrict, or object to processing of your personal data, and to withdraw consent at any time.",
      "To exercise your rights, email hello@buzzin.ae from the address on file. We respond within 30 days.",
    ],
  },
  {
    id: "security",
    title: "9. Security",
    body: [
      "Buzzin maintains an information security programme aligned with ISO 27001 and SOC 1/2/3 expectations: encrypted transport, encryption at rest, role-based access control, audit logging, vendor risk management, and continuous monitoring.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact and complaints",
    body: [
      "Privacy questions or complaints: hello@buzzin.ae or +971 4 320 1265. You may also raise concerns with the relevant supervisory authority in your jurisdiction.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description="How Buzzin FZCO collects, processes, stores, and protects personal data across the premises intelligence platform."
        />

        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <AnimateOnScroll>
                <p className="font-heading text-body-sm uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                  Last updated: 1 May 2026
                </p>
              </AnimateOnScroll>

              <div className="mt-10 space-y-12">
                {sections.map((s, i) => (
                  <AnimateOnScroll key={s.id} delay={Math.min(i * 0.04, 0.24)}>
                    <article id={s.id} className="scroll-mt-28">
                      <h2 className="font-heading text-heading-lg font-semibold text-[var(--text-primary)] md:text-heading-xl">
                        {s.title}
                      </h2>
                      <div className="mt-4 space-y-4 text-body-md leading-relaxed text-[var(--text-secondary)]">
                        {s.body.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </article>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <StrategicCta
          headline="Questions about how we handle data?"
          subline="Speak with a Buzzin specialist who can walk through our security, residency, and compliance posture in detail."
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
