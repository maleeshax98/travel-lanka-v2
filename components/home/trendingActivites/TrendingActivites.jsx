import React from "react";
import TrendingActivityCard from "./TrendingActivityCard";
import Header from "@/components/Header";

const TrendingActivites = () => {
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
        <TrendingActivityCard />
        <TrendingActivityCard />
        <TrendingActivityCard />
        <TrendingActivityCard />
        <TrendingActivityCard />
        <TrendingActivityCard />
      </div>
    </section>
  );
};

export default TrendingActivites;
