import { SectionHeading } from "@/components/SectionHeading";

const strengths = [
  "Vue and Nuxt applications",
  "React and Next.js products",
  "reusable Vue components",
  "Chrome extensions",
  "Shadow DOM and Web Components",
  "state management",
  "authentication flows",
  "testing",
  "REST API integration",
  "responsive interfaces",
  "legacy React maintenance",
  "Core Web Vitals and accessibility",
  "SSR and SEO"
];

export function About() {
  return (
    <section id="about" className="border-b border-neutral-200 py-16 dark:border-neutral-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          label="About"
          title="Frontend work across products, platforms, and shared systems."
          description="Translating product requirements into maintainable interfaces, from commerce workflows and SSR websites to browser-integrated study tools."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16">
          <div className="space-y-5 text-pretty text-base leading-7 text-neutral-600 dark:text-neutral-300">
            <p>
              I&apos;m a Senior Frontend Engineer who works comfortably in both
              the React/Next.js and Vue/Nuxt.js ecosystems. Most of my work sits
              where product requirements meet long-lived code: commerce
              storefronts and admin tools, SSR marketing sites, shared component
              libraries, and browser extensions that run inside other
              people&apos;s pages.
            </p>
            <p>
              I&apos;m currently at Sazito, building storefront, admin, and
              theme tooling for a multi-tenant commerce platform. Before that I
              spent four years with Jack Westin&apos;s US-based remote team,
              where I owned their MCAT Chrome extension, a shared Vue 3 UI kit,
              and an incremental Nuxt 2 to Nuxt Bridge migration.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-5 dark:border-neutral-800 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
              Areas of practice
            </p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
