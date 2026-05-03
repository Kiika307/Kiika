"use client";

import { useState, useTransition, useRef } from "react";
import { Trash2, Download, FileText, FolderOpen } from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import { recordClientDocument, deleteClientDocument } from "@/lib/actions";
import { getDocumentSignedUrl } from "@/lib/storage";
import { EmptyState } from "@/components/ui/EmptyState";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import type { ClientDocument, DocumentCategory } from "@/lib/types";

interface DocumentsTabProps {
  clientId: string;
  documents: ClientDocument[];
}

const CATEGORY_LABEL: Record<DocumentCategory, string> = {
  questionnaire: "Questionnaire",
  ordonnance: "Ordonnance",
  compte_rendu_externe: "Compte-rendu externe",
  consentement: "Consentement",
  autre: "Autre",
};

export function DocumentsTab({ clientId, documents }: DocumentsTabProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<DocumentCategory>("autre");
  const [description, setDescription] = useState("");
  const { confirm, dialog } = useConfirm();

  async function handleUpload(file: File) {
    setError(null);
    setUploading(true);
    try {
      const supabase = createClient();
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) throw new Error("Non authentifié");

      const safeName = file.name.replace(/[^\w.\- ]/g, "_");
      const path = `${auth.user.id}/${clientId}/${Date.now()}_${safeName}`;

      const { error: upErr } = await supabase.storage
        .from("documents")
        .upload(path, file, { contentType: file.type, upsert: false });
      if (upErr) throw new Error(upErr.message);

      const res = await recordClientDocument({
        clientId,
        storagePath: path,
        filename: file.name,
        mimeType: file.type || null,
        sizeBytes: file.size,
        category,
        description: description.trim() || null,
      });
      if (!res.ok) throw new Error(res.error ?? "Erreur");
      setDescription("");
      toast.success(`Document « ${file.name} » ajouté`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur upload";
      setError(msg);
      toast.error(`Échec upload : ${msg}`);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function handleDownload(doc: ClientDocument) {
    const res = await getDocumentSignedUrl(doc.storagePath, 600);
    if (res.ok && res.url) {
      window.open(res.url, "_blank");
    } else {
      setError(res.error ?? "Erreur téléchargement");
      toast.error(res.error ?? "Impossible de télécharger");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
          Documents
          <span className="ml-2 text-[12px] font-normal text-[var(--color-gray-soft)]">
            {documents.length} fichier{documents.length > 1 ? "s" : ""}
          </span>
        </h2>
      </div>

      {error && (
        <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
          {error}
        </div>
      )}

      <div
        className="rounded-[16px] bg-white p-5 space-y-3"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
              Catégorie
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as DocumentCategory)}
              className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
            >
              {(Object.keys(CATEGORY_LABEL) as DocumentCategory[]).map((c) => (
                <option key={c} value={c}>{CATEGORY_LABEL[c]}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
              Description (optionnel)
            </span>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
            />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.txt"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleUpload(f);
            }}
            disabled={uploading}
            className="text-[13px] text-[var(--color-navy)] file:mr-3 file:rounded-[8px] file:border-0 file:bg-[var(--color-gold)] file:px-3 file:py-1.5 file:text-[12px] file:font-semibold file:text-white file:cursor-pointer disabled:opacity-50"
          />
          {uploading && (
            <span className="text-[12px] text-[var(--color-gray-soft)]">
              Upload en cours…
            </span>
          )}
        </div>
        <p className="text-[11px] text-[var(--color-gray-soft)]">
          PDF, JPG, PNG, WEBP, DOC, DOCX, TXT — max 50 MB
        </p>
      </div>

      {documents.length === 0 ? (
        <div
          className="rounded-[16px]"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <EmptyState
            icon={FolderOpen}
            title="Aucun document"
            message="Importez questionnaires, ordonnances, comptes-rendus ou consentements via le formulaire ci-dessus."
          />
        </div>
      ) : (
        <div className="space-y-2">
          {documents.map((doc) => (
            <article
              key={doc.id}
              className="rounded-[12px] bg-white px-4 py-3 flex items-center gap-3"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <FileText size={18} className="text-[var(--color-gray-soft)]" />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[var(--color-navy)] truncate">
                  {doc.filename}
                </div>
                <div className="text-[11px] text-[var(--color-gray-soft)]">
                  {doc.category && CATEGORY_LABEL[doc.category]}
                  {doc.category && " · "}
                  {formatSize(doc.sizeBytes)} · {formatDate(doc.createdAt)}
                </div>
                {doc.description && (
                  <p className="text-[12px] text-[var(--color-navy)]/70 mt-1">{doc.description}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => handleDownload(doc)}
                className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)]"
                title="Télécharger"
                aria-label={`Télécharger ${doc.filename}`}
              >
                <Download size={14} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={async () => {
                  const ok = await confirm({
                    title: "Supprimer le document",
                    message: `Êtes-vous sûr de vouloir supprimer "${doc.filename}" ? Cette action est irréversible.`,
                    confirmLabel: "Supprimer",
                    destructive: true,
                  });
                  if (!ok) return;
                  startTransition(async () => {
                    const res = await deleteClientDocument(doc.id);
                    if (res.ok) {
                      toast.success("Document supprimé");
                    } else {
                      setError(res.error ?? "Erreur");
                      toast.error(res.error ?? "Impossible de supprimer");
                    }
                  });
                }}
                disabled={pending}
                className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                title="Supprimer"
                aria-label={`Supprimer ${doc.filename}`}
              >
                <Trash2 size={14} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      )}
      {dialog}
    </div>
  );
}

function formatSize(bytes: number | null): string {
  if (bytes == null) return "—";
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / 1024 / 1024).toFixed(1)} Mo`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
