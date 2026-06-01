export const siteConfig = {
  name: "Mostafa Kazemi",
  title: "Senior Frontend Engineer",
  domain: "https://mostafakazemi.com",
  email: "mostafa.kazeminejhad@gmail.com",
  links: {
    github: "https://github.com/mostafakazemi",
    linkedin: "https://www.linkedin.com/in/mostafa-kazeminejad-70aba2237/",
    telegram: "https://t.me/mesikd",
    whatsapp: "https://wa.me/989183446857"
  }
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
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
    title: "The Jack Westin MCAT(R) Chrome Extension",
    type: "Browser Extension / EdTech / Remote US Team",
    description:
      "Contributed to the Jack Westin MCAT Chrome Extension, a production browser extension for a US-based edtech platform focused on MCAT preparation.",
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/the-jack-westin-mcat%C2%AE-chr/jgglfdpjpddcdaeapbcfgckfheabbdpi?hl=en"
      },
      { label: "Website", href: "https://jackwestin.com/" }
    ],
    highlights: [
      "Worked on production browser-extension features and frontend UI inside extension contexts.",
      "Worked with content scripts, background communication, extension messaging, and user state flows.",
      "Implemented Shadow DOM-based UI injection and isolated UI rendering patterns.",
      "Built reusable Vue and TypeScript UI components for extension side-panel experiences.",
      "Collaborated remotely with a US-based team using async workflows, ClickUp, Git, and code reviews."
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
      "Contributed to Jack Westin public-facing and operations-facing frontend platforms, including Nuxt and Vue applications for an edtech product.",
    links: [{ label: "Website", href: "https://jackwestin.com/" }],
    highlights: [
      "Worked across Nuxt 2 and modern Nuxt/Vue 3 application architectures.",
      "Contributed to public, marketing, and production web application experiences.",
      "Worked with SSR, generation workflows, page-level implementation, and reusable Vue components.",
      "Improved maintainability, frontend structure, production UI quality, and tooling coverage.",
      "Used testing, mocks, type checks, and frontend documentation workflows."
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
      "Worked on reusable UI libraries and component systems used across Jack Westin frontend products.",
    links: [],
    highlights: [
      "Built and maintained reusable Vue UI components and frontend primitives.",
      "Worked with Storybook-based component documentation and reviewable UI states.",
      "Contributed to production component-library architecture and package structure.",
      "Supported typed builds, testing utilities, accessibility-minded UI patterns, and Web Component outputs.",
      "Helped reusable UI scale across multiple product surfaces without exposing product internals."
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
      "Worked on Sazito, an online store builder for the Iranian market that helps businesses create and manage online stores.",
    links: [
      { label: "Main Website", href: "https://sazito.com/" },
      { label: "Example Store", href: "https://davidjones.ir/" },
      { label: "Example Store", href: "https://xiaomixiaomi.ir/" }
    ],
    highlights: [
      "Worked across modern React and Next.js frontend experiences.",
      "Contributed to public site and content-style frontend experiences.",
      "Built reusable UI primitives and components with TypeScript and Tailwind CSS.",
      "Worked with Redux Toolkit, auth-aware UI, i18n-aware frontend, and API-friendly features.",
      "Contributed to scalable frontend structure for e-commerce and SaaS flows."
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
      "Worked with a large legacy React frontend platform supporting multiple production surfaces such as storefront, admin, shop, and theme-related builds.",
    links: [],
    highlights: [
      "Worked with a large React client application using Redux, Redux Saga, React Router, Webpack, and Babel.",
      "Contributed to reusable UI, routing, state management, and API-connected interfaces.",
      "Helped maintain and improve legacy frontend behavior while supporting ongoing product needs.",
      "Worked with custom build pipelines, Sass/PostCSS, code splitting, and production frontend workflows.",
      "Refactored and improved frontend code carefully while preserving existing behavior."
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
    type: "Remote / Contract",
    description:
      "Built and maintained production frontend features for a US-based edtech platform. Worked across Chrome Extension features, Vue/Nuxt.js applications, React/Next.js app work, reusable UI libraries, Web Components, Shadow DOM integrations, extension messaging, authentication flows, testing, frontend tooling, and frontend architecture. Collaborated remotely using async communication, ClickUp, Git, code reviews, and technical documentation."
  },
  {
    title: "Frontend Engineer",
    company: "Sazito",
    type: "Part-time",
    description:
      "Worked on React and Next.js frontend features for an online store builder platform. Contributed to public website experiences, blog/content frontend, reusable UI components, e-commerce flows, API integrations, legacy React frontend maintenance, Redux-based state management, custom Webpack pipelines, and maintainable frontend architecture."
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
