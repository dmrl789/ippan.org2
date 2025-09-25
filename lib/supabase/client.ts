export type User = {
  id: string
  email?: string | null
  [key: string]: unknown
}

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

const notConfiguredMessage =
  'Supabase is not configured. Provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable authentication.'

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

export function createClient() {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Supabase SDK is not installed in this environment. Falling back to a mock client.')
  }

  return {
    auth: createAuthStub(),
    from: <T = unknown>() => createQueryBuilder<T>(),
    rpc: () => Promise.resolve({ data: null, error: { message: notConfiguredMessage } }),
  }
}
