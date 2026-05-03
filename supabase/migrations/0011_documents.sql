-- Phase 5B: Documents (Supabase Storage + metadata table)

-- 1. Private bucket "documents"
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'documents',
  'documents',
  false,
  52428800, -- 50 MB
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- 2. Storage RLS — owner has full CRUD on its own files
-- Path convention: {therapist_id}/{client_id}/{filename}
drop policy if exists "documents_owner_select" on storage.objects;
create policy "documents_owner_select" on storage.objects
  for select using (
    bucket_id = 'documents'
    and (select auth.uid())::text = (storage.foldername(name))[1]
  );

drop policy if exists "documents_owner_insert" on storage.objects;
create policy "documents_owner_insert" on storage.objects
  for insert with check (
    bucket_id = 'documents'
    and (select auth.uid())::text = (storage.foldername(name))[1]
  );

drop policy if exists "documents_owner_update" on storage.objects;
create policy "documents_owner_update" on storage.objects
  for update using (
    bucket_id = 'documents'
    and (select auth.uid())::text = (storage.foldername(name))[1]
  );

drop policy if exists "documents_owner_delete" on storage.objects;
create policy "documents_owner_delete" on storage.objects
  for delete using (
    bucket_id = 'documents'
    and (select auth.uid())::text = (storage.foldername(name))[1]
  );

-- 3. Metadata table
create table if not exists public.client_documents (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  storage_path text not null,
  filename text not null,
  mime_type text,
  size_bytes bigint,
  category text check (category in ('questionnaire', 'ordonnance', 'compte_rendu_externe', 'consentement', 'autre')),
  description text,
  created_at timestamptz not null default now()
);

create index if not exists client_documents_client_idx on public.client_documents(client_id, created_at desc);

alter table public.client_documents enable row level security;
drop policy if exists "client_documents_owner_all" on public.client_documents;
create policy "client_documents_owner_all" on public.client_documents
  for all using (therapist_id = (select auth.uid()))
  with check (therapist_id = (select auth.uid()));
