"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Modal from "./components/modal";
import ContactForm from "./components/contactForm";
import Navigation from "./components/navigation";
import Process from "./components/process";
import Examples from "./components/examples";
import Testimonial from "./components/testimonial";
import MainContact from "./components/mainContact";
import Paul from "../public/paul.jpeg";
import Armon from "../public/armon.jpeg";
import Hakim from "../public/hakim.jpeg";
import Mark from "../public/mark.jpeg";
import Ketaki from "../public/ketaki.jpeg";
import "./page.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { init as initFullStory } from "@fullstory/browser";

export default function Page() {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      initFullStory({ orgId: process.env.NEXT_PUBLIC_FS_ORG_ID });
    }
  }, []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white">
      <Navigation />
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="grid grid-cols-1 gap-x-12 gap-y-4 mx-auto max-w-3xl py-32 sm:gap-y-12 sm:py-38 md:py-48 md:gap-y-20 lg:pt-56 lg:pb-36 xl:max-w-7xl xl:grid-cols-2 xl:gap-x-20">
          <div className="text-center xl:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Video resumes reinvented
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tired of wasting your time sending out ineffective paper resumes?
              Boost your chances of landing interviews or new clients by 250%
              with an amazing custom SeeV video resume that showcases your
              experience, skills and personality in the best ways possible.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 xl:justify-start">
              <a
                href="#"
                className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                onClick={() => setOpenModal(true)}
              >
                Free Consultation
              </a>
              <Modal isOpen={openModal} closeIt={() => setOpenModal(false)}>
                <div id="contact-form">
                  <ContactForm formName={"Free Consultation"} />
                </div>
              </Modal>
            </div>
          </div>
          <div className="max-w-full h-80 md:h-96">
            <iframe
              className="w-full h-full"
              src={"https://player.vimeo.com/video/877191269"}
              allow="autoplay; fullscreen; picture-in-picture"
              title="SeeV commercial"
            ></iframe>
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

      <Process id="process" />
      <div
        id="testimonials"
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
      >
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
              imgSrc={Ketaki}
              quote={`I LOVE IT!!! I feel like you've captured 'me' in 90 seconds in a way no
              resume can - going to start using this for all my outreach now.
              Thank you so much for working with me on this.`}
              title={`Customer Success & Account Management`}
              name={`K.M.`}
            />
          </div>
          <div>
            <Testimonial
              imgSrc={Mark}
              quote={`Having the opportunity to connect immediately with potential
                  employers is an invaluable asset and a necessary tool to help me
                  stand out in today's ever-changing job market. The See-V team took
                  great care to make sure the process was easy and fun. Better yet, it
                  was like having a career coach with me who was able to help me bring
                  out the best of what I do in a clear, concise, and engaging way.`}
              title={`Senior Creative Producer`}
              name={`Mark Cramer`}
            />
          </div>
          <div>
            <Testimonial
              imgSrc={Hakim}
              videoSrc={`https://player.vimeo.com/video/877390593`}
              quote={`My video resume experience with SeeV was great. They sent me a
                  thorough questionnaire covering not just my skills but
                  also my interests, family, and travel experiences. It's essential
                  to understand the person beyond their resume. Video resumes give a
                  real glimpse of who you are, I highly recommend giving it a try.`}
              title={`Senior iOS Engineer`}
              name={`Hakim Abdullah`}
            />
          </div>
          <div>
            <Testimonial
              imgSrc={Paul}
              videoSrc={`https://player.vimeo.com/video/872719438`}
              quote={`Josh really knows how to make you feel comfortable and direct you in
              a way to ensure that your video resume turns out as entertaining,
              compelling, and informative as humanly possible. I would 100%
              suggest working with Josh, and plan to come back to him myself when
              the time comes to film and create an updated one!`}
              title={`Producer & Director`}
              name={`Paul Plicz`}
            />
          </div>
          <div>
            <Testimonial
              imgSrc={Armon}
              videoSrc={`https://player.vimeo.com/video/869303726`}
              quote={`Having little on camera experience I was hesitant, but Josh knows
              exactly what to say to you to make your performance professional!
              I'm truly impressed with the results and have already recieved
              compliments from hiring managers!`}
              title={`Full Stack Engineer`}
              name={`Armon Arcuri`}
            />
          </div>
        </Slider>
      </div>

      <Examples />
      <MainContact />
      {/* <div className="">
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
      </div> */}
    </div>
  );
}
