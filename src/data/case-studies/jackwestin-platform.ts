import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "jackwestin-platform",
  title: "Jack Westin Platform",
  company: "Jack Westin",
  period: "2022 - Jun 2026",
  role: "Frontend Engineer",
  summary:
    "A Vue and Nuxt.js case study focused on architectural frontend responsibility across edtech platform work, public-facing web experiences, reusable UI libraries, component systems, SSR and generation workflows, testing, and remote collaboration with a US-based team.",
  technologies: [
    "Vue",
    "Nuxt.js",
    "Vue 3",
    "TypeScript",
    "Storybook",
    "Cypress",
    "Vitest",
    "Playwright",
    "Component Libraries",
    "SSR",
    "Static Generation"
  ],
  problem:
    "The platform needed maintainable frontend work across public-facing edtech pages, Nuxt/Vue application surfaces, and reusable UI systems while supporting production workflows, testing, and remote collaboration across time zones.",
  responsibilities: [
    "Owned Vue and Nuxt.js frontend experiences for edtech platform surfaces.",
    "Translated product requirements into public-facing website pages, production UI, and reusable Vue components.",
    "Standardized component libraries and Storybook-based UI documentation workflows.",
    "Designed SSR and generation workflows across Nuxt-based frontend applications.",
    "Drove testing coverage and tooling through Cypress, Vitest, Playwright, and typed workflows.",
    "Coordinated remote delivery with a US-based team through async communication, reviews, and task management."
  ],
  challenges: [
    "Working across Nuxt 2 and newer Nuxt/Vue 3 architectures with different conventions and constraints.",
    "Keeping public-facing UI maintainable while supporting production delivery needs.",
    "Balancing reusable component design with product-specific page implementation.",
    "Maintaining reliable frontend workflows across remote collaboration and multiple product surfaces."
  ],
  results: [
    "Delivered production Vue and Nuxt.js applications used by MCAT students.",
    "Raised frontend maintainability through reusable UI systems and component documentation.",
    "Reduced delivery risk through testing, typed implementation, and reviewable UI states.",
    "Operated effectively with a US-based remote team across product, design, and engineering workflows."
  ],
  learnings: [
    "Reusable UI systems work best when documentation and production usage evolve together.",
    "Nuxt applications benefit from clear boundaries between page implementation, data flow, and shared components.",
    "Remote frontend work depends on readable code, explicit review context, and steady communication."
  ],
  featured: true
} satisfies CaseStudy;
