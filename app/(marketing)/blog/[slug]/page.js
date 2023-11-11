import { getAllPostIds, getPostData } from "../../../../lib/posts";
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
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
  // return <PostLayout post={post} />;
}
// export default function Page({ params }) {
//   return <div>My Post: {params.slug}</div>;
// }
