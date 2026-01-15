import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/app-shell";

// Fonte para headings - Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Fonte para body - Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KYPATS - Sistema de Design",
  description: "Design System e Styleguide do KYPATS ATS",
  keywords: ["ATS", "design system", "styleguide", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
