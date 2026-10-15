import { BotanicalArt, Ornament } from './botanical-art';

export function InvitationPaper({ miniature = false }: { miniature?: boolean }) {
  return (
    <div className={miniature ? 'paper-insert' : 'invitation-paper'}>
      <div className="engraved-border" aria-hidden="true" />
      <BotanicalArt />
      <div className="invitation-print">
        <p className="bismillah" lang="ar" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        <p className="printed-label">Nikah Ceremony</p>
        <p className="invitation-message">With the grace and blessings of Allah (SWT), we cordially invite you to join us as we solemnise the sacred bond of Nikah between</p>
        <h1 className="couple-names"><span>Asma Khan</span><small>Daughter of Abdullah Khan</small><em>&</em><span>Mohammed Zaki</span><small>Son of Mohammed Ashiq</small></h1>
        <div className="date-imprint"><span>Wednesday</span><div className="date-number"><i /><strong>11</strong><i /></div><span>November</span><em>2026</em></div>
        <Ornament />
        <p className="printed-label venue-intro">At 7 pm, the Nikah will be held at</p>
        <p className="venue-name">Anjuman Mufidul<br />Yatama<br />School Ground</p>
        <p className="venue-place">Naya Nagar, Mira Road</p>
      </div>
    </div>
  );
}
