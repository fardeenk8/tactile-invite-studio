import { useEffect, useRef, useState } from 'react';

export type OpeningPhase = 'closed' | 'opening' | 'revealed';

export function useOpening() {
  const [phase, setPhase] = useState<OpeningPhase>('closed');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  function open() {
    if (phase !== 'closed') return;
    setPhase('opening');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer.current = setTimeout(() => setPhase('revealed'), reduced ? 180 : 4300);
  }

  function replay() {
    clearTimeout(timer.current);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setPhase('closed');
  }

  return { phase, open, replay };
}