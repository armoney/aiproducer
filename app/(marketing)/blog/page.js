import { getSortedPostsData } from "../../../lib/posts";
async function getPosts() {
  const allPostsData = getSortedPostsData();
  // console.log("allPostsData: ", allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default async function Index() {
  const posts = await getPosts();
  console.log("posts: ", posts.props.allPostsData);
  return posts.props.allPostsData.map((post) => (
    <a key={post.title} href={`/blog/${post.id}`}>
      {post.title}
    </a>
  ));
}
