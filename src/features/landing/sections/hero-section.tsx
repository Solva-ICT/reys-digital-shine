import heroIllustration from "@/assets/hero-illustration.png";
import { GhostButton } from "@/components/shared/ghost-button";
import { PrimaryButton } from "@/components/shared/primary-button";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-40">
      <HexagonPattern
        hexagons={[
          [1, 1],
          [4, 4],
          [2, 2],
          [3, 4],
          [5, 4],
          [8, 2],
          [6, 3],
          [8, 5],
          [10, 10],
        ]}
        className={cn(
          "inset-x-0 top-0 bottom-auto z-0 h-[min(48%,480px)] skew-y-3",
          "text-navy/15 dark:text-orange/18",
          "[&_polygon]:stroke-current [&_polygon]:stroke-[0.75]",
          "[&_polygon:not(.fill-none)]:fill-current/10",
          "[mask-image:radial-gradient(ellipse_55%_50%_at_50%_35%,white,transparent)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,124,0,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(11,47,107,0.15),transparent)] blur-3xl dark:bg-[radial-gradient(closest-side,rgba(245,124,0,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-navy shadow-[var(--shadow-soft)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Premium Digital Agency
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl md:text-7xl">
            We Build Digital
            <br />
            Experiences That <span className="text-gradient-brand">Grow Your Business.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Helping brands scale through web development, digital marketing, branding, SEO, paid
            advertising, content creation, and business strategy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#contact">Get Free Consultation</PrimaryButton>
            <GhostButton href="#portfolio">View Portfolio</GhostButton>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute -inset-x-12 -inset-y-6 z-0 rounded-[40px] bg-[radial-gradient(closest-side,rgba(245,124,0,0.18),transparent_70%)] blur-2xl" />
          <div className="animate-float rounded-3xl">
            <img
              src={heroIllustration}
              alt="3D dashboard, analytics, and digital growth illustration"
              width={1280}
              height={1024}
              className="mx-auto w-full max-w-3xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
