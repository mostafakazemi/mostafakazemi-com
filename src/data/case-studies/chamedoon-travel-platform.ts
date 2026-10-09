import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "chamedoon-travel-platform",
  title: "Chamedoon Travel Booking Platform",
  company: "Chamedoon",
  period: "Apr 2020 - Jun 2022",
  role: "Frontend Developer",
  summary: "As the sole frontend developer, delivered the Vue/Nuxt experience for a flight-booking and hotel-reservation service during the COVID-era travel downturn. The product has since been retired.",
  technologies: ["Vue.js", "Nuxt.js", "Vuex", "TypeScript", "JavaScript", "REST APIs", "Sass", "Core Web Vitals", "Lighthouse"],
  problem: "The travel product needed responsive booking and reservation flows with dependable API-driven interfaces, while frontend performance, accessibility, and search visibility needed attention.",
  responsibilities: [
    "Owned frontend implementation across Vue.js and Nuxt.js as the team's sole frontend developer.",
    "Built responsive booking interfaces with Sass, TypeScript, Vuex, and REST API integrations.",
    "Worked directly with product and backend teammates on requirements, API behavior, debugging, and releases.",
    "Diagnosed loading, layout stability, responsiveness, and accessibility issues using Lighthouse and Core Web Vitals signals."
  ],
  challenges: [
    "Improving performance across FCP, LCP, CLS, and TBT without access to a larger frontend team.",
    "Balancing responsive booking flows with API loading and error states.",
    "Maintaining a service through a period of sharply reduced travel demand."
  ],
  results: [
    "Historical Lighthouse scores during the project improved from 65 to 98 for Performance, 75 to 100 for Accessibility, 90 to 100 for Best Practices, and 78 to 96 for SEO.",
    "Delivered responsive flight and hotel booking interfaces and maintained frontend integrations through the product's operating period."
  ],
  learnings: [
    "Performance improvements are most actionable when tied to specific loading, layout, and interaction issues.",
    "A solo frontend role benefits from clear API contracts and close product/backend collaboration.",
    "Historical performance scores should be presented with their project context, especially when a product is no longer live."
  ],
  featured: true
} satisfies CaseStudy;
