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
          className="rounded-sm bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 dark:bg-neutral-950 dark:text-neutral-300"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
