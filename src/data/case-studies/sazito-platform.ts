import type { CaseStudy } from "./types";

export const caseStudy = {
  slug: "sazito-platform",
  title: "Sazito Commerce Platform",
  company: "Sazito",
  period: "Jun 2022 - Present",
  role: "Senior Frontend Engineer",
  summary: "After working part-time at Sazito from June 2022, I transitioned to full-time in July 2026, following the end of my Jack Westin role in June. Frontend ownership spans React and Next.js commerce products, from replatforming marketing pages and modernizing build workflows to merchant customization and reviews. The platform serves 6,000+ stores and 5M+ users, with 10 trillion Iranian rials (IRR) in monthly transaction volume.",
  technologies: ["React", "Next.js", "TypeScript", "Redux", "Redux Saga", "React Router", "REST APIs", "Tailwind CSS", "Webpack", "Node.js"],
  problem: "The commerce platform needed to evolve merchant and storefront experiences while keeping a large legacy React application reliable and making theme development faster and more flexible.",
  responsibilities: [
    "Owned the React-to-Next.js migration of marketing and landing pages, improving SEO and Core Web Vitals through SSR and a modern delivery path.",
    "Restructured theme-generation and build workflows, reducing theme-builder build time from 15 minutes to 2.",
    "Implemented merchant controls for font and primary/accent colors, enabling store owners to personalize storefronts without code changes.",
    "Delivered customer reviews with photo and video attachments and moderation tools for store administrators.",
    "Migrated legacy Sass/node-sass styling to Tailwind CSS while maintaining active React storefront and admin flows.",
    "Partnered with a teammate on a Node.js SDK/API for independent merchant themes, optimized request and payload data, and built a sample Next.js theme using the SDK."
  ],
  challenges: [
    "Modernizing active React code without disrupting production storefronts and admin workflows.",
    "Reducing build time while preserving a flexible theme system for many merchant stores.",
    "Designing SDK-backed themes that can operate independently from the platform's existing theme catalog."
  ],
  results: [
    "Cut theme-builder build time by 13 minutes, from 15 minutes to 2.",
    "Expanded merchant control over branding and delivered review moderation with media attachments.",
    "Improved the SEO and Core Web Vitals foundation for marketing pages through the Next.js migration.",
    "Advanced a collaborative SDK effort and delivered a working reference theme using the new integration."
  ],
  learnings: [
    "Incremental migrations can deliver SEO and performance gains without pausing ongoing product work.",
    "Build time is a product constraint: faster feedback makes theme iteration more practical for the team.",
    "A theme SDK needs a real consuming implementation to validate its API and payload design."
  ],
  featured: true
} satisfies CaseStudy;
