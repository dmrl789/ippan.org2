import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="font-semibold text-xl text-brand">
            IPPAN Foundation
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-brand">
              About
            </Link>
            <Link to="/contact" className="hover:text-brand">
              Contact
            </Link>
            <Link to="/legal" className="hover:text-brand">
              Legal
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="mx-auto max-w-6xl px-4 py-8">
        {children}
      </main>
      
      <footer className="border-t py-10 mt-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} IPPAN Foundation</p>
            <div className="flex gap-4">
              <Link to="/contact" className="hover:text-brand">Contact</Link>
              <Link to="/legal" className="hover:text-brand">Legal</Link>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
