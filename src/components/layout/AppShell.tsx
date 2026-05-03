import { Sidebar } from "./Sidebar";
import { getTherapist } from "@/lib/data";

interface AppShellProps {
  children: React.ReactNode;
}

export async function AppShell({ children }: AppShellProps) {
  const therapist = await getTherapist();

  return (
    <div
      className="flex flex-col md:flex-row min-h-[100dvh]"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <Sidebar
        therapistName={therapist?.fullName ?? "—"}
        therapistInitials={therapist?.initials ?? "?"}
        therapistRole={therapist?.role ?? "Thérapeute"}
      />
      <main
        id="main-content"
        className="flex-1 px-4 py-5 sm:px-6 sm:py-6 md:px-9 md:py-8 max-w-full md:max-w-[1400px]"
      >
        {children}
      </main>
    </div>
  );
}
