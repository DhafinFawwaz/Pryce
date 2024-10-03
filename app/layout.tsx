import type { Metadata } from 'next'
import './globals.css'
import { NextAuthProvider } from './providers'

export const metadata: Metadata = {
  title: 'Pryce',
  description: 'pryce',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="font-Inter h-screen bg-gradient-to-br from-[#f5f5f6] to-purple-200">
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
