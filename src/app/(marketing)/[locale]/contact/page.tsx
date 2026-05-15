import type { Metadata } from "next"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { ContactForm } from "@/components/marketing/contact-form"
import {
  ContactHeroAnimated,
  ContactCardsAnimated,
  ContactCardItem,
  ContactAddressAnimated,
  ContactFormSection,
} from "@/components/marketing/contact-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Contact Us | Buzzin — Premises Intelligence Platform",
  description:
    "Get in touch with the Buzzin team. Support, partnerships, press, or general enquiries. Call +971 4 3201265 or email info@buzzin.ae. We respond within 4 business hours.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ━━━ TOP SECTION — Contact methods ━━━ */}
        <section className="bg-white pt-16">
          <Container>
            <div className="py-16 md:py-20">
              <ContactHeroAnimated>
                <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-brand)]">
                  &mdash; Contact Us
                </p>

                <h1 className="mt-4 font-display text-[44px] font-extrabold leading-[1.08] tracking-[-1.5px] text-[#1E2547]">
                  We are here whenever you need&nbsp;us.
                </h1>

                <p className="mt-5 mb-12 max-w-[480px] font-body text-[16px] font-light leading-relaxed text-[var(--text-tertiary)]">
                  For demo requests, use our{" "}
                  <Link href="/en/book-demo" className="font-medium text-[#F5A623] hover:underline">
                    booking page
                  </Link>
                  . For everything else — support, partnerships, press, or general questions — reach us here.
                </p>
              </ContactHeroAnimated>

              {/* Three contact cards — staggered */}
              <ContactCardsAnimated>
                <ContactCardItem>
                  <a
                    href="tel:+97143201265"
                    className="group block rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-white p-6 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.4)] hover:-translate-y-[2px]"
                  >
                    <Phone className="h-6 w-6 text-[#F5A623]" strokeWidth={1.5} />
                    <p className="mt-4 font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-[#F5A623]">
                      Call Us
                    </p>
                    <p className="mt-2 font-heading text-[18px] font-bold text-[#1E2547]">
                      +971 4 3201265
                    </p>
                    <p className="mt-1 font-body text-[12px] text-[var(--text-muted)]">
                      Sunday to Thursday, 9am – 6pm GST
                    </p>
                  </a>
                </ContactCardItem>

                <ContactCardItem>
                  <a
                    href="https://wa.me/97143201265?text=Hi%20Buzzin%20team%2C%20I%20have%20a%20question%20about%20your%20platform."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-white p-6 transition-all duration-[220ms] hover:border-[rgba(37,211,102,0.4)] hover:-translate-y-[2px]"
                  >
                    <MessageCircle className="h-6 w-6 text-[#25D366]" strokeWidth={1.5} />
                    <p className="mt-4 font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-[#F5A623]">
                      WhatsApp
                    </p>
                    <p className="mt-2 font-heading text-[18px] font-bold text-[#1E2547]">
                      +971 43 201265
                    </p>
                    <p className="mt-1 font-body text-[12px] text-[var(--text-muted)]">
                      Available 24 hours, 7 days a week
                    </p>
                  </a>
                </ContactCardItem>

                <ContactCardItem>
                  <a
                    href="mailto:info@buzzin.ae"
                    className="group block rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-white p-6 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.4)] hover:-translate-y-[2px]"
                  >
                    <Mail className="h-6 w-6 text-[#F5A623]" strokeWidth={1.5} />
                    <p className="mt-4 font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-[#F5A623]">
                      Email Us
                    </p>
                    <p className="mt-2 font-heading text-[18px] font-bold text-[#1E2547]">
                      info@buzzin.ae
                    </p>
                    <p className="mt-1 font-body text-[12px] text-[var(--text-muted)]">
                      We respond within 4 business hours
                    </p>
                  </a>
                </ContactCardItem>
              </ContactCardsAnimated>

              {/* Divider + address */}
              <hr className="my-10 border-[var(--border-default)]" />
              <ContactAddressAnimated>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--text-muted)]" strokeWidth={1.5} />
                  <p className="font-body text-[13px] text-[var(--text-muted)]">
                    Dtec, Dubai Silicon Oasis, Dubai, UAE
                  </p>
                </div>
              </ContactAddressAnimated>
            </div>
          </Container>
        </section>

        {/* ━━━ BOTTOM SECTION — The form ━━━ */}
        <section className="bg-[var(--bg-canvas)]">
          <Container>
            <ContactFormSection
              left={
                <>
                  <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-brand)]">
                    Send Us a Message
                  </p>

                  <h2 className="mt-4 font-display text-[32px] font-extrabold leading-[1.15] text-[#1E2547]">
                    New client, existing client, or just curious — we read every&nbsp;message.
                  </h2>

                  <p className="mt-5 mb-7 font-body text-[15px] font-light leading-[1.7] text-[var(--text-tertiary)]">
                    Use this form for support requests, partnership enquiries, press and media, billing questions, or anything else. If you are looking to book a product demo, use our dedicated booking page instead.
                  </p>

                  <Link
                    href="/en/book-demo"
                    className="inline-block font-heading text-[13px] font-bold text-[#F5A623] transition-colors hover:text-[#E09015]"
                  >
                    &rarr; Book a free demo instead
                  </Link>

                  <hr className="my-8 border-[var(--border-default)]" />

                  <div className="rounded-xl border border-[rgba(245,166,35,0.25)] bg-white p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-[#F5A623]" />
                      <p className="font-body text-[13px] text-[var(--text-secondary)]">
                        Support requests: acknowledged within 2 hours
                      </p>
                    </div>
                    <div className="mt-3 flex items-start gap-3">
                      <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-[#F5A623]" />
                      <p className="font-body text-[13px] text-[var(--text-secondary)]">
                        Critical issues: 24/7 emergency line available
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 font-body text-[11px] text-[var(--text-muted)]">
                    Existing Buzzin clients receive priority support through your dedicated account manager.
                  </p>
                </>
              }
              right={
                <div className="rounded-2xl border-[1.5px] border-[var(--border-default)] bg-white p-8 shadow-lg">
                  <ContactForm />
                </div>
              }
            />
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
