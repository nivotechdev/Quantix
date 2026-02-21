'use client';

import { Linkedin, Instagram, Facebook } from "lucide-react";
import { QuantixLogo } from "./Logo";
import { FadeIn } from "./FadeIn";
import Link from "next/link";

const navLinks = {
  solucoes: [
    { name: "Tráfego pago", href: "#services" },
    { name: "Análise de dados", href: "#analise-dados" },
    { name: "Estratégia digital", href: "#services" },
  ],
  quantix: [
    { name: "Sobre nós", href: "#differentiators" },
    { name: "Cases de sucesso", href: "#analise-dados" },
    { name: "Metodologia", href: "#differentiators" },
    { name: "Contato", href: "#cta" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/andr%C3%A9-luiz-peruzzato-b5284637b/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/agenciaquantix/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61579985267350", icon: Facebook },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCookiePrefs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookies_accepted');
      window.location.reload();
    }
  };

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Col 1: Brand & Social */}
          <FadeIn delay={0}>
            <div className="flex flex-col items-start">
              <QuantixLogo />
              <p className="mt-4 max-w-xs text-foreground/70 leading-relaxed">
                Transformando dados em escala através de soluções de marketing.
              </p>
              <div className="mt-6 flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary hover:scale-110 transition-transform">
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Col 2: Soluções */}
          <FadeIn delay={100}>
            <div className="flex flex-col">
              <h3 className="font-headline font-semibold tracking-wider text-white uppercase">Soluções</h3>
              <ul className="mt-4 space-y-3">
                {navLinks.solucoes.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-foreground/60 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Col 3: Quantix */}
          <FadeIn delay={200}>
            <div className="flex flex-col">
              <h3 className="font-headline font-semibold tracking-wider text-white uppercase">Quantix</h3>
              <ul className="mt-4 space-y-3">
                {navLinks.quantix.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-foreground/60 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
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
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <Link href="/politica-privacidade" className="hover:text-primary transition-colors">Política de privacidade</Link>
                <Link href="/termos-de-uso" className="hover:text-primary transition-colors">Termos de uso</Link>
                <button onClick={handleCookiePrefs} className="bg-transparent border-none p-0 cursor-pointer text-xs text-foreground/50 hover:text-primary transition-colors">Preferências de cookies</button>
              </div>
              <p>
                Desenvolvido por <a href="https://nivotech.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground/70 hover:text-primary transition-colors">NivoTech</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
