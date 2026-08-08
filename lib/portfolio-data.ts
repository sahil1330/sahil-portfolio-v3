export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  contribution: string;
  imagePath: string;
  accent: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Zaprill",
    category: "Job SaaS · Product engineering",
    summary:
      "A job-search platform shaped around discovery, resume intelligence, credit-based billing and measurable user journeys.",
    contribution:
      "Product architecture, full-stack implementation, authentication, analytics and payments.",
    imagePath: "/images/projects/zaprill-cover.webp",
    accent: "#ff5a36",
  },
  {
    number: "02",
    title: "e-Sight",
    category: "Assistive technology · Hardware + software",
    summary:
      "An assistive system exploring real-time environmental awareness through embedded sensing, BLE and voice feedback.",
    contribution:
      "Product development, hardware integration, mobile prototyping and cloud API architecture.",
    imagePath: "/images/projects/esight-cover.webp",
    accent: "#d9ff43",
  },
  {
    number: "03",
    title: "Vishnushakti",
    category: "Nonprofit platform · Full-stack development",
    summary:
      "A production operations platform joining content, donations, volunteers, communications and administration.",
    contribution:
      "Custom PHP platform, payment workflows, email infrastructure and operational tooling.",
    imagePath: "/images/projects/vishnushakti-cover.webp",
    accent: "#83b7ff",
  },
  {
    number: "04",
    title: "Platform modernization",
    category: "Professional engineering · Confidential",
    summary:
      "Modernizing a production web platform while improving localization, framework health, security and delivery confidence.",
    contribution:
      "Next.js migration, dependency hardening, SEO localization and cross-functional delivery.",
    imagePath: "/images/projects/platform-cover.webp",
    accent: "#f0c4ff",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Product engineering",
    statement:
      "Turning ambiguous product goals into clear, maintainable interfaces and working systems.",
    proof: "From zero-to-one prototypes to production SaaS workflows.",
  },
  {
    number: "02",
    title: "Platform architecture",
    statement:
      "Designing the boundaries between frontend, APIs, data, authentication and third-party services.",
    proof: "Built payment, analytics, content and operational platforms.",
  },
  {
    number: "03",
    title: "Cloud & delivery",
    statement:
      "Making products deployable, observable and resilient across their real operating environment.",
    proof: "AWS, containers, deployment pipelines and production debugging.",
  },
  {
    number: "04",
    title: "Applied AI & integrations",
    statement:
      "Using AI where it improves a product outcome, with dependable services around it.",
    proof: "AI feature POCs, data integrations and workflow automation.",
  },
];

export const experience = [
  {
    period: "Current",
    role: "Full-Stack Engineer",
    context: "Product platform · Contract",
    outcome:
      "Platform modernization, localization architecture, security upgrades and applied AI initiatives.",
  },
  {
    period: "Venture",
    role: "Product & Engineering",
    context: "Austrange Solutions · e-Sight",
    outcome:
      "Building the software and hardware layers of an assistive technology product.",
  },
  {
    period: "2024",
    role: "Web Development Intern",
    context: "Vishnushakti Foundation",
    outcome:
      "Delivered a custom platform spanning fundraising, communications, content and administration.",
  },
];
