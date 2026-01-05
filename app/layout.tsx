import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lazy Wordler',
  description: 'Get wordle answers without the work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src="https://umami.arianizadi.com/script.js"
          data-website-id="a2eb6096-eef7-4a88-9082-7894be19ccbc"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
