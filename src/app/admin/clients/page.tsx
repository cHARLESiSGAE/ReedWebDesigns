"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type ClientRow = {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  plan: "starter" | "growth" | "pro" | string;
  status: "active" | "inactive" | string;
  created_at: string;
};

type InviteRow = {
  token: string;
  name: string | null;
  email: string | null;
  used: boolean | null;
  created_at: string | null;
  expires_at: string | null;
};

function pill(color: string, bg: string) {
  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 10px",
    borderRadius: 999,
    background: bg,
    color,
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: 0.2,
  } as const;
}

function tokenStatus(row: InviteRow): "Pending" | "Registered" | "Expired" {
  if (row.used) return "Registered";
  if (row.expires_at && new Date(row.expires_at).getTime() < Date.now()) return "Expired";
  return "Pending";
}

function randomToken(len = 24) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  const bytes = crypto.getRandomValues(new Uint8Array(len));
  for (let i = 0; i < bytes.length; i++) out += chars[bytes[i] % chars.length];
  return out;
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<ClientRow[]>([]);
  const [invites, setInvites] = useState<InviteRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ClientRow | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    plan: "starter",
    status: "active",
  });

  const origin = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  async function load() {
    setLoading(true);
    setError(null);

    const [clientsRes, invitesRes] = await Promise.all([
      supabase.from("clients").select("*").order("created_at", { ascending: false }),
      supabase.from("invite_tokens").select("*").order("created_at", { ascending: false }),
    ]);

    if (clientsRes.error) setError(clientsRes.error.message);
    if (invitesRes.error) setError(invitesRes.error.message);

    setClients((clientsRes.data as any) ?? []);
    setInvites((invitesRes.data as any) ?? []);

    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  function startCreate() {
    setEditing(null);
    setForm({ name: "", email: "", company: "", phone: "", plan: "starter", status: "active" });
    setOpen(true);
  }

  function startEdit(row: ClientRow) {
    setEditing(row);
    setForm({
      name: row.name ?? "",
      email: row.email ?? "",
      company: row.company ?? "",
      phone: row.phone ?? "",
      plan: (row.plan as any) ?? "starter",
      status: (row.status as any) ?? "active",
    });
    setOpen(true);
  }

  async function save() {
    setError(null);

    const payload: any = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      phone: form.phone.trim() || null,
      plan: form.plan,
      status: form.status,
    };

    if (!payload.name || !payload.email) {
      setError("Name and email are required");
      return;
    }

    if (editing?.id) payload.id = editing.id;

    const { error: upErr } = await supabase.from("clients").upsert(payload);
    if (upErr) {
      setError(upErr.message);
      return;
    }

    setOpen(false);
    await load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this client? This will cascade-delete projects/invoices/messages/requests.")) return;
    setError(null);
    const { error: dErr } = await supabase.from("clients").delete().eq("id", id);
    if (dErr) {
      setError(dErr.message);
      return;
    }
    await load();
  }

  async function createInvite(fromClient?: ClientRow) {
    setError(null);
    const token = randomToken(32);

    const name = (fromClient?.name ?? form.name ?? "").trim() || null;
    const email = (fromClient?.email ?? form.email ?? "").trim() || null;

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

    const { error: iErr } = await supabase
      .from("invite_tokens")
      .insert({ token, name, email, expires_at: expires, used: false });

    if (iErr) {
      setError(iErr.message);
      return;
    }

    await load();

    const url = `${origin}/join?token=${token}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // ignore
    }

    alert(`Invite link copied:\n${url}`);
  }

  const box = {
    background: "white",
    borderRadius: 18,
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.06)",
  } as const;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <div>
          <div style={{ fontFamily: "ui-serif, Georgia", fontSize: 30, color: "#18181a" }}>Clients</div>
          <div style={{ color: "#7a7888", marginTop: 4 }}>CRUD + invite links</div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <button
            onClick={load}
            style={{ padding: "10px 14px", borderRadius: 999, border: "1px solid rgba(0,0,0,0.12)", background: "white", cursor: "pointer", fontWeight: 800 }}
          >
            Refresh
          </button>
          <button
            onClick={startCreate}
            style={{ padding: "10px 14px", borderRadius: 999, border: 0, background: "#18181a", color: "#f8f6f2", cursor: "pointer", fontWeight: 900 }}
          >
            New client
          </button>
        </div>
      </div>

      {error && (
        <div style={{ marginTop: 10, background: "rgba(220,38,38,0.10)", color: "#dc2626", padding: 10, borderRadius: 14 }}>
          {error}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginTop: 14 }}>
        <div style={box}>
          <div style={{ padding: 12, borderBottom: "1px solid rgba(0,0,0,0.06)", color: "#7a7888", fontSize: 13 }}>
            {loading ? "Loading…" : `${clients.length} clients`}
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "#7a7888", fontSize: 12 }}>
                  <th style={{ padding: 12 }}>Client</th>
                  <th style={{ padding: 12 }}>Plan</th>
                  <th style={{ padding: 12 }}>Status</th>
                  <th style={{ padding: 12 }}>Created</th>
                  <th style={{ padding: 12 }} />
                </tr>
              </thead>
              <tbody>
                {clients.map((c) => (
                  <tr key={c.id} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <td style={{ padding: 12 }}>
                      <div style={{ fontWeight: 900, color: "#18181a" }}>{c.name}</div>
                      <div style={{ color: "#7a7888", fontSize: 13 }}>{c.email}</div>
                      {c.company ? <div style={{ color: "#7a7888", fontSize: 13 }}>{c.company}</div> : null}
                    </td>
                    <td style={{ padding: 12, color: "#18181a", fontWeight: 700 }}>{c.plan}</td>
                    <td style={{ padding: 12 }}>
                      <span
                        style={
                          c.status === "active"
                            ? pill("#22c55e", "rgba(34,197,94,0.16)")
                            : pill("#7a7888", "rgba(122,120,136,0.14)")
                        }
                      >
                        {c.status}
                      </span>
                    </td>
                    <td style={{ padding: 12, color: "#7a7888", fontSize: 13 }}>
                      {new Date(c.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: 12 }}>
                      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
                        <button
                          onClick={() => startEdit(c)}
                          style={{ padding: "8px 12px", borderRadius: 999, border: "1px solid rgba(0,0,0,0.12)", background: "white", cursor: "pointer", fontWeight: 800 }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => createInvite(c)}
                          style={{ padding: "8px 12px", borderRadius: 999, border: 0, background: "rgba(184,144,106,0.18)", color: "#18181a", cursor: "pointer", fontWeight: 900 }}
                        >
                          Invite
                        </button>
                        <button
                          onClick={() => remove(c.id)}
                          style={{ padding: "8px 12px", borderRadius: 999, border: 0, background: "rgba(220,38,38,0.12)", color: "#dc2626", cursor: "pointer", fontWeight: 900 }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {!loading && clients.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ padding: 14, color: "#7a7888" }}>
                      No clients yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div style={box}>
          <div style={{ padding: 12, borderBottom: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <div>
              <div style={{ fontWeight: 900, color: "#18181a" }}>Invite links</div>
              <div style={{ color: "#7a7888", fontSize: 13 }}>Default expiry: 7 days. Click “Invite” on a client to auto-copy.</div>
            </div>
            <button
              onClick={() => createInvite(undefined)}
              style={{ padding: "10px 14px", borderRadius: 999, border: 0, background: "#18181a", color: "#f8f6f2", cursor: "pointer", fontWeight: 900 }}
            >
              Generate invite
            </button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "#7a7888", fontSize: 12 }}>
                  <th style={{ padding: 12 }}>Invite</th>
                  <th style={{ padding: 12 }}>Status</th>
                  <th style={{ padding: 12 }}>Expires</th>
                  <th style={{ padding: 12 }} />
                </tr>
              </thead>
              <tbody>
                {invites.map((r) => {
                  const s = tokenStatus(r);
                  const url = origin ? `${origin}/join?token=${r.token}` : `/join?token=${r.token}`;
                  const style =
                    s === "Registered"
                      ? pill("#22c55e", "rgba(34,197,94,0.16)")
                      : s === "Expired"
                        ? pill("#dc2626", "rgba(220,38,38,0.12)")
                        : pill("#3b82f6", "rgba(59,130,246,0.14)");

                  return (
                    <tr key={r.token} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                      <td style={{ padding: 12 }}>
                        <div style={{ fontWeight: 900, color: "#18181a" }}>{r.email || r.name || r.token}</div>
                        <div style={{ color: "#7a7888", fontSize: 13 }}>{url}</div>
                      </td>
                      <td style={{ padding: 12 }}>
                        <span style={style}>{s}</span>
                      </td>
                      <td style={{ padding: 12, color: "#7a7888", fontSize: 13 }}>
                        {r.expires_at ? new Date(r.expires_at).toLocaleString() : "—"}
                      </td>
                      <td style={{ padding: 12 }}>
                        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                          <button
                            onClick={async () => {
                              try {
                                await navigator.clipboard.writeText(url);
                              } catch {
                                // ignore
                              }
                              alert("Copied invite URL");
                            }}
                            style={{ padding: "8px 12px", borderRadius: 999, border: "1px solid rgba(0,0,0,0.12)", background: "white", cursor: "pointer", fontWeight: 800 }}
                          >
                            Copy
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {!loading && invites.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ padding: 14, color: "#7a7888" }}>
                      No invites yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "grid",
            placeItems: "center",
            padding: 16,
            zIndex: 50,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ width: "min(560px, 100%)", background: "white", borderRadius: 18, padding: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <div style={{ fontFamily: "ui-serif, Georgia", fontSize: 22, color: "#18181a" }}>
                {editing ? "Edit client" : "New client"}
              </div>
              <button onClick={() => setOpen(false)} style={{ border: 0, background: "transparent", cursor: "pointer", fontWeight: 900 }}>
                Close
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Name</label>
                <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)" }} />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Email</label>
                <input value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} type="email" style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)" }} />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Company</label>
                <input value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)" }} />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Phone</label>
                <input value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)" }} />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Plan</label>
                <select value={form.plan} onChange={(e) => setForm((p) => ({ ...p, plan: e.target.value }))} style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)", background: "white" }}>
                  <option value="starter">starter</option>
                  <option value="growth">growth</option>
                  <option value="pro">pro</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Status</label>
                <select value={form.status} onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))} style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)", background: "white" }}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => createInvite(undefined)}
                style={{ padding: "10px 14px", borderRadius: 999, border: 0, background: "rgba(184,144,106,0.18)", cursor: "pointer", fontWeight: 900, color: "#18181a" }}
              >
                Generate invite
              </button>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => setOpen(false)}
                  style={{ padding: "10px 14px", borderRadius: 999, border: "1px solid rgba(0,0,0,0.12)", background: "white", cursor: "pointer", fontWeight: 800 }}
                >
                  Cancel
                </button>
                <button
                  onClick={save}
                  style={{ padding: "10px 14px", borderRadius: 999, border: 0, background: "#18181a", color: "#f8f6f2", cursor: "pointer", fontWeight: 900 }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
