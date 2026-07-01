import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { ClientLogosSection } from "@/features/landing/sections/client-logos-section";
import { ContactFormSection } from "@/features/landing/sections/contact-form-section";
import { CtaSection } from "@/features/landing/sections/cta-section";
import { FaqSection } from "@/features/landing/sections/faq-section";
import { BackToTop, WhatsAppFloat } from "@/features/landing/sections/floating-actions";
import { HeroSection } from "@/features/landing/sections/hero-section";
import { PortfolioSection } from "@/features/landing/sections/portfolio-section";
import { ProcessSection } from "@/features/landing/sections/process-section";
import { ServicesSection } from "@/features/landing/sections/services-section";
import { StatsSection } from "@/features/landing/sections/stats-section";
import { TechSection } from "@/features/landing/sections/tech-section";
import { TestimonialsSection } from "@/features/landing/sections/testimonials-section";
import { WhyChooseUsSection } from "@/features/landing/sections/why-choose-us-section";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <HeroSection />
        <StatsSection />
        <ClientLogosSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <ProcessSection />
        <FaqSection />
        <TestimonialsSection />
        <TechSection />
        <ContactFormSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  );
}
