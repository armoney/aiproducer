import {
  PencilSquareIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "1. Questionnaire",
    description: "Fill out a short questionnaire and schedule your interview",
    icon: DocumentTextIcon,
  },
  {
    name: "2. Interview",
    description: `Meet with a Hollywood producer to customize and create your video resume's aesthetic`,
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "3. First Edit",
    description: "We edit and send a rough cut. You give us your notes",
    icon: PencilSquareIcon,
  },
  {
    name: "4. Final Cut",
    description:
      "We revize and send you the final cut in the format of your choice",
    icon: PlayCircleIcon,
  },
];

export default function Process({ id }) {
  return (
    <div id={id} className="pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-500">
            Video resume
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            It&apos;s a simple four step process
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
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
