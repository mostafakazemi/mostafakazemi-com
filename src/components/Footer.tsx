export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Mostafa Kazemi.</p>
        <p>Powered by Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
