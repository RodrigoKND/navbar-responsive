import type { AdaptiveNavbarProps } from "@/types/navbar";

export function DesktopMenu({ links }: Pick<AdaptiveNavbarProps, "links">) {
  return (
    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-300">
      {links?.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="hover:text-neutral-900 dark:hover:text-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
