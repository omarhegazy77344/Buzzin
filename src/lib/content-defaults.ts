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
  overline: "Trusted by 300+ organisations across 4 countries",
  headline: "Manage every visitor, contractor, and patrol from one place",
  subheadline:
    "Buzzin handles check-ins, work permits, queues, bookings, and guard patrols for Atlantis, Aldar, Taaleem, Fairmont, and 300+ organisations across the UAE and GCC.",
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
  { value: 20, suffix: "M+", label: "Check-ins, permits, and scans processed across the GCC" },
  { value: 300, suffix: "+", label: "Organisations running Buzzin daily" },
  { value: 4, suffix: "", label: "Countries: UAE, Saudi Arabia, Kuwait, Lebanon" },
  { value: 10, suffix: "+", label: "Modules that all share the same data and dashboard" },
]

export type ModuleStatus = "live" | "new" | "comingSoon"
export type ModuleBadge = "star" | "greenDot" | null

export type PlatformModule = {
  name: string
  shortName: string
  slug: string
  desc: string
  shortDesc: string
  hoverLine: string
  longDesc: string
  benefits: string[]
  status: ModuleStatus
  badge: ModuleBadge
}

export const defaultModules: PlatformModule[] = [
  {
    name: "Visitor Management",
    shortName: "VMS",
    slug: "visitor-management-system",
    desc: "Scan UAE Pass or Emirates ID. Check in takes 5 seconds.",
    shortDesc: "Digital check-in",
    hoverLine: "UAE Pass scan, host notified, badge printed. 5 seconds.",
    longDesc: "Visitors scan their UAE Pass or Emirates ID at a self-service kiosk, and the system confirms their identity, notifies the host, and prints a badge. The whole thing takes about five seconds. Pre-registration links let guests fill in details before they arrive, so the lobby stays clear.",
    benefits: [
      "UAE Pass and Emirates ID scanning built in, not bolted on",
      "Hosts get notified by SMS, email, or WhatsApp the moment a visitor checks in",
      "Watchlist and blocklist checks happen automatically at the kiosk",
      "Pre-registration links mean visitors spend seconds in your lobby, not minutes",
      "Every visit is logged with a photo, timestamp, and ID record you can export instantly",
    ],
    status: "live",
    badge: "star",
  },
  {
    name: "Work Permit",
    shortName: "Work Permit",
    slug: "work-permit-system",
    desc: "QR-coded permits. Gate scan verification. Automatic expiry alerts.",
    shortDesc: "Digital permits",
    hoverLine: "Contractors apply online, security scans the QR at the gate.",
    longDesc: "Contractors apply for a permit online, upload their documents, and receive a QR code once approved. Security scans the code at the gate to confirm validity. When a permit expires, access stops automatically. 81,085 permits were processed in Q1 2026 alone across Aldar, Asteco, and DAMAC sites.",
    benefits: [
      "Each permit has a unique QR code that security scans at the gate",
      "Expired permits are blocked automatically, no manual follow-up needed",
      "Contractors must upload required documents before a permit can be approved",
      "The full history of every permit is stored and exportable for RERA audits",
      "One dashboard covers permits across all your sites",
    ],
    status: "live",
    badge: null,
  },
  {
    name: "Queue Management",
    shortName: "QMS",
    slug: "queue-management",
    desc: "WhatsApp tokens. VIP priority lanes. Live wait-time displays.",
    shortDesc: "Smart queuing",
    hoverLine: "Visitors take a token via WhatsApp or kiosk. No physical queue.",
    longDesc: "Visitors grab a token from the kiosk or through WhatsApp, then wait wherever they like. The system shows live wait times on screens and phones, routes people to the right counter, and bumps VIPs to the front. Built first for Aldar\u2019s customer service centres.",
    benefits: [
      "Visitors join the queue via WhatsApp without downloading an app",
      "VIPs and priority cases are routed ahead automatically",
      "Wait times display live on lobby screens and on the visitor\u2019s phone",
      "Analytics show you which services are slowest and when peaks hit",
      "Works in unmanned reception areas with a self-service kiosk",
    ],
    status: "new",
    badge: "greenDot",
  },
  {
    name: "Event Management",
    shortName: "Events",
    slug: "event-management",
    desc: "Branded QR invitations. 3-second door check-in. Live headcount.",
    shortDesc: "Event check-in",
    hoverLine: "Send QR invites, check guests in at the door in 3 seconds.",
    longDesc: "Send branded QR invitations for any event, from corporate galas to school open days. Guests scan their code at the door and they\u2019re in within three seconds. You see a live headcount on your dashboard, and the system handles waitlists and capacity limits so you don\u2019t have to.",
    benefits: [
      "Every invitation carries your branding and a unique QR code",
      "Door check-in takes three seconds, no printed guest lists involved",
      "A live dashboard shows exactly how many people are in the room right now",
      "Thank-you emails and feedback requests go out automatically after the event",
      "If you hit capacity, the waitlist kicks in and manages itself",
    ],
    status: "live",
    badge: null,
  },
  {
    name: "Attendance",
    shortName: "Attendance",
    slug: "attendance-management",
    desc: "NFC badge taps. Punctuality alerts. Shift and overtime reports.",
    shortDesc: "NFC tracking",
    hoverLine: "Staff tap their badge. Managers see who\u2019s late instantly.",
    longDesc: "Staff tap an NFC or RFID badge when they arrive and leave. If someone is late or absent, their manager gets an alert straight away. Shift reports, overtime calculations, and historical records are all available without chasing anyone for a timesheet.",
    benefits: [
      "Staff clock in and out with a single badge tap",
      "Managers get notified the moment someone is late or absent",
      "Shift reports and overtime calculations are generated automatically",
      "HR and payroll teams can pull historical records whenever they need them",
      "Multi-site roll call tells you exactly who is on each premises during an evacuation",
    ],
    status: "live",
    badge: null,
  },
  {
    name: "Booking",
    shortName: "Booking",
    slug: "booking-management",
    desc: "Live calendar. Auto-approval rules. QR access passes on confirmation.",
    shortDesc: "Calendar & passes",
    hoverLine: "Residents book online, get a QR pass, and show up. That\u2019s it.",
    longDesc: "A shared calendar that all residents and tenants can see. They pick a slot, the system either auto-approves or routes it for review, and a QR access pass is sent to their phone. No more double bookings caused by WhatsApp threads that nobody reads.",
    benefits: [
      "A shared calendar means nobody can accidentally double-book a space",
      "Low-risk or repeat bookings get auto-approved so your team isn\u2019t a bottleneck",
      "QR access passes are sent the moment a booking is confirmed",
      "Residents and tenants book from their phone or laptop, no calls needed",
      "Usage data shows which amenities are popular and which are sitting empty",
    ],
    status: "new",
    badge: "greenDot",
  },
  {
    name: "Key Management",
    shortName: "KMS",
    slug: "key-management",
    desc: "NFC key tags. Live status board. Overdue alerts. Full audit trail.",
    shortDesc: "Key tracking",
    hoverLine: "Know who has which key, right now, across every building.",
    longDesc: "Every physical key gets an NFC tag. Staff check keys out at a fixed station in about 5 seconds. A live status board shows which keys are available, checked out, or overdue. If a key isn\u2019t returned on time, the system escalates automatically. When a contractor\u2019s work permit expires, their key access stops too.",
    benefits: [
      "Checkout takes 5 seconds at NFC stations in each tower",
      "The status board shows Available, Checked Out, and Overdue at a glance",
      "Overdue keys trigger automatic escalations to supervisors",
      "Contractor key access expires when their work permit does",
      "The full audit log is signed and exportable for inspectors or insurers",
    ],
    status: "comingSoon",
    badge: null,
  },
  {
    name: "Safeguarding",
    shortName: "Safeguarding",
    slug: "safeguarding",
    desc: "Verifies the person collecting a child is an authorised guardian. KHDA-ready.",
    shortDesc: "Guardian verification",
    hoverLine: "No child leaves without verified guardian authorisation.",
    longDesc: "Built for schools and nurseries. When someone arrives to collect a child, the system checks their photo ID against the authorised guardian list. If they\u2019re not on it, the child doesn\u2019t leave. The full pickup history is stored in a KHDA-ready audit trail.",
    benefits: [
      "The person collecting a child is checked against the authorised list every time",
      "Photo ID is matched to confirm identity, not just a name on a form",
      "KHDA inspectors can review the full pickup audit trail on request",
      "If a guardian can\u2019t be reached, emergency contacts are escalated automatically",
      "Parents manage their own authorisation list through a secure portal",
    ],
    status: "comingSoon",
    badge: null,
  },
]

