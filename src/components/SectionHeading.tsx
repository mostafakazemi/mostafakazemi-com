import { cn } from "@/lib/utils";

export function SectionHeading({
  description,
  index,
  label,
  title,
  className
}: Readonly<{
  description?: string;
  index: string;
  label: string;
  title: string;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "mb-10 grid gap-4 border-b border-neutral-200 pb-7 dark:border-neutral-800 sm:mb-12 sm:pb-8 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-8",
        className
      )}
    >
      <p className="flex items-center gap-2 pt-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
        <span className="text-sky-600 dark:text-sky-400">{index}</span>
        <span aria-hidden="true" className="h-px w-5 bg-neutral-300 dark:bg-neutral-700" />
        {label}
      </p>
      <div>
        <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl dark:text-white">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
