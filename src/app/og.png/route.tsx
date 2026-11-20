import { siteConfig } from "@/data/portfolio";
import { renderOgCard } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return renderOgCard({
    eyebrow: `${siteConfig.location} · ${siteConfig.availability}`,
    title: siteConfig.name,
    subtitle: `${siteConfig.title} · React, Next.js, Vue, Nuxt.js, TypeScript`
  });
}
