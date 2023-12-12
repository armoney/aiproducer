import Head from "next/head";
import Navigation from "../../../components/navigation";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";
import Image from "next/image";

const URL = process.env.STRAPI_BASE_URL;

export async function generateStaticParams() {
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
          blogposts {
            data {
              id
              attributes {
                slug
              }
            }
          }
        }`,
    }),
  };
  const res = await fetch(`${URL}/graphql`, fetchParams);
  const { data } = await res.json();

  return data.blogposts.data.map((blogpost) => ({
    slug: blogpost.attributes.slug,
    id: blogpost.id,
  }));
}

async function getPostData(slug) {
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
        blogposts (filters: { slug: { eq: "${slug}" }}){
          data {
            id
            attributes {
              title
              tags {
                data {
                  attributes {
                    name
                  }
                }
              }
              minutes
              author_name
              author_title
              blogbody
              date_published
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

export default async function Post({ params }) {
  const { slug } = params;
  const postData = await getPostData(slug);
  const data = postData.blogposts.data[0];

  const PostBody = function () {
    return (
      <ReactMarkdown
        components={{
          img: ({ src, alt }) => <img src={src} alt={alt} loading="lazy"></img>,
        }}
        className={styles.reactMarkdown}
      >
        {data.attributes.blogbody}
      </ReactMarkdown>
    );
  };

  const tags = data.attributes.tags.data.map((tag) => {
    return (
      <li
        key={tag.attributes.name}
        className="w-max mt-1 text-primary-600 rounded-full bg-primary-100 px-3.5 py-2.5 text-sm font-semibold"
      >
        {tag.attributes.name}
      </li>
    );
  });

  const DateFormatted = new Date(
    data.attributes.date_published
  ).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mt-28 pb-12">
      <Navigation />
      <Image
        className="mx-auto w-100 h-auto md:h-600 md:object-cover md:object-right"
        alt="main image"
        src={`${data.attributes.splash.data.attributes.url}`}
        width="1400"
        height="1400"
        loading="eager"
      />
      <div className="px-4 max-w-screen-xl mx-auto md:px-6 xl:px-2">
        <article>
          <p className="mt-4 text-md leading-6 text-gray-600">
            {data.attributes.minutes} min read
          </p>
          <h1 className="leading-tight mt-6 text-5xl font-semibold text-gray-900 sm:text-6xl lg:text-7xl lg:col-start-1 lg:col-span-7">
            {data.attributes.title}
          </h1>
          <div className="mt-8 h-px w-100 bg-slate-300"></div>
          <div className="mt-12">
            <PostBody />
          </div>
        </article>
        <div className="mt-16">
          <div className="mt-8 md:flex md:items-center">
            <Image
              className="mt-6 h-16 w-16 rounded-full"
              src={`${data.attributes.author_image.data.attributes.url}`}
              width={70}
              height={70}
              alt={`${data.attributes.author_name} image`}
            />
            <div className="md:mt-4 md:ml-4">
              <p className="mt-2 text-base font-semibold leading-7 text-gray-900">
                {data.attributes.author_name}
              </p>
              <p className="text-md leading-6 text-gray-600">
                {data.attributes.author_title}
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="font-semibold">Tags</p>
            <ul className="mt-2">{tags}</ul>
          </div>

          <div className="mt-8">
            <p className="font-semibold">Published</p>
            <p className="">{DateFormatted}</p>
          </div>
        </div>

        <div className="mt-16 text-center text-2xl font-semibold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          <p className="">Get started with SeeV today!</p>
          <p>We&apos;ll help you create an amazing video resume</p>

          <div className="mt-10 flex text-center items-center justify-center gap-x-6">
            <a
              href="/#pricing"
              className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
