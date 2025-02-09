"use client"

import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '../stores'
import '../global.css'
import { AuroraBackground } from '@/components/ui/AuroraBackground'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Provider store={store}>
          <AuroraBackground showRadialGradient={true}>
            {children}
          </AuroraBackground>
        </Provider>
      </body>
    </html>
  )
}
