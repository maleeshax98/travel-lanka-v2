import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "featured" && defined(slug.current)
][0...6]{_id, title, slug, description, image, link}`;

const options = { next: { revalidate: 30 } };

const getFeatured = async () => {
  const featured = await client.fetch(POSTS_QUERY, {}, options);

  return featured;
};

export { getFeatured };
