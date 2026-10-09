import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-b border-neutral-200 py-16 dark:border-neutral-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          label="Experience"
          title="Product engineering experience since 2020."
          description="Progressive frontend ownership across commerce, education, and travel products, with hands-on delivery in both React and Vue ecosystems."
        />

        <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${item.title}`}
              className="grid gap-4 py-6 sm:py-7 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10"
            >
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500 dark:text-neutral-400">
                  Experience · 0{index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-950 dark:text-white">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-sky-700 dark:text-sky-300">
                  {item.title}
                </p>
                <span className="mt-3 inline-flex rounded-sm border border-neutral-200 px-2 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
                  {item.type}
                </span>
              </div>
              <p className="max-w-3xl text-pretty text-[15px] leading-7 text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
