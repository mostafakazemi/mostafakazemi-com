import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-b border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Frontend engineering stack for production teams.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
            A practical mix of product development, architecture, browser
            extension work, reusable UI systems, testing, and build tooling.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
