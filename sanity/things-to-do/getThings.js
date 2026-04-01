import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

const getToDos = async () => {
  const QUERY = `*[_type == "activityCategoryType" && defined(slug.current)
] | order(publishedAt desc){_id, name, slug, mainImage, publishedAt,introduction}`;
  const todos = await client.fetch(QUERY, {}, options);

  return todos;
};

const getActivities = async (slug) => {
  const QUERY = `*[_type == 'activityType' && activityCategory->slug.current == $slug]{
    name,
    _id,
    slug,
    mainImage,
    publishedAt,
    introduction,
    body,
    activityCategory->{name, slug},
    cities[]->{name, province->{name}},
    address,
    price,
    contactNumbers,
    link,
    gygActivities-> {
  _id, _ref, locationId,numberOfItems,partnerId,locationUrl, query}
  }`;

  const activity = await client.fetch(QUERY, { slug }, options);

  return activity;
};

const getActivity = async (slug) => {
  const QUERY = `*[_type == 'activityCategoryType' && slug.current == $slug][0]{
  _id,
    name,
    slug,
    mainImage,
    publishedAt,
    introduction,
    body,    
    gygActivities-> {
  _id, _ref, locationId,numberOfItems,partnerId,locationUrl, query}
  }`;

  const activity = await client.fetch(QUERY, { slug }, options);

  return activity;
};

const getSingleActivity = async (slug) => {
  const QUERY = `*[_type == 'activityType' && slug.current == $slug][0]{
  _id,
    name,
    slug,
    mainImage,
    publishedAt,
    introduction,
    body,    
    cities[]->{_id, name, slug, province->{_id, name, slug}},
    address,
    price,
    contactNumbers,
    link,
    gygActivities-> {
  _id, _ref, locationId,numberOfItems,partnerId,locationUrl, query}
    }`;

  const activity = await client.fetch(QUERY, { slug }, options);

  return activity;
};

export { getToDos, getActivities, getActivity, getSingleActivity };
