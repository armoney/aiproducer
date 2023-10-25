import {
  PencilSquareIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Questionnaire",
    description:
      "Fill out a ten minute questionnaire about your work history and hobbies",
    icon: DocumentTextIcon,
  },
  {
    name: "Interview",
    description: `Interview remotely with a Hollywood producer`,
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Final Cut",
    description:
      "We edit and send you the final cut, then share wherever you want",
    icon: PlayCircleIcon,
  },
];

export default function Process({ id }) {
  return (
    <div id={id} className="pb-24 sm:pb-32 md:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-500">
            Video resume
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            It&apos;s a simple three step process
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-2xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-20 lg:pl-24">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-lg bg-transparent">
                    <feature.icon
                      className="h-16 w-16 lg:h-20 lg:w-20 text-primary-500"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
