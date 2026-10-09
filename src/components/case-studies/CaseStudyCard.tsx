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
    <article className="rounded-md border border-neutral-200 bg-white p-5 transition-colors hover:border-sky-400 dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-sky-700 sm:p-6">
      <div>
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-sky-700 dark:text-sky-300">
            {caseStudy.company} / {caseStudy.role}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-neutral-950 dark:text-white">
            {caseStudy.title}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            {caseStudy.summary}
          </p>
          <Link
            href={getCaseStudyPath(caseStudy.slug)}
            className="mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-neutral-900 transition hover:text-sky-700 dark:text-white dark:hover:text-sky-300"
          >
            Read case study <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="mt-5 border-t border-neutral-200 pt-4 dark:border-neutral-800">
          <ul className="space-y-2">
            {caseStudy.results.slice(0, 3).map((result) => (
              <li key={result} className="flex gap-2.5 text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
                <span className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                <span>{result}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <TechnologyTags technologies={caseStudy.technologies} />
          </div>
        </div>
      </div>
    </article>
  );
}
