export const business = {
  name: "Charlie Reed Web Design",
  owner: "Charlie Reed",
  phoneDisplay: "858-305-5764",
  phoneHref: "tel:8583055764",
  emailDisplay: "charlespkon@gmail.com",
  emailHref: "mailto:charlespkon@gmail.com",
};

export type PackageTier = {
  id: "starter" | "pro" | "business" | "custom" | "management";
  title: string;
  price: string;
  label?: string;
  bestFor?: string;
  description: string;
  includes: string[];
};

export const packages: PackageTier[] = [
  {
    id: "starter",
    title: "Starter Site",
    price: "$249+",
    label: "Best for restaurants",
    bestFor: "Restaurants",
    description:
      "A clean, affordable starter website designed for restaurants and food businesses that need a professional online presence fast.",
    includes: [
      "Stylish landing page / section-based layout",
      "Mobile-friendly design",
      "Menu preview section",
      "Location, hours, and contact section",
      "Reservation or call-to-action button",
      "Polished but simple design",
    ],
  },
  {
    id: "pro",
    title: "Pro Site",
    price: "$399+",
    label: "Best for real estate",
    bestFor: "Real estate agents",
    description:
      "A polished, trust-building website for agents who want stronger branding, lead capture, and a premium look.",
    includes: [
      "3–5 strong sections or compact multi-section layout",
      "Agent intro section",
      "Buyer / seller call-to-actions",
      "Featured listings preview",
      "Testimonials section",
      "Contact / lead capture form",
    ],
  },
  {
    id: "business",
    title: "Business Site",
    price: "$900+",
    description:
      "A multi-page business website for companies that need a more complete online presence and higher conversion structure.",
    includes: [
      "Multi-page structure",
      "Premium design + stronger branding",
      "Lead-generation layout",
      "More advanced sections",
      "More custom strategy",
    ],
  },
  {
    id: "custom",
    title: "Custom Lead Gen Build",
    price: "Custom quote",
    description:
      "A fully custom build for businesses that want premium design, stronger positioning, and a more serious sales system.",
    includes: [
      "Custom design system",
      "Landing pages / campaigns",
      "Advanced integrations",
      "Conversion-focused copy structure",
    ],
  },
  {
    id: "management",
    title: "Monthly Website Management",
    price: "$20–$100/mo",
    description:
      "Ongoing updates, tweaks, and upkeep so your site stays fast, current, and converting.",
    includes: ["Content edits", "New sections", "Performance checks", "Small fixes"],
  },
];

export const portfolio = {
  demos: [
    {
      slug: "hearth-honey-bistro",
      title: "Hearth & Honey Bistro",
      industry: "Restaurant",
      tier: "Starter Site — $249+",
      label: "Best for restaurants",
      href: "/portfolio/hearth-honey-bistro",
    },
    {
      slug: "prestige-property-group",
      title: "Prestige Property Group",
      industry: "Real estate",
      tier: "Pro Site — $399+",
      label: "Best for real estate",
      href: "/portfolio/prestige-property-group",
    },
    {
      slug: "rapidroot-home-services",
      title: "RapidRoot Home Services",
      industry: "Home services",
      tier: "Business example",
      label: "High-trust local services",
      href: "/portfolio/rapidroot-home-services",
    },
  ],
};
