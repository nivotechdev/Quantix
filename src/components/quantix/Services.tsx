import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, MonitorSmartphone, BrainCircuit, Bot } from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Gestão de Tráfego Pago",
    description: "Atraia o público certo e maximize seu ROI com campanhas otimizadas em todas as principais plataformas.",
  },
  {
    icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
    title: "Sites de Alta Conversão",
    description: "Desenvolvemos sites e landing pages rápidos, responsivos e projetados para transformar visitantes em clientes.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Estratégia de Marketing",
    description: "Criamos um plano de marketing digital completo e personalizado, alinhado aos seus objetivos de negócio.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Funis e Automação",
    description: "Automatize processos, nutra leads e construa funis de vendas eficientes que trabalham para você 24/7.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nossas Soluções para o seu Crescimento</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Da estratégia à execução, entregamos resultados que impactam seu faturamento.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="h-full bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{service.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
