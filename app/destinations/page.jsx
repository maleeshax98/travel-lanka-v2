import { getDestinations } from "@/sanity/destinations/getDestinationsData";

import Navbar from "@/components/Navbar";
import React from "react";
import DestinationCard from "@/components/destinations/DestinationCard";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";

const page = async () => {
  const destinations = await getDestinations();
  return (
    <main>
      <Navbar />
      <div className=" max-w-7xl mx-auto">
        <div>
          <Header
            subtitle={"Exlore Sri Lanka"}
            title={"Must visit destinations"}
            superTitle={"In Sri Lanka"}
          />
        </div>
        <div className="w-full  flex flex-wrap gap-10 justify-center items-center p-5">
          {destinations.map((d) => {
            return <DestinationCard data={d} key={d._id} />;
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
