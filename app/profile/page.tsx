'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import type { Database } from '@/lib/supabase/types'

type Profile = Database['public']['Tables']['profiles']['Row']

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth')
      return
    }

    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(data)
    setLoading(false)
  }

  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const avatar_url = formData.get('avatar_url') as string

    const { error } = await supabase
      .from('profiles')
      .update({ username, avatar_url })
      .eq('id', profile!.id)

    if (error) {
      setMessage('Error updating profile')
    } else {
      setMessage('Profile updated successfully')
      loadProfile()
    }
    setSaving(false)
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (!profile) {
    return <div className="text-center py-8">Profile not found</div>
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-2xl font-semibold">Profile</h1>
      
      <form onSubmit={updateProfile} className="grid gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            name="username"
            defaultValue={profile.username || ''}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter username"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Avatar URL
          </label>
          <input
            name="avatar_url"
            defaultValue={profile.avatar_url || ''}
            className="w-full rounded-md border px-3 py-2"
            placeholder="https://example.com/avatar.jpg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <div className="rounded-md border px-3 py-2 bg-gray-50 text-gray-600">
            {profile.role}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Update Profile'}
        </button>
      </form>
      
      {message && (
        <div className={`mt-3 text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </div>
      )}
    </div>
  )
}
