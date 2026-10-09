import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="border-b border-neutral-200 py-16 dark:border-neutral-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          label="Selected work"
          title="Products and systems built for real users."
          description="A cross-stack record of product delivery across browser extensions, education, travel, and commerce."
        />

        <div className="grid items-start gap-4 md:grid-cols-2">
          {projects.map((project, projectIndex) => (
            <article
              key={project.title}
              className={`rounded-md border border-neutral-200 bg-white p-5 transition-colors hover:border-sky-400 dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-sky-700 sm:p-6 ${projectIndex === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={projectIndex === 0 ? "grid gap-7 lg:grid-cols-[0.9fr_1.1fr]" : ""}>
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-sky-700 dark:text-sky-300">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>
                  <p className="mt-4 border-l-2 border-sky-500 pl-3 text-sm font-medium leading-6 text-neutral-800 dark:text-neutral-200">
                    {project.impact}
                  </p>

                  {project.links.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={`${project.title}-${link.label}-${link.href}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-sm border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-sky-400 hover:text-sky-700 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className={projectIndex === 0 ? "mt-5 lg:mt-0" : "mt-5"}>
                  <ul className={projectIndex === 0 ? "grid gap-x-5 gap-y-2 sm:grid-cols-2" : "space-y-2"}>
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
                        <span className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded-sm bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 dark:bg-neutral-950 dark:text-neutral-300"
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
