"use client"

import { Header } from '../components/organisms/Header'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '../stores'
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
          {children}
        </Provider>
      </body>
    </html>
  )
}
