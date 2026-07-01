import { SectionHeader } from "@/components/shared/section-header";
import { PROCESS_STEPS } from "@/config/landing-content";

export function ProcessSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our process"
          title={
            <>
              Six steps from idea to <span className="text-gradient-brand">impact</span>.
            </>
          }
        />
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent md:block" />
          <ol className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step} className="flex flex-col items-center text-center">
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-card shadow-[var(--shadow-soft)]">
                  <span className="font-display text-lg font-bold text-gradient-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-orange shadow-[0_0_0_4px_rgba(245,124,0,0.15)]" />
                </div>
                <div className="mt-4 font-semibold text-heading">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
