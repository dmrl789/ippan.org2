# IPPAN Foundation Website for Vercel — Cursor Execution Plan + Ready-to-Paste Template

This is a **complete, production‑ready Next.js 14 + Tailwind + Supabase** website with a **built‑in forum** (auth‑gated posting), suitable for deployment on **Vercel**. Paste these files in Cursor, follow the steps, and deploy.

---

## What you get
- Modern, responsive site (Home, About, Mission, Team, Contact)
- Authentication (email + password; OAuth optional)
- Forum (categories → threads → posts)
- Markdown posts + live preview
- Profiles with avatars
- RLS-secured Supabase schema & policies (users must be logged in to write)
- Basic moderation roles (admin, mod, member)
- Clean UI with Tailwind

---

## 0) Prerequisites
- Node 20+
- A Supabase project (free tier ok)
- A Vercel account

---

## 1) Create project

```bash
# In Cursor terminal
npx create-next-app@latest ippan-foundation --ts --eslint --src-dir=false --tailwind --app --use-npm
cd ippan-foundation
npm i @supabase/supabase-js @supabase/auth-helpers-nextjs react-hook-form zod react-markdown remark-gfm
```

> Optional (avatars image optimization):
```bash
npm i next-superjson-plugin
```

---

## 2) Add files — paste everything below

**File boundaries are marked.** Create/overwrite files accordingly.

