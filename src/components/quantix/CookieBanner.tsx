'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // We need to check for `window` to ensure this code only runs on the client
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookies_accepted');
      if (consent !== 'true') {
        // Use a timeout to avoid layout shifts and hydration errors
        setTimeout(() => setShowBanner(true), 500);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setShowBanner(false);
  };

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-500 ease-out',
        showBanner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
      )}
    >
        <div className="container mx-auto max-w-7xl">
            <div className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-lg p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <Cookie className="h-8 w-8 text-primary flex-shrink-0 mt-1 hidden sm:block" />
                    <p className="text-sm text-foreground/80">
                        Nós utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência, de acordo com a nossa{' '}
                        <Link href="/politica-privacidade" className="font-semibold text-primary hover:underline">
                            Política de Privacidade
                        </Link>
                        . Ao continuar navegando, você concorda com estas condições.
                    </p>
                </div>
                <Button onClick={handleAccept} className="w-full md:w-auto flex-shrink-0">
                    Aceitar Cookies
                </Button>
            </div>
        </div>
    </div>
  );
}
