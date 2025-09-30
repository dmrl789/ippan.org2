import { createClient as createSupabaseClient, type SupabaseClient, type User } from '@supabase/supabase-js'

type Session = {
  user: User | null
}

type AuthChangeEvent =
  | 'SIGNED_IN'
  | 'SIGNED_OUT'
  | 'USER_UPDATED'
  | 'PASSWORD_RECOVERY'
  | 'TOKEN_REFRESHED'
  | 'INITIAL_SESSION'

type AuthChangeHandler = (event: AuthChangeEvent, session: Session | null) => void

type Subscription = {
  unsubscribe: () => void
}

type AuthResponse<T = Record<string, unknown> | null> = Promise<{
  data: T
  error: { message: string } | null
}>

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const notConfiguredMessage =
  'Supabase is not configured. Provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable authentication.'

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey)

function createQueryBuilder<T>() {
  const response = Promise.resolve({ data: null as T | null, error: { message: notConfiguredMessage } })
  const builder: any = {
    select: () => builder,
    insert: () => builder,
    update: () => builder,
    upsert: () => builder,
    delete: () => builder,
    eq: () => builder,
    order: () => builder,
    limit: () => builder,
    single: () => builder,
    maybeSingle: () => builder,
    then: response.then.bind(response),
    catch: response.catch.bind(response),
    finally: response.finally.bind(response),
  }
  return builder
}

function createAuthStub() {
  let currentUser: User | null = null
  const listeners = new Set<AuthChangeHandler>()

  const notify = (event: AuthChangeEvent) => {
    const session = currentUser ? { user: currentUser } : { user: null }
    listeners.forEach((listener) => listener(event, session))
  }

  return {
    onAuthStateChange(callback: AuthChangeHandler) {
      listeners.add(callback)
      const subscription: Subscription = {
        unsubscribe: () => listeners.delete(callback),
      }
      callback('INITIAL_SESSION', { user: currentUser })
      return { data: { subscription } }
    },
    async getUser(): AuthResponse<{ user: User | null }> {
      return { data: { user: currentUser }, error: null }
    },
    async signInWithPassword(): AuthResponse {
      return { data: null, error: { message: notConfiguredMessage } }
    },
    async signInWithOtp(): AuthResponse {
      return { data: null, error: { message: notConfiguredMessage } }
    },
    async signUp(): AuthResponse {
      return { data: null, error: { message: notConfiguredMessage } }
    },
    async signOut(): AuthResponse {
      currentUser = null
      notify('SIGNED_OUT')
      return { data: null, error: null }
    },
  }
}

type StubSupabaseClient = {
  isStub: true
  auth: ReturnType<typeof createAuthStub>
  from: <T = unknown>() => ReturnType<typeof createQueryBuilder<T>>
  rpc: () => Promise<{ data: null; error: { message: string } }>
}

type SupabaseClientLike = SupabaseClient | StubSupabaseClient

let cachedClient: SupabaseClientLike | null = null

function createStubClient(): StubSupabaseClient {
  return {
    isStub: true,
    auth: createAuthStub(),
    from: <T = unknown>() => createQueryBuilder<T>(),
    rpc: () => Promise.resolve({ data: null, error: { message: notConfiguredMessage } }),
  }
}

export function createClient(): SupabaseClientLike {
  if (!isConfigured || !supabaseUrl || !supabaseAnonKey) {
    if (!cachedClient || !('isStub' in cachedClient)) {
      cachedClient = createStubClient()
    }
    return cachedClient
  }

  if (!cachedClient || 'isStub' in cachedClient) {
    cachedClient = createSupabaseClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  }

  return cachedClient
}

export function isSupabaseClientConfigured(client: SupabaseClientLike): client is SupabaseClient {
  return !('isStub' in client)
}

export const isSupabaseConfigured = isConfigured

export type { User }
