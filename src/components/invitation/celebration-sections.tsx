import { useState, type FormEvent } from 'react';
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BotanicalArt, Ornament } from './botanical-art';

function Rsvp() {
  const [attendance, setAttendance] = useState('yes');
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <section className="celebration-section rsvp-section" aria-labelledby="rsvp-title">
      <BotanicalArt kind="garland" />
      <p className="printed-label">The pleasure of your company</p>
      <h2 id="rsvp-title">Kindly reply</h2>
      <p className="section-prose">We would love to celebrate with you.</p>
      {submitted ? <div className="rsvp-confirmation" role="status"><Check aria-hidden="true" /><h3>{attendance === 'yes' ? 'A lovely yes.' : 'With you in spirit.'}</h3><p>This is a fictional invitation preview.<br />Your response has not been sent.</p><Button variant="stationery" onClick={() => setSubmitted(false)}>Edit preview response</Button></div> :
        <form className="rsvp-form" onSubmit={submit}>
          <p className="rsvp-preview-label">Preview RSVP · no response will be sent</p>
          <label htmlFor="guest-name">Your full name</label>
          <input id="guest-name" name="name" autoComplete="name" required maxLength={100} placeholder="Name as it appears on your invitation" />
          <label htmlFor="guest-email">Email address</label>
          <input id="guest-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Your email" />
          <fieldset><legend>Will you be joining us?</legend><div className="attendance-options"><label><input type="radio" name="attendance" value="yes" checked={attendance === 'yes'} onChange={() => setAttendance('yes')} />Joyfully accepts</label><label><input type="radio" name="attendance" value="no" checked={attendance === 'no'} onChange={() => setAttendance('no')} />Regretfully declines</label></div></fieldset>
          {attendance === 'yes' && <><label htmlFor="guest-diet">Dietary requirements <span>(optional)</span></label><textarea id="guest-diet" name="diet" rows={2} maxLength={500} placeholder="Anything we should know?" /></>}
          <Button variant="stationery" type="submit" className="stationery-submit">Preview response <ArrowUpRight /></Button>
        </form>}
    </section>
  );
}

export function CelebrationSections() {
  return (
    <div className="celebration-pages">
      <div className="chapter-divider"><span>A day to remember</span><ArrowDown size={13} aria-hidden="true" /></div>
      <section className="celebration-section story-section" aria-labelledby="story-title">
        <BotanicalArt kind="sprig" />
        <p className="printed-label">Our story</p><h2 id="story-title">A little serendipity.<br /><em>A forever kind of love.</em></h2>
        <p className="section-prose">A chance meeting, a shared smile, and a conversation neither of us wanted to end. Somewhere between long walks and slow Sunday mornings, our lives became one beautiful story.</p>
        <Ornament /><p className="romantic-note">And now, our favourite chapter.</p>
      </section>
      <section className="celebration-section ceremony-section" aria-labelledby="ceremony-title">
        <BotanicalArt kind="garland" />
        <p className="printed-label">01 · The ceremony</p><h2 id="ceremony-title">Where forever begins</h2>
        <p className="occasion-time">Half past three <em>in the afternoon</em></p><Ornament />
        <h3>The Rose Garden</h3><p className="section-prose">An intimate exchange of vows beneath the garden roses, surrounded by our favourite people.</p><p className="printed-label">Please arrive fifteen minutes early</p>
      </section>
      <section className="celebration-section reception-section" aria-labelledby="reception-title">
        <BotanicalArt kind="sprig" />
        <p className="printed-label">02 · The reception</p><h2 id="reception-title">Dinner, dancing<br /><em>& a little magic</em></h2>
        <div className="printed-schedule"><div><span>4:30 pm</span><p>Drinks on the terrace</p></div><div><span>6:00 pm</span><p>A candlelit dinner</p></div><div><span>8:00 pm</span><p>Dancing under the stars</p></div></div>
        <p className="romantic-note">Let the evening linger.</p>
      </section>
      <section className="celebration-section location-section" aria-labelledby="location-title">
        <Ornament /><p className="printed-label">The location</p><h2 id="location-title">Rosewood<br /><em>Garden Estate</em></h2>
        <p className="printed-label">Santa Barbara, California</p><p className="section-prose">A garden setting, coastal air, and the quiet beauty of California. Our ceremony and reception unfold together at the estate.</p>
        <Button asChild variant="stationery" className="stationery-link"><a href="https://www.google.com/maps/search/?api=1&query=Santa%20Barbara%2C%20California" target="_blank" rel="noreferrer">Explore Santa Barbara <ArrowUpRight /></a></Button><p className="location-preview-note">Fictional venue · city map only</p>
        <BotanicalArt kind="garland" />
      </section>
      <section className="celebration-section dress-section" aria-labelledby="dress-title">
        <BotanicalArt kind="sprig" /><p className="printed-label">The dress code</p><h2 id="dress-title">Garden elegance</h2><p className="section-prose">Romantic dresses, tailored suits, and something that makes you feel wonderful. Soft colours and floral touches are welcome.</p><Ornament /><p className="romantic-note">Bring a light layer for the evening<br />and shoes made for garden paths.</p>
      </section>
      <Rsvp />
      <section className="celebration-section final-section" aria-labelledby="final-title">
        <BotanicalArt kind="garland" /><p className="printed-label">With all our love</p><h2 id="final-title">You are part of<br /><em>our forever.</em></h2><p className="section-prose">Thank you for filling our lives with love.<br />We cannot wait to share this day with you.</p><p className="signature-names">Emma <em>&</em> James</p><p className="printed-label">12 · 12 · 2026</p>
      </section>
    </div>
  );
}