export type { CaseStudy } from "./types";
export { caseStudies } from "./generated";
import { caseStudies } from "./generated";

export const featuredCaseStudies = caseStudies.filter((caseStudy) => caseStudy.featured);

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyPath(slug: string) {
  return `/case-studies/${slug}`;
}
