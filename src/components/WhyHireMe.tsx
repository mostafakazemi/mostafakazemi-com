const reasons = [
  {
    title: "Senior Frontend Across Modern Stacks",
    description:
      "Production experience across React, Next.js, Vue, Nuxt.js, and TypeScript, including e-commerce platform work supporting 6,000+ stores and 5M+ users."
  },
  {
    title: "Architecture Beyond Page Delivery",
    description:
      "Frontend architecture, state management, testing, reusable component systems, and performance work for products that need to stay maintainable as teams and features grow."
  },
  {
    title: "Browser Extension Product Scale",
    description:
      "Browser-extension UI architecture for a Chrome extension listed with 40,000+ users, including Shadow DOM isolation, cross-context messaging, and reusable Vue 3 interfaces."
  }
];

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="border-b border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            WHY HIRE ME
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            A senior frontend engineer for product teams that need scale,
            clarity, and delivery.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
            I bring broad frontend range without diluting focus: architecture,
            reusable UI systems, browser-integrated products, and production
            delivery across React/Next.js and Vue/Nuxt.js.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
