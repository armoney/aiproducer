"use client";
import Script from "next/script";
import { useEffect, memo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Payment = memo(function Payment() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jpid = searchParams.get("jpid");

  useEffect(() => {
    const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    initialize();

    // Fetches a session and captures the client secret
    async function initialize() {
      const response = await fetch(`/api/stripe?jpid=${jpid}`, {
        method: "POST",
      });

      const { clientSecret } = await response.json();

      // Example `onComplete` callback
      // const handleComplete = function () {
      //   // Unmount Checkout
      //   checkout.unmount();

      //   // Retrieve details from server (which loads Checkout Session)
      //   // const details = await retrievePurchaseDetails();

      //   // Show custom purchase summary
      //   router.push("/confirmation");
      //   // showPurchaseSummary(details);
      // };
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
      });

      // Mount Checkout
      checkout.mount("#checkout");
    }
  }, [jpid]);

  return (
    <>
      <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      <div id="checkout">
        {/* <!-- Checkout will insert the payment form here --> */}
      </div>
    </>
  );
});

export default Payment;
