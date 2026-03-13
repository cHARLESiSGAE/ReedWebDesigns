"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type InviteToken = {
  token: string;
  name: string | null;
  email: string | null;
  used: boolean | null;
  expires_at: string | null;
};

export default function JoinClient() {
  const router = useRouter();
  const params = useSearchParams();

  const token = useMemo(() => params.get("token") ?? "", [params]);

  const [invite, setInvite] = useState<InviteToken | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      if (!token) {
        setError("Missing token.");
        setLoading(false);
        return;
      }

      const { data, error: qErr } = await supabase
        .from("invite_tokens")
        .select("token,name,email,used,expires_at")
        .eq("token", token)
        .maybeSingle();

      if (cancelled) return;

      if (qErr) {
        setError(qErr.message);
        setInvite(null);
      } else {
        const row = (data as any) as InviteToken | null;
        setInvite(row);
        setName(row?.name ?? "");
        setEmail(row?.email ?? "");
      }

      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const tokenInvalid =
    !invite ||
    invite.used === true ||
    (invite.expires_at ? new Date(invite.expires_at).getTime() < Date.now() : false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (tokenInvalid) return;

    try {
      const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({ email, password });
      if (signUpErr) throw signUpErr;

      const userId = signUpData.user?.id;
      if (!userId)
        throw new Error(
          "Sign-up succeeded but no user returned. Check email confirmation settings in Supabase Auth."
        );

      const { error: upsertErr } = await supabase
        .from("clients")
        .upsert({ user_id: userId, name, email, company, phone, status: "active", plan: "starter" });
      if (upsertErr) throw upsertErr;

      // NOTE: with the default RLS in your spec, this update may fail (admin-only). If so, adjust policy.
      await supabase.from("invite_tokens").update({ used: true }).eq("token", token);

      router.replace("/client/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Join failed");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f8f6f2",
        padding: 20,
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          width: "min(520px, 100%)",
          background: "white",
          borderRadius: 18,
          padding: 22,
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ fontFamily: "ui-serif, Georgia", fontSize: 26, marginBottom: 6, color: "#18181a" }}>
          Join
        </div>
        <div style={{ color: "#7a7888", marginBottom: 14 }}>Create your client portal account.</div>

        {loading ? (
          <div style={{ color: "#7a7888" }}>Loading token…</div>
        ) : tokenInvalid ? (
          <div style={{ color: "#dc2626", fontWeight: 700 }}>
            This invite link is invalid, expired, or already used.
          </div>
        ) : null}

        <label style={{ display: "block", fontWeight: 600, marginBottom: 6, marginTop: 10 }}>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px 12px",
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.12)",
            marginBottom: 12,
          }}
        />

        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          style={{
            width: "100%",
            padding: "12px 12px",
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.12)",
            marginBottom: 12,
          }}
        />

        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Company</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 12px",
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.12)",
            marginBottom: 12,
          }}
        />

        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 12px",
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.12)",
            marginBottom: 12,
          }}
        />

        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Set password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          style={{
            width: "100%",
            padding: "12px 12px",
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.12)",
            marginBottom: 12,
          }}
        />

        {error && (
          <div style={{ marginBottom: 12, color: "#dc2626", fontWeight: 600, fontSize: 14 }}>{error}</div>
        )}

        <button
          disabled={loading || tokenInvalid}
          type="submit"
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 999,
            border: 0,
            background: "#18181a",
            color: "#f8f6f2",
            cursor: "pointer",
            fontWeight: 700,
            opacity: loading || tokenInvalid ? 0.6 : 1,
          }}
        >
          Create account
        </button>
      </form>
    </div>
  );
}
