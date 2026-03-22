import { client } from "@/sanity/client";

const QUERY = `*[_type == "activityCategoryType" && defined(slug.current)
][0...6]{_id, name, slug, publishedAt, mainImage}`;

const options = { next: { revalidate: 30 } };

const getTrendingActivities = async () => {
  const activities = await client.fetch(QUERY, {}, options);

  return activities;
};

export { getTrendingActivities };
