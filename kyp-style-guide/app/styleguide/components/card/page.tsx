"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Bell, User, Zap, Shield, Rocket } from "lucide-react"

// === COMPONENTES AUXILIARES ===

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-xl font-heading font-bold text-foreground">{title}</h2>
                {description && <p className="text-muted-foreground text-sm mt-1">{description}</p>}
            </div>
            {children}
        </section>
    )
}

// === PÁGINA PRINCIPAL ===

export default function CardShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Card
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Container flexível para agrupar conteúdo relacionado.
                    Base para a construção de widgets, painéis e listas.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes do Card">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Exemplos Básicos */}
            <Section title="Estrutura Básica" description="Variações de composição do card">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Simples */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Simples</CardTitle>
                            <CardDescription>Apenas título e descrição.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                O conteúdo principal do card vai aqui. Pode ser texto, imagens ou outros componentes.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Com Footer */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Com Ação</CardTitle>
                            <CardDescription>Card com rodapé para botões.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Use o CardFooter para posicionar ações secundárias ou principais.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Confirmar</Button>
                        </CardFooter>
                    </Card>

                    {/* Título e Conteúdo apenas */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Sem Descrição</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Você pode omitir partes opcionais como a descrição ou o footer conforme necessário.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Cards com Cores/Estados */}
            <Section title="Variações de Estilo" description="Usando cores e bordas para destaque">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Destaque Primary */}
                    <Card className="border-primary/50 bg-primary/5">
                        <CardHeader>
                            <CardTitle className="text-primary flex items-center gap-2">
                                <Rocket className="w-5 h-5" />
                                Pro Plan
                            </CardTitle>
                            <CardDescription className="text-primary/80">Recursos avançados</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/80">
                                Acesso total a todas as ferramentas e suporte prioritário 24/7.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="default" className="w-full bg-primary hover:bg-primary/90">Upgrade</Button>
                        </CardFooter>
                    </Card>

                    {/* Destaque Accent */}
                    <Card className="border-accent/50 bg-accent/5">
                        <CardHeader>
                            <CardTitle className="text-accent flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Rápido
                            </CardTitle>
                            <CardDescription className="text-accent/80">Otimização de performance</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/80">
                                Seus processos executados com a máxima velocidade da nossa infraestrutura.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Alerta / Destructive */}
                    <Card className="border-destructive/50 bg-destructive/5">
                        <CardHeader>
                            <CardTitle className="text-destructive flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Segurança
                            </CardTitle>
                            <CardDescription className="text-destructive/80">Ação necessária</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/80">
                                Por favor, verifique suas configurações de segurança para continuar.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Stats Cards */}
            <Section title="Métricas" description="Cards compactos para dashboard">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                            <span className="text-primary font-bold">$</span>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">+20.1% em relação ao mês passado</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Assinaturas</CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">+180.1% em relação ao mês passado</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Vendas</CardTitle>
                            <Rocket className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">+19% em relação ao mês passado</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Ativos Agora</CardTitle>
                            <Zap className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">+201 desde a última hora</p>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Lista Interativa */}
            <Section title="Lista de Notificações" description="Usando Card como container de lista">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Notificações</CardTitle>
                        <CardDescription>Você tem 3 mensagens não lidas.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center space-x-4 rounded-md border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                            <Bell className="h-5 w-5 text-primary" />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">Novo candidato aplicado</p>
                                <p className="text-xs text-muted-foreground">Há 2 minutos</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <div className="flex items-center space-x-4 rounded-md border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                            <User className="h-5 w-5 text-accent" />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">Entrevista agendada</p>
                                <p className="text-xs text-muted-foreground">Há 1 hora</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 rounded-md border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                            <Check className="h-5 w-5 text-success" />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">Perfil atualizado</p>
                                <p className="text-xs text-muted-foreground">Há 5 horas</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant="outline">
                            <Check className="mr-2 h-4 w-4" /> Marcar todas como lidas
                        </Button>
                    </CardFooter>
                </Card>
            </Section>

            {/* Código de Exemplo */}
            <Section title="Exemplo de Código" description="Exemplo completo de um Card com Header, Content e Footer">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Criar Projeto</CardTitle>
    <CardDescription>Configure seu novo projeto em um clique.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Nome do projeto" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancelar</Button>
    <Button>Criar</Button>
  </CardFooter>
</Card>`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
