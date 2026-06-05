import type { Metadata } from "next";
import Link from "next/link";
import resume from "@/data/resume.json";

const domain = "https://mostafakazemi.com";
const resumeUrl = `${domain}/resume`;
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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mostafa Kazemi - Senior Frontend Engineer Resume"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"]
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
    <section className="border-t border-slate-200 pt-8 dark:border-slate-800">
      <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
        {title}
      </h2>
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

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900/80">
          <header className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
                Resume
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                {resume.profile.name}
              </h1>
              <p className="mt-3 text-xl font-semibold text-sky-700 dark:text-sky-300">
                {resume.profile.title}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                ATS-friendly resume for remote contract, freelance, and long-term
                frontend engineering opportunities.
              </p>
            </div>

            <address className="not-italic">
              <dl className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm dark:border-slate-800 dark:bg-slate-950/70">
                <div>
                  <dt className="font-semibold text-slate-950 dark:text-white">Location</dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-300">
                    {resume.profile.location}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950 dark:text-white">Remote</dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-300">
                    {resume.profile.remote}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950 dark:text-white">Email</dt>
                  <dd className="mt-1">
                    <a className="text-sky-700 hover:text-sky-600 dark:text-sky-300" href={`mailto:${resume.profile.email}`}>
                      {resume.profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950 dark:text-white">Phone</dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-300">
                    {resume.profile.phone}
                  </dd>
                </div>
                {[resume.profile.website, resume.profile.github, resume.profile.linkedin].map((link) => (
                  <div key={link}>
                    <dt className="sr-only">Link</dt>
                    <dd>
                      <a
                        className="text-sky-700 hover:text-sky-600 dark:text-sky-300"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {cleanUrl(link)}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </address>
          </header>

          <div className="mt-10 grid gap-10">
            <Section title="Summary">
              <div className="grid gap-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {resume.summary.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Section>

            <Section title="Selected Achievements">
              <ul className="grid gap-2">
                {resume.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Skills">
              <div className="grid gap-5 md:grid-cols-2">
                {resume.skills.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-semibold text-slate-950 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Experience">
              <div className="grid gap-8">
                {resume.experience.map((role) => (
                  <section key={`${role.company}-${role.title}`}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                          {role.title}
                        </h3>
                        <p className="mt-1 font-medium text-sky-700 dark:text-sky-300">
                          {role.company}
                          {role.location ? ` (${role.location})` : ""}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {[role.period, role.type].filter(Boolean).join(" | ")}
                      </p>
                    </div>
                    <ul className="mt-4 grid gap-2">
                      {role.highlights.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-slate-950 dark:text-white">
                        Technologies:
                      </span>{" "}
                      {role.technologies.join(", ")}
                    </p>
                  </section>
                ))}
              </div>
            </Section>

            <Section title="Education">
              {resume.education.map((item) => (
                <div key={item.school}>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {[item.school, item.country, item.graduated].filter(Boolean).join(", ")}
                  </p>
                </div>
              ))}
            </Section>

            <Section title="Project Highlights">
              <div className="grid gap-6 md:grid-cols-3">
                {resume.projects.map((project) => (
                  <section key={project.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                    <h3 className="font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <ul className="mt-3 grid gap-2">
                      {project.highlights.map((item) => (
                        <li key={item} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </Section>
          </div>
        </article>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Interested in working together?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                I&apos;m open to remote contract, freelance, and long-term frontend
                engineering opportunities.
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
