"use client";

import { useState, useTransition } from "react";
import { Pencil, Save, X, ShieldCheck, Plus } from "lucide-react";
import { toast } from "sonner";
import { FormField, FormSelect, FormTextarea } from "@/components/ui/FormField";
import { updateClientInfo, recordClientConsent } from "@/lib/actions";
import type { Client, ClientConsent, ClientInfo, Sexe, SignatureMethod } from "@/lib/types";

interface InformationsTabProps {
  client: Client;
  consents: ClientConsent[];
}

const SEXE_OPTIONS: Sexe[] = ["F", "M", "Autre", "Non précisé"];
const SITUATION_OPTIONS = [
  "Célibataire",
  "En couple",
  "Marié(e) / Pacsé(e)",
  "Divorcé(e) / Séparé(e)",
  "Veuf / Veuve",
];

export function InformationsTab({ client, consents }: InformationsTabProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<ClientInfo>(client.info);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof ClientInfo>(key: K, value: ClientInfo[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function handleSave() {
    setError(null);
    startTransition(async () => {
      const res = await updateClientInfo(client.id, draft);
      if (res.ok) {
        setEditing(false);
        toast.success("Informations enregistrées");
      } else {
        setError(res.error ?? "Erreur");
        toast.error(res.error ?? "Impossible d'enregistrer");
      }
    });
  }

  function handleCancel() {
    setDraft(client.info);
    setEditing(false);
    setError(null);
  }

  if (!editing) {
    return (
      <div className="grid gap-5 lg:grid-cols-2">
        <Section title="État civil" onEdit={() => setEditing(true)}>
          <Field label="Date de naissance" value={formatDate(client.info.dateNaissance)} />
          <Field label="Sexe" value={client.info.sexe} />
          <Field label="Profession" value={client.info.profession} />
          <Field label="Situation familiale" value={client.info.situationFamiliale} />
          <Field label="Adresse" value={client.info.adresse} />
        </Section>

        <Section title="Contacts médicaux">
          <Field label="Médecin traitant" value={client.info.medecinTraitant} />
          <Field label="Personne référente" value={client.info.personneReferente} />
        </Section>

        <Section title="Antécédents & traitements" wide>
          <Field label="Antécédents médicaux" value={client.info.antecedentsMedicaux} multiline />
          <Field label="Antécédents psychologiques" value={client.info.antecedentsPsy} multiline />
          <Field label="Traitements en cours" value={client.info.traitementsEnCours} multiline />
        </Section>

        <ConsentsSection clientId={client.id} consents={consents} />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {error && (
        <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
          {error}
        </div>
      )}

      <FormSection title="État civil">
        <FormField
          label="Date de naissance"
          type="date"
          value={draft.dateNaissance ?? ""}
          onChange={(e) => update("dateNaissance", e.target.value || null)}
        />
        <FormSelect
          label="Sexe"
          value={draft.sexe ?? ""}
          onChange={(e) => update("sexe", (e.target.value || null) as Sexe | null)}
        >
          <option value="">—</option>
          {SEXE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </FormSelect>
        <FormField
          label="Profession"
          type="text"
          value={draft.profession ?? ""}
          onChange={(e) => update("profession", e.target.value || null)}
        />
        <FormSelect
          label="Situation familiale"
          value={draft.situationFamiliale ?? ""}
          onChange={(e) => update("situationFamiliale", e.target.value || null)}
        >
          <option value="">—</option>
          {SITUATION_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </FormSelect>
        <FormField
          label="Adresse"
          type="text"
          value={draft.adresse ?? ""}
          onChange={(e) => update("adresse", e.target.value || null)}
          className="md:col-span-2"
        />
      </FormSection>

      <FormSection title="Contacts médicaux">
        <FormField
          label="Médecin traitant"
          type="text"
          value={draft.medecinTraitant ?? ""}
          onChange={(e) => update("medecinTraitant", e.target.value || null)}
        />
        <FormField
          label="Personne référente"
          type="text"
          value={draft.personneReferente ?? ""}
          onChange={(e) => update("personneReferente", e.target.value || null)}
        />
      </FormSection>

      <FormSection title="Antécédents & traitements">
        <div className="md:col-span-2">
          <FormTextarea
            label="Antécédents médicaux"
            rows={3}
            value={draft.antecedentsMedicaux ?? ""}
            onChange={(e) => update("antecedentsMedicaux", e.target.value || null)}
          />
        </div>
        <div className="md:col-span-2">
          <FormTextarea
            label="Antécédents psychologiques"
            rows={3}
            value={draft.antecedentsPsy ?? ""}
            onChange={(e) => update("antecedentsPsy", e.target.value || null)}
          />
        </div>
        <div className="md:col-span-2">
          <FormTextarea
            label="Traitements en cours"
            rows={3}
            value={draft.traitementsEnCours ?? ""}
            onChange={(e) => update("traitementsEnCours", e.target.value || null)}
          />
        </div>
      </FormSection>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={handleCancel}
          disabled={pending}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-4 py-2 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
        >
          <X size={14} />
          Annuler
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={pending}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <Save size={14} />
          {pending ? "Enregistrement…" : "Enregistrer"}
        </button>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  onEdit,
  wide,
}: {
  title: string;
  children: React.ReactNode;
  onEdit?: () => void;
  wide?: boolean;
}) {
  return (
    <section
      className={`rounded-[16px] bg-[var(--color-white-soft)] p-5 ${wide ? "lg:col-span-2" : ""}`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-center justify-between mb-3">
        <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">{title}</h3>
        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--color-gold)] hover:underline"
          >
            <Pencil size={12} />
            Modifier
          </button>
        )}
      </header>
      <div className="space-y-2.5">{children}</div>
    </section>
  );
}

function Field({
  label,
  value,
  multiline,
}: {
  label: string;
  value: string | null;
  multiline?: boolean;
}) {
  return (
    <div className={multiline ? "" : "flex items-baseline gap-3"}>
      <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)] min-w-[140px]">
        {label}
      </div>
      <div
        className={`text-[13px] ${value ? "text-[var(--color-navy)]" : "text-[var(--color-gray-soft)] italic"} ${multiline ? "mt-1 whitespace-pre-wrap" : ""}`}
      >
        {value ?? "Non renseigné"}
      </div>
    </div>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section
      className="rounded-[16px] bg-[var(--color-white-soft)] p-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-4">{title}</h3>
      <div className="grid gap-3 md:grid-cols-2">{children}</div>
    </section>
  );
}

