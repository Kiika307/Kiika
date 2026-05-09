import { FileText, Download } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

const CATEGORY_LABEL: Record<string, string> = {
  questionnaire: "Questionnaire",
  ordonnance: "Ordonnance",
  compte_rendu_externe: "Compte-rendu externe",
  consentement: "Consentement",
  autre: "Autre",
};

export default async function PortalDocumentsPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const { data: client } = await supabase
    .from("clients")
    .select("id")
    .eq("user_id", auth.user!.id)
    .single();

  const { data: documents } = await supabase
    .from("client_documents")
    .select("id, filename, mime_type, size_bytes, category, description, created_at, storage_path")
    .eq("client_id", client!.id)
    .order("created_at", { ascending: false });

  const docs = documents ?? [];

  return (
    <>
      <header className="mb-6">
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Mes documents
        </h1>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-1">
          Documents partagés par votre praticien·ne — {docs.length} fichier
          {docs.length > 1 ? "s" : ""}.
        </p>
      </header>

      {docs.length === 0 ? (
        <div
          className="rounded-[14px] bg-[var(--color-white-soft)] p-6 text-[13px] text-[var(--color-gray-soft)] italic text-center"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          Aucun document partagé pour le moment.
        </div>
      ) : (
        <ul className="space-y-2">
          {docs.map((d) => (
            <li
              key={d.id}
              className="rounded-[12px] bg-[var(--color-white-soft)] px-4 py-3 flex items-center gap-3"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <FileText size={18} className="text-[var(--color-gray-soft)]" aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-semibold text-[var(--color-navy)] truncate">
                  {d.filename}
                </div>
                <div className="text-[11.5px] text-[var(--color-gray-soft)]">
                  {d.category && CATEGORY_LABEL[d.category]}
                  {d.category && " · "}
                  {formatSize(d.size_bytes)} · {formatDate(d.created_at)}
                </div>
                {d.description && (
                  <p className="text-[12px] text-[var(--color-navy)]/70 mt-0.5">{d.description}</p>
                )}
              </div>
              <a
                href={`/portail/documents/download/${d.id}`}
                className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] bg-white px-3 py-2 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]"
              >
                <Download size={12} />
                Télécharger
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
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
