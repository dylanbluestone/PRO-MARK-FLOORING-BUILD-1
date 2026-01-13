import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import { BaseSchema } from './components/SchemaMarkup'
import { Analytics } from '@vercel/analytics/react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4A7C59', // Forest green
}

export const metadata: Metadata = {
  metadataBase: new URL('https://promarkflooring.com'),
  title: {
    default: 'PROMARK FLOORING | Premium Floor Leveling & Hardwood Installation Vancouver',
    template: '%s | PROMARK FLOORING - Vancouver\'s Premier Flooring Craftsmen',
  },
  description: 'Vancouver\'s premier flooring craftsmen. Specializing in precision floor leveling with 5-year warranty and luxury hardwood installation. 20+ years of excellence serving Greater Vancouver & Fraser Valley.',
  keywords: [
    'floor leveling vancouver',
    'hardwood flooring vancouver',
    'premium flooring bc',
    'flooring contractor vancouver',
    'luxury hardwood installation',
    'self leveling vancouver',
    'concrete floor leveling',
    'wood floor installation',
    'vancouver flooring company',
    'fraser valley flooring',
  ],
  authors: [{ name: 'PROMARK FLOORING', url: 'https://promarkflooring.com' }],
  creator: 'PROMARK FLOORING',
  publisher: 'PROMARK FLOORING',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'PROMARK FLOORING | Premium Floor Leveling & Hardwood Installation',
    description: 'Vancouver\'s premier flooring craftsmen. 20+ years of excellence, 5-year warranty on floor leveling. Craftsmanship that lasts.',
    url: 'https://promarkflooring.com',
    siteName: 'PROMARK FLOORING',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PROMARK FLOORING - Premium Floor Leveling and Hardwood Installation Vancouver',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROMARK FLOORING | Vancouver\'s Premier Flooring Craftsmen',
    description: 'Premium floor leveling with 5-year warranty and luxury hardwood installation. 20+ years serving Greater Vancouver.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://promarkflooring.com',
  },
  category: 'Home Improvement',
  other: {
    'geo.region': 'CA-BC',
    'geo.placename': 'Vancouver',
    'geo.position': '49.2827;-123.1207',
    'ICBM': '49.2827, -123.1207',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <BaseSchema />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
