-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles linked to auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  avatar_url text,
  role text not null default 'member' check (role in ('admin','mod','member')),
  created_at timestamptz not null default now()
);

-- Forum categories
create table if not exists public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

-- Threads
create table if not exists public.threads (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  category_id uuid not null references public.categories(id) on delete cascade,
  author_id uuid not null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists threads_category_idx on public.threads(category_id);

-- Posts
create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  thread_id uuid not null references public.threads(id) on delete cascade,
  author_id uuid not null default auth.uid(),
  content_md text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists posts_thread_idx on public.posts(thread_id);

-- RLS
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.threads enable row level security;
alter table public.posts enable row level security;

-- Policies
-- profiles: users can read all, insert own row on first login, update own
create policy "profiles_read_all" on public.profiles
  for select using (true);
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- categories: everyone can read; only mods/admin can write
create policy "categories_read_all" on public.categories
  for select using (true);
create policy "categories_write_admin_mod" on public.categories
  for all using (exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','mod')
  ));

-- threads: read all; insert/update only by authenticated; delete by admin/mod or author
create policy "threads_read_all" on public.threads
  for select using (true);
create policy "threads_insert_authed" on public.threads
  for insert with check (auth.role() = 'authenticated');
create policy "threads_update_owner" on public.threads
  for update using (author_id = auth.uid());
create policy "threads_delete_admin_mod_or_owner" on public.threads
  for delete using (author_id = auth.uid() or exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','mod')
  ));

-- posts: read all; insert/update only by authenticated; delete by admin/mod or author
create policy "posts_read_all" on public.posts
  for select using (true);
create policy "posts_insert_authed" on public.posts
  for insert with check (auth.role() = 'authenticated');
create policy "posts_update_owner" on public.posts
  for update using (author_id = auth.uid());
create policy "posts_delete_admin_mod_or_owner" on public.posts
  for delete using (author_id = auth.uid() or exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','mod')
  ));

-- Seed example categories (run once)
insert into public.categories (name, slug)
values ('General', 'general'), ('Governance', 'governance'), ('Developers', 'developers')
on conflict (slug) do nothing;
