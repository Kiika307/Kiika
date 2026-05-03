-- Phase 4.5: Security hardening
-- 1. Replace auth.uid() with (select auth.uid()) in policies (perf: evaluated once per query)
-- 2. REVOKE EXECUTE on SECURITY DEFINER functions to prevent PostgREST RPC bypass

-- ─── appointments ───
drop policy if exists "appointments_owner_all" on public.appointments;
create policy "appointments_owner_all" on public.appointments
  for all using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);

-- ─── clients ───
drop policy if exists "clients_owner_all" on public.clients;
create policy "clients_owner_all" on public.clients
  for all using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);

-- ─── messages ───
drop policy if exists "messages_owner_all" on public.messages;
create policy "messages_owner_all" on public.messages
  for all using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);

-- ─── sessions ───
drop policy if exists "sessions_owner_all" on public.sessions;
create policy "sessions_owner_all" on public.sessions
  for all using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);

-- ─── profiles ───
drop policy if exists "profiles_self_select" on public.profiles;
create policy "profiles_self_select" on public.profiles
  for select using ((select auth.uid()) = id);

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update" on public.profiles
  for update using ((select auth.uid()) = id);

-- ─── protocols ───
drop policy if exists "protocols_read_all" on public.protocols;
create policy "protocols_read_all" on public.protocols
  for select using ((select auth.role()) = 'authenticated');

-- ─── client_notes ───
drop policy if exists "client_notes_owner_all" on public.client_notes;
create policy "client_notes_owner_all" on public.client_notes
  for all using (therapist_id = (select auth.uid()))
  with check (therapist_id = (select auth.uid()));

-- ─── client_protocols ───
drop policy if exists "client_protocols_owner_all" on public.client_protocols;
create policy "client_protocols_owner_all" on public.client_protocols
  for all using (therapist_id = (select auth.uid()))
  with check (therapist_id = (select auth.uid()));

-- ─── client_profile_snapshots ───
drop policy if exists "client_profile_snapshots_owner_all" on public.client_profile_snapshots;
create policy "client_profile_snapshots_owner_all" on public.client_profile_snapshots
  for all using (therapist_id = (select auth.uid()))
  with check (therapist_id = (select auth.uid()));

-- ─── client_tasks ───
drop policy if exists "client_tasks_owner_all" on public.client_tasks;
create policy "client_tasks_owner_all" on public.client_tasks
  for all using (therapist_id = (select auth.uid()))
  with check (therapist_id = (select auth.uid()));

-- ─── REVOKE EXECUTE on SECURITY DEFINER functions ───
-- These functions run with elevated privileges. Without REVOKE, any authenticated user
-- can call them via PostgREST RPC, bypassing RLS.
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;

-- Trigger functions we created in earlier migrations (defensive, in case any are SECURITY DEFINER)
revoke execute on function public.touch_client_notes_updated_at() from public, anon, authenticated;
revoke execute on function public.touch_client_protocols_updated_at() from public, anon, authenticated;
revoke execute on function public.touch_client_tasks_updated_at() from public, anon, authenticated;
