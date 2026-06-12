import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { ThankYouConversion } from "@/components/marketing/thank-you-conversion"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Thank You | Buzzin",
  description: "Thank you for your request. Our team will be in touch shortly.",
  robots: "noindex",
}

export default function ThankYouPage() {
  return (
    <>
      <ThankYouConversion />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-28 md:py-36">
          <SectionBackground
            variant="dark"
            hexGrid
            floatingElements={[
              { type: "hexagon", size: 100, x: "92%", y: "26%", delay: 0, duration: 9, color: "white" },
              { type: "hexagon", size: 70, x: "5%", y: "72%", delay: 2.5, duration: 8, color: "amber" },
            ]}
            gradientOrb={{ x: "50%", y: "35%", size: 360, color: "amber", opacity: 0.06 }}
          />

          <Container className="relative z-10">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/15">
                <CheckCircle className="h-9 w-9 text-[var(--text-brand)]" strokeWidth={1.75} />
              </span>

              <h1 className="mt-7 font-display text-[2rem] font-extrabold leading-[1.1] text-white md:text-[2.75rem]">
                Thank you &mdash; we&rsquo;ve received your request.
              </h1>

              <p className="mt-5 max-w-md font-body text-[16px] font-light leading-relaxed text-white/70">
                Our team will contact you within 4 business hours to arrange your demo. If you&rsquo;d like to speak with us sooner, message us directly on WhatsApp.
              </p>

              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/97143201265?text=Hi%2C%20I%20just%20submitted%20a%20request%20on%20buzzin.ae%20and%20would%20like%20to%20talk."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#25D366] px-7 font-heading text-[15px] font-semibold text-white transition-colors hover:bg-[#1EBE58]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp us now
                </a>
                <Link
                  href="/en"
                  className="inline-flex h-12 items-center rounded-lg border border-white/15 px-7 font-heading text-[15px] font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
