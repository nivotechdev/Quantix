import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const clientLogos = PlaceHolderImages.filter(p => p.id.startsWith('client-logo-'));

export function Authority() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Marketing Pensado para Vender. Estratégia Antes de Anúncios.</h2>
          </div>
          <div>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
