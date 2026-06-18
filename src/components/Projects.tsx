import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-b border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            PROJECTS
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
            A selection of real-world products, platforms, and frontend systems
            I’ve owned or shaped across web applications, browser extensions,
            reusable UI libraries, and e-commerce platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 md:p-8 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:shadow-black/20"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm font-medium text-sky-700 dark:text-sky-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {project.links.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={`${project.title}-${link.label}-${link.href}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-950 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
