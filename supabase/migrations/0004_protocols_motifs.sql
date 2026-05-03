-- Add motifs column (canonical client motifs, multiple per protocol)
alter table public.protocols
  add column if not exists motifs text[] not null default '{}';

create index if not exists protocols_motifs_idx on public.protocols using gin(motifs);
