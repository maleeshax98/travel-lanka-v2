import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;

  console.log(slug);
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className=" flex flex-col justify-center items-center w-full ">
        <div>
          {/* <Header subtitle={"Explore Sri Lanka"} title={destination[0].name} /> */}
        </div>
        <div className="p-10 max-w-7xl mx-auto">
          {/* <BlogContent value={destination[0].body} /> */}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
