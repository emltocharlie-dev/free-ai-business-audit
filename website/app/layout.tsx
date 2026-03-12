import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '../contexts/I18nContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://free-ai-business-audit.vercel.app'),
  title: 'AI Business Audit | Discover Hidden Opportunities',
  description: 'Professional-grade AI business audits delivered in 48 hours. Uncover optimization potential, identify risks, and get actionable recommendations—completely free.',
  keywords: 'AI audit, business analysis, free audit, AI strategy, risk assessment, ROI optimization',
  openGraph: {
    title: 'AI Business Audit',
    description: 'Discover Hidden Opportunities in Your AI Strategy',
    type: 'website',
    url: 'https://free-ai-business-audit.vercel.app',
    siteName: 'FreeAI Audit',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Audit',
    description: 'Discover Hidden Opportunities in Your AI Strategy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="font-mono">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}