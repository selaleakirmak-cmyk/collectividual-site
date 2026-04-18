-- Collectividual / Supabase starter schema
-- Safe version with robust JSON handling for auth.users metadata

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  role text not null default 'member' check (role in ('member', 'admin')),
  metadata jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  user_meta jsonb;
  user_full_name text;
begin
  user_meta := coalesce(new.raw_user_meta_data, '{}'::jsonb);

  user_full_name := coalesce(
    user_meta->>'full_name',
    user_meta->>'name',
    split_part(coalesce(new.email, ''), '@', 1),
    ''
  );

  insert into public.profiles (
    id,
    email,
    full_name,
    metadata
  )
  values (
    new.id,
    new.email,
    user_full_name,
    user_meta
  )
  on conflict (id) do update
    set email = excluded.email,
        full_name = coalesce(nullif(excluded.full_name, ''), public.profiles.full_name),
        metadata = coalesce(excluded.metadata, public.profiles.metadata),
        updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

-- RLS policies

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

drop policy if exists "Admins can read all profiles" on public.profiles;
create policy "Admins can read all profiles"
on public.profiles
for select
to authenticated
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create table if not exists public.join_requests (
  id bigserial primary key,
  email text not null,
  name text,
  note text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.join_requests enable row level security;

drop policy if exists "Anyone can create join request" on public.join_requests;
create policy "Anyone can create join request"
on public.join_requests
for insert
to anon, authenticated
with check (true);

drop policy if exists "Admins can read join requests" on public.join_requests;
create policy "Admins can read join requests"
on public.join_requests
for select
to authenticated
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

drop policy if exists "Admins can update join requests" on public.join_requests;
create policy "Admins can update join requests"
on public.join_requests
for update
to authenticated
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
)
with check (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);
