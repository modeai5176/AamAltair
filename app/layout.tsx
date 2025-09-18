import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PerformanceMonitor } from "@/components/performance-monitor"
import "./globals.css"

// Satoshi font will be loaded via CSS from Fontshare

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://aamaltair.com'),
  title: "Aam Altair - Unplug. Unwind. Reconnect with Nature.",
  description:
    "A place where you wake up to mango orchards, the Milky Way, and the River Galana. Luxury retreat in Tsavo, Kenya.",
  generator: "Next.js",
  keywords: ["retreat", "Kenya", "Tsavo", "nature", "luxury", "mango orchard", "River Galana", "sustainable tourism", "eco-luxury", "wildlife", "safari"],
  authors: [{ name: "Aam Altair" }],
  creator: "Aam Altair",
  publisher: "Aam Altair",
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
  openGraph: {
    title: "Aam Altair - Unplug. Unwind. Reconnect with Nature.",
    description: "A place where you wake up to mango orchards, the Milky Way, and the River Galana.",
    type: "website",
    locale: "en_US",
    siteName: "Aam Altair",
    images: [
      {
        url: "/aamaltair_logo.png",
        width: 1200,
        height: 630,
        alt: "Aam Altair - Luxury Nature Retreat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aam Altair - Unplug. Unwind. Reconnect with Nature.",
    description: "A place where you wake up to mango orchards, the Milky Way, and the River Galana.",
    images: ["/aamaltair_logo.png"],
  },
  icons: {
    icon: "/aamaltair_logo.png",
    shortcut: "/aamaltair_logo.png",
    apple: "/aamaltair_logo.png",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#0d0e10",
    "msapplication-config": "/browserconfig.xml",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d0e10" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e10" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          rel="preload"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
          />
        </noscript>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-foreground/60">Loading...</div></div>}>
          {children}
          <PerformanceMonitor />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
