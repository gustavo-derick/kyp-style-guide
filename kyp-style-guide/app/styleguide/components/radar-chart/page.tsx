"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"
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
import { Target, Shield, Zap } from "lucide-react"

// === DADOS DE EXEMPLO ===

const skillsData = [
    { subject: "Frontend", A: 120, B: 110, fullMark: 150 },
    { subject: "Backend", A: 98, B: 130, fullMark: 150 },
    { subject: "DevOps", A: 86, B: 130, fullMark: 150 },
    { subject: "Design", A: 99, B: 100, fullMark: 150 },
    { subject: "Soft Skills", A: 85, B: 90, fullMark: 150 },
    { subject: "Gestão", A: 65, B: 85, fullMark: 150 },
]

const candidateEvaluationData = [
    { metric: "Técnica", value: 85 },
    { metric: "Comunicação", value: 90 },
    { metric: "Liderança", value: 75 },
    { metric: "Resolução", value: 80 },
    { metric: "Cultura", value: 95 },
]

const performanceComparisonData = [
    { metric: "Velocidade", junior: 60, senior: 90 },
    { metric: "Qualidade", junior: 70, senior: 95 },
    { metric: "Autonomia", junior: 40, senior: 98 },
    { metric: "Mentoria", junior: 20, senior: 85 },
    { metric: "Inovação", junior: 50, senior: 80 },
]

// === CONFIGURAÇÕES DE CHART ===

const skillsConfig = {
    A: {
        label: "Candidato A",
        color: "var(--primary)",
    },
    B: {
        label: "Candidato B",
        color: "var(--accent)",
    },
} satisfies ChartConfig

const evaluationConfig = {
    value: {
        label: "Pontuação",
        color: "var(--detail)",
    },
} satisfies ChartConfig

const comparisonConfig = {
    junior: {
        label: "Júnior",
        color: "var(--warning)",
    },
    senior: {
        label: "Sênior",
        color: "var(--success)",
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

export default function RadarChartShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            <style>{`
                .radar-grid-white .recharts-polar-grid-concentric-polygon,
                .radar-grid-white.recharts-polar-grid-concentric-polygon {
                    fill: #ffffff !important;
                    fill-opacity: 1 !important;
                }
            `}</style>
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Radar Chart
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Gráficos de radar (ou aranha) para comparar múltiplas variáveis quantitativas.
                    Ideal para avaliações de habilidades e comparações de performance.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes de gráfico">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"
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

            {/* Radar Chart Básico */}
            <Section title="Avaliação Individual" description="Gráfico de radar simples para análise de métricas">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-detail" />
                            Avaliação de Candidato
                        </CardTitle>
                        <CardDescription>Pontuação por competência</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={evaluationConfig} className="h-[350px] w-full mx-auto">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={candidateEvaluationData}>
                                <PolarGrid className="radar-grid-white stroke-border" />
                                <PolarAngleAxis dataKey="metric" className="text-xs fill-muted-foreground" />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Radar
                                    name="Pontuação"
                                    dataKey="value"
                                    stroke="var(--detail)"
                                    fill="var(--detail)"
                                    fillOpacity={0.5}
                                />
                            </RadarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Comparação de Candidatos */}
            <Section title="Comparação de Perfis" description="Comparando dois candidatos nas mesmas competências">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            Comparativo de Skills
                        </CardTitle>
                        <CardDescription>Frontend vs Backend skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={skillsConfig} className="h-[400px] w-full mx-auto">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                                <PolarGrid className="radar-grid-white stroke-border" />
                                <PolarAngleAxis dataKey="subject" className="text-xs fill-muted-foreground" />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Radar
                                    name="Candidato A"
                                    dataKey="A"
                                    stroke="var(--primary)"
                                    fill="var(--primary)"
                                    fillOpacity={0.4}
                                />
                                <Radar
                                    name="Candidato B"
                                    dataKey="B"
                                    stroke="var(--accent)"
                                    fill="var(--accent)"
                                    fillOpacity={0.4}
                                />
                            </RadarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Comparação Senioridade */}
            <Section title="Evolução de Carreira" description="Matriz de competências Júnior vs Sênior">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-warning" />
                            Matriz de Competências
                        </CardTitle>
                        <CardDescription>Expectativa por nível de senioridade</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={comparisonConfig} className="h-[400px] w-full mx-auto">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceComparisonData}>
                                <PolarGrid className="radar-grid-white stroke-border" />
                                <PolarAngleAxis dataKey="metric" className="text-xs fill-muted-foreground" />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Radar
                                    name="Júnior"
                                    dataKey="junior"
                                    stroke="var(--warning)"
                                    fill="var(--warning)"
                                    fillOpacity={0.3}
                                />
                                <Radar
                                    name="Sênior"
                                    dataKey="senior"
                                    stroke="var(--success)"
                                    fill="var(--success)"
                                    fillOpacity={0.3}
                                />
                            </RadarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Exemplo de Código */}
            <Section title="Exemplo de Código" description="Implementação básica do Radar Chart">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
} satisfies ChartConfig

<ChartContainer config={chartConfig} className="h-[350px] w-full">
  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <Radar
      name="Desktop"
      dataKey="desktop"
      stroke="var(--primary)"
      fill="var(--primary)"
      fillOpacity={0.6}
    />
  </RadarChart>
</ChartContainer>`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Configurações */}
            <Section title="Componentes do Radar" description="Elementos estruturais do gráfico">
                <Card>
                    <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">PolarGrid</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Grade de fundo do gráfico (teia).
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">PolarAngleAxis</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Eixo angular para os rótulos das categorias.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">PolarRadiusAxis</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Eixo radial para os valores (opcional).
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Radar</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    A forma preenchida que representa os dados.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
