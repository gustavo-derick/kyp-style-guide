import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px]" />

      <main className="text-center space-y-8 z-10 px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-gradient-brand shadow-glow animate-in fade-in zoom-in duration-700 mb-2">
            <span className="text-4xl font-heading font-bold text-white">K</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground animate-in slide-in-from-bottom-4 duration-700 delay-150 leading-tight">
            KYPATS <span className="text-gradient-brand">Design System</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-muted-foreground animate-in slide-in-from-bottom-4 duration-700 delay-300">
            A base visual completa para o ecossistema KYPATS.
            Tokens de design, componentes acessíveis e identidade visual unificada.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-4 duration-700 delay-500 pt-4">
          <Link href="/styleguide" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300 group bg-primary hover:bg-primary/90">
              <Palette className="mr-2 w-5 h-5" />
              Acessar Styleguide
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/styleguide/components/card" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg hover:bg-muted transition-all duration-300 border-border/50">
              <Layers className="mr-2 w-5 h-5" />
              Explorar Componentes
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm text-left">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Design Tokens</h3>
            <p className="text-sm text-muted-foreground">Sistema completo de cores, tipografia e espaçamento.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-detail/50 transition-colors shadow-sm text-left">
            <div className="w-10 h-10 rounded-full bg-detail/10 flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-detail" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Componentes</h3>
            <p className="text-sm text-muted-foreground">Biblioteca de componentes React reutilizáveis e acessíveis.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-colors shadow-sm text-left">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Identidade Visual</h3>
            <p className="text-sm text-muted-foreground">Diretrizes de marca para consistência em toda a plataforma.</p>
          </div>
        </div>
      </main>

      <footer className="py-8 text-sm text-muted-foreground/60 w-full text-center border-t border-border/30 mt-auto bg-background/50 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-2">
          <p>© 2026 KYPATS Design System</p>
          <p className="text-xs">Versão 1.0.0 • Desenvolvido com Antigravity</p>
        </div>
      </footer>
    </div>
  );
}
