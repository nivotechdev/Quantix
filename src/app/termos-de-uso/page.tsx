import { Header } from "@/components/quantix/Header";
import { Footer } from "@/components/quantix/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ClientOnly } from "@/components/quantix/ClientOnly";

export default function TermosDeUsoPage() {
  return (
    <>
      <Header />
      <main className="py-32 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o início
          </Link>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">Termos de uso</h1>
            <p className="text-muted-foreground mt-2">Última atualização: <ClientOnly>{new Date().toLocaleDateString('pt-BR')}</ClientOnly></p>
          </div>

          <div className="space-y-4 text-lg text-foreground/80">
            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">1. Aceitação dos termos</h2>
            <p>Ao acessar e usar o site da Agência Quantix, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concorda com algum destes termos, está proibido de usar ou acessar este site.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">2. Uso de licença</h2>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Agência Quantix, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">3. Limitação de responsabilidade</h2>
            <p>Em nenhum caso a Agência Quantix ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site da Agência Quantix.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">4. Precisão dos materiais</h2>
            <p>Os materiais exibidos no site da Agência Quantix podem incluir erros técnicos, tipográficos ou fotográficos. A Agência Quantix não garante que qualquer material em seu site seja preciso, completo ou atual.</p>
            
            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">5. Links</h2>
            <p>A Agência Quantix não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte da Agência Quantix. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">6. Modificações</h2>
            <p>A Agência Quantix pode revisar estes termos de uso do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes termos de uso.</p>

            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary pt-8">7. Lei aplicável</h2>
            <p>Estes termos e condições são regidos e interpretados de acordo com as leis da República Federativa do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
