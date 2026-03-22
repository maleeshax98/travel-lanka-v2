import React from "react";
import CategoryList from "./CategoryList";
import { getFeatured } from "@/sanity/getFeatured";
import Header from "../../Header";

const Categories = async () => {
  const data = await getFeatured();
  console.log(data);
  if (data.length) {
    return (
      <div>
        <div className="">
          <Header
            subtitle={"Explore Sri Lanka"}
            title={"Explore The Beauty"}
            superTitle={"Around Sri Lanka"}
          />
        </div>

        <div>
          <CategoryList data={data} />
        </div>
      </div>
    );
  }
};

export default Categories;
