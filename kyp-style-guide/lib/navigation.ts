export interface NavItem {
    name: string
    href: string
    description?: string
}

export interface NavSection {
    title: string
    items: NavItem[]
}

export const navigation: NavSection[] = [
    {
        title: "Fundamentos",
        items: [
            {
                name: "Design Tokens",
                href: "/",
                description: "Cores, tipografia, espaçamento e todos os tokens do sistema"
            },
        ]
    },
    {
        title: "Componentes",
        items: [
            { name: "Table", href: "/styleguide/components/table", description: "Tabelas para exibição de dados" },
            { name: "Card", href: "/styleguide/components/card", description: "Container flexível de conteúdo" },
            { name: "Tabs", href: "/styleguide/components/tabs", description: "Abas para organização de conteúdo" },
            { name: "Sheet", href: "/styleguide/components/sheet", description: "Painel lateral (Drawer)" },
            { name: "Sidebar", href: "/styleguide/components/sidebar", description: "Barra lateral de navegação" },
            { name: "Breadcrumb", href: "/styleguide/components/breadcrumb", description: "Navegação estrutural (Breadcrumbs)" },
            { name: "Native Select", href: "/styleguide/components/native-select", description: "Select nativo estilizado" },
            { name: "Calendar", href: "/styleguide/components/calendar", description: "Componente de calendário" },
            { name: "Area Chart", href: "/styleguide/components/area-chart", description: "Gráficos de área" },
            { name: "Bar Chart", href: "/styleguide/components/bar-chart", description: "Gráficos de barra" },
            { name: "Pie Chart", href: "/styleguide/components/pie-chart", description: "Gráficos de pizza" },
            { name: "Radar Chart", href: "/styleguide/components/radar-chart", description: "Gráficos de radar" },
        ]
    }
]