export const defaultIndustries = [
  {
    key: "residential",
    label: "Residential",
    problem: "You\u2019re running ten communities from WhatsApp threads and spreadsheets. That stops scaling at about community three.",
    modules: ["VMS", "Work Permit", "Booking", "Patrolling"],
    clients: ["Aldar", "Asteco", "DAMAC"],
    href: "/industries/residential-real-estate",
  },
  {
    key: "education",
    label: "Education",
    problem: "KHDA expects you to know who collected every child and when. Paper sign-out sheets won\u2019t hold up.",
    modules: ["Safeguarding", "VMS", "Work Permit", "Events"],
    clients: ["Taaleem", "Brighton College", "GEMS"],
    href: "/industries/education",
  },
  {
    key: "hospitality",
    label: "Hospitality",
    problem: "A guest waiting 12 minutes in your lobby because nobody told the host they arrived. That\u2019s a brand problem.",
    modules: ["Queue Management", "VMS", "Work Permit", "Events"],
    clients: ["Atlantis", "Fairmont", "Kempinski"],
    href: "/industries/hospitality",
  },
]

export const defaultBeforeAfterRows = [
  {
    before: "A paper register with illegible handwriting, no photo, and no way to verify who actually visited",
    after: "UAE Pass or Emirates ID scanned, identity confirmed, host notified. Takes about 5 seconds.",
  },
  {
    before: "Contractor permits shared as WhatsApp PDFs. Nobody tracks expiry dates.",
    after: "QR-coded permits that security scans at the gate. Expired permits are blocked automatically.",
  },
  {
    before: "A patrol logbook that guards can fill in after the fact, sitting at a desk",
    after: "NFC checkpoint scans with timestamps. If a station is missed, the system flags it immediately.",
  },
  {
    before: "A printed evacuation list that was outdated before the ink dried",
    after: "A live list of everyone currently on your premises. One click, always current.",
  },
  {
    before: "A compliance audit means digging through boxes of paper records for weeks",
    after: "The full audit log exported as a file in under 30 seconds.",
  },
  {
    before: "Amenity bookings managed over phone calls and WhatsApp. Double-bookings are a daily headache.",
    after: "A shared calendar everyone can see. Book a slot, get a QR access pass, done.",
  },
]

