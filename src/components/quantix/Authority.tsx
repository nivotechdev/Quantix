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
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
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
          <div className="mt-20">
            <div className="flex flex-col items-center justify-center text-center gap-2 mb-12">
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex h-5 items-center gap-0.5">
                        <div className="w-0.5 h-full rounded-full bg-primary/50" />
                        <div className="w-0.5 h-2/3 rounded-full bg-primary/50" />
                        <div className="w-0.5 h-full rounded-full bg-primary/50" />
                        <div className="w-0.5 h-1/3 rounded-full bg-primary/50" />
                        <div className="w-0.5 h-full rounded-full bg-primary/50" />
                    </div>
                    <p className="text-muted-foreground tracking-wider">Empresas que confiam e crescem com a Quantix</p>
                </div>
                <p className="text-sm text-muted-foreground/60 -mt-2">
                    Mais de 50 operações escaladas com segurança e previsibilidade.
                </p>
            </div>

            <div 
              className="relative w-full overflow-hidden"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}
            >
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={`${logo.id}-${i}`} className="flex-shrink-0 px-12 h-20 flex justify-center items-center">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      width={150}
                      height={40}
                      data-ai-hint={logo.imageHint}
                      className="object-contain max-h-10 w-auto grayscale brightness-150 transition-all duration-400 hover:grayscale-0 hover:brightness-100 hover:scale-110 hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
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
