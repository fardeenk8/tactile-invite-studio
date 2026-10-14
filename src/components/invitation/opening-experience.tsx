import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import stationery from '@/assets/stationery.jpg';
import { Envelope } from './envelope';
import { InvitationPaper } from './invitation-paper';
import { CelebrationSections } from './celebration-sections';
import { useOpening } from './use-opening';

export function OpeningExperience() {
  const { phase, open, replay } = useOpening();
  const revealed = phase === 'revealed';
  return (
    <main className={`stationery-experience phase-${phase}`}>
      <img className="stationery-background" src={stationery} alt="" width={1024} height={1536} fetchPriority="high" />
      <section className="opening-scene" aria-label="Nikah invitation" inert={revealed}>
        <header className="stationery-heading">
          <span className="monogram" aria-hidden="true">Z<span>A</span></span>
          <p className="printed-label">Nikah invitation</p>
        </header>
        <div className="envelope-position"><Envelope onOpen={open} disabled={phase !== 'closed'} /></div>
        <div className="envelope-caption">
          <p className="caption-names">Zaki <em>&</em> Asma</p>
          <p className="printed-label">11 November 2026 · Mira Road</p>
        </div>
        <footer className="opening-footnote">WITH DUAS AND WARM REGARDS</footer>
      </section>
      <section className="revealed-invitation" aria-hidden={!revealed} inert={!revealed}>
        <InvitationPaper />
        <CelebrationSections />
        <footer className="invitation-closing">
          <p>In shā’ Allāh, see you there.</p>
          <Button variant="stationery" size="icon" onClick={replay} aria-label="Close and reopen the invitation" title="Close and reopen the invitation"><RotateCcw /></Button>
        </footer>
      </section>
      <span className="sr-only" role="status">{revealed ? 'Your invitation is open.' : phase === 'opening' ? 'The envelope is opening.' : ''}</span>
    </main>
  );
}