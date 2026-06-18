const strengths = [
  "frontend architecture",
  "reusable component systems",
  "design systems",
  "browser extension architecture",
  "Shadow DOM integrations",
  "Web Components",
  "state management",
  "authentication flows",
  "testing",
  "maintainability",
  "performance optimization",
  "developer experience",
  "refactoring legacy systems while preserving behavior"
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
            Senior frontend work beyond basic UI implementation.
          </h2>
        </div>

        <div className="space-y-6 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
          <p>
            I&apos;m Mostafa Kazemi, a Senior Frontend Engineer with experience
            owning production web applications, browser extensions, reusable UI
            systems, and scalable frontend architectures. I have delivered
            remotely with a US-based edtech company and bring strong async
            collaboration, code review, task management, and production-level
            frontend engineering habits.
          </p>
          <p>
            My work goes beyond screen implementation: I focus on architecture,
            tooling, testing, performance, and maintainability practices that keep
            frontend products reliable as teams and product surfaces grow.
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
