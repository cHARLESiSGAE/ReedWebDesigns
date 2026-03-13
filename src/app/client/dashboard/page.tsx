"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/useAuth";

export default function ClientDashboardPage() {
  const { session } = useAuth();
  const [clientName, setClientName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!session?.user?.id) return;
      setLoading(true);
      const { data } = await supabase.from("clients").select("name").eq("user_id", session.user.id).maybeSingle();
      if (!cancelled) {
        setClientName((data as any)?.name ?? "");
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  return (
    <div>
      <div style={{ fontFamily: "ui-serif, Georgia", fontSize: 30, color: "#18181a" }}>
        {loading ? "Dashboard" : `Welcome${clientName ? `, ${clientName}` : ""}`}
      </div>
      <div style={{ color: "#7a7888", marginTop: 6 }}>Your projects, invoices, messages, and requests will show here.</div>
    </div>
  );
}
