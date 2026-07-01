import { MAIN_NAV } from "@/config/navigation";
import { SERVICES } from "@/config/landing-content";
import { SITE } from "@/config/site";
import { Logo } from "@/components/shared/logo";
import { Newsletter } from "@/components/shared/newsletter";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            REYS Digital Agency builds premium websites, brands, and growth systems for ambitious
            teams.
          </p>
          <div className="mt-6 space-y-1 text-sm text-foreground/80">
            <div>
              <a href={`mailto:${SITE.email}`} className="hover:text-orange">
                {SITE.email}
              </a>
            </div>
            <div>
              <a href={`tel:${SITE.phone}`} className="hover:text-orange">
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="text-muted-foreground">{SITE.location}</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-heading">Quick links</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {MAIN_NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-orange">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-heading">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a href="#services" className="hover:text-orange">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <div>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange">
              Privacy
            </a>
            <a href="#" className="hover:text-orange">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
