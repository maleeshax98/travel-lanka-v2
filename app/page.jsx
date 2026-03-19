import HeroSection from "@/components/HeroSection";
import Categories from "@/components/home/categories/Categories";
import Navigation from "@/components/Navigation";
import About from "@/components/home/sriLanka/About";
import React from "react";
import DestinationsGallery from "@/components/home/destinationsGallery/DestinationsGallery";
import Contact from "@/components/home/contact/Contact";
import Footer from "@/components/footer/Footer";
import TrendingProducts from "@/components/home/trendingProducts/TrendingProducts";
import Navbar from "@/components/Navbar";
import Activities from "@/components/home/activities/Activities";

const page = () => {
  return (
    <main>
      {/* <Navigation /> */}
      <Navbar />
      <HeroSection />
      {/* Destinations, beaches, water falls  */}
      <Categories />

      {/* Product list */}
      <TrendingProducts />

      <About />
      <Activities />
      <DestinationsGallery />

      {/* blog posts */}

      <Contact />
      <Footer />
    </main>
  );
};

export default page;
