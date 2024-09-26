import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from './providers'

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ["400", "600", "700", "800"],
  fallback: ["Roboto","Poppins", "sans-serif"],
  // variable: "--league-spartan",
  display: "swap",
})

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
      <body className={outfit.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
