'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

import { createClient, isSupabaseClientConfigured } from '@/lib/supabase/client'

type ForumCategory = {
  id: string
  name: string
  description: string
}

type ForumUser = {
  displayName: string
  email: string
}

type ForumPost = {
  id: string
  author: ForumUser
  content: string
  createdAt: string
}

type ForumThread = {
  id: string
  title: string
  categoryId: string
  author: ForumUser
  summary: string
  createdAt: string
  posts: ForumPost[]
}

const categories: ForumCategory[] = [
  {
    id: 'protocol',
    name: 'Protocol & Research',
    description:
      'Collaborate on consensus upgrades, network parameters, and formal research that advances the IPPAN roadmap.',
  },
  {
    id: 'builders',
    name: 'Builders & Integrators',
    description: 'Share implementation tips, SDK updates, and integration patterns for payments, IoT networks, and data services.',
  },
  {
    id: 'infrastructure',
    name: 'Nodes & Infrastructure',
    description: 'Coordinate node operations, monitoring best practices, and infrastructure incentive programs with peers worldwide.',
  },
  {
    id: 'governance',
    name: 'Governance & Community',
    description:
      'Propose initiatives, contribute to working groups, and shape how the Foundation allocates resources across the ecosystem.',
  },
]

const defaultThreads: ForumThread[] = [
  {
    id: 'thread-1',
    title: 'Validator emission schedule proposal',
    categoryId: 'governance',
    summary:
      'Reviewing a phased adjustment to validator incentives to better align with long-term network sustainability objectives.',
    createdAt: '2024-07-15T10:30:00.000Z',
    author: { displayName: 'Lucia Mendes', email: 'lucia@validators.co' },
    posts: [
      {
        id: 'post-1',
        author: { displayName: 'IPPAN Research', email: 'research@ippan.org' },
        createdAt: '2024-07-15T14:10:00.000Z',
        content:
          'Appreciate the detailed modelling, Lucia. We ran the draft schedule through our forecasting stack and confirm the projected staking participation curves. We recommend adding a communication milestone before phase three.',
      },
      {
        id: 'post-2',
        author: { displayName: 'Haruto Sato', email: 'haruto@tokyovalidators.jp' },
        createdAt: '2024-07-16T07:05:00.000Z',
        content:
          'From an operator perspective, the glide path looks workable if we have at least four weeks notice. I would back including operational readiness checks before the phase transitions.',
      },
    ],
  },
  {
    id: 'thread-2',
    title: 'Payment API 0.7.0 release notes',
    categoryId: 'builders',
    summary:
      'Discussing the introduction of deterministic settlement receipts, smart-meter attestations, and an expanded webhook catalogue in the latest API drop.',
    createdAt: '2024-07-12T08:15:00.000Z',
    author: { displayName: 'Maya Patel', email: 'maya@orbitlabs.ai' },
    posts: [
      {
        id: 'post-3',
        author: { displayName: 'IPPAN Integrations', email: 'integrations@ippan.org' },
        createdAt: '2024-07-12T11:40:00.000Z',
        content:
          'Thanks Maya! We are especially keen on feedback for the webhook retry policy. A few partners hit rate limits in staging, so we are tuning the back-off curve before GA.',
      },
      {
        id: 'post-4',
        author: { displayName: 'Alex Kim', email: 'alex@citycharge.io' },
        createdAt: '2024-07-13T16:20:00.000Z',
        content:
          'CityCharge is piloting the smart-meter attestations this month. We will report back with data quality metrics and any integration blockers we encounter.',
      },
    ],
  },
  {
    id: 'thread-3',
    title: 'Regional node workshop - Dakar recap',
    categoryId: 'infrastructure',
    summary:
      'Sharing highlights from the West Africa node operators workshop, including new monitoring dashboards and resilience exercises.',
    createdAt: '2024-07-05T17:55:00.000Z',
    author: { displayName: 'Amina Diop', email: 'amina@sungrid.africa' },
    posts: [
      {
        id: 'post-5',
        author: { displayName: 'Felix Müller', email: 'felix@gridwatch.de' },
        createdAt: '2024-07-06T09:30:00.000Z',
        content:
          'The failover drill recordings were excellent. We are adapting the same dashboards for our European fleet and will share anonymised metrics soon.',
      },
    ],
  },
]

const storageKeys = {
  user: 'ippan-forum-user',
  threads: 'ippan-forum-threads',
} as const

