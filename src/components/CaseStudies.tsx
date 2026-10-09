import { featuredCaseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard } from "./case-studies/CaseStudyCard";

export function CaseStudies() {
  if (featuredCaseStudies.length === 0) {
    return null;
  }

  return (
    <section id="case-studies" className="border-b border-neutral-200 py-16 dark:border-neutral-800 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          label="Deep dives"
          title="Engineering decisions behind the product work."
          description="Selected case studies on the constraints, architecture, and implementation choices behind real frontend systems."
        />

        <div className="grid items-start gap-4 md:grid-cols-2">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
