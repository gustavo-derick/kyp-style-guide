"use client"

import { NativeSelect } from "@/components/ui/native-select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

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

export default function NativeSelectShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Native Select
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Um componente de seleção nativo do navegador, estilizado para corresponder ao design system.
                    Ideal para formulários simples, melhor experiência mobile e performance.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar o componente">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { NativeSelect } from "@/components/ui/native-select"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Uso Básico */}
            <Section title="Uso Básico" description="Select padrão com opções simples">
                <Card>
                    <CardContent className="pt-6">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Framework</Label>
                            <NativeSelect id="framework">
                                <option value="next">Next.js</option>
                                <option value="svelte">SvelteKit</option>
                                <option value="astro">Astro</option>
                                <option value="nuxt">Nuxt.js</option>
                            </NativeSelect>
                        </div>
                    </CardContent>
                </Card>
            </Section>

            {/* Estados */}
            <Section title="Estados" description="O componente suporta estados nativos como disabled">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label>Desabilitado</Label>
                            <NativeSelect disabled>
                                <option>Opção selecionada</option>
                            </NativeSelect>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label className="text-destructive">Com Erro</Label>
                            <NativeSelect className="border-destructive focus-visible:ring-destructive">
                                <option>Seleção Inválida</option>
                            </NativeSelect>
                            <p className="text-xs text-destructive">Mensagem de erro aqui.</p>
                        </div>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
