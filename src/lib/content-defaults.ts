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
  overline: "Trusted by 550+ organisations across 4 countries",
  headline: "Manage every visitor, contractor, and patrol from one place",
  subheadline:
    "Buzzin handles check-ins, work permits, queues, bookings, and guard patrols for Atlantis, Aldar, Taaleem, Fairmont, and 550+ organisations across the UAE and GCC.",
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
  { value: 30, suffix: "M+", label: "Check-ins, permits, and scans processed across the GCC" },
  { value: 550, suffix: "+", label: "Organisations running Buzzin daily" },
  { value: 4, suffix: "", label: "Countries: UAE, Saudi Arabia, Kuwait, Lebanon" },
  { value: 7, suffix: "+", label: "Modules that all share the same data and dashboard" },
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
    title: "We Stay With You",
    desc: "You get SLA-backed support over phone, email, and WhatsApp. Updates are pushed over the air. And we keep showing up after go-live, not just before the contract is signed.",
  },
]

export const defaultCtaBanner = {
  headline: "Want to see how this works on your premises?",
  subline: "Guaranteed response to every demo request within 4 business hours.",
  primaryLabel: "Book a Free Demo",
  primaryHref: "/book-demo",
  whatsappLabel: "Chat on WhatsApp",
  whatsappHref:
    "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
  phone: "+971 4 320 1265",
}

export const defaultFooter = {
  tagline:
    "The premises intelligence platform trusted by 550+ organisations across the UAE and GCC.",
  phone: "+971 4 320 1265",
  email: "hello@buzzin.ae",
  address: "Dubai Silicon Oasis, Dubai, UAE",
}

/* ──────────────────────────────────────────────────────────────────────────
   CONTENT SECTIONS — Press, News, Blog
   Shapes mirror the future Payload collections so a CMS migration is mechanical.
   ────────────────────────────────────────────────────────────────────────── */

export type PressCategory = "media" | "award" | "partnership" | "event"

export const pressCategoryLabels: Record<PressCategory, string> = {
  media: "Media Coverage",
  award: "Award",
  partnership: "Partnership",
  event: "Event",
}

export type PressMention = {
  title: string
  category: PressCategory
  date: string // ISO yyyy-mm
  dateLabel: string // "March 2026"
  source: string
  sourceUrl: string // external link, "#" placeholder until live
  excerpt: string
  imageUrl?: string
  featured?: boolean
}

export const pressMentions: PressMention[] = [
  {
    title: "Buzzin FZCO Enters Multi-Year Partnership with Aldar Properties",
    category: "partnership",
    date: "2025-01",
    dateLabel: "January 2025",
    source: "Company Announcement",
    sourceUrl: "#",
    excerpt:
      "Buzzin has been selected as the premises management platform partner for Aldar Properties across their entire UAE portfolio.",
  },
  {
    title: "How Dubai's Premises Intelligence Sector Is Evolving in 2026",
    category: "media",
    date: "2026-03",
    dateLabel: "March 2026",
    source: "Industry Publication",
    sourceUrl: "#",
    excerpt:
      "Enterprise platforms like Buzzin are redefining how the UAE manages visitor access, contractor permits, and operational compliance.",
  },
  {
    title: "Buzzin at GITEX Technology Week 2025 — Premises Intelligence for the GCC",
    category: "event",
    date: "2026-02",
    dateLabel: "February 2026",
    source: "Event Coverage",
    sourceUrl: "#",
    excerpt:
      "Buzzin showcased its ten-module premises intelligence platform at GITEX, demonstrating visitor management, queue systems, and safeguarding for education.",
  },
  {
    title: "Asteco Partners with Buzzin for Community Management Across the UAE",
    category: "partnership",
    date: "2026-02",
    dateLabel: "February 2026",
    source: "Company Announcement",
    sourceUrl: "#",
    excerpt:
      "Asteco Property Management has selected Buzzin as its premises intelligence platform across their full UAE portfolio.",
  },
  {
    title: "71× Growth: How Buzzin Scaled Enterprise Premises Management in 12 Months",
    category: "media",
    date: "2026-04",
    dateLabel: "April 2026",
    source: "Industry Publication",
    sourceUrl: "#",
    excerpt:
      "From 550 organisations to processing over 30 million secure interactions, Buzzin's growth trajectory signals a shift in how GCC enterprises manage physical operations.",
  },
  {
    title: "Buzzin FZCO Recognised at Dubai Silicon Oasis Innovation Awards",
    category: "award",
    date: "2026-05",
    dateLabel: "May 2026",
    source: "DSO",
    sourceUrl: "#",
    excerpt:
      "Recognised for innovation in enterprise premises management technology serving the UAE hospitality, education, and real estate sectors.",
  },
]

