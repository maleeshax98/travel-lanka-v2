import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { getDestination } from "@/sanity/destinations/getDestinationsData";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  const destination = await getDestination(slug);
  console.log(destination);
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className=" flex flex-col justify-center items-center w-full ">
        <div>
          <Header subtitle={"Explore Sri Lanka"} title={destination[0].name} />
        </div>
        <div className="p-10 max-w-7xl mx-auto">
          <BlogContent value={destination[0].body} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
