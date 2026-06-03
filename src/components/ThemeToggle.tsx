"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center rounded-full border border-slate-300 bg-white px-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
      aria-label="Toggle dark and light mode"
    >
      <span className="dark:hidden">Light</span>
      <span className="hidden dark:inline">Dark</span>
    </button>
  );
}
