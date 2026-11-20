import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { caseStudies, getCaseStudyPath } from "@/data/case-studies";
import { siteConfig } from "@/data/portfolio";

export const dynamic = "force-static";

// Last commit date touching any of the given paths; falls back to build time.
// Requires full git history in CI (actions/checkout with fetch-depth: 0).
function lastModified(...paths: string[]) {
  try {
    const output = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    return output ? new Date(output) : new Date();
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.domain;
  const caseStudiesModified = lastModified("src/data/case-studies", "src/app/case-studies", "src/components/case-studies");

  return [
    {
      url: domain,
      lastModified: lastModified("src/app/page.tsx", "src/components", "src/data/portfolio.ts"),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${domain}/resume`,
      lastModified: lastModified("src/app/resume", "src/data/resume.json"),
      changeFrequency: "monthly",
      priority: 0.9
    },
    ...caseStudies.map((caseStudy) => ({
      url: `${domain}${getCaseStudyPath(caseStudy.slug)}`,
      lastModified: caseStudiesModified,
      changeFrequency: "monthly" as const,
      priority: caseStudy.featured ? 0.85 : 0.75
    }))
  ];
}
