import { Button } from '@/components/ui/button';
import envelope from '@/assets/envelope.jpg';
import seal from '@/assets/wax-seal.png';
import { InvitationPaper } from './invitation-paper';
import { Ribbon } from './ribbon';

export function Envelope({ onOpen, disabled }: { onOpen: () => void; disabled: boolean }) {
  return (
    <div className="envelope-object">
      <div className="envelope-back" />
      <InvitationPaper miniature />
      <div className="envelope-pocket"><img src={envelope} alt="" width={1536} height={1024} draggable={false} /></div>
      <div className="envelope-flap"><img src={envelope} alt="" width={1536} height={1024} draggable={false} /></div>
      <Ribbon />
      <Button variant="stationery" className="wax-seal" onClick={onOpen} disabled={disabled} aria-label="Open Zaki and Asma’s Nikah invitation">
        <img src={seal} alt="Botanical wax seal" width={816} height={816} draggable={false} />
      </Button>
    </div>
  );
}