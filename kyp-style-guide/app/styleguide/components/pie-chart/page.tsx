"use client"

import { Pie, PieChart, Cell, Label } from "recharts"
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
import { Users, Briefcase, PieChartIcon, Target } from "lucide-react"
import * as React from "react"

// === DADOS DE EXEMPLO ===

const departmentData = [
    { name: "Engenharia", value: 45, fill: "var(--primary)" },
    { name: "Design", value: 28, fill: "var(--accent)" },
    { name: "Marketing", value: 32, fill: "var(--detail)" },
    { name: "Vendas", value: 38, fill: "var(--warning)" },
    { name: "RH", value: 15, fill: "var(--success)" },
]

const statusData = [
    { name: "Aprovados", value: 120, fill: "var(--success)" },
    { name: "Em Análise", value: 85, fill: "var(--warning)" },
    { name: "Reprovados", value: 45, fill: "var(--destructive)" },
]

const sourceData = [
    { name: "LinkedIn", value: 340, fill: "var(--primary)" },
    { name: "Indeed", value: 180, fill: "var(--accent)" },
    { name: "Indicação", value: 120, fill: "var(--detail)" },
    { name: "Site Próprio", value: 90, fill: "var(--info)" },
    { name: "Outros", value: 70, fill: "var(--muted)" },
]

const seniorityData = [
    { name: "Júnior", value: 35, fill: "var(--primary)" },
    { name: "Pleno", value: 45, fill: "var(--accent)" },
    { name: "Sênior", value: 20, fill: "var(--detail)" },
]

// === CONFIGURAÇÕES DE CHART ===

const departmentConfig = {
    value: { label: "Vagas" },
    Engenharia: { label: "Engenharia", color: "var(--primary)" },
    Design: { label: "Design", color: "var(--accent)" },
    Marketing: { label: "Marketing", color: "var(--detail)" },
    Vendas: { label: "Vendas", color: "var(--warning)" },
    RH: { label: "RH", color: "var(--success)" },
} satisfies ChartConfig

const statusConfig = {
    value: { label: "Candidatos" },
    Aprovados: { label: "Aprovados", color: "var(--success)" },
    "Em Análise": { label: "Em Análise", color: "var(--warning)" },
    Reprovados: { label: "Reprovados", color: "var(--destructive)" },
} satisfies ChartConfig

const sourceConfig = {
    value: { label: "Candidatos" },
    LinkedIn: { label: "LinkedIn", color: "var(--primary)" },
    Indeed: { label: "Indeed", color: "var(--accent)" },
    Indicação: { label: "Indicação", color: "var(--detail)" },
    "Site Próprio": { label: "Site Próprio", color: "var(--info)" },
    Outros: { label: "Outros", color: "var(--muted)" },
} satisfies ChartConfig

