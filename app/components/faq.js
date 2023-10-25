import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Example() {
  const faqs = [
    {
      id: 0,
      q: `I'm not looking for a job right now, but I still want a
      video resume for my website. Can I do that?`,
      a: `Absolutely. Video resumes are an incredibly effective way for
      companies to showcase their employees' credibility, specialties,
      professionalism, and approachability to the world.`,
    },
    {
      id: 1,
      q: `How much time is this going to take?`,
      a: `We suggest most people should plan on spending 1½ to 2hrs all in between filling out our questionnaire, uploading
    images and videos, and interviewing with one of our producers. However, some people might need more or less time
    in interview (or want to spend more time getting ready for it).`,
    },
    {
      id: 3,
      q: `Why do I need to send you images and videos of myself?`,
      a: `It's hard to overstate just how valuable having a variety of relevant visual materials is to making a dynamic video
    resume that holds a viewer's interest. Think about if your favorite TV show was just a single shot of a guy sitting in a
    chair talking… Probably not the best show anymore, right? Including images and videos of things like work
    experiences, portfolio samples, and even hobbies and interests is a fantastic way to paint a complete picture of not
    only your professional bona fides, but also your stellar personality for prospective employers.`,
    },
    {
      id: 4,
      q: `I'm just trying to get a job, why would it benefit me to have a “Hollywood producer” help make my video?`,
      a: `Hollywood producers are experts at presenting talent (in the context of a video resume that's YOU baby) in the
    most favorable and effective ways to “sell” products (movies, shows, detergent, tax preparation services) to a target
    audience. This means coaching talent to be comfortable and confident on camera, to look their best, to deliver lines
    concisely and articulately, and to just generally to seem as professional and likable as possible. At SeeV, your career
    is our passion, but Hollywood entertainment is our pedigree. And you'll see the difference in your finished video
    resume.`,
    },
    {
      id: 5,
      q: `Why do I need a video resume?`,
      a: `According to CareerBuilder.com, a good video resume is 250% more effective at landing you recruiter callbacks
    than a traditional paper resume. Which makes sense, because recruiters are increasingly distracted, time-pressed,
    and bombarded with hundreds (and sometimes thousands) of applicants. You only have a few seconds to make a
    first impression, and video is a way more effective way to upsell job seeker strengths like excellent communication
    skills, passion, likability, and stand-out portfolio samples.`,
    },
    {
      id: 6,
      q: `Where can I share my video resume?`,
      a: `Most people share their video resumes in emails to hiring managers and recruiters, on cover letters, job
    applications, and professional social media platforms (like LinkedIn, ZipRecruiter, etc.). But it's your video resume,
    you can share it wherever you want!`,
    },
    {
      id: 7,
      q: `How does the process work?`,
      a: `It's a simple 3-step process. 1) Fill out our short questionnaire about your work history and goals, 2) Interview
    remotely with a Hollywood producer and 3) We edit, share for your notes, and deliver the final cut. Then you share it
    wherever you want!`,
    },
    {
      id: 8,
      q: `Why do I need to pay SeeV to make a video resume for me? Can't I just do it myself?`,
      a: `100% you can! And with time, SeeV plans to make “how to” resources available for free to help you do just that!
    However, some job seekers don't have the time, creative sensibility, editing know-how, or the desire to roll up their
    sleeves to do it all themselves. We, however, thrive on that stuff! That's why SeeV stands out as the go-to destination
    for crafting stellar, tailor-made video resumes.`,
    },
  ];

  const disclosures = faqs.map((faq) => {
    return (
      <Disclosure key={faq.id} as="div" className="mt-4">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-primary-100 px-4 py-2 text-left text-md font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
              <span>{faq.q}</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 min-w-20 text-primary-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-600">
                {faq.a}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    );
  });

  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-2">
        <h2 className="pb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        {disclosures}
      </div>
    </div>
  );
}
