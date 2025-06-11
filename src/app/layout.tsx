import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FraDelica - 香りのサブスクリプション',
  description: '季節とともに香りがめぐる。調香師の手仕事による"おまかせ香り定期便"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}