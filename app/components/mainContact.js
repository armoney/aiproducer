import { useState } from "react";
import Modal from "../components/modal";
import ContactForm from "../components/contactForm";

export default function MainContact() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mt-20 mb-32 mx-6 bg-primary-50 rounded-lg border border-gray-300 xl:mx-auto max-w-7xl">
      <div className="py-28 px-6 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-left">
            Ready to elevate your job prospects?
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-left">
            Supercharge your applications now
          </p>
        </div>
        <div className="pt-16 text-center lg:pt-0">
          <a
            href="#"
            className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            onClick={() => setOpenModal(true)}
          >
            Yes, schedule my free consultation
          </a>
        </div>
      </div>

      <Modal isOpen={openModal} closeIt={() => setOpenModal(false)}>
        <div id="contact-form">
          <ContactForm formName={"Free Consultation"} />
        </div>
      </Modal>
    </div>
  );
}
