import { ClipboardEdit, LineChart, Cpu, Users } from "lucide-react";
import { FadeIn } from "./FadeIn";

const differentiators = [
  {
    icon: <ClipboardEdit className="h-8 w-8 text-primary" />,
    title: "Estratégias Personalizadas",
    description: "Não usamos fórmulas prontas. Cada projeto recebe uma estratégia única, baseada em análise profunda do seu negócio.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Foco em ROI e Crescimento",
    description: "Nosso sucesso é medido pelo seu. Tomamos decisões orientadas a dados para garantir o máximo retorno sobre o investimento.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Uso de Tecnologia e Dados",
    description: "Utilizamos as ferramentas mais avançadas para análise, automação e otimização contínua de performance.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Atendimento Consultivo",
    description: "Somos uma extensão do seu time. Oferecemos um relacionamento próximo, transparente e focado em seus objetivos.",
  },
];

export function Differentiators() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Mais que uma Agência, um Parceiro Estratégico</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Nossa metodologia foi desenhada para ir além do óbvio e gerar crescimento sustentável.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-headline font-semibold">{item.title}</h3>
                  <p className="mt-2 text-foreground/80">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
