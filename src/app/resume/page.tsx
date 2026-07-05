import type { Metadata } from "next";
import Link from "next/link";
import resume from "@/data/resume.json";

const domain = "https://mostafakazemi.com";
const resumeUrl = `${domain}/resume`;
const profileImage = "/profile-og.webp";
const title = "Resume - Mostafa Kazemi | Senior Frontend Engineer";
const description =
  "ATS-friendly resume for Mostafa Kazemi, also known as Mostafa Kazeminejad, Senior Frontend Engineer specializing in React, Next.js, Vue, Nuxt.js, TypeScript, browser extensions, and frontend architecture.";
const keywords = [
  "Mostafa Kazemi",
  "Mostafa Kazeminejad",
  "Mostafa Kazemi Nejad",
  "مصطفی کاظمی",
  "مصطفی کاظمی نژاد",
  "Senior Frontend Engineer",
  "Frontend Engineer",
  "React Developer",
  "Next.js Developer",
  "Vue.js Developer",
  "Nuxt.js Developer",
  "TypeScript Developer",
  "Resume",
  "CV"
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: "/resume"
  },
  openGraph: {
    title,
    description,
    url: resumeUrl,
    siteName: "Mostafa Kazemi",
    type: "profile",
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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.profile.name,
  alternateName: resume.profile.alternateNames,
  jobTitle: resume.profile.title,
  url: resume.profile.website,
  image: `${domain}${profileImage}`,
  email: `mailto:${resume.profile.email}`,
  telephone: resume.profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "TR"
  },
  sameAs: [resume.profile.website, resume.profile.github, resume.profile.linkedin],
  knowsAbout: resume.skills.flatMap((group) => group.items),
  mainEntityOfPage: resumeUrl
};

function cleanUrl(url: string) {
  return url.replace("https://www.", "").replace("https://", "").replace(/\/$/, "");
}

function Section({
  children,
  title
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section className="pt-8">
      <div className="border-b border-slate-900 pb-2 dark:border-slate-200">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-950 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c")
        }}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
          >
            Back to Portfolio
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-sky-500 px-5 py-2.5 font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Download Resume PDF
          </a>
        </nav>

        <article className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12 dark:border-slate-800 dark:bg-slate-900/90">
          <header className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              {resume.profile.name}
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              {resume.profile.title}
            </p>
            <address className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs not-italic text-slate-600 dark:text-slate-300">
              <span>{resume.profile.location}</span>
              <span>{resume.profile.remote}</span>
              <a className="hover:text-sky-700 dark:hover:text-sky-300" href={`mailto:${resume.profile.email}`}>
                {resume.profile.email}
              </a>
              <span>{resume.profile.phone}</span>
              {[resume.profile.website, resume.profile.linkedin, resume.profile.github].map((link) => (
                <a
                  key={link}
                  className="hover:text-sky-700 dark:hover:text-sky-300"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cleanUrl(link)}
                </a>
              ))}
            </address>
          </header>

          <div className="mt-8 grid gap-8">
            <Section title="Professional Summary">
              <p className="text-sm leading-8 text-slate-700 dark:text-slate-300">
                {resume.summary.join(" ")}
              </p>
            </Section>

            <Section title="Best Fit">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {resume.bestFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title="Work Experience">
              <div className="grid gap-8">
                {resume.experience.map((role) => (
                  <section key={`${role.company}-${role.title}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                        {role.title} - {role.company}
                        {role.location ? ` (${role.location})` : ""}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {[role.period, role.type].filter(Boolean).join(" | ")}
                      </p>
                    </div>
                    <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-slate-950 dark:text-white">
                        Technologies:
                      </span>{" "}
                      {role.technologies.join(", ")}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </Section>

            <Section title="Selected Case Studies">
              <div className="grid gap-8">
                {resume.caseStudies.map((caseStudy) => (
                  <section key={caseStudy.title}>
                    <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                      {caseStudy.title}
                    </h3>
                    <dl className="mt-3 grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      <div>
                        <dt className="font-semibold text-slate-950 dark:text-white">Problem</dt>
                        <dd>{caseStudy.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-950 dark:text-white">
                          Responsibilities
                        </dt>
                        <dd>{caseStudy.responsibilities.join("; ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-950 dark:text-white">
                          Technical Challenges
                        </dt>
                        <dd>{caseStudy.technicalChallenges.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-950 dark:text-white">Solution</dt>
                        <dd>{caseStudy.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-950 dark:text-white">Impact</dt>
                        <dd>{caseStudy.impact}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-950 dark:text-white">
                          Technologies
                        </dt>
                        <dd>{caseStudy.technologies.join(", ")}</dd>
                      </div>
                    </dl>
                  </section>
                ))}
              </div>
            </Section>

            <Section title="Education">
              {resume.education.map((item) => (
                <div key={item.school}>
                  <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                    {[item.school, item.country].filter(Boolean).join(", ")}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {item.degree}
                  </p>
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    Graduated: {item.graduated}
                  </p>
                </div>
              ))}
            </Section>

            <Section title="Skills">
              <div className="grid gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {resume.skills.map((group) => (
                  <p key={group.title}>
                    <span className="font-bold text-slate-950 dark:text-white">
                      {group.title}:
                    </span>{" "}
                    {group.items.join(", ")}
                  </p>
                ))}
              </div>
            </Section>

            <Section title="Selected Achievements">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {resume.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>
          </div>
        </article>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Interested in working together?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                I&apos;m open to remote and long-term frontend engineering opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${resume.profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Email Me
              </a>
              <a
                href={resume.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
