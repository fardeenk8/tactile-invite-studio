import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BotanicalArt, Ornament } from './botanical-art';

export function CelebrationSections() {
  return (
    <div className="celebration-pages">
      <div className="chapter-divider"><span>A blessed day</span><ArrowDown size={13} aria-hidden="true" /></div>
      <section className="celebration-section verse-section" aria-labelledby="verse-title">
        <BotanicalArt kind="sprig" /><p className="printed-label">Surah Ar-Rum · 30:21</p><h2 id="verse-title" className="sr-only">A verse from the Qur'an</h2>
        <p className="verse-arabic" lang="ar" dir="rtl">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
        <p className="romantic-note">“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”</p>
        <Ornament /><p className="section-prose">May Allah bless this union<br />with love and mercy.</p>
      </section>
      <section className="celebration-section location-section" aria-labelledby="location-title">
        <Ornament /><p className="printed-label">The location</p><h2 id="location-title">Finding<br /><em>your way</em></h2>
        <Button asChild variant="stationery" className="stationery-link"><a href="https://www.google.com/maps/dir/?api=1&destination=7JFJ7VP6%2BQPH" target="_blank" rel="noreferrer">Click here for navigation <ArrowUpRight /></a></Button>
      </section>
      <section className="celebration-section final-section" aria-labelledby="final-title">
        <BotanicalArt kind="garland" /><p className="printed-label">With duas and warm regards</p><h2 id="final-title">Your presence<br /><em>means the world to us.</em></h2><p className="signature-names">Abdullah Khan <em>&</em> Family</p>
      </section>
    </div>
  );
}
