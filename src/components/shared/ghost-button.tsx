import type { ReactNode } from "react";

type GhostButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function GhostButton({
  children,
  href = "#pricing",
  className = "",
}: GhostButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold text-heading transition-all hover:border-heading/30 hover:bg-surface ${className}`}
    >
      {children}
    </a>
  );
}
