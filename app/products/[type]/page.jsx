import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import TrendingProductCard from "@/components/home/trendingProducts/TrendingProductCard";
import Navbar from "@/components/Navbar";
import { getProduct } from "@/sanity/products/getProduct";
import React from "react";

const page = async ({ params }) => {
  const { type } = await params;
  const data = await getProduct(type);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header
          subtitle={"Explore Sri Lanka"}
          title={data?.[0]?.productCategory?.name}
          superTitle={`Top ${data?.[0]?.productCategory?.name} Experiences`}
        />
      </div>
      <div className="w-full  flex flex-wrap  justify-center items-start gap-4 mt-10 ">
        {data && data.length > 0 ? (
          data.map((item) => <TrendingProductCard key={item._id} data={item} />)
        ) : (
          <h1>No Data Found</h1>
        )}
      </div>
      <div className="mt-50">
        <Footer />
      </div>
    </div>
  );
};

export default page;