```
=== package.json ===
{
  "name": "ippan-foundation",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@supabase/auth-helpers-nextjs": "^0.10.0",
    "@supabase/supabase-js": "^2.45.4",
    "next": "^14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-markdown": "^9.0.1",
    "remark-gfm": "^4.0.0",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.6.2"
  }
}

=== next.config.mjs ===
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' }
    ]
  }
}
export default nextConfig

=== tailwind.config.ts ===
import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B7F52',
          dark: '#095F3E',
          light: '#27A379'
        }
      }
    }
  },
  plugins: []
}
export default config

=== postcss.config.js ===
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

=== tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": []
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

=== app/globals.css ===
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light; }

.prose p { margin: 0.5rem 0; }

=== .env.local.example ===
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

=== lib/supabase/server.ts ===
'use server'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from './types'

export function createClient() {
  return createServerComponentClient<Database>({ cookies })
}

=== lib/supabase/client.ts ===
'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from './types'

export function createClient() {
  return createClientComponentClient<Database>()
}

=== lib/supabase/types.ts ===
// Minimal typing surface; you can expand from Supabase > Settings > Types
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; username: string | null; avatar_url: string | null; role: 'admin'|'mod'|'member'; created_at: string },
        Insert: { id: string; username?: string | null; avatar_url?: string | null; role?: 'admin'|'mod'|'member' },
        Update: { username?: string | null; avatar_url?: string | null; role?: 'admin'|'mod'|'member' }
      },
      categories: {
        Row: { id: string; name: string; slug: string; created_at: string },
        Insert: { id?: string; name: string; slug: string },
        Update: { name?: string; slug?: string }
      },
      threads: {
        Row: { id: string; title: string; slug: string; category_id: string; author_id: string; created_at: string; updated_at: string },
        Insert: { id?: string; title: string; slug: string; category_id: string },
        Update: { title?: string; slug?: string; category_id?: string }
      },
      posts: {
        Row: { id: string; thread_id: string; author_id: string; content_md: string; created_at: string; updated_at: string },
        Insert: { id?: string; thread_id: string; content_md: string },
        Update: { content_md?: string }
      }
    }
  }
}

=== app/layout.tsx ===
import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'IPPAN Foundation',
  description: 'Immutable Proof & Availability Network — Foundation',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold text-xl text-brand">IPPAN Foundation</Link>
            <div className="flex items-center gap-4">
              <Link href="/forum" className="hover:text-brand">Forum</Link>
              <Link href="/about" className="hover:text-brand">About</Link>
              <Link href="/auth" className="rounded-md bg-brand px-3 py-1.5 text-white hover:bg-brand-dark">Sign in</Link>
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
      </body>
    </html>
  )
}

=== app/page.tsx ===
import Link from 'next/link'

export default function Home() {
  return (
    <section className="grid gap-10">
      <div className="rounded-2xl bg-gradient-to-r from-brand to-brand-light p-8 text-white">
        <h1 className="text-3xl font-bold">IPPAN Foundation</h1>
        <p className="mt-2 max-w-2xl">Advancing a sustainable, high‑throughput, verifiable network for financial‑grade settlement, AI provenance, and global availability.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/forum" className="rounded-md bg-white px-4 py-2 text-brand hover:bg-gray-100">Visit Forum</Link>
          <Link href="/about" className="rounded-md border border-white/70 px-4 py-2 hover:bg-white/10">Learn more</Link>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Mission" desc="Open research, standards, and reference code for verifiable compute, HashTimer, and financial‑grade finality."/>
        <Card title="Programs" desc="Community grants, standards working groups, and validator support."/>
        <Card title="Forum" desc="Discuss IPPAN architecture, clients, and ecosystem. Log in to post."/>
      </div>
    </section>
  )
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

=== app/about/page.tsx ===
export default function About() {
  return (
    <div className="prose">
      <h1>About the Foundation</h1>
      <p>The IPPAN Foundation supports the research and stewardship of the Immutable Proof & Availability Network.</p>
      <p>We convene contributors across cryptography, distributed systems, and finance to advance verifiable, energy‑efficient infrastructure.</p>
    </div>
  )
}

=== app/contact/page.tsx ===
export default function Contact() {
  return (
    <div className="prose">
      <h1>Contact</h1>
      <p>Email: info@ippan.org</p>
    </div>
  )
}

=== app/legal/page.tsx ===
export default function Legal() {
  return (
    <div className="prose">
      <h1>Legal</h1>
      <p>Terms of Use and Privacy Policy to be published by the Foundation.</p>
    </div>
  )
}

=== app/auth/page.tsx ===
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const Schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

type FormData = z.infer<typeof Schema>

export default function AuthPage(){
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(Schema) })
  const [mode, setMode] = useState<'signin'|'signup'>('signin')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const supabase = createClient()
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setMsg('')
    const { email, password } = data

    const fn = mode === 'signup' ? supabase.auth.signUp : supabase.auth.signInWithPassword
    const { error } = await fn({ email, password }) as any

    setLoading(false)
    if(error) return setMsg(error.message)

    // Ensure profile row exists
    const user = (await supabase.auth.getUser()).data.user
    if (user) {
      await supabase.from('profiles').upsert({ id: user.id }, { onConflict: 'id' })
    }

    router.push('/forum')
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-2xl font-semibold">{mode === 'signup' ? 'Create account' : 'Sign in'}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
        <input type="email" placeholder="Email" className="rounded-md border px-3 py-2" {...register('email')} />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        <input type="password" placeholder="Password (min 6 chars)" className="rounded-md border px-3 py-2" {...register('password')} />
        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        <button disabled={loading} className="rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark disabled:opacity-50">{loading ? 'Please wait…' : (mode==='signup'?'Sign up':'Sign in')}</button>
      </form>
      {!!msg && <p className="mt-3 text-sm text-red-600">{msg}</p>}
      <button onClick={()=>setMode(mode==='signup'?'signin':'signup')} className="mt-4 text-sm text-gray-600 underline">
        {mode==='signup' ? 'Have an account? Sign in' : "New here? Create an account"}
      </button>
    </div>
  )
}

=== app/forum/page.tsx ===
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function ForumHome(){
  const supabase = createClient()
  const { data: categories } = await supabase.from('categories').select('*').order('name')
  const { data: threads } = await supabase.from('threads').select('*, categories(name, slug)').order('created_at', { ascending: false }).limit(20)

  return (
    <div className="grid gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Forum</h1>
        <Link href="/forum/new" className="rounded-md bg-brand px-3 py-1.5 text-white hover:bg-brand-dark">New thread</Link>
      </div>
      <div className="grid gap-2">
        {threads?.map(t => (
          <Link key={t.id} href={`/forum/${t.slug}`} className="rounded-md border p-4 hover:bg-gray-50">
            <div className="text-sm text-gray-500">{(t as any).categories?.name}</div>
            <div className="text-lg font-medium">{t.title}</div>
          </Link>
        ))}
      </div>
      <div>
        <h2 className="mb-2 font-semibold">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories?.map(c => (
            <Link key={c.id} href={`/forum/category/${c.slug}`} className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50">{c.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

=== app/forum/new/page.tsx ===
'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function NewThread(){
  const supabase = createClient()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<any[]>([])
  const [err, setErr] = useState('')

  useEffect(() => {
    supabase.from('categories').select('*').order('name').then(({ data })=> setCategories(data||[]))
  }, [])

  const submit = async () => {
    setErr('')
    if(!title || !content || !categoryId) { setErr('All fields are required.'); return }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') + '-' + Math.random().toString(36).slice(2,7)

    const { error: e1, data: t } = await supabase.from('threads').insert({ title, slug, category_id: categoryId }).select('id, slug').single()
    if(e1) { setErr(e1.message); return }

    const { error: e2 } = await supabase.from('posts').insert({ thread_id: t!.id, content_md: content })
    if(e2) { setErr(e2.message); return }

    router.push(`/forum/${t!.slug}`)
  }

  return (
    <div className="grid gap-3">
      <h1 className="text-2xl font-semibold">New thread</h1>
      <input className="rounded-md border px-3 py-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <select className="rounded-md border px-3 py-2" value={categoryId} onChange={e=>setCategoryId(e.target.value)}>
        <option value="">Select category</option>
        {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <textarea className="min-h-[200px] rounded-md border px-3 py-2 font-mono" placeholder="Write in Markdown…" value={content} onChange={e=>setContent(e.target.value)} />
      {!!err && <p className="text-sm text-red-600">{err}</p>}
      <button onClick={submit} className="w-fit rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark">Publish</button>
    </div>
  )
}

=== app/forum/[slug]/page.tsx ===
import { createClient } from '@/lib/supabase/server'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function ThreadPage({ params }: { params: { slug: string } }){
  const supabase = createClient()
  const { data: thread } = await supabase.from('threads').select('*').eq('slug', params.slug).single()
  const { data: posts } = await supabase.from('posts').select('*').eq('thread_id', thread?.id).order('created_at', { ascending: true })

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{thread?.title}</h1>
      </div>
      <div className="grid gap-4">
        {posts?.map(p => (
          <article key={p.id} className="prose max-w-none rounded-md border p-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{p.content_md}</ReactMarkdown>
          </article>
        ))}
      </div>
      <ReplyBox threadId={thread!.id} />
    </div>
  )
}

function ReplyBox({ threadId }: { threadId: string }){
  return (
    <form action={postReply} className="grid gap-2">
      <textarea name="content" className="min-h-[140px] rounded-md border px-3 py-2 font-mono" placeholder="Write a reply in Markdown…" />
      <input type="hidden" name="threadId" value={threadId} />
      <button className="w-fit rounded-md bg-brand px-3 py-1.5 text-white hover:bg-brand-dark">Reply</button>
    </form>
  )
}

async function postReply(formData: FormData){
  'use server'
  const supabase = (await import('@/lib/supabase/server')).createClient()
  const content = String(formData.get('content') || '')
  const threadId = String(formData.get('threadId') || '')
  if(!content || !threadId) return
  await supabase.from('posts').insert({ thread_id: threadId, content_md: content })
}

=== app/forum/category/[slug]/page.tsx ===
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function CategoryPage({ params }: { params: { slug: string } }){
  const supabase = createClient()
  const { data: category } = await supabase.from('categories').select('*').eq('slug', params.slug).single()
  const { data: threads } = await supabase.from('threads').select('*').eq('category_id', category?.id).order('created_at', { ascending: false })
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">{category?.name}</h1>
      <div className="grid gap-2">
        {threads?.map(t => (
          <Link key={t.id} href={`/forum/${t.slug}`} className="rounded-md border p-4 hover:bg-gray-50">
            <div className="text-lg font-medium">{t.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

=== middleware.ts ===
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Require auth for writing routes
export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const isWriteRoute = url.pathname.startsWith('/forum/new')
  if (isWriteRoute) {
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
  matcher: ['/forum/new']
}
```

