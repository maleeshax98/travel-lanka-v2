// getNavbarData

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "placesCategoryType" && defined(slug.current)
][0...10]{_id, name, slug, "subItems": *[ _type == "placesType" && references(^._id)][0...10]{_id, name, slug}}`;

const DESTINATIONS_QUERY = `*[_type == "destinationsType" && defined(slug.current)
][0...10]{_id, name, slug}`;

const ACTIVITY_QUERY = `*[_type == "activityCategoryType" && defined(slug.current)
][0...10]{_id, name, slug}`;

const options = { next: { revalidate: 30 } };

const getNavbarData = async () => {
  const navbarData = await client.fetch(POSTS_QUERY, {}, options);
  const activityData = await client.fetch(ACTIVITY_QUERY, {}, options);
  const destinations = await client.fetch(DESTINATIONS_QUERY, {}, options);

  const editedNavBarData = [];

  navbarData.forEach((item) => {
    editedNavBarData.push({
      ...item,
      slug: { _type: "slug", current: `places/${item.slug.current}` },
    });
  });

  const des = {
    name: "Destinations",
    slug: { _type: "slug", current: "destinations" },
    subItems: destinations,
  };

  const ac = {
    name: "Things to Do",
    slug: { _type: "slug", current: "things-to-do" },
    subItems: activityData,
  };

  return [des, ...editedNavBarData, ac];
};

const productNavbarData = async () => {
  const QUERY = `*[_type == "productCategoryType" && defined(slug.current)]{_id, slug, name}`;

  const data = await client.fetch(QUERY, {}, options);
  return data;
};

export { getNavbarData, productNavbarData };
