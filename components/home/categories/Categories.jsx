import React from "react";
import CategoryList from "./CategoryList";
import { getFeatured } from "@/sanity/getFeatured";
import Header from "../../Header";

const Categories = async () => {
  const data = await getFeatured();
  if (data.length) {
    return (
      <div>
        <div className="">
          <Header
            subtitle={"Discover Sri Lanka"}
            title={"Unforgettable Experiences"}
            superTitle={"From Mountains to Oceans"}
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
