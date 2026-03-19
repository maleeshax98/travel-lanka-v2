import React from "react";
import TrendingProductCard from "./TrendingProductCard";
import Header from "@/components/Header";
import { getTrendingProducts } from "@/sanity/getTrendingProducts";

const TrendingProducts = async () => {
  const data = await getTrendingProducts();

  return (
    <section className="">
      <div>
        <Header
          subtitle={"Joyful Activities"}
          title={"Trending Things in"}
          superTitle={"Sri Lanks"}
        />
      </div>
      <div className="w-full  flex flex-wrap  justify-center items-center gap-4 mt-10 ">
        {data && data.length > 0 ? (
          data.map((item) => <TrendingProductCard key={item._id} data={item} />)
        ) : (
          <h1>No Data Found</h1>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
