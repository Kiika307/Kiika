"use client";

import { useEffect, useState } from "react";
import { Bell, BellOff, Loader2, Smartphone, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface PushNotificationsToggleProps {
  vapidPublicKey: string;
}

type Status =
  | "loading"
  | "unsupported"
  | "denied"
  | "granted-on"
  | "granted-off"
  | "default-off";

function urlBase64ToUint8Array(base64: string): BufferSource {
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = padded.replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(b64);
  const buffer = new ArrayBuffer(raw.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < raw.length; i++) view[i] = raw.charCodeAt(i);
  return buffer;
}

export function PushNotificationsToggle({
  vapidPublicKey,
}: PushNotificationsToggleProps) {
  const [status, setStatus] = useState<Status>("loading");
  const [pending, setPending] = useState(false);
  const [endpoint, setEndpoint] = useState<string | null>(null);

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refresh() {
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      !("PushManager" in window) ||
      !("Notification" in window)
    ) {
      setStatus("unsupported");
      return;
    }
    if (Notification.permission === "denied") {
      setStatus("denied");
      return;
    }
    const reg = await navigator.serviceWorker.ready.catch(() => null);
    if (!reg) {
      setStatus("default-off");
      return;
    }
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      setEndpoint(sub.endpoint);
      setStatus(Notification.permission === "granted" ? "granted-on" : "default-off");
    } else {
      setStatus(Notification.permission === "granted" ? "granted-off" : "default-off");
    }
  }

  async function enable() {
    if (!vapidPublicKey) {
      toast.error("Les notifications ne sont pas encore configurées côté serveur.");
      return;
    }
    setPending(true);
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        if (permission === "denied") setStatus("denied");
        return;
      }
      const reg = await navigator.serviceWorker.ready;
      let sub = await reg.pushManager.getSubscription();
      if (!sub) {
        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
        });
      }
      const json = sub.toJSON();
      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Échec de la souscription");
      }
      setEndpoint(sub.endpoint);
      setStatus("granted-on");
      toast.success("Notifications activées");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur lors de l'activation");
    } finally {
      setPending(false);
    }
  }

  async function disable() {
    setPending(true);
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await sub.unsubscribe();
        await fetch("/api/push/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: sub.endpoint }),
        });
      } else if (endpoint) {
        await fetch("/api/push/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint }),
        });
      }
      setEndpoint(null);
      setStatus("granted-off");
      toast.success("Notifications désactivées");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    } finally {
      setPending(false);
    }
  }

  const enabled = status === "granted-on";
  const showInstallHint = status !== "unsupported" && status !== "denied";

  return (
    <section
      className="rounded-[18px] p-6 sm:p-7"
      style={{
        backgroundColor: "var(--color-white-soft)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1 inline-flex items-center gap-2">
        <Bell size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
        Notifications push
      </h2>
      <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55] mb-5">
        Recevez une notification système quand un client réserve un rendez-vous
        sur votre page publique. Fonctionne dans le navigateur ou une fois
        l&apos;app installée sur votre écran d&apos;accueil.
      </p>

      {status === "loading" && (
        <p className="text-[12.5px] text-[var(--color-gray-soft)] inline-flex items-center gap-2">
          <Loader2 size={13} className="animate-spin" aria-hidden="true" />
          Vérification…
        </p>
      )}

      {status === "unsupported" && (
        <div
          className="rounded-[12px] p-4 flex items-start gap-2.5"
          style={{ backgroundColor: "rgba(184,84,80,0.08)" }}
        >
          <AlertCircle size={16} className="text-[#B85450] mt-0.5" aria-hidden="true" />
          <div>
            <div className="text-[13px] font-semibold text-[var(--color-navy)]">
              Navigateur non compatible
            </div>
            <p className="text-[11.5px] text-[var(--color-gray-soft)] mt-0.5">
              Les notifications push nécessitent un navigateur récent. Sur iPhone,
              installez d&apos;abord KIIKA via Safari → Partager → Sur l&apos;écran
              d&apos;accueil.
            </p>
          </div>
        </div>
      )}

      {status === "denied" && (
        <div
          className="rounded-[12px] p-4 flex items-start gap-2.5"
          style={{ backgroundColor: "rgba(184,84,80,0.08)" }}
        >
          <AlertCircle size={16} className="text-[#B85450] mt-0.5" aria-hidden="true" />
          <div>
            <div className="text-[13px] font-semibold text-[var(--color-navy)]">
              Notifications bloquées
            </div>
            <p className="text-[11.5px] text-[var(--color-gray-soft)] mt-0.5">
              Vous avez refusé les notifications pour ce site. Pour réactiver,
              cliquez sur l&apos;icône de cadenas dans la barre d&apos;adresse →
              Notifications → Autoriser, puis rechargez la page.
            </p>
          </div>
        </div>
      )}

      {(status === "default-off" ||
        status === "granted-off" ||
        status === "granted-on") && (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] shrink-0"
              style={{
                backgroundColor: enabled
                  ? "var(--color-gold-light)"
                  : "var(--color-light-gray)",
                color: enabled ? "var(--color-gold)" : "var(--color-gray-soft)",
              }}
              aria-hidden="true"
            >
              {enabled ? <Bell size={18} /> : <BellOff size={18} />}
            </div>
            <div>
              <div className="text-[13.5px] font-semibold text-[var(--color-navy)]">
                {enabled ? "Activées" : "Désactivées"}
              </div>
              <div className="text-[11.5px] text-[var(--color-gray-soft)]">
                {enabled
                  ? "Cet appareil reçoit les notifications."
                  : "Aucune notification ne sera envoyée à cet appareil."}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={enabled ? disable : enable}
            disabled={pending}
            className="inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold min-h-11 transition-opacity disabled:opacity-50"
            style={{
              backgroundColor: enabled
                ? "var(--color-light-gray)"
                : "var(--color-gold)",
              color: enabled ? "var(--color-navy)" : "white",
            }}
          >
            {pending && (
              <Loader2 size={13} className="animate-spin" aria-hidden="true" />
            )}
            {enabled ? "Désactiver" : "Activer"}
          </button>
        </div>
      )}

      {showInstallHint && (
        <p className="mt-5 text-[11px] text-[var(--color-gray-soft)] leading-[1.55] inline-flex items-start gap-2">
          <Smartphone size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>
            Pour les meilleurs résultats sur mobile, installez KIIKA en app : sur
            iPhone via Safari → Partager → Sur l&apos;écran d&apos;accueil ; sur
            Android via Chrome → menu → Installer l&apos;application.
          </span>
        </p>
      )}
    </section>
  );
}
