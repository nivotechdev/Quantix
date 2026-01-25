import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { ScrollProgressBar } from '@/components/quantix/ScrollProgressBar';

export const metadata: Metadata = {
  title: 'Agência Quantix | Marketing Estratégico para Crescimento',
  description: 'Ajudamos empresas a crescer usando marketing estratégico e tecnologia. Fale com um especialista e impulsione seu negócio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=PT+Sans:wght@400;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <ScrollProgressBar />
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
