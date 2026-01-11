"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Home, Inbox, Search, Settings, User, Bell, ChevronsUpDown, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

// === DADOS DE EXEMPLO ===

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Vagas",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendário",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Busca",
        url: "#",
        icon: Search,
    },
    {
        title: "Configurações",
        url: "#",
        icon: Settings,
    },
]

// === EXEMPLO DE APP SIDEBAR ===

function AppSidebarDemo() {
    return (
        <Sidebar className="absolute top-0 bottom-0 left-0 border-r">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <Home className="size-4" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">Acme Inc</span>
                                        <span className="truncate text-xs">Enterprise</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" align="start" side="bottom" sideOffset={4}>
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage src="" alt="Acme Inc" />
                                            <AvatarFallback className="rounded-lg">AI</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">Acme Inc</span>
                                            <span className="truncate text-xs">Enterprise</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Plus className="mr-2 h-4 w-4" />
                                        Add Team
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Aplicação</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Time</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <User className="w-4 h-4" />
                                    <span>Membros</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="text-muted-foreground">
                                    <Plus className="w-4 h-4" />
                                    <span>Adicionar membro</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="" alt="User" />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">User Name</span>
                                <span className="truncate text-xs">user@example.com</span>
                            </div>
                            <Bell className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

// === PÁGINA PRINCIPAL ===

export default function SidebarShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Sidebar
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Uma barra lateral composable, colapsável e responsiva.
                    Gerencia automaticamente o estado (aberto/fechado) e responsividade mobile.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes da Sidebar">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Demo Interativa */}
            <Section title="Demo Interativa" description="Um exemplo completo de layout com Sidebar">
                <div className="border rounded-xl overflow-hidden shadow-sm h-[500px] relative bg-background flex flex-col">
                    <div className="bg-muted/30 p-2 text-xs text-center border-b text-muted-foreground">
                        Container Simulado (SidebarProvider)
                    </div>
                    {/* 
                        Nota: Normalmente o SidebarProvider envolve toda a aplicação em layout.tsx.
                        Aqui estamos usando localmente para demonstração.
                    */}
                    <SidebarProvider className="h-full min-h-[450px]">
                        <AppSidebarDemo />
                        <main className="flex-1 p-6 overflow-auto">
                            <div className="flex items-center gap-4 mb-6">
                                <SidebarTrigger />
                                <h1 className="text-xl font-bold">Dashboard</h1>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <div className="h-32 bg-muted/50 rounded-lg animate-pulse" />
                                <div className="h-32 bg-muted/50 rounded-lg animate-pulse" />
                                <div className="h-32 bg-muted/50 rounded-lg animate-pulse" />
                                <div className="h-64 md:col-span-2 bg-muted/50 rounded-lg animate-pulse" />
                            </div>
                        </main>
                    </SidebarProvider>
                </div>
            </Section>

            {/* Estrutura */}
            <Section title="Estrutura do Componente" description="Hierarquia recomendada">
                <Card>
                    <CardContent className="pt-6">
                        <ul className="space-y-4 text-sm">
                            <li>
                                <code className="text-primary font-bold">SidebarProvider</code>
                                <p className="text-muted-foreground mt-1">Gerencia o contexto da sidebar (estado collapsible, configurações).</p>
                            </li>
                            <li>
                                <code className="text-primary font-bold">Sidebar</code>
                                <p className="text-muted-foreground mt-1">Container principal da barra lateral.</p>
                            </li>
                            <li>
                                <code className="text-primary font-bold">SidebarHeader / SidebarFooter</code>
                                <p className="text-muted-foreground mt-1">Seções fixas no topo e fundo (sticky).</p>
                            </li>
                            <li>
                                <code className="text-primary font-bold">SidebarContent</code>
                                <p className="text-muted-foreground mt-1">Área rolável para o conteúdo principal.</p>
                            </li>
                            <li>
                                <code className="text-primary font-bold">SidebarGroup</code>
                                <p className="text-muted-foreground mt-1">Agrupamento lógico de itens de menu.</p>
                            </li>
                            <li>
                                <code className="text-primary font-bold">SidebarRail</code>
                                <p className="text-muted-foreground mt-1">Área clicável na borda para redimensionar (opcional).</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </Section>

            {/* Variantes de Botão */}
            <Section title="SidebarMenuItem" description="Itens de menu e estados">
                <Card>
                    <CardContent className="p-0">
                        {/* Usando SidebarProvider apenas para contexto dos botões sem renderizar a sidebar completa */}
                        <SidebarProvider className="min-h-0 h-auto p-6">
                            <div className="w-full max-w-sm space-y-2">
                                <SidebarMenuButton isActive>
                                    <Inbox />
                                    <span>Item Ativo</span>
                                </SidebarMenuButton>
                                <SidebarMenuButton>
                                    <Calendar />
                                    <span>Item Padrão</span>
                                </SidebarMenuButton>
                                <SidebarMenuButton disabled>
                                    <Settings />
                                    <span>Item Desabilitado</span>
                                    <Badge className="ml-auto text-xs py-0 h-5" variant="secondary">WIP</Badge>
                                </SidebarMenuButton>
                            </div>
                        </SidebarProvider>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
