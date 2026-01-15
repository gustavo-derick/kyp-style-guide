"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Check, AlertCircle, Info, Copy } from "lucide-react"
import { useState } from "react"

// Componente para exibir swatches de cores
function ColorSwatch({
  name,
  variable,
  className = "",
  style
}: {
  name: string
  variable: string
  className?: string
  style?: React.CSSProperties
}) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(variable)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={copyToClipboard}
      className="group flex flex-col gap-2 text-left transition-all hover:scale-105"
    >
      <div
        className={`w-full h-20 rounded-xl shadow-sm border border-border/50 transition-all group-hover:shadow-md ${className}`}
        style={style}
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground font-mono">{variable}</p>
        </div>
        {copied ? (
          <Check className="w-4 h-4 text-success" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </button>
  )
}

// Componente de Seção
function Section({
  title,
  description,
  children
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground">{title}</h2>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <div className="p-8 lg:p-12 space-y-16 max-w-6xl">
      {/* Header */}
      <div className="space-y-4">
        <Badge variant="secondary" className="mb-4">v1.0.0</Badge>
        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
          Design Tokens
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Sistema de tokens de design completo para o KYPATS. Clique em qualquer
          cor para copiar a variável CSS.
        </p>
      </div>

      {/* ===== CORES PRINCIPAIS ===== */}
      <Section
        title="Cores Principais"
        description="Cores base do sistema de design"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ColorSwatch
            name="Primary"
            variable="#5523b7"
            className="bg-primary"
          />
          <ColorSwatch
            name="Accent"
            variable="#1ec2d3"
            className="bg-accent"
          />
          <ColorSwatch
            name="Detail"
            variable="#e828e8"
            className="bg-detail"
          />
          <ColorSwatch
            name="Background"
            variable="var(--background)"
            className="bg-background"
          />
          <ColorSwatch
            name="Foreground"
            variable="var(--foreground)"
            className="bg-foreground"
          />
          <ColorSwatch
            name="Secondary"
            variable="var(--secondary)"
            className="bg-secondary"
          />
          <ColorSwatch
            name="Muted"
            variable="var(--muted)"
            className="bg-muted"
          />
          <ColorSwatch
            name="Destructive"
            variable="var(--destructive)"
            className="bg-destructive"
          />
          <ColorSwatch
            name="Card"
            variable="var(--card)"
            className="bg-card"
          />
        </div>
      </Section>

      {/* ===== ESCALA PRIMARY (ROXO #5523b7) ===== */}
      <Section
        title="Escala Primary (Roxo)"
        description="Cor principal #5523b7 - tons de 50 a 900"
      >
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <ColorSwatch
              key={shade}
              name={`${shade}`}
              variable={`var(--primary-${shade})`}
              className={`bg-primary-${shade}`}
            />
          ))}
        </div>
      </Section>

      {/* ===== ESCALA ACCENT (CIANO #1ec2d3) ===== */}
      <Section
        title="Escala Accent (Ciano)"
        description="Cor de destaque #1ec2d3 - tons de 50 a 900"
      >
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <ColorSwatch
              key={shade}
              name={`${shade}`}
              variable={`var(--accent-${shade})`}
              className={`bg-accent-${shade}`}
            />
          ))}
        </div>
      </Section>

      {/* ===== ESCALA DETAIL (MAGENTA #e828e8) ===== */}
      <Section
        title="Escala Detail (Magenta)"
        description="Cor de detalhes #e828e8 - tons de 50 a 900"
      >
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <ColorSwatch
              key={shade}
              name={`${shade}`}
              variable={`var(--detail-${shade})`}
              className={`bg-detail-${shade}`}
            />
          ))}
        </div>
      </Section>

      {/* ===== GRADIENTE DA MARCA ===== */}
      <Section
        title="Gradiente da Marca"
        description="Roxo (#5523b7) → Magenta (#e828e8) → Ciano (#1ec2d3)"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gradiente Principal */}
          <div className="space-y-3">
            <div
              className="w-full h-32 rounded-2xl shadow-lg"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--detail), var(--accent))' }}
            />
            <div>
              <p className="text-sm font-medium">Gradiente Brand 135°</p>
              <p className="text-xs text-muted-foreground font-mono">var(--gradient-brand)</p>
            </div>
          </div>
          {/* Gradiente Horizontal */}
          <div className="space-y-3">
            <div
              className="w-full h-32 rounded-2xl shadow-lg"
              style={{ background: 'linear-gradient(90deg, var(--primary), var(--detail), var(--accent))' }}
            />
            <div>
              <p className="text-sm font-medium">Gradiente Horizontal</p>
              <p className="text-xs text-muted-foreground font-mono">90deg ciano → roxo</p>
            </div>
          </div>
          {/* Gradiente Vertical */}
          <div className="space-y-3">
            <div
              className="w-full h-32 rounded-2xl shadow-lg"
              style={{ background: 'linear-gradient(180deg, var(--primary), var(--detail), var(--accent))' }}
            />
            <div>
              <p className="text-sm font-medium">Gradiente Vertical</p>
              <p className="text-xs text-muted-foreground font-mono">180deg ciano → roxo</p>
            </div>
          </div>
          {/* Texto com Gradiente */}
          <div className="space-y-3">
            <div className="w-full h-32 rounded-2xl bg-foreground flex items-center justify-center">
              <span
                className="text-4xl font-heading font-bold"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--detail), var(--accent))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Kyp Design
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">Texto com Gradiente</p>
              <p className="text-xs text-muted-foreground font-mono">.text-gradient-brand</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== ESCALA GREY ===== */}
      <Section
        title="Escala de Cinzas"
        description="Tons de cinza de 50 a 900"
      >
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <ColorSwatch
              key={shade}
              name={`${shade}`}
              variable={`var(--grey-${shade})`}
              className={`bg-grey-${shade}`}
            />
          ))}
        </div>
      </Section>

      {/* ===== CORES SEMÂNTICAS ===== */}
      <Section
        title="Cores Semânticas"
        description="Cores para feedback e estados"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSwatch
            name="Success"
            variable="var(--success)"
            className="bg-success"
          />
          <ColorSwatch
            name="Warning"
            variable="var(--warning)"
            className="bg-warning"
          />
          <ColorSwatch
            name="Info"
            variable="var(--info)"
            className="bg-info"
          />
          <ColorSwatch
            name="Destructive"
            variable="var(--destructive)"
            className="bg-destructive"
          />
        </div>
      </Section>

      {/* ===== CORES DE GRÁFICOS ===== */}
      <Section
        title="Cores de Gráficos"
        description="Paleta para visualização de dados"
      >
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <ColorSwatch
              key={num}
              name={`Chart ${num}`}
              variable={`var(--chart-${num})`}
              className={`bg-chart-${num}`}
            />
          ))}
        </div>
      </Section>

      {/* ===== TIPOGRAFIA ===== */}
      <Section
        title="Tipografia"
        description="Inter para headings, Roboto para corpo"
      >
        <Card>
          <CardContent className="p-8 space-y-8">
            {/* Headings */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Headings (Inter)</p>
              <div className="space-y-3">
                <h1 className="text-5xl font-heading font-bold">Heading 1 - 48px Bold</h1>
                <h2 className="text-4xl font-heading font-bold">Heading 2 - 36px Bold</h2>
                <h3 className="text-3xl font-heading font-semibold">Heading 3 - 30px Semibold</h3>
                <h4 className="text-2xl font-heading font-semibold">Heading 4 - 24px Semibold</h4>
                <h5 className="text-xl font-heading font-medium">Heading 5 - 20px Medium</h5>
                <h6 className="text-lg font-heading font-medium">Heading 6 - 18px Medium</h6>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Body Text */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Body Text (Roboto)</p>
              <div className="space-y-4 max-w-2xl">
                <p className="text-lg">
                  <strong>Large (18px)</strong> — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-base">
                  <strong>Base (16px)</strong> — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm">
                  <strong>Small (14px)</strong> — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Extra Small (12px)</strong> — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Font Weights */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Font Weights</p>
              <div className="space-y-2">
                <p className="text-lg font-light">Light (300) — The quick brown fox jumps</p>
                <p className="text-lg font-normal">Regular (400) — The quick brown fox jumps</p>
                <p className="text-lg font-medium">Medium (500) — The quick brown fox jumps</p>
                <p className="text-lg font-semibold">Semibold (600) — The quick brown fox jumps</p>
                <p className="text-lg font-bold">Bold (700) — The quick brown fox jumps</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* ===== BORDER RADIUS ===== */}
      <Section
        title="Border Radius"
        description="Estilos de arredondamento"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {[
            { name: "None", value: "0", class: "rounded-none" },
            { name: "SM", value: "calc(var(--radius) - 4px)", class: "rounded-sm" },
            { name: "MD", value: "calc(var(--radius) - 2px)", class: "rounded-md" },
            { name: "LG", value: "var(--radius)", class: "rounded-lg" },
            { name: "XL", value: "calc(var(--radius) + 4px)", class: "rounded-xl" },
            { name: "2XL", value: "calc(var(--radius) + 8px)", class: "rounded-2xl" },
            { name: "Full", value: "9999px", class: "rounded-full" },
          ].map((radius) => (
            <div key={radius.name} className="text-center space-y-2">
              <div
                className={`w-20 h-20 mx-auto bg-primary ${radius.class}`}
              />
              <p className="text-sm font-medium">{radius.name}</p>
              <p className="text-xs text-muted-foreground font-mono">{radius.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== SOMBRAS ===== */}
      <Section
        title="Sombras"
        description="Níveis de elevação"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Nenhuma", class: "shadow-none" },
            { name: "SM", class: "shadow-sm" },
            { name: "MD", class: "shadow-md" },
            { name: "LG", class: "shadow-lg" },
          ].map((shadow) => (
            <div key={shadow.name} className="text-center space-y-3">
              <div
                className={`w-full h-24 bg-card rounded-xl ${shadow.class} border border-border/30`}
              />
              <p className="text-sm font-medium">{shadow.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== COMPONENTES ===== */}
      <Section
        title="Componentes"
        description="Componentes base do shadcn/ui usando os tokens"
      >
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Buttons</CardTitle>
            <CardDescription>Variantes de botões disponíveis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-heading">Badges</CardTitle>
            <CardDescription>Tags e indicadores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-heading">Alerts</CardTitle>
            <CardDescription>Mensagens de feedback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Informação</AlertTitle>
              <AlertDescription>
                Esta é uma mensagem informativa para o usuário.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>
                Algo deu errado. Por favor, tente novamente.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Radio Group */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-heading">Radio Group</CardTitle>
            <CardDescription>Seleção única</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1">Opção 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2">Opção 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="option-3" />
                <Label htmlFor="option-3">Opção 3</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Input */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-heading">Inputs</CardTitle>
            <CardDescription>Campos de entrada de texto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Desabilitado</Label>
              <Input id="disabled" placeholder="Campo desabilitado" disabled />
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* ===== SPACING ===== */}
      <Section
        title="Espaçamento"
        description="Sistema de espaçamento baseado em 4px"
      >
        <div className="flex flex-wrap items-end gap-4">
          {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((space) => (
            <div key={space} className="text-center">
              <div
                className="bg-primary mb-2"
                style={{ width: `${space * 4}px`, height: `${space * 4}px` }}
              />
              <p className="text-xs font-mono text-muted-foreground">{space * 4}px</p>
              <p className="text-xs text-muted-foreground">space-{space}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <div className="border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">
          Design System KYPATS • Atualizado em Janeiro 2026
        </p>
      </div>
    </div>
  )
}
