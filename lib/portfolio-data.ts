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
      "An AI-powered job-search SaaS bringing job discovery, resume tools, account management and billing into one product.",
    contribution:
      "Full-stack product development, authentication, analytics, credit-based billing and payment integration.",
    imagePath: "/images/projects/zaprill-cover.webp",
    accent: "#ff5a36",
  },
  {
    number: "02",
    title: "e-Sight",
    category: "Assistive technology · Hardware + software",
    summary:
      "An assistive device designed to help blind and low-vision users understand nearby objects through sensors and audio feedback.",
    contribution:
      "Software development, ESP32 and BLE integration, mobile prototyping and backend architecture.",
    imagePath: "/images/projects/esight-cover.webp",
    accent: "#d9ff43",
  },
  {
    number: "03",
    title: "Vishnushakti",
    category: "Nonprofit platform · Full-stack development",
    summary:
      "A custom nonprofit website and administration platform for donations, publishing, volunteers and community communication.",
    contribution:
      "End-to-end PHP development, Razorpay payments, email workflows, content tools and admin features.",
    imagePath: "/images/projects/vishnushakti-cover.webp",
    accent: "#83b7ff",
  },
  {
    number: "04",
    title: "Platform modernization",
    category: "Professional engineering · Confidential",
    summary:
      "Modernizing a production web platform with a newer application foundation, cleaner localization and stronger security.",
    contribution:
      "Next.js 14 to 16 migration, dependency upgrades, SEO-friendly localization and security fixes.",
    imagePath: "/images/projects/platform-cover.webp",
    accent: "#f0c4ff",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Product engineering",
    statement:
      "Building complete web products across user experience, application logic and data.",
    proof: "SaaS workflows, internal tools and customer-facing platforms.",
  },
  {
    number: "02",
    title: "Platform architecture",
    statement:
      "Designing APIs, authentication, databases and third-party integrations as one maintainable system.",
    proof: "Payments, analytics, content systems and operational workflows.",
  },
  {
    number: "03",
    title: "Cloud & delivery",
    statement:
      "Deploying applications and solving the performance, security and reliability issues that appear in production.",
    proof: "AWS, Docker, deployment pipelines and production debugging.",
  },
  {
    number: "04",
    title: "Applied AI & integrations",
    statement:
      "Adding AI capabilities and external services where they make the product more useful.",
    proof: "AI feature prototypes, data integrations and workflow automation.",
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
