export function InvitationPaper({ miniature = false }: { miniature?: boolean }) {
  return (
    <div className={miniature ? 'paper-insert' : 'invitation-paper'}>
      <div className="paper-rule" aria-hidden="true" />
      <p className="printed-label">Together with their families</p>
      <h1 className="couple-names"><span>Clara</span><em>&</em><span>Julien</span></h1>
      <p className="invitation-message">joyfully invite you to celebrate<br />their wedding</p>
      <div className="date-imprint"><span>Saturday</span><strong>19</strong><span>June 2027</span></div>
      <p className="venue-name">Maison des Roses</p>
      <p className="venue-place">Provence, France</p>
      <div className="paper-rule" aria-hidden="true" />
    </div>
  );
}