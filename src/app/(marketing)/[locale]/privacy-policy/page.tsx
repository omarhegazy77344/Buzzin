import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Building2 } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Privacy Policy | Buzzin FZCO",
  description:
    "Privacy policy for Buzzin FZCO. How we collect, store, and protect your data in compliance with GDPR and UAE PDPL.",
  robots: "noindex",
}

const tocItems = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "data-collected", label: "What Data We Collect" },
  { id: "data-use", label: "How We Use Your Data" },
  { id: "data-storage", label: "Data Storage & Retention" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "your-rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact Us" },
]

const h2Class =
  "mt-10 mb-3 border-t border-[var(--border-subtle)] pt-8 font-heading text-[1.25rem] font-bold text-[var(--text-primary)]"
const pClass = "mb-3.5 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]"
const ulClass = "mb-3.5 ml-5 list-disc space-y-1.5 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]"
const strongClass = "font-semibold text-[var(--text-primary)]"
const linkClass = "text-[var(--text-brand)] hover:underline"

export default function PrivacyPolicyPage() {
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
              <span>Privacy Policy</span>
            </nav>

            {/* Page header */}
            <header className="mb-12">
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Legal
              </p>
              <h1 className="mt-3 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[3rem]">
                Privacy Policy
              </h1>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                <span className="flex items-center gap-2 font-body text-[13px] text-[var(--text-muted)]">
                  <Calendar className="h-[14px] w-[14px] text-[var(--text-brand)]" strokeWidth={1.75} />
                  Last updated: December 2025
                </span>
                <span className="flex items-center gap-2 font-body text-[13px] text-[var(--text-muted)]">
                  <Building2 className="h-[14px] w-[14px] text-[var(--text-brand)]" strokeWidth={1.75} />
                  Buzzin FZCO &middot; Dtec, Dubai Silicon Oasis, Dubai, UAE
                </span>
              </div>
            </header>

            {/* Two column */}
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 lg:items-start">
              {/* Left: Table of Contents */}
              <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-60">
                <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5">
                  <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Contents
                  </p>
                  <nav className="flex flex-col gap-0.5">
                    {tocItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        className="rounded-md px-2.5 py-2 font-body text-[13px] text-[var(--text-muted)] transition-all duration-200 hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Right: Content */}
              <div className="max-w-[720px] flex-1">
                {/* Intro */}
                <p className={pClass}>
                  This Privacy Policy explains how Buzzin FZCO (&ldquo;Buzzin&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, and protects personal data when you use our platform and related services. We are committed to protecting your privacy and handling your data in compliance with applicable laws including the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and the General Data Protection Regulation (GDPR) where applicable.
                </p>

                {/* Section 1 — Who We Are */}
                <section id="who-we-are">
                  <h2 className={h2Class}>1. Who We Are</h2>
                  <p className={pClass}>
                    Buzzin FZCO is a free zone company registered in Dubai, UAE, headquartered at Dtec, Dubai Silicon Oasis, Dubai, United Arab Emirates.
                  </p>
                  <p className={pClass}>
                    We operate a cloud-based platform providing visitor management, work permit management, queue management, event management, booking management, attendance tracking, and safeguarding systems to organisations across the UAE and GCC.
                  </p>
                  <p className={pClass}>
                    For questions about this policy or how we handle your data, contact us at:
                  </p>
                  <ul className={ulClass}>
                    <li>
                      <span className={strongClass}>Email:</span>{" "}
                      <a href="mailto:info@buzzin.ae" className={linkClass}>info@buzzin.ae</a>
                    </li>
                    <li>
                      <span className={strongClass}>Phone:</span>{" "}
                      <a href="tel:+97143201265" className={linkClass}>+971 4 3201265</a>
                    </li>
                    <li>
                      <span className={strongClass}>Address:</span> Dtec, Dubai Silicon Oasis, Dubai, UAE
                    </li>
                  </ul>
                </section>

                {/* Section 2 — What Data We Collect */}
                <section id="data-collected">
                  <h2 className={h2Class}>2. What Data We Collect</h2>
                  <p className={pClass}>
                    We collect and process the following categories of personal data:
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Visitor and Contractor Data (collected via the Buzzin platform on behalf of our clients):</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Full name</li>
                    <li>National ID, Emirates ID, passport, or driving licence number</li>
                    <li>Photograph (captured at check-in)</li>
                    <li>Contact details (phone number, email address where provided)</li>
                    <li>Vehicle registration number (where applicable)</li>
                    <li>Purpose of visit and host details</li>
                    <li>Entry and exit timestamps</li>
                    <li>Location of check-in point</li>
                    <li>
                      Biometric verification data (where UAE Pass or ICP App is used; verification result only, biometric data not stored by Buzzin)
                    </li>
                  </ul>

                  <p className={pClass}>
                    <span className={strongClass}>Client Account Data (collected when organisations sign up and use Buzzin):</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Organisation name and address</li>
                    <li>Contact person name, email, and phone number</li>
                    <li>Billing and payment information</li>
                    <li>User account credentials (email and encrypted password)</li>
                    <li>Usage logs and system activity</li>
                  </ul>

                  <p className={pClass}>
                    <span className={strongClass}>Website Visitor Data (collected via buzzin.ae):</span>
                  </p>
                  <ul className={ulClass}>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral source</li>
                    <li>Cookie identifiers (see Section 7)</li>
                  </ul>
                </section>

                {/* Section 3 — How We Use Your Data */}
                <section id="data-use">
                  <h2 className={h2Class}>3. How We Use Your Data</h2>
                  <p className={pClass}>We use the data we collect for the following purposes:</p>

                  <p className={pClass}>
                    <span className={strongClass}>Platform operation:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Enabling visitor and contractor check-in and verification</li>
                    <li>Sending host notifications on visitor arrival</li>
                    <li>Managing work permit workflows and gate access</li>
                    <li>Generating attendance records and shift reports</li>
                    <li>Producing audit-ready compliance logs for our clients</li>
                  </ul>

                  <p className={pClass}>
                    <span className={strongClass}>Service delivery:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Providing and maintaining the Buzzin platform for our clients</li>
                    <li>Processing client billing and account management</li>
                    <li>Responding to support requests and technical issues</li>
                  </ul>

                  <p className={pClass}>
                    <span className={strongClass}>Legal and compliance:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Complying with UAE legal requirements including PDPL</li>
                    <li>Maintaining records required by RERA, KHDA, and other regulatory bodies as instructed by our clients</li>
                    <li>Responding to lawful requests from government authorities</li>
                  </ul>

                  <p className={pClass}>
                    <span className={strongClass}>Platform improvement:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Analysing usage patterns to improve platform performance</li>
                    <li>Monitoring system security and preventing fraud</li>
                  </ul>

                  <p className={pClass}>
                    We do not sell personal data to third parties. We do not use personal data collected through the platform for marketing purposes without explicit consent.
                  </p>
                </section>

                {/* Section 4 — Data Storage & Retention */}
                <section id="data-storage">
                  <h2 className={h2Class}>4. Data Storage &amp; Retention</h2>

                  <p className={pClass}>
                    <span className={strongClass}>Storage location:</span> Data is stored in encrypted cloud infrastructure on AWS, GCP, or Azure in regional data centres. For clients who have requested on-premises deployment, data is stored entirely within their own infrastructure and does not pass through Buzzin cloud servers.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Encryption:</span> All data is encrypted in transit using HTTPS/TLS 1.2 or higher. All data at rest is encrypted using AES-256.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Retention periods:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Visitor and contractor records: retained for 5 years by default, configurable per client requirement</li>
                    <li>Client account data: retained for the duration of the contract plus 2 years after termination</li>
                    <li>Website visitor data: retained for 12 months</li>
                    <li>Support correspondence: retained for 3 years</li>
                  </ul>

                  <p className={pClass}>
                    Clients may request shorter or longer retention periods subject to applicable legal requirements. Data subject to active legal proceedings may be retained beyond standard periods.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Deletion:</span> At the end of the retention period, or upon verified request, personal data is securely deleted and cannot be recovered.
                  </p>
                </section>

                {/* Section 5 — Data Sharing */}
                <section id="data-sharing">
                  <h2 className={h2Class}>5. Data Sharing</h2>
                  <p className={pClass}>We share personal data only in the following circumstances:</p>

                  <p className={pClass}>
                    <span className={strongClass}>With our clients:</span> Visitor, contractor, and attendance data collected through the Buzzin platform is accessible to the client organisation on whose premises the data was collected. The client is the data controller for this data; Buzzin acts as data processor.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>With service providers:</span> We use trusted third-party service providers to operate the platform, including cloud infrastructure providers (AWS, GCP, Azure), email delivery services, and analytics tools. All providers are bound by data processing agreements and may not use your data for their own purposes.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>With UAE government authorities:</span> We comply with lawful requests from UAE government authorities including the ICP (Federal Authority for Identity and Citizenship) where required for UAE Pass integration.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>In the event of a legal requirement:</span> We may disclose data where required by law, court order, or to protect the rights, safety, or property of Buzzin, our clients, or others.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>We do not:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Sell personal data to any party</li>
                    <li>Share data for third-party marketing purposes</li>
                    <li>Transfer data outside the UAE/GCC without appropriate safeguards</li>
                  </ul>
                </section>

                {/* Section 6 — Your Rights */}
                <section id="your-rights">
                  <h2 className={h2Class}>6. Your Rights</h2>
                  <p className={pClass}>
                    Under applicable data protection law including UAE PDPL and GDPR where applicable, you have the following rights regarding your personal data:
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Right of access:</span> You may request a copy of the personal data we hold about you.
                  </p>
                  <p className={pClass}>
                    <span className={strongClass}>Right to rectification:</span> You may request correction of inaccurate or incomplete data.
                  </p>
                  <p className={pClass}>
                    <span className={strongClass}>Right to erasure:</span> You may request deletion of your personal data where there is no legitimate reason for us to continue processing it.
                  </p>
                  <p className={pClass}>
                    <span className={strongClass}>Right to restrict processing:</span> You may request that we restrict processing of your data in certain circumstances.
                  </p>
                  <p className={pClass}>
                    <span className={strongClass}>Right to data portability:</span> You may request your data in a structured, commonly used format.
                  </p>
                  <p className={pClass}>
                    <span className={strongClass}>Right to object:</span> You may object to processing of your personal data in certain circumstances.
                  </p>

                  <p className={pClass}>
                    To exercise any of these rights, contact us at{" "}
                    <a href="mailto:info@buzzin.ae" className={linkClass}>info@buzzin.ae</a>. We will respond within 30 days.
                  </p>

                  <p className={pClass}>
                    Please note: for data collected on behalf of a client organisation (visitor logs, contractor records), requests should be directed to the relevant client organisation as the data controller. Buzzin will assist the client in fulfilling your request.
                  </p>
                </section>

                {/* Section 7 — Cookies */}
                <section id="cookies">
                  <h2 className={h2Class}>7. Cookies</h2>
                  <p className={pClass}>
                    Our website buzzin.ae uses cookies and similar tracking technologies.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Essential cookies:</span> Required for the website to function. Cannot be disabled. Include session management and security cookies.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Analytics cookies:</span> Used to understand how visitors use our website via Google Analytics. Collect anonymised data including pages visited and time on site. You may opt out via your browser settings or the cookie consent banner.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Marketing cookies:</span> We do not currently use marketing or advertising cookies.
                  </p>

                  <p className={pClass}>
                    You can manage your cookie preferences at any time through your browser settings. Disabling cookies may affect some website functionality.
                  </p>
                </section>

                {/* Section 8 — Security */}
                <section id="security">
                  <h2 className={h2Class}>8. Security</h2>
                  <p className={pClass}>
                    We take the security of personal data seriously. Our technical and organisational measures include:
                  </p>
                  <ul className={ulClass}>
                    <li>End-to-end encryption using HTTPS/TLS 1.2+</li>
                    <li>AES-256 encryption for data at rest</li>
                    <li>Role-based access control limiting data access to authorised personnel only</li>
                    <li>Multi-layer intrusion prevention and automated threat detection</li>
                    <li>No sensitive data stored on client-facing devices (tablets)</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>MDM-managed device fleet with remote wipe capability</li>
                  </ul>
                  <p className={pClass}>
                    In the event of a data breach that poses a risk to individuals, we will notify affected parties and relevant authorities in accordance with applicable law.
                  </p>
                </section>

                {/* Section 9 — Contact Us */}
                <section id="contact">
                  <h2 className={h2Class}>9. Contact Us</h2>
                  <p className={pClass}>
                    For any questions about this Privacy Policy, to exercise your data rights, or to raise a concern about how we handle your data, contact us at:
                  </p>
                  <ul className={ulClass}>
                    <li><span className={strongClass}>Buzzin FZCO</span></li>
                    <li>Dtec, Dubai Silicon Oasis</li>
                    <li>Dubai, United Arab Emirates</li>
                    <li>
                      <span className={strongClass}>Email:</span>{" "}
                      <a href="mailto:info@buzzin.ae" className={linkClass}>info@buzzin.ae</a>
                    </li>
                    <li>
                      <span className={strongClass}>Phone:</span>{" "}
                      <a href="tel:+97143201265" className={linkClass}>+971 4 3201265</a>
                    </li>
                  </ul>
                  <p className={pClass}>
                    We aim to respond to all privacy enquiries within 5 business days.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Changes to this policy:</span> We may update this Privacy Policy from time to time. The date at the top of this page shows when it was last updated. Continued use of the Buzzin platform following an update constitutes acceptance of the revised policy.
                  </p>
                </section>

                {/* Related pages card */}
                <div className="mt-12 rounded-xl bg-[var(--bg-canvas)] px-6 py-5">
                  <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Related
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <Link
                      href="/en/security-compliance"
                      className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      Security &amp; Compliance &rarr;
                    </Link>
                    <Link
                      href="/en/terms-of-service"
                      className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      Terms of Service &rarr;
                    </Link>
                    <Link
                      href="/en/contact"
                      className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      Contact Us &rarr;
                    </Link>
                  </div>
                </div>
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
