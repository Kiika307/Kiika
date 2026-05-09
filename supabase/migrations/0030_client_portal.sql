-- Portail client : auth dédiée par client + acceptation CGU/CGV/RGPD + messagerie.

-- 1. Lien fiche client ↔ utilisateur auth + invitation + acceptations
alter table public.clients
  add column if not exists user_id uuid references auth.users(id) on delete set null,
  add column if not exists portal_invite_token text,
  add column if not exists portal_invite_expires_at timestamptz,
  add column if not exists portal_invited_at timestamptz,
  add column if not exists cgu_accepted_at timestamptz,
  add column if not exists cgv_accepted_at timestamptz,
  add column if not exists rgpd_accepted_at timestamptz;

create unique index if not exists clients_user_id_uniq
  on public.clients(user_id) where user_id is not null;

create unique index if not exists clients_portal_invite_token_uniq
  on public.clients(portal_invite_token) where portal_invite_token is not null;

-- 2. Permettre au client de lire et MAJ sa propre fiche
drop policy if exists "clients_self_read" on public.clients;
create policy "clients_self_read" on public.clients
  for select using (user_id = auth.uid());

drop policy if exists "clients_self_update" on public.clients;
create policy "clients_self_update" on public.clients
  for update using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- 3. Lecture client sur appointments / client_documents / client_tasks
drop policy if exists "appointments_client_read" on public.appointments;
create policy "appointments_client_read" on public.appointments
  for select using (
    exists (
      select 1 from public.clients c
      where c.id = appointments.client_id and c.user_id = auth.uid()
    )
  );

drop policy if exists "client_documents_client_read" on public.client_documents;
create policy "client_documents_client_read" on public.client_documents
  for select using (
    exists (
      select 1 from public.clients c
      where c.id = client_documents.client_id and c.user_id = auth.uid()
    )
  );

drop policy if exists "client_tasks_client_read" on public.client_tasks;
create policy "client_tasks_client_read" on public.client_tasks
  for select using (
    exists (
      select 1 from public.clients c
      where c.id = client_tasks.client_id and c.user_id = auth.uid()
    )
  );

-- Le client peut renseigner son retour (client_feedback) et marquer "completed"
drop policy if exists "client_tasks_client_update" on public.client_tasks;
create policy "client_tasks_client_update" on public.client_tasks
  for update using (
    exists (
      select 1 from public.clients c
      where c.id = client_tasks.client_id and c.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.clients c
      where c.id = client_tasks.client_id and c.user_id = auth.uid()
    )
  );

-- 4. Messagerie thérapeute ↔ client
create table if not exists public.client_messages (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  therapist_id uuid not null references auth.users(id) on delete cascade,
  sender_role text not null check (sender_role in ('therapist','client')),
  body text not null check (length(body) between 1 and 10000),
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists client_messages_client_idx
  on public.client_messages(client_id, created_at desc);

alter table public.client_messages enable row level security;

drop policy if exists "client_messages_therapist_all" on public.client_messages;
create policy "client_messages_therapist_all" on public.client_messages
  for all using (auth.uid() = therapist_id)
  with check (auth.uid() = therapist_id);

drop policy if exists "client_messages_client_read" on public.client_messages;
create policy "client_messages_client_read" on public.client_messages
  for select using (
    exists (
      select 1 from public.clients c
      where c.id = client_messages.client_id and c.user_id = auth.uid()
    )
  );

drop policy if exists "client_messages_client_insert" on public.client_messages;
create policy "client_messages_client_insert" on public.client_messages
  for insert with check (
    sender_role = 'client'
    and exists (
      select 1 from public.clients c
      where c.id = client_messages.client_id
        and c.user_id = auth.uid()
        and c.therapist_id = client_messages.therapist_id
    )
  );

drop policy if exists "client_messages_client_mark_read" on public.client_messages;
create policy "client_messages_client_mark_read" on public.client_messages
  for update using (
    exists (
      select 1 from public.clients c
      where c.id = client_messages.client_id and c.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.clients c
      where c.id = client_messages.client_id and c.user_id = auth.uid()
    )
  );
