import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

// Get avilable product types in the specific location
const getProductType = async (locationRef) => {
  const QUERY = `*[_type == 'product' && '${locationRef}' in location[]._ref ]{
  _id, productType -> {title, slug}
}`;
  const res = await client.fetch(QUERY, {}, options);

  let productTypes = [];
  res.forEach((item) => {
    if (!productTypes.includes(item.productType.title)) {
      productTypes.push(item.productType.title);
    }
  });

  return productTypes;
};

const getRecommandedProducts = async (locationRef, productType) => {
  if (!locationRef || !productType) return [];

  const PRODUCTS_QUERY = `*[_type == "product" && defined(slug.current) && $locationRef in location[]._ref && productType->title == $productType
  ] | order(publishedAt desc)[0...6]{_id, name, slug, publishedAt, mainImage, location[]-> { location}, mapImage, rating, productType-> {title}}`;
  const rProducts = await client.fetch(
    PRODUCTS_QUERY,
    { locationRef, productType },
    options,
  );

  return rProducts;
};

const getActivityTypes = async (locationRef) => {
  const QUERY = `*[_type == 'activity' && '${locationRef}' in location[]._ref ]{
  _id, activityCategory -> {name, slug}
}`;
  const res = await client.fetch(QUERY, {}, options);

  let activityTypes = [];
  res.forEach((item) => {
    if (!activityTypes.includes(item.activityCategory.name)) {
      activityTypes.push(item.activityCategory.name);
    }
  });

  return activityTypes;
};

const getRecommendedActivites = async (locationRef, activityCategory) => {
  if (!locationRef || !activityCategory) return [];

  const ACTIVITIES_QUERY = `*[_type=='activity' && defined(slug.current) && $locationRef in location[]._ref && activityCategory->name == $activityCategory ] | order(publishedAt desc)[0...6]{_id, name, slug, image, location[] -> {location}, activityCategory-> {_id, name, slug}}`;

  const rActivites = await client.fetch(
    ACTIVITIES_QUERY,
    { locationRef, activityCategory },
    options,
  );

  return rActivites;
};

const getPlacesTypes = async (locationRef) => {
  const QUERY = `*[_type == 'places' && '${locationRef}' in location[]._ref ]{
  _id, placeType -> {name, slug}
}`;
  const res = await client.fetch(QUERY, {}, options);

  let placeTypes = [];
  res.forEach((item) => {
    if (!placeTypes.includes(item.placeType.name)) {
      placeTypes.push(item.placeType.name);
    }
  });

  return placeTypes;
};

const getRecommendedPlaces = async (locationRef, placeType) => {
  if (!locationRef || !placeType) return [];
  const PLACES_QUERY = `*[_type=='places' && defined(slug.current) && $locationRef in location[]._ref && placeType->name == $placeType ] | order(publishedAt desc)[0...6]{_id, name, slug, mainImage,  location[]->{location}, placeType->{name}}`;
  const rPlaces = await client.fetch(
    PLACES_QUERY,
    { locationRef, placeType },
    options,
  );

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
