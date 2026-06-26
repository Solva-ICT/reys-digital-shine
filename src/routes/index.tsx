import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Globe,
  Share2,
  Target,
  PenTool,
  Sparkles,
  Mail,
  Check,
  Zap,
  Clock,
  Wallet,
  TrendingUp,
  Star,
  Menu,
  X,
  MessageCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import heroIllustration from "@/assets/hero-illustration.png";
import reysLogo from "@/assets/reys-logo.png";
import { ThemeToggle } from "@/components/theme-toggle";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REYS Digital Agency — We Build Digital Experiences That Grow Your Business" },
      {
        name: "description",
        content:
          "Premium digital agency for web development, branding, paid ads, SEO, content, and growth strategy.",
      },
      { property: "og:title", content: "REYS Digital Agency" },
      {
        property: "og:description",
        content: "We build digital experiences that grow your business.",
      },
    ],
  }),
  component: Landing,
});

/* ---------- Reusable bits ---------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
      <img src={reysLogo} alt="REYS Digital Agency" className="h-9 w-9 object-contain" />
      <span className="font-display text-lg font-bold tracking-tight text-navy">
        REYS
        <span className="ml-1 text-xs font-medium text-muted-foreground">
          Digital Agency
        </span>
      </span>
    </a>
  );
}

function PrimaryButton({
  children,
  href = "#contact",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-orange px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(245,124,0,0.55)] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({
  children,
  href = "#portfolio",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold text-navy transition-all hover:border-navy/30 hover:bg-surface ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------- Nav ---------- */

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-2.5 transition-all sm:px-5 ${
            scrolled
              ? "glass shadow-[var(--shadow-soft)]"
              : "bg-transparent"
          }`}
        >
          <Logo />
          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-surface hover:text-navy"
                >
                  {i.label}
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
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card p-2 text-navy md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-soft)] md:hidden">
            <nav className="flex flex-col">
              {NAV.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface"
                >
                  {i.label}
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

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-40">
      {/* Background */}
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
            Experiences That{" "}
            <span className="text-gradient-brand">Grow Your Business.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Helping brands scale through web development, digital marketing,
            branding, SEO, paid advertising, content creation, and business
            strategy.
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

/* ---------- Counter ---------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function Stats() {
  const items = [
    { to: 250, suffix: "+", label: "Projects Completed" },
    { to: 120, suffix: "+", label: "Happy Clients" },
    { to: 98, suffix: "%", label: "Client Satisfaction" },
    { to: 5, suffix: "+", label: "Years Experience" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-surface p-6 sm:p-10 md:grid-cols-4">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold text-navy sm:text-5xl">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, responsive, and secure websites built to elevate your online presence and drive results.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Strategic content planning, community engagement, and performance tracking to grow your brand online.",
  },
  {
    icon: Target,
    title: "Meta Ads Campaigns",
    desc: "Targeted ad campaigns that drive traffic, generate leads, and maximize your ROI.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    desc: "High-quality, engaging content that tells your story and connects with your audience.",
  },
  {
    icon: Sparkles,
    title: "Creative Branding",
    desc: "Unique brand identity designs that make your business stand out and leave a lasting impression.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Personalized email campaigns that nurture relationships and drive customer loyalty.",
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="What we do"
        title={
          <>
            Services that <span className="text-gradient-brand">scale brands</span>.
          </>
        }
        sub="Six core capabilities — combined into one team that ships outcomes."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-[var(--shadow-card)]"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-white shadow-[var(--shadow-soft)] transition-transform group-hover:scale-110 group-hover:rotate-3">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ---------- Why Choose Us ---------- */

const WHY = [
  { icon: Check, title: "Experienced Team", desc: "Seasoned strategists, designers, and engineers who ship." },
  { icon: Zap, title: "Fast Delivery", desc: "Weekly sprints with milestones you can actually see." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No surprises — clear scopes and fixed-fee options." },
  { icon: TrendingUp, title: "Result-Driven Strategy", desc: "Every decision tied to a measurable business outcome." },
];

function WhyChooseUs() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-[radial-gradient(closest-side,rgba(245,124,0,0.18),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <WorkflowIllustration />
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange">
            Why REYS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-5xl">
            A partner built for{" "}
            <span className="text-gradient-brand">growth</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We pair premium craft with measurable outcomes — so your team gets
            both the brand and the numbers.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-semibold text-navy">{w.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowIllustration() {
  return (
    <svg viewBox="0 0 520 360" className="h-auto w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#0B2F6B" />
          <stop offset="1" stopColor="#1e4ea0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#F57C00" />
          <stop offset="1" stopColor="#ffb260" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" rx="18" width="220" height="140" fill="url(#g1)" />
      <rect x="40" y="50" rx="6" width="180" height="10" fill="white" opacity=".25" />
      <rect x="40" y="70" rx="6" width="120" height="10" fill="white" opacity=".18" />
      <polyline
        points="40,150 80,120 120,135 160,95 200,110 220,80"
        fill="none"
        stroke="#F57C00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="270" y="60" rx="18" width="230" height="90" fill="#F8FAFC" stroke="#E5E7EB" />
      <circle cx="305" cy="105" r="18" fill="url(#g2)" />
      <rect x="335" y="88" width="140" height="10" rx="5" fill="#0B2F6B" opacity=".7" />
      <rect x="335" y="106" width="100" height="8" rx="4" fill="#0B2F6B" opacity=".25" />

      <rect x="20" y="200" rx="18" width="150" height="130" fill="#F8FAFC" stroke="#E5E7EB" />
      <rect x="40" y="220" width="40" height="80" fill="url(#g1)" rx="4" />
      <rect x="90" y="240" width="40" height="60" fill="url(#g2)" rx="4" />

      <rect x="190" y="200" rx="18" width="310" height="130" fill="white" stroke="#E5E7EB" />
      <rect x="210" y="220" width="140" height="14" rx="6" fill="#0B2F6B" />
      <rect x="210" y="244" width="270" height="8" rx="4" fill="#E5E7EB" />
      <rect x="210" y="260" width="220" height="8" rx="4" fill="#E5E7EB" />
      <rect x="210" y="290" width="120" height="28" rx="14" fill="url(#g2)" />
    </svg>
  );
}

/* ---------- Portfolio ---------- */

const PORTFOLIO: { title: string; tag: string; tall?: boolean; gradient: string }[] = [
  { title: "Northwind Corporate", tag: "Website", gradient: "from-navy via-navy-deep to-navy" },
  { title: "Saffron Bistro", tag: "Restaurant", gradient: "from-orange to-orange-soft", tall: true },
  { title: "Loop Commerce", tag: "E-commerce", gradient: "from-navy to-orange" },
  { title: "Pulse Health App", tag: "Mobile App", gradient: "from-navy-deep to-navy" },
  { title: "Atlas Analytics", tag: "Dashboard", gradient: "from-orange-soft via-orange to-navy", tall: true },
  { title: "Ember Identity", tag: "Branding", gradient: "from-orange to-navy" },
];

function Portfolio() {
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
        {PORTFOLIO.map((p) => (
          <div
            key={p.title}
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${
              p.tall ? "sm:row-span-2" : ""
            }`}
          >
            <div
              className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} ${
                p.tall ? "sm:aspect-[4/6]" : ""
              }`}
            >
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
              <MockUI />
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-orange">
                  {p.tag}
                </div>
                <div className="mt-1 font-semibold text-navy">{p.title}</div>
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-navy transition-all group-hover:bg-navy group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MockUI() {
  return (
    <div className="absolute inset-x-6 bottom-6 top-10 rounded-2xl bg-white/15 p-3 backdrop-blur-md">
      <div className="flex gap-1.5">
        <div className="h-2 w-2 rounded-full bg-white/60" />
        <div className="h-2 w-2 rounded-full bg-white/40" />
        <div className="h-2 w-2 rounded-full bg-white/30" />
      </div>
      <div className="mt-3 h-2 w-3/4 rounded bg-white/40" />
      <div className="mt-2 h-2 w-1/2 rounded bg-white/30" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="h-10 rounded-lg bg-white/30" />
        <div className="h-10 rounded-lg bg-white/40" />
        <div className="h-10 rounded-lg bg-white/30" />
      </div>
      <div className="mt-3 h-14 rounded-lg bg-white/25" />
    </div>
  );
}

/* ---------- Process ---------- */

const STEPS = ["Discovery", "Planning", "Design", "Development", "Launch", "Support"];

function Process() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our process"
          title={
            <>
              Six steps from idea to{" "}
              <span className="text-gradient-brand">impact</span>.
            </>
          }
        />
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent md:block" />
          <ol className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {STEPS.map((s, i) => (
              <li key={s} className="flex flex-col items-center text-center">
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-card shadow-[var(--shadow-soft)]">
                  <span className="font-display text-lg font-bold text-gradient-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-orange shadow-[0_0_0_4px_rgba(245,124,0,0.15)]" />
                </div>
                <div className="mt-4 font-semibold text-navy">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

const REVIEWS = [
  {
    name: "Amelia Carter",
    role: "Founder, Lumen Studio",
    quote:
      "REYS rebuilt our site and ad funnel in six weeks. Leads tripled and the brand finally looks like the business we want to be.",
  },
  {
    name: "Daniel Ortega",
    role: "CMO, Northwind Group",
    quote:
      "Strategic, transparent, and genuinely creative. The closest thing to an in-house team without the overhead.",
  },
  {
    name: "Priya Shah",
    role: "Owner, Saffron Bistro",
    quote:
      "Our online orders doubled the month after launch. They cared about our business outcomes, not just the design.",
  },
  {
    name: "Marcus Lee",
    role: "Head of Growth, Loop",
    quote:
      "From the first call it felt like working with senior partners. Quality, speed, and ROI — all three.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="Testimonials"
        title={
          <>
            Loved by ambitious{" "}
            <span className="text-gradient-brand">founders & teams</span>.
          </>
        }
      />
      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {REVIEWS.map((r) => (
              <div key={r.name} className="w-full shrink-0 px-2">
                <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
                  <div className="flex gap-1 text-orange">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-xl leading-relaxed text-navy sm:text-2xl">
                    “{r.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-semibold text-white">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-navy">{r.name}</div>
                      <div className="text-sm text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to testimonial ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-8 bg-orange" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech ---------- */

const TECH = [
  "React", "Next.js", "Node.js", "Laravel", "Python",
  "WordPress", "AWS", "Docker", "Flutter", "Figma",
];

function Tech() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Technologies we use
        </div>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...TECH, ...TECH].map((t, k) => (
              <span
                key={k}
                className="font-display text-2xl font-semibold text-navy/40 transition-colors hover:text-navy"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Client Logos ---------- */

const CLIENTS = [
  "Northwind Group",
  "Lumen Studio",
  "Loop Commerce",
  "Pulse Health",
  "Atlas Analytics",
  "Saffron Bistro",
  "Ember Identity",
  "Vertex Labs",
];

function ClientLogos() {
  return (
    <section className="border-y border-border bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by growing brands worldwide
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((name, k) => (
              <span
                key={k}
                className="font-display text-lg font-semibold text-navy/50 transition-colors hover:text-navy sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

const FAQS = [
  {
    q: "How long does a typical website project take?",
    a: "Most corporate and e-commerce sites take 4–8 weeks from kickoff to launch. We work in weekly sprints so you see progress every step of the way.",
  },
  {
    q: "Do you work with clients outside Spain?",
    a: "Yes — we're a remote-first agency working with teams worldwide. All communication is in English or Spanish, and we align with your timezone.",
  },
  {
    q: "What's included in a free consultation?",
    a: "A 30-minute strategy call where we review your goals, audit your current digital presence, and outline a tailored roadmap — no obligation.",
  },
  {
    q: "Can you manage our ads and social media ongoing?",
    a: "Absolutely. We offer monthly retainers for Meta ads, content creation, and social management with transparent reporting and KPI tracking.",
  },
  {
    q: "How does pricing work?",
    a: "We offer fixed-fee project scopes and monthly retainers. Every proposal includes a clear breakdown — no hidden fees or surprise invoices.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions?{" "}
              <span className="text-gradient-brand">We've got answers</span>.
            </>
          }
          sub="Everything you need to know before starting your project."
        />
        <Accordion type="single" collapsible className="mt-12 rounded-2xl border border-border bg-card px-6 shadow-[var(--shadow-soft)]">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- Contact Form ---------- */

function ContactForm() {
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
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      );
      window.open(`mailto:reysdigital6@gmail.com?subject=${subject}&body=${body}`, "_blank");
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
            Let's build something{" "}
            <span className="text-gradient-brand">great together</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project and we'll respond within 24 hours with
            next steps and a tailored proposal.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href="mailto:reysdigital6@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-orange/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Email us</div>
                <div className="font-semibold text-navy">reysdigital6@gmail.com</div>
              </div>
            </a>
            <a
              href="https://wa.me/34687232524"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-orange/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">WhatsApp</div>
                <div className="font-semibold text-navy">252 687232524</div>
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
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
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

/* ---------- Newsletter ---------- */

function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("You're subscribed! Watch your inbox for growth tips.");
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="text-sm font-semibold text-navy">Stay in the loop</div>
      <p className="mt-1 text-sm text-muted-foreground">
        Monthly tips on web, ads, and brand growth.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <Input
          type="email"
          required
          placeholder="you@email.com"
          className="h-10 flex-1 rounded-xl"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
        >
          Join
        </button>
      </form>
    </div>
  );
}

/* ---------- Back to top & WhatsApp ---------- */

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-orange/40"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34687232524"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* ---------- CTA ---------- */

function CTA() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-brand p-10 text-center shadow-[var(--shadow-card)] sm:p-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
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
            Let's map your next quarter together — strategy, design, and growth
            in one team.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:reysdigital6@gmail.com"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-orange px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:687232524"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Call 687 232 524
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            REYS Digital Agency builds premium websites, brands, and growth
            systems for ambitious teams.
          </p>
          <div className="mt-6 space-y-1 text-sm text-foreground/80">
            <div>
              <a href="mailto:reysdigital6@gmail.com" className="hover:text-orange">
                reysdigital6@gmail.com
              </a>
            </div>
            <div>
              <a href="tel:687232524" className="hover:text-orange">
                252 687232524
              </a>
            </div>
            <div className="text-muted-foreground">Remote • Worldwide</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-navy">Quick links</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-orange">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-navy">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-orange">
                  {s.title}
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
          <div>© {new Date().getFullYear()} REYS Digital Agency. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange">Privacy</a>
            <a href="#" className="hover:text-orange">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <FAQ />
        <Testimonials />
        <Tech />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  );
}
