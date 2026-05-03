import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

interface LoginPageProps {
  searchParams: Promise<{ redirect?: string; registered?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirect, registered } = await searchParams;
  return (
    <AuthShell
      title="Connexion"
      subtitle="Accède à ton espace thérapeute"
      footer={{ text: "Pas encore de compte ?", linkLabel: "Créer un compte", href: "/signup" }}
    >
      <LoginForm redirectTo={redirect ?? "/"} registered={registered === "1"} />
    </AuthShell>
  );
}
