import { Linkedin, Instagram } from "lucide-react";
import { QuantixLogo } from "./Logo";
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
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Col 1: Brand & Social */}
          <FadeIn delay={0} className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              <QuantixLogo />
              <p className="mt-4 max-w-xs text-foreground/70 leading-relaxed">
                Transformando dados em escala através da engenharia de marketing.
              </p>
              <div className="mt-6 flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-foreground/60 hover:text-primary hover:scale-110 transition-transform">
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
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
        </div>

        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
            <p className="text-center md:text-left">
              &copy; {currentYear} Agência Quantix | CNPJ: 00.000.000/0001-00. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Preferências de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