export type NewsCategory = "product" | "partnership" | "event" | "company"

export const newsCategoryLabels: Record<NewsCategory, string> = {
  product: "Product Update",
  partnership: "Partnership",
  event: "Event",
  company: "Company",
}

export type NewsPost = {
  title: string
  slug: string
  category: NewsCategory
  date: string // ISO yyyy-mm-dd
  dateLabel: string // "May 2026"
  excerpt: string
  body: string[] // paragraphs
  imageUrl?: string
  featured?: boolean
}

export const newsPosts: NewsPost[] = [
  {
    title: "Introducing Key Management — Track Every Physical Key Across Your Entire Operation",
    slug: "introducing-key-management",
    category: "product",
    date: "2026-05-12",
    dateLabel: "May 2026",
    featured: true,
    excerpt:
      "The newest addition to the Buzzin platform brings digital tracking, authorised checkout control, and automated overdue alerts to physical key management — eliminating the last paper-based process in enterprise premises.",
    body: [
      "Most enterprise properties have digitised visitor check-in, contractor permits, and attendance. Yet physical keys — for plant rooms, electrical cupboards, amenity spaces, and service corridors — are still tracked on clipboards and in logbooks that nobody audits until something goes missing. Key Management is the module that closes that gap.",
      "Every physical key is fitted with an NFC tag and registered in the system. Staff check keys out at a fixed station in about five seconds, and a live status board shows exactly which keys are available, which are checked out, and which are overdue. There is no more walking three floors to find out whether a key is on the board or in someone's pocket.",
      "The module is built for accountability. When a key is not returned on time, the system escalates automatically to the responsible supervisor. Contractor key access is tied to their work permit, so when the permit expires, key access stops at the same moment. Every checkout and return is signed, timestamped, and exportable for inspectors or insurers.",
      "Key Management connects to the rest of the Buzzin platform from day one. The same dashboard that shows you today's visitors and active work permits now shows your key status, and the same audit trail that satisfies a RERA inspection now covers physical key custody too. It is available to all Buzzin clients now.",
    ],
  },
  {
    title: "Buzzin Expands Deployment Across New Residential Communities in Abu Dhabi",
    slug: "abu-dhabi-residential-expansion",
    category: "partnership",
    date: "2026-04-08",
    dateLabel: "April 2026",
    excerpt:
      "Continued growth across the UAE residential sector as new communities go live on visitor management, work permits, and amenity booking.",
    body: [
      "Several new residential communities across Abu Dhabi have gone live on the Buzzin platform this quarter, extending the company's footprint in the emirate's fast-growing managed-community sector. Each community is running visitor management, digital work permits, and amenity booking from a single dashboard.",
      "For the operations teams managing these communities, the change is immediate. Contractor permits that used to circulate as WhatsApp PDFs are now QR-coded and scanned at the gate. Amenity bookings that used to live in a shared spreadsheet now sit in a calendar every resident can see, with QR access passes issued automatically on confirmation.",
      "The expansion continues a pattern that has defined Buzzin's growth: communities adopt one module, see the operational benefit within weeks, and then bring the rest of their portfolio onto the platform. Several of the new Abu Dhabi communities are managed by groups that already run Buzzin elsewhere in the UAE.",
      "More communities are scheduled to go live before the end of the year. If you manage a residential portfolio and want to see how the platform handles multi-community operations, the team is happy to walk you through a live deployment.",
    ],
  },
  {
    title: "Queue Management System — Now Available to All Buzzin Clients",
    slug: "qms-general-availability",
    category: "product",
    date: "2026-03-20",
    dateLabel: "March 2026",
    excerpt:
      "Originally developed for a specific enterprise client requirement, the QMS module with VIP routing and mobile tokens is now part of the standard Buzzin platform.",
    body: [
      "Queue Management started as a custom build for a single enterprise client that needed to manage long waits at busy customer service centres. After a year of refinement in a demanding live environment, it is now available to every Buzzin client as a standard module.",
      "The system lets visitors take a token through WhatsApp or a kiosk, then wait wherever they like rather than standing in a physical line. Live wait times appear on lobby screens and on the visitor's phone, and the system routes people to the right counter when their turn comes. VIPs and priority cases are moved ahead automatically.",
      "Because it was built first for one of the most demanding service operations in the UAE, the module arrives mature. Analytics show which services are slowest and when peaks hit, so operations teams can staff accordingly instead of guessing. It also runs in unmanned reception areas using only a self-service kiosk.",
      "Queue Management is live now for all clients and integrates with the rest of the platform, so the same visitor who takes a queue token is the same record in your visitor log and your reporting.",
    ],
  },
  {
    title: "Buzzin at GITEX 2025 — Showcasing Premises Intelligence for the GCC",
    slug: "gitex-2025-recap",
    category: "event",
    date: "2026-02-15",
    dateLabel: "February 2026",
    excerpt:
      "Our team demonstrated the full ten-module platform to enterprise buyers across hospitality, education, and real estate at GITEX Technology Week.",
    body: [
      "GITEX Technology Week remains the most important date in the region's enterprise technology calendar, and this year the Buzzin team was there to demonstrate the full ten-module platform to buyers from across the GCC.",
      "The demonstrations focused on what makes premises intelligence different from a collection of point solutions: the fact that visitor management, work permits, queue management, and safeguarding all share the same data and the same dashboard. Visitors to the stand could see a check-in, a permit approval, and a live headcount update flow through one system.",
      "Conversations spanned every sector Buzzin serves. Hospitality operators were drawn to queue management and event check-in, school groups to safeguarding ahead of the 2027 compliance deadline, and residential portfolio managers to the multi-community work permit and booking tools.",
      "Thank you to everyone who stopped by the stand. If you missed us at GITEX and want the same walkthrough, the team is running live demos tailored to your industry throughout the year.",
    ],
  },
  {
    title: "2025 in Review — 71× Growth and 20 Million Secure Interactions",
    slug: "2025-year-in-review",
    category: "company",
    date: "2026-01-10",
    dateLabel: "January 2026",
    excerpt:
      "A year of significant scale. From processing thousands of interactions to over 30 million, across 550+ organisations in four countries.",
    body: [
      "2025 was the year Buzzin moved from a promising platform to critical infrastructure for hundreds of organisations across the GCC. The headline number tells the story: the platform processed 71 times more secure access events than in all previous years combined.",
      "Behind that figure is a year of deliberate scale. Buzzin now serves more than 550 organisations across four countries, with over 30 million secure interactions processed — check-ins, permit approvals, queue tokens, badge taps, and access events. Each one is logged, timestamped, and auditable.",
      "The growth was not only in volume but in depth. Existing clients expanded from single modules to running their whole operation on the platform, and the multi-year partnerships with Aldar and Asteco brought entire portfolios onto a single system. New modules launched throughout the year, from queue management to safeguarding.",
      "We are grateful to every client, partner, and team member who made the year what it was. 2026 brings new modules, deeper integrations, and continued expansion across the region — and we are just getting started.",
    ],
  },
  {
    title: "Safeguarding Module Goes Live — KHDA-Ready for UAE Schools",
    slug: "safeguarding-module-launch",
    category: "product",
    date: "2025-12-05",
    dateLabel: "December 2025",
    excerpt:
      "Authorised pickup verification, tamper-proof audit logs, and one-click KHDA export now available for international schools ahead of the January 2027 compliance deadline.",
    body: [
      "Child safety is the most sensitive responsibility any school carries, and the regulatory bar in the UAE is rising. The Safeguarding module is now live, built specifically to help schools and nurseries verify who collects every child and to hold a record that stands up to inspection.",
      "When someone arrives to collect a child, the system checks their photo ID against the authorised guardian list. If they are not on it, the child does not leave. Parents manage their own authorisation lists through a secure portal, and when a primary guardian cannot be reached, the system escalates to emergency contacts automatically.",
      "Every pickup is recorded in a tamper-proof audit trail that KHDA inspectors can review on request. What used to be a paper sign-out sheet — easy to lose, easy to forge, impossible to audit at scale — is now a verifiable digital record exportable in one click.",
      "With the federal compliance deadline approaching in January 2027, schools that adopt safeguarding now have time to embed it into their daily routine well before it becomes mandatory. The module is available today and integrates with the visitor management and attendance tools many schools already run on Buzzin.",
    ],
  },
]

