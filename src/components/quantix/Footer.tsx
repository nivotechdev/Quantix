import { QuantixLogo } from "./Logo";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Quantix.";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <QuantixLogo />
            <p className="mt-2 text-sm text-foreground/70">Parceiros estratégicos para o seu crescimento.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Serviços</a>
            <Button variant="ghost" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contato
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground/50">
          &copy; {currentYear} Agência Quantix. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
