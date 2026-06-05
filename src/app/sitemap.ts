import type { MetadataRoute } from "next";
import { caseStudies, getCaseStudyPath } from "@/data/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseItems: MetadataRoute.Sitemap = [
    {
      url: "https://mostafakazemi.com",
      lastModified: new Date("2026-06-03T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://mostafakazemi.com/resume",
      lastModified: new Date("2026-06-05T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];

  const caseStudyItems = caseStudies.map((caseStudy) => ({
    url: `https://mostafakazemi.com${getCaseStudyPath(caseStudy.slug)}`,
    lastModified: new Date("2026-06-05T00:00:00.000Z"),
    changeFrequency: "monthly" as const,
    priority: caseStudy.featured ? 0.85 : 0.75
  }));

  return [...baseItems, ...caseStudyItems];
}
