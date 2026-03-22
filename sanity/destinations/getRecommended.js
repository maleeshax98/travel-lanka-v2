import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

// Get avilable product types in the specific location
const getProductType = async (locationRef) => {
  const QUERY = `
    array::unique(
      *[_type == "productType" && $locationRef in cities[]._ref]
      .productCategory->name
    )
  `;

  const res = await client.fetch(QUERY, { locationRef }, options);
  return res;
};

const getRecommandedProducts = async (locationRef, productType) => {
  if (!locationRef || !productType) return [];

  const PRODUCTS_QUERY = `*[_type == "productType" && defined(slug.current) && $locationRef in cities[]._ref && productCategory->name == $productType
  ][0...6]{_id, name, slug, publishedAt, mainImage, cities[]-> { name }, mapImage, rating, price, link, introduction, address, contactNumbers, productCategory-> {name}}`;
  const rProducts = await client.fetch(
    PRODUCTS_QUERY,
    { locationRef, productType },
    options,
  );

  return rProducts;
};

const getActivityTypes = async (locationRef) => {
  const QUERY = `
    array::unique(
      *[_type == "activityType" && $locationRef in cities[]._ref]
      .activityCategory->name
    )
  `;

  const res = await client.fetch(QUERY, { locationRef }, options);
  return res;
};

const getRecommendedActivites = async (locationRef, activityCategory) => {
  if (!locationRef || !activityCategory) return [];

  const ACTIVITIES_QUERY = `*[_type=='activityType' && defined(slug.current) && $locationRef in cities[]._ref && activityCategory->name == $activityCategory ][0...6]{_id, name, slug, mainImage, cities[] -> {name}, link, activityCategory-> {_id, name, slug}, price, address, contactNumbers, introduction}`;
  //  | order(publishedAt desc)
  const rActivites = await client.fetch(
    ACTIVITIES_QUERY,
    { locationRef, activityCategory },
    options,
  );

  return rActivites;
};

const getPlacesTypes = async (locationRef) => {
  const QUERY = `
    array::unique(
      *[_type == "placesType" && $locationRef == city._ref]
      .category->name
    )
  `;

  const res = await client.fetch(QUERY, { locationRef }, options);

  return res;
};

const getRecommendedPlaces = async (locationRef, placeType) => {
  if (!locationRef || !placeType) return [];
  const PLACES_QUERY = `*[_type=='placesType' && defined(slug.current) && $locationRef == city._ref && category->name == $placeType ][0...6]{_id, name, slug, mainImage, introduction, address,  city->{_id, name, slug, province->{_id, name, slug}}, category->{_id, name, slug}}`;

  const rPlaces = await client.fetch(
    PLACES_QUERY,
    { locationRef, placeType },
    options,
  );

  console.log(rPlaces);

  return rPlaces;
};

export {
  getProductType,
  getRecommandedProducts,
  getRecommendedActivites,
  getRecommendedPlaces,
  getActivityTypes,
  getPlacesTypes,
};
