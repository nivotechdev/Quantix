'use client';

import { Button } from "@/components/ui/button";
import { QuantixLogo } from "@/components/quantix/Logo";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Quantix.";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-5 md:h-24">
        <QuantixLogo className="max-h-[80%]"/>
        <Button asChild className="h-9 px-2 text-xs md:h-10 md:px-4 md:text-sm">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-1 h-4 w-4" />
            <span>Fale com um Especialista</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
