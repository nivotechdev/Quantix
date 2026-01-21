import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target, MonitorSmartphone, BrainCircuit, Bot } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { MaskReveal } from "./MaskReveal";

const services = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Gestão de Tráfego Pago",
    description: "Atraímos o público certo e maximizamos seu ROI com campanhas de alta performance no Google, Meta e TikTok Ads.",
  },
  {
    icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
    title: "Sites de Alta Conversão",
    description: "Criamos sites e landing pages rápidos, responsivos e otimizados para transformar visitantes em clientes.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Estratégia de Marketing",
    description: "Analisamos seu negócio e mercado para desenvolver um plano de marketing data-driven focado em crescimento.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Funis e Automação",
    description: "Desenvolvemos sistemas automatizados que nutrem leads e geram vendas consistentes no piloto automático.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <MaskReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nossas Soluções para o seu Crescimento</h2>
            <p className="mt-4 text-lg text-muted-foreground">Focamos em estratégias que geram resultados mensuráveis e impulsionam o seu negócio.</p>
          </div>
        </MaskReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="h-full bg-card border border-border hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col p-8 text-left">
                <CardHeader className="p-0">
                  {service.icon}
                  <CardTitle className="font-headline text-xl pt-6">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
