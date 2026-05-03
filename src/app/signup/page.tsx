import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthShell
      title="Créer un compte"
      subtitle="Espace réservé aux praticiens et accompagnants"
      footer={{ text: "Déjà un compte ?", linkLabel: "Se connecter", href: "/login" }}
    >
      <SignupForm />
    </AuthShell>
  );
}
