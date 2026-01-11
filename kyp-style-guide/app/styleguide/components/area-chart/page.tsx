"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { TrendingUp, TrendingDown, Users, Briefcase } from "lucide-react"

// === DADOS DE EXEMPLO ===

const candidatesData = [
    { month: "Jan", candidatos: 186, contratados: 80 },
    { month: "Fev", candidatos: 305, contratados: 120 },
    { month: "Mar", candidatos: 237, contratados: 95 },
    { month: "Abr", candidatos: 273, contratados: 140 },
    { month: "Mai", candidatos: 409, contratados: 180 },
    { month: "Jun", candidatos: 514, contratados: 220 },
]

const revenueData = [
    { month: "Jan", receita: 4000, despesas: 2400 },
    { month: "Fev", receita: 3000, despesas: 1398 },
    { month: "Mar", receita: 2000, despesas: 9800 },
    { month: "Abr", receita: 2780, despesas: 3908 },
    { month: "Mai", receita: 1890, despesas: 4800 },
    { month: "Jun", receita: 2390, despesas: 3800 },
    { month: "Jul", receita: 3490, despesas: 4300 },
]

const performanceData = [
    { week: "Sem 1", pontuacao: 65 },
    { week: "Sem 2", pontuacao: 72 },
    { week: "Sem 3", pontuacao: 68 },
    { week: "Sem 4", pontuacao: 78 },
    { week: "Sem 5", pontuacao: 82 },
    { week: "Sem 6", pontuacao: 88 },
    { week: "Sem 7", pontuacao: 85 },
    { week: "Sem 8", pontuacao: 92 },
]

const stackedData = [
    { month: "Jan", frontend: 40, backend: 30, design: 20 },
    { month: "Fev", frontend: 52, backend: 42, design: 28 },
    { month: "Mar", frontend: 48, backend: 38, design: 32 },
    { month: "Abr", frontend: 65, backend: 50, design: 38 },
    { month: "Mai", frontend: 78, backend: 55, design: 45 },
    { month: "Jun", frontend: 85, backend: 62, design: 52 },
]

// === CONFIGURAÇÕES DE CHART ===

const candidatesConfig = {
    candidatos: {
        label: "Candidatos",
        color: "var(--primary)",
    },
    contratados: {
        label: "Contratados",
        color: "var(--accent)",
    },
} satisfies ChartConfig

const revenueConfig = {
    receita: {
        label: "Receita",
        color: "var(--success)",
    },
    despesas: {
        label: "Despesas",
        color: "var(--destructive)",
    },
} satisfies ChartConfig

const performanceConfig = {
    pontuacao: {
        label: "Pontuação",
        color: "var(--detail)",
    },
} satisfies ChartConfig

const stackedConfig = {
    frontend: {
        label: "Frontend",
        color: "var(--primary)",
    },
    backend: {
        label: "Backend",
        color: "var(--accent)",
    },
    design: {
        label: "Design",
        color: "var(--detail)",
    },
} satisfies ChartConfig

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

