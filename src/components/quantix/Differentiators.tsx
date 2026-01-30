import { Rocket, TrendingUp, BarChart4, ShieldCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { MaskReveal } from "./MaskReveal";

const differentiators = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Estratégias Personalizadas",
    description: "Nenhuma solução de prateleira. Mergulhamos no seu negócio para criar um plano único.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Foco em ROI e Crescimento",
    description: "Cada ação é medida e otimizada. Nosso sucesso é o crescimento dos seus números.",
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-primary" />,
    title: "Uso de Tecnologia e Dados",
    description: "Usamos as melhores ferramentas e análise de dados para tomar decisões inteligentes.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Atendimento Consultivo",
    description: "Somos uma extensão da sua equipe, com transparência total e comunicação clara.",
  },
];

export function Differentiators() {
  return (
    <section id="differentiators" className="py-20 md:py-28 bg-card has-growth-vectors scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <MaskReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Mais que uma Agência, um Parceiro Estratégico</h2>
            <p className="mt-4 text-lg text-muted-foreground">Entendemos seus desafios e trabalhamos lado a lado para superar suas metas.</p>
          </div>
        </MaskReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={index * 150} direction={index % 2 === 0 ? 'down' : 'up'}>
                <div className="h-full flex items-start gap-6 p-8 bg-secondary/20 backdrop-blur-sm rounded-lg transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-2">
                  <div className="flex-shrink-0 mt-1 animate-float">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-headline font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-foreground/70">{item.description}</p>
                  </div>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
