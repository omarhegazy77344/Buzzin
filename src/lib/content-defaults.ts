export type CarouselImage = {
  src: string
  alt: string
}

export const defaultHeroCarouselImages: CarouselImage[] = [
  { src: "/images/hero/pomelli-asset-2.png", alt: "Buzzin platform overview" },
  { src: "/images/hero/pomelli-asset-2-alt.png", alt: "Buzzin platform dashboard" },
  { src: "/images/hero/pomelli-asset-4.png", alt: "Buzzin visitor management interface" },
  { src: "/images/hero/8NdSBltkO_r3Hp65aadObU.png", alt: "Buzzin self-registration kiosk" },
  { src: "/images/hero/aMU-EkFQ7Ej4Jn9XJCO46S.png", alt: "Buzzin digital access management" },
  { src: "/images/hero/briv9pC7Jjqd0ouEzun4Fy.png", alt: "Buzzin enterprise security operations" },
  { src: "/images/hero/bw6f9b662VW2ikspw4x49.png", alt: "Buzzin integrated work permit system" },
]

export const defaultHero = {
  overline: "Trusted by 300+ organisations across 5 countries",
  headline: "The premises intelligence platform for enterprise UAE\u00a0&\u00a0GCC",
  subheadline:
    "From visitor check-in to contractor permits, queue management to guard patrols\u00a0\u2014 one fully integrated platform. Trusted by Atlantis, Aldar, Taaleem, Fairmont, and 300+ organisations.",
  primaryCtaLabel: "Book a Free Demo",
  primaryCtaHref: "/book-demo",
  secondaryCtaLabel: "Watch 90-second overview",
  secondaryCtaHref: "#overview",
}

export const defaultTickerClients = [
  "Atlantis The Palm",
  "Aldar",
  "Kempinski",
  "Brighton College",
  "Asteco",
  "Grand Hyatt Dubai",
  "GEMS Education",
  "Taaleem",
  "Masdar City",
  "Al-Futtaim",
]

export const defaultStats = [
  { value: 20, suffix: "M+", label: "Secure interactions processed across the GCC" },
  { value: 300, suffix: "+", label: "Active organisations across 5 countries" },
  { value: 4, suffix: "", label: "Countries \u2014 UAE, Saudi Arabia, Lebanon" },
  { value: 9, suffix: "", label: "Fully integrated modules \u2014 one platform, zero silos" },
]

export type ModuleStatus = "live" | "new" | "comingSoon"
export type ModuleBadge = "star" | "greenDot" | null

export type PlatformModule = {
  name: string
  shortName: string
  slug: string
  desc: string
  shortDesc: string
  status: ModuleStatus
  badge: ModuleBadge
}

export const defaultModules: PlatformModule[] = [
  { name: "Visitor Management", shortName: "VMS", slug: "visitor-management-system", desc: "5-second digital check-in with UAE Pass and Emirates ID integration.", shortDesc: "Digital check-in", status: "live", badge: "star" },
  { name: "Work Permit", shortName: "Work Permit", slug: "work-permit-system", desc: "QR-coded digital permits. Gate verification. Full compliance trail.", shortDesc: "Digital permits", status: "live", badge: null },
  { name: "Queue Management", shortName: "QMS", slug: "queue-management", desc: "VIP priority routing. WhatsApp tokens. Self-service kiosk.", shortDesc: "Smart queuing", status: "new", badge: "greenDot" },
  { name: "Event Management", shortName: "Events", slug: "event-management", desc: "Personalised QR invitations. 8-second entry. Branded communications.", shortDesc: "Event check-in", status: "live", badge: null },
  { name: "Attendance", shortName: "Attendance", slug: "attendance-management", desc: "NFC/RFID tracking. Real-time punctuality alerts. Shift reports.", shortDesc: "NFC tracking", status: "live", badge: null },
  { name: "Booking", shortName: "Booking", slug: "booking-management", desc: "Live calendar. Auto-approve rules. VMS-integrated access passes.", shortDesc: "Calendar & passes", status: "new", badge: "greenDot" },
  { name: "Safeguarding", shortName: "Safeguarding", slug: "safeguarding", desc: "Authorised guardian verification. KHDA-ready audit trail.", shortDesc: "Guardian verification", status: "comingSoon", badge: null },
]

