import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Angel Ancheta - Portfolio',
  description: 'Portfolio website showcasing my work and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
