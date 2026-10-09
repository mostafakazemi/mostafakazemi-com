import { SectionHeading } from "@/components/SectionHeading";

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
    <section id="why-hire-me" className="border-b border-neutral-200 py-16 dark:border-neutral-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          label="Approach"
          title="Ownership from architecture through release."
          description="I work across React/Next.js and Vue/Nuxt.js, carrying product work from technical decisions and API integration through testing, delivery, and long-term maintenance."
        />

        <div className="grid divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800 md:grid-cols-3 md:divide-x md:divide-y-0">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="py-6 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-sky-700 dark:text-sky-300">
                0{index + 1}
              </p>
              <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">
                {reason.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
