import Payment from "../../components/payment";
import Navigation from "../../components/navigation";
import Script from "next/script";
export default function Page() {
  return (
    <>
      <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      <Navigation />
      <div className="py-32">
        <Payment />
      </div>
    </>
  );
}
