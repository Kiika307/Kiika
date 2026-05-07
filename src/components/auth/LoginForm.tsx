"use client";

import { useActionState } from "react";
import { FormField } from "@/components/ui/FormField";
import { loginAction, type AuthState } from "@/app/login/actions";
import { GoogleSignInButton, AuthDivider } from "./GoogleSignInButton";

const initial: AuthState = {};

interface LoginFormProps {
  redirectTo: string;
  registered: boolean;
}

export function LoginForm({ redirectTo, registered }: LoginFormProps) {
  const [state, formAction, pending] = useActionState(loginAction, initial);

  return (
    <div className="space-y-4">
      <GoogleSignInButton next={redirectTo} label="Se connecter avec Google" />
      <AuthDivider />
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="redirect" value={redirectTo} />
      {registered && !state.error && (
        <div
          role="status"
          className="rounded-[10px] bg-[var(--color-teal-light)] px-3 py-2 text-[13px] text-[var(--color-teal)]"
        >
          Compte créé. Vérifie ton email pour confirmer puis connecte-toi.
        </div>
      )}
      <FormField label="Email" name="email" type="email" required autoComplete="email" />
      <FormField
        label="Mot de passe"
        name="password"
        type="password"
        required
        autoComplete="current-password"
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
          {pending ? "Connexion…" : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
