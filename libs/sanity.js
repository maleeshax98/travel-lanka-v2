import { client } from "@/sanity/client";

import { createImageUrlBuilder } from "@sanity/image-url";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

function getImageURL(obj) {
  const postImageUrl = obj ? urlFor(obj)?.url() : null;
  return postImageUrl;
}

export default getImageURL;
