import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import { FloatingSocial } from '@/components/ui/floating-social'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - Portfolio`,
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author.name }],
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  openGraph: {
    title: `${SITE_CONFIG.name} - Portfolio`,
    description: SITE_CONFIG.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <FloatingSocial />
        <Footer />
      </body>
    </html>
  )
}
