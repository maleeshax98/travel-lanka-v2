import Navbar from "@/components/Navbar";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import { getToDos } from "@/sanity/things-to-do/getThings";
import ActivityCatoCard from "@/components/activities/ActivityCatoCard";

const page = async () => {
  const todos = await getToDos();
  return (
    <main>
      <Navbar />
      <div className=" max-w-7xl mx-auto">
        <div>
          <Header
            subtitle={"Thrilling Adventures"}
            title={"Experience the Best"}
            superTitle={"Activities Sri Lanka Has to Offer"}
          />
        </div>
        <div className="w-full  flex flex-wrap gap-10 justify-center items-center p-5">
          {todos.map((d) => {
            return <ActivityCatoCard data={d} key={d._id} />;
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
