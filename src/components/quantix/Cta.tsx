import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, ShieldCheck, Zap } from "lucide-react";
import { LeadFormDialog } from "./LeadFormDialog";
import { FadeIn } from "./FadeIn";

const WHATSAPP_LINK_GROW = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20crescer%20meu%20neg%C3%B3cio%20com%20a%20Quantix.";

export function Cta() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn delay={200}>
          <div className="relative rounded-xl p-8 md:p-16 text-center overflow-hidden bg-gradient-to-b from-card/50 to-background border-t border-primary/30 shadow-[0_-10px_40px_-15px_hsl(var(--primary)/0.2)]">
            
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              A Próxima Escala do Seu Negócio é uma Decisão de Distância
            </h2>
            <p className="max-w-3xl mx-auto mt-6 text-lg text-muted-foreground">
              Nossa consultoria estratégica é o primeiro passo. Vamos conversar?
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto animate-pulse-glow" 
                asChild
              >
                 <a href={WHATSAPP_LINK_GROW} target="_blank" rel="noopener noreferrer">
                  <Rocket className="mr-2 h-5 w-5 button-icon-rocket" />
                  Quero Crescer Meu Negócio
                 </a>
              </Button>
              <LeadFormDialog>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-transparent text-white border-primary/50 hover:bg-primary/10 hover:border-primary"
                >
                  Prefiro preencher um formulário
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </LeadFormDialog>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 md:gap-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-green-400/70"/>
                    <span>Confidencialidade Garantida</span>
                </div>
                 <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Zap className="h-4 w-4 text-yellow-400/70"/>
                    <span>Resposta Rápida</span>
                </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
