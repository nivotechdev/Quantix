'use client';

import { Button } from "@/components/ui/button";
import { QuantixLogo } from "@/components/quantix/Logo";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Quantix.";

export function Header() {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-[20px] border-b border-primary/15"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-2.5 px-5 h-[90px] md:h-[100px]">
        {/* Brand Block */}
        <div className="flex items-center flex-1 min-w-0">
          <QuantixLogo className="h-full max-h-[60px] md:max-h-[70px]"/>
        </div>
        
        {/* Action Button */}
        <div className="flex-shrink-0">
            <Button 
                asChild 
                style={{ borderRadius: '12px' }}
                className="w-fit bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 uppercase font-semibold tracking-wider 
                text-[11px] h-9 px-3
                md:text-sm md:h-11 md:px-6"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="hidden md:block mr-2 h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">Fale com um Especialista</span>
              </a>
            </Button>
        </div>
      </div>
    </header>
  );
}
