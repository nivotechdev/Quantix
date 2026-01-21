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
        "fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-[15px] border-b border-primary/10 transition-all duration-300"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-3 md:py-4">
        <QuantixLogo />
        <Button 
            asChild 
            className="rounded-lg bg-gradient-to-br from-primary/90 to-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-shadow duration-300 uppercase font-semibold tracking-wider text-[11px] h-10 px-4 md:text-xs md:h-11 md:px-6"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>Fale com um Especialista</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
