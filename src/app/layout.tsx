import type { Metadata } from 'next'
import './globals.css'
import AppBar from '@/components/AppBar'

export const metadata: Metadata = {
  title: {
    template: '%s | EComm',
    default: 'EComm'
  },
  description: 'A simple e-commerce app built with Next.js and Tailwind CSS'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <AppBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
