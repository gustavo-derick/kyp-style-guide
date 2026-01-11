"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, Settings, User, LogOut, PanelRight, PanelLeft, PanelTop, PanelBottom } from "lucide-react"

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

export default function SheetShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Sheet
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Estende o componente Dialog para exibir conteúdo que complementa a tela principal.
                    Geralmente usado para painéis laterais, menus de navegação mobile e formulários de edição.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes do Sheet">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Exemplo Básico */}
            <Section title="Uso Básico" description="Sheet padrão abrindo na lateral direita">
                <div className="flex items-center gap-4 border p-8 rounded-lg justify-center bg-card">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Abrir Sheet</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Editar Perfil</SheetTitle>
                                <SheetDescription>
                                    Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Nome
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Username
                                    </Label>
                                    <Input id="username" value="@pedroduarte" className="col-span-3" />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Salvar alterações</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </Section>

            {/* Posicionamento */}
            <Section title="Posicionamento (Sides)" description="O Sheet pode aparecer de qualquer lado da tela">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Top */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex gap-2">
                                <PanelTop className="w-4 h-4" /> Top
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top">
                            <SheetHeader>
                                <SheetTitle>Menu Superior</SheetTitle>
                                <SheetDescription>Este painel desliza de cima para baixo.</SheetDescription>
                            </SheetHeader>
                            <div className="py-4">Conteúdo do painel superior...</div>
                        </SheetContent>
                    </Sheet>

                    {/* Bottom */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex gap-2">
                                <PanelBottom className="w-4 h-4" /> Bottom
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom">
                            <SheetHeader>
                                <SheetTitle>Menu Inferior</SheetTitle>
                                <SheetDescription>Este painel desliza de baixo para cima.</SheetDescription>
                            </SheetHeader>
                            <div className="py-4">Conteúdo do painel inferior...</div>
                        </SheetContent>
                    </Sheet>

                    {/* Left */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex gap-2">
                                <PanelLeft className="w-4 h-4" /> Left
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Menu Lateral Esquerdo</SheetTitle>
                                <SheetDescription>Ideal para navegação principal.</SheetDescription>
                            </SheetHeader>
                            <div className="py-4 space-y-4">
                                <Button variant="ghost" className="w-full justify-start">
                                    <User className="mr-2 h-4 w-4" /> Perfil
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Settings className="mr-2 h-4 w-4" /> Configurações
                                </Button>
                                <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                                    <LogOut className="mr-2 h-4 w-4" /> Sair
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Right (Default) */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex gap-2">
                                <PanelRight className="w-4 h-4" /> Right
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Menu Lateral Direito</SheetTitle>
                                <SheetDescription>Padrão do componente Sheet.</SheetDescription>
                            </SheetHeader>
                            <div className="py-4">Conteúdo do painel direito...</div>
                        </SheetContent>
                    </Sheet>
                </div>
            </Section>

            {/* Menu Mobile */}
            <Section title="Exemplo: Menu Mobile" description="Padrão comum de navegação para dispositivos móveis">
                <div className="border rounded-lg overflow-hidden h-[300px] relative bg-background">
                    {/* Header simulado */}
                    <div className="flex items-center justify-between p-4 border-b bg-card">
                        <div className="font-bold">Logo</div>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left">Navegação</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-4 py-4">
                                    <Button variant="ghost" className="justify-start">Home</Button>
                                    <Button variant="ghost" className="justify-start">Produtos</Button>
                                    <Button variant="ghost" className="justify-start">Sobre</Button>
                                    <Button variant="ghost" className="justify-start">Contato</Button>
                                    <div className="my-2 border-t" />
                                    <Button variant="default" className="justify-start bg-primary text-primary-foreground">Login</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="p-8 flex items-center justify-center h-full text-muted-foreground">
                        Conteúdo da página...
                    </div>
                </div>
            </Section>

            {/* Tamanhos */}
            <Section title="Tamanhos Personalizados" description="Ajustando a largura do Sheet via classes CSS">
                <div className="flex gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Sheet Largo (sm:max-w-xl)</Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-xl">
                            <SheetHeader>
                                <SheetTitle>Sheet Mais Largo</SheetTitle>
                                <SheetDescription>Útil para formulários complexos ou visualização de detalhes.</SheetDescription>
                            </SheetHeader>
                            <div className="py-4">Este sheet tem uma largura máxima maior em telas grandes.</div>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Tela Cheia (w-full)</Button>
                        </SheetTrigger>
                        <SheetContent className="w-[400px] sm:w-[540px] md:w-full md:max-w-full">
                            <SheetHeader>
                                <SheetTitle>Sheet Tela Cheia</SheetTitle>
                                <SheetDescription>Quase como um modal full-screen.</SheetDescription>
                            </SheetHeader>
                            <div className="py-4">Ocupa toda a largura em telas maiores.</div>
                        </SheetContent>
                    </Sheet>
                </div>
            </Section>
        </div>
    )
}
