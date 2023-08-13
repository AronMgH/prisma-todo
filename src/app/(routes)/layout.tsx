import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Todo App',
  keywords: ['nextjs', 'prisma', 'tailwindcss', 'react']
}

type RootLayoutChildren = {
  children: React.ReactNode
}

export default function RootLayout( {children}: RootLayoutChildren)  {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>{children}</body>
    </html>
  )
}
