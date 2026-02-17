import { Target, MonitorSmartphone, BrainCircuit } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { MaskReveal } from "./MaskReveal";

const services = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Gestão de Tráfego Pago",
    description: "Atraímos o público certo e maximizamos seu ROI com campanhas de alta performance no Google, Meta e TikTok Ads.",
    tag: "Performance",
    span: "lg:col-span-2",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
    title: "Sites de Alta Conversão",
    description: "Criamos sites e landing pages rápidos, responsivos e otimizados para transformar visitantes em clientes.",
    tag: "Conversão",
    span: "lg:col-span-1",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Estratégia de Marketing",
    description: "Analisamos seu negócio e mercado para desenvolver um plano de marketing data-driven focado em crescimento.",
    tag: "Estratégia",
    span: "lg:col-span-1",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="lg:grid lg:grid-cols-4 lg:gap-16">
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <MaskReveal>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Nossas Soluções para o seu Crescimento</h2>
                <p className="mt-4 text-lg text-muted-foreground">Focamos em estratégias que geram resultados mensuráveis e impulsionam o seu negócio.</p>
              </MaskReveal>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FadeIn key={service.title} delay={index * 150} className={service.span}>
                  <div className="group/card relative h-full rounded-lg p-px bg-gradient-to-br from-primary/20 to-background transition-all duration-300 hover:from-primary/60">
                    <div className="relative h-full rounded-[7px] bg-[#1A1A1A] p-8 transition-all duration-300">
                      
                      <div className="absolute top-5 right-5">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary/80 animate-pulse-subtle">{service.tag}</span>
                      </div>

                      <div className="transition-transform duration-300 group-hover/card:-translate-y-1.5">
                        {service.icon}
                      </div>
                      
                      <h3 className="font-headline text-xl font-bold pt-6">{service.title}</h3>
                      <p className="text-muted-foreground pt-4 leading-relaxed">{service.description}</p>

                      <div className="absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover/card:opacity-100" 
                           style={{
                             background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.08), transparent 60%)',
                           }}>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
