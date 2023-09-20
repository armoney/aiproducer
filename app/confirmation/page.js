"use client";
import Calendly from "../components/calendly";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const jpid = searchParams.get("jpid");
  const [session, setSession] = useState(false);

  useEffect(() => {
    async function getCheckoutSession() {
      const session = await fetch(`/api/stripe?session_id=${session_id}`);
      if (session.status == "open") {
        router.push(`/checkout?jpid=${jpid}`);
      } else if (session.status == "complete") {
        debugger;
        // Show success page
        // Optionally use session.payment_status or session.customer_email
        // to customize the success page
        setSession(true);
      }
    }
    getCheckoutSession();
  }, [jpid, session_id, router]);
  return (
    <div>
      {session && <h1>Hello confirmation page!</h1>}

      <Calendly />
    </div>
  );
}
