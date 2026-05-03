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
  title: "Cookies Policy",
  description:
    "How buzzin.ae uses cookies and similar technologies, how to manage them, and which categories run on the site.",
}

const sections = [
  {
    id: "what",
    title: "1. What cookies are",
    body: [
      "Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage, pixel tags, and SDKs. We use the term \u201ccookies\u201d to cover all of them.",
    ],
  },
  {
    id: "why",
    title: "2. Why we use them",
    body: [
      "We use cookies to keep buzzin.ae secure, remember your preferences (such as language and theme), measure how the site is used, and \u2014 with your consent \u2014 to power marketing measurement.",
    ],
  },
  {
    id: "categories",
    title: "3. Cookie categories on buzzin.ae",
    body: [],
  },
  {
    id: "manage",
    title: "4. How to manage cookies",
    body: [
      "Most browsers let you block or delete cookies. Doing so may affect site functionality, particularly the language switcher and dark mode preference.",
      "You can also manage cookies via your browser's privacy controls or, where shown, via our cookie consent banner.",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-party services",
    body: [
      "Some pages embed content or scripts from trusted third parties (for example, scheduling on the Book a Demo page). Those services may set their own cookies governed by their respective privacy notices.",
    ],
  },
  {
    id: "changes",
    title: "6. Changes to this policy",
    body: [
      "If we materially change how we use cookies on buzzin.ae, we will update this page and refresh the \u201cLast updated\u201d date below.",
    ],
  },
  {
    id: "contact",
    title: "7. Contact",
    body: [
      "Questions about cookies on buzzin.ae: hello@buzzin.ae or +971 4 320 1265.",
    ],
  },
]

const cookieTable = [
  {
    category: "Strictly necessary",
    purpose:
      "Authenticate sessions, remember your locale and theme preference, and protect against cross-site request forgery.",
    consent: "Always on",
  },
  {
    category: "Performance & analytics",
    purpose:
      "Aggregated metrics about which pages are visited, how long sessions last, and where users come from \u2014 used to improve the site.",
    consent: "Optional",
  },
  {
    category: "Marketing",
    purpose:
      "Measure the effectiveness of demand-generation campaigns and tailor messaging to enterprise audiences across the GCC.",
    consent: "Optional",
  },
]

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Cookies Policy"
          description="How buzzin.ae uses cookies and similar technologies \u2014 and how you can manage them."
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

                      {s.id === "categories" && (
                        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border-default)]">
                          <table className="w-full text-left text-body-sm">
                            <thead className="bg-[var(--bg-surface-sunken)]">
                              <tr>
                                <th className="px-5 py-3 font-heading text-body-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                                  Category
                                </th>
                                <th className="px-5 py-3 font-heading text-body-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                                  Purpose
                                </th>
                                <th className="px-5 py-3 font-heading text-body-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                                  Your choice
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--border-subtle)]">
                              {cookieTable.map((row) => (
                                <tr key={row.category}>
                                  <td className="px-5 py-4 align-top font-heading font-semibold text-[var(--text-primary)]">
                                    {row.category}
                                  </td>
                                  <td className="px-5 py-4 align-top text-[var(--text-secondary)]">
                                    {row.purpose}
                                  </td>
                                  <td className="px-5 py-4 align-top text-[var(--text-secondary)]">
                                    {row.consent}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
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
