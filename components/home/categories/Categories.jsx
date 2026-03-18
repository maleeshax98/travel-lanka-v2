import React from "react";
import CategoryList from "./CategoryList";
import { getTrendingDestinations } from "@/sanity/getTrendingDes";

const Categories = async () => {
  const data = await getTrendingDestinations();
  console.log(data);
  if (data.length) {
    return (
      <div>
        <div className="">
          <h4 className="font-caveat text-4xl text-center">
            Explore Sri Lanka
          </h4>

          <h1 className="flex flex-col text-5xl font-bold text-center">
            <span>Explore The Beautiful Places</span>
            <span className="text-blue-500">Around Sri Lanka</span>
          </h1>
        </div>

        <div>
          <CategoryList data={data} />
        </div>
      </div>
    );
  }
};

export default Categories;
