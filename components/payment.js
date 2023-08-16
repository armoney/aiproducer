import Script from "next/script";
import { useEffect } from "react";

function Payment() {
  useEffect(() => {
    const stripe = Stripe(
      "pk_test_51NfAD6GBN3j0TBw6S1x23sUkCS0zhNyaIeAuWIx0XL0xUvfXgzglVxxpjmjmYgubeg5zFUFcYpgErySb1sq4vCBn00vfni8zTI",
      {
        betas: ["embedded_checkout_beta_1"],
      }
    );

    initialize();

    // Fetches a session and captures the client secret
    async function initialize() {
      const response = await fetch("/api/stripe", {
        method: "POST",
      });
      console.log("there there there");

      const { clientSecret } = await response.json();

      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
      });

      // Mount Checkout
      checkout.mount("#checkout");
    }
  }, []);

  return (
    <>
      <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      <div id="checkout">
        {/* <!-- Checkout will insert the payment form here --> */}
      </div>
    </>
  );
}

export default Payment;
