export function CaseStudySection({
  children,
  title
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section className="grid gap-3 border-b border-neutral-200 py-7 last:border-b-0 dark:border-neutral-800 sm:py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
