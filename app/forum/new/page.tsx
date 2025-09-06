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
