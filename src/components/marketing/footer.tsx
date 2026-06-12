import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { defaultFooter } from "@/lib/content-defaults"

const platformLinks = [
  { label: "Visitor Management", href: "/platform/visitor-management-system" },
  { label: "Work Permit", href: "/platform/work-permit-system" },
  { label: "Queue Management", href: "/platform/queue-management" },
  { label: "Event Management", href: "/platform/event-management" },
  { label: "Attendance", href: "/platform/attendance-management" },
  { label: "Booking", href: "/platform/booking-management" },
]

const industryLinks = [
  { label: "Residential", href: "/industries/residential-real-estate" },
  { label: "Education", href: "/industries/education" },
  { label: "Hospitality", href: "/industries/hospitality" },
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Why Buzzin", href: "/why-buzzin" },
  { label: "Security", href: "/security-compliance" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

const resourceLinks = [
  { label: "Blog & Insights", href: "/blog" },
  { label: "News & Updates", href: "/news" },
  { label: "Press & Media", href: "/press" },
  { label: "FAQ", href: "/faq" },
]

function FooterLinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-heading text-body-sm font-semibold uppercase tracking-wider text-gray-400">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-body-sm text-gray-400 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

type FooterProps = {
  content?: typeof defaultFooter
}

export function Footer({ content }: FooterProps) {
  const d = content || defaultFooter

  return (
    <footer className="relative overflow-hidden bg-[var(--bg-footer)] pt-16 pb-8">
      {/* Amber gradient top border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #F5A623 30%, #F5A623 70%, transparent 100%)",
        }}
      />

      <SectionBackground
        variant="dark"
        hexGrid
        floatingElements={[
          { type: "hexagon", size: 60, x: "94%", y: "12%", delay: 0, duration: 9, color: "white" },
          { type: "hexagon", size: 80, x: "4%", y: "82%", delay: 3, duration: 10, color: "amber" },
        ]}
      />

      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image src="/images/logo-dark.png" alt="Buzzin" width={120} height={40} priority />
            </Link>
            <p className="mt-4 max-w-xs text-body-sm text-gray-400">{d.tagline}</p>
            <div className="mt-6 space-y-2 text-body-sm text-gray-400">
              <p><a href={`tel:${d.phone.replace(/\s/g, "")}`} className="hover:text-white">{d.phone}</a></p>
              <p><a href={`mailto:${d.email}`} className="hover:text-white">{d.email}</a></p>
              <p>{d.address}</p>
            </div>
          </div>

          <FooterLinkGroup title="Platform" links={platformLinks} />
          <FooterLinkGroup title="Industries" links={industryLinks} />
          <FooterLinkGroup title="Company" links={companyLinks} />
          <FooterLinkGroup title="Resources" links={resourceLinks} />
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-body-xs text-gray-500">
            &copy; {new Date().getFullYear()} Buzzin FZCO. All rights reserved.
          </p>
          <div className="flex gap-6 text-body-xs text-gray-500">
            <Link href="/en/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/en/terms-of-service" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
