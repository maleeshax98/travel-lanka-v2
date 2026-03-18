import HeroSection from "@/components/HeroSection";
import Categories from "@/components/home/categories/Categories";
import Navigation from "@/components/Navigation";
import React from "react";

const page = () => {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Categories />
    </main>
  );
};

export default page;
