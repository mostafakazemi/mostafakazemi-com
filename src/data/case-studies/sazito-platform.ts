import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "sazito-platform",
  title: "Sazito Commerce Platform",
  company: "Sazito",
  period: "2022 - Present",
  role: "Senior Frontend Engineer",
  summary: "React and Next.js work across storefront and admin products for an online store builder, including new product features and ongoing maintenance of a large legacy application.",
  technologies: ["React", "Next.js", "TypeScript", "Redux", "Redux Saga", "React Router", "REST APIs", "Tailwind CSS", "Webpack"],
  problem: "The team ships new merchant and storefront features while supporting older React, Redux, and custom Webpack code that is still active in production.",
  responsibilities: [
    "Implemented CSV and XLSX product import flows with async job, download, expired, and upload-error states.",
    "Built customer-review dashboards, rating and recommendation flows, image uploads, and responsive tables.",
    "Added payment settings, shipment tracking, marketing attribution, product search, and quick-add-to-cart features.",
    "Worked with authentication-aware UI, form-heavy admin tools, REST APIs, Redux, Redux Saga, and internationalized storefronts.",
    "Refactored legacy code in small changes while preserving existing storefront and admin behavior."
  ],
  challenges: [
    "Adding features to a large application with several storefront themes and separate admin and server bundles.",
    "Keeping async imports, payments, tracking data, and API errors understandable to merchants.",
    "Introducing newer styling and shared UI without forcing a risky full rewrite."
  ],
  results: [
    "Shipped merchant workflows for bulk catalog updates, payments, reviews, shipping, analytics, and merchandising.",
    "Improved failure handling for product imports, reviews, payments, widgets, and other API-driven screens.",
    "Moved selected areas toward shared UI and Tailwind foundations while keeping legacy flows working."
  ],
  learnings: [
    "Legacy modernization works best when each change also solves a current product need.",
    "Async jobs need explicit progress, failure, expiry, and recovery states in the interface.",
    "Commerce interfaces must make pricing, payment, shipping, and tracking states easy to verify."
  ],
  featured: true
} satisfies CaseStudy;
