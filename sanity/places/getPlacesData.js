import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

const getPlaces = async (slug) => {
  const QUERY = `*[_type == "placesCategory" && defined(slug.current) && slug.current==$slug]{_id, name, slug, image, body, publishedAt}`;

  const place = await client.fetch(QUERY, { slug }, options);
  return place;
};

const getPlacesData = async (ref) => {
  const QUERY = `*[_type == "places" && placeType._ref == $ref]{_id, name, slug, mainImage,  location[]->{location}, placeType->{name}}`;

  const data = await client.fetch(QUERY, { ref }, options);
  return data;
};

const getPlaceData = async (slug) => {
  const QUERY = `*[_type == 'places' && defined(slug.current) && slug.current == $slug]{_id, name, slug, mainImage, link, body, location[]->{location}, placeType->{name}}`;

  const data = await client.fetch(QUERY, { slug }, options);
  return data;
};

export { getPlaces, getPlacesData, getPlaceData };
