"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Process from "./components/process";
import Examples from "./components/examples";
import Testimonial from "./components/testimonial";
import SeeV_logo from "../public/logo.png";
import Remote_person_lg from "../public/SeeV_LandingPage_8-min.png";
import Remote_person_md from "../public/SeeV_LandingPage_9-min.jpeg";
import Paul from "../public/paul.jpeg";
import Armon from "../public/armon.jpeg";
// import { gradient } from "../../components/Gradient";
import "./page.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#steps" },
  { name: "Features", href: "#" },
  { name: "Company", href: "#" },
];

export default function Page() {
  // useEffect(() => {
  //   gradient.initGradient("#gradient-canvas");
  // });
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">SeeV</span>
              <Image className="h-16 w-auto" src={SeeV_logo} alt="logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">See V</span>
                <Image className="h-16 w-auto" src={SeeV_logo} alt="logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-38 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Elevate your resume
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tired of wasting your time sending out dozens of resumes only to
              hear crickets? Let SeeV help you stand out from the crowd with a
              dynamic, custom video resume that showcases your experience in the
              best ways possible.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/questionnaire"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Watch Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <Process id="steps" />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Testimonials
          </h2>
          <p className="mb-4 font-light text-gray-500 lg:mb-8 sm:text-xl">
            Check out what people have to say about their experience
          </p>
        </div>
        <Slider {...sliderSettings}>
          <div>
            <Testimonial
              imgSrc={Paul}
              videoSrc={`https://player.vimeo.com/video/872719438`}
              quote={`Working with Josh on my video resume was a delight
                      and a super amazing experience! Josh's
                      professionalism and ability to bring out the best in me
                      during our filming was second to none. He really knows how
                      to make you feel comfortable and direct you in a way to
                      ensure that your video resume turns out as entertaining,
                      compelling, and informative as humanly possible. I would
                      100% suggest working with Josh on your video resume, and
                      plan to come back to him myself when the time comes to
                      film and create an updated one!`}
              title={`Producer & Director`}
              name={`Paul Plicz`}
            />
          </div>
          <div>
            <Testimonial
              imgSrc={Armon}
              videoSrc={`https://player.vimeo.com/video/869303726`}
              quote={`Having little on camera experience I was hesitant, but Josh knows exactly what to say to you to make your performance professional! He has a great ability to find the core of your message all while getting your personality to shine. I'm truly impressed with the results and have already recieved compliments from hiring managers!`}
              title={`Full-Stack Engineer`}
              name={`Armon Arcuri`}
            />
          </div>
        </Slider>
      </div>

      <Examples />

      <div className="py-8 px-4 lg:py-16 lg:px-6">
        <Image
          className="hidden lg:block"
          src={Remote_person_lg}
          alt={"person working remote from mountain looking at city"}
        />
        <Image
          className="lg:hidden"
          src={Remote_person_md}
          alt={"person working remote at coffee shop"}
        />
      </div>

      {/* <div className="w-full h-64 flex items-center justify-center lg:h-144">
        <div className="w-full h-full" id="welcome-video">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/828795162?h=0fc5665123"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div> */}

      {/* <canvas className="h-screen w-1/2" id="gradient-canvas" data-transition-in /> */}
    </div>
  );
}
