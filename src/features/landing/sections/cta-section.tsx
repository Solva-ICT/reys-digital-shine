import { ArrowRight } from "lucide-react";

import { SITE } from "@/config/site";

export function CtaSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-brand p-10 text-center shadow-[var(--shadow-card)] sm:p-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative">
          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
            Ready to grow your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Let's map your next quarter together — strategy, design, and growth in one team.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-orange px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Call {SITE.phoneDisplay.replace("252 ", "")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
