import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "aamc-extension",
  title: "AAMC Chrome Extension",
  company: "Jack Westin",
  period: "2022 - Jun 2026",
  role: "Frontend Engineer",
  summary:
    "A production browser-extension case study focused on Vue 3 and TypeScript extension interfaces for a Chrome extension serving 40,000+ users, while keeping injected UI isolated, maintainable, and performance-conscious.",
  technologies: [
    "Vue 3",
    "TypeScript",
    "Browser Extensions",
    "Shadow DOM",
    "State Management",
    "Cross-context Communication",
    "Content Scripts",
    "Performance Optimization"
  ],
  problem:
    "Students needed browser-integrated study tooling that could appear inside third-party educational pages without disrupting the host page. At 40,000+ Chrome Web Store users, the frontend architecture needed to stay isolated from page styles and markup, coordinate state across extension contexts, and remain maintainable as product needs evolved.",
  responsibilities: [
    "Architected Vue 3 and TypeScript UI modules for browser-integrated study workflows.",
    "Implemented isolated UI rendering patterns with Shadow DOM to reduce style and DOM conflicts on host pages.",
    "Structured state management and data flow across injected UI, content-script, and extension contexts.",
    "Implemented cross-context communication patterns for extension messaging and user-state updates.",
    "Created reusable UI primitives for browser-integrated experiences.",
    "Reduced extension runtime overhead by keeping injected UI lightweight and limiting unnecessary processing in browser flows."
  ],
  challenges: [
    "Rendering product UI inside third-party pages while minimizing style collisions and DOM interference.",
    "Coordinating state between extension contexts without relying on private page-specific assumptions.",
    "Keeping extension UI predictable across browser lifecycle events and changing host-page conditions.",
    "Balancing feature delivery with long-term maintainability in a production browser-extension codebase."
  ],
  results: [
    "Delivered production browser-extension experiences for MCAT study workflows at 40,000+ user product scale.",
    "Raised maintainability through typed Vue components, reusable UI patterns, and clearer frontend boundaries.",
    "Stabilized browser-integrated experiences by isolating UI and managing cross-context communication carefully.",
    "Established frontend architecture that can evolve across browser-integrated product surfaces."
  ],
  learnings: [
    "Browser extensions benefit from strict boundaries between host-page behavior and product UI.",
    "Shadow DOM is most effective when paired with disciplined state management and messaging patterns.",
    "Small performance choices matter more when UI is injected into pages outside the product team's full control."
  ],
  featured: true
} satisfies CaseStudy;
