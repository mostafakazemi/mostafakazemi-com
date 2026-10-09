import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-b border-neutral-200 py-16 dark:border-neutral-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          label="Capabilities"
          title="A broad frontend toolkit, applied where it fits."
          description="Frameworks, state management, browser APIs, testing, and build tools used across production products."
        />

        <div className="grid items-start gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-md border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/70 sm:p-6"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-neutral-700 dark:text-neutral-200">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[13px] font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
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
