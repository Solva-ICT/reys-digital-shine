import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { SERVICES } from "@/config/landing-content";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="What we do"
        title={
          <>
            Services that <span className="text-gradient-brand">scale brands</span>.
          </>
        }
        sub="Six core capabilities — combined into one team that ships outcomes."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-[var(--shadow-card)]"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-white shadow-[var(--shadow-soft)] transition-transform group-hover:scale-110 group-hover:rotate-3">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-heading">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
