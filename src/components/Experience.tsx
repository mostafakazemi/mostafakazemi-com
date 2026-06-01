import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-b border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Remote product engineering experience.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-sky-700 dark:text-sky-300">
                    {item.company}
                  </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  {item.type}
                </span>
              </div>
              <p className="mt-6 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