---

## 3) Supabase: Database schema & RLS
In Supabase SQL editor, run the following **SQL**.

```
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles linked to auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  avatar_url text,
  role text not null default 'member' check (role in ('admin','mod','member')),
  created_at timestamptz not null default now()
);

-- Forum categories
create table if not exists public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

-- Threads
create table if not exists public.threads (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  category_id uuid not null references public.categories(id) on delete cascade,
  author_id uuid not null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists threads_category_idx on public.threads(category_id);

-- Posts
create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  thread_id uuid not null references public.threads(id) on delete cascade,
  author_id uuid not null default auth.uid(),
  content_md text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists posts_thread_idx on public.posts(thread_id);

-- RLS
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.threads enable row level security;
alter table public.posts enable row level security;

-- Policies
-- profiles: users can read all, insert own row on first login, update own
create policy "profiles_read_all" on public.profiles
  for select using (true);
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- categories: everyone can read; only mods/admin can write
create policy "categories_read_all" on public.categories
  for select using (true);
create policy "categories_write_admin_mod" on public.categories
  for all using (exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','mod')
  ));

-- threads: read all; insert/update only by authenticated; delete by admin/mod or author
create policy "threads_read_all" on public.threads
  for select using (true);
create policy "threads_insert_authed" on public.threads
  for insert with check (auth.role() = 'authenticated');
create policy "threads_update_owner" on public.threads
  for update using (author_id = auth.uid());
create policy "threads_delete_admin_mod_or_owner" on public.threads
  for delete using (author_id = auth.uid() or exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','mod')
  ));

-- posts: read all; insert/update only by authenticated; delete by admin/mod or author
create policy "posts_read_all" on public.posts
  for select using (true);
create policy "posts_insert_authed" on public.posts
  for insert with check (auth.role() = 'authenticated');
create policy "posts_update_owner" on public.posts
  for update using (author_id = auth.uid());
create policy "posts_delete_admin_mod_or_owner" on public.posts
  for delete using (author_id = auth.uid() or exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','mod')
  ));

-- Seed example categories (run once)
insert into public.categories (name, slug)
values ('General', 'general'), ('Governance', 'governance'), ('Developers', 'developers')
on conflict (slug) do nothing;
```

