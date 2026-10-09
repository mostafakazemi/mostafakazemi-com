import type { CaseStudy } from "@/data/case-studies";
import { TechnologyTags } from "./TechnologyTags";

export function CaseStudyHeader({
  caseStudy
}: Readonly<{
  caseStudy: CaseStudy;
}>) {
  return (
    <header className="border-b border-neutral-200 pb-8 dark:border-neutral-800 sm:pb-10">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-sky-700 dark:text-sky-300">
        Case Study
      </p>
      <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
        {caseStudy.title}
      </h1>
      <p className="mt-4 text-sm font-medium text-neutral-600 dark:text-neutral-300">
        {caseStudy.company} / {caseStudy.role}
        {caseStudy.period ? ` / ${caseStudy.period}` : ""}
      </p>
      <div className="mt-6">
        <TechnologyTags technologies={caseStudy.technologies} />
      </div>
    </header>
  );
}
