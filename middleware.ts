import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Require auth for writing routes
export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const isWriteRoute = url.pathname.startsWith('/forum/new')
  const isAdminRoute = url.pathname.startsWith('/admin')
  
  if (isWriteRoute || isAdminRoute) {
    // If no sb-access-token cookie, redirect to /auth
    const hasSession = req.cookies.has('sb-access-token')
    if(!hasSession){
      const redirectUrl = new URL('/auth', req.url)
      return NextResponse.redirect(redirectUrl)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/forum/new', '/admin/:path*']
}