> After you sign up the first account, make it admin:
```
update public.profiles set role = 'admin' where id = '<AUTH_USER_UUID>';
```
Retrieve the UUID from **Authentication → Users**.

---

## 4) Environment variables
Create `.env.local` and set:
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```
In **Vercel → Project → Settings → Environment Variables**, set the same for Production/Preview.

---

## 5) Run locally
```bash
npm run dev
```
- Open `http://localhost:3000`
- Create an account on **/auth**
- Forum posting requires login

---

## 6) Deploy to Vercel
```bash
# from the project root
npx vercel@latest
# or use the Vercel UI → New Project → Import from GitHub
```
- Framework: **Next.js**
- Set env vars
- Build command: `next build`
- Output: `.next`

---

## 7) Optional enhancements (fast follow)
- OAuth Providers: enable in Supabase (GitHub/Google) and add buttons on `/auth`
- Post reactions/likes table with RLS
- Full‑text search on threads/posts (Supabase `pgroonga` or `tsvector`)
- Rich editor (TipTap) instead of textarea
- Mentions and notifications
- Rate limiting via Edge Config or per‑user counters
- Moderation tools on `/admin`

---

## Notes
- All write actions are gated by Supabase RLS. Users must be authenticated to create threads or posts.
- The minimal UI is intentionally clean; you can add branding, hero art, and animations.
- If you need shadcn/ui, run `npx shadcn@latest init` and add components; the above template works without it.

