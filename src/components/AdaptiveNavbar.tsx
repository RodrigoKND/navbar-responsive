import { useState } from "react";
import type { AdaptiveNavbarProps } from "@/types/navbar";
import { DesktopMenu, MobileMenu, Overlay, NavbarHeader } from "@/components/index";

export default function AdaptiveNavbar({
  mobileMode = "left",
  links = [],
}: AdaptiveNavbarProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <NavbarHeader open={open} onOpen={() => setOpen(true)}>
        <DesktopMenu links={links} />
      </NavbarHeader>

      <Overlay open={open} onClose={() => setOpen(false)} />

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        mobileMode={mobileMode}
        links={links}
      />
    </>
  );
}
