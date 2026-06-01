"use client";

import { useState } from "react";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-sm dark:bg-sky-400 dark:text-slate-950">
            MK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">{siteConfig.name}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              {siteConfig.title}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200/70 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
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
          "border-t border-slate-200 px-4 py-3 transition lg:hidden dark:border-slate-800",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="mx-auto grid max-w-6xl gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
