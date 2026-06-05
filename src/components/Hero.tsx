import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_34%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800 dark:border-sky-900/80 dark:bg-sky-950/60 dark:text-sky-200">
            Remote-ready frontend engineer
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-sky-700 dark:text-sky-300">
            {siteConfig.title}
          </p>
          <h2 className="mt-7 max-w-4xl text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl dark:text-slate-100">
            Building scalable frontend systems with React, Next.js, Vue, Nuxt.js,
            TypeScript, and Browser Extensions.
          </h2>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300">
            I&apos;m a Senior Frontend Engineer focused on building scalable,
            maintainable, and production-ready web applications using React,
            Next.js, Vue, Nuxt.js, TypeScript, and modern frontend tooling.
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-slate-500 dark:text-slate-400">
            Remote-ready frontend engineer with experience across US-based edtech
            products, e-commerce platforms, browser extensions, reusable UI
            libraries, and production frontend architecture.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
            >
              Download Resume PDF
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20">
          <div className="grid gap-4">
            {[
              ["Focus", "Frontend architecture, reusable UI systems, and product-grade implementation."],
              ["Stack", "React, Next.js, Vue, Nuxt.js, TypeScript, Tailwind CSS, Vite, Webpack."],
              ["Experience", "Remote collaboration, code reviews, browser extensions, testing, and legacy refactoring."],
              ["Availability", "Open to remote contract and full-time remote frontend roles."]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                  {label}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
