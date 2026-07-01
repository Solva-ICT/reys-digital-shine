import { createFileRoute } from "@tanstack/react-router";

import { SITE } from "@/config/site";
import { LandingPage } from "@/features/landing/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      {
        name: "description",
        content:
          "Premium digital agency for web development, branding, paid ads, SEO, content, and growth strategy.",
      },
      { property: "og:title", content: SITE.name },
      {
        property: "og:description",
        content: "We build digital experiences that grow your business.",
      },
    ],
  }),
  component: LandingPage,
});
