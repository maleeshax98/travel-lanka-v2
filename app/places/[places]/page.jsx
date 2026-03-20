import BlogContent from "@/components/BlogContent";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PlacesCard from "@/components/places/PlacesCard";
import { getPlacesData, getPlaces } from "@/sanity/places/getPlacesData";
import React from "react";

const page = async ({ params }) => {
  const { places } = await params;
  const place = await getPlaces(places);

  const data = await getPlacesData(place[0]._id);
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className=" flex flex-col justify-center items-center w-full ">
        <div>
          <Header subtitle={"Explore Sri Lanka"} title={place[0].name} />
        </div>
        <div className="p-10 max-w-7xl mx-auto">
          <BlogContent value={place[0].body} />
        </div>
        <div>
          {data.length > 0 ? (
            data && data.length > 0 ? (
              data.map((item) => <PlacesCard key={item._id} data={item} />)
            ) : (
              <h1>No Data Found</h1>
            )
          ) : (
            <p className="text-gray-400 italic">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
