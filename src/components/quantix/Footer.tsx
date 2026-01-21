import { Linkedin, Instagram } from "lucide-react";
import { QuantixLogo } from "./Logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FadeIn } from "./FadeIn";

const navLinks = {
  solucoes: [
    { name: "Tráfego Pago", href: "#services" },
    { name: "Análise de Dados", href: "#services" },
    { name: "SEO", href: "#services" },
    { name: "Estratégia Digital", href: "#services" },
  ],
  quantix: [
    { name: "Sobre Nós", href: "#differentiators" },
    { name: "Cases de Sucesso", href: "#authority" },
    { name: "Metodologia", href: "#differentiators" },
    { name: "Contato", href: "#cta" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Col 1: Brand */}
          <FadeIn delay={0} className="lg:col-span-2">
            <div className="flex flex-col">
              <QuantixLogo />
              <p className="mt-4 max-w-xs text-foreground/70 leading-relaxed">
                Transformando dados em escala através da engenharia de marketing.
              </p>
            </div>
          </FadeIn>

          {/* Col 2: Soluções */}
          <FadeIn delay={100}>
            <div className="flex flex-col">
              <h3 className="font-headline font-semibold text-white">Soluções</h3>
              <ul className="mt-4 space-y-3">
                {navLinks.solucoes.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-foreground/60 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Col 3: Quantix */}
          <FadeIn delay={200}>
            <div className="flex flex-col">
              <h3 className="font-headline font-semibold text-white">Quantix</h3>
              <ul className="mt-4 space-y-3">
                {navLinks.quantix.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-foreground/60 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Col 4: Social/Tech */}
          <FadeIn delay={300}>
            <div className="flex flex-col">
              <h3 className="font-headline font-semibold text-white">Social</h3>
              <div className="mt-4 flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-foreground/60 hover:text-primary hover:scale-110 transition-transform">
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs text-foreground/60">System Status: Active</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="mt-16 pt-12 border-t border-border/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-headline text-lg font-semibold text-white">Assine nossa Inteligência de Mercado</h3>
                <p className="text-sm text-foreground/60 mt-1">Receba análises e estratégias direto no seu e-mail.</p>
              </div>
              <form className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-black/20 border-border/50 focus:border-primary"
                  aria-label="Email para newsletter"
                />
                <Button type="submit" variant="outline" className="bg-transparent border-primary/50 text-primary-foreground hover:bg-primary/10">
                  Inscrever
                </Button>
              </form>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50 text-center md:text-left">
            &copy; {currentYear} Agência Quantix. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
