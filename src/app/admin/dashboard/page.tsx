"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type StatCardProps = { label: string; value: string; href: string };

function StatCard({ label, value, href }: StatCardProps) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        background: "white",
        borderRadius: 18,
        padding: 16,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ color: "#7a7888", fontWeight: 700, fontSize: 12, letterSpacing: 0.4 }}>
        {label.toUpperCase()}
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6, color: "#18181a" }}>{value}</div>
    </Link>
  );
}

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    newInquiries: 0,
    activeClients: 0,
    activeProjects: 0,
    unpaidInvoices: 0,
  });

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const [inquiriesRes, clientsRes, projectsRes, invoicesRes] = await Promise.all([
          supabase.from("inquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
          supabase.from("clients").select("id", { count: "exact", head: true }).eq("status", "active"),
          supabase.from("projects").select("id", { count: "exact", head: true }).eq("status", "active"),
          supabase.from("invoices").select("id", { count: "exact", head: true }).eq("status", "unpaid"),
        ]);

        if (cancelled) return;

        setStats({
          newInquiries: inquiriesRes.count ?? 0,
          activeClients: clientsRes.count ?? 0,
          activeProjects: projectsRes.count ?? 0,
          unpaidInvoices: invoicesRes.count ?? 0,
        });
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <div>
          <div style={{ fontFamily: "ui-serif, Georgia", fontSize: 30, color: "#18181a" }}>Dashboard</div>
          <div style={{ color: "#7a7888", marginTop: 4 }}>Overview + quick actions.</div>
        </div>
        <div style={{ color: "#7a7888", fontSize: 13 }}>Today: {today}</div>
      </div>

      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 12,
        }}
      >
        <StatCard label="New inquiries" value={loading ? "…" : String(stats.newInquiries)} href="/admin/inquiries" />
        <StatCard label="Active clients" value={loading ? "…" : String(stats.activeClients)} href="/admin/clients" />
        <StatCard label="Active projects" value={loading ? "…" : String(stats.activeProjects)} href="/admin/projects" />
        <StatCard label="Unpaid invoices" value={loading ? "…" : String(stats.unpaidInvoices)} href="/admin/invoices" />
      </div>

      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
        <div
          style={{
            background: "white",
            borderRadius: 18,
            padding: 16,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontWeight: 800, color: "#18181a" }}>Next steps</div>
          <ul style={{ margin: "10px 0 0", color: "#7a7888", lineHeight: 1.6 }}>
            <li>Run the SQL schema in Supabase (tables + RLS policies).</li>
            <li>Create your admin user in Supabase Auth.</li>
            <li>Use the left nav to start managing inquiries/clients.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
