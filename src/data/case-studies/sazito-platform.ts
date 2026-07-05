import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "sazito-platform",
  title: "Sazito Platform",
  company: "Sazito",
  period: "2022 - Present",
  role: "Senior Frontend Engineer",
  summary:
    "A React and Next.js case study focused on e-commerce platform work for an online store builder supporting 6,000+ stores, 5M+ users, and roughly 1 trillion toman in monthly transaction volume.",
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Redux",
    "Redux Toolkit",
    "REST APIs",
    "Tailwind CSS",
    "E-commerce",
    "Performance Optimization"
  ],
  problem:
    "The platform needed frontend work that could support e-commerce flows, store-builder experiences, API integrations, and ongoing product changes at meaningful scale: 6,000+ stores, 5M+ users, and roughly 1 trillion toman in monthly transaction volume.",
  responsibilities: [
    "Owned React and Next.js frontend experiences for e-commerce and online store builder workflows.",
    "Standardized reusable UI components and frontend patterns with TypeScript and Tailwind CSS.",
    "Structured API integrations, auth-aware UI behavior, and stateful product flows.",
    "Modernized legacy React areas using Redux and related frontend tooling.",
    "Drove performance, maintainability, and developer-experience work across frontend surfaces.",
    "Balanced product and engineering needs while keeping changes incremental and production-focused."
  ],
  challenges: [
    "Supporting product development across both modern Next.js work and legacy React code paths.",
    "Keeping reusable UI patterns consistent across different platform surfaces.",
    "Managing stateful e-commerce interactions without making frontend flows harder to reason about.",
    "Improving performance and maintainability while preserving existing production behavior."
  ],
  results: [
    "Created scalable frontend structure for e-commerce and SaaS-style product workflows operating across thousands of stores.",
    "Reduced repeated UI work through reusable components shared across platform areas.",
    "Raised maintainability through TypeScript, clearer component boundaries, and careful refactoring.",
    "Kept platform delivery moving across modern and legacy frontend surfaces serving high-volume storefront usage."
  ],
  learnings: [
    "E-commerce platforms benefit from reusable UI primitives that can adapt across many product contexts.",
    "Legacy maintenance is most effective when improvements are incremental and behavior-preserving.",
    "Clear state and API boundaries make frontend features easier to extend as platform needs grow."
  ],
  featured: true
} satisfies CaseStudy;
