'use server'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from './types'

export function createClient() {
  return createServerComponentClient<Database>({ cookies })
}
