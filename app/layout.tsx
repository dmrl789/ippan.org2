import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'IPPAN Foundation',
  description:
    'IPPAN Foundation stewards the IPPAN Network—an energy-efficient, massively scalable public blockchain built for real-world adoption.',
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/forum', label: 'Forum' },
  { href: '/contact', label: 'Contact' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-semibold tracking-tight">
                IPPAN Foundation
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-gray-900">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-gray-50">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
              <p>© {currentYear} IPPAN Foundation. All rights reserved.</p>
              <p className="text-gray-500">
                Advancing decentralized, resilient, and sustainable digital infrastructure for all.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
