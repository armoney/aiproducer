import { getAllPostIds, getPostData } from "../../../../lib/posts";
import Head from "next/head";
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

  console.log("data111: ", data);

  return data.blogposts.data.map((blogpost) => ({
    slug: blogpost.attributes.slug,
  }));
}

// async function getPost(params) {
//   const postData = await getPostData(params);

//   return postData;
// }

export default async function Post({ params }) {
  const { slug } = params;
  console.log("slug: ", slug);
  // const postData = await getPost(slug);

  return (
    <>
      HI
      {/* <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article> */}
    </>
  );
  // return <PostLayout post={post} />;
}
// export default function Page({ params }) {
//   return <div>My Post: {params.slug}</div>;
// }
