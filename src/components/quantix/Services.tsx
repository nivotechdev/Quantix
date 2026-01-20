import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, MonitorSmartphone, BrainCircuit, Bot } from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Gestão de Tráfego Pago",
  },
  {
    icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
    title: "Sites de Alta Conversão",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Estratégia de Marketing",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Funis e Automação",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nossas Soluções para o seu Crescimento</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="h-full bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center p-6 text-center">
                <CardHeader className="p-0 items-center">
                  {service.icon}
                  <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
