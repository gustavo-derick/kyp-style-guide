"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell, LabelList } from "recharts"
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
import { Users, Briefcase, TrendingUp, BarChart3 } from "lucide-react"

// === DADOS DE EXEMPLO ===

const vacanciesData = [
    { department: "Engenharia", vagas: 45 },
    { department: "Design", vagas: 28 },
    { department: "Marketing", vagas: 32 },
    { department: "Vendas", vagas: 38 },
    { department: "RH", vagas: 15 },
    { department: "Financeiro", vagas: 12 },
]

const hiringData = [
    { month: "Jan", candidatos: 186, contratados: 45 },
    { month: "Fev", candidatos: 305, contratados: 72 },
    { month: "Mar", candidatos: 237, contratados: 58 },
    { month: "Abr", candidatos: 273, contratados: 68 },
    { month: "Mai", candidatos: 409, contratados: 95 },
    { month: "Jun", candidatos: 514, contratados: 120 },
]

const stagesData = [
    { stage: "Candidatura", count: 500, fill: "var(--primary)" },
    { stage: "Triagem", count: 350, fill: "var(--accent)" },
    { stage: "Entrevista HR", count: 180, fill: "var(--detail)" },
    { stage: "Entrevista Técnica", count: 90, fill: "var(--warning)" },
    { stage: "Proposta", count: 45, fill: "var(--success)" },
    { stage: "Contratado", count: 30, fill: "var(--info)" },
]

const performanceData = [
    { name: "Ana", score: 92 },
    { name: "Bruno", score: 85 },
    { name: "Carla", score: 78 },
    { name: "Diego", score: 88 },
    { name: "Elena", score: 95 },
]

const stackedData = [
    { month: "Jan", junior: 12, pleno: 20, senior: 8 },
    { month: "Fev", junior: 18, pleno: 25, senior: 12 },
    { month: "Mar", junior: 15, pleno: 22, senior: 10 },
    { month: "Abr", junior: 20, pleno: 28, senior: 15 },
    { month: "Mai", junior: 25, pleno: 32, senior: 18 },
    { month: "Jun", junior: 30, pleno: 38, senior: 22 },
]

// === CONFIGURAÇÕES DE CHART ===

const vacanciesConfig = {
    vagas: {
        label: "Vagas Abertas",
        color: "var(--primary)",
    },
} satisfies ChartConfig

const hiringConfig = {
    candidatos: {
        label: "Candidatos",
        color: "var(--primary)",
    },
    contratados: {
        label: "Contratados",
        color: "var(--accent)",
    },
} satisfies ChartConfig

const stagesConfig = {
    count: {
        label: "Candidatos",
    },
    Candidatura: { label: "Candidatura", color: "var(--primary)" },
    Triagem: { label: "Triagem", color: "var(--accent)" },
    "Entrevista HR": { label: "Entrevista HR", color: "var(--detail)" },
    "Entrevista Técnica": { label: "Entrevista Técnica", color: "var(--warning)" },
    Proposta: { label: "Proposta", color: "var(--success)" },
    Contratado: { label: "Contratado", color: "var(--info)" },
} satisfies ChartConfig

const performanceConfig = {
    score: {
        label: "Score",
        color: "var(--accent)",
    },
} satisfies ChartConfig

