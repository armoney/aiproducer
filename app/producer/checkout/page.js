import Payment from "../../components/payment";
import Navigation from "../../components/navigation";
export default function Page() {
  return (
    <>
      <Navigation />
      <div className="py-32">
        <Payment />
      </div>
    </>
  );
}
