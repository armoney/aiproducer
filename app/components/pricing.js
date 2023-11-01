import { CheckIcon } from "@heroicons/react/24/outline";

export default function Pricing() {
  const personalFeatures = [
    "25 products",
    "Up to 10,000 subscribers",
    "Audience segmentation",
    "Advanced analytics",
    "Email support",
    "Marketing automations",
  ];
  const bespokeFeatures = [
    "Priority support",
    "Single sign-on",
    "Enterprise integrations",
    "Custom reporting tools",
  ];

  const personalFeaturesList = personalFeatures.map((personalFeature, i) => {
    return (
      <li key={i} className="flex mt-4">
        <CheckIcon className="h-6 w-5 mr-4 text-primary-500" />
        <p className="">{personalFeature}</p>
      </li>
    );
  });
  const bespokeFeaturesList = bespokeFeatures.map((bespokeFeature, i) => {
    return (
      <li key={i} className="flex mt-4">
        <CheckIcon className="h-6 w-5 mr-4 text-primary-500" />
        <p className="">{bespokeFeature}</p>
      </li>
    );
  });
  return (
    <div
      id="pricing"
      className="relative isolate bg-white pt-24 pb-32 px-6 mx-auto lg:pt-8 pb-16 lg:px-8"
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
      <div className="mx-auto sm:mt-20 lg:mt-12 lg:max-w-4xl">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-500 lg:text-center">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-center">
            The right price for you, whoever you are
          </p>
        </div>
        <div className="mx-auto max-w-lg lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-y-6 items-center mt-12 sm:gap-y-0 lg:grid-cols-2 lg:gap-x-0">
            <div className="relative p-8 z-10 bg-white shadow-2xl shadow-slate-400 rounded-3xl border border-gray-300">
              <h3 className="text-base font-semibold leading-7 text-primary-500">
                Personal
              </h3>
              <p className="flex mt-4 items-baseline gap-x-2">
                <span className="text-5xl	font-bold	tracking-tight">$299</span>
              </p>
              <p className="mt-4 text-base leading-7 font-light text-gray-500">
                {`The perfect plan if you're just getting started with our
                product.`}
              </p>
              <ul className="mt-8 leading-6	text-sm	gap-y-4">
                {personalFeaturesList}
              </ul>
              <div className="mt-10 flex items-center justify-center gap-x-6 xl:justify-start">
                <a
                  href="/producer/questionnaire"
                  className="rounded-md bg-primary-500 w-full px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Get started today
                </a>
              </div>
            </div>
            <div className="relative p-8 bg-slate-100 rounded-3xl border border-gray-300 sm:rounded-t-none sm:mx-8 sm:border-t-0 lg:mx-0 lg:rounded-3xl lg:rounded-l-none lg:border lg:border-l-0">
              {" "}
              <h3 className="text-base font-semibold leading-7 text-primary-500">
                Bespoke
              </h3>
              <p className="mt-4 text-base leading-7 font-light text-gray-500">
                We can produce whatever you like
              </p>
              <ul className="mt-8 leading-6	text-sm	gap-y-4">
                {bespokeFeaturesList}
              </ul>
              <div className="mt-10 flex items-center justify-center gap-x-6 xl:justify-start">
                <a
                  href="/about"
                  className="rounded-md bg-primary-500 w-full px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Get a quote
                </a>
              </div>
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