export type BlogCategory =
  | "premises-management"
  | "compliance"
  | "operations"
  | "technology"
  | "industry-trends"

export const blogCategoryLabels: Record<BlogCategory, string> = {
  "premises-management": "Premises Management",
  compliance: "Compliance",
  operations: "Operations",
  technology: "Technology",
  "industry-trends": "Industry Trends",
}

export type BlogSection = {
  heading?: string // becomes H2 + TOC entry
  anchor?: string // slugified heading
  paragraphs?: string[]
  bullets?: string[]
  quote?: string
}

export type BlogContextualCta = {
  headline: string
  subline: string
  primaryLabel: string
  primaryHref: string
}

export type BlogPost = {
  title: string
  slug: string
  category: BlogCategory
  date: string // ISO yyyy-mm-dd
  dateLabel: string // "May 2026"
  readingTime: number // minutes
  excerpt: string
  body: BlogSection[]
  imageUrl?: string
  featured?: boolean
  targetKeyword?: string
  contextualCta?: BlogContextualCta
}

export const blogPosts: BlogPost[] = [
  {
    title: "UAE Child Safety Law 2026: What Every School Needs to Do Before January 2027",
    slug: "uae-child-safety-law-school-compliance",
    category: "compliance",
    date: "2026-05-18",
    dateLabel: "May 2026",
    readingTime: 7,
    featured: true,
    targetKeyword: "UAE child safety law schools",
    excerpt:
      "Federal Decree-Law No. 26/2025 requires every school in the UAE to maintain auditable digital safeguarding records. Here is what that means in practice and how to prepare.",
    contextualCta: {
      headline: "See how Buzzin handles school safeguarding.",
      subline: "Book a demo tailored to your campus and KHDA requirements.",
      primaryLabel: "Book a School Demo",
      primaryHref: "/book-demo",
    },
    body: [
      {
        paragraphs: [
          "Every school in the UAE now operates under a clear federal expectation: child safety is not a policy document filed away for inspection day, but a living, auditable record of who was responsible for each child at each moment. The shift from paper sign-out sheets to verifiable digital safeguarding records is no longer optional, and the deadline to comply is closer than most schools realise.",
          "This guide breaks down what the requirement means in practice, what inspectors will actually look for, and the concrete steps a school can take now to be ready well ahead of January 2027.",
        ],
      },
      {
        heading: "What the law actually requires",
        anchor: "what-the-law-requires",
        paragraphs: [
          "At its core, the requirement is about accountability. Schools must be able to demonstrate, for any given day, who collected each child, who authorised that person, and at what time the handover happened. A name scribbled on a clipboard does not meet that bar, because it cannot be verified and it can be altered after the fact.",
          "The practical implication is that schools need a system that captures identity, not just a signature. That means matching the person collecting a child against a list of pre-authorised guardians, confirming their identity with photo ID, and storing the record in a way that cannot be quietly edited later.",
        ],
        bullets: [
          "A verified record of who collected each child and when",
          "Proof that the collector was authorised in advance by a guardian",
          "An audit trail that cannot be altered after the event",
          "The ability to produce records on request during inspection",
        ],
      },
      {
        heading: "How to prepare before the deadline",
        anchor: "how-to-prepare",
        paragraphs: [
          "The schools that will find the transition easiest are the ones that start now, while there is time to embed the new routine into daily life rather than scrambling at the deadline. Begin by digitising your authorised-guardian lists and giving parents a way to manage them directly, so the data stays current without your office becoming the bottleneck.",
          "Next, put a verification step at the point of collection. Whether that is a tablet at reception or a dedicated kiosk, the principle is the same: no child leaves until the collector is confirmed against the list. Finally, make sure your records export cleanly. When an inspector asks for three months of pickup history, you want that to be a one-click export, not a week of digging.",
        ],
        quote:
          "The goal is not to pass one inspection. It is to make safeguarding something your school does automatically, every day, without thinking about it.",
      },
    ],
  },
  {
    title: "How to Manage Contractors Across Multiple Residential Communities in the UAE",
    slug: "contractor-management-residential-uae",
    category: "premises-management",
    date: "2026-04-22",
    dateLabel: "April 2026",
    readingTime: 6,
    targetKeyword: "contractor management residential UAE",
    excerpt:
      "When you manage 10+ communities with hundreds of contractors on site every day, paper permits and WhatsApp PDFs create real compliance risks. Here is how enterprise operations teams solve it.",
    contextualCta: {
      headline: "See the Work Permit System in action.",
      subline: "Book a demo and see how contractor access works across a portfolio.",
      primaryLabel: "See Work Permit System",
      primaryHref: "/platform/work-permit-system",
    },
    body: [
      {
        paragraphs: [
          "Managing contractors in a single building is straightforward. Managing them across ten or twenty communities, each with its own gate, its own security team, and hundreds of workers arriving every day, is a different problem entirely. At that scale, the informal systems that work for one tower — a WhatsApp group, a printed permit, a guard who recognises the regulars — break down completely.",
          "This is where most residential operations teams feel the pain first, and it is usually a compliance scare that forces the change.",
        ],
      },
      {
        heading: "Why paper permits fail at scale",
        anchor: "why-paper-fails",
        paragraphs: [
          "A paper permit or a WhatsApp PDF has no enforcement. Nobody checks whether it has expired, because checking would mean reading the date on every document at every gate. Contractors learn that an old permit still gets them in, and access control quietly becomes meaningless.",
          "The deeper problem is auditability. When RERA or an insurer asks who was on site on a particular day, a portfolio running on paper cannot answer with confidence. The records are scattered across gate logbooks, phone galleries, and the memories of security staff who may have moved on.",
        ],
        bullets: [
          "Expired permits keep working because nobody verifies dates at the gate",
          "Records are scattered and impossible to consolidate across communities",
          "No central view of which contractors are on which site right now",
          "Audits become a multi-week archaeology project",
        ],
      },
      {
        heading: "What a portfolio-wide system looks like",
        anchor: "portfolio-system",
        paragraphs: [
          "The fix is to make every permit digital, time-bound, and enforced at the point of entry. Contractors apply online and upload their documents before they arrive. Once approved, they receive a QR-coded permit that security scans at the gate, and an expired permit simply does not open the barrier.",
          "Crucially, one dashboard covers the entire portfolio. An operations manager can see every active permit across every community, pull a site's contractor history in seconds, and produce a clean audit export when a regulator asks. The same system that enforces access also creates the record — there is no separate logging step to forget.",
        ],
      },
    ],
  },
  {
    title: "What Is Premises Intelligence? And Why Does It Matter for UAE Enterprise?",
    slug: "what-is-premises-intelligence",
    category: "operations",
    date: "2026-03-14",
    dateLabel: "March 2026",
    readingTime: 5,
    targetKeyword: "premises intelligence platform",
    excerpt:
      "Premises intelligence is the practice of connecting every operational system in a physical space — visitor management, access control, contractor permits, queue management — into one unified platform.",
    body: [
      {
        paragraphs: [
          "Premises intelligence is a term you will hear more often as enterprise operations mature in the UAE. At its simplest, it describes the practice of connecting every operational system in a physical space into one platform that shares data and presents a single view of what is happening on site.",
          "Instead of a visitor management app, a separate permit tool, a queue system from another vendor, and an attendance tracker that talks to none of them, premises intelligence treats all of these as facets of the same thing: who is on your premises, why, and whether they should be.",
        ],
      },
      {
        heading: "The problem with point solutions",
        anchor: "point-solutions",
        paragraphs: [
          "Most organisations arrive at premises intelligence after years of buying point solutions. Each tool solves its narrow problem well, but none of them talk to each other. The visitor in the lobby, the contractor at the gate, and the staff member tapping in are three separate records in three separate systems, and nobody can answer a simple question like how many people are on this site right now.",
          "That fragmentation has a real cost. Audits take longer, security gaps open between systems, and operations teams spend their time reconciling data instead of acting on it.",
        ],
      },
      {
        heading: "Why it matters for UAE enterprise",
        anchor: "why-it-matters",
        paragraphs: [
          "The UAE's regulatory environment rewards organisations that can prove what happened on their premises, whether that is a RERA contractor audit, a KHDA safeguarding inspection, or a data-protection review under the PDPL. A unified platform makes those proofs trivial because the record already exists in one place.",
          "Beyond compliance, premises intelligence gives leaders something they rarely have: a real-time, accurate picture of their physical operations across every site. That is the difference between managing by report and managing by reality.",
        ],
      },
    ],
  },
  {
    title: "Emirates ID vs UAE Pass: What Is the Difference for Visitor Check-In?",
    slug: "emirates-id-vs-uae-pass-visitor-checkin",
    category: "technology",
    date: "2026-02-11",
    dateLabel: "February 2026",
    readingTime: 4,
    targetKeyword: "Emirates ID UAE Pass visitor check-in",
    excerpt:
      "Both Emirates ID scanning and UAE Pass QR verification are used for visitor check-in in the UAE — but they work differently and serve different purposes. Here is a clear breakdown.",
    body: [
      {
        paragraphs: [
          "If you are setting up digital visitor check-in in the UAE, you will encounter two identity methods almost immediately: Emirates ID and UAE Pass. They are often mentioned in the same breath, but they are not the same thing, and understanding the difference helps you design a check-in flow that is both fast and secure.",
        ],
      },
      {
        heading: "Emirates ID: the physical card",
        anchor: "emirates-id",
        paragraphs: [
          "Emirates ID is the physical identity card every resident carries. At a check-in kiosk, the card is scanned and the visitor's verified details are read directly from it. The advantage is that it works for anyone with a card, no smartphone or app required, which matters for contractors and older visitors.",
          "The trade-off is that it requires the physical card to be present and a scanner at the point of check-in. For walk-in visitors and contractors, this is usually the most reliable method.",
        ],
      },
      {
        heading: "UAE Pass: the digital identity",
        anchor: "uae-pass",
        paragraphs: [
          "UAE Pass is the national digital identity app. Instead of scanning a card, the visitor confirms their identity through the app, often by scanning a QR code. It is fast, contactless, and ideal for pre-registered visitors who can verify before they even arrive.",
          "The best visitor systems support both. A pre-registered corporate guest might breeze through with UAE Pass, while a contractor arriving for the first time uses their Emirates ID at the kiosk. Supporting both methods means you never force a visitor down a path that does not suit them.",
        ],
      },
    ],
  },
  {
    title: "RERA Contractor Compliance: What UAE Property Managers Need to Know in 2026",
    slug: "rera-contractor-compliance-uae-2026",
    category: "compliance",
    date: "2026-01-16",
    dateLabel: "January 2026",
    readingTime: 6,
    targetKeyword: "RERA contractor compliance UAE",
    excerpt:
      "The Real Estate Regulatory Authority expects property managers to maintain verifiable contractor access records. Here is what that means for your operation and how to stay ahead of the requirements.",
    contextualCta: {
      headline: "See how Buzzin keeps you audit-ready.",
      subline: "Book a demo and see contractor compliance handled end to end.",
      primaryLabel: "See Work Permit System",
      primaryHref: "/platform/work-permit-system",
    },
    body: [
      {
        paragraphs: [
          "For property managers operating in Dubai, the Real Estate Regulatory Authority sets the standard for how buildings and communities are run, and contractor access is squarely in scope. The expectation is straightforward to state and harder to meet: you must be able to show verifiable records of who was working on your property, when, and under what authorisation.",
        ],
      },
      {
        heading: "What RERA expects",
        anchor: "what-rera-expects",
        paragraphs: [
          "The principle behind the requirement is accountability for everyone who enters a managed property to perform work. That means a record of the contractor, the company they represent, the scope and dates of their permit, and evidence that the permit was valid at the time they were on site.",
          "What does not satisfy the requirement is a stack of paper permits with no enforcement and no central record. If a permit could have expired without anyone noticing, the record is not trustworthy, and an auditor will treat it accordingly.",
        ],
        bullets: [
          "Verifiable contractor identity and company details",
          "Permit scope and validity dates on record",
          "Evidence that access was blocked once a permit expired",
          "Records retrievable across the full portfolio on request",
        ],
      },
      {
        heading: "Staying ahead of the requirement",
        anchor: "staying-ahead",
        paragraphs: [
          "The property managers who handle RERA audits calmly are the ones whose compliance is a by-product of their daily operation rather than a separate task. When every permit is digital, time-bound, and scanned at the gate, the audit record builds itself. There is nothing to assemble at inspection time because the system has been recording all along.",
          "The shift is less about buying a tool and more about changing where the record lives. Move it from paper and phones into a system that enforces the rules automatically, and compliance stops being a periodic fire drill.",
        ],
      },
    ],
  },
  {
    title: "The Future of Queue Management in UAE Service Centres: From Paper Tickets to Intelligent Routing",
    slug: "future-queue-management-uae",
    category: "industry-trends",
    date: "2025-12-12",
    dateLabel: "December 2025",
    readingTime: 8,
    targetKeyword: "queue management system UAE",
    excerpt:
      "Physical number-ticket systems were designed for a world where people expected to wait. In the UAE's premium residential and hospitality market, that expectation has changed. Here is what comes next.",
    contextualCta: {
      headline: "See Queue Management built for the GCC.",
      subline: "Book a demo and see intelligent routing in action.",
      primaryLabel: "See Queue Management",
      primaryHref: "/platform/queue-management",
    },
    body: [
      {
        paragraphs: [
          "The paper number ticket is one of the most familiar objects in any service centre, and one of the most outdated. It was designed for a world where waiting was simply expected, where the only question was the order in which people would be served. In the UAE's premium residential and hospitality market, that assumption no longer holds.",
          "Customers who are used to booking everything from their phone do not understand why they should stand in a physical line holding a paper tab. The future of queue management is about removing the line altogether.",
        ],
      },
      {
        heading: "Why paper tickets are ending",
        anchor: "why-paper-ends",
        paragraphs: [
          "A paper ticket tells the customer one thing: their number. It does not tell them how long they will wait, it does not let them step away, and it gives the operator no data about where time is being lost. It is a one-way system in a world that now expects two-way information.",
          "It also ties the customer to a physical space. They cannot sit in a cafe, take a call, or run an errand, because they might miss their number. For a premium brand, making a customer stand and watch a screen is a small but real failure of experience.",
        ],
      },
      {
        heading: "What intelligent routing looks like",
        anchor: "intelligent-routing",
        paragraphs: [
          "Intelligent queue management replaces the paper tab with a digital token taken through WhatsApp or a kiosk. The customer then waits wherever they like, watching their position update live on their phone. When their turn approaches, they are called back and routed to the right counter for their specific need.",
          "Behind the scenes, the operator gains something they never had: data. They can see which services are slowest, when peaks hit, and how staffing maps to demand. VIPs and priority cases are routed ahead automatically, and unmanned reception areas can run on a self-service kiosk alone.",
        ],
        quote:
          "The best queue is the one the customer never realises they were in. They take a token, live their day, and arrive at the counter exactly when it is their turn.",
      },
    ],
  },
]
