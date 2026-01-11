"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

export default function TabsShowcasePage() {
    return (
        <div className="p-8 lg:p-12 space-y-12 max-w-6xl">
            {/* Header */}
            <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">Componente</Badge>
                <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Tabs
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Um conjunto de seções de conteúdo em camadas conhecidas como painéis de guias que são exibidas uma de cada vez.
                </p>
            </div>

            {/* Importação */}
            <Section title="Importação" description="Como importar os componentes">
                <Card>
                    <CardContent className="pt-6">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Section>

            {/* Uso Básico */}
            <Section title="Uso Básico" description="Estrutura padrão com lista de triggers e conteúdo">
                <Card>
                    <CardContent className="pt-6 flex justify-center">
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="account">Configurações</TabsTrigger>
                                <TabsTrigger value="password">Segurança</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <div className="p-4 border rounded-md mt-2 bg-muted/20">
                                    <h3 className="font-semibold mb-2">Conta</h3>
                                    <p className="text-sm text-muted-foreground">Gerencie suas configurações de conta aqui.</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="password">
                                <div className="p-4 border rounded-md mt-2 bg-muted/20">
                                    <h3 className="font-semibold mb-2">Senha</h3>
                                    <p className="text-sm text-muted-foreground">Atualize suas credenciais de segurança.</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </Section>

            {/* Exemplo Interativo Completo */}
            <Section title="Exemplo Completo" description="Tabs integradas com Cards e Formulários">
                <Card>
                    <CardContent className="pt-6 flex justify-center">
                        <Tabs defaultValue="login" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="register">Cadastro</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Login</CardTitle>
                                        <CardDescription>
                                            Acesse sua conta para continuar.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" placeholder="m@example.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="password">Senha</Label>
                                            <Input id="password" type="password" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Entrar</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="register">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Cadastro</CardTitle>
                                        <CardDescription>
                                            Crie uma nova conta em nosso sistema.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="new-email">Email</Label>
                                            <Input id="new-email" placeholder="m@example.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="new-password">Senha</Label>
                                            <Input id="new-password" type="password" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="confirm-password">Confirmar Senha</Label>
                                            <Input id="confirm-password" type="password" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Criar Conta</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </Section>
        </div>
    )
}
