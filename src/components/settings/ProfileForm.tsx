"use client";

import { useRef, useState, useTransition } from "react";
import { Camera, Loader2, Trash2, Check } from "lucide-react";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/Avatar";
import { updateProfile, uploadAvatar, removeAvatar } from "@/lib/actions";

interface ProfileFormProps {
  initialFullName: string;
  initialRole: string;
  initialAvatarUrl: string | null;
  initials: string;
  email: string;
}

export function ProfileForm({
  initialFullName,
  initialRole,
  initialAvatarUrl,
  initials,
  email,
}: ProfileFormProps) {
  const [fullName, setFullName] = useState(initialFullName);
  const [role, setRole] = useState(initialRole);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(initialAvatarUrl);
  const [savingProfile, startSaveProfile] = useTransition();
  const [uploadingAvatar, startUploadAvatar] = useTransition();
  const [removingAvatar, startRemoveAvatar] = useTransition();
  const [savedAt, setSavedAt] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startSaveProfile(async () => {
      const res = await updateProfile({ fullName, role });
      if (!res.ok) {
        toast.error(res.error ?? "Échec de la sauvegarde");
        return;
      }
      setSavedAt(Date.now());
      toast.success("Profil mis à jour");
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.set("file", file);
    startUploadAvatar(async () => {
      const res = await uploadAvatar(formData);
      if (!res.ok || !res.avatarUrl) {
        toast.error(res.error ?? "Échec de l'upload");
        return;
      }
      setAvatarUrl(res.avatarUrl);
      toast.success("Photo de profil mise à jour");
    });
    // Reset the input so the user can re-upload the same file later if needed.
    e.target.value = "";
  };

  const handleRemove = () => {
    startRemoveAvatar(async () => {
      const res = await removeAvatar();
      if (!res.ok) {
        toast.error(res.error ?? "Échec de la suppression");
        return;
      }
      setAvatarUrl(null);
      toast.success("Photo de profil retirée");
    });
  };

  const justSaved = savedAt !== null && Date.now() - savedAt < 4000;

  return (
    <div className="grid gap-6 lg:[grid-template-columns:1fr_1.4fr]">
      {/* Avatar card */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
          Photo de profil
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55] mb-5">
          JPEG, PNG ou WebP — 5 Mo maximum. Visible dans la barre latérale et les emails que vous
          envoyez à vos clients.
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Avatar initials={initials} color="#C8A030" size={128} photoUrl={avatarUrl} />
            {(uploadingAvatar || removingAvatar) && (
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center bg-black/40"
                aria-hidden="true"
              >
                <Loader2 size={28} className="text-white animate-spin" aria-hidden="true" />
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploadingAvatar || removingAvatar}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold min-h-11 disabled:opacity-60 transition-colors"
              style={{ backgroundColor: "var(--color-navy)", color: "var(--color-gold-light)" }}
            >
              <Camera size={14} aria-hidden="true" />
              {avatarUrl ? "Changer la photo" : "Ajouter une photo"}
            </button>
            {avatarUrl && (
              <button
                type="button"
                onClick={handleRemove}
                disabled={uploadingAvatar || removingAvatar}
                className="inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[12px] font-semibold min-h-11 border border-[var(--color-light-gray)] text-[var(--color-red-alert)] hover:bg-[var(--color-light-gray)]/40 disabled:opacity-60 transition-colors"
              >
                <Trash2 size={13} aria-hidden="true" />
                Retirer
              </button>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
            className="sr-only"
          />
        </div>
      </section>

      {/* Identity card */}
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
          Identité
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55] mb-5">
          Le nom complet est utilisé partout : barre latérale, signature des emails Selene,
          historique des séances.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="profile-fullname"
              className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5"
            >
              Nom complet
            </label>
            <input
              id="profile-fullname"
              type="text"
              required
              minLength={2}
              maxLength={120}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)] min-h-11"
              placeholder="ex. Laurent Martini"
            />
          </div>

          <div>
            <label
              htmlFor="profile-role"
              className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5"
            >
              Titre / spécialité
            </label>
            <input
              id="profile-role"
              type="text"
              maxLength={80}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3 py-2.5 text-[14px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)] min-h-11"
              placeholder="ex. Hypnothérapeute, Praticien PNL…"
            />
            <p className="mt-1 text-[11px] text-[var(--color-gray-soft)]">
              Affiché sous votre nom dans la barre latérale.
            </p>
          </div>

          <div>
            <label
              htmlFor="profile-email"
              className="block text-[12px] font-semibold text-[var(--color-navy)] mb-1.5"
            >
              Adresse e-mail
            </label>
            <input
              id="profile-email"
              type="email"
              value={email}
              disabled
              className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-light-gray)]/40 px-3 py-2.5 text-[14px] text-[var(--color-gray-soft)] cursor-not-allowed min-h-11"
            />
            <p className="mt-1 text-[11px] text-[var(--color-gray-soft)]">
              Pour modifier votre e-mail, contactez le support.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              type="submit"
              disabled={savingProfile || fullName.trim().length < 2}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-2.5 text-[13px] font-semibold min-h-11 disabled:opacity-60 transition-colors"
              style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}
            >
              {savingProfile ? (
                <Loader2 size={14} className="animate-spin" aria-hidden="true" />
              ) : (
                <Check size={14} aria-hidden="true" />
              )}
              {savingProfile ? "Enregistrement…" : "Enregistrer"}
            </button>
            {justSaved && !savingProfile && (
              <span className="text-[12px] text-[var(--color-teal)] inline-flex items-center gap-1">
                <Check size={13} aria-hidden="true" />
                Enregistré
              </span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
