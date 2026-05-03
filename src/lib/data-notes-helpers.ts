// Internal: shared shape mappers for client notes / history (kept separate to avoid bloating data.ts).
import type { ClientNote, NoteKind } from "@/lib/types";

export interface ClientNoteRow {
  id: string;
  client_id: string;
  appointment_id: string | null;
  kind: NoteKind;
  title: string | null;
  body: string;
  created_at: string;
  updated_at: string;
}

export function mapNoteRow(row: ClientNoteRow): ClientNote {
  return {
    id: row.id,
    clientId: row.client_id,
    appointmentId: row.appointment_id,
    kind: row.kind,
    title: row.title,
    body: row.body,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
