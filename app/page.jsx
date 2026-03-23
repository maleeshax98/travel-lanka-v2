import HeroSection from "@/components/HeroSection";
import Categories from "@/components/home/categories/Categories";

import About from "@/components/home/sriLanka/About";
import React from "react";
import DestinationsGallery from "@/components/home/destinationsGallery/DestinationsGallery";
import Contact from "@/components/home/contact/Contact";
import Footer from "@/components/footer/Footer";
import TrendingProducts from "@/components/home/trendingProducts/TrendingProducts";
import Navbar from "@/components/Navbar";
import Activities from "@/components/home/activities/Activities";
import { getRecentBlogPosts } from "@/sanity/blog/getPosts";
import BlogSection from "@/components/home/blog/BlogSection";
import TrendingActivities from "@/components/home/trendingActivities/TrendingActivities";

const page = async () => {
  const posts = await getRecentBlogPosts(3);
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

      <TrendingActivities />

      <DestinationsGallery />

      {/* blog posts */}
      <BlogSection posts={posts} />

      <Contact />
      <Footer />
    </main>
  );
};

export default page;
