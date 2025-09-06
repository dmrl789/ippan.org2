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
