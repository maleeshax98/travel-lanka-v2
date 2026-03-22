import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PlacesCategoryCard from "@/components/places/PlacesCategoryCard";
import { getAllPlaces } from "@/sanity/places/getPlacesData";
import React from "react";

const page = async () => {
  const data = await getAllPlaces();
  return (
    <div>
      <Navbar />
      <div className=" max-w-7xl mx-auto">
        <div>
          <Header
            subtitle={"Exlore Sri Lanka"}
            title={"Must visit Destinations"}
            superTitle={"In Sri Lanka"}
          />
        </div>
        <div className="w-full  flex flex-wrap gap-10 justify-center items-center p-5">
          {data.map((d) => {
            return <PlacesCategoryCard data={d} key={d._id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
