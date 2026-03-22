import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import RecommandedItems from "@/components/recommanded/RecommandedItems";
import getImageURL from "@/libs/sanity";
import { getPlaceData } from "@/sanity/places/getPlacesData";
import React from "react";

const Page = async ({ params }) => {
  const { slug } = await params;
  const place = await getPlaceData(slug);
  if (!place)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      {/* Hero Section: Cinematic Entrance */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageURL(place[0].mainImage.asset)}
            alt={place[0].name}
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-white/80 uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up">
            Explore {place[0].placeType?.name || "Destination"}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold drop-shadow-2xl">
            {place[0].name}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <article className="relative z-20 -mt-20 bg-white rounded-t-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
          {/* Metadata Row */}
          <div className="flex flex-wrap justify-between items-center mb-12 pb-8 border-b border-gray-100">
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs uppercase font-semibold">
                Province
              </span>
              <span className="text-gray-800 font-medium">
                {place[0].city?.province?.name}
              </span>
            </div>
            <div className="flex space-x-4">
              {/* Place for social share or rating badges */}
              <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                {place[0].category?.name}
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-p:text-gray-600 leading-relaxed">
            <BlogContent value={place[0].body} />
          </div>
        </div>
      </article>

      <RecommandedItems locationRef={place[0].city.province._id} />

      <Footer />
    </main>
  );
};

export default Page;
