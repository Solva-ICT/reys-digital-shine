import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function PrimaryButton({
  children,
  href = "#contact",
  className = "",
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-orange px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(245,124,0,0.55)] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
