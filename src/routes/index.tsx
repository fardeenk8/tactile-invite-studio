import { createFileRoute } from "@tanstack/react-router";
import { OpeningExperience } from '@/components/invitation/opening-experience';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Asma & Zaki — Nikah Invitation' },
      { name: 'description', content: 'Join us for the Nikah of Asma Khan and Mohammed Zaki, 11 November 2026 at 7 pm, Anjuman Islam School Ground, Naya Nagar, Mira Road.' },
      { property: 'og:title', content: 'Asma & Zaki — Nikah Invitation' },
      { property: 'og:description', content: 'Open the envelope for the Nikah invitation of Asma & Zaki, 11 November 2026, Mira Road.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://tactile-invite-studio.vercel.app/og-image.jpg' },
      { name: 'twitter:image', content: 'https://tactile-invite-studio.vercel.app/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: OpeningExperience,
});