export const defaultIndustries = [
  {
    key: "residential",
    label: "Residential",
    problem: "Managing multiple communities from a WhatsApp group is not a strategy. It\u2019s a liability.",
    modules: ["VMS", "Work Permit", "Booking", "Patrolling"],
    clients: ["Aldar", "Asteco", "DAMAC"],
    href: "/industries/residential-real-estate",
  },
  {
    key: "education",
    label: "Education",
    problem: "Your duty of care does not end at the classroom door \u2014 and KHDA knows it.",
    modules: ["Safeguarding", "VMS", "Work Permit", "Events"],
    clients: ["Taaleem", "Brighton College", "GEMS"],
    href: "/industries/education",
  },
  {
    key: "hospitality",
    label: "Hospitality",
    problem: "Every manual process at your front of house is a brand experience failure.",
    modules: ["Queue Management", "VMS", "Work Permit", "Events"],
    clients: ["Atlantis", "Fairmont", "Kempinski"],
    href: "/industries/hospitality",
  },
  {
    key: "corporate",
    label: "Corporate",
    problem: "A paper visitor register in 2026 is not a security measure. It is a liability.",
    modules: ["VMS", "Attendance", "Work Permit"],
    clients: ["Al-Futtaim", "EDAMCO"],
    href: "/industries/corporate",
  },
  {
    key: "financial",
    label: "Financial",
    problem: "At this address, best effort is not acceptable. Absolute certainty is the standard.",
    modules: ["VMS", "NFC Access", "Turnstile Integration"],
    clients: ["Central Park Towers DIFC"],
    href: "/industries/financial-districts",
  },
  {
    key: "government",
    label: "Government",
    problem: "Government-trusted premises management \u2014 from Rashid & Latifa Schools to Massar Sharjah.",
    modules: ["VMS", "Safeguarding", "UAE Pass"],
    clients: ["Rashid & Latifa Schools", "Massar Sharjah"],
    href: "/industries/government",
  },
]

export const defaultBeforeAfterRows = [
  {
    before: "Paper visitor register \u2014 handwriting no one can read, no photo, no verification",
    after: "Visitor registered, identity verified, host notified \u2014 in 3 to 5 seconds",
  },
  {
    before: "Contractor permits on WhatsApp PDFs \u2014 no expiry tracking, no audit trail",
    after: "QR-coded digital permit \u2014 scanned at gate, validity confirmed in real time",
  },
  {
    before: "Security guard patrol logbook \u2014 filled in retrospectively, never verified",
    after: "Timestamped NFC checkpoint scans \u2014 every round proven, every missed station flagged",
  },
  {
    before: "Printed evacuation list \u2014 outdated the moment it was printed",
    after: "Real-time evacuation list \u2014 every person on premises, one click, always accurate",
  },
  {
    before: "Compliance audit: search through months of paper records",
    after: "Export a complete, tamper-proof audit log in under 30 seconds",
  },
  {
    before: "Amenity booking via phone and WhatsApp \u2014 double-bookings daily",
    after: "Live booking calendar \u2014 slot taken, system updated, QR access pass issued",
  },
]

export const defaultExclusivity = {
  overline: "Exclusive Partnership",
  headline:
    "Selected as the exclusive multi-year premises management partner for Aldar Properties and Asteco across their entire UAE portfolio.",
  body: "When the UAE\u2019s largest developer and one of its largest property managers choose a single platform to run all their communities \u2014 for multiple years \u2014 that\u2019s not a vendor relationship. That\u2019s a standard being set.",
  partners: ["Aldar", "Asteco"],
  growthMultiplier: "71\u00d7",
  growthLabel:
    "In 2025, Buzzin processed more secure access events than in all previous years combined.",
}

export const defaultSecurityCerts = [
  "ISO 27001",
  "SOC 1/2/3",
  "GDPR Aligned",
  "UAE Pass",
  "On-Prem Available",
]

export const defaultHowItWorks = [
  {
    number: "01",
    title: "We assess your premises",
    desc: "Our team reviews your workflows, security requirements, and existing infrastructure. A configuration built around how your operation actually works.",
  },
  {
    number: "02",
    title: "We configure and deploy",
    desc: "Cloud-hosted. No servers. No data centre access required. One Android tablet to get started. Live within days, not months.",
  },
  {
    number: "03",
    title: "You\u2019re supported, not just sold to",
    desc: "SLA-backed support via phone, email, and WhatsApp. Remote troubleshooting and over-the-air updates. We don\u2019t disappear after go-live.",
  },
]

export const defaultCtaBanner = {
  headline: "Ready to see how Buzzin runs across your entire premises?",
  subline: "We respond to all demo requests within four business hours.",
  primaryLabel: "Book a Free Demo",
  primaryHref: "/book-demo",
  whatsappLabel: "Chat on WhatsApp",
  whatsappHref:
    "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
  phone: "+971 4 320 1265",
}

export const defaultFooter = {
  tagline:
    "The GCC\u2019s enterprise premises intelligence platform. Trusted by 300+ organisations across 5 countries.",
  phone: "+971 4 320 1265",
  email: "hello@buzzin.ae",
  address: "Dubai Silicon Oasis, Dubai, UAE",
}
