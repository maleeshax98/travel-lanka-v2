import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

const getAllPlaces = async () => {
  const QUERY = `*[_type == "placesCategoryType" && defined(slug.current)]{
    _id,
    name,
    slug,
    mainImage,
    body,
    cities[]->{name},
    introduction,
    publishedAt
  }`;

  const data = await client.fetch(QUERY, options);
  return data;
};

const getPlaces = async (slug) => {
  const QUERY = `*[_type == "placesCategoryType" && defined(slug.current) && slug.current==$slug]{_id, name, slug, mainImage,  body, publishedAt}`;

  const place = await client.fetch(QUERY, { slug }, options);

  return place;
};

const getPlacesData = async (ref) => {
  const QUERY = `*[_type == "placesType" && category._ref == $ref]{_id, name, slug, mainImage,  city->{name}, introduction,category->{name}}`;

  const data = await client.fetch(QUERY, { ref }, options);

  return data;
};

const getPlaceData = async (slug) => {
  const QUERY = `*[_type == 'placesType' && defined(slug.current) && slug.current == $slug]{_id, name, slug, mainImage, link, body, city->{_id, name, province->{name, slug, _id}}, category->{name}}`;

  const data = await client.fetch(QUERY, { slug }, options);
  return data;
};

export { getPlaces, getPlacesData, getPlaceData, getAllPlaces };
