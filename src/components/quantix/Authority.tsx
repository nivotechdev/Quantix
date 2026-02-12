import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "./FadeIn";
import { MaskReveal } from "./MaskReveal";
import { AnimatedNumber } from "./AnimatedNumber";

const clientLogos = PlaceHolderImages.filter(p => p.id.startsWith('client-logo-'));

const stats = [
  { value: 70, prefix: "+", suffix: "% em Geração de Leads", description: "Média de escala alcançada através da otimização de funis quânticos." },
  { value: 3.5, prefix: "", suffix: "x ROI Médio", description: "Retorno sobre investimento publicitário projetado para operações de alta performance." },
  { value: 98, prefix: "", suffix: "% de Satisfaction Score", description: "Índice de fidelidade baseado no sucesso contínuo dos nossos parceiros." },
];

const StatChart = () => (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full opacity-10"
    >
      <path
        d="M 20 80 C 60 10, 100 90, 140 40, 180 70, 180 70, 180 70"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="180" cy="70" r="3" fill="hsl(var(--primary))">
        <animate
          attributeName="r"
          values="3;5;3"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );

export function Authority() {
  return (
    <section id="analise-dados" className="py-20 md:py-28 bg-background has-growth-vectors scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <MaskReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Resultados que Falam por Si</h2>
            <p className="mt-4 text-lg text-muted-foreground">Nossa obsessão por dados se traduz em crescimento real para nossos parceiros.</p>
          </div>
        </MaskReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            {stats.map((stat, index) => {
              const isFloat = stat.value % 1 !== 0;
              return (
              <FadeIn key={stat.description} delay={index * 200}>
                <div className="relative h-full p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 overflow-hidden">
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse-subtle"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse-subtle" style={{ animationDelay: '500ms' }}></div>
                    <StatChart />
                    <div className="relative z-10 flex flex-col justify-center h-full">
                        <p className="text-4xl md:text-5xl font-bold font-headline text-white">
                            {stat.prefix}
                            <AnimatedNumber value={stat.value} isFloat={isFloat} />
                            <span className="text-primary">{stat.suffix}</span>
                        </p>
                        <p className="mt-4 text-sm text-muted-foreground h-10">{stat.description}</p>
                    </div>
                </div>
              </FadeIn>
              )
            })}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground/50">
            Benchmarks baseados em modelos estatísticos de performance interna.
        </p>
        
        <FadeIn delay={400}>
          <div className="mt-28">
            <div className="text-center mb-16">
                <h3 className="font-headline text-3xl md:text-4xl font-light text-white/90 tracking-wide">
                    Empresas que confiam e crescem com a <span className="font-bold text-white">Quantix</span>
                </h3>
                <p className="mt-2 text-base font-light text-muted-foreground">
                    Mais de 50 operações escaladas com segurança e previsibilidade.
                </p>
            </div>

            <div 
              className="relative w-full overflow-hidden"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}
            >
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-48 bg-primary/5 blur-3xl opacity-50"></div>
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={`${logo.id}-${i}`} className="flex-shrink-0 px-12 h-32 flex justify-center items-center">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      width={200}
                      height={80}
                      data-ai-hint={logo.imageHint}
                      className="object-contain h-20 w-40 transition-all duration-400 hover:scale-115 hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
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
