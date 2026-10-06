import { createFileRoute } from "@tanstack/react-router";
import { OpeningExperience } from '@/components/invitation/opening-experience';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Clara & Julien — A Wedding Invitation' },
      { name: 'description', content: 'A little envelope, a beautiful beginning. Celebrate the wedding of Clara and Julien, 19 June 2027 in Provence.' },
      { property: 'og:title', content: 'Clara & Julien — A Wedding Invitation' },
      { property: 'og:description', content: 'A little envelope, a beautiful beginning. An invitation to celebrate love in Provence.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: OpeningExperience,
});
