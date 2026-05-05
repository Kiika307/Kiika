-- 0016 — Hardening : aligne la liste des MIME types du bucket "documents"
-- avec la constante ALLOWED_DOC_MIME définie dans src/lib/actions.ts.
-- Évite la divergence applicatif/storage qui pouvait laisser passer des fichiers
-- HEIC/HEIF/Excel/CSV au niveau applicatif mais les faire rejeter par Storage.

update storage.buckets
set allowed_mime_types = array[
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
  'text/csv'
]
where id = 'documents';
