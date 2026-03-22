import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "destinationsType" && defined(slug.current) && isFeatured == true
][0...6]{_id, name, slug, publishedAt, mainImage, city->{name}}`;

const options = { next: { revalidate: 30 } };

const getTrendingDestinations = async () => {
  const destinations = await client.fetch(POSTS_QUERY, {}, options);

  return destinations;
};

export { getTrendingDestinations };
