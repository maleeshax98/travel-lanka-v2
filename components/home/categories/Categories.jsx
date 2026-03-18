import React from "react";
import CategoryList from "./CategoryList";
import { getTrendingDestinations } from "@/sanity/getTrendingDes";
import Header from "./Header";

const Categories = async () => {
  const data = await getTrendingDestinations();
  console.log(data);

  if (data.length) {
    return (
      <div>
        <div className="">
          <Header />
        </div>

        <div>
          <CategoryList data={data} />
        </div>
      </div>
    );
  }
};

export default Categories;