export default function AreaChartShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Area Chart
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Gráficos de área para visualização de dados ao longo do tempo com preenchimento gradiente.
                    Baseado no Recharts e integrado com o sistema de design.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes de gráfico">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Area Chart Básico */}
            <Section title="Area Chart Básico" description="Gráfico de área simples com uma série de dados">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-success" />
                            Desempenho Semanal
                        </CardTitle>
                        <CardDescription>Pontuação de desempenho nas últimas 8 semanas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={performanceConfig} className="h-[300px] w-full">
                            <AreaChart data={performanceData}>
                                <defs>
                                    <linearGradient id="fillPontuacao" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--detail)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--detail)" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                                <XAxis
                                    dataKey="week"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    className="text-xs fill-muted-foreground"
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    className="text-xs fill-muted-foreground"
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Area
                                    type="monotone"
                                    dataKey="pontuacao"
                                    stroke="var(--detail)"
                                    fill="url(#fillPontuacao)"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Area Chart com Duas Séries */}
            <Section title="Área com Múltiplas Séries" description="Comparação de duas métricas ao longo do tempo">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Candidatos vs Contratados
                        </CardTitle>
                        <CardDescription>Comparação mensal do funil de recrutamento</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={candidatesConfig} className="h-[350px] w-full">
                            <AreaChart data={candidatesData}>
                                <defs>
                                    <linearGradient id="fillCandidatos" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.1} />
                                    </linearGradient>
                                    <linearGradient id="fillContratados" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Area
                                    type="monotone"
                                    dataKey="candidatos"
                                    stroke="var(--primary)"
                                    fill="url(#fillCandidatos)"
                                    strokeWidth={2}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="contratados"
                                    stroke="var(--accent)"
                                    fill="url(#fillContratados)"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Area Chart Stacked */}
            <Section title="Área Empilhada" description="Múltiplas séries empilhadas para mostrar composição">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-accent" />
                            Vagas por Departamento
                        </CardTitle>
                        <CardDescription>Distribuição de vagas abertas por área</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={stackedConfig} className="h-[350px] w-full">
                            <AreaChart data={stackedData}>
                                <defs>
                                    <linearGradient id="fillFrontend" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.2} />
                                    </linearGradient>
                                    <linearGradient id="fillBackend" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.2} />
                                    </linearGradient>
                                    <linearGradient id="fillDesign" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--detail)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--detail)" stopOpacity={0.2} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Area
                                    type="monotone"
                                    dataKey="frontend"
                                    stackId="1"
                                    stroke="var(--primary)"
                                    fill="url(#fillFrontend)"
                                    strokeWidth={2}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="backend"
                                    stackId="1"
                                    stroke="var(--accent)"
                                    fill="url(#fillBackend)"
                                    strokeWidth={2}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="design"
                                    stackId="1"
                                    stroke="var(--detail)"
                                    fill="url(#fillDesign)"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Receita vs Despesas */}
            <Section title="Comparação Financeira" description="Gráfico com cores semânticas (verde/vermelho)">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingDown className="h-5 w-5 text-destructive" />
                            Receita vs Despesas
                        </CardTitle>
                        <CardDescription>Análise financeira mensal</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={revenueConfig} className="h-[350px] w-full">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="fillReceita" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--success)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--success)" stopOpacity={0.1} />
                                    </linearGradient>
                                    <linearGradient id="fillDespesas" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--destructive)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--destructive)" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Area
                                    type="monotone"
                                    dataKey="receita"
                                    stroke="var(--success)"
                                    fill="url(#fillReceita)"
                                    strokeWidth={2}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="despesas"
                                    stroke="var(--destructive)"
                                    fill="url(#fillDespesas)"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Configuração de Chart */}
            <Section title="ChartConfig" description="Como definir a configuração de cores e labels">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`const chartConfig = {
  candidatos: {
    label: "Candidatos",
    color: "var(--primary)", // Usa variáveis CSS do design system
  },
  contratados: {
    label: "Contratados", 
    color: "var(--accent)",
  },
} satisfies ChartConfig`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Código de Exemplo */}
            <Section title="Exemplo de Código" description="Uso básico do Area Chart">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <AreaChart data={data}>
    <defs>
      <linearGradient id="fillData" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area
      type="monotone"
      dataKey="value"
      stroke="var(--primary)"
      fill="url(#fillData)"
      strokeWidth={2}
    />
  </AreaChart>
</ChartContainer>`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Props Reference */}
            <Section title="Componentes do Chart" description="Componentes disponíveis para charts">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <div className="grid gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-mono text-primary font-medium">ChartContainer</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Container responsivo que aplica as configurações de tema e cores.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-mono text-primary font-medium">ChartTooltip + ChartTooltipContent</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Tooltip estilizado que mostra os valores ao passar o mouse.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-mono text-primary font-medium">ChartLegend + ChartLegendContent</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Legenda estilizada que identifica cada série de dados.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-mono text-primary font-medium">ChartConfig</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Tipo para definir labels e cores usando variáveis CSS do design system.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Section>

            {/* Acessibilidade */}
            <Section title="Acessibilidade" description="Notas sobre acessibilidade dos gráficos">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Use cores com contraste suficiente (definidas no design system)</li>
                            <li>Adicione <code className="text-primary">aria-label</code> descritivo ao container</li>
                            <li>Forneça uma tabela alternativa com os mesmos dados para leitores de tela</li>
                            <li>Use legendas claras para identificar cada série de dados</li>
                            <li>Considere oferecer descrição textual das tendências principais</li>
                        </ul>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
