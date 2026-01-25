import { Header } from "@/components/quantix/Header";
import { Hero } from "@/components/quantix/Hero";
import { Services } from "@/components/quantix/Services";
import { Differentiators } from "@/components/quantix/Differentiators";
import { Authority } from "@/components/quantix/Authority";
import { Founder } from "@/components/quantix/Founder";
import { Cta } from "@/components/quantix/Cta";
import { Footer } from "@/components/quantix/Footer";
import { SectionDivider } from "@/components/quantix/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <Authority />
        <Founder />
        <SectionDivider />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
