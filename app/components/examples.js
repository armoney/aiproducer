import { useState } from "react";
import PaulImg from "../../public/paul.jpeg";
import ArmonImg from "../../public/armon.jpeg";
import JoshImg from "../../public/josh.jpeg";
import HakimImg from "../../public/hakim.jpeg";
import Image from "next/image";
import clsx from "clsx";

export default function Examples() {
  const clients = [
    {
      name: "Josh Murphy",
      title: "Executive Producer",
      img: JoshImg,
      videoSrc: `https://player.vimeo.com/video/828795162`,
      id: 0,
    },
    {
      name: "Paul Plicz",
      title: "Producer & Director",
      img: PaulImg,
      videoSrc: `https://player.vimeo.com/video/872719438`,
      id: 1,
    },
    {
      name: "Armon Arcuri",
      title: "Full-Stack Engineer",
      img: ArmonImg,
      videoSrc: `https://player.vimeo.com/video/869303726`,
      id: 2,
    },
    {
      name: "Hakim Abdullah",
      title: "Senior iOS Engineer",
      img: HakimImg,
      videoSrc: `https://player.vimeo.com/video/877390593`,
      id: 3,
    },
  ];
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  function handleSelectClient(e) {
    setSelectedClient(clients[e.currentTarget.id]);
  }

  const listItems = clients.map((person) => {
    const bg = clsx({ "bg-slate-100": selectedClient.id === person.id });

    return (
      <li
        className="my-2"
        key={person.id}
        id={person.id}
        onClick={(e) => handleSelectClient(e)}
      >
        <button
          className={`${bg} w-full rounded-md p-4 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100`}
        >
          <figcaption>
            <div className="flex">
              <Image
                className="h-8 w-8 rounded-full"
                src={person.img}
                alt={`${person.name} profile picture`}
              />
              <div className="pl-2 text-lg font-semibold text-gray-900">
                {person.name}
              </div>
            </div>
            <div className="text-gray-600 text-sm font-light text-left pt-2">
              {person.title}
            </div>
          </figcaption>
        </button>
      </li>
    );
  });

  return (
    <div
      id="examples"
      className="py-32 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary-500">
          Examples
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          See the possibilities
        </p>
      </div>
      <div className="mt-2 lg:flex lg:mt-16">
        <div className="mx-auto  md:max-w-2xl lg:w-1/2">
          <ul className="py-4 md:px-2">{listItems}</ul>
          {/* <a className="p-4 text-primary-500 text-sm text-">
            View other examples <span aria-hidden="true">→</span>
          </a> */}
        </div>
        <div
          className="relative overflow-hidden max-w-full mt-6 h-56 sm:h-96 lg:mt-0 lg:w-full"
          id="video-resume"
        >
          <iframe
            className="w-full h-full"
            src={selectedClient.videoSrc}
            allow="autoplay; fullscreen; picture-in-picture"
            title={`${selectedClient.name} video resume`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
