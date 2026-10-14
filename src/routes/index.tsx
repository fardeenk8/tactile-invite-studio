import { createFileRoute } from "@tanstack/react-router";
import { OpeningExperience } from '@/components/invitation/opening-experience';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Zaki & Asma — Nikah Invitation' },
      { name: 'description', content: 'Join us for the Nikah of Mohammed Zaki and Asma Khan, 11 November 2026 at 7 pm, Anjuman Islam School Ground, Naya Nagar, Mira Road.' },
      { property: 'og:title', content: 'Zaki & Asma — Nikah Invitation' },
      { property: 'og:description', content: 'Open the envelope for the Nikah invitation of Zaki & Asma, 11 November 2026, Mira Road.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://tactile-invite-studio.vercel.app/og-image.jpg' },
      { name: 'twitter:image', content: 'https://tactile-invite-studio.vercel.app/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: OpeningExperience,
});
