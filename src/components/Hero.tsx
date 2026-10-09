import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

const profileBlurDataUrl =
  "data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAACQBQCdASoYABgAPt1mq1EopSOiqAgBEBuJYgDGBYvWXtIKJrWUpvVjDsiuqyn94vYvE/XvAAD+79edCjgI0L4Cvh7AJQ5opeVj52eVjZrQS8j2MRcw1qf+lvUEDM9cupo5bBIVeIRDk61OGTDfo5uKstcuzX0ieMRVTx7b8YSx/ReQ2kZtsbm/PK1oZvngfbMl2E2PrvcfQI17yMZCPuKSiLYoAYaPLtJZJAAA";

const proofPoints = [
  { value: "6+", label: "years in production" },
  { value: "40K+", label: "extension users" },
  { value: "15 → 2", label: "minutes per build" }
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16 lg:px-8 lg:py-[4.5rem]">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <p className="mb-5 inline-flex w-fit items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-neutral-600 dark:text-neutral-300">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
            {siteConfig.location} · {siteConfig.availability}
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] text-neutral-950 sm:text-6xl dark:text-white">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-sky-700 dark:text-sky-300">
            {siteConfig.title}
          </p>
          <h2 className="mt-6 max-w-2xl text-balance text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
            Frontend systems for products that need to scale.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-neutral-600 dark:text-neutral-300">
            I build production experiences across React, Next.js, Vue, Nuxt.js,
            and TypeScript, from commerce platforms to browser extensions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-sky-400"
            >
              Contact Me
            </a>
            <a
              href="/resume"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
            >
              View Resume
            </a>
            <a
              href="#case-studies"
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-neutral-700 transition hover:text-sky-700 dark:text-neutral-300 dark:hover:text-sky-300"
            >
              Explore case studies <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 border-t border-neutral-200 pt-5 dark:border-neutral-800">
            {proofPoints.map((item, index) => (
              <div
                key={item.label}
                className={index > 0 ? "border-l border-neutral-200 pl-4 dark:border-neutral-800 sm:pl-6" : "pr-3 sm:pr-6"}
              >
                <p className="text-xl font-semibold text-neutral-950 dark:text-white">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="order-1 mx-auto w-full max-w-[240px] sm:max-w-[300px] lg:order-2 lg:max-w-[360px] lg:justify-self-end">
          <div
            className="relative aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-white bg-cover bg-center shadow-xl shadow-neutral-300/40 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-black/30"
            style={{ backgroundImage: `url(${profileBlurDataUrl})` }}
          >
            <picture className="absolute inset-0 block">
              <source
                srcSet="/profile-320.webp 320w, /profile-640.webp 640w, /profile-960.webp 960w"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 280px, 220px"
                type="image/webp"
              />
              <Image
                src="/profile-640.webp"
                alt={`${siteConfig.name} portrait`}
                fill
                priority
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 280px, 220px"
                placeholder="blur"
                blurDataURL={profileBlurDataUrl}
                className="object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-neutral-200 pt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <span>Product UI · Browser APIs</span>
            <span>TR / Remote</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
