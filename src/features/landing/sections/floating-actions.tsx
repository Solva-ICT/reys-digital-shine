import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { SITE } from "@/config/site";

export function BackToTop() {
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

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
