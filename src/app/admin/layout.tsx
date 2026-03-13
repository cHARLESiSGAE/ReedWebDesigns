"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminRoute } from "@/components/auth/ProtectedRoute";
import { supabase } from "@/lib/supabase";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/inquiries", label: "Inquiries" },
  { href: "/admin/clients", label: "Clients" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/invoices", label: "Invoices" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/requests", label: "Requests" },
  { href: "/admin/notes", label: "Notes" },
  { href: "/admin/seo-notes", label: "SEO Notes" },
  { href: "/admin/calendar", label: "Calendar" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";

  return (
    <AdminRoute>
      <div style={{ display: "flex", minHeight: "100vh", background: "#f8f6f2" }}>
        <aside
          style={{
            width: 220,
            background: "#18181a",
            color: "#f8f6f2",
            padding: 16,
            position: "sticky",
            top: 0,
            height: "100vh",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontWeight: 700, letterSpacing: 0.2, marginBottom: 14 }}>CRM Admin</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 14,
                    textDecoration: "none",
                    color: active ? "#18181a" : "#f8f6f2",
                    background: active ? "#b8906a" : "transparent",
                    fontWeight: active ? 700 : 500,
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
              marginTop: 14,
              width: "100%",
              padding: "10px 12px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "transparent",
              color: "#f8f6f2",
              cursor: "pointer",
            }}
          >
            Sign out
          </button>
        </aside>

        <main style={{ flex: 1, padding: 22 }}>{children}</main>
      </div>
    </AdminRoute>
  );
}
