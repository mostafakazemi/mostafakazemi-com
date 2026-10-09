"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-neutral-50/85 backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-950/85">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/#home"
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-neutral-950 font-mono text-xs font-semibold text-white dark:bg-sky-400 dark:text-neutral-950">
            MK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">{siteConfig.name}</span>
            <span className="block text-xs text-neutral-500 dark:text-neutral-400">
              {siteConfig.title}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.label === "Resume"
                ? "rounded-sm bg-neutral-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-600 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-sky-300"
                : "rounded-sm px-2.5 py-2 text-xs font-medium text-neutral-600 transition hover:bg-neutral-200/70 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 items-center rounded-sm border border-neutral-300 bg-white px-3 text-xs font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-100 lg:hidden dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-neutral-200 px-4 py-3 transition lg:hidden dark:border-neutral-800",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="mx-auto grid max-w-6xl gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
