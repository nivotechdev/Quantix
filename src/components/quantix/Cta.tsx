import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { LeadFormDialog } from "./LeadFormDialog";

const WHATSAPP_LINK_GROW = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20crescer%20meu%20neg%C3%B3cio%20com%20a%20Quantix.";

export function Cta() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-secondary to-blue-950/50 rounded-lg p-8 md:p-16 text-center shadow-2xl">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-white">Pronto para Elevar seu Negócio ao Próximo Nível?</h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
               <a href={WHATSAPP_LINK_GROW} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero Crescer Meu Negócio
               </a>
            </Button>
            <LeadFormDialog>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-primary hover:bg-primary hover:text-primary-foreground">
                Prefiro preencher um formulário
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </LeadFormDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
