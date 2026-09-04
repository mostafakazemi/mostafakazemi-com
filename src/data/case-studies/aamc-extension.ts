import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "aamc-extension",
  title: "Jack Westin MCAT Chrome Extension",
  company: "Jack Westin",
  period: "2022 - Jun 2026",
  role: "Frontend Engineer",
  summary: "Vue 3 and TypeScript work on a production Chrome extension that adds Jack Westin tutor solutions beside AAMC practice questions. The Chrome Web Store lists 40,000 users.",
  technologies: ["Vue 3", "TypeScript", "Chrome Extensions", "Shadow DOM", "Web Components", "Vite", "Storybook", "Vitest", "Cypress"],
  problem: "The extension had to place a full study interface inside pages controlled by another product. It needed to recognize question and passage states, show the right written or video solution, and keep its styles and behavior separate from the host page.",
  responsibilities: [
    "Built features for the injected side panel, including solution, resource, login, subscription, and retake states.",
    "Used Shadow DOM and Web Components to isolate interface markup and styles from AAMC pages.",
    "Worked on communication and shared state across content scripts, background code, storage, and extension UI.",
    "Added analytics events, filtered noisy error reports, and improved Sentry context for production issues.",
    "Tested components and user states with Storybook, Vitest, Vue Test Utils, Playwright, Cypress, and MSW."
  ],
  challenges: [
    "Keeping injected UI stable when host-page markup and browser lifecycle events change.",
    "Synchronizing authentication, subscription, question, passage, and solution state across extension contexts.",
    "Avoiding style collisions and controlling overlays, dialogs, and media inside Shadow DOM."
  ],
  results: [
    "Shipped written and video solution flows, daily-passage and live-session resources, and improved retake behavior.",
    "Kept browser-specific behavior behind typed components, composables, messaging, and storage utilities.",
    "Made production issues easier to investigate through analytics validation, Sentry filtering, and clearer error context."
  ],
  learnings: [
    "Injected interfaces need explicit boundaries for DOM, CSS, state, and browser communication.",
    "Authentication and subscription changes should invalidate related cached data in one predictable place.",
    "Component stories and realistic API mocks are especially useful for browser states that are hard to reproduce manually."
  ],
  featured: true
} satisfies CaseStudy;