const seniorityConfig = {
    value: { label: "%" },
    Júnior: { label: "Júnior", color: "var(--primary)" },
    Pleno: { label: "Pleno", color: "var(--accent)" },
    Sênior: { label: "Sênior", color: "var(--detail)" },
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

export default function PieChartShowcasePage() {
    const totalCandidates = React.useMemo(() => {
        return statusData.reduce((acc, curr) => acc + curr.value, 0)
    }, [])



    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Pie Chart
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Gráficos de pizza para visualização de proporções e distribuições.
                    Suporta pie, donut, labels e interatividade.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes de gráfico">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { Pie, PieChart, Cell, Label } from "recharts"
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

            {/* Grid de exemplos */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Pie Chart Básico */}
                <Section title="Pie Chart Básico" description="Gráfico de pizza simples">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                                Vagas por Departamento
                            </CardTitle>
                            <CardDescription>Distribuição de vagas abertas</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={departmentConfig} className="h-[300px] w-full">
                                <PieChart>
                                    <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                                    <Pie
                                        data={departmentData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                    >
                                        {departmentData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                                </PieChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </Section>

                {/* Donut Chart */}
                <Section title="Donut Chart" description="Pizza com centro vazado e label">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-accent" />
                                Status dos Candidatos
                            </CardTitle>
                            <CardDescription>Visão geral do funil</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={statusConfig} className="h-[300px] w-full">
                                <PieChart>
                                    <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                                    <Pie
                                        data={statusData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        strokeWidth={2}
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                        <Label
                                            content={({ viewBox }) => {
                                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                    return (
                                                        <text
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            textAnchor="middle"
                                                            dominantBaseline="middle"
                                                        >
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                className="fill-foreground text-3xl font-bold"
                                                            >
                                                                {totalCandidates}
                                                            </tspan>
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) + 24}
                                                                className="fill-muted-foreground text-sm"
                                                            >
                                                                Total
                                                            </tspan>
                                                        </text>
                                                    )
                                                }
                                            }}
                                        />
                                    </Pie>
                                    <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                                </PieChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </Section>
            </div>

            {/* Pie com Muitas Categorias */}
            <Section title="Múltiplas Categorias" description="Pie chart com várias fatias">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-detail" />
                            Origem dos Candidatos
                        </CardTitle>
                        <CardDescription>De onde vêm as candidaturas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={sourceConfig} className="h-[350px] w-full">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                                <Pie
                                    data={sourceData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    labelLine={true}
                                >
                                    {sourceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Donut com Cores da Marca */}
            <Section title="Donut com Cores da Marca" description="Usando as 3 cores principais do design system">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <PieChartIcon className="h-5 w-5 text-primary" />
                            Distribuição por Senioridade
                        </CardTitle>
                        <CardDescription>Proporção de níveis no time</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={seniorityConfig} className="h-[350px] w-full">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                                <Pie
                                    data={seniorityData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={120}
                                    paddingAngle={3}
                                    cornerRadius={6}
                                >
                                    {seniorityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-2xl font-bold"
                                                        >
                                                            100%
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground text-sm"
                                                        >
                                                            do time
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </Pie>
                                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </Section>

            {/* Código de Exemplo */}
            <Section title="Exemplo de Código" description="Uso básico do Pie Chart">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`const data = [
  { name: "Categoria A", value: 400, fill: "var(--primary)" },
  { name: "Categoria B", value: 300, fill: "var(--accent)" },
  { name: "Categoria C", value: 200, fill: "var(--detail)" },
]

<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
    >
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={entry.fill} />
      ))}
    </Pie>
    <ChartLegend content={<ChartLegendContent nameKey="name" />} />
  </PieChart>
</ChartContainer>`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Variantes */}
            <Section title="Variantes Disponíveis" description="Tipos de Pie Charts suportados">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Pie (Pizza)</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Gráfico circular completo sem furo no centro.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Donut (Rosquinha)</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Use <code className="text-primary">innerRadius</code> para criar furo central.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Com Labels</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Use <code className="text-primary">label</code> para adicionar rótulos nas fatias.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-foreground">Com Label Central</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Use <code className="text-primary">&lt;Label&gt;</code> dentro do Pie para texto central.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Section>

            {/* Props */}
            <Section title="Props do Pie" description="Principais propriedades do componente Pie">
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
                                        <td className="py-2 px-3">Chave do valor numérico</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">nameKey</td>
                                        <td className="py-2 px-3 text-muted-foreground">string</td>
                                        <td className="py-2 px-3">Chave do nome da categoria</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">innerRadius</td>
                                        <td className="py-2 px-3 text-muted-foreground">number</td>
                                        <td className="py-2 px-3">Raio interno (para donut)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">outerRadius</td>
                                        <td className="py-2 px-3 text-muted-foreground">number</td>
                                        <td className="py-2 px-3">Raio externo do gráfico</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-3 font-mono text-primary">paddingAngle</td>
                                        <td className="py-2 px-3 text-muted-foreground">number</td>
                                        <td className="py-2 px-3">Espaço entre fatias</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 font-mono text-primary">cornerRadius</td>
                                        <td className="py-2 px-3 text-muted-foreground">number</td>
                                        <td className="py-2 px-3">Arredondamento das fatias</td>
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
