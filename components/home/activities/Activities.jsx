import React from "react";
import ActivitesList from "./ActivitesList";
import { getTrendingActivities } from "@/sanity/getTrendingActivities";

const Activities = async () => {
    const data = await getTrendingActivities()

  return (
    <>
      <ActivitesList data={data} />
    </>
  );
};

export default Activities;
