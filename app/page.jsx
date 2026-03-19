import HeroSection from "@/components/HeroSection";
import Categories from "@/components/home/categories/Categories";
import Navigation from "@/components/Navigation";
import Activities from "@/components/home/activities/Activities";
import About from "@/components/home/sriLanka/About";
import React from "react";

const page = () => {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Categories />

      <About />
      <Activities />
    </main>
  );
};

export default page;
