import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CaseStudyHeader } from "@/components/case-studies/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-studies/CaseStudySection";
import { TechnologyTags } from "@/components/case-studies/TechnologyTags";
import {
  caseStudies,
  getCaseStudyBySlug,
  getCaseStudyPath,
  type CaseStudy
} from "@/data/case-studies";
import { siteConfig } from "@/data/portfolio";

const profileImage = "/profile-og.webp";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Mostafa Kazemi"
    };
  }

  const title = `${caseStudy.title} Case Study | Mostafa Kazemi`;
  const description = caseStudy.summary;
  const url = `${siteConfig.domain}${getCaseStudyPath(caseStudy.slug)}`;

  return {
    title,
    description,
    keywords: [
      "Mostafa Kazemi",
      "Senior Frontend Engineer",
      caseStudy.title,
      caseStudy.company,
      ...caseStudy.technologies
    ],
    alternates: {
      canonical: getCaseStudyPath(caseStudy.slug)
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: profileImage,
          width: 1200,
          height: 1200,
          alt: "Mostafa Kazemi portrait"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [profileImage]
    }
  };
}

function caseStudyJsonLd(caseStudy: CaseStudy) {
  const url = `${siteConfig.domain}${getCaseStudyPath(caseStudy.slug)}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${caseStudy.title} Case Study`,
    description: caseStudy.summary,
    mainEntityOfPage: url,
    url,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      url: siteConfig.domain,
      image: `${siteConfig.domain}${profileImage}`
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.domain
    },
    about: [
      {
        "@type": "Organization",
        name: caseStudy.company
      },
      ...caseStudy.technologies.map((technology) => ({
        "@type": "Thing",
        name: technology
      }))
    ],
    keywords: caseStudy.technologies.join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: `${siteConfig.name} Portfolio`,
      url: siteConfig.domain
    }
  };
}

function BulletList({
  items
}: Readonly<{
  items: string[];
}>) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-7 text-neutral-600 dark:text-neutral-300">
          <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(caseStudyJsonLd(caseStudy)).replace(/</g, "\\u003c")
          }}
        />

        <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <Link
            href="/#case-studies"
            className="mb-7 inline-flex items-center gap-2 rounded-sm border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-700 transition hover:border-sky-400 hover:text-sky-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
          >
            Back to Case Studies
          </Link>

          <CaseStudyHeader caseStudy={caseStudy} />

          <CaseStudySection title="Summary">
            <p className="max-w-3xl text-[15px] leading-7 text-neutral-600 dark:text-neutral-300">
              {caseStudy.summary}
            </p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <p className="max-w-3xl text-[15px] leading-7 text-neutral-600 dark:text-neutral-300">
              {caseStudy.problem}
            </p>
          </CaseStudySection>

          <CaseStudySection title="My Role">
            <p className="max-w-3xl text-[15px] leading-7 text-neutral-600 dark:text-neutral-300">
              {caseStudy.role} on {caseStudy.company}
              {caseStudy.period ? `, ${caseStudy.period}` : ""}.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Technologies">
            <TechnologyTags technologies={caseStudy.technologies} />
          </CaseStudySection>

          <CaseStudySection title="Responsibilities">
            <BulletList items={caseStudy.responsibilities} />
          </CaseStudySection>

          <CaseStudySection title="Technical Challenges">
            <BulletList items={caseStudy.challenges} />
          </CaseStudySection>

          <CaseStudySection title="Results">
            <BulletList items={caseStudy.results} />
          </CaseStudySection>

          {caseStudy.learnings?.length ? (
            <CaseStudySection title="Learnings">
              <BulletList items={caseStudy.learnings} />
            </CaseStudySection>
          ) : null}
        </article>
      </main>
      <Footer />
    </div>
  );
}
