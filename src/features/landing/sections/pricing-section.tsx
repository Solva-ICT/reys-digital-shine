import { Check } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { PRICING_TIERS } from "@/config/landing-content";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            Pick a tier. <span className="text-gradient-brand">Upgrade</span> whenever you&apos;re
            ready.
          </>
        }
        sub="Transparent monthly plans for social, ads, and content — scale up when your business grows."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative flex flex-col rounded-3xl border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
              tier.popular
                ? "border-orange/50 ring-2 ring-orange/25"
                : "border-border",
            )}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-6 inline-flex rounded-full bg-gradient-orange px-3 py-1 text-xs font-semibold text-white shadow-[var(--shadow-glow)]">
                Most popular
              </span>
            )}

            <div>
              <h3 className="font-display text-xl font-bold text-heading">{tier.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl font-bold tracking-tight text-heading">
                  ${tier.price}
                </span>
                <span className="mb-1.5 text-sm font-medium text-muted-foreground">/mo</span>
              </div>
            </div>

            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={cn(
                "mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all",
                tier.popular
                  ? "bg-gradient-orange text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(245,124,0,0.55)]"
                  : "border border-border bg-card text-heading hover:border-heading/30 hover:bg-surface",
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
