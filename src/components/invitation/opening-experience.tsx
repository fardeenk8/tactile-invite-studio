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
      <section className="opening-scene" aria-label="Wedding invitation" inert={revealed}>
        <header className="stationery-heading">
          <span className="monogram" aria-hidden="true">E<span>J</span></span>
          <p className="printed-label">A celebration of love</p>
        </header>
        <div className="envelope-position"><Envelope onOpen={open} disabled={phase !== 'closed'} /></div>
        <div className="envelope-caption">
          <p className="caption-names">Emma <em>&</em> James</p>
          <p className="printed-label">12 December 2026 · Santa Barbara</p>
        </div>
        <footer className="opening-footnote">WITH LOVE, FOR YOU</footer>
      </section>
      <section className="revealed-invitation" aria-hidden={!revealed} inert={!revealed}>
        <InvitationPaper />
        <CelebrationSections />
        <footer className="invitation-closing">
          <p>Together begins here.</p>
          <Button variant="stationery" size="icon" onClick={replay} aria-label="Close and reopen the invitation" title="Close and reopen the invitation"><RotateCcw /></Button>
        </footer>
      </section>
      <span className="sr-only" role="status">{revealed ? 'Your invitation is open.' : phase === 'opening' ? 'The envelope is opening.' : ''}</span>
    </main>
  );
}