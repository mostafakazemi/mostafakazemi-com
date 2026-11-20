import Image from "next/image";
import type { Screenshot, StoreShowcase } from "@/data/screenshots";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  shot,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw"
}: Readonly<{ shot: Screenshot; className?: string; priority?: boolean; sizes?: string }>) {
  const body = (
    <figure
      className={cn(
        "overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-800 dark:bg-neutral-900",
        !shot.href && className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950">
        <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        {shot.host ? (
          <span className="ml-2 truncate font-mono text-[10px] text-neutral-500 dark:text-neutral-400">{shot.host}</span>
        ) : null}
      </div>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="block h-auto w-full"
      />
    </figure>
  );

  return shot.href ? (
    <a href={shot.href} target="_blank" rel="noreferrer" className={cn("block transition hover:opacity-90", className)}>
      {body}
    </a>
  ) : (
    body
  );
}

export function StoreStrip({ stores }: Readonly<{ stores: StoreShowcase[] }>) {
  return (
    <ul className="grid grid-cols-5 gap-2">
      {stores.map((store) => (
        <li key={store.host}>
          <a href={store.href} target="_blank" rel="noreferrer" className="group block" title={store.host}>
            <span className="block aspect-[9/16] overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 transition group-hover:border-sky-400 dark:border-neutral-800 dark:bg-neutral-900">
              <Image
                src={store.mobile.src}
                alt={store.mobile.alt}
                width={store.mobile.width}
                height={store.mobile.height}
                sizes="120px"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </span>
            <span className="mt-1.5 block truncate text-center text-[10px] font-medium text-neutral-500 group-hover:text-sky-700 dark:text-neutral-400 dark:group-hover:text-sky-300">
              {store.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
