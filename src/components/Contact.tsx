import { contactLinks, siteConfig } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-md border border-neutral-800 bg-neutral-950 p-6 text-white sm:p-9 lg:p-10 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-center lg:gap-12">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-sky-300">
                Contact
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Let&apos;s build a reliable frontend system.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-neutral-300">
                I&apos;m open to remote contract and full-time remote frontend
                engineering opportunities. If you need help with React, Next.js,
                Vue, Nuxt.js, browser extensions, or shared UI components, feel
                free to reach out.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-12 items-center justify-between rounded-sm border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-sky-300/70 hover:bg-sky-300/10"
                >
                  {link.label}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-white/15 pt-4 text-sm leading-6 text-neutral-300">
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
