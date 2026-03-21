import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

const getBlogPosts = async () => {
  const QUERY = `*[_type == 'blog']{
  title, slug, image, body}`;

  const res = await client.fetch(QUERY, {}, options);

  return res;
};

const getBlogPost = async (slug) => {
  const QUERY = `*[_type == 'blog' && slug.current == $slug][0]{title, slug, image, body}`;

  const res = await client.fetch(QUERY, { slug }, options);

  return res;
};

const getRecentBlogPosts = async (limit = 3) => {
  const QUERY = `*[_type == 'blog'] | order(_createdAt desc) [0...${limit}]{
  title, slug, image, body}`;

  const res = await client.fetch(QUERY, {}, options);

  return res;
};

export { getBlogPosts, getBlogPost, getRecentBlogPosts };
