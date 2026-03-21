import BlogContent from "@/components/BlogContent";
import Navbar from "@/components/Navbar";
import PlacesCard from "@/components/places/PlacesCard";
import { getPlacesData, getPlaces } from "@/sanity/places/getPlacesData";
import React from "react";
import getImageURL from "@/libs/sanity";

const Page = async ({ params }) => {
  const { places: slug } = await params;
  const placeCategory = await getPlaces(slug);
  
  // Guard clause for safety
  if (!placeCategory || placeCategory.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
  }

  const activeCategory = placeCategory[0];
  const items = await getPlacesData(activeCategory._id);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* --- CINEMATIC HERO --- */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageURL(activeCategory.image?.asset)}
            alt={activeCategory.name}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for text contrast and cinematic "fade to content" */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <span className="text-emerald-400 font-bold tracking-[0.3em] text-xs uppercase">
              Destination Guide
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white font-bold">
              {activeCategory.name}
            </h1>
          </div>
        </div>
      </section>

      {/* --- CATEGORY DESCRIPTION --- */}
      <section className="py-16 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="prose prose-stone prose-lg mx-auto">
            {/* Using BlogContent for the category's own intro text */}
            <BlogContent value={activeCategory.body} />
          </div>
        </div>
      </section>

      {/* --- EXPLORATION GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Featured Locations</h2>
            <p className="text-gray-500 mt-2">Discover the hidden gems in {activeCategory.name}</p>
          </div>
          <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            {items?.length || 0} Results found
          </div>
        </div>

        {items && items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item._id} className="transform transition-all duration-500 hover:-translate-y-2">
                <PlacesCard data={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
            <p className="text-gray-400 italic">No locations discovered in this category yet.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Page;