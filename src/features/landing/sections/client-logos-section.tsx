import { CLIENTS } from "@/config/landing-content";

export function ClientLogosSection() {
  return (
    <section className="border-y border-border bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by growing brands worldwide
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((name, index) => (
              <span
                key={index}
                className="font-display text-lg font-semibold text-heading/50 transition-colors hover:text-heading sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
