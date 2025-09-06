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
