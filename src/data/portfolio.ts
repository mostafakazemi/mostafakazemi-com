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
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" }
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS"
    ]
  },
  {
    title: "Architecture & Engineering",
    skills: [
      "Frontend Architecture",
      "Component Systems",
      "Design Systems",
      "Browser Extensions",
      "Chrome Extension Development",
      "Manifest V3",
      "Shadow DOM",
      "Web Components",
      "Performance Optimization",
      "Maintainability",
      "Refactoring",
      "Legacy Migration",
      "Scalable UI Systems"
    ]
  },
  {
    title: "State, Forms & APIs",
    skills: [
      "Redux",
      "Redux Toolkit",
      "Redux Saga",
      "Pinia",
      "Redux Form",
      "API Integration",
      "REST APIs",
      "Authentication Flows",
      "Form-heavy UIs",
      "i18n-aware frontend"
    ]
  },
  {
    title: "Testing & Tooling",
    skills: [
      "Cypress",
      "Vitest",
      "Playwright",
      "Jest",
      "Vue Test Utils",
      "MSW",
      "Storybook",
      "Vite",
      "Webpack",
      "Babel",
      "pnpm",
      "ESLint",
      "Prettier",
      "Git",
      "Docker",
      "WebStorm"
    ]
  }
];

export const projects = [
  {
    title: "The Jack Westin MCAT® Chrome Extension",
    type: "Browser Extension / EdTech / Remote US Team",
    description:
      "Served as Frontend Engineer on the Jack Westin MCAT Chrome Extension, a production browser-integrated experience serving 40,000+ users on a US-based edtech platform.",
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/the-jack-westin-mcat%C2%AE-chr/jgglfdpjpddcdaeapbcfgckfheabbdpi?hl=en"
      },
      { label: "Website", href: "https://jackwestin.com/" }
    ],
    highlights: [
      "Architected frontend systems for extension UI across browser contexts and injected third-party page surfaces.",
      "Designed content-script, background communication, extension messaging, and user-state flows for reliable browser behavior.",
      "Isolated injected UI with Shadow DOM patterns to protect host pages and keep extension rendering maintainable.",
      "Standardized reusable Vue and TypeScript components for extension side-panel and browser-integrated experiences.",
      "Strengthened Cypress, Storybook, and review workflows for safer remote extension delivery."
    ],
    tags: [
      "Vue",
      "TypeScript",
      "Chrome Extension",
      "Manifest V3",
      "Shadow DOM",
      "Tailwind CSS",
      "Vite",
      "Storybook"
    ]
  },
  {
    title: "Jack Westin Website & Nuxt Platforms",
    type: "EdTech Platform / Vue / Nuxt / Production Web Applications",
    description:
      "Led senior frontend work across Jack Westin public-facing and operations-facing Vue/Nuxt platforms for an active edtech product.",
    links: [{ label: "Website", href: "https://jackwestin.com/" }],
    highlights: [
      "Owned delivery across Nuxt 2 and newer Nuxt/Vue 3 application architectures.",
      "Translated product and marketing requirements into reliable public and production web experiences.",
      "Designed SSR, generation, page-level, and reusable Vue component patterns for scalable delivery.",
      "Raised maintainability, frontend structure, production UI quality, and tooling coverage across product surfaces.",
      "Drove testing, mocks, type checks, and documentation workflows to reduce release risk."
    ],
    tags: [
      "Vue",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "Storybook",
      "Cypress",
      "Vitest",
      "Playwright"
    ]
  },
  {
    title: "Jack Westin UI Libraries",
    type: "Component Library / Design System / Web Components",
    description:
      "Standardized reusable UI libraries and component systems used across Jack Westin frontend products.",
    links: [],
    highlights: [
      "Designed reusable Vue UI components and frontend primitives for repeated product use.",
      "Created Storybook-based component documentation and reviewable UI states for faster async collaboration.",
      "Shaped production component-library architecture and package structure for cross-product adoption.",
      "Hardened typed builds, testing utilities, accessibility-minded UI patterns, and Web Component outputs.",
      "Scaled reusable UI across multiple product surfaces and development workflows."
    ],
    tags: [
      "Vue",
      "TypeScript",
      "Storybook",
      "Web Components",
      "Component Library",
      "Design System",
      "Testing"
    ]
  },
  {
    title: "Sazito",
    type: "E-commerce Platform / SaaS / Online Store Builder",
    description:
      "Owned frontend delivery on Sazito, an online store builder for the Iranian market that enables businesses to create and manage online stores.",
    links: [
      { label: "Main Website", href: "https://sazito.com/" },
      { label: "Example Store", href: "https://davidjones.ir/" },
      { label: "Example Store", href: "https://xiaomixiaomi.ir/" }
    ],
    highlights: [
      "Delivered modern React and Next.js experiences for e-commerce and SaaS workflows.",
      "Turned public-site and content requirements into maintainable, production-ready frontend surfaces.",
      "Standardized reusable UI primitives and components with TypeScript and Tailwind CSS.",
      "Structured Redux Toolkit, auth-aware UI, i18n-aware frontend, and API-connected product flows.",
      "Designed scalable frontend foundations for online-store and platform workflows."
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "E-commerce",
      "SaaS"
    ]
  },
  {
    title: "Sazito Legacy Frontend Platform",
    type: "Large React Frontend / Storefront & Admin Platform / Legacy Modernization",
    description:
      "Modernized a large legacy React frontend platform powering storefront, admin, shop, and theme-related production surfaces.",
    links: [],
    highlights: [
      "Stabilized a large React client application using Redux, Redux Saga, React Router, Webpack, and Babel.",
      "Standardized reusable UI, routing, state management, and API-connected interface patterns.",
      "Reduced legacy maintenance risk while product teams continued shipping storefront and admin features.",
      "Modernized custom build pipelines, Sass/PostCSS, code splitting, and production frontend workflows.",
      "Refactored legacy frontend code in small, reviewable steps while preserving existing behavior."
    ],
    tags: [
      "React",
      "Redux",
      "Redux Saga",
      "React Router",
      "Webpack",
      "Babel",
      "Sass",
      "Legacy Frontend"
    ]
  }
];

export const experiences = [
  {
    title: "Frontend Engineer",
    company: "Jack Westin",
    type: "Remote / Contract · Jun 2022 - Jun 2026",
    description:
      "Served as Frontend Engineer for a US-based edtech platform across a Chrome extension serving 40,000+ users, Vue/Nuxt.js applications, reusable UI libraries, Shadow DOM integrations, cross-context messaging, testing, frontend tooling, and component architecture. Coordinated remote async delivery through ClickUp, Git, code reviews, and technical documentation."
  },
  {
    title: "Senior Frontend Engineer",
    company: "Sazito",
    type: "Part-time · Jun 2022 - Present",
    description:
      "Owned React and Next.js frontend delivery for an online store builder platform. Shaped public website experiences, content frontend, reusable UI components, e-commerce flows, API integrations, legacy React modernization, Redux-based state management, custom Webpack pipelines, and maintainable frontend architecture."
  }
];

export const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin
  },
  {
    label: "GitHub",
    href: siteConfig.links.github
  },
  {
    label: "Telegram",
    href: siteConfig.links.telegram
  },
  {
    label: "WhatsApp",
    href: siteConfig.links.whatsapp
  }
];
