"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
// Import from new location
import { navigation } from "@/lib/navigation"
import { useState } from "react"

export default function AppShell({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    // Default to dark mode is often safer if user wants that "premium" feel mentioned in guidelines, 
    // but the original code had it false. I'll stick to false to match original behavior unless told otherwise.
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <div className={cn("flex min-h-screen", isDarkMode && "dark")}>
            {/* Sidebar - Fixo */}
            <aside className="w-72 border-r border-border bg-card p-6 flex flex-col gap-6 fixed top-0 left-0 h-screen overflow-y-auto z-50">
                {/* Logo/Título */}
                <div className="flex flex-col gap-2">
                    {/* Updated href to root */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-shadow group-hover:shadow-glow"
                            style={{ background: 'linear-gradient(135deg, var(--primary), var(--detail), var(--accent))' }}
                        >
                            <span className="text-white font-heading font-bold text-lg">K</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-heading font-bold text-foreground">Kyp</h1>
                            <p className="text-xs text-muted-foreground">Design System</p>
                        </div>
                    </Link>
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                >
                    <div className="relative w-12 h-6 rounded-full bg-input transition-colors">
                        <div
                            className={cn(
                                "absolute top-1 w-4 h-4 rounded-full bg-primary transition-all duration-200",
                                isDarkMode ? "left-7" : "left-1"
                            )}
                        />
                    </div>
                    <span className="text-sm text-muted-foreground">
                        {isDarkMode ? "Modo Escuro" : "Modo Claro"}
                    </span>
                </button>

                {/* Navegação */}
                <nav className="flex flex-col gap-6 flex-1">
                    {navigation.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-1">
                                {section.items.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                                                pathname === item.href
                                                    ? "bg-primary text-primary-foreground shadow-sm"
                                                    : "text-foreground hover:bg-muted"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* Footer da Sidebar */}
                <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                        Versão 1.0.0
                    </p>
                </div>
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex-1 ml-72 overflow-auto bg-background min-h-screen">
                {children}
            </main>
        </div>
    )
}
