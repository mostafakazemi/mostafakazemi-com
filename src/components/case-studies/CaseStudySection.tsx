export function CaseStudySection({
  children,
  title
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section className="border-b border-slate-200 py-10 last:border-b-0 dark:border-slate-800">
      <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
