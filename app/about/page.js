import Navigation from "../components/navigation";
import Image from "next/image";
import JoshImg from "../../public/Josh_small.png";
import ArmonImg from "../../public/armon.jpeg";
import JohnImg from "../../public/john.png";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const About = () => {
  const teamMembers = [
    {
      id: 0,
      name: "Josh Murphy",
      img: JoshImg,
      title: "CEO",
      linkedIn: "https://www.linkedin.com/in/joshthemurph/",
      desc: "Josh spent the better part of two decades working as a documentary series producer and creative executive and a major part of his work involved selling dozens of TV show ideas to networks like Paramount+, Netflix and Discovery Channel with short pitch tapes called “sizzles.” Along the way he realized that there were some time tested formulas that went into making successful sizzles and that these could be implemented across all kinds of videos to streamline story and present people and their businesses in the most flattering ways possible. Now, he’s excited to use these same skills to create SeeV video resumes to help turn job seekers into the stars of their job searches.",
    },
    {
      id: 1,
      name: "Armon Arcuri",
      img: ArmonImg,
      title: "CTO",
      linkedIn: "https://www.linkedin.com/in/armon-arcuri/",
      desc: "Armon is a full-time Full-Stack developer and part time outdoors enthusiast. He loves conversations with good espresso and dreams about a catch & cook trip in the Alaskan backcountry.",
    },
    {
      id: 2,
      name: "John Fahnenstiel",
      img: JohnImg,
      title: "Business Advisor",
      linkedIn: "https://www.linkedin.com/in/john-fahnenstiel-37296821",
      desc: "John Fahnenstiel, a seasoned finance professional, serves as a Business Advisor to SeeV, leveraging over a decade of experience in the field. A Harvard University graduate with a Bachelor's Degree in Economics, John currently plays a pivotal role at Rocket Lawyer, holding the position of VP of Finance Operations. His diverse experience also includes key roles at Jefferies & Company, where he contributed to significant acquisitions and bond issuances, making him a valuable asset to the company.",
    },
  ];

  const cards = teamMembers.map((member) => {
    return (
      <li key={member.id}>
        <Image
          className="rounded-2xl object-cover	w-full aspect-[2/3] h-auto"
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
              fillRule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clipRule="evenodd"
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
        <ul className="pb-20 grid gap-x-20 gap-y-20 grid-cols-1 sm:max-w-md md:max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:gap-x-28">
          <li className="max-w-2xl	md:col-span-2 lg:col-span-3">
            <h2 className="text-gray-900 text-3xl	font-bold	tracking-tight md:text-4xl">
              Our team
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-8">
              {`Unlike our competitors, our service is run by founders from both
              tech AND entertainment - which is important because if it's one
              thing Hollywood people know how to do is bring out your best on
              camera. SeeV's videos utilize the time-tested rules used in
              Hollywood documentary production that turn everyday people into
              stars by maximizing their credibility, attractiveness, and
              likability on camera.`}
            </p>
            <div className="mt-6 flex items-center">
              <EnvelopeIcon className="mr-4 h-6 w-6 text-gray-600" />
              <p className="text-gray-600 text-lg leading-8">admin@seev.work</p>
            </div>
          </li>
          {cards}
        </ul>
      </div>
    </div>
  );
};
export default About;
