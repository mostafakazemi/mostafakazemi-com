import { contactLinks, siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-6 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-neutral-400">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name} · {siteConfig.title}</p>
        <nav aria-label="Social links" className="flex gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition hover:text-neutral-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
