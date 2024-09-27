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
      <body className="font-Inter">
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
