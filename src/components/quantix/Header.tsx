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
      <div className="container mx-auto flex items-center justify-between px-5 py-4 md:py-6">
        <QuantixLogo />
        <Button 
            asChild 
            className="rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 uppercase font-semibold tracking-wider text-[12px] h-10 px-5 md:text-sm md:h-12 md:px-8"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            <span>Fale com um Especialista</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
