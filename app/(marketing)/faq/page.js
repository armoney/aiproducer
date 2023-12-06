"use client";
import FAQ from "../../components/faq";
import Navigation from "../../components/navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <div className="py-24">
        <FAQ />
      </div>
    </div>
  );
}
