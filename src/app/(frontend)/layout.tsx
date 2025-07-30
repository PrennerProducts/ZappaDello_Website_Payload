import '../globals.css'

import { Geist as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'

import { cn } from '@/lib/utils'

import type { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Zappadello',
  description:
    'Willkommen in der Zappadello Bar! Seit 1992 der Treffpunkt im Kaunertal für Cocktails, Bier und unvergessliche Abende. Manuel und Iris laden dich ein!',
  metadataBase: new URL('https://zappadello.at/'),
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://zappadello.at/',
    siteName: 'Zappadello',
    title: 'Zappadello Bar - Die Bar im Kaunertal',
    description:
      'Willkommen in der Zappadello Bar! Seit 1992 der Treffpunkt im Kaunertal für Cocktails, Bier und unvergessliche Abende. Manuel und Iris laden dich ein!',
    images: [
      {
        url: '/opengraphimage.jpg',
        width: 1200,
        height: 630,
        alt: 'Zappadello Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zappadello - Die Bar im Kaunertal',
    description:
      'Willkommen in der Zappadello Bar! Seit 1992 der Treffpunkt im Kaunertal für Cocktails, Bier und unvergessliche Abende.',
  },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={fontSans.className} suppressHydrationWarning>
      <body className={cn('flex flex-col min-h-screen', fontSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-center" expand={true} closeButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
