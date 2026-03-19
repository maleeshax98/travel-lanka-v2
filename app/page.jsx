import HeroSection from "@/components/HeroSection";
import Categories from "@/components/home/categories/Categories";
import Navigation from "@/components/Navigation";
import About from "@/components/home/sriLanka/About";
import React from "react";
import Activites from "@/components/home/activities/Activites";

const page = () => {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Categories />

      <About />
      <Activites />

      {/* featured places */}

      {/* blog posts */}

      {/* contact */}

      {/* footer */}
    </main>
  );
};

export default page;
