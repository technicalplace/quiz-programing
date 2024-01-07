import { Header } from '@/components/organisms/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'Programming Quiz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