const stackedConfig = {
    junior: {
        label: "Júnior",
        color: "var(--primary)",
    },
    pleno: {
        label: "Pleno",
        color: "var(--accent)",
    },
    senior: {
        label: "Sênior",
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

export default function BarChartShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Bar Chart
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Gráficos de barra para comparação de valores categóricos.
                    Suporta barras verticais, horizontais, agrupadas e empilhadas.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes de gráfico">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts"
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

            {/* Bar Chart Vertical Básico */}
            <Section title="Bar Chart Vertical" description="Gráfico de barras verticais simples">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            Vagas por Departamento
                        </CardTitle>
                        <CardDescription>Distribuição de vagas abertas por área</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={vacanciesConfig} className="h-[300px] w-full">
                            <BarChart data={vacanciesData}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                                <XAxis
                                    dataKey="department"
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
                                <Bar
                                    dataKey="vagas"
                                    fill="var(--primary)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Bar Chart Horizontal */}
            <Section title="Bar Chart Horizontal" description="Barras horizontais com labels">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-accent" />
                            Ranking de Desempenho
                        </CardTitle>
                        <CardDescription>Top 5 candidatos por pontuação</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={performanceConfig} className="h-[250px] w-full">
                            <BarChart data={performanceData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                                <XAxis type="number" domain={[0, 100]} tickLine={false} axisLine={false} />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    tickLine={false}
                                    axisLine={false}
                                    width={60}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar
                                    dataKey="score"
                                    fill="var(--accent)"
                                    radius={[0, 4, 4, 0]}
                                >
                                    <LabelList
                                        dataKey="score"
                                        position="right"
                                        className="fill-foreground text-sm font-medium"
                                        formatter={(value: number) => `${value}%`}
                                    />
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Bar Chart Agrupado */}
            <Section title="Barras Agrupadas" description="Comparação de múltiplas métricas lado a lado">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Candidatos vs Contratados
                        </CardTitle>
                        <CardDescription>Comparação mensal do funil de recrutamento</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={hiringConfig} className="h-[350px] w-full">
                            <BarChart data={hiringData}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
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
                                <Bar
                                    dataKey="candidatos"
                                    fill="var(--primary)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                    dataKey="contratados"
                                    fill="var(--accent)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Bar Chart Empilhado */}
            <Section title="Barras Empilhadas" description="Composição de valores por categoria">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-detail" />
                            Contratações por Nível
                        </CardTitle>
                        <CardDescription>Distribuição mensal de contratações por senioridade</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={stackedConfig} className="h-[350px] w-full">
                            <BarChart data={stackedData}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
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
                                <Bar
                                    dataKey="junior"
                                    stackId="a"
                                    fill="var(--primary)"
                                    radius={[0, 0, 0, 0]}
                                />
                                <Bar
                                    dataKey="pleno"
                                    stackId="a"
                                    fill="var(--accent)"
                                    radius={[0, 0, 0, 0]}
                                />
                                <Bar
                                    dataKey="senior"
                                    stackId="a"
                                    fill="var(--detail)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Funil de Recrutamento */}
            <Section title="Barras com Cores Dinâmicas" description="Cores individuais por categoria">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-success" />
                            Funil de Recrutamento
                        </CardTitle>
                        <CardDescription>Conversão em cada etapa do processo</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={stagesConfig} className="h-[300px] w-full">
                            <BarChart data={stagesData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                                <XAxis type="number" tickLine={false} axisLine={false} />
                                <YAxis
                                    dataKey="stage"
                                    type="category"
                                    tickLine={false}
                                    axisLine={false}
                                    width={120}
                                />
                                <ChartTooltip content={<ChartTooltipContent nameKey="stage" />} />
                                <Bar
                                    dataKey="count"
                                    radius={[0, 4, 4, 0]}
                                >
                                    {stagesData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Código de Exemplo */}
            <Section title="Exemplo de Código" description="Uso básico do Bar Chart">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`const chartConfig = {
  value: {
    label: "Valor",
    color: "var(--primary)",
  },
} satisfies ChartConfig

<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis dataKey="name" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar 
      dataKey="value" 
      fill="var(--primary)" 
      radius={[4, 4, 0, 0]}
    />
  </BarChart>
</ChartContainer>`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Variantes */}
            <Section title="Variantes Disponíveis" description="Tipos de Bar Charts suportados">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Vertical</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Barras verticais padrão para comparar categorias.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Horizontal</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Use <code className="text-primary">layout=&quot;vertical&quot;</code> para barras horizontais.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Agrupado</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Múltiplos <code className="text-primary">&lt;Bar&gt;</code> para comparar séries.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Empilhado</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Use <code className="text-primary">stackId</code> para empilhar barras.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Section>

            {/* Props */}
            <Section title="Props do Bar" description="Principais propriedades do componente Bar">
                <Card>
                    <CardContent className="pt-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 px-3 font-medium">Prop</th>
                                        <th className="text-left py-2 px-3 font-medium">Tipo</th>
                                        <th className="text-left py-2 px-3 font-medium">Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">dataKey</td>
                                        <td className="py-2 px-3 text-muted-foreground">string</td>
                                        <td className="py-2 px-3">Chave do valor nos dados</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">fill</td>
                                        <td className="py-2 px-3 text-muted-foreground">string</td>
                                        <td className="py-2 px-3">Cor de preenchimento</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">radius</td>
                                        <td className="py-2 px-3 text-muted-foreground">[number, number, number, number]</td>
                                        <td className="py-2 px-3">Raio dos cantos [tl, tr, br, bl]</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">stackId</td>
                                        <td className="py-2 px-3 text-muted-foreground">string</td>
                                        <td className="py-2 px-3">ID para empilhar barras</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 font-mono text-primary">barSize</td>
                                        <td className="py-2 px-3 text-muted-foreground">number</td>
                                        <td className="py-2 px-3">Largura fixa das barras</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
