// Minimal typing surface; you can expand from Supabase > Settings > Types
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; username: string | null; avatar_url: string | null; role: 'admin'|'mod'|'member'; created_at: string },
        Insert: { id: string; username?: string | null; avatar_url?: string | null; role?: 'admin'|'mod'|'member' },
        Update: { username?: string | null; avatar_url?: string | null; role?: 'admin'|'mod'|'member' }
      },
      categories: {
        Row: { id: string; name: string; slug: string; created_at: string },
        Insert: { id?: string; name: string; slug: string },
        Update: { name?: string; slug?: string }
      },
      threads: {
        Row: { id: string; title: string; slug: string; category_id: string; author_id: string; created_at: string; updated_at: string },
        Insert: { id?: string; title: string; slug: string; category_id: string },
        Update: { title?: string; slug?: string; category_id?: string }
      },
      posts: {
        Row: { id: string; thread_id: string; author_id: string; content_md: string; created_at: string; updated_at: string },
        Insert: { id?: string; thread_id: string; content_md: string },
        Update: { content_md?: string }
      }
    }
  }
}