const initialThreadForm = {
  title: '',
  categoryId: categories[0]?.id ?? 'protocol',
  summary: '',
}

type ThreadFormState = typeof initialThreadForm

type ReplyDraftState = Record<string, string>

type ReplyErrorState = Record<string, string>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function formatDateTime(timestamp: string) {
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

function generateId(prefix: string) {
  const random = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : ''
  return random ? `${prefix}-${random}` : `${prefix}-${Math.random().toString(36).slice(2, 10)}`
}

function parseStoredThreads(value: string | null): ForumThread[] {
  if (!value) return defaultThreads
  try {
    const parsed = JSON.parse(value) as ForumThread[]
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return defaultThreads
    }
    return parsed
  } catch (error) {
    console.warn('Could not parse stored threads, falling back to defaults.', error)
    return defaultThreads
  }
}

type ThreadRow = {
  id: string
  title: string
  category_id: string | null
  summary: string | null
  author_display_name: string | null
  author_email: string | null
  created_at: string | null
}

type PostRow = {
  id: string
  thread_id: string
  content: string | null
  author_display_name: string | null
  author_email: string | null
  created_at: string | null
}

function mapSupabasePost(row: PostRow): ForumPost {
  return {
    id: row.id,
    author: {
      displayName: row.author_display_name?.trim() || 'Forum member',
      email: row.author_email?.trim() || 'member@ippan.org',
    },
    content: row.content ?? '',
    createdAt: row.created_at ?? new Date().toISOString(),
  }
}

function mapSupabaseThread(row: ThreadRow, posts: ForumPost[] = []): ForumThread {
  return {
    id: row.id,
    title: row.title,
    categoryId: row.category_id?.trim() || categories[0]?.id || 'protocol',
    summary: row.summary ?? '',
    createdAt: row.created_at ?? new Date().toISOString(),
    author: {
      displayName: row.author_display_name?.trim() || 'Forum member',
      email: row.author_email?.trim() || 'member@ippan.org',
    },
    posts,
  }
}

