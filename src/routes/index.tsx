import { createFileRoute } from "@tanstack/react-router";
import { OpeningExperience } from '@/components/invitation/opening-experience';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Emma Rose & James Alexander — A Botanical Wedding Invitation' },
      { name: 'description', content: 'An invitation in roses and ivory. Celebrate Emma Rose and James Alexander, 12 December 2026 in Santa Barbara, California.' },
      { property: 'og:title', content: 'Emma Rose & James Alexander — A Botanical Wedding Invitation' },
      { property: 'og:description', content: 'Open a little envelope to discover a botanical celebration of love, 12 December 2026 in Santa Barbara.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: OpeningExperience,
});
