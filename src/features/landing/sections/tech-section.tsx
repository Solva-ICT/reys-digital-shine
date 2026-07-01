import { TECH_STACK } from "@/config/landing-content";

export function TechSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Technologies we use
        </div>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <span
                key={index}
                className="font-display text-2xl font-semibold text-heading/40 transition-colors hover:text-heading"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
