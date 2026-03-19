// getNavbarData

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "category" && defined(slug.current)
][0...6]{_id, title, slug, "subItems": *[references(^._id)][0...10]{_id, name, slug}}`;

const options = { next: { revalidate: 30 } };

const getNavbarData = async () => {
  const navbarData = await client.fetch(POSTS_QUERY, {}, options);
  return navbarData;
};

export { getNavbarData };
