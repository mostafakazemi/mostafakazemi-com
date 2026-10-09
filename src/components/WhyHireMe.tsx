const reasons = [
  {
    title: "Production Work in Both Stacks",
    description:
      "Six-plus years building production products across React/Next.js and Vue/Nuxt.js ecosystems."
  },
  {
    title: "Concrete Product Features",
    description:
      "A 15-to-2-minute theme-builder build reduction, a 40,000+ user extension, shared UI systems, SSR migrations, and merchant-facing commerce features."
  },
  {
    title: "Remote Team Experience",
    description:
      "Four years of asynchronous collaboration with a US-based team, including product and code reviews, plus direct cross-functional delivery at Sazito."
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
            A senior frontend engineer who can work across product details and
            existing codebases.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
            I work across React/Next.js and Vue/Nuxt.js, taking features from
            architecture and API integration through testing, release, and
            maintainable follow-up work.
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
