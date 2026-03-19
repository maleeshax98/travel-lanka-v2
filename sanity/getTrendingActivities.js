// getTrendingActivities

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "product" && defined(slug.current) && isTrending == true
][0...6]{_id, name, slug, mainImage, location, price, rating, link, productType->{
title}}`;

const options = { next: { revalidate: 30 } };

const getTrendingActivities = async () => {
  const activities = await client.fetch(POSTS_QUERY, {}, options);
  return activities;
};

export { getTrendingActivities };
