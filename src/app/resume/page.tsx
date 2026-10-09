import type { Metadata } from "next";
import Link from "next/link";
import resume from "@/data/resume.json";
import { siteConfig } from "@/data/portfolio";

const domain = siteConfig.domain;
const title = "Resume - Mostafa Kazemi | Senior Frontend Engineer";
const description = `Resume for Mostafa Kazemi, a Senior Frontend Engineer based in ${siteConfig.location} with React, Next.js, Vue, Nuxt.js, TypeScript, and browser-extension experience.`;

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/resume" },
  openGraph: { title, description, url: `${domain}/resume`, siteName: "Mostafa Kazemi", type: "profile" }
};

const combinedSkillGroups = resume.skills.react.map((group) => ({
  title: group.title,
  items: Array.from(new Set(
    [...resume.skills.react, ...resume.skills.vue]
      .filter((candidate) => candidate.title === group.title)
      .flatMap((candidate) => candidate.items)
  ))
}));
const combinedSkills = combinedSkillGroups.flatMap((group) => group.items);
const personJsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: resume.profile.name,
  alternateName: resume.profile.alternateNames, jobTitle: resume.profile.title,
  url: resume.profile.website, email: `mailto:${resume.profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
  sameAs: [resume.profile.website, resume.profile.github, resume.profile.linkedin], knowsAbout: combinedSkills
};

const resumeDownloads = [
  { label: "Download Resume PDF", href: "/resume.pdf", primary: true }
] as const;

function Section({ title: sectionTitle, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return <section className="pt-8"><div className="border-b border-slate-900 pb-2 dark:border-slate-200"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-950 dark:text-white">{sectionTitle}</h2></div><div className="mt-5">{children}</div></section>;
}

export default function ResumePage() {
  const experience = resume.variants.general.experience;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link href="/" className="rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">Back to Portfolio</Link>
          <div className="flex flex-wrap gap-2">
            {resumeDownloads.map((download) => (
              <a
                key={download.href}
                href={download.href}
                download
                className={download.primary
                  ? "rounded-full bg-sky-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-400"
                  : "rounded-full border border-sky-300 bg-white px-4 py-2 font-semibold text-sky-800 transition hover:border-sky-400 hover:bg-sky-50 dark:border-sky-700 dark:bg-slate-900 dark:text-sky-200 dark:hover:bg-slate-800"}
              >
                {download.label}
              </a>
            ))}
          </div>
        </nav>

        <article className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12 dark:border-slate-800 dark:bg-slate-900/90">
          <header className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">{resume.profile.name}</h1>
            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{resume.profile.title}</p>
            <address className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs not-italic text-slate-600 dark:text-slate-300">
              <span>{siteConfig.location}</span><span>{siteConfig.availability}</span>
              <a href={`mailto:${resume.profile.email}`}>{resume.profile.email}</a>
              <a href={resume.profile.linkedin}>LinkedIn</a><a href={resume.profile.github}>GitHub</a>
            </address>
          </header>

          <Section title="Professional Summary">
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{resume.variants.general.summary}</p>
          </Section>

          <Section title="Experience">
            <div className="grid gap-8">{experience.map((role) => (
              <section key={`${role.company}-${role.title}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-sm font-bold">{role.title} - {role.company}{"location" in role && role.location ? ` (${role.location})` : ""}</h3>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400">{role.period}</p>
                </div>
                {"type" in role && role.type ? <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">{role.type}</p> : null}
                {"context" in role && role.context ? <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">{role.context}</p> : null}
                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300"><span className="font-semibold text-slate-950 dark:text-white">Technologies:</span> {role.technologies.join(", ")}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">{role.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}</div>
          </Section>

          <Section title="Skills">
            <div className="grid gap-3">
              {combinedSkillGroups.map((group) => (
                <p key={group.title} className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-950 dark:text-white">{group.title}:</span>{" "}{group.items.join(", ")}
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-950 dark:text-white">AI-assisted development ({resume.aiAssistedDevelopment.tools.join(", ")}):</span>{" "}
              {resume.aiAssistedDevelopment.description}
            </p>
          </Section>

          <Section title="Education">
            <h3 className="text-sm font-bold">{resume.education[0].degree}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{resume.education[0].school}, {resume.education[0].country} · Graduated {resume.education[0].graduated}</p>
          </Section>
        </article>
      </div>
    </main>
  );
}
