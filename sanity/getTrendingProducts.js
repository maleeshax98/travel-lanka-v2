// getTrendingActivities

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "productType" && defined(slug.current) && isTrending == true
][0...6]{_id, name, slug, mainImage, introduction, address, price, contactNumbers, isTrending, link, cities[]->{name, slug}, rating}`;

const options = { next: { revalidate: 30 } };

const getTrendingProducts = async () => {
  const activities = await client.fetch(POSTS_QUERY, {}, options);
  return activities;
};

export { getTrendingProducts };
