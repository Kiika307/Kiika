"use client";

import { useState, useTransition } from "react";
import { Save } from "lucide-react";
import { toast } from "sonner";
import { updateTherapistBilling } from "@/lib/actions";
import type { TherapistBilling } from "@/lib/data";

interface BillingFormProps {
  initial: TherapistBilling;
}

export function BillingForm({ initial }: BillingFormProps) {
  const [pending, startTransition] = useTransition();
  const [businessName, setBusinessName] = useState(initial.businessName ?? "");
  const [legalForm, setLegalForm] = useState(initial.legalForm ?? "");
  const [addressLine1, setAddressLine1] = useState(initial.addressLine1 ?? "");
  const [addressLine2, setAddressLine2] = useState(initial.addressLine2 ?? "");
  const [postalCode, setPostalCode] = useState(initial.postalCode ?? "");
  const [city, setCity] = useState(initial.city ?? "");
  const [country, setCountry] = useState(initial.country ?? "France");
  const [phone, setPhone] = useState(initial.phone ?? "");
  const [siret, setSiret] = useState(initial.siret ?? "");
  const [apeCode, setApeCode] = useState(initial.apeCode ?? "");
  const [rcs, setRcs] = useState(initial.rcs ?? "");
  const [tvaRegime, setTvaRegime] = useState<TherapistBilling["tvaRegime"]>(initial.tvaRegime);
  const [tvaRate, setTvaRate] = useState(initial.tvaRate?.toString() ?? "20");
  const [tvaNumber, setTvaNumber] = useState(initial.tvaNumber ?? "");
  const [iban, setIban] = useState(initial.iban ?? "");
  const [bic, setBic] = useState(initial.bic ?? "");
  const [bankName, setBankName] = useState(initial.bankName ?? "");
  const [paymentTerms, setPaymentTerms] = useState(
    initial.paymentTerms ?? "Paiement à réception de la facture",
  );
  const [invoiceFooter, setInvoiceFooter] = useState(initial.invoiceFooter ?? "");
  const [logoUrl, setLogoUrl] = useState(initial.logoUrl ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const res = await updateTherapistBilling({
        businessName,
        legalForm,
        addressLine1,
        addressLine2,
        postalCode,
        city,
        country,
        phone,
        siret,
        apeCode,
        rcs,
        tvaNumber,
        tvaRegime,
        tvaRate: tvaRegime === "assujetti" && tvaRate ? Number(tvaRate) : null,
        iban,
        bic,
        bankName,
        invoiceFooter,
        paymentTerms,
        logoUrl,
      });
      if (res.ok) {
        toast.success("Coordonnées de facturation enregistrées");
      } else {
        toast.error(res.error ?? "Erreur");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[18px] p-6 space-y-5"
      style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
    >
      <div>
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
          Coordonnées de facturation
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)]">
          Mentions légales obligatoires affichées sur les factures émises depuis la fiche
          client.
        </p>
      </div>

      <Section title="Identité légale">
        <Field label="Raison sociale / Nom commercial" value={businessName} onChange={setBusinessName} placeholder="Ex : Cabinet Varinka Robert" />
        <Field label="Forme juridique" value={legalForm} onChange={setLegalForm} placeholder="Ex : Micro-entreprise, EI, EURL, SASU…" />
        <Field
          label="URL du logo (optionnel)"
          value={logoUrl}
          onChange={setLogoUrl}
          placeholder="https://… (image JPG/PNG accessible publiquement)"
        />
        {logoUrl && (
          <div className="rounded-[10px] border border-[var(--color-light-gray)] p-3 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrl}
              alt="Aperçu du logo"
              className="max-h-20 object-contain"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
          </div>
        )}
      </Section>

      <Section title="Adresse">
        <Field label="Adresse" value={addressLine1} onChange={setAddressLine1} />
        <Field label="Complément" value={addressLine2} onChange={setAddressLine2} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Field label="Code postal" value={postalCode} onChange={setPostalCode} />
          <Field label="Ville" value={city} onChange={setCity} className="col-span-2" />
        </div>
        <Field label="Pays" value={country} onChange={setCountry} />
        <Field label="Téléphone" value={phone} onChange={setPhone} type="tel" />
      </Section>

      <Section title="Numéros officiels">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="SIRET" value={siret} onChange={setSiret} placeholder="14 chiffres" />
          <Field label="Code APE / NAF" value={apeCode} onChange={setApeCode} placeholder="Ex : 8690F" />
        </div>
        <Field label="RCS / RM (si applicable)" value={rcs} onChange={setRcs} placeholder="Ex : RCS Ajaccio 928 907 088" />
      </Section>

      <Section title="TVA">
        <label className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
            Régime
          </span>
          <select
            value={tvaRegime}
            onChange={(e) => setTvaRegime(e.target.value as TherapistBilling["tvaRegime"])}
            className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
          >
            <option value="franchise">Franchise en base (TVA non applicable, art. 293 B du CGI)</option>
            <option value="assujetti">Assujetti à la TVA</option>
          </select>
        </label>
        {tvaRegime === "assujetti" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Taux TVA (%)" value={tvaRate} onChange={setTvaRate} type="number" />
            <Field label="N° TVA intracommunautaire" value={tvaNumber} onChange={setTvaNumber} placeholder="FRxx xxxxxxxxx" />
          </div>
        )}
      </Section>

      <Section title="Coordonnées bancaires">
        <Field label="Banque" value={bankName} onChange={setBankName} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Field label="IBAN" value={iban} onChange={setIban} className="col-span-2" />
          <Field label="BIC" value={bic} onChange={setBic} />
        </div>
      </Section>

      <Section title="Modalités">
        <Field label="Conditions de règlement" value={paymentTerms} onChange={setPaymentTerms} />
        <label className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
            Mentions de pied de facture (libre)
          </span>
          <textarea
            value={invoiceFooter}
            onChange={(e) => setInvoiceFooter(e.target.value)}
            rows={3}
            placeholder="Ex : Pénalités de retard 3 fois le taux d'intérêt légal. Indemnité forfaitaire de recouvrement : 40 €."
            className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
          />
        </label>
      </Section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <Save size={14} aria-hidden="true" />
          {pending ? "Enregistrement…" : "Enregistrer"}
        </button>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-[13px] font-semibold text-[var(--color-navy)]">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1 ${className ?? ""}`}>
      <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
      />
    </label>
  );
}
