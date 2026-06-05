import type { CaseStudy } from "@/data/case-studies";
import { TechnologyTags } from "./TechnologyTags";

export function CaseStudyHeader({
  caseStudy
}: Readonly<{
  caseStudy: CaseStudy;
}>) {
  return (
    <header className="border-b border-slate-200 pb-10 dark:border-slate-800">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
        Case Study
      </p>
      <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
        {caseStudy.title}
      </h1>
      <p className="mt-4 text-base font-semibold text-sky-700 dark:text-sky-300">
        {caseStudy.company} / {caseStudy.role}
        {caseStudy.period ? ` / ${caseStudy.period}` : ""}
      </p>
      <div className="mt-8">
        <TechnologyTags technologies={caseStudy.technologies} />
      </div>
    </header>
  );
}
