import { useState } from "react";
import Modal from "../components/modal";
import ContactForm from "../components/contactForm";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Pricing() {
  const [openModal, setOpenModal] = useState(false);
  const introFeatures = [
    "Free consultation call",
    "Interview with experienced producer",
    "Concise message",
    "Professional editing",
    "Up to one minute length",
  ];
  const standardFeatures = [
    "Free consultation call",
    "Interview with experienced producer",
    "Comprehensive narrative",
    "Professional edit with visuals",
    "One notes pass for small changes",
  ];
  const customFeatures = [
    "Free consultation call",
    "Full Hollywood treatment",
    "Custom visuals and graphics",
    "Custom narrative",
  ];

  const FistTenSaleDateFormatted = new Date("01/31/2024").toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const SaleWidget = ({ oldPrice, discount }) => {
    return (
      <div className="mt-2 text-sm">
        <p>
          <span className="bg-red-600 text-white p-1">Save ${discount}</span>{" "}
          <span>Was ${oldPrice}</span>
        </p>
        <div className="mt-2 text-sm">
          <p className="text-xs font-light italic text-gray-500">
            Deal ends {FistTenSaleDateFormatted}, midnight PST*
          </p>
        </div>
      </div>
    );
  };

  const CardListItem = ({ feature }) => {
    return (
      <li className="flex mt-4">
        <CheckIcon className="h-6 w-5 mr-4 text-primary-500" />
        <p className="">{feature}</p>
      </li>
    );
  };

  const introFeaturesList = introFeatures.map((introFeature, i) => {
    return <CardListItem feature={introFeature} key={i} />;
  });
  const standardFeaturesList = standardFeatures.map((standardFeature, i) => {
    return <CardListItem feature={standardFeature} key={i} />;
  });
  const customFeaturesList = customFeatures.map((customFeature, i) => {
    return <CardListItem feature={customFeature} key={i} />;
  });

  return (
    <div
      id="pricing"
      className="relative isolate bg-white pt-24 pb-32 px-6 mx-auto lg:pt-8 pb-16 lg:px-8"
    >
      <div
        className="absolute inset-x-0 -top-16 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0dc2ff] to-[#87ff00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto sm:mt-20 lg:mt-12 lg:max-w-4xl xl:max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-500 lg:text-center">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-center">
            The right price for you, whoever you are
          </p>
        </div>
        <div className="mx-auto lg:max-w-4xl xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-6 gap-x-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative p-8 z-10 bg-white rounded-3xl border border-gray-300">
              <h3 className="text-base font-semibold leading-7 text-primary-500">
                Introduction
              </h3>
              <p className="flex mt-4 items-baseline gap-x-2">
                <span className="text-5xl	font-bold	tracking-tight">$99</span>
              </p>
              <SaleWidget oldPrice={299} discount={200} />
              <p className="mt-4 text-base leading-7 font-light text-gray-500">
                {`Perfect for showing your personality and communication skills.`}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 xl:justify-start">
                <Link
                  prefetch={true}
                  href="/producer/checkout?name=Introduction&price=9900"
                  className="rounded-md ring-1 ring-primary-200 text-primary-500 w-full px-3.5 py-2.5 text-center text-sm font-semibold hover:ring-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Get started today
                </Link>
              </div>
              <ul className="mt-8 leading-6	text-sm	gap-y-4">
                {introFeaturesList}
              </ul>
            </div>
            <div className="relative ring-2 ring-primary-500 p-8 z-10 bg-white rounded-3xl">
              <div className="flex flex-row justify-between	gap-x-1">
                <h3 className="text-base font-semibold leading-7 text-primary-500">
                  Standard
                </h3>
                <p className="text-xs	text-primary-500 leading-5 font-semibold py-1 px-3 bg-primary-100 rounded-full">
                  Most popular
                </p>
              </div>
              <p className="flex mt-4 items-baseline gap-x-2">
                <span className="text-5xl	font-bold	tracking-tight">$299</span>
              </p>
              <SaleWidget oldPrice={799} discount={400} />
              <p className="mt-4 text-base leading-7 font-light text-gray-500">
                {`Perfect for showing your personality and professional work.`}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 xl:justify-start">
                <Link
                  prefetch={true}
                  href="/producer/checkout?name=Combination&price=39900"
                  className="rounded-md bg-primary-500 w-full px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Get started today
                </Link>
              </div>
              <ul className="mt-8 leading-6	text-sm	gap-y-4">
                {standardFeaturesList}
              </ul>
            </div>
            <div className="relative p-8 z-10 bg-white rounded-3xl border border-gray-300">
              <h3 className="text-base font-semibold leading-7 text-primary-500">
                Custom
              </h3>
              <p className="flex mt-4 items-baseline gap-x-2">
                <span className="text-5xl	font-bold	tracking-tight"></span>
              </p>
              <p className="text-base pt-4 pb-2 leading-7 font-light text-gray-500">
                {`Have more custom needs for your video resume's visuals or narrative structure? Want to film on location or interested in having us come out with a full crew? Lets set a time to discuss today!`}
              </p>
              <div className="mt-12 flex items-center justify-center gap-x-6 xl:justify-start">
                <button
                  onClick={() => setOpenModal(true)}
                  className="rounded-md ring-1 ring-primary-200 text-primary-500 w-full px-3.5 py-2.5 text-center text-sm font-semibold hover:ring-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Get a quote
                </button>
              </div>
              <ul className="mt-8 leading-6	text-sm	gap-y-4">
                {customFeaturesList}
              </ul>
              <Modal isOpen={openModal} closeIt={() => setOpenModal(false)}>
                <div id="contact-form">
                  <ContactForm formName={"Custom Quote"} />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0dc2ff] to-[#87ff00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
