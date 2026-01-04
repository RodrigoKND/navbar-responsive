import type { OverlayProps } from "@/types/overlay";

export function Overlay({ open, onClose }: OverlayProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black/40 transition ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    />
  );
}
