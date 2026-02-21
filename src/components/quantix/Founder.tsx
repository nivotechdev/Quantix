import Image from "next/image";
import { Award, TrendingUp, Gem } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { MaskReveal } from "./MaskReveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const founderImage = PlaceHolderImages.find(p => p.id === 'founder-photo');

const trustIcons = [
  { icon: <Award className="h-6 w-6 text-primary/80" />, text: "2+ anos de mercado" },
  { icon: <Gem className="h-6 w-6 text-primary/80" />, text: "Metodologia Exclusiva" },
];

export function Founder() {
  if (!founderImage) return null;

  return (
    <section id="seo-section" className="py-20 md:py-28 bg-card overflow-hidden relative scroll-mt-24">
      {/* Diagonal growth line */}
      <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent to-primary/20 -ml-1/4 transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          
          <FadeIn direction="down" className="lg:col-span-2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle opacity-50"></div>
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                width={400}
                height={600}
                data-ai-hint={founderImage.imageHint}
                className="relative object-cover object-top w-[300px] h-[450px] lg:w-[350px] lg:h-[525px] rounded-lg shadow-2xl shadow-black/50"
              />
               <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-card via-card/50 to-transparent"></div>
            </div>
          </FadeIn>

          <div className="lg:col-span-3">
             <MaskReveal>
                <p className="font-headline text-primary font-semibold tracking-wider">
                  A MENTE POR TRÁS DA ESTRATÉGIA
                </p>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-white">
                  Crescimento não é acaso. É método.
                </h2>
            </MaskReveal>

            <FadeIn delay={200}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Com foco em escala e performance, <strong>André Peruzzato</strong> lidera a Quantix com uma visão clara: transformar dados em decisões estratégicas e decisões em crescimento previsível.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
                <div className="mt-8">
                    <p style={{ fontFamily: "'''Dancing Script''', cursive" }} className="text-4xl text-primary -mb-2">André Peruzzato</p>
                    <p className="text-sm font-light text-muted-foreground tracking-widest mt-1">CEO & FOUNDER</p>
                </div>
            </FadeIn>

            <FadeIn delay={400}>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {trustIcons.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg border border-border/20">
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            <span className="text-sm text-foreground/80">{item.text}</span>
                        </div>
                    ))}
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
