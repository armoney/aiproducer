"use client";
import { Navigation } from "../components/navigation";
import Calendly from "../components/calendly";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const jpid = searchParams.get("jpid");
  const [session, setSession] = useState(false);

  useEffect(() => {
    async function getCheckoutSession() {
      const session = await fetch(`/api/stripe?session_id=${session_id}`, {
        method: "GET",
      });
      const sessionData = await session.json();
      if (sessionData.status == "open") {
        router.push(`/checkout?jpid=${jpid}`);
      } else if (sessionData.status == "complete") {
        // Show success page
        // Optionally use session.payment_status or session.customer_email
        // to customize the success page
        setSession(true);
      }
    }
    getCheckoutSession();
  }, [jpid, session_id, router]);

  const Success = function () {
    return (
      <div>
        <Navigation />
        <div className="mx-auto max-w-3xl px-6 py-16 pt-14 sm:py-38  lg:px-8 lg:py-48">
          <div className="flex justify-center">
            <CheckCircleIcon
              className="h-12 w-12 sm:h-16 sm:w-16 text-indigo-600"
              aria-hidden="true"
            />
          </div>
          <h1 className="mt-3 text-3xl font-bold text-center sm:text-4xl">
            Congratulations!
          </h1>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <div>
              You&apos;re scheduled for an interview with a genuine Hollywood TV
              producer who knows how to bring out the best in your video
              interview – the first step in crafting an incredible video resumé.
              While you wait, check out the below 60-second video for helpful
              tips on how to set your video interview up for success.
            </div>
            <ol
              className="mt-6 px-12 sm:px-10 line-height-80"
              style={{ listStyle: "auto", lineHeight: "200%" }}
            >
              <li>Dress for Success (and the job you want!)</li>
              <li>
                High Speed Internet (You&apos;ll need a high speed internet
                connection of at least 50mbps. Test your speed
                <Link
                  className="text-indigo-600"
                  target="_blank"
                  href="https://fast.com"
                >
                  &nbsp;here
                </Link>
                )
              </li>
              <li>Find a Quiet Place</li>
              <li>
                Equipment (a laptop webcam at chest-height is ideal, but a cell
                phone camera turned sideways on a stand works well too!)
              </li>
              <li>
                Location (well-lit, clean, professional, a big airy background
                with depth like a kitchen can look nice too)
              </li>
              <li>
                Location (well-lit, clean, professional, a big airy background
                with depth like a kitchen can look nice too)
              </li>
              <li>
                Have Fun (There&apos;s no stress here! Our mission is to help
                you look, feel and present as smart, confident, articulate and
                passionate in the best possible ways. No need to worry – we make
                people into stars for a living!)
              </li>
            </ol>
            <div className="text-center mt-6 font-semibold text-gray-900">
              Schedule your time below, we look forward to our interview with
              you!
            </div>
          </div>
          <div className="mt-12">
            <Calendly />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {session && <Success />}
      {!session && <div>Loading...</div>}
    </div>
  );
}
