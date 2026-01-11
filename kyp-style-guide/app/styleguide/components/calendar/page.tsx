"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export default function CalendarShowcasePage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Calendar
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Um componente de calendário para seleção de datas, construído sobre o react-day-picker.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar o componente">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { Calendar } from "@/components/ui/calendar"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Uso Básico */}
            <Section title="Seleção Única" description="Calendário padrão com seleção de uma única data">
                <Card>
                    <CardContent className="pt-6 flex flex-col items-center sm:items-start gap-8">
                        <div className="flex flex-wrap gap-8">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border shadow-sm"
                            />
                            <div className="space-y-4 min-w-[200px]">
                                <div>
                                    <p className="text-sm font-medium mb-2">Data Selecionada:</p>
                                    <div className="p-3 border rounded bg-muted text-sm font-mono">
                                        {date ? date.toLocaleDateString("pt-BR") : "Selecione uma data"}
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    <p>O componente é totalmente estilizado usando as variáveis do tema e Tailwind CSS.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
