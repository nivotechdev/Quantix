import { Header } from "@/components/quantix/Header";
import { Footer } from "@/components/quantix/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ClientOnly } from "@/components/quantix/ClientOnly";

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <main className="py-32 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Início
          </Link>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">Política de Privacidade</h1>
            <p className="text-muted-foreground mt-2">Última atualização: <ClientOnly>{new Date().toLocaleDateString('pt-BR')}</ClientOnly></p>
          </div>

          <div className="space-y-4 text-lg text-foreground/80">
            <p>A sua privacidade é importante para nós. É política da Agência Quantix respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Quantix, e outros sites que possuímos e operamos.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">1. Coleta de Dados</h2>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
            <p>Coletamos os seguintes tipos de informações:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Informações de Contato:</strong> Nome, e-mail e telefone fornecidos através de nossos formulários de contato para que possamos retornar sua solicitação.</li>
              <li><strong>Dados de Navegação:</strong> Informações sobre como você usa nosso site, como endereço IP, localização geográfica, tipo de navegador, duração da visita e páginas visitadas, coletadas através de cookies.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">2. Uso dos Dados</h2>
             <p>Usamos as informações que coletamos para várias finalidades, incluindo:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Operar e manter nosso site;</li>
                <li>Melhorar, personalizar e expandir nosso site;</li>
                <li>Entender e analisar como você usa nosso site;</li>
                <li>Comunicar com você para fins de marketing e atendimento;</li>
                <li>Prevenir fraudes.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">3. Direitos do Titular (LGPD)</h2>
            <p>Você, como titular dos dados, possui direitos garantidos pela Lei Geral de Proteção de Dados (LGPD). A Agência Quantix assegura a você o direito de acesso, correção, eliminação, e portabilidade dos seus dados. Para exercer seus direitos, entre em contato conosco através do e-mail: contato@agenciaquantix.com.br.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">4. Cookies</h2>
            <p>O nosso site usa "cookies" para melhorar a experiência do usuário. Você pode configurar seu navegador para recusar cookies, mas algumas funcionalidades do site podem não funcionar corretamente.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">5. Contato</h2>
            <p>Se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato conosco.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
