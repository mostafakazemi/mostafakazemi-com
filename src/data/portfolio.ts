export const siteConfig = {
  name: "Mostafa Kazemi",
  title: "Senior Frontend Engineer",
  domain: "https://mostafakazemi.com",
  location: "Istanbul, Turkey",
  availability: "Open to Remote Worldwide",
  email: "mostafa.kazeminejhad@gmail.com",
  links: {
    github: "https://github.com/mostafakazemi",
    linkedin: "https://www.linkedin.com/in/mostafakazemi/",
    telegram: "https://t.me/mesikd"
  }
};

export const navItems = [
  { label: "Home", href: "/#home" }, { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" }, { label: "Projects", href: "/#projects" },
  { label: "Case Studies", href: "/#case-studies" }, { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" }, { label: "Contact", href: "/#contact" }
];

export const skillGroups = [
  { title: "Vue", skills: ["Vue 3", "Nuxt.js", "Pinia", "Vuex", "Vue Test Utils", "Vitest"] },
  { title: "React", skills: ["React", "Next.js", "Redux", "Redux Toolkit", "Redux Saga", "React Router"] },
  { title: "Browser and UI", skills: ["TypeScript", "Chrome Extensions", "Manifest V3", "Shadow DOM", "Web Components", "Storybook", "Tailwind CSS", "Sass"] },
  { title: "Testing and Tooling", skills: ["Cypress", "Playwright", "MSW", "Vite", "Webpack", "Babel", "pnpm", "Git"] }
];

export const projects = [
  {
    title: "The Jack Westin MCAT® Chrome Extension",
    type: "Vue 3 / TypeScript / Chrome Extension",
    description: "Owned frontend delivery for a Vue 3 and TypeScript extension that places Jack Westin tutor solutions beside AAMC practice questions. The Chrome Web Store lists the product with 40,000+ users.",
    impact: "Designed extension UI boundaries with Shadow DOM and cross-context messaging, then shipped study, authentication, subscription, and resource workflows.",
    links: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/the-jack-westin-mcat%C2%AE-chr/jgglfdpjpddcdaeapbcfgckfheabbdpi?hl=en" },
      { label: "Website", href: "https://jackwestin.com/" }
    ],
    highlights: [
      "Built Vue 3 and TypeScript features for the injected study side panel.",
      "Implemented authentication, subscription, solution, resource-card, and retake states.",
      "Used Shadow DOM and Web Components to isolate product UI from third-party pages.",
      "Worked across content scripts, background code, storage, caching, messaging, analytics, and Sentry reporting.",
      "Tested components and flows with Storybook, Vitest, Vue Test Utils, Playwright, Cypress, and MSW."
    ],
    tags: ["Vue 3", "TypeScript", "Manifest V3", "Shadow DOM", "Vite", "Storybook"]
  },
  {
    title: "Jack Westin Web Applications",
    type: "Vue / Nuxt.js / EdTech",
    description: "Shipped public-site and student-product features across Jack Westin's Nuxt applications while working asynchronously with a US-based remote team.",
    impact: "Examples include navigation and marketing pages, billing and payment UI, study-plan updates, subscription screens, and reusable component integration.",
    links: [{ label: "Website", href: "https://jackwestin.com/" }],
    highlights: [
      "Led a backward-compatible migration of the main Nuxt 2 site to Nuxt Bridge, upgrading dependencies incrementally.",
      "Built responsive pages and product flows from design and product requirements.",
      "Integrated REST APIs and handled loading, error, and authentication states.",
      "Added tests, mocks, type checks, and documentation for reviewable remote delivery."
    ],
    tags: ["Vue", "Nuxt.js", "TypeScript", "Cypress", "Playwright"]
  },
  {
    title: "Jack Westin Shared UI Library",
    type: "Component Library / Web Components",
    description: "Built Vue 3 components in a shared UI kit used across multiple Jack Westin products, including web applications and browser-extension surfaces.",
    impact: "Centralized component maintenance and documented UI states helped keep interfaces consistent as product teams shipped changes independently.",
    links: [],
    highlights: [
      "Built session, daily-passage, dialog, dropdown, toast, and shared form components.",
      "Added responsive variants and handled authenticated, loading, error, and external-link states.",
      "Documented components and edge cases in Storybook with MSW-backed API mocks.",
      "Added Vitest and Vue Test Utils coverage, plus browser checks with Playwright."
    ],
    tags: ["Vue 3", "TypeScript", "Storybook", "Vitest", "MSW", "Web Components"]
  },
  {
    title: "Sazito Commerce Platform",
    type: "React / Next.js / E-commerce",
    description: "Full-time at Sazito since July 2026, after working part-time there since June 2022 alongside my Jack Westin role, which ended in June 2026. The commerce platform serves 6,000+ stores, 5M+ users, and records 10 trillion Iranian rials (IRR) in monthly transaction volume.",
    impact: "Moved marketing pages from React to Next.js and cut theme-builder build time from 15 minutes to 2, alongside merchant customization, reviews, and SDK-based theme work.",
    links: [
      { label: "Main Website", href: "https://sazito.com/" },
      { label: "Example Store", href: "https://davidjones.ir/" },
      { label: "Example Store", href: "https://xiaomixiaomi.ir/" }
    ],
    highlights: [
      "Owned the React-to-Next.js migration of marketing and landing pages, strengthening SSR, SEO, and Core Web Vitals.",
      "Reduced theme-builder build time from 15 minutes to 2 through theme-generation and build-workflow changes.",
      "Implemented merchant controls for fonts and primary/accent colors, plus customer reviews with photo/video uploads and admin moderation.",
      "Migrated legacy Sass/node-sass styling to Tailwind CSS while keeping active React storefront and admin features working.",
      "Partnered on a Node.js SDK/API for independent merchant themes, optimized request and payload data, and built a sample Next.js theme using the SDK."
    ],
    tags: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Node.js", "SDK"]
  },
  {
    title: "Chamedoon Travel Booking Platform",
    type: "Vue / Nuxt.js / Travel Technology",
    description: "Served as the sole frontend developer for a flight-booking and hotel-reservation service operating during the COVID-era travel downturn; the product has since been retired.",
    impact: "Historical Lighthouse scores improved from 65 to 98 for Performance, 75 to 100 for Accessibility, 90 to 100 for Best Practices, and 78 to 96 for SEO.",
    links: [],
    highlights: [
      "Owned responsive Vue and Nuxt frontend delivery using Vuex, TypeScript, Sass, and REST APIs.",
      "Addressed FCP, LCP, CLS, and TBT alongside accessibility and SEO issues.",
      "Worked directly with product and backend teammates on requirements, API behavior, debugging, and releases."
    ],
    tags: ["Vue.js", "Nuxt.js", "Vuex", "TypeScript", "Sass", "REST APIs", "Core Web Vitals"]
  }
];

export const experiences = [
  {
    title: "Senior Frontend Engineer", company: "Sazito", type: "Part-time to Jun 2026 · Full-time from Jul 2026",
    description: "Deliver React and Next.js features for a commerce platform serving 6,000+ stores, 5M+ users, and 10 trillion Iranian rials (IRR) in monthly transaction volume. Owned the marketing-page migration from React to Next.js, reduced theme-builder build time from 15 minutes to 2, and shipped merchant theme customization, customer reviews with media uploads, and a sample Next.js theme using a jointly developed Node.js SDK."
  },
  {
    title: "Frontend Engineer", company: "Jack Westin", type: "Remote · Jun 2022 - Jun 2026",
    description: "Owned frontend work for a Chrome extension listed with 40,000+ users, led a backward-compatible Nuxt 2 to Nuxt Bridge migration, built Vue 3 UI-kit components reused across products, and delivered SEO-focused Nuxt 4 pages. Added automated tests and reviewed code with a US-based remote team."
  },
  {
    title: "Frontend Developer", company: "Chamedoon", type: "Apr 2020 - Jun 2022",
    description: "As the sole frontend developer for a flight-booking and hotel-reservation platform, built responsive Vue/Nuxt interfaces and REST API workflows. Improved historical Lighthouse scores to 98 Performance, 100 Accessibility, 100 Best Practices, and 96 SEO through work on Core Web Vitals and accessibility."
  }
];

export const contactLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "GitHub", href: siteConfig.links.github },
  { label: "Telegram", href: siteConfig.links.telegram }
];
