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
  title: "Terms of Service",
  description:
    "The terms governing use of buzzin.ae and the Buzzin premises intelligence platform.",
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    body: [
      "By accessing buzzin.ae or using the Buzzin platform, you agree to these Terms of Service. If you are using the platform on behalf of an organisation, you confirm that you have authority to bind that organisation.",
      "Enterprise customers are additionally bound by their signed Master Services Agreement, which controls in case of any conflict.",
    ],
  },
  {
    id: "service",
    title: "2. Description of service",
    body: [
      "Buzzin provides a premises intelligence platform comprising visitor management, work permits, queue management, event management, attendance, booking, safeguarding, patrolling, and related modules.",
      "We may add, modify, or retire features over time. Material changes that reduce contracted functionality will be communicated in advance to enterprise customers.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts and access",
    body: [
      "You are responsible for maintaining the confidentiality of credentials issued to you and for all activity under your account.",
      "Customer administrators are responsible for provisioning and de-provisioning users in accordance with their internal security policies.",
    ],
  },
  {
    id: "use",
    title: "4. Acceptable use",
    body: [
      "You will not use the platform to violate any applicable law, infringe any third-party right, or interfere with the integrity or performance of the service.",
      "You will not attempt to reverse engineer, decompile, or extract source code from the platform, except to the extent permitted by mandatory law.",
    ],
  },
  {
    id: "data",
    title: "5. Customer data and ownership",
    body: [
      "Customers retain ownership of all data they or their users submit to the platform. Buzzin processes customer data only as instructed by the customer and as permitted by these terms and the applicable agreement.",
      "Buzzin may use aggregated, anonymised statistics derived from platform usage to improve the service.",
    ],
  },
  {
    id: "fees",
    title: "6. Fees and billing",
    body: [
      "Fees are set out in the applicable order form. Unless otherwise agreed, subscriptions auto-renew on each anniversary at the then-current pricing.",
      "Late payments accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law.",
    ],
  },
  {
    id: "ip",
    title: "7. Intellectual property",
    body: [
      "The Buzzin platform, brand, designs, and documentation are the exclusive intellectual property of Buzzin FZCO and its licensors. No rights are granted other than the limited right to use the service per these terms.",
    ],
  },
  {
    id: "warranty",
    title: "8. Warranties and disclaimers",
    body: [
      "Buzzin warrants that the platform will perform substantially in accordance with the documentation. Beyond the express warranties stated, the platform is provided \"as is\" to the maximum extent permitted by law.",
    ],
  },
  {
    id: "liability",
    title: "9. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, neither party will be liable for indirect, incidental, special, or consequential damages, or for loss of profits, revenue, or data.",
      "Each party's aggregate liability under these terms will not exceed the fees paid or payable by the customer in the twelve months preceding the event giving rise to the claim.",
    ],
  },
  {
    id: "termination",
    title: "10. Termination",
    body: [
      "Either party may terminate for material breach not cured within 30 days of written notice. Upon termination, customer access ends and Buzzin will make customer data available for export for a defined period set out in the applicable agreement.",
    ],
  },
  {
    id: "law",
    title: "11. Governing law",
    body: [
      "These terms are governed by the laws of the United Arab Emirates and the federal courts of the UAE, without regard to conflict-of-laws principles, unless otherwise specified in a signed customer agreement.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to these terms",
    body: [
      "We may update these terms from time to time. We will post the updated version on buzzin.ae and, where the change is material, notify enterprise customers in advance.",
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Terms of Service"
          description="The terms governing use of buzzin.ae and the Buzzin premises intelligence platform."
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

        <StrategicCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
