import { Counter } from "@/components/shared/counter";
import { STATS } from "@/config/landing-content";

export function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-surface p-6 sm:p-10 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-4xl font-bold text-heading sm:text-5xl">
              <Counter to={stat.to} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
