export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-6 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Mostafa Kazemi.</p>
        <p>Powered by Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
