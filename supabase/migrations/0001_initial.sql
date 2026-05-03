-- INTIO — Initial schema (Phase 4)
-- Run in Supabase SQL editor or via `supabase db push`.

-- ============================================================================
-- profiles : 1-1 avec auth.users, profil thérapeute
-- ============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'therapist' check (role in ('therapist', 'admin')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_self_select" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles_self_update" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- clients : fiches clients du thérapeute
-- ============================================================================
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references public.profiles(id) on delete cascade,
  full_name text not null,
  email text,
  phone text,
  age int,
  status text not null default 'nouveau' check (status in ('actif', 'nouveau', 'inactif')),
  color text not null default '#7C5CBF',
  notes text,
  test_done boolean not null default false,
  profile_axes jsonb,
  profile_dominante text,
  themes text[] default '{}',
  objectifs text[] default '{}',
  blocages text[] default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.clients enable row level security;

create policy "clients_owner_all" on public.clients
  for all using (auth.uid() = therapist_id) with check (auth.uid() = therapist_id);

create index if not exists clients_therapist_idx on public.clients(therapist_id);

-- ============================================================================
-- appointments
-- ============================================================================
create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references public.profiles(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  starts_at timestamptz not null,
  duration_min int not null default 60,
  mode text not null default 'visio' check (mode in ('visio', 'presentiel')),
  protocol_id int,
  notes text,
  daily_room_url text,
  status text not null default 'planned' check (status in ('planned', 'done', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.appointments enable row level security;

create policy "appointments_owner_all" on public.appointments
  for all using (auth.uid() = therapist_id) with check (auth.uid() = therapist_id);

create index if not exists appointments_therapist_starts_idx
  on public.appointments(therapist_id, starts_at);

-- ============================================================================
-- sessions : compte-rendu post-séance
-- ============================================================================
create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  appointment_id uuid not null references public.appointments(id) on delete cascade,
  therapist_id uuid not null references public.profiles(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  protocol_id int,
  summary text,
  observations text,
  next_steps text,
  created_at timestamptz not null default now()
);

alter table public.sessions enable row level security;

create policy "sessions_owner_all" on public.sessions
  for all using (auth.uid() = therapist_id) with check (auth.uid() = therapist_id);

-- ============================================================================
-- messages
-- ============================================================================
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references public.profiles(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  from_role text not null check (from_role in ('therapist', 'client')),
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

create policy "messages_owner_all" on public.messages
  for all using (auth.uid() = therapist_id) with check (auth.uid() = therapist_id);

create index if not exists messages_thread_idx
  on public.messages(therapist_id, client_id, created_at desc);

-- ============================================================================
-- updated_at trigger
-- ============================================================================
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

drop trigger if exists touch_profiles on public.profiles;
create trigger touch_profiles before update on public.profiles
  for each row execute function public.touch_updated_at();

drop trigger if exists touch_clients on public.clients;
create trigger touch_clients before update on public.clients
  for each row execute function public.touch_updated_at();
