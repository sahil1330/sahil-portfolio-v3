export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  contribution: string;
  imagePath?: string;
  previewLabel?: string;
  imageFit?: "cover" | "contain";
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
    imagePath: "/images/projects/zaprill-preview.webp",
    previewLabel: "Zaprill / Career intelligence",
    imageFit: "contain",
    accent: "#ff5a36",
  },
  {
    number: "02",
    title: "Maceazy",
    category: "Assistive technology · Hardware + software",
    summary:
      "A connected assistive technology platform designed to make independent mobility safer and more accessible for blind and low-vision users.",
    contribution:
      "Software development, ESP32 and BLE integration, mobile prototyping and backend architecture.",
    imagePath: "/images/projects/maceazy-preview.webp",
    previewLabel: "maceazy.com",
    imageFit: "cover",
    accent: "#d9ff43",
  },
  {
    number: "03",
    title: "Enterprise AI systems",
    category: "Enterprise engineering · Confidential client",
    summary:
      "Scalable applications and personalized agentic workflows built for a large Canadian enterprise and used by thousands of people.",
    contribution:
      "Engineering leadership, monorepo and Node.js development, complex agent workflows, and GCP infrastructure with Cloud Tasks and Redis.",
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
      "Designing services, data flows and infrastructure that remain maintainable as products and teams grow.",
    proof: "Monorepos, Node.js services, APIs, authentication and distributed workflows.",
  },
  {
    number: "03",
    title: "Cloud & delivery",
    statement:
      "Deploying applications and solving the performance, security and reliability issues that appear in production.",
    proof: "GCP, Cloud Tasks, Redis, AWS, Docker and production debugging.",
  },
  {
    number: "04",
    title: "Applied AI & integrations",
    statement:
      "Building personalized agentic workflows that turn complex product requirements into dependable user experiences.",
    proof: "Production AI workflows, external services and workflow automation.",
  },
];

export const experience = [
  {
    period: "Jul 2025 — Present",
    role: "Full-Stack Engineer",
    context: "Eshkon · Engineering team lead",
    outcome:
      "Leading a team building scalable applications for a confidential Canadian enterprise client. My work spans monorepo architecture, Node.js services, personalized agentic workflows and GCP systems used by thousands, while improving engineering productivity and delivery.",
  },
  {
    period: "Venture",
    role: "Product & Engineering",
    context: "Austrange Solutions · Maceazy",
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
