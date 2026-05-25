import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import {
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Sitemap | Buzzin FZCO",
  description:
    "Complete sitemap for buzzin.ae — all pages, modules, and industry sections.",
  robots: "noindex",
}

/* ─── Style constants ─── */

const sectionHeading =
  "mb-3.5 border-b-2 border-amber-500/20 pb-2.5 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-brand)]"

const subHeading =
  "mt-1 mb-1.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]"

const linkRow =
  "font-body text-[14px] text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-brand)]"

const mutedRow =
  "font-body text-[14px] text-[var(--text-muted)]"

const newPill =
  "ml-1.5 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-heading text-[8px] font-bold uppercase tracking-wide text-[var(--text-brand)]"

const soonPill =
  "ml-1.5 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-heading text-[8px] font-bold uppercase tracking-wide text-emerald-600"

export default function SitemapPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--bg-page)] pt-24 pb-20">
        <Container>
          <div className="mx-auto max-w-[1100px]">
            {/* Breadcrumb */}
            <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
              <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
              <span className="mx-1.5">/</span>
              <span>Sitemap</span>
            </nav>

            {/* Page header */}
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Sitemap
              </p>
              <h1 className="mt-3 mb-3 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[3rem]">
                Everything on buzzin.ae
              </h1>
              <p className="mb-12 max-w-[480px] font-body text-[16px] font-light leading-[1.7] text-[var(--text-muted)]">
                A complete map of all pages, modules, and sections on the Buzzin platform website.
              </p>
            </VmsSectionReveal>

            {/* Four-column grid */}
            <VmsStaggerGrid
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
              interval={0.08}
            >
              {/* COLUMN 1 — MAIN */}
              <VmsStaggerItem>
                <p className={sectionHeading}>Main</p>
                <div className="flex flex-col gap-2">
                  <Link href="/en" className={linkRow}>Homepage</Link>
                  <Link href="/en/why-buzzin" className={linkRow}>Why Buzzin</Link>
                  <Link href="/en/about" className={linkRow}>About</Link>
                  <Link href="/en/security-compliance" className={linkRow}>Security &amp; Compliance</Link>
                  <Link href="/en/book-demo" className={linkRow}>Book a Demo</Link>
                  <Link href="/en/contact" className={linkRow}>Contact</Link>
                  <Link href="/en/faq" className={linkRow}>FAQ</Link>
                </div>
              </VmsStaggerItem>

              {/* COLUMN 2 — PLATFORM */}
              <VmsStaggerItem>
                <p className={sectionHeading}>Platform</p>

                <p className={subHeading}>Core Modules</p>
                <div className="flex flex-col gap-2">
                  <Link href="/en/platform" className={linkRow}>Platform Overview</Link>
                  <Link href="/en/platform/visitor-management-system" className={linkRow}>Visitor Management</Link>
                  <Link href="/en/platform/work-permit-system" className={linkRow}>Work Permit System</Link>
                  <Link href="/en/platform/event-management" className={linkRow}>Event Management</Link>
                  <Link href="/en/platform/attendance-management" className={linkRow}>Attendance Management</Link>
                </div>

                <p className={`${subHeading} mt-3.5`}>New Modules</p>
                <div className="flex flex-col gap-2">
                  <Link href="/en/platform/queue-management" className={linkRow}>
                    Queue Management
                    <span className={newPill}>New</span>
                  </Link>
                  <Link href="/en/platform/booking-management" className={linkRow}>
                    Booking Management
                    <span className={newPill}>New</span>
                  </Link>
                  <Link href="/en/platform/safeguarding" className={linkRow}>
                    Safeguarding System
                    <span className={newPill}>New</span>
                  </Link>
                </div>

                <p className={`${subHeading} mt-3.5`}>Coming Soon</p>
                <div className="flex flex-col gap-2">
                  <Link href="/en/platform/patrolling" className={linkRow}>
                    Patrolling System
                    <span className={soonPill}>Soon</span>
                  </Link>
                  <Link href="/en/platform/key-management" className={linkRow}>
                    Key Management
                    <span className={soonPill}>Soon</span>
                  </Link>
                  <Link href="/en/platform/parking-management" className={linkRow}>
                    Parking Management
                    <span className={soonPill}>Soon</span>
                  </Link>
                </div>
              </VmsStaggerItem>

              {/* COLUMN 3 — INDUSTRIES */}
              <VmsStaggerItem>
                <p className={sectionHeading}>Industries</p>
                <div className="flex flex-col gap-2">
                  <Link href="/en/industries" className={linkRow}>Industries Overview</Link>
                  <Link href="/en/industries/residential-real-estate" className={linkRow}>Residential &amp; Real Estate</Link>
                  <Link href="/en/industries/hospitality" className={linkRow}>Hospitality</Link>
                  <Link href="/en/industries/education" className={linkRow}>Education</Link>
                </div>
              </VmsStaggerItem>

              {/* COLUMN 4 — LEGAL & OTHER */}
              <VmsStaggerItem>
                <p className={sectionHeading}>Legal &amp; Other</p>
                <div className="flex flex-col gap-2">
                  <Link href="/en/privacy-policy" className={linkRow}>Privacy Policy</Link>
                  <Link href="/en/terms-of-service" className={linkRow}>Terms of Service</Link>
                  <span className={mutedRow}>Sitemap (this page)</span>
                </div>

                <p className={`${subHeading} mt-3.5`}>XML Sitemap</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[13px] text-[var(--text-brand)] hover:underline"
                  >
                    sitemap.xml
                  </a>
                </div>
              </VmsStaggerItem>
            </VmsStaggerGrid>

            {/* Bottom info bar */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[var(--bg-canvas)] px-6 py-4">
              <p className="font-body text-[13px] text-[var(--text-muted)]">
                buzzin.ae &middot; Dtec, Dubai Silicon Oasis, Dubai, UAE &middot; info@buzzin.ae
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/en/book-demo"
                  className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
                >
                  Book a Demo &rarr;
                </Link>
                <Link
                  href="/en/contact"
                  className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
                >
                  Contact Us &rarr;
                </Link>
                <Link
                  href="/en/privacy-policy"
                  className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
                >
                  Privacy Policy &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
