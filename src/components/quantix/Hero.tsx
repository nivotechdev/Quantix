import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const VIDEO_URL = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/AgenciaQuantix/Create_a_continuous_202601202152_gu3z8.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBZ2VuY2lhUXVhbnRpeC9DcmVhdGVfYV9jb250aW51b3VzXzIwMjYwMTIwMjE1Ml9ndTN6OC5tcDQiLCJpYXQiOjE3Njg5NTcxNTYsImV4cCI6MjA4NDMxNzE1Nn0.P8zCbK6JDKLUAhjLAJeoz2bmz9NXS3FSEOBf4HqTKXY";
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
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
