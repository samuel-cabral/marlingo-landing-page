import './globals.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter } from 'next/font/google'

import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Marlingo',
  description: 'Make crypto accesible to all | Marlingo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
