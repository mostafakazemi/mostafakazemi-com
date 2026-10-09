import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "jackwestin-platform",
  title: "Jack Westin Web Applications and UI Library",
  company: "Jack Westin",
  period: "Jun 2022 - Jun 2026",
  role: "Frontend Engineer",
  summary: "Owned frontend initiatives across Jack Westin's remote edtech products: a backward-compatible Nuxt 2 to Nuxt Bridge migration, a shared Vue 3 UI kit, Nuxt 4 SSR marketing pages, and browser-extension experiences for a Chrome Web Store product listed with 40,000+ users.",
  technologies: ["Vue", "Vue 3", "Nuxt 2", "Nuxt Bridge", "Nuxt 4", "TypeScript", "Browser Extensions", "Shadow DOM", "Cypress", "Storybook", "Vitest", "Vue Test Utils", "Playwright", "MSW", "Web Components"],
  problem: "The team needed to evolve its public website and student products across older Nuxt 2 code, newer Vue 3 systems, and browser-extension interfaces while preserving compatibility and keeping UI patterns consistent.",
  responsibilities: [
    "Led the main site's Nuxt 2 to Nuxt Bridge migration, upgrading dependencies incrementally and preserving backward compatibility.",
    "Built Vue 3 components in a shared UI kit reused across multiple products, enabling centralized updates and more consistent interfaces.",
    "Delivered SEO-focused marketing and landing pages in Nuxt 4 using server-rendering and generation workflows.",
    "Owned frontend delivery for a Chrome extension listed with 40,000+ users, including Vue 3 UI, Shadow DOM isolation, and cross-context messaging.",
    "Added comprehensive automated tests for extension and shared UI flows, and reviewed teammate code in a US-based remote team."
  ],
  challenges: [
    "Upgrading a mature Nuxt 2 codebase without breaking existing behavior or introducing a disruptive rewrite.",
    "Keeping shared Vue 3 components portable across web apps and isolated browser-extension contexts.",
    "Coordinating UI state and messaging across extension contexts while maintaining testable boundaries."
  ],
  results: [
    "Modernized the main site through a backward-compatible Nuxt Bridge migration and delivered SEO-oriented Nuxt 4 pages.",
    "Extended the shared UI kit across multiple products, reducing duplicated component maintenance and aligning common interaction patterns.",
    "Shipped extension workflows for a product listed with 40,000+ users, with automated coverage for UI states and browser boundaries.",
    "Improved remote delivery through code reviews, component documentation, and tests for realistic API and session states."
  ],
  learnings: [
    "Backward-compatible modernization lets a product adopt newer tooling without sacrificing delivery continuity.",
    "A shared UI kit creates value when ownership, versioning, and adoption work across product boundaries.",
    "Tests and clear written reviews make asynchronous cross-time-zone collaboration more dependable."
  ],
  featured: true
} satisfies CaseStudy;
