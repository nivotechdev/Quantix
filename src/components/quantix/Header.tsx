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
        "fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-[15px] border-b border-primary/10 transition-all duration-300 py-2 md:py-3"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4">
        <QuantixLogo className="flex-shrink min-w-0" />
        
        <Button 
            asChild 
            className="flex-shrink-0 rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 uppercase font-bold tracking-wider 
            text-xs h-9 px-3
            md:text-sm md:h-11 md:px-6"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4 shrink-0" />
            <span className="truncate">Fale com um Especialista</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
