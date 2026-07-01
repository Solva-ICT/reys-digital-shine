import { Star } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionHeader } from "@/components/shared/section-header";
import { REVIEWS } from "@/config/landing-content";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((current) => (current + 1) % REVIEWS.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="Testimonials"
        title={
          <>
            Loved by ambitious <span className="text-gradient-brand">founders & teams</span>.
          </>
        }
      />
      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {REVIEWS.map((review) => (
              <div key={review.name} className="w-full shrink-0 px-2">
                <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
                  <div className="flex gap-1 text-orange">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-xl leading-relaxed text-heading sm:text-2xl">
                    “{review.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-semibold text-white">
                      {review.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-heading">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-orange" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
