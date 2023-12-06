import Navigation from "../../components/navigation";
import Link from "next/link";
import Image from "next/image";

const URL = process.env.STRAPI_BASE_URL;

async function getPosts() {
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
        blogposts {
          data {
            attributes {
              title
              description
              author_name
              author_title
              slug
              splash {
                data {
                  attributes {
                    url
                  }
                }
              }              
              author_image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }`,
    }),
  };
  const res = await fetch(`${URL}/graphql`, fetchParams);
  const { data } = await res.json();
  return data;
}

export default async function Index() {
  let { blogposts } = await getPosts();
  const latest = blogposts.data.shift();

  const LatestPost = function ({ attributes }) {
    return (
      <div className="mt-4">
        <div className="flex gap-6 flex-col md:flex-row md:items-center md:grid md:grid-cols-12">
          <div className="md:flex md:col-start-1 md:col-span-7">
            <Image
              src={`${URL}${attributes.splash.data.attributes.url}`}
              className="w-100 h-auto md:h-500 md:object-cover md:object-right"
              width={800}
              height={800}
              alt={"something cool"}
            />
          </div>
          <div className="md:h-500 md:flex md:flex-col md:justify-between md:col-start-8 col-span-5">
            <Link href={`/blog/${attributes.slug}`}>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl md:leading-10 lg:leading-snug">
                {attributes.title}
              </h2>
              <p className="mt-4 text-md leading-6 text-gray-600 md:text-lg">
                {attributes.description}
              </p>
            </Link>
            <div className="md:flex md:items-center">
              <Image
                className="mt-6 h-16 w-16 rounded-full"
                src={`${URL}${attributes.author_image.data.attributes.url}`}
                width={70}
                height={70}
                alt={`${attributes.author_name} image`}
              />
              <div className="md:mt-4 md:ml-4">
                <p className="mt-2 text-base font-semibold leading-7 text-primary-500">
                  {attributes.author_name}
                </p>
                <p className="text-md leading-6 text-gray-600">
                  {attributes.author_title}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 h-px w-100 bg-slate-300"></div>
      </div>
    );
  };

  let previousPosts = blogposts.data.map((blogpost) => (
    <li key={blogpost.attributes.slug} className="mt-12">
      <Link href={`/blog/${blogpost.attributes.slug}`}>
        <Image
          src={`${URL}${blogpost.attributes.splash.data.attributes.url}`}
          className="w-100 h-56 object-cover"
          width={800}
          height={800}
          alt={"something cool"}
        />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
          {blogpost.attributes.title}
        </h2>
        <p className="mt-4 text-md leading-6 text-gray-600">
          {blogpost.attributes.description}
        </p>
      </Link>
      <p className="mt-4 text-base font-semibold leading-7 text-gray-900">
        By {blogpost.attributes.author_name}
      </p>
      <div className="mt-2 h-0.5 w-100 bg-gray-900"></div>
    </li>
  ));

  return (
    <div className="mt-32 py-12 px-4 max-w-screen-xl mx-auto md:px-6 xl:px-2">
      <Navigation />

      <div className="text-left md:pb-8 lg:flex lg:pb-16 lg:grid lg:grid-cols-12">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl lg:col-start-1 lg:col-span-7">
          Blog
        </h1>
        <div className="lg:col-start-8 lg:col-span-5">
          <div className="mt-12 h-0.5 w-100 bg-gray-900 lg:mt-0"></div>
          <p className="mt-2 text-xl font-bold leading-8 text-gray-700 sm:text-2xl lg:text-3xl">
            Articles, insights, news and more from the SeeV team.
          </p>
        </div>
      </div>
      <div className="mt-12 h-px w-100 bg-slate-300"></div>
      <div className="grid grid-cols-1 mt-8">
        <LatestPost attributes={latest.attributes} />
        <ul className="grid gap-x-20 gap-y-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:gap-x-28">
          {previousPosts}
        </ul>
      </div>
    </div>
  );
}
