"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClientRoute } from "@/components/auth/ProtectedRoute";
import { supabase } from "@/lib/supabase";

const nav = [
  { href: "/client/dashboard", label: "Dashboard" },
  { href: "/client/projects", label: "Projects" },
  { href: "/client/invoices", label: "Invoices" },
  { href: "/client/messages", label: "Messages" },
  { href: "/client/requests", label: "Requests" },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";

  return (
    <ClientRoute>
      <div style={{ minHeight: "100vh", background: "#f8f6f2" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "rgba(248,246,242,0.92)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ maxWidth: 980, margin: "0 auto", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ fontWeight: 900, color: "#18181a" }}>Client Portal</div>
            <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: active ? "rgba(184,144,106,0.20)" : "rgba(0,0,0,0.04)",
                      color: active ? "#18181a" : "#7a7888",
                      fontWeight: active ? 800 : 700,
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <button
              onClick={() => supabase.auth.signOut()}
              style={{
                padding: "8px 12px",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.12)",
                background: "white",
                cursor: "pointer",
                fontWeight: 800,
              }}
            >
              Sign out
            </button>
          </div>
        </header>

        <main style={{ maxWidth: 980, margin: "0 auto", padding: "18px 16px" }}>{children}</main>
      </div>
    </ClientRoute>
  );
}
