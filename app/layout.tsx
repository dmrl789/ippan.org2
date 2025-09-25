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
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-semibold tracking-tight text-slate-100">
                IPPAN Foundation
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-slate-300">© {currentYear} IPPAN Foundation. All rights reserved.</p>
              <p className="text-slate-500">
                Advancing decentralized, resilient, and sustainable digital infrastructure for all.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
