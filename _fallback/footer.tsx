import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { defaultFooter } from "@/lib/content-defaults"

const platformLinks = [
  { label: "Visitor Management", href: "/platform/visitor-management-system" },
  { label: "Work Permit", href: "/platform/work-permit-system" },
  { label: "Queue Management", href: "/platform/queue-management" },
  { label: "Event Management", href: "/platform/event-management" },
  { label: "Attendance", href: "/platform/attendance-management" },
  { label: "Booking", href: "/platform/booking-management" },
  { label: "Safeguarding", href: "/platform/safeguarding" },
  { label: "Patrolling", href: "/platform/patrolling" },
]

const industryLinks = [
  { label: "Residential", href: "/industries/residential-real-estate" },
  { label: "Education", href: "/industries/education" },
  { label: "Hospitality", href: "/industries/hospitality" },
  { label: "Corporate", href: "/industries/corporate" },
  { label: "Financial", href: "/industries/financial-districts" },
  { label: "Government", href: "/industries/government" },
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Why Buzzin", href: "/why-buzzin" },
  { label: "Security", href: "/security-compliance" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
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
    <footer className="bg-[var(--bg-footer)] pt-16 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image src="/images/logo-dark.png" alt="Buzzin" width={120} height={40} />
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
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-body-xs text-gray-500">
            &copy; {new Date().getFullYear()} Buzzin FZCO. All rights reserved.
          </p>
          <div className="flex gap-6 text-body-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
