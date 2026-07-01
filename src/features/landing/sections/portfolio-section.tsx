import { ArrowRight } from "lucide-react";

import { MockUI } from "@/components/shared/mock-ui";
import { SectionHeader } from "@/components/shared/section-header";
import { PORTFOLIO } from "@/config/landing-content";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="Selected work"
        title={
          <>
            Designs people <span className="text-gradient-brand">remember</span>.
          </>
        }
        sub="A glimpse at recent corporate, e-commerce, app, and brand projects."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO.map((project) => (
          <div
            key={project.title}
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${
              project.tall ? "sm:row-span-2" : ""
            }`}
          >
            <div
              className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} ${
                project.tall ? "sm:aspect-[4/6]" : ""
              }`}
            >
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
              <MockUI />
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-orange">
                  {project.tag}
                </div>
                <div className="mt-1 font-semibold text-heading">{project.title}</div>
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-heading transition-all group-hover:bg-navy group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
