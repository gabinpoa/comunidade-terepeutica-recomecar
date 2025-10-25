import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Recomeçar - Tratamento de Dependência Química",
  description: "Centro de acolhimento feminino em Nova Santa Rita",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${workSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
