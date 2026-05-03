-- Add practice column to protocols (single practice per protocol)
alter table public.protocols
  add column if not exists practice text;

create index if not exists protocols_practice_idx on public.protocols(practice);

-- Backfill: all current protocols come from "The Big Book of NLP"
-- IDs 430-451 are the "Langage & hypnose" category → Hypnose Ericksonienne
-- The rest → PNL
update public.protocols
set practice = case
  when id between 430 and 451 then 'Hypnose Ericksonienne'
  else 'PNL'
end
where practice is null;
