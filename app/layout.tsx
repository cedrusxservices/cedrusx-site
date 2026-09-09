import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'CedrusX | Professional Smart Home & Tech Installation',
  description:
    'Fast, secure, and hassle-free installation of smart doorbells, locks, security cameras, and mesh Wi-Fi for homeowners in the Fort Worth metro area. Verified technicians, upfront pricing, 100% satisfaction guaranteed.',
  generator: 'v0.app',
   icons: {
    icon: '/cedrusxlogofavicon.jpg',
    apple: '/cedrusxlogofavicon.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#12161f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
