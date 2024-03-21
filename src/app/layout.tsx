import './globals.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Playfair_Display } from 'next/font/google'

import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

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
          'min-h-screen w-full bg-stone-50 font-sans font-light tracking-tight antialiased',
          inter.variable,
          playfairDisplay.variable,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
