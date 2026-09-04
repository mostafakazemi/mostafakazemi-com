const strengths = [
  "Vue and Nuxt applications",
  "React and Next.js products",
  "reusable Vue components",
  "Chrome extensions",
  "Shadow DOM and Web Components",
  "Web Components",
  "state management",
  "authentication flows",
  "testing",
  "REST API integration",
  "responsive interfaces",
  "legacy React maintenance"
];

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Frontend work across web products, browser extensions, and shared UI.
          </h2>
        </div>

        <div className="space-y-6 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
          <p>
            I&apos;m Mostafa Kazemi, a Senior Frontend Engineer with more than six
            years of experience. I build production applications with React,
            Next.js, Vue, Nuxt.js, and TypeScript. From 2022 to 2026, I worked
            remotely with Jack Westin in the US on web applications, a shared UI
            library, and a Chrome extension listed with 40,000 users.
          </p>
          <p>
            At Sazito, I work on storefront and admin features for an online
            store builder. My recent work includes product imports, payment
            settings, customer reviews, shipment tracking, marketing attribution,
            product search, and cart flows.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
