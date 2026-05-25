import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Building2 } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Terms of Service | Buzzin FZCO",
  description:
    "Terms of service for Buzzin FZCO. Your rights and obligations when using the Buzzin platform.",
  robots: "noindex",
}

const tocItems = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Description of Services" },
  { id: "accounts", label: "Account Registration" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "payment", label: "Payment & Billing" },
  { id: "ip", label: "Intellectual Property" },
  { id: "data", label: "Data & Privacy" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
]

const h2Class =
  "mt-10 mb-3 border-t border-[var(--border-subtle)] pt-8 font-heading text-[1.25rem] font-bold text-[var(--text-primary)]"
const pClass = "mb-3.5 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]"
const ulClass = "mb-3.5 ml-5 list-disc space-y-1.5 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]"
const strongClass = "font-semibold text-[var(--text-primary)]"
const linkClass = "text-[var(--text-brand)] hover:underline"

export default function TermsOfServicePage() {
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
              <span>Terms of Service</span>
            </nav>

            {/* Page header */}
            <header className="mb-12">
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Legal
              </p>
              <h1 className="mt-3 font-display text-[2rem] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[3rem]">
                Terms of Service
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
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Buzzin platform and related services provided by Buzzin FZCO (&ldquo;Buzzin&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a free zone company registered in Dubai, UAE, headquartered at Dtec, Dubai Silicon Oasis, Dubai, United Arab Emirates.
                </p>
                <p className={pClass}>
                  By accessing or using the Buzzin platform, you agree to be bound by these Terms. If you do not agree, do not access or use the platform.
                </p>

                {/* Section 1 — Acceptance of Terms */}
                <section id="acceptance">
                  <h2 className={h2Class}>1. Acceptance of Terms</h2>
                  <p className={pClass}>
                    These Terms constitute a legally binding agreement between you (the client organisation or authorised user) and Buzzin FZCO.
                  </p>
                  <p className={pClass}>
                    By signing a service agreement, creating an account, or using the Buzzin platform, you confirm that you have the authority to bind your organisation to these Terms and that your organisation agrees to comply with them.
                  </p>
                  <p className={pClass}>
                    These Terms apply to all users of the platform including administrators, managers, security staff, and host users. Client organisations are responsible for ensuring all users comply with these Terms.
                  </p>
                </section>

                {/* Section 2 — Description of Services */}
                <section id="services">
                  <h2 className={h2Class}>2. Description of Services</h2>
                  <p className={pClass}>
                    Buzzin provides a cloud-based platform comprising the following modules (subject to the modules included in your service agreement):
                  </p>
                  <ul className={ulClass}>
                    <li>Visitor Management System (VMS)</li>
                    <li>Work Permit System</li>
                    <li>Event Management System</li>
                    <li>Attendance Management System</li>
                    <li>Queue Management System</li>
                    <li>Booking Management System</li>
                    <li>Safeguarding System</li>
                    <li>Patrolling System (where available)</li>
                    <li>Parking Management (where available)</li>
                  </ul>
                  <p className={pClass}>
                    Services are provided on a subscription basis as specified in your service agreement. Buzzin reserves the right to update, modify, or discontinue features with reasonable notice.
                  </p>
                  <p className={pClass}>
                    Hardware (tablets, NFC readers, badge printers) supplied by Buzzin remains the property of Buzzin unless otherwise stated in the service agreement.
                  </p>
                </section>

                {/* Section 3 — Account Registration */}
                <section id="accounts">
                  <h2 className={h2Class}>3. Account Registration</h2>
                  <p className={pClass}>
                    To use the Buzzin platform, your organisation must have an active service agreement and authorised user accounts created by Buzzin.
                  </p>
                  <p className={pClass}>
                    <span className={strongClass}>Your responsibilities:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Provide accurate and complete information during account setup</li>
                    <li>Keep account credentials secure and confidential</li>
                    <li>Notify Buzzin immediately of any unauthorised access to your account</li>
                    <li>Ensure only authorised personnel have access to the platform</li>
                  </ul>
                  <p className={pClass}>
                    Buzzin reserves the right to suspend or terminate accounts where there is evidence of misuse, unauthorised access, or breach of these Terms.
                  </p>
                  <p className={pClass}>
                    You are responsible for all activity that occurs under your account credentials.
                  </p>
                </section>

                {/* Section 4 — Acceptable Use */}
                <section id="acceptable-use">
                  <h2 className={h2Class}>4. Acceptable Use</h2>
                  <p className={pClass}>
                    You agree to use the Buzzin platform only for lawful purposes and in accordance with these Terms.
                  </p>
                  <p className={pClass}>
                    <span className={strongClass}>You must not:</span>
                  </p>
                  <ul className={ulClass}>
                    <li>Use the platform to collect or process personal data beyond what is necessary for legitimate premises management purposes</li>
                    <li>Share access credentials with unauthorised individuals</li>
                    <li>Attempt to access parts of the platform you are not authorised to use</li>
                    <li>Reverse engineer, decompile, or otherwise attempt to extract the source code of the platform</li>
                    <li>Use the platform to transmit malicious code or interfere with its operation</li>
                    <li>Use data collected through the platform for purposes other than legitimate premises management</li>
                    <li>Circumvent any security or access control measures</li>
                  </ul>
                  <p className={pClass}>
                    Violation of these restrictions may result in immediate suspension of your account and termination of your service agreement.
                  </p>
                </section>

                {/* Section 5 — Payment & Billing */}
                <section id="payment">
                  <h2 className={h2Class}>5. Payment &amp; Billing</h2>

                  <p className={pClass}>
                    <span className={strongClass}>Subscription fees:</span> Fees are as specified in your service agreement. Subscription fees are payable in advance on the schedule specified in your agreement (monthly or annually).
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Hardware:</span> Where Buzzin supplies hardware, payment terms are specified in the service agreement or separate hardware schedule.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Late payment:</span> Buzzin reserves the right to suspend access to the platform if invoices remain unpaid 30 days after the due date. Access will be restored promptly upon payment.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Add-ons:</span> WhatsApp and SMS notification services, custom development, and additional integrations may incur additional charges as specified in the service agreement or agreed separately in writing.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Refunds:</span> Subscription fees are non-refundable except where required by applicable UAE law or as otherwise specified in your service agreement.
                  </p>
                </section>

                {/* Section 6 — Intellectual Property */}
                <section id="ip">
                  <h2 className={h2Class}>6. Intellectual Property</h2>

                  <p className={pClass}>
                    <span className={strongClass}>Buzzin platform:</span> The Buzzin platform, including all software, algorithms, designs, interfaces, and documentation, is owned by Buzzin FZCO and protected by intellectual property laws. These Terms do not grant you any ownership rights in the platform.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Your data:</span> All data collected through the platform on your behalf remains your property. Buzzin processes this data as your data processor under your instructions.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Custom development:</span> Where Buzzin undertakes custom development for your organisation, intellectual property ownership of the resulting work is as specified in the relevant development agreement.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Feedback:</span> Any feedback, suggestions, or ideas you provide regarding the platform may be used by Buzzin to improve the platform without obligation to you.
                  </p>
                </section>

                {/* Section 7 — Data & Privacy */}
                <section id="data">
                  <h2 className={h2Class}>7. Data &amp; Privacy</h2>
                  <p className={pClass}>
                    Your use of the Buzzin platform involves the collection and processing of personal data.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Data processor relationship:</span> Buzzin acts as data processor for personal data collected through the platform on your behalf. You, as the client organisation, are the data controller for this data and are responsible for ensuring you have appropriate legal basis for collecting and processing it.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Privacy Policy:</span> Buzzin&apos;s collection and use of data is governed by our{" "}
                    <Link href="/en/privacy-policy" className={linkClass}>Privacy Policy</Link>{" "}
                    available at buzzin.ae/en/privacy-policy.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Data processing agreement:</span> For clients subject to GDPR, a formal Data Processing Agreement is available on request.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Your obligations:</span> You are responsible for:
                  </p>
                  <ul className={ulClass}>
                    <li>Obtaining necessary consents from visitors, contractors, and employees for data collection</li>
                    <li>Displaying appropriate privacy notices at check-in points</li>
                    <li>Responding to data subject rights requests relating to data you control</li>
                    <li>Complying with applicable data protection law in your jurisdiction</li>
                  </ul>
                </section>

                {/* Section 8 — Limitation of Liability */}
                <section id="liability">
                  <h2 className={h2Class}>8. Limitation of Liability</h2>

                  <p className={pClass}>
                    <span className={strongClass}>Service availability:</span> Buzzin aims to provide continuous platform availability but does not guarantee uninterrupted access. Planned maintenance will be communicated in advance. Emergency maintenance may occur without notice.
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>Limitation of liability:</span> To the maximum extent permitted by applicable law, Buzzin&apos;s total liability to you for any claim arising from or related to your use of the platform shall not exceed the total fees paid by you to Buzzin in the 12 months preceding the claim.
                  </p>

                  <p className={pClass}>Buzzin shall not be liable for:</p>
                  <ul className={ulClass}>
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of data (where caused by client action or third-party system failure outside Buzzin&apos;s control)</li>
                    <li>Losses arising from your failure to comply with these Terms or applicable law</li>
                    <li>Force majeure events</li>
                  </ul>

                  <p className={pClass}>
                    <span className={strongClass}>No warranty:</span> The platform is provided &lsquo;as is&rsquo;. Buzzin makes no warranty that the platform will meet all your requirements or that it will be error-free at all times.
                  </p>
                </section>

                {/* Section 9 — Termination */}
                <section id="termination">
                  <h2 className={h2Class}>9. Termination</h2>

                  <p className={pClass}>
                    <span className={strongClass}>By you:</span> You may terminate your service agreement in accordance with the notice period specified in your agreement (typically 30 days written notice).
                  </p>

                  <p className={pClass}>
                    <span className={strongClass}>By Buzzin:</span> Buzzin may terminate or suspend your access immediately where:
                  </p>
                  <ul className={ulClass}>
                    <li>You materially breach these Terms and fail to remedy the breach within 14 days of written notice</li>
                    <li>You fail to pay invoices within 30 days of due date</li>
                    <li>Your use of the platform poses a security risk or legal liability to Buzzin or other clients</li>
                  </ul>

                  <p className={pClass}>
                    <span className={strongClass}>Effect of termination:</span> On termination, your access to the platform will cease. Your data will be retained for 30 days following termination during which you may request an export. After 30 days, your data will be securely deleted unless otherwise required by law.
                  </p>

                  <p className={pClass}>
                    Hardware supplied by Buzzin must be returned within 14 days of termination.
                  </p>
                </section>

                {/* Section 10 — Governing Law */}
                <section id="governing-law">
                  <h2 className={h2Class}>10. Governing Law</h2>
                  <p className={pClass}>
                    These Terms are governed by and construed in accordance with the laws of the United Arab Emirates and the emirate of Dubai.
                  </p>
                  <p className={pClass}>
                    Any dispute arising from or related to these Terms or your use of the Buzzin platform shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                  </p>
                  <p className={pClass}>
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                  </p>
                  <p className={pClass}>
                    Buzzin may update these Terms from time to time. Updated Terms will be posted at buzzin.ae/en/terms-of-service with a revised date. Continued use of the platform following an update constitutes acceptance of the revised Terms.
                  </p>
                  <p className={pClass}>
                    For any questions about these Terms contact us at:{" "}
                    <a href="mailto:info@buzzin.ae" className={linkClass}>info@buzzin.ae</a>
                  </p>
                </section>

                {/* Related pages card */}
                <div className="mt-12 rounded-xl bg-[var(--bg-canvas)] px-6 py-5">
                  <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Related
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <Link
                      href="/en/privacy-policy"
                      className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      Privacy Policy &rarr;
                    </Link>
                    <Link
                      href="/en/security-compliance"
                      className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      Security &amp; Compliance &rarr;
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