function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
}

const SIGNATURE_METHOD_LABEL: Record<SignatureMethod, string> = {
  electronique: "Électronique",
  papier: "Papier",
  verbal: "Verbal",
};

function ConsentsSection({
  clientId,
  consents,
}: {
  clientId: string;
  consents: ClientConsent[];
}) {
  const [adding, setAdding] = useState(false);
  const [method, setMethod] = useState<SignatureMethod>("papier");
  const [notes, setNotes] = useState("");
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const latest = consents[0] ?? null;

  return (
    <section
      className="rounded-[16px] bg-[var(--color-white-soft)] p-5 lg:col-span-2"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-[var(--color-teal)]" />
          <div>
            <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">
              Consentement RGPD
            </h3>
            <p className="text-[11px] text-[var(--color-gray-soft)] mt-0.5">
              {latest
                ? `Recueilli le ${formatConsentDate(latest.signedAt)} (${SIGNATURE_METHOD_LABEL[latest.signatureMethod]} · ${latest.version})`
                : "Aucun consentement enregistré"}
            </p>
          </div>
        </div>
        {!adding && (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-1.5 text-[12px] font-semibold text-white"
            style={{ backgroundColor: latest ? "var(--color-navy)" : "var(--color-gold)" }}
          >
            <Plus size={12} />
            {latest ? "Nouveau" : "Recueillir le consentement"}
          </button>
        )}
      </header>

      {error && (
        <div className="mb-3 rounded-[10px] bg-red-50 border border-red-200 px-3 py-2 text-[12px] text-red-700">
          {error}
        </div>
      )}

      {adding && (
        <div className="space-y-3 mb-4">
          <div className="grid grid-cols-2 gap-3">
            <FormSelect
              label="Méthode de signature"
              value={method}
              onChange={(e) => setMethod(e.target.value as SignatureMethod)}
            >
              {(Object.keys(SIGNATURE_METHOD_LABEL) as SignatureMethod[]).map((m) => (
                <option key={m} value={m}>{SIGNATURE_METHOD_LABEL[m]}</option>
              ))}
            </FormSelect>
          </div>
          <FormTextarea
            label="Notes"
            rows={2}
            placeholder="Notes (référence document, conditions particulières…)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setAdding(false);
                setNotes("");
              }}
              disabled={pending}
              className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
            >
              <X size={12} />
              Annuler
            </button>
            <button
              type="button"
              onClick={() => {
                setError(null);
                startTransition(async () => {
                  const res = await recordClientConsent({
                    clientId,
                    signatureMethod: method,
                    notes: notes.trim() || null,
                  });
                  if (res.ok) {
                    setAdding(false);
                    setNotes("");
                    toast.success("Consentement enregistré");
                  } else {
                    setError(res.error ?? "Erreur");
                    toast.error(res.error ?? "Impossible d'enregistrer");
                  }
                });
              }}
              disabled={pending}
              className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              <Save size={12} />
              {pending ? "…" : "Enregistrer"}
            </button>
          </div>
        </div>
      )}

      {consents.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
            Historique
          </div>
          {consents.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-3 text-[12px] py-1.5 border-b border-[var(--color-light-gray)] last:border-0"
            >
              <span className="text-[var(--color-navy)] font-semibold w-32">
                {formatConsentDate(c.signedAt)}
              </span>
              <span className="text-[var(--color-gray-soft)] w-28">
                {SIGNATURE_METHOD_LABEL[c.signatureMethod]}
              </span>
              <span className="text-[var(--color-gray-soft)] w-12">{c.version}</span>
              <span className="flex-1 text-[var(--color-navy)]/70 truncate">{c.notes ?? ""}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function formatConsentDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
