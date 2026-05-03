"use client";

import { useEffect, useState } from "react";
import { Mic, MicOff, Video, VideoOff, PhoneOff, MonitorUp, MessageSquare } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import type { Client } from "@/lib/types";

interface VisioRoomProps {
  client: Client;
  onLeave: () => void;
}

export function VisioRoom({ client, onLeave }: VisioRoomProps) {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-navy-dark)] flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between text-white/90 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--color-red-alert)] animate-pulse" />
          <span className="text-[12px] font-medium">EN DIRECT · {mm}:{ss}</span>
        </div>
        <span className="text-[12px] text-white/60">Salle Daily.co — chiffrée bout en bout</span>
      </header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="relative rounded-[var(--radius-card-lg)] bg-[var(--color-navy)] flex items-center justify-center overflow-hidden border border-white/5">
          {camOn ? (
            <Avatar initials={client.initials} color={client.color} size={120} />
          ) : (
            <div className="text-white/40 text-[13px]">Caméra désactivée</div>
          )}
          <span className="absolute bottom-3 left-3 text-[12px] text-white bg-black/40 px-2 py-1 rounded">
            {client.name}
          </span>
        </div>
        <div className="relative rounded-[var(--radius-card-lg)] bg-[var(--color-navy)] flex items-center justify-center overflow-hidden border border-white/5">
          <Avatar initials="VR" color="#C8A030" size={120} />
          <span className="absolute bottom-3 left-3 text-[12px] text-white bg-black/40 px-2 py-1 rounded">
            Vous
          </span>
        </div>
      </div>

      <footer className="px-6 py-5 flex items-center justify-center gap-3 border-t border-white/10 bg-[var(--color-navy)]">
        <button
          onClick={() => setMicOn((v) => !v)}
          className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title={micOn ? "Couper le micro" : "Activer le micro"}
          aria-label={micOn ? "Couper le micro" : "Activer le micro"}
          aria-pressed={!micOn}
        >
          {micOn ? <Mic size={18} aria-hidden="true" /> : <MicOff size={18} aria-hidden="true" />}
        </button>
        <button
          onClick={() => setCamOn((v) => !v)}
          className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title={camOn ? "Couper la caméra" : "Activer la caméra"}
          aria-label={camOn ? "Couper la caméra" : "Activer la caméra"}
          aria-pressed={!camOn}
        >
          {camOn ? <Video size={18} aria-hidden="true" /> : <VideoOff size={18} aria-hidden="true" />}
        </button>
        <button
          className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title="Partager l'écran"
          aria-label="Partager l'écran"
        >
          <MonitorUp size={18} aria-hidden="true" />
        </button>
        <button
          className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title="Chat"
          aria-label="Ouvrir le chat"
        >
          <MessageSquare size={18} aria-hidden="true" />
        </button>
        <button
          onClick={onLeave}
          className="ml-4 px-5 py-3 rounded-full bg-[var(--color-red-alert)] hover:opacity-90 text-white text-[13px] font-semibold flex items-center gap-2 transition-opacity"
        >
          <PhoneOff size={16} />
          Quitter
        </button>
      </footer>
    </div>
  );
}
