"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, MoreHorizontal, ArrowUpDown, ChevronDown } from "lucide-react"

// Dados de exemplo para as tabelas
const invoices = [
    { invoice: "INV001", status: "Pago", method: "Cartão de Crédito", amount: "R$ 250,00" },
    { invoice: "INV002", status: "Pendente", method: "PayPal", amount: "R$ 150,00" },
    { invoice: "INV003", status: "Não Pago", method: "Transferência", amount: "R$ 350,00" },
    { invoice: "INV004", status: "Pago", method: "Cartão de Crédito", amount: "R$ 450,00" },
    { invoice: "INV005", status: "Pago", method: "PayPal", amount: "R$ 550,00" },
    { invoice: "INV006", status: "Pendente", method: "Transferência", amount: "R$ 200,00" },
    { invoice: "INV007", status: "Não Pago", method: "Cartão de Crédito", amount: "R$ 300,00" },
]

const candidates = [
    { id: 1, name: "Ana Silva", email: "ana@email.com", role: "Frontend Developer", status: "Em Análise", score: 85 },
    { id: 2, name: "Bruno Costa", email: "bruno@email.com", role: "Backend Developer", status: "Aprovado", score: 92 },
    { id: 3, name: "Carla Lima", email: "carla@email.com", role: "UX Designer", status: "Entrevista", score: 78 },
    { id: 4, name: "Diego Santos", email: "diego@email.com", role: "DevOps", status: "Reprovado", score: 45 },
    { id: 5, name: "Elena Ferreira", email: "elena@email.com", role: "Product Manager", status: "Aprovado", score: 88 },
]

function getStatusBadge(status: string) {
    switch (status) {
        case "Pago":
        case "Aprovado":
            return <Badge className="bg-success text-success-foreground">{status}</Badge>
        case "Pendente":
        case "Em Análise":
        case "Entrevista":
            return <Badge className="bg-warning text-warning-foreground">{status}</Badge>
        case "Não Pago":
        case "Reprovado":
            return <Badge variant="destructive">{status}</Badge>
        default:
            return <Badge variant="secondary">{status}</Badge>
    }
}

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

export default function TableShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Table
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Componente de tabela para exibir dados tabulares de forma organizada e responsiva.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar o componente Table">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Tabela Básica */}
            <Section title="Tabela Básica" description="Exemplo básico de tabela com caption e footer">
                <Card>
                    <CardContent className="pt-6">
                        <Table>
                            <TableCaption>Lista de faturas recentes.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Fatura</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Método</TableHead>
                                    <TableHead className="text-right">Valor</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                                        <TableCell>{invoice.method}</TableCell>
                                        <TableCell className="text-right">{invoice.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right font-bold">R$ 2.250,00</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </CardContent>
                </Card>
            </Section>

            {/* Tabela com Ações */}
            <Section title="Tabela com Ações" description="Tabela com botões de ação em cada linha">
                <Card>
                    <CardHeader>
                        <CardTitle>Candidatos</CardTitle>
                        <CardDescription>Gerencie os candidatos do processo seletivo.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Cargo</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-center">Score</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {candidates.map((candidate) => (
                                    <TableRow key={candidate.id}>
                                        <TableCell className="font-medium">{candidate.name}</TableCell>
                                        <TableCell className="text-muted-foreground">{candidate.email}</TableCell>
                                        <TableCell>{candidate.role}</TableCell>
                                        <TableCell>{getStatusBadge(candidate.status)}</TableCell>
                                        <TableCell className="text-center">
                                            <span className={`font-mono font-bold ${candidate.score >= 80 ? 'text-success' :
                                                    candidate.score >= 60 ? 'text-warning' :
                                                        'text-destructive'
                                                }`}>
                                                {candidate.score}%
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="sm">
                                                    <Check className="h-4 w-4 text-success" />
                                                </Button>
                                                <Button variant="ghost" size="sm">
                                                    <X className="h-4 w-4 text-destructive" />
                                                </Button>
                                                <Button variant="ghost" size="sm">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Section>

            {/* Tabela Striped */}
            <Section title="Tabela com Linhas Alternadas" description="Usando classes customizadas para linhas zebradas">
                <Card>
                    <CardContent className="pt-6">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-primary/10">
                                    <TableHead>Fatura</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Método</TableHead>
                                    <TableHead className="text-right">Valor</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.slice(0, 5).map((invoice, index) => (
                                    <TableRow
                                        key={invoice.invoice}
                                        className={index % 2 === 0 ? 'bg-muted/30' : ''}
                                    >
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                                        <TableCell>{invoice.method}</TableCell>
                                        <TableCell className="text-right">{invoice.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Section>

            {/* Tabela Compacta */}
            <Section title="Tabela Compacta" description="Versão com menos padding para dados densos">
                <Card>
                    <CardContent className="pt-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="h-8 px-2 text-xs">Fatura</TableHead>
                                    <TableHead className="h-8 px-2 text-xs">Status</TableHead>
                                    <TableHead className="h-8 px-2 text-xs">Método</TableHead>
                                    <TableHead className="h-8 px-2 text-xs text-right">Valor</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="py-1 px-2 text-xs font-medium">{invoice.invoice}</TableCell>
                                        <TableCell className="py-1 px-2 text-xs">{invoice.status}</TableCell>
                                        <TableCell className="py-1 px-2 text-xs">{invoice.method}</TableCell>
                                        <TableCell className="py-1 px-2 text-xs text-right">{invoice.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Section>

            {/* Props Reference */}
            <Section title="Referência de Componentes" description="Componentes disponíveis na Table">
                <Card>
                    <CardContent className="pt-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Componente</TableHead>
                                    <TableHead>Elemento HTML</TableHead>
                                    <TableHead>Descrição</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">Table</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;table&gt;</TableCell>
                                    <TableCell>Container principal da tabela</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">TableHeader</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;thead&gt;</TableCell>
                                    <TableCell>Cabeçalho da tabela</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">TableBody</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;tbody&gt;</TableCell>
                                    <TableCell>Corpo principal da tabela</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">TableFooter</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;tfoot&gt;</TableCell>
                                    <TableCell>Rodapé da tabela</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">TableRow</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;tr&gt;</TableCell>
                                    <TableCell>Linha da tabela</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">TableHead</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;th&gt;</TableCell>
                                    <TableCell>Célula de cabeçalho</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">TableCell</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;td&gt;</TableCell>
                                    <TableCell>Célula de dados</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-mono text-primary">TableCaption</TableCell>
                                    <TableCell className="text-muted-foreground">&lt;caption&gt;</TableCell>
                                    <TableCell>Legenda/título da tabela</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Section>

            {/* Código de Exemplo */}
            <Section title="Exemplo de Código" description="Uso básico do componente Table">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`<Table>
  <TableCaption>Lista de usuários.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Nome</TableHead>
      <TableHead>Email</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-right">
          <Badge>{user.status}</Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Acessibilidade */}
            <Section title="Acessibilidade" description="Notas sobre acessibilidade do componente">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Use <code className="text-primary">TableCaption</code> para fornecer um título descritivo</li>
                            <li>Use <code className="text-primary">TableHead</code> para identificar colunas (semântica correta)</li>
                            <li>Considere usar <code className="text-primary">scope=&quot;col&quot;</code> ou <code className="text-primary">scope=&quot;row&quot;</code> em tabelas complexas</li>
                            <li>Para tabelas com seleção, use <code className="text-primary">data-state=&quot;selected&quot;</code> para indicar linhas selecionadas</li>
                            <li>A tabela é responsiva por padrão com scroll horizontal em telas pequenas</li>
                        </ul>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
