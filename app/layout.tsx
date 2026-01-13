import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PROMARK FLOORING - Vancouver Floor Leveling & Hardwood Installation',
  description: 'Vancouver\'s leader in professional floor leveling and hardwood installation. 20+ years experience, 5-year warranty on floor leveling. Serving Greater Vancouver and Fraser Valley.',
  keywords: ['floor leveling vancouver', 'hardwood flooring vancouver', 'floor installation bc', 'flooring contractor vancouver'],
  authors: [{ name: 'PROMARK FLOORING' }],
  openGraph: {
    title: 'PROMARK FLOORING - Vancouver Floor Leveling & Hardwood Installation',
    description: 'Vancouver\'s leader in professional floor leveling and hardwood installation. 20+ years experience, serving Greater Vancouver.',
    url: 'https://promarkflooring.com',
    siteName: 'PROMARK FLOORING',
    locale: 'en_CA',
    type: 'website',
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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
