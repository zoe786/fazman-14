export const platformBlueprint = {
  brand: {
    name: "Smile Marketplace",
    positioning:
      "A dental marketplace like Airbnb that connects patients with trusted dental practices and dentists.",
    summary:
      "Built with a Next.js frontend, Express API, PostgreSQL data model, JWT/OAuth authentication, and private VPS-hosted media delivery.",
  },
  infrastructure: {
    frontend: "React and Next.js application for discovery, booking, and dashboards.",
    backend: "Node.js and Express API with role-based access control and provider workflows.",
    database: "PostgreSQL for users, providers, bookings, reviews, records, and analytics.",
    mediaStorage:
      "Private VPS object/file storage for HIPAA-aware media workflows, secure uploads, and privacy-safe dental imagery.",
    integrations: [
      "Google Maps for location search",
      "Stripe for payments",
      "Google and Apple OAuth",
      "Twilio-style tele-dentistry and reminders",
      "Insurance verification providers",
    ],
  },
  roles: [
    {
      name: "Patients",
      capabilities: [
        "Search procedures, providers, and locations",
        "Book appointments and join waitlists",
        "Upload consultation photos and track treatment progress",
        "Save favorites, review providers, and message care teams",
      ],
    },
    {
      name: "Dental Practices",
      capabilities: [
        "Manage multi-provider profiles and service listings",
        "Coordinate appointments, reviews, photo galleries, and patient outreach",
      ],
    },
    {
      name: "Individual Dentists",
      capabilities: [
        "Show credentials, specialties, availability, and office affiliations",
      ],
    },
    {
      name: "Admin",
      capabilities: [
        "Moderate content, manage users, resolve disputes, and review analytics",
      ],
    },
  ],
  featureSections: [
    {
      title: "Search & discovery",
      items: [
        "Procedure-led search across whitening, veneers, implants, Invisalign, crowns, bridges, and emergency care",
        "Map-based provider discovery with location-aware price and availability context",
        "Filters for insurance, financing, sedation, accessibility, emergency availability, and language support",
        "Virtual Smile Assessment flow for photo upload, screening questions, and provider matching",
      ],
    },
    {
      title: "Provider profiles",
      items: [
        "Practice overviews, dentist biographies, specialties, and credentials",
        "Before/after smile galleries, office tours, technology showcases, and services",
        "Ratings broken down by bedside manner, wait time, results, cleanliness, and value",
      ],
    },
    {
      title: "Booking & engagement",
      items: [
        "Real-time consultation and procedure scheduling",
        "Tele-dentistry, reminders, insurance pre-verification, and waitlists",
        "Patient dashboards for appointments, records, messaging, payments, and favorites",
      ],
    },
    {
      title: "Practice operations",
      items: [
        "Calendar management, treatment planning, secure messaging, and review responses",
        "Marketing tools, promotions, content publishing, and analytics dashboards",
      ],
    },
  ],
  procedures: [
    {
      category: "Cosmetic Dentistry",
      name: "Teeth Whitening",
      description: "In-office and take-home whitening options for brighter smiles.",
      averageDuration: "30-90 minutes",
      recoveryTime: "None",
      costRange: "$250-$900",
    },
    {
      category: "Cosmetic Dentistry",
      name: "Porcelain Veneers",
      description: "Custom porcelain shells to improve smile shape, color, and symmetry.",
      averageDuration: "2-3 visits",
      recoveryTime: "1-3 days",
      costRange: "$900-$2,500 per tooth",
    },
    {
      category: "Restorative Dentistry",
      name: "Dental Implants",
      description: "Implant-supported tooth replacement with restorative follow-up care.",
      averageDuration: "3-6 months total treatment",
      recoveryTime: "3-7 days after surgery",
      costRange: "$3,000-$6,000 per implant",
    },
    {
      category: "Preventive/General",
      name: "Cleanings & Exams",
      description: "Routine preventive visits with oral health screening and hygiene care.",
      averageDuration: "45-60 minutes",
      recoveryTime: "None",
      costRange: "$80-$300",
    },
    {
      category: "Specialty Procedures",
      name: "Root Canals",
      description: "Endodontic treatment to preserve infected or damaged teeth.",
      averageDuration: "60-120 minutes",
      recoveryTime: "1-3 days",
      costRange: "$700-$1,800",
    },
  ],
  compliance: [
    "HIPAA-minded encryption at rest and in transit",
    "Role-based access control and secure messaging",
    "GDPR privacy controls and consent-aware media handling",
    "ADA accessibility goals aligned to WCAG 2.1 AA",
    "Auditability for admin moderation and dispute resolution",
  ],
};

export default platformBlueprint;
