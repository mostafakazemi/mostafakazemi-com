import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_34%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8 lg:py-20">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <p className="mb-4 inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800 dark:border-sky-900/80 dark:bg-sky-950/60 dark:text-sky-200">
            Remote-ready Senior Frontend Engineer
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-sky-700 sm:text-xl dark:text-sky-300">
            {siteConfig.title}
          </p>
          <h2 className="mt-6 max-w-3xl text-balance text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-[2.35rem] dark:text-slate-100">
            Frontend architecture, browser extensions, and product UI built with
            React, Next.js, Vue, Nuxt.js, and TypeScript.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            I build maintainable web applications, reusable UI systems, and
            browser-integrated experiences for production teams.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

        <figure className="order-1 mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:order-2 lg:max-w-[360px] lg:justify-self-end">
          <picture>
            <source
              srcSet="/profile-320.jpg 320w, /profile-640.jpg 640w, /profile-960.jpg 960w"
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 280px, 220px"
              type="image/jpeg"
            />
            <Image
              src="/profile-640.jpg"
              alt={`${siteConfig.name} portrait`}
              width={640}
              height={640}
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 280px, 220px"
              className="aspect-square w-full rounded-[1.75rem] border border-slate-200 bg-white object-cover shadow-xl shadow-slate-300/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}
