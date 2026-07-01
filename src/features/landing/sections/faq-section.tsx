import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQS } from "@/config/landing-content";

export function FaqSection() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions? <span className="text-gradient-brand">We've got answers</span>.
            </>
          }
          sub="Everything you need to know before starting your project."
        />
        <Accordion
          type="single"
          collapsible
          className="mt-12 rounded-2xl border border-border bg-card px-6 shadow-[var(--shadow-soft)]"
        >
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
