import { SectionHeader } from "@/components/shared/section-header";
import { WorkflowIllustration } from "@/components/shared/workflow-illustration";
import { WHY_CHOOSE_US } from "@/config/landing-content";

export function WhyChooseUsSection() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-[radial-gradient(closest-side,rgba(245,124,0,0.18),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <WorkflowIllustration />
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange">
            Why REYS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-heading sm:text-5xl">
            A partner built for <span className="text-gradient-brand">growth</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We pair premium craft with measurable outcomes — so your team gets both the brand and
            the numbers.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-semibold text-heading">{item.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
