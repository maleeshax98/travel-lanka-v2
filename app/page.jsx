import HeroSection from "@/components/HeroSection";
import Categories from "@/components/home/categories/Categories";
import Navigation from "@/components/Navigation";
import About from "@/components/home/sriLanka/About";
import React from "react";
import Activites from "@/components/home/activities/Activites";
import DestinationsGallery from "@/components/home/destinationsGallery/DestinationsGallery";
import Contact from "@/components/home/contact/Contact";
import Footer from "@/components/footer/Footer";
import TrendingActivites from "@/components/home/trendingActivites/TrendingActivites";

const page = () => {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Categories />

      {/* Product list */}
      <TrendingActivites />

      <About />
      <Activites />
      <DestinationsGallery />

      {/* blog posts */}

      <Contact />
      <Footer />
    </main>
  );
};

export default page;
