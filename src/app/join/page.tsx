import { Suspense } from "react";
import JoinClient from "./JoinClient";


export default function JoinPage() {
  return (
    <Suspense fallback={<div style={{ padding: 20, color: "#7a7888" }}>Loading…</div>}>
      <JoinClient />
    </Suspense>
  );
}
