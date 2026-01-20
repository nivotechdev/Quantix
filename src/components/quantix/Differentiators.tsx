import { ClipboardEdit, LineChart, Cpu, Users } from "lucide-react";
import { FadeIn } from "./FadeIn";

const differentiators = [
  {
    icon: <ClipboardEdit className="h-8 w-8 text-primary" />,
    title: "Estratégias Personalizadas",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Foco em ROI e Crescimento",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Uso de Tecnologia e Dados",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Atendimento Consultivo",
  },
];

export function Differentiators() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Mais que uma Agência, um Parceiro Estratégico</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <div className="flex items-center gap-6 p-6 bg-background rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex-shrink-0">{item.icon}</div>
                <h3 className="text-xl font-headline font-semibold">{item.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
