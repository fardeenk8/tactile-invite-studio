import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BotanicalArt, Ornament } from './botanical-art';

export function CelebrationSections() {
  return (
    <div className="celebration-pages">
      <div className="chapter-divider"><span>A blessed day</span><ArrowDown size={13} aria-hidden="true" /></div>
      <section className="celebration-section reception-section" aria-labelledby="reception-title">
        <BotanicalArt kind="sprig" />
        <p className="printed-label">The ceremony</p><h2 id="reception-title">Nikah<br /><em>of Zaki & Asma</em></h2>
        <div className="printed-schedule"><div><span>Date</span><p>11 November 2026</p></div><div><span>Time</span><p>7 pm</p></div><div><span>Venue</span><p>Anjuman Islam School Ground</p></div></div>
        <p className="romantic-note">Your presence will make our day complete.</p>
      </section>
      <section className="celebration-section location-section" aria-labelledby="location-title">
        <Ornament /><p className="printed-label">The location</p><h2 id="location-title">Anjuman Islam<br /><em>School Ground</em></h2>
        <p className="printed-label">Naya Nagar, Mira Road</p>
        <Button asChild variant="stationery" className="stationery-link"><a href="https://www.google.com/maps/search/?api=1&query=Anjuman%20Islam%20School%20Ground%2C%20Naya%20Nagar%2C%20Mira%20Road" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight /></a></Button>
        <BotanicalArt kind="garland" />
      </section>
      <section className="celebration-section verse-section" aria-labelledby="verse-title">
        <BotanicalArt kind="sprig" /><p className="printed-label">Surah Ar-Rum · 30:21</p><h2 id="verse-title" className="sr-only">A verse from the Qur'an</h2>
        <p className="verse-arabic" lang="ar" dir="rtl">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
        <Ornament /><p className="romantic-note">“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”</p>
      </section>
      <section className="celebration-section final-section" aria-labelledby="final-title">
        <BotanicalArt kind="garland" /><p className="printed-label">With duas and warm regards</p><h2 id="final-title">Your presence<br /><em>means the world to us.</em></h2><p className="signature-names">Abdullah Khan <em>&</em> Family</p><p className="printed-label">11 · 11 · 2026</p>
      </section>
    </div>
  );
}
