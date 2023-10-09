import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import ModalContent from "./modalContent";

const Testimonial = ({ imgSrc, quote, name, title }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-16 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <svg
          className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{`"${quote}"`}</p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="flex items-center justify-center">
              {" "}
              <Image
                className="h-10 w-10 rounded-full"
                src={imgSrc}
                alt="profile picture"
              />
            </div>

            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{name}</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">{title}</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <button
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => setShowModal(true)}
              >
                Watch video resume <span aria-hidden="true">→</span>
              </button>
            </div>
            {showModal &&
              createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
              )}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
