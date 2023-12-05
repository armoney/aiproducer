import Head from "next/head";
import Navigation from "../../../components/navigation";

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
  console.log("slug111: ", slug);
  const res = await fetch(`${URL}/graphql`, fetchParams);
  const { data } = await res.json();
  return data;
}

export default async function Post({ params }) {
  const { slug } = params;

  const postData = await getPostData(slug);
  const data = postData.blogposts.data[0];
  console.log("postData111: ", postData.blogposts.data[0]);

  return (
    <div className="mt-32 py-12 px-6 md:px-16">
      <Navigation />
      hi
    </div>
  );
}
