import frame from '@/assets/botanical-frame.png';
import sprig from '@/assets/botanical-sprig.png';
import garland from '@/assets/botanical-garland.png';

export function BotanicalArt({ kind = 'frame', className = '' }: { kind?: 'frame' | 'sprig' | 'garland'; className?: string }) {
  const image = kind === 'frame' ? frame : kind === 'sprig' ? sprig : garland;
  return <img className={`botanical-art botanical-${kind} ${className}`} src={image} alt="" aria-hidden="true" width={kind === 'garland' ? 1536 : kind === 'frame' ? 1024 : 768} height={kind === 'frame' ? 1792 : kind === 'sprig' ? 1024 : 768} loading="eager" draggable={false} />;
}

export function Ornament() {
  return <div className="engraved-ornament" aria-hidden="true"><span /><i>✧</i><span /></div>;
}