export const defaultExclusivity = {
  overline: "Exclusive Partnership",
  headline:
    "Aldar Properties and Asteco chose Buzzin as their exclusive premises management partner across their entire UAE portfolio.",
  body: "That\u2019s the UAE\u2019s largest developer and one of its largest property managers, running every community on the same system. Not a pilot. Not a trial. A multi-year commitment across hundreds of buildings.",
  partners: ["Aldar", "Asteco"],
  growthMultiplier: "71\u00d7",
  growthLabel:
    "In 2025, Buzzin processed 71 times more access events than in all previous years combined.",
}

export const defaultSecurityCerts = [
  "GDPR Aligned",
  "UAE Pass",
  "UAE PDPL",
  "On-Prem Available",
  "TLS 1.2+",
]

export const defaultHowItWorks = [
  {
    number: "01",
    title: "Discovery",
    desc: "We visit your premises, walk the site with your team, and map out exactly how your operation works. The system gets configured around your workflows, not the other way around.",
  },
  {
    number: "02",
    title: "Go Live",
    desc: "All you need is one Android tablet and a stable internet connection. No servers to set up. Most organisations are live within a few days.",
  },
  {
    number: "03",
    title: "Grow Together",
    desc: "You get SLA-backed support over phone, email, and WhatsApp. Updates are pushed over the air. And we keep showing up after go-live, not just before the contract is signed.",
  },
]

export const defaultCtaBanner = {
  headline: "Want to see how this works on your premises?",
  subline: "We respond to every demo request within four business hours.",
  primaryLabel: "Book a Free Demo",
  primaryHref: "/book-demo",
  whatsappLabel: "Chat on WhatsApp",
  whatsappHref:
    "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
  phone: "+971 4 320 1265",
}

export const defaultFooter = {
  tagline:
    "Visitor management, work permits, queues, bookings, and more. Used by 300+ organisations across the UAE and GCC.",
  phone: "+971 4 320 1265",
  email: "hello@buzzin.ae",
  address: "Dubai Silicon Oasis, Dubai, UAE",
}
