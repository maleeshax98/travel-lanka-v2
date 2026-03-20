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
  console.log(productType);

  const PRODUCTS_QUERY = `*[_type == "product" && defined(slug.current) && $locationRef in location[]._ref && productType->title == $productType
  ] | order(publishedAt desc)[0...6]{_id, name, slug, publishedAt, mainImage, location[]-> { location}, mapImage, rating, productType-> {title}}`;
  const rProducts = await client.fetch(
    PRODUCTS_QUERY,
    { locationRef, productType },
    options,
  );

  return rProducts;
};

const getRecommendedActivites = async (locationRef) => {
  const ACTIVITIES_QUERY = `*[_type=='activity' && defined(slug.current) && '${locationRef}' in location[]._ref ] | order(publishedAt desc)[0...6]{_id, name, slug, image, location, activityCategory-> {_id, name, slug}}`;
  const rActivites = await client.fetch(ACTIVITIES_QUERY, {}, options);

  return rActivites;
};

const getRecommendedPlaces = async (locationRef) => {
  const PLACES_QUERY = `*[_type=='places' && defined(slug.current) && '${locationRef}' in location[]._ref ] | order(publishedAt desc)[0...6]{_id, name, slug, mainImage,  location[]->{location}, placeType->{name}}`;
  const rPlaces = await client.fetch(PLACES_QUERY, {}, options);

  return rPlaces;
};

export {
  getProductType,
  getRecommandedProducts,
  getRecommendedActivites,
  getRecommendedPlaces,
};
