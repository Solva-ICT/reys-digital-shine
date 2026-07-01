import {
  Check,
  Globe,
  Mail,
  PenTool,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type WhyItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type PortfolioItem = {
  title: string;
  tag: string;
  tall?: boolean;
  gradient: string;
};

export type Review = {
  name: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export const SERVICES: Service[] = [
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

export const WHY_CHOOSE_US: WhyItem[] = [
  {
    icon: Check,
    title: "Experienced Team",
    desc: "Seasoned strategists, designers, and engineers who ship.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Weekly sprints with milestones you can actually see.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "No surprises — clear scopes and fixed-fee options.",
  },
  {
    icon: TrendingUp,
    title: "Result-Driven Strategy",
    desc: "Every decision tied to a measurable business outcome.",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Northwind Corporate",
    tag: "Website",
    gradient: "from-navy via-navy-deep to-navy",
  },
  {
    title: "Saffron Bistro",
    tag: "Restaurant",
    gradient: "from-orange to-orange-soft",
    tall: true,
  },
  {
    title: "Loop Commerce",
    tag: "E-commerce",
    gradient: "from-navy to-orange",
  },
  {
    title: "Pulse Health App",
    tag: "Mobile App",
    gradient: "from-navy-deep to-navy",
  },
  {
    title: "Atlas Analytics",
    tag: "Dashboard",
    gradient: "from-orange-soft via-orange to-navy",
    tall: true,
  },
  {
    title: "Ember Identity",
    tag: "Branding",
    gradient: "from-orange to-navy",
  },
];

export const PROCESS_STEPS = [
  "Discovery",
  "Planning",
  "Design",
  "Development",
  "Launch",
  "Support",
] as const;

export const REVIEWS: Review[] = [
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

export const TECH_STACK = [
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Python",
  "WordPress",
  "AWS",
  "Docker",
  "Flutter",
  "Figma",
] as const;

export const CLIENTS = [
  "Northwind Group",
  "Lumen Studio",
  "Loop Commerce",
  "Pulse Health",
  "Atlas Analytics",
  "Saffron Bistro",
  "Ember Identity",
  "Vertex Labs",
] as const;

export const FAQS: FaqItem[] = [
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

export const STATS = [
  { to: 250, suffix: "+", label: "Projects Completed" },
  { to: 120, suffix: "+", label: "Happy Clients" },
  { to: 98, suffix: "%", label: "Client Satisfaction" },
  { to: 5, suffix: "+", label: "Years Experience" },
] as const;
