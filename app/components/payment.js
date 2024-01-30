"use client";
import { useEffect, useState, memo } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Payment = memo(function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const searchParams = useSearchParams();
  const jpid = searchParams.get("jpid");
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  useEffect(() => {
    fetch(`/api/stripe?jpid=${jpid}&name=${name}&price=${price}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [jpid]);

  const options = { clientSecret };
  console.log(clientSecret);

  return (
    <>
      <div id="checkout">
        {clientSecret && (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    </>
  );
});

export default Payment;
