import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "./FadeIn";
import { MaskReveal } from "./MaskReveal";
import { AnimatedNumber } from "./AnimatedNumber";

const clientLogos = PlaceHolderImages.filter(p => p.id.startsWith('client-logo-'));

const stats = [
  { value: 70, prefix: "+", suffix: "%", label: "Aumento em Geração de Leads" },
  { value: 2.5, prefix: "", suffix: "x", label: "Retorno Sobre Investimento" },
  { value: 98, prefix: "", suffix: "%", label: "de Satisfação dos Clientes" },
];


export function Authority() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <MaskReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Resultados que Falam por Si</h2>
            <p className="mt-4 text-lg text-muted-foreground">Nossa obsessão por dados se traduz em crescimento real para nossos parceiros.</p>
          </div>
        </MaskReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            {stats.map((stat) => {
              const isFloat = stat.value % 1 !== 0;
              return (
              <FadeIn key={stat.label} delay={200}>
                <div>
                  <p className="text-5xl md:text-6xl font-bold font-headline text-white">
                    {stat.prefix}
                    <AnimatedNumber value={stat.value} isFloat={isFloat} />
                    <span className="text-primary">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              </FadeIn>
              )
            })}
        </div>
        
        <FadeIn delay={400}>
          <div className="mt-24">
            <p className="text-center text-muted-foreground mb-8">Empresas que confiam e crescem com a Quantix</p>
            <div className="bg-card p-8 rounded-lg">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 items-center">
                  {clientLogos.map(logo => (
                    <div key={logo.id} className="flex justify-center">
                      <Image
                        src={logo.imageUrl}
                        alt={logo.description}
                        width={120}
                        height={48}
                        data-ai-hint={logo.imageHint}
                        className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
