export type ExperienceKind = "training" | "founder";

export type Experience = {
  id: string;
  kind: ExperienceKind;
  category: string; // small visual label
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  disclaimer?: string;
};

export const experiences: Experience[] = [
  {
    id: "siemens-iot-training",
    kind: "training",
    category: "Technical Training",
    role: "Industrial IoT · Hands-on Training",
    org: "NITTTR Bhopal × Siemens Center of Excellence",
    period: "March 2025 · 5 days",
    location: "Bhopal, Madhya Pradesh, IN",
    summary:
      "Intensive 5-day hands-on Industrial IoT training program at NITTTR Bhopal in collaboration with the Siemens Center of Excellence. Not employment or an internship at Siemens — a structured professional training on Industry 4.0 tooling.",
    highlights: [
      "Worked with Siemens Insights Hub for cloud-side telemetry, dashboards, and asset modeling.",
      "Explored digital-twin use cases across 3D printers, CNC machines, and electric motors.",
      "Built an IoT use case for pumps with real-time temperature and flow monitoring.",
      "Used Node-RED to wire sensor streams into live dashboards.",
      "Hands-on exposure to sensors, data acquisition, cloud integration, and Industry 4.0 workflows.",
    ],
    skills: [
      "Industrial IoT",
      "Siemens Insights Hub",
      "Node-RED",
      "Digital Twins",
      "Sensors",
      "Data Acquisition",
      "Cloud Integration",
      "Industry 4.0",
    ],
    disclaimer:
      "Professional technical training program — not employment with Siemens.",
  },
  {
    id: "tarunika-founder",
    kind: "founder",
    category: "Founder / Builder",
    role: "Founder · Product & Web Engineering",
    org: "Tarunika — Premium Indian Food & Pickle Brand",
    period: "Ongoing",
    location: "India · Remote",
    summary:
      "Building Tarunika, a premium Indian food and pickle brand, end-to-end — from brand system and product catalog structure to the e-commerce architecture and responsive web experience.",
    highlights: [
      "Owning product direction, catalog structure, and brand system for a premium food line.",
      "Designing and building the storefront experience with a modern web stack focused on responsive UX.",
      "Architecting the e-commerce flow: catalog, content, payments, and media pipeline.",
      "Handling day-to-day business operations alongside the technical build.",
    ],
    skills: [
      "Product Development",
      "Web Engineering",
      "E-commerce",
      "UI / UX",
      "Brand Systems",
      "Entrepreneurship",
    ],
    disclaimer:
      "Target architecture: Next.js, React, TypeScript, Tailwind CSS, GSAP / Framer Motion, Supabase, Razorpay, Cloudinary. Stack reflects the planned build; deployment status evolves as the product ships.",
  },
];
