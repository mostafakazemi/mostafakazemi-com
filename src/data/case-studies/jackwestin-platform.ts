import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "jackwestin-platform",
  title: "Jack Westin Web Applications and UI Library",
  company: "Jack Westin",
  period: "2022 - Jun 2026",
  role: "Frontend Engineer",
  summary: "Frontend work across Nuxt applications and a shared Vue 3 component library for a US-based remote edtech team.",
  technologies: ["Vue", "Vue 3", "Nuxt.js", "TypeScript", "Storybook", "Vitest", "Vue Test Utils", "Playwright", "MSW", "Web Components"],
  problem: "Product work spanned public pages, student workflows, older Nuxt code, newer Vue components, and UI that also needed to run as standalone Web Components.",
  responsibilities: [
    "Shipped navigation, billing, study-plan, subscription, marketing, and other student-facing flows in Nuxt applications.",
    "Built reusable session, daily-passage, dialog, toast, dropdown, and form components.",
    "Added responsive variants and handled authenticated, loading, error, canceled, and external-link states.",
    "Documented component behavior in Storybook and reused MSW handlers between stories and tests.",
    "Worked asynchronously through scoped tasks, merge requests, code reviews, and written implementation notes."
  ],
  challenges: [
    "Supporting both older Nuxt conventions and newer Vue 3 component patterns.",
    "Making the same components work in application pages and isolated Web Component builds.",
    "Covering API and session edge cases without depending on live production data."
  ],
  results: [
    "Delivered product pages and components used across the website, student product, and browser extension.",
    "Added automated coverage for responsive behavior, dialogs, API failures, session state, and Web Component styling.",
    "Created reviewable UI states that teammates could inspect without reproducing every backend condition."
  ],
  learnings: [
    "A shared component is useful only when its API covers real product states without hiding too much behavior.",
    "Mocks are most valuable when stories and tests share the same response contracts.",
    "Small written handoffs reduce ambiguity when a remote team works across time zones."
  ],
  featured: true
} satisfies CaseStudy;
