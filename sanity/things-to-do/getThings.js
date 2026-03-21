import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

const getToDos = async () => {
  const QUERY = `*[_type == "activityCategory" && defined(slug.current)
] | order(publishedAt desc){_id, name, slug, image, publishedAt}`;
  const todos = await client.fetch(QUERY, {}, options);

  return todos;
};

const getActivities = async (slug) => {
  const QUERY = `*[_type == "activityCategory" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  image,
  body,
  
  "activities": *[_type == "activity" && references(^._id)]{
    _id,
    name,
    slug,
    image,
    location[] -> {location},
    publishedAt,
    activityCategory-> {_id, name, slug}
  }
}`;
  const activity = await client.fetch(QUERY, { slug }, options);
  return activity;
};

export { getToDos, getActivities };
