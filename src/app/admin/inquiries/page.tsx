"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service_type: string;
  budget: string;
  message: string;
  status: "new" | "contacted" | "converted" | string;
  created_at: string;
};

function badgeStyle(status: string) {
  const map: Record<string, { fg: string; bg: string }> = {
    new: { fg: "#3b82f6", bg: "rgba(59,130,246,0.14)" },
    contacted: { fg: "#b8906a", bg: "rgba(184,144,106,0.18)" },
    converted: { fg: "#22c55e", bg: "rgba(34,197,94,0.16)" },
  };
  const c = map[status] ?? { fg: "#7a7888", bg: "rgba(122,120,136,0.14)" };
  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 10px",
    borderRadius: 999,
    background: c.bg,
    color: c.fg,
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: 0.2,
  } as const;
}

export default function AdminInquiriesPage() {
  const [rows, setRows] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const expanded = useMemo(() => rows.find((r) => r.id === expandedId) ?? null, [expandedId, rows]);

  async function load() {
    setLoading(true);
    setError(null);
    const { data, error: qErr } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (qErr) setError(qErr.message);
    setRows((data as any) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function setStatus(id: string, status: string) {
    const { error: uErr } = await supabase.from("inquiries").update({ status }).eq("id", id);
    if (uErr) return setError(uErr.message);
    await load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this inquiry?")) return;
    const { error: dErr } = await supabase.from("inquiries").delete().eq("id", id);
    if (dErr) return setError(dErr.message);
    setExpandedId(null);
    await load();
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <div>
          <div style={{ fontFamily: "ui-serif, Georgia", fontSize: 30, color: "#18181a" }}>Inquiries</div>
          <div style={{ color: "#7a7888", marginTop: 4 }}>New → Contacted → Converted</div>
        </div>
        <button
          onClick={load}
          style={{
            padding: "10px 14px",
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.12)",
            background: "white",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Refresh
        </button>
      </div>

      {error && (
        <div style={{ marginTop: 10, background: "rgba(220,38,38,0.10)", color: "#dc2626", padding: 10, borderRadius: 14 }}>
          {error}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: expanded ? "1fr 420px" : "1fr", gap: 12, marginTop: 14 }}>
        <div
          style={{
            background: "white",
            borderRadius: 18,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.06)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: 12, borderBottom: "1px solid rgba(0,0,0,0.06)", color: "#7a7888", fontSize: 13 }}>
            {loading ? "Loading…" : `${rows.length} inquiries`}
          </div>
          <div style={{ display: "grid" }}>
            {rows.map((r) => (
              <button
                key={r.id}
                onClick={() => setExpandedId((prev) => (prev === r.id ? null : r.id))}
                style={{
                  textAlign: "left",
                  padding: 12,
                  border: 0,
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  background: expandedId === r.id ? "rgba(184,144,106,0.10)" : "transparent",
                  cursor: "pointer",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: "#18181a" }}>{r.name}</div>
                  <div style={{ color: "#7a7888", fontSize: 13 }}>{r.email}</div>
                </div>
                <div style={badgeStyle(r.status)}>{r.status}</div>
              </button>
            ))}
            {!loading && rows.length === 0 && (
              <div style={{ padding: 14, color: "#7a7888" }}>No inquiries yet.</div>
            )}
          </div>
        </div>

        {expanded && (
          <div
            style={{
              background: "white",
              borderRadius: 18,
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.06)",
              padding: 14,
              position: "sticky",
              top: 14,
              height: "fit-content",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div>
                <div style={{ fontWeight: 900, color: "#18181a", fontSize: 18 }}>{expanded.name}</div>
                <div style={{ color: "#7a7888", fontSize: 13, marginTop: 2 }}>{expanded.email}</div>
              </div>
              <div style={badgeStyle(expanded.status)}>{expanded.status}</div>
            </div>

            <div style={{ marginTop: 10, color: "#7a7888", fontSize: 13 }}>
              {new Date(expanded.created_at).toLocaleString()}
            </div>

            <div style={{ marginTop: 12, display: "grid", gap: 10, color: "#18181a" }}>
              <div>
                <div style={{ color: "#7a7888", fontWeight: 800, fontSize: 12 }}>SERVICE</div>
                <div style={{ fontWeight: 700 }}>{expanded.service_type}</div>
              </div>
              <div>
                <div style={{ color: "#7a7888", fontWeight: 800, fontSize: 12 }}>BUDGET</div>
                <div style={{ fontWeight: 700 }}>{expanded.budget}</div>
              </div>
              <div>
                <div style={{ color: "#7a7888", fontWeight: 800, fontSize: 12 }}>COMPANY</div>
                <div style={{ fontWeight: 700 }}>{expanded.company || "—"}</div>
              </div>
              <div>
                <div style={{ color: "#7a7888", fontWeight: 800, fontSize: 12 }}>MESSAGE</div>
                <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{expanded.message}</div>
              </div>
            </div>

            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <button
                onClick={() => setStatus(expanded.id, "new")}
                style={{ padding: "10px 12px", borderRadius: 999, border: 0, background: "rgba(59,130,246,0.16)", color: "#3b82f6", fontWeight: 900, cursor: "pointer" }}
              >
                Mark new
              </button>
              <button
                onClick={() => setStatus(expanded.id, "contacted")}
                style={{ padding: "10px 12px", borderRadius: 999, border: 0, background: "rgba(184,144,106,0.18)", color: "#b8906a", fontWeight: 900, cursor: "pointer" }}
              >
                Mark contacted
              </button>
              <button
                onClick={() => setStatus(expanded.id, "converted")}
                style={{ padding: "10px 12px", borderRadius: 999, border: 0, background: "rgba(34,197,94,0.16)", color: "#22c55e", fontWeight: 900, cursor: "pointer" }}
              >
                Mark converted
              </button>
              <button
                onClick={() => remove(expanded.id)}
                style={{ padding: "10px 12px", borderRadius: 999, border: 0, background: "rgba(220,38,38,0.12)", color: "#dc2626", fontWeight: 900, cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
