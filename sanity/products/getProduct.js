import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

const getProduct = async (slug) => {
  const QUERY = `*[_type == "productType" && defined(slug.current) && productCategory->slug.current == $slug]{
   _id, name, slug, mainImage, introduction, address, price, contactNumbers, isTrending, link, cities[]->{name, slug, province->{_id, name, slug}}, productCategory->{_id, name, slug}, rating}`;
  const data = await client.fetch(QUERY, { slug }, options);
  return data;
};

const getSingleProduct = async (type, slug) => {
  const QUERY = `*[_type == "productType" && defined(slug.current) && productCategory->slug.current == $type && slug.current == $slug]{
   _id, name, slug, mainImage, introduction, address, price, contactNumbers, isTrending, link, cities[]->{name, slug, province->{_id, name, slug}}, productCategory->{_id, name, slug}, rating}`;
  const data = await client.fetch(QUERY, { type, slug }, options);
  return data;
};

export { getProduct, getSingleProduct };
