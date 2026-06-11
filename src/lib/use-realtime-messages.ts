"use client";

import { useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * S'abonne en temps réel aux nouveaux messages de la table client_messages et
 * déclenche `onChange` (typiquement router.refresh) à chaque INSERT/UPDATE
 * correspondant au filtre. La RLS limite déjà les lignes visibles ; le filtre
 * réduit le bruit (par client_id côté portail, par therapist_id côté praticien).
 *
 * @param filter ex. `client_id=eq.<uuid>` ou `therapist_id=eq.<uuid>`
 */
export function useRealtimeMessages(filter: string, onChange: () => void): void {
  const cbRef = useRef(onChange);
  cbRef.current = onChange;

  useEffect(() => {
    if (!filter) return;
    let supabase;
    try {
      supabase = createClient();
    } catch {
      return; // env manquantes — pas de realtime, on reste sur le refresh manuel
    }

    const channel = supabase
      .channel(`client_messages:${filter}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "client_messages", filter },
        () => cbRef.current(),
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "client_messages", filter },
        () => cbRef.current(),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [filter]);
}
