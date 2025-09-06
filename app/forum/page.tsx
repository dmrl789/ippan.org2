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
