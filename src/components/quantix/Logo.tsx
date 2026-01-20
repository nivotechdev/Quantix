import { Rocket } from 'lucide-react';

export function QuantixLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Rocket className="text-primary" size={28} />
      <div>
        <div className="text-2xl font-bold font-headline text-white">Quantix</div>
        <p className="text-xs text-muted-foreground -mt-1">agência de marketing</p>
      </div>
    </div>
  );
}
