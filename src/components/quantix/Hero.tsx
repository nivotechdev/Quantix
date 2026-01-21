import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket } from "lucide-react";

const VIDEO_URL = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/AgenciaQuantix/Vdeo_cinematogrfico_realista_202601212020_y.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBZ2VuY2lhUXVhbnRpeC9WZGVvX2NpbmVtYXRvZ3JmaWNvX3JlYWxpc3RhXzIwMjYwMTIxMjAyMF95Lm1wNCIsImlhdCI6MTc2OTAzNzY2MSwiZXhwIjoyMDg0Mzk3NjYxfQ.vZSb0MGZpFrKwSmz6-rgJ0yVKAJZ5HGIGqIlVlgXtrY";
const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Quantix.";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Transformamos Cliques em Clientes e <span className="text-primary">Dados em Crescimento Real.</span>
          </h1>
          <div className="mt-10">
            <Button size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale com um Especialista
                <Rocket className="ml-2 h-5 w-5 button-icon-rocket" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