export default function ForumClient() {
  const supabase = createClient()
  const supabaseEnabled = isSupabaseClientConfigured(supabase)
  const [user, setUser] = useState<ForumUser | null>(null)
  const [threads, setThreads] = useState<ForumThread[]>(defaultThreads)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all')
  const [activeThreadId, setActiveThreadId] = useState<string | null>(defaultThreads[0]?.id ?? null)
  const [threadForm, setThreadForm] = useState<ThreadFormState>(initialThreadForm)
  const [threadFormError, setThreadFormError] = useState('')
  const [registerError, setRegisterError] = useState('')
  const [registerSuccess, setRegisterSuccess] = useState('')
  const [replyDrafts, setReplyDrafts] = useState<ReplyDraftState>({})
  const [replyErrors, setReplyErrors] = useState<ReplyErrorState>({})
  const [isLoadingThreads, setIsLoadingThreads] = useState<boolean>(supabaseEnabled)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedUser = window.localStorage.getItem(storageKeys.user)
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as ForumUser
        if (parsedUser?.email && parsedUser?.displayName) {
          setUser(parsedUser)
        }
      } catch (error) {
        console.warn('Could not parse stored user.', error)
      }
    }

    if (!supabaseEnabled) {
      const storedThreads = window.localStorage.getItem(storageKeys.threads)
      setThreads(parseStoredThreads(storedThreads))
      setIsLoadingThreads(false)
      return
    }

    let isCancelled = false
    const fetchForum = async () => {
      setIsLoadingThreads(true)
      setLoadError('')
      try {
        const [{ data: threadRows, error: threadError }, { data: postRows, error: postError }] = await Promise.all([
          supabase
            .from('forum_threads')
            .select('id,title,category_id,summary,author_display_name,author_email,created_at')
            .order('created_at', { ascending: false }),
          supabase
            .from('forum_posts')
            .select('id,thread_id,content,author_display_name,author_email,created_at')
            .order('created_at', { ascending: true }),
        ])

        if (isCancelled) return

        if (threadError) {
          console.error('Could not load forum threads from Supabase.', threadError)
          setLoadError('We could not load the latest discussions from Supabase. Showing local defaults instead.')
          setThreads(defaultThreads)
          setActiveThreadId(defaultThreads[0]?.id ?? null)
          setIsLoadingThreads(false)
          return
        }

        if (postError) {
          console.error('Could not load forum posts from Supabase.', postError)
          setLoadError('Replies could not be loaded from Supabase. Showing discussions without replies for now.')
        }

        const postsByThread = new Map<string, ForumPost[]>()
        ;(postRows ?? []).forEach((post) => {
          const typedPost = post as PostRow
          const mappedPost = mapSupabasePost(typedPost)
          const threadId = typedPost.thread_id
          const bucket = postsByThread.get(threadId) ?? []
          bucket.push(mappedPost)
          postsByThread.set(threadId, bucket)
        })

        const mappedThreads = (threadRows ?? []).map((thread) => {
          const typedThread = thread as ThreadRow
          const posts = postsByThread.get(typedThread.id) ?? []
          posts.sort((first, second) => new Date(first.createdAt).getTime() - new Date(second.createdAt).getTime())
          return mapSupabaseThread(typedThread, posts)
        })

        if (mappedThreads.length === 0) {
          setThreads(defaultThreads)
          setActiveThreadId(defaultThreads[0]?.id ?? null)
        } else {
          setThreads(mappedThreads)
          setActiveThreadId(mappedThreads[0]?.id ?? null)
        }
      } catch (error) {
        console.error('Unexpected error loading forum data from Supabase.', error)
        if (!isCancelled) {
          setLoadError('Supabase data could not be reached. Showing built-in sample discussions.')
          setThreads(defaultThreads)
          setActiveThreadId(defaultThreads[0]?.id ?? null)
        }
      } finally {
        if (!isCancelled) {
          setIsLoadingThreads(false)
        }
      }
    }

    fetchForum()

    return () => {
      isCancelled = true
    }
  }, [supabase, supabaseEnabled])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (threads.length === 0) return
    if (supabaseEnabled) return
    window.localStorage.setItem(storageKeys.threads, JSON.stringify(threads))
  }, [threads, supabaseEnabled])

  const filteredThreads = useMemo(() => {
    if (selectedCategoryId === 'all') return threads
    return threads.filter((thread) => thread.categoryId === selectedCategoryId)
  }, [threads, selectedCategoryId])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    threads.forEach((thread) => {
      counts[thread.categoryId] = (counts[thread.categoryId] ?? 0) + 1
    })
    return counts
  }, [threads])

  const activeThread = filteredThreads.find((thread) => thread.id === activeThreadId) ?? filteredThreads[0] ?? null

  useEffect(() => {
    if (!activeThread && filteredThreads.length > 0) {
      setActiveThreadId(filteredThreads[0]!.id)
    }
  }, [filteredThreads, activeThread])

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setRegisterError('')
    setRegisterSuccess('')

    const formData = new FormData(event.currentTarget)
    const displayName = String(formData.get('displayName') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim().toLowerCase()

    if (!displayName) {
      setRegisterError('Please provide a name so the community knows who you are.')
      return
    }

    if (!emailPattern.test(email)) {
      setRegisterError('Enter a valid email address to activate your forum profile.')
      return
    }

    const nextUser: ForumUser = { displayName, email }

    if (supabaseEnabled) {
      try {
        const { error: upsertError } = await supabase
          .from('forum_registrations')
          .upsert(
            { email, display_name: displayName, registered_at: new Date().toISOString() },
            { onConflict: 'email' },
          )

        if (upsertError) {
          console.error('Could not store registration in Supabase.', upsertError)
          setRegisterError('We could not save your registration to Supabase. Please try again.')
          return
        }

        const { error: authError } = await supabase.auth.signInWithOtp({
          email,
          options: {
            data: { display_name: displayName },
            emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/forum` : undefined,
          },
        })

        if (authError) {
          console.warn('Supabase OTP email could not be sent.', authError)
        }
      } catch (error) {
        console.error('Unexpected Supabase error during registration.', error)
        setRegisterError('Something went wrong connecting to Supabase. Please try again.')
        return
      }
    }

    setUser(nextUser)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKeys.user, JSON.stringify(nextUser))
    }

    setRegisterSuccess(
      supabaseEnabled
        ? 'Registration saved with Supabase. Check your inbox for a login link.'
        : 'Registration complete. You can now start new discussions and reply to threads.',
    )
    event.currentTarget.reset()
  }

  const handleSignOut = async () => {
    if (supabaseEnabled) {
      try {
        await supabase.auth.signOut()
      } catch (error) {
        console.warn('Supabase sign out failed.', error)
      }
    }

    setUser(null)
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(storageKeys.user)
    }
  }

  const handleCreateThread = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setThreadFormError('')

    if (!user) {
      setThreadFormError('Please register or sign in before starting a discussion.')
      return
    }

    if (!threadForm.title.trim() || !threadForm.summary.trim()) {
      setThreadFormError('Provide a clear title and summary to help others respond effectively.')
      return
    }

    const now = new Date().toISOString()
    let nextThread: ForumThread | null = null

    if (supabaseEnabled) {
      try {
        const { data, error } = await supabase
          .from('forum_threads')
          .insert({
            title: threadForm.title.trim(),
            summary: threadForm.summary.trim(),
            category_id: threadForm.categoryId,
            author_display_name: user.displayName,
            author_email: user.email,
          })
          .select('id,title,category_id,summary,author_display_name,author_email,created_at')
          .single()

        if (error) {
          console.error('Could not publish thread to Supabase.', error)
          setThreadFormError('We could not publish your discussion to Supabase. Please try again.')
          return
        }

        nextThread = mapSupabaseThread(data as ThreadRow, [])
      } catch (error) {
        console.error('Unexpected Supabase error when creating a thread.', error)
        setThreadFormError('Something went wrong connecting to Supabase. Please try again later.')
        return
      }
    } else {
      nextThread = {
        id: generateId('thread'),
        title: threadForm.title.trim(),
        categoryId: threadForm.categoryId,
        summary: threadForm.summary.trim(),
        createdAt: now,
        author: user,
        posts: [],
      }
    }

    if (!nextThread) return

    setThreads((previous) => [nextThread, ...previous])
    setThreadForm(initialThreadForm)
    setActiveThreadId(nextThread.id)
  }

  const handleReply = (threadId: string) => async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!user) {
      setReplyErrors((prev) => ({ ...prev, [threadId]: 'Register or sign in to contribute to this discussion.' }))
      return
    }

    const content = replyDrafts[threadId]?.trim()
    if (!content) {
      setReplyErrors((prev) => ({ ...prev, [threadId]: 'Share a comment before submitting your reply.' }))
      return
    }

    const now = new Date().toISOString()
    let nextPost: ForumPost | null = null

    if (supabaseEnabled) {
      try {
        const { data, error } = await supabase
          .from('forum_posts')
          .insert({
            thread_id: threadId,
            content,
            author_display_name: user.displayName,
            author_email: user.email,
          })
          .select('id,thread_id,content,author_display_name,author_email,created_at')
          .single()

        if (error) {
          console.error('Could not store reply in Supabase.', error)
          setReplyErrors((prev) => ({ ...prev, [threadId]: 'Reply could not be saved to Supabase. Please try again.' }))
          return
        }

        nextPost = mapSupabasePost(data as PostRow)
      } catch (error) {
        console.error('Unexpected Supabase error when saving a reply.', error)
        setReplyErrors((prev) => ({ ...prev, [threadId]: 'A Supabase error occurred. Please try again in a moment.' }))
        return
      }
    } else {
      nextPost = {
        id: generateId('post'),
        author: user,
        content,
        createdAt: now,
      }
    }

    if (!nextPost) return

    setThreads((previous) =>
      previous.map((thread) =>
        thread.id === threadId ? { ...thread, posts: [...thread.posts, nextPost] } : thread,
      ),
    )

    setReplyDrafts((prev) => ({ ...prev, [threadId]: '' }))
    setReplyErrors((prev) => ({ ...prev, [threadId]: '' }))
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-slate-300">
      <header className="mb-14 space-y-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Community Forum</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">Join the professional IPPAN network</h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Exchange expertise with researchers, engineers, node operators, and public sector partners building on IPPAN. Register
          with your professional email to unlock posting, start new initiatives, and collaborate on programmes that accelerate
          resilient digital infrastructure worldwide.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-indigo-200">
            <span className="h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
            Real names & verified email identities keep discussions constructive.
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            Moderated by the IPPAN Foundation community team.
          </div>
        </div>
      </header>

      {loadError && (
        <div className="mb-8 rounded-3xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-200">
          {loadError}
        </div>
      )}

      <section className="grid gap-10 lg:grid-cols-[300px,1fr]">
        <aside className="flex flex-col gap-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
            <div className="flex items-center justify-between text-slate-200">
              <h2 className="text-lg font-semibold text-slate-100">Forum access</h2>
              {user ? (
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">Active member</span>
              ) : (
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">Registration required</span>
              )}
            </div>

            {user ? (
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-medium text-slate-100">{user.displayName}</p>
                  <p className="text-slate-400">{user.email}</p>
                </div>
                <p>
                  You are authorised to publish threads and replies. Keep conversations focused, actionable, and aligned with the
                  forum code of conduct.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    void handleSignOut()
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="mt-5 space-y-4 text-sm text-slate-300">
                <p className="text-slate-300">
                  Register with your organisation email to participate. A confirmation link will be sent to authorise posting
                  privileges.
                </p>
                <div>
                  <label htmlFor="displayName" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Full name
                  </label>
                  <input
                    id="displayName"
                    name="displayName"
                    required
                    placeholder="Ada Lovelace"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@organisation.com"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  />
                </div>
                {registerError && <p className="text-sm font-medium text-rose-400">{registerError}</p>}
                {registerSuccess && <p className="text-sm font-medium text-emerald-300">{registerSuccess}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400"
                >
                  Send access link
                </button>
              </form>
            )}
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
            <h2 className="text-lg font-semibold text-slate-100">Discussion tracks</h2>
            <p className="mt-2 text-sm text-slate-300">
              Choose a track to focus threads by expertise. Admin moderators ensure every topic receives timely review.
            </p>
            <ul className="mt-5 space-y-4">
              <li>
                <button
                  type="button"
                  onClick={() => setSelectedCategoryId('all')}
                  className={`flex w-full items-start justify-between rounded-2xl border px-4 py-3 text-left transition ${
                    selectedCategoryId === 'all'
                      ? 'border-indigo-500/70 bg-indigo-500/10 text-indigo-200'
                      : 'border-transparent bg-slate-900/50 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-100">All discussions</p>
                    <p className="text-xs text-slate-400">View updates from every track.</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-300">{threads.length}</span>
                </button>
              </li>
              {categories.map((category) => {
                const isSelected = selectedCategoryId === category.id
                return (
                  <li key={category.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedCategoryId(category.id)}
                      className={`flex w-full items-start justify-between rounded-2xl border px-4 py-3 text-left transition ${
                        isSelected
                          ? 'border-indigo-500/70 bg-indigo-500/10 text-indigo-200'
                          : 'border-transparent bg-slate-900/50 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-100">{category.name}</p>
                        <p className="text-xs text-slate-400">{category.description}</p>
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{categoryCounts[category.id] ?? 0}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Need help getting started?</p>
              <p className="mt-1 text-slate-300">
                Read our{' '}
                <Link href="/legal/code-of-conduct" className="text-indigo-300 underline decoration-indigo-400 hover:text-indigo-200">
                  code of conduct
                </Link>{' '}
                and
                <Link href="/contact" className="ml-1 text-indigo-300 underline decoration-indigo-400 hover:text-indigo-200">
                  contact the community team
                </Link>{' '}
                for onboarding support.
              </p>
            </div>
          </div>
        </aside>

        <div className="space-y-10">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
            <div className="flex items-center justify-between text-slate-200">
              <h2 className="text-lg font-semibold text-slate-100">Start a new discussion</h2>
              <span className="text-xs uppercase tracking-widest text-slate-400">Share proposals, releases, or requests</span>
            </div>
            <form onSubmit={handleCreateThread} className="mt-5 space-y-4">
              <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
                <div>
                  <label htmlFor="thread-title" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Title
                  </label>
                  <input
                    id="thread-title"
                    name="thread-title"
                    value={threadForm.title}
                    onChange={(event) => setThreadForm((prev) => ({ ...prev, title: event.target.value }))}
                    placeholder="Summarise your topic in a sentence"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  />
                </div>
                <div>
                  <label htmlFor="thread-category" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Track
                  </label>
                  <select
                    id="thread-category"
                    name="thread-category"
                    value={threadForm.categoryId}
                    onChange={(event) => setThreadForm((prev) => ({ ...prev, categoryId: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="thread-summary" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Opening message
                </label>
                <textarea
                  id="thread-summary"
                  name="thread-summary"
                  value={threadForm.summary}
                  onChange={(event) => setThreadForm((prev) => ({ ...prev, summary: event.target.value }))}
                  rows={4}
                  placeholder="Provide context, key data points, and a clear call to action for the community."
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
              </div>
              {threadFormError && <p className="text-sm font-medium text-rose-400">{threadFormError}</p>}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {!user && <p className="text-sm text-slate-400">Registration required to publish a discussion.</p>}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:bg-slate-700"
                  disabled={!user}
                >
                  Publish to forum
                </button>
              </div>
            </form>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between text-slate-200">
              <h2 className="text-lg font-semibold text-slate-100">Latest discussions</h2>
              <p className="text-sm text-slate-400">
                Showing {filteredThreads.length} {filteredThreads.length === 1 ? 'thread' : 'threads'} in{' '}
                {selectedCategoryId === 'all'
                  ? 'all tracks'
                  : categories.find((category) => category.id === selectedCategoryId)?.name ?? 'the selected track'}.
              </p>
            </div>

            {isLoadingThreads ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center text-sm text-slate-300">
                Loading the latest discussions from Supabase...
              </div>
            ) : filteredThreads.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center">
                <p className="text-base font-semibold text-slate-100">No discussions yet in this track</p>
                <p className="mt-2 text-sm text-slate-300">
                  Be the first to open a conversation and invite community members to contribute insights and resources.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
                <div className="space-y-4">
                  {filteredThreads.map((thread) => {
                    const isActive = activeThread?.id === thread.id
                    const category = categories.find((categoryItem) => categoryItem.id === thread.categoryId)
                    return (
                      <button
                        key={thread.id}
                        type="button"
                        onClick={() => setActiveThreadId(thread.id)}
                        className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                          isActive
                            ? 'border-indigo-500/70 bg-indigo-500/10 text-indigo-200 shadow-sm'
                            : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-indigo-400/60'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400">
                          <span className="text-slate-300">{category?.name ?? 'General'}</span>
                          <span>{new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(thread.createdAt))}</span>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-slate-100">{thread.title}</p>
                        <p className="mt-1 line-clamp-2 text-xs text-slate-400">{thread.summary}</p>
                        <p className="mt-3 text-xs text-slate-500">Started by {thread.author.displayName}</p>
                      </button>
                    )
                  })}
                </div>

                {activeThread && (
                  <article className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-widest text-slate-400">
                        <span className="text-slate-300">
                          {categories.find((category) => category.id === activeThread.categoryId)?.name ?? 'General'} •{' '}
                          {formatDateTime(activeThread.createdAt)}
                        </span>
                        <span className="text-slate-400">Created by {activeThread.author.displayName}</span>
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-100">{activeThread.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300">{activeThread.summary}</p>
                    </div>

                    <div className="mt-6 space-y-5">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                        {activeThread.posts.length} {activeThread.posts.length === 1 ? 'Reply' : 'Replies'}
                      </h4>
                      <div className="space-y-4">
                        {activeThread.posts.map((post) => (
                          <div key={post.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span className="font-semibold text-slate-200">{post.author.displayName}</span>
                              <span>{formatDateTime(post.createdAt)}</span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-slate-300">{post.content}</p>
                          </div>
                        ))}
                        {activeThread.posts.length === 0 && (
                          <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-center text-sm text-slate-400">
                            No replies yet. Share your insights to move this discussion forward.
                          </div>
                        )}
                      </div>
                      <form onSubmit={handleReply(activeThread.id)} className="space-y-3">
                        <label htmlFor={`reply-${activeThread.id}`} className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                          Add your perspective
                        </label>
                        <textarea
                          id={`reply-${activeThread.id}`}
                          name={`reply-${activeThread.id}`}
                          value={replyDrafts[activeThread.id] ?? ''}
                          onChange={(event) =>
                            setReplyDrafts((prev) => ({
                              ...prev,
                              [activeThread.id]: event.target.value,
                            }))
                          }
                          rows={4}
                          placeholder={user ? 'Share data, observations, or next steps for the group.' : 'Register to add your reply.'}
                          className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                        />
                        {replyErrors[activeThread.id] && (
                          <p className="text-sm font-medium text-rose-400">{replyErrors[activeThread.id]}</p>
                        )}
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          {!user && <p className="text-sm text-slate-400">Register to unlock replies.</p>}
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:bg-slate-700"
                            disabled={!user}
                          >
                            Post reply
                          </button>
                        </div>
                      </form>
                    </div>
                  </article>
                )}
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}
