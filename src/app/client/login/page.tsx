"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export default function ClientLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) throw signInError;
      router.replace("/client/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f8f6f2", padding: 20 }}>
      <form
        onSubmit={onSubmit}
        style={{ width: "min(440px, 100%)", background: "white", borderRadius: 18, padding: 22, boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
      >
        <div style={{ fontFamily: "ui-serif, Georgia", fontSize: 26, marginBottom: 6, color: "#18181a" }}>Client Login</div>
        <div style={{ color: "#7a7888", marginBottom: 14 }}>Use your email/password to access your portal.</div>

        {!isSupabaseConfigured && (
          <div style={{ marginBottom: 12, color: "#dc2626", fontWeight: 700, fontSize: 14 }}>
            Supabase env vars are missing in this deployment.
          </div>
        )}

        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          autoComplete="email"
          required
          style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)", marginBottom: 12 }}
        />

        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="current-password"
          required
          style={{ width: "100%", padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(0,0,0,0.12)", marginBottom: 12 }}
        />

        {error && <div style={{ marginBottom: 12, color: "#dc2626", fontWeight: 600, fontSize: 14 }}>{error}</div>}

        <button
          disabled={loading}
          type="submit"
          style={{ width: "100%", padding: "12px 14px", borderRadius: 999, border: 0, background: loading ? "rgba(24,24,26,0.6)" : "#18181a", color: "#f8f6f2", cursor: loading ? "not-allowed" : "pointer", fontWeight: 700 }}
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
