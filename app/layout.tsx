import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Tejada Producciones',
  description: 'Profesional en fotografía y video',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
