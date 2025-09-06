'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Database } from '@/lib/supabase/types'

type Thread = Database['public']['Tables']['threads']['Row'] & {
  categories: { name: string; slug: string }
  profiles: { username: string | null }
}
type Post = Database['public']['Tables']['posts']['Row'] & {
  threads: { title: string; slug: string }
  profiles: { username: string | null }
}
type Profile = Database['public']['Tables']['profiles']['Row']

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'threads' | 'posts' | 'users' | 'categories'>('threads')
  const [threads, setThreads] = useState<Thread[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<Profile[]>([])
  const [categories, setCategories] = useState<Database['public']['Tables']['categories']['Row'][]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  
  const supabase = createClient()

  useEffect(() => {
    loadData()
  }, [activeTab])

  const loadData = async () => {
    setLoading(true)
    try {
      switch (activeTab) {
        case 'threads':
          const { data: threadsData } = await supabase
            .from('threads')
            .select(`
              *,
              categories(name, slug),
              profiles(username)
            `)
            .order('created_at', { ascending: false })
          setThreads(threadsData || [])
          break
          
        case 'posts':
          const { data: postsData } = await supabase
            .from('posts')
            .select(`
              *,
              threads(title, slug),
              profiles(username)
            `)
            .order('created_at', { ascending: false })
          setPosts(postsData || [])
          break
          
        case 'users':
          const { data: usersData } = await supabase
            .from('profiles')
            .select('*')
            .order('created_at', { ascending: false })
          setUsers(usersData || [])
          break
          
        case 'categories':
          const { data: categoriesData } = await supabase
            .from('categories')
            .select('*')
            .order('name')
          setCategories(categoriesData || [])
          break
      }
    } catch (error) {
      setMessage('Error loading data')
    }
    setLoading(false)
  }

  const deleteThread = async (id: string) => {
    if (!confirm('Are you sure you want to delete this thread?')) return
    
    const { error } = await supabase.from('threads').delete().eq('id', id)
    if (error) {
      setMessage('Error deleting thread')
    } else {
      setMessage('Thread deleted successfully')
      loadData()
    }
  }

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    
    const { error } = await supabase.from('posts').delete().eq('id', id)
    if (error) {
      setMessage('Error deleting post')
    } else {
      setMessage('Post deleted successfully')
      loadData()
    }
  }

  const updateUserRole = async (userId: string, newRole: 'admin' | 'mod' | 'member') => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId)
    
    if (error) {
      setMessage('Error updating user role')
    } else {
      setMessage('User role updated successfully')
      loadData()
    }
  }

  const addCategory = async (name: string) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    
    const { error } = await supabase
      .from('categories')
      .insert({ name, slug })
    
    if (error) {
      setMessage('Error adding category')
    } else {
      setMessage('Category added successfully')
      loadData()
    }
  }

  const deleteCategory = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category? This will also delete all threads in this category.')) return
    
    const { error } = await supabase.from('categories').delete().eq('id', id)
    if (error) {
      setMessage('Error deleting category')
    } else {
      setMessage('Category deleted successfully')
      loadData()
    }
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        {message && (
          <div className="rounded-md bg-green-100 px-3 py-2 text-sm text-green-800">
            {message}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'threads', label: 'Threads' },
            { id: 'posts', label: 'Posts' },
            { id: 'users', label: 'Users' },
            { id: 'categories', label: 'Categories' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-brand text-brand'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div>
          {activeTab === 'threads' && (
            <div className="grid gap-4">
              {threads.map((thread) => (
                <div key={thread.id} className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{thread.title}</h3>
                      <p className="text-sm text-gray-600">
                        Category: {(thread as any).categories?.name} | 
                        Author: {(thread as any).profiles?.username || 'Unknown'} |
                        {new Date(thread.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteThread(thread.id)}
                      className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="grid gap-4">
              {posts.map((post) => (
                <div key={post.id} className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{(post as any).threads?.title}</h3>
                      <p className="text-sm text-gray-600">
                        Author: {(post as any).profiles?.username || 'Unknown'} |
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                      <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                        {post.content_md.substring(0, 200)}...
                      </p>
                    </div>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="grid gap-4">
              {users.map((user) => (
                <div key={user.id} className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{user.username || 'No username'}</h3>
                      <p className="text-sm text-gray-600">
                        Role: {user.role} | 
                        {new Date(user.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={user.role}
                        onChange={(e) => updateUserRole(user.id, e.target.value as any)}
                        className="rounded-md border px-2 py-1 text-sm"
                      >
                        <option value="member">Member</option>
                        <option value="mod">Moderator</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="grid gap-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Add New Category</h3>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const name = formData.get('name') as string
                  if (name) {
                    addCategory(name)
                    e.currentTarget.reset()
                  }
                }} className="flex gap-2">
                  <input
                    name="name"
                    placeholder="Category name"
                    className="flex-1 rounded-md border px-3 py-2"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark"
                  >
                    Add
                  </button>
                </form>
              </div>
              
              {categories.map((category) => (
                <div key={category.id} className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-gray-600">
                        Slug: {category.slug} | 
                        {new Date(category.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
