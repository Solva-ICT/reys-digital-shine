import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Logo } from "@/components/shared/logo";
import { Newsletter } from "@/components/shared/newsletter";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { SERVICES } from "@/config/landing-content";
import { MAIN_NAV } from "@/config/navigation";
import { SITE } from "@/config/site";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-heading">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-orange"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/60 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.description}
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 text-sm text-foreground/85 transition-colors hover:text-orange"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-orange transition-colors group-hover:bg-orange/10">
                  <Mail className="h-4 w-4" />
                </span>
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="group flex items-center gap-3 text-sm text-foreground/85 transition-colors hover:text-orange"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-orange transition-colors group-hover:bg-orange/10">
                  <Phone className="h-4 w-4" />
                </span>
                {SITE.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground/85 transition-colors hover:text-orange"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 text-green-600 transition-colors group-hover:bg-green-500/20 dark:text-green-400">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                WhatsApp · {SITE.phoneDisplay}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-orange">
                  <MapPin className="h-4 w-4" />
                </span>
                {SITE.location}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <FooterHeading>Quick links</FooterHeading>
            <ul className="mt-5 space-y-3">
              {MAIN_NAV.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <FooterLink href="#services">{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <FooterHeading>Newsletter</FooterHeading>
            <p className="mt-5 text-sm text-muted-foreground">
              Monthly tips on web, ads, and brand growth — straight to your inbox.
            </p>
            <div className="mt-5">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
