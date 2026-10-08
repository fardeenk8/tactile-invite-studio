import { BotanicalArt, Ornament } from './botanical-art';

export function InvitationPaper({ miniature = false }: { miniature?: boolean }) {
  return (
    <div className={miniature ? 'paper-insert' : 'invitation-paper'}>
      <div className="engraved-border" aria-hidden="true" />
      <BotanicalArt />
      <div className="invitation-print">
        <div className="invitation-emblem" aria-hidden="true"><span>E</span><em>J</em><small>❧</small></div>
        <p className="printed-label">Together with their families</p>
        <h1 className="couple-names"><span>Emma Rose</span><em>&</em><span>James Alexander</span></h1>
        <p className="invitation-message">Joyfully invite you to celebrate<br />their wedding</p>
        <div className="date-imprint"><span>Saturday</span><div className="date-number"><i /><strong>12</strong><i /></div><span>December</span><em>2026</em></div>
        <Ornament />
        <p className="printed-label venue-intro">The wedding will be held at</p>
        <p className="venue-name">Rosewood Garden Estate</p>
        <p className="venue-place">Santa Barbara, California</p>
        <p className="paper-sentiment">An afternoon of love, a lifetime together.</p>
      </div>
    </div>
  );
}