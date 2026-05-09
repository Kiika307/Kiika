"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { sendPortalMessage } from "@/lib/portal-actions";

export interface PortalMessage {
  id: string;
  body: string;
  senderRole: "therapist" | "client";
  createdAt: string;
}

export function MessagerieClient({
  therapistName,
  messages,
}: {
  therapistName: string;
  messages: PortalMessage[];
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [body, setBody] = useState("");

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = body.trim();
    if (!trimmed) return;
    startTransition(async () => {
      const res = await sendPortalMessage({ body: trimmed });
      if (res.ok) {
        setBody("");
        router.refresh();
      } else {
        toast.error(res.error ?? "Impossible d'envoyer");
      }
    });
  }

  return (
    <>
      <header className="mb-5">
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Messagerie
        </h1>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-1">
          Échangez avec {therapistName}.
        </p>
      </header>

      <div
        className="rounded-[14px] bg-[var(--color-white-soft)] flex flex-col h-[60vh] min-h-[420px] overflow-hidden"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.length === 0 ? (
            <p className="text-center text-[13px] text-[var(--color-gray-soft)] italic mt-10">
              Aucun message — démarrez la conversation.
            </p>
          ) : (
            messages.map((m) => <Bubble key={m.id} message={m} therapistName={therapistName} />)
          )}
        </div>
        <form
          onSubmit={handleSend}
          className="border-t border-[var(--color-light-gray)] p-3 flex items-end gap-2"
        >
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Écrire un message…"
            rows={2}
            className="flex-1 resize-none rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                handleSend(e);
              }
            }}
          />
          <button
            type="submit"
            disabled={pending || !body.trim()}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Send size={14} />
            {pending ? "…" : "Envoyer"}
          </button>
        </form>
      </div>
    </>
  );
}

function Bubble({ message, therapistName }: { message: PortalMessage; therapistName: string }) {
  const isClient = message.senderRole === "client";
  return (
    <div className={`flex ${isClient ? "justify-end" : "justify-start"}`}>
      <div
        className="max-w-[78%] rounded-[14px] px-4 py-2.5"
        style={{
          backgroundColor: isClient ? "var(--color-gold)" : "var(--color-cream)",
          color: isClient ? "white" : "var(--color-navy)",
          borderTopRightRadius: isClient ? 4 : undefined,
          borderTopLeftRadius: isClient ? undefined : 4,
        }}
      >
        <div
          className="text-[10.5px] uppercase tracking-wide opacity-70 mb-0.5"
          style={{ color: isClient ? "rgba(255,255,255,0.85)" : "var(--color-gray-soft)" }}
        >
          {isClient ? "Vous" : therapistName} · {formatDateTime(message.createdAt)}
        </div>
        <p className="text-[13.5px] leading-[1.55] whitespace-pre-wrap">{message.body}</p>
      </div>
    </div>
  );
}

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  const today = new Date();
  const sameDay =
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear();
  return sameDay
    ? d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    : d.toLocaleString("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}
