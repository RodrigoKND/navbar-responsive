import type { MobileMenuProps } from "@/types/navbar";
import { MOBILE_POSITIONS, getActiveTransform } from "@/constants/navbarMobile";

export function MobileMenu({
  open,
  onClose,
  mobileMode,
  links,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <aside
      className={`fixed bg-white dark:bg-neutral-900 z-50 transition-transform duration-300 ease-in-out
      md:hidden w-72 h-full ${MOBILE_POSITIONS[mobileMode || "top"]} ${getActiveTransform(mobileMode || "top")}`}
    >
      <header className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="rounded-xl cursor-pointer border border-neutral-300 dark:border-neutral-700 p-2"
        >
          <svg
            className="w-6 h-6 text-neutral-900 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>

      <nav className="p-4 space-y-6">
        <ul className="space-y-4 text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {links?.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={onClose}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="block text-center rounded-xl bg-neutral-900 dark:bg-white px-4 py-2 text-white dark:text-neutral-900">
          Get Started
        </a>
      </nav>
    </aside>
  );
}