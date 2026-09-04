import { contactLinks, siteConfig } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/80 sm:p-10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build a reliable frontend system.
              </h2>
              <p className="mt-5 text-pretty text-base leading-8 text-slate-300">
                I&apos;m open to remote contract and full-time remote frontend
                engineering opportunities. If you need help with React, Next.js,
                Vue, Nuxt.js, browser extensions, or shared UI components, feel
                free to reach out.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-sky-300/60 hover:bg-sky-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  {link.label}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
            Direct email:{" "}
            <a className="font-semibold text-sky-300 hover:text-sky-200" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
