import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { siteConfig } from "@/data/portfolio";
import { renderOgCard } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  return renderOgCard({
    eyebrow: `Case study · ${caseStudy?.company ?? ""}`,
    title: caseStudy?.title ?? "Case study",
    subtitle: `${siteConfig.name} · ${siteConfig.title}`
  });
}
