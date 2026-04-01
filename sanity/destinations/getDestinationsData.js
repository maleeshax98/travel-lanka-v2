import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "destinationsType" && defined(slug.current)
] | order(publishedAt desc)[0...6]{_id, name, slug, publishedAt, mainImage, city -> {name}, introduction, city->{province->{name, slug}}}`;

const options = { next: { revalidate: 30 } };

const getDestinations = async () => {
  const destinations = await client.fetch(POSTS_QUERY, {}, options);

  return destinations;
};

const getDestination = async (slug) => {
  const DESTINATION_QUERY = `*[_type == "destinationsType" && defined(slug.current) && slug.current=='${slug}']{_id, name,  slug, publishedAt, mainImage,  body, bestTimeToVisit, gygActivities-> {
  _id, _ref, locationId,numberOfItems,partnerId,locationUrl},city->{name, slug, _id, province->{name, slug, _id}}}`;

  const destination = await client.fetch(DESTINATION_QUERY, {}, options);
  return destination;
};

export { getDestinations, getDestination };
