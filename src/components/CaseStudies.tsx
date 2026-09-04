import { featuredCaseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "./case-studies/CaseStudyCard";

export function CaseStudies() {
  if (featuredCaseStudies.length === 0) {
    return null;
  }

  return (
    <section id="case-studies" className="border-b border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            CASE STUDIES
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Engineering Case Studies
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
            More detail on the product features, technical constraints, and
            implementation work behind selected projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
