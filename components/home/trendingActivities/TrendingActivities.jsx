import ActivitiesCard from "@/components/activities/ActivitiesCard";
import Header from "@/components/Header";
import { getTrendingAcivitiesHomePage } from "@/sanity/getTrendingActivities";
import React from "react";

const TrendingActivities = async () => {
  const data = await getTrendingAcivitiesHomePage();
  return (
    <div className="my-20">
      <div>
        <Header
          superTitle={"Explore"}
          title={"Trending Activities"}
          subtitle={"Top experiences travelers are booking right now"}
        />
      </div>
      <div className="w-full  flex flex-wrap  justify-center items-start gap-4 mt-10 ">
        {data.map((a) => (
          <ActivitiesCard key={a._id} data={a} />
        ))}
      </div>
    </div>
  );
};

export default TrendingActivities;
