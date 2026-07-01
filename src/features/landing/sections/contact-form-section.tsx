import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/config/landing-content";
import { SITE } from "@/config/site";

export function ContactFormSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    setTimeout(() => {
      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.open(`mailto:${SITE.email}?subject=${subject}&body=${body}`, "_blank");
      toast.success("Thanks! Your message is ready to send — check your email client.");
      form.reset();
      setLoading(false);
    }, 600);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange">
            Get in touch
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">
            Let's build something <span className="text-gradient-brand">great together</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project and we'll respond within 24 hours with next steps and a
            tailored proposal.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-orange/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Email us</div>
                <div className="font-semibold text-navy">{SITE.email}</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-orange/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">WhatsApp</div>
                <div className="font-semibold text-navy">{SITE.phoneDisplay}</div>
              </div>
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                Full name
              </label>
              <Input id="name" name="name" required placeholder="Jane Smith" className="h-11 rounded-xl" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="h-11 rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
                Service interested in
              </label>
              <select
                id="service"
                name="service"
                className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                Project details
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your goals, timeline, and budget..."
                className="rounded-xl"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-orange px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send message"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
