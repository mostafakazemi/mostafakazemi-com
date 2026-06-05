import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "sazito-platform",
  title: "Sazito Platform",
  company: "Sazito",
  period: "2022 - Present",
  role: "Senior Frontend Engineer",
  summary:
    "A React and Next.js case study focused on e-commerce platform work, online store builder experiences, reusable UI components, API-connected frontend flows, and maintainable frontend structure.",
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
    "The platform needed frontend work that could support e-commerce flows, store-builder experiences, API integrations, and ongoing product changes while staying maintainable across both modern Next.js surfaces and legacy React areas.",
  responsibilities: [
    "Developed and maintained React and Next.js frontend experiences for e-commerce and online store builder workflows.",
    "Built reusable UI components and frontend patterns with TypeScript and Tailwind CSS.",
    "Worked on API integrations, auth-aware UI behavior, and stateful product flows.",
    "Helped maintain legacy React areas using Redux and related frontend tooling.",
    "Contributed to performance, maintainability, and developer experience improvements across frontend surfaces.",
    "Worked with product and engineering needs while keeping changes incremental and production-focused."
  ],
  challenges: [
    "Supporting product development across both modern Next.js work and legacy React code paths.",
    "Keeping reusable UI patterns consistent across different platform surfaces.",
    "Managing stateful e-commerce interactions without making frontend flows harder to reason about.",
    "Improving performance and maintainability while preserving existing production behavior."
  ],
  results: [
    "Contributed to scalable frontend structure for e-commerce and SaaS-style product workflows.",
    "Built reusable components that helped reduce repeated UI work across platform areas.",
    "Helped improve maintainability through TypeScript, clearer component boundaries, and careful refactoring.",
    "Supported ongoing platform development across modern and legacy frontend surfaces."
  ],
  learnings: [
    "E-commerce platforms benefit from reusable UI primitives that can adapt across many product contexts.",
    "Legacy maintenance is most effective when improvements are incremental and behavior-preserving.",
    "Clear state and API boundaries make frontend features easier to extend as platform needs grow."
  ],
  featured: true
} satisfies CaseStudy;
