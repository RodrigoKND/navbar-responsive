export type MobileMode = "left" | "right" | "top" | "bottom";

export interface NavLink {
    label: string;
    href: string;
}

export interface AdaptiveNavbarProps {
    mobileMode?: MobileMode;
    links?: NavLink[];
}

export interface NavbarHeaderProps {
  open: boolean;
  onOpen: () => void;
  children: React.ReactNode;
}

export interface MobileMenuProps extends AdaptiveNavbarProps {
  open: boolean;
  onClose: () => void;
}