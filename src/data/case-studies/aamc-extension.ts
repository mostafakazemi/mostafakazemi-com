import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "aamc-extension",
  title: "AAMC Chrome Extension",
  company: "Jack Westin",
  period: "2022 - Present",
  role: "Frontend Engineer",
  summary:
    "A production browser-extension case study focused on building Vue 3 and TypeScript extension interfaces for MCAT study workflows while keeping injected UI isolated, maintainable, and performance-conscious.",
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
    "Students needed browser-integrated study tooling that could appear inside third-party educational pages without disrupting the host page. The frontend work needed to stay isolated from page styles and markup, coordinate state across extension contexts, and remain maintainable as product needs evolved.",
  responsibilities: [
    "Built and maintained browser-extension UI surfaces with Vue 3 and TypeScript.",
    "Implemented isolated UI rendering patterns with Shadow DOM to reduce style and DOM conflicts on host pages.",
    "Worked on state management and data flow across injected UI, content-script, and extension contexts.",
    "Implemented cross-context communication patterns for extension messaging and user-state updates.",
    "Created reusable UI primitives for browser-integrated experiences.",
    "Improved frontend performance by keeping injected UI lightweight and reducing unnecessary work in extension flows."
  ],
  challenges: [
    "Rendering product UI inside third-party pages while minimizing style collisions and DOM interference.",
    "Coordinating state between extension contexts without relying on private page-specific assumptions.",
    "Keeping extension UI predictable across browser lifecycle events and changing host-page conditions.",
    "Balancing feature delivery with long-term maintainability in a production browser-extension codebase."
  ],
  results: [
    "Delivered production browser-extension experiences for MCAT study workflows.",
    "Improved maintainability through typed Vue components, reusable UI patterns, and clearer frontend boundaries.",
    "Supported a more reliable browser-integrated experience by isolating UI and managing cross-context communication carefully.",
    "Contributed to frontend architecture that can evolve across browser-integrated product surfaces."
  ],
  learnings: [
    "Browser extensions benefit from strict boundaries between host-page behavior and product UI.",
    "Shadow DOM is most effective when paired with disciplined state management and messaging patterns.",
    "Small performance choices matter more when UI is injected into pages outside the product team's full control."
  ],
  featured: true
} satisfies CaseStudy;
