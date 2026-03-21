import ActivitiesCard from "@/components/activities/ActivitiesCard";
import ActivityCatoCard from "@/components/activities/ActivityCatoCard";
import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import getImageURL from "@/libs/sanity";
import { getPlaceData } from "@/sanity/places/getPlacesData";
import { getActivities } from "@/sanity/things-to-do/getThings";
import React from "react";

const Page = async ({ params }) => {
  const { slug } = await params;
  const activity = await getActivities(slug);
  console.log(activity);
  if (!activity)
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
            src={
              activity.image !== null ? getImageURL(activity.image.asset) : ""
            }
            alt={activity.name}
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-white/80 uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up">
            Explore {activity.placeType?.name || "Activity"}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold drop-shadow-2xl">
            {activity.name}
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
                Location
              </span>
              <span className="text-gray-800 font-medium">Sri Lanka</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-p:text-gray-600 leading-relaxed">
            <BlogContent value={activity.body} />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
          <h2 className="text-3xl font-bold mb-6">Activities in {activity.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activity.activities.map((activity) => (
              <ActivitiesCard key={activity._id} data={activity} />
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default Page;
