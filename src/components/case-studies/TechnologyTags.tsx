export function TechnologyTags({
  technologies
}: Readonly<{
  technologies: string[];
}>) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-950 dark:text-slate-300"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
