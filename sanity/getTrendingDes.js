import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "destination" && defined(slug.current) && isTrending == true
][0...6]{_id, name, slug, publishedAt, mainImage, location}`;



const options = { next: { revalidate: 30 } };

const getTrendingDestinations = async () => {
  const destinations = await client.fetch(POSTS_QUERY, {}, options);
 
  return destinations;
};

export { getTrendingDestinations };
