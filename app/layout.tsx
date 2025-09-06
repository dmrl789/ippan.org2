import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { AuthProvider } from './auth-provider'

export const metadata = {
  title: 'IPPAN Foundation',
  description: 'Immutable Proof & Availability Network — Foundation',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <AuthProvider>
          <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <Link href="/" className="font-semibold text-xl text-brand">IPPAN Foundation</Link>
              <div className="flex items-center gap-4">
                <Link href="/forum" className="hover:text-brand">Forum</Link>
                <Link href="/about" className="hover:text-brand">About</Link>
                <AuthButton />
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
          <footer className="border-t py-10 mt-10">
            <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} IPPAN Foundation</p>
                <div className="flex gap-4">
                  <Link href="/contact" className="hover:text-brand">Contact</Link>
                  <Link href="/legal" className="hover:text-brand">Legal</Link>
                  <a href="https://github.com/" target="_blank" className="hover:text-brand">GitHub</a>
                </div>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  )
}

async function AuthButton() {
  const { createClient } = await import('@/lib/supabase/server')
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/profile" className="text-sm hover:text-brand">
          {user.user_metadata?.full_name || user.email}
        </Link>
        <form action={signOut}>
          <button type="submit" className="text-sm text-gray-600 hover:text-brand">
            Sign out
          </button>
        </form>
      </div>
    )
  }
  
  return (
    <Link href="/auth" className="rounded-md bg-brand px-3 py-1.5 text-white hover:bg-brand-dark">
      Sign in
    </Link>
  )
}

async function signOut() {
  'use server'
  const { createClient } = await import('@/lib/supabase/server')
  const supabase = createClient()
  await supabase.auth.signOut()
}
