import { Navigation } from "../components/navigation";
import Image from "next/image";
import JoshImg from "../../public/josh.jpeg";
import ArmonImg from "../../public/armon.jpeg";
const About = () => {
  const teamMembers = [
    {
      id: 0,
      name: "Josh Murphy",
      img: JoshImg,
      title: "CEO",
      linkedIn: "https://www.linkedin.com/in/joshthemurph/",
      desc: "Josh is a roll-up-your-sleeves Executive Producer with two decades of experience creating, developing, selling, writing, and producing top tier video and audio content for blue chip brands. He spearheaded the development and sale of 23 series, documentaries, specials, podcasts, and pilots to major media brands like Netflix, Paramount+, Warner Brothers Discovery, Facebook, NBCUniversal, ABC, Audible, and AETN. IP Josh and his talented teams developed has gone on to yield 500+ hours of brand-defining entertainment content.",
    },
    {
      id: 1,
      name: "Armon Arcuri",
      img: ArmonImg,
      title: "CTO",
      linkedIn: "https://www.linkedin.com/in/armon-arcuri/",
      desc: "Armon is a full-time Full-Stack developer and part time outdoors enthusiast. He loves conversations with good espresso and dreams about a catch & cook trip in the Alaskan backcountry.",
    },
  ];

  const cards = teamMembers.map((member) => {
    return (
      <li key={member.id}>
        <Image
          className="rounded-2xl	object-cover	w-full aspect-[3/2] h-auto"
          src={member.img}
          alt={member.name}
        />
        <h3 className="mt-6 text-lg leading-8 font-semibold">{member.name}</h3>
        <p className="leading-7 text-base	text-gray-600">{member.title}</p>
        <p className="mt-4 mb-6 leading-7 text-base	text-gray-600">
          {member.desc}
        </p>
        <a href={member.linkedIn} target="_blank" className="mt-4">
          <svg
            className="w-5 h-5 fill-gray-400"
            aria-hidden="true"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
    );
  });
  return (
    <div>
      <Navigation />
      <div className="max-w-2xl m-auto sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl pt-48 px-8">
        <ul className="pb-20 grid gap-x-8 gap-y-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li className="max-w-2xl	md:col-span-2 lg:col-span-3">
            <h2 className="text-gray-900 text-3xl	font-bold	tracking-tight md:text-4xl">
              Our team
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-8">
              We&apos;re a dynamic group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </li>
          {cards}
        </ul>
      </div>
    </div>
  );
};
export default About;
