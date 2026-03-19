import React from "react";
import { getTrendingDestinations } from "@/sanity/getTrendingDes";
import DestinationsGalleryList from "./DestinationsGalleryList";

const DestinationsGallery = async () => {
  const destinations = await getTrendingDestinations();
  return (
    <div>
      <DestinationsGalleryList destinations={destinations} />
    </div>
  );
};

export default DestinationsGallery;
