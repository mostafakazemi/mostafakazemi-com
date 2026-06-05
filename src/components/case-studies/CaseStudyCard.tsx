import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { getCaseStudyPath } from "@/data/case-studies";
import { TechnologyTags } from "./TechnologyTags";

export function CaseStudyCard({
  caseStudy
}: Readonly<{
  caseStudy: CaseStudy;
}>) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 md:p-8 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:shadow-black/20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium text-sky-700 dark:text-sky-300">
            {caseStudy.company} / {caseStudy.role}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {caseStudy.title}
          </h3>
          <p className="mt-4 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
            {caseStudy.summary}
          </p>
          <Link
            href={getCaseStudyPath(caseStudy.slug)}
            className="mt-6 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
          >
            Read Case Study
          </Link>
        </div>

        <div>
          <ul className="space-y-3">
            {caseStudy.results.slice(0, 3).map((result) => (
              <li key={result} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{result}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <TechnologyTags technologies={caseStudy.technologies} />
          </div>
        </div>
      </div>
    </article>
  );
}
