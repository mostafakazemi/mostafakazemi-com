export const siteConfig = {
  name: "Mostafa Kazemi",
  title: "Senior Frontend Engineer",
  domain: "https://mostafakazemi.com",
  email: "mostafa.kazeminejhad@gmail.com",
  links: {
    github: "https://github.com/mostafakazemi",
    linkedin: "https://www.linkedin.com/in/mostafakazemi/",
    telegram: "https://t.me/mesikd",
    whatsapp: "https://wa.me/989183446857"
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
    description: "Worked on the browser extension that places Jack Westin tutor solutions beside AAMC practice questions. The Chrome Web Store currently lists 40,000 users.",
    impact: "The work covered real study flows rather than a demo: written and video solutions, login and subscription states, daily passages, live sessions, retakes, analytics, and error reporting.",
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
      "Worked across Nuxt 2 and newer Vue/Nuxt codebases.",
      "Built responsive pages and product flows from design and product requirements.",
      "Integrated REST APIs and handled loading, error, and authentication states.",
      "Added tests, mocks, type checks, and documentation for reviewable remote delivery."
    ],
    tags: ["Vue", "Nuxt.js", "TypeScript", "Cypress", "Playwright"]
  },
  {
    title: "Jack Westin Shared UI Library",
    type: "Component Library / Web Components",
    description: "Contributed reusable Vue components used by product applications and the Chrome extension, including Web Component builds for isolated browser contexts.",
    impact: "The library includes documented UI states, API mocks, component tests, accessibility checks, and separate package and Web Component build paths.",
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
    description: "Build and maintain features across Sazito's storefront and admin products for online merchants, working in both modern Next.js code and a large legacy React application.",
    impact: "Recent work includes bulk product imports, advanced payment settings, shipment tracking, customer reviews, marketing attribution, product search, and quick-add-to-cart flows.",
    links: [
      { label: "Main Website", href: "https://sazito.com/" },
      { label: "Example Store", href: "https://davidjones.ir/" },
      { label: "Example Store", href: "https://xiaomixiaomi.ir/" }
    ],
    highlights: [
      "Implemented CSV and XLSX product imports with async job and error states.",
      "Built review dashboards, rating flows, image uploads, and responsive admin tables.",
      "Added payment, shipment, product, cart, and marketing-attribution features.",
      "Worked with Redux, Redux Saga, REST APIs, internationalized storefronts, and custom Webpack builds.",
      "Refactored legacy areas incrementally while preserving active product behavior."
    ],
    tags: ["React", "Next.js", "TypeScript", "Redux", "Redux Saga", "Tailwind CSS"]
  }
];

export const experiences = [
  {
    title: "Senior Frontend Engineer", company: "Sazito", type: "Part-time · Jun 2022 - Present",
    description: "Build storefront and admin features for an online store builder with React, Next.js, TypeScript, Redux, REST APIs, and Tailwind CSS. The work spans product imports, payments, reviews, shipment tracking, marketing attribution, search, cart flows, and ongoing maintenance of a large legacy React application."
  },
  {
    title: "Frontend Engineer", company: "Jack Westin", type: "Remote · Jun 2022 - Jun 2026",
    description: "Worked with a US-based edtech team across Vue and Nuxt applications, a shared component library, and a Chrome extension listed with 40,000 users. Built product features, browser-extension flows, Web Components, tests, analytics, and error reporting."
  },
  {
    title: "Frontend Developer", company: "Chamedoon", type: "Apr 2020 - Jun 2022",
    description: "Built responsive customer-facing features with Vue, Nuxt.js, Vuex, TypeScript, Sass, and REST APIs. Worked with product and backend teammates to implement requirements, handle API states, debug issues, and ship fixes."
  }
];

export const contactLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "GitHub", href: siteConfig.links.github },
  { label: "Telegram", href: siteConfig.links.telegram },
  { label: "WhatsApp", href: siteConfig.links.whatsapp }
];
