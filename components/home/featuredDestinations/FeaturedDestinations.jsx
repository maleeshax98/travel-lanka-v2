import React from "react";
import { getTrendingDestinations } from "@/sanity/getTrendingDes";
import FeaturedDestinationsList from "./FeaturedDestinationsList";

const FeaturedDestinations = async () => {
  const destinations = await getTrendingDestinations();
  return (
    <div>
      <FeaturedDestinationsList destinations={destinations} />
    </div>
  );
};

export default FeaturedDestinations;
