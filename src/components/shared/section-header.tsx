import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
};

export function SectionHeader({ eyebrow, title, sub }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}
