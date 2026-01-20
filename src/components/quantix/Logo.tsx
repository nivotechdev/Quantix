import { Rocket } from 'lucide-react';

export function QuantixLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-2xl font-bold font-headline text-white ${className}`}>
      <Rocket className="text-primary" size={28} />
      <span>Quantix</span>
    </div>
  );
}
