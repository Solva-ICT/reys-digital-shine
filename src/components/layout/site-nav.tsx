import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { MAIN_NAV } from "@/config/navigation";
import { GhostButton } from "@/components/shared/ghost-button";
import { Logo } from "@/components/shared/logo";
import { PrimaryButton } from "@/components/shared/primary-button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-2.5 transition-all sm:px-5 ${
            scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
          }`}
        >
          <Logo />
          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex">
              {MAIN_NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-surface hover:text-heading"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-2 md:flex">
              <ThemeToggle />
              <GhostButton href="#portfolio" className="!px-4 !py-2 text-sm">
                View Portfolio
              </GhostButton>
              <PrimaryButton href="#contact" className="!px-4 !py-2 text-sm">
                Get Free Consultation
              </PrimaryButton>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card p-2 text-heading md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-soft)] md:hidden">
            <nav className="flex flex-col">
              {MAIN_NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2">
              <GhostButton href="#portfolio">View Portfolio</GhostButton>
              <PrimaryButton href="#contact">Get Free Consultation</PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
