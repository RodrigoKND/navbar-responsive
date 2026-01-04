import type { NavbarHeaderProps } from "@/types/navbar";

export function NavbarHeader({
  open,
  onOpen,
  children,
}: NavbarHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <nav
        className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a className="text-lg font-semibold text-neutral-900 dark:text-white">
          ByteTwo
        </a>

        {children}

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={onOpen}
          className="md:hidden cursor-pointer rounded-xl border border-neutral-300 dark:border-neutral-700 p-2 text-neutral-900 dark:text-white"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
