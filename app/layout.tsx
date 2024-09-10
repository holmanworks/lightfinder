import { type Metadata } from 'next'
import clsx from 'clsx'
import { CSPostHogProvider } from './providers'



import '@/styles/tailwind.css'


export const metadata: Metadata = {
  title: {
    template: '',
    default: 'TYPE S',
  },
  description:
    '',
  icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-background antialiased',
      )}
    >
      <CSPostHogProvider>
        <body className="flex h-full flex-col">{children}</body>
      </CSPostHogProvider>

    </html>
  )
}
