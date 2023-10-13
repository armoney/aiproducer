import Payment from "../components/payment";
import { Navigation } from "../components/navigation";

export default function PaymentPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <Payment />
      </div>
    </>
  );
}
