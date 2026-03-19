import React from "react";
import TrendingActivityCard from "./TrendingActivityCard";
import Header from "@/components/Header";
import { getTrendingActivities } from "@/sanity/getTrendingActivities";

const TrendingActivites = async () => {
  const data = await getTrendingActivities();

  return (
    <section className="">
      <div>
        <Header
          subtitle={"Joyful Activities"}
          title={"Trending Activities in"}
          superTitle={"Sri Lanks"}
        />
      </div>
      <div className="w-full  flex flex-wrap  justify-center items-center gap-4 mt-10 ">
        {data && data.length > 0 ? (
          data.map((item) => (
            <TrendingActivityCard key={item._id} data={item} />
          ))
        ) : (
          <h1>No Data Found</h1>
        )}
      </div>
    </section>
  );
};

export default TrendingActivites;
