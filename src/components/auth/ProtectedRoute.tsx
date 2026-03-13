"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/useAuth";

function isAdminEmail(email: string | undefined | null) {
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  if (!adminEmail) return false;
  return (email ?? "").toLowerCase() === adminEmail.toLowerCase();
}

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { session } = useAuth();

  useEffect(() => {
    if (session === undefined) return;
    if (session === null) router.replace("/admin/login");
    else if (!isAdminEmail(session.user.email)) router.replace("/client/dashboard");
  }, [router, session]);

  if (session === undefined) return null;
  if (session === null) return null;
  if (!isAdminEmail(session.user.email)) return null;

  return <>{children}</>;
}

export function ClientRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { session } = useAuth();

  useEffect(() => {
    if (session === undefined) return;
    if (session === null) router.replace("/client/login");
  }, [router, session]);

  if (session === undefined) return null;
  if (session === null) return null;

  return <>{children}</>;
}
