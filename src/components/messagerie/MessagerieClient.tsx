"use client";

import { useMemo, useState, useRef, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Send, Search, ChevronLeft, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/Avatar";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/cn";
import { sendPortalMessage } from "@/lib/portal-actions";
import type { ChatMessage, Conversation, Client } from "@/lib/types";

interface MessagerieClientProps {
  clients: Client[];
  conversations: Conversation[];
}

export function MessagerieClient({ clients, conversations: initialConversations }: MessagerieClientProps) {
  const [convs, setConvs] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState<string>(
    initialConversations[0]?.clientId ?? clients[0]?.id ?? "",
  );
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  /** Sur mobile : "list" (liste des clients) ou "thread" (conversation). */
  const [mobileView, setMobileView] = useState<"list" | "thread">("list");
  const threadRef = useRef<HTMLDivElement | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  // Resync quand le serveur renvoie de nouvelles conversations (router.refresh).
  useEffect(() => {
    setConvs(initialConversations);
  }, [initialConversations]);

  const activeClient = useMemo(
    () => clients.find((c) => c.id === activeId) ?? clients[0],
    [activeId, clients],
  );
  const activeConv = useMemo(
    () => convs.find((c) => c.clientId === activeId) ?? { clientId: activeId, messages: [] },
    [convs, activeId],
  );

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clients
      .map((c) => {
        const conv = convs.find((cv) => cv.clientId === c.id);
        const last = conv?.messages[conv.messages.length - 1];
        return { client: c, last };
      })
      .filter(({ client }) => (q ? client.name.toLowerCase().includes(q) : true))
      .sort((a, b) => (b.last ? 1 : 0) - (a.last ? 1 : 0));
  }, [convs, query, clients]);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [activeConv.messages.length, activeId]);

  function send() {
    const body = draft.trim();
    if (!body || !activeId || pending) return;

    // Affichage optimiste immédiat.
    const optimistic: ChatMessage = {
      id: `tmp-${Date.now()}`,
      from: "therapist",
      body,
      time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    };
    setConvs((prev) => {
      const exists = prev.some((c) => c.clientId === activeId);
      if (exists) {
        return prev.map((c) =>
          c.clientId === activeId ? { ...c, messages: [...c.messages, optimistic] } : c,
        );
      }
      return [...prev, { clientId: activeId, messages: [optimistic] }];
    });
    setDraft("");

    startTransition(async () => {
      const res = await sendPortalMessage({ clientId: activeId, body });
      if (res.ok) {
        router.refresh(); // récupère le message persisté (et ceux du client)
      } else {
        toast.error(res.error ?? "Échec de l'envoi");
        // Retire le message optimiste en cas d'échec.
        setConvs((prev) =>
          prev.map((c) =>
            c.clientId === activeId
              ? { ...c, messages: c.messages.filter((m) => m.id !== optimistic.id) }
              : c,
          ),
        );
        setDraft(body);
      }
    });
  }

  function pickClient(id: string) {
    setActiveId(id);
    setMobileView("thread");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-0 h-[calc(100dvh-7rem)] bg-[var(--color-white-soft)] rounded-[var(--radius-card-lg)] overflow-hidden border border-black/5">
      {/* Liste : visible md+, ou mobile en mode list */}
      <aside
        className={cn(
          "flex flex-col border-r border-black/5",
          mobileView === "list" ? "flex" : "hidden",
          "md:flex",
        )}
      >
        <div className="p-4 border-b border-black/5">
          <label className="relative block">
            <span className="sr-only">Rechercher un client</span>
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-soft)]"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un client"
              aria-label="Rechercher un client"
              className="w-full pl-9 pr-3 py-2 text-[14px] md:text-[13px] rounded-[var(--radius-input)] bg-[var(--color-light-gray)] focus:ring-2 focus:ring-[var(--color-gold)]/40"
            />
          </label>
        </div>
        <ul className="flex-1 overflow-y-auto">
          {list.map(({ client, last }) => {
            const active = client.id === activeId;
            return (
              <li key={client.id}>
                <button
                  onClick={() => pickClient(client.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors min-h-[60px]",
                    active ? "bg-[var(--color-gold-light)]/40" : "hover:bg-[var(--color-light-gray)]",
                  )}
                >
                  <Avatar initials={client.initials} color={client.color} size={40} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] md:text-[13px] font-semibold text-[var(--color-navy)] truncate">
                        {client.name}
                      </span>
                      {last ? (
                        <span className="text-[10px] text-[var(--color-gray-soft)] shrink-0">
                          {last.time.split(" ")[0]}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-[12px] text-[var(--color-gray-soft)] truncate">
                      {last?.body ?? "Aucun message"}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Conversation : visible md+, ou mobile en mode thread */}
      <section
        className={cn(
          "flex flex-col",
          mobileView === "thread" ? "flex" : "hidden",
          "md:flex",
        )}
      >
        <header className="px-4 md:px-6 py-3 md:py-4 border-b border-black/5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileView("list")}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)]"
            aria-label="Retour à la liste"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <Avatar initials={activeClient.initials} color={activeClient.color} size={36} />
          <div>
            <div className="text-[14px] font-semibold text-[var(--color-navy)]">{activeClient.name}</div>
            <div className="text-[11px] text-[var(--color-gray-soft)]">
              {activeClient.status === "actif" ? "En ligne récemment" : "Hors ligne"}
            </div>
          </div>
        </header>

        <div
          ref={threadRef}
          className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-3 bg-[var(--color-cream)]/40"
        >
          {activeConv.messages.length === 0 ? (
            <EmptyState
              icon={MessageSquare}
              title="Aucun message"
              message="Démarrez la conversation : tapez votre premier message ci-dessous."
              compact
            />
          ) : (
            activeConv.messages.map((m) => (
              <div
                key={m.id}
                className={cn("flex", m.from === "therapist" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[80%] md:max-w-[70%] rounded-[14px] px-4 py-2.5 text-[14px] md:text-[13px] leading-relaxed shadow-[var(--shadow-card)]",
                    m.from === "therapist"
                      ? "bg-[var(--color-navy)] text-white rounded-br-[4px]"
                      : "bg-white text-[var(--color-navy)] rounded-bl-[4px]",
                  )}
                >
                  <p>{m.body}</p>
                  <span
                    className={cn(
                      "block mt-1 text-[10px]",
                      m.from === "therapist" ? "text-white/60" : "text-[var(--color-gray-soft)]",
                    )}
                  >
                    {m.time}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="px-3 md:px-4 py-3 border-t border-black/5 flex items-center gap-2 bg-white"
        >
          <label className="flex-1 block">
            <span className="sr-only">Nouveau message</span>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Écrire un message…"
              aria-label="Nouveau message"
              className="w-full px-4 py-2.5 text-[14px] md:text-[13px] rounded-[var(--radius-input)] bg-[var(--color-light-gray)] focus:ring-2 focus:ring-[var(--color-gold)]/40 min-h-11"
            />
          </label>
          <button
            type="submit"
            disabled={!draft.trim() || pending}
            className="inline-flex items-center justify-center min-w-11 min-h-11 rounded-[var(--radius-input)] bg-[var(--color-navy)] text-white transition-opacity disabled:opacity-40 hover:opacity-90"
            title="Envoyer"
            aria-label="Envoyer le message"
          >
            <Send size={16} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </form>
      </section>
    </div>
  );
}
