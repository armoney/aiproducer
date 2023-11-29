import { getAllPostIds, getPostData } from "../../../../lib/posts";
import Date from "../../../components/date";
import Head from "next/head";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  console.log("paths: ", paths);
  return paths.map((path) => ({
    slug: path.slug,
  }));
}

async function getPost(params) {
  const postData = await getPostData(params);

  return postData;
}

export default async function Post({ params }) {
  const { slug } = params;
  console.log("slug: ", slug);
  const postData = await getPost(slug);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>
        {/* <Image src={postData.heroSrc} /> */}
        <article className="max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {postData.title}
          </h1>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            By <span>{postData.author_name}</span>,{" "}
            <span>{postData.author_company}</span>{" "}
            <span>{postData.author_title}</span>
          </h2>
          <div>
            <Date
              className="mt-2 text-base leading-7 text-gray-600"
              dateString={postData.date}
            />
          </div>
          <div
            className="mt-6 text-lg leading-8 text-gray-600"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </div>
    </>
  );
  // return <PostLayout post={post} />;
}
// export default function Page({ params }) {
//   return <div>My Post: {params.slug}</div>;
// }
