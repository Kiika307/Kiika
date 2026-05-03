"use client";

import { useActionState } from "react";
import { FormField } from "@/components/ui/FormField";
import { signupAction, type AuthState } from "@/app/login/actions";

const initial: AuthState = {};

export function SignupForm() {
  const [state, formAction, pending] = useActionState(signupAction, initial);

  return (
    <form action={formAction} className="space-y-4">
      <FormField label="Nom complet" name="fullName" type="text" required autoComplete="name" />
      <FormField
        label="Email professionnel"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <FormField
        label="Mot de passe"
        name="password"
        type="password"
        required
        autoComplete="new-password"
        helper="Au moins 8 caractères"
      />
      {state.error && (
        <div
          role="alert"
          className="rounded-[10px] bg-red-50 px-3 py-2 text-[13px] text-[var(--color-red-alert)]"
        >
          {state.error}
        </div>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-[10px] py-2.5 text-[14px] font-semibold text-white transition-opacity disabled:opacity-60"
        style={{ background: "var(--color-navy)" }}
      >
        {pending ? "Création…" : "Créer mon compte"}
      </button>
    </form>
  );
}
