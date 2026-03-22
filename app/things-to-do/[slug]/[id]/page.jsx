import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { getDestination } from "@/sanity/destinations/getDestinationsData";

import getImageURL from "@/libs/sanity";
import RecommandedItems from "@/components/recommanded/RecommandedItems";
import { getSingleActivity } from "@/sanity/things-to-do/getThings";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MapPin } from "lucide-react";
import { Coins } from "lucide-react";
import { Phone } from "lucide-react";

const Page = async ({ params }) => {
  const { slug, id } = await params;
  const activityData = await getSingleActivity(id);

  if (!activityData) return null;

  const locationRef = activityData.cities[0].province._id;
  // Parallel data fetching for better performance
  // const [productTypes, activityTypes, placeTypes] = await Promise.all([
  //   getProductType(locationRef),
  //   getActivityTypes(locationRef),
  //   getPlacesTypes(locationRef),
  // ]);

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      <Navbar />

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getImageURL(activityData.mainImage.asset)}
            alt={activityData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fcfcfc]" />
        </div>

        {/* Hero Title - Large and Elegant */}
        <div className="relative z-10 text-center space-y-4 px-4">
          <p className="text-white/90 uppercase tracking-[0.4em] text-xs md:text-sm font-caveat drop-shadow-md">
            Discover Sri Lanka
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl  text-white font-bold tracking-tight drop-shadow-2xl">
            {activityData.name}
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full opacity-80" />
        </div>
      </section>

      {/* --- CONTENT LAYER --- */}
      <section className="relative z-20 -mt-32 w-full ">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
          {/* Internal Navigation or Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-50 text-center py-8 bg-gray-50/50">
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                Province
              </p>
              <p className="text-sm font-semibold text-gray-800 uppercase">
                {activityData?.cities[0]?.province?.name}
              </p>
            </div>
            <div>
              {/* <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                Best Time
              </p> */}
              {/* <p className="text-sm font-semibold text-gray-800 uppercase">
                {destination?.bestTimeToVisit}
              </p> */}
            </div>
            {/* Add more stats as needed */}
          </div>

          <div className="p-8 md:p-16 lg:p-20">
            <div className="mb-20 flex flex-wrap justify-between items-start gap-3">
              <div className="flex flex-col gap-5">
                <p className="text-lg font-semibold flex items-center gap-2">
                  {" "}
                  <MapPin /> {activityData.address}
                </p>
                <p className="text-lg font-semibold flex items-center gap-2">
                  {" "}
                  <Coins /> Price: {activityData.price}
                </p>
                {activityData?.link && (
                  <Link href={activityData?.link}>
                    <Button className="w-full cursor-pointer max-w-lg rounded-full p-5 hover:translate-x-2 transition-all duration-300">
                      Go to Activity <ArrowRight />
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                {activityData.contactNumbers.map((c, i) => {
                  return (
                    <span
                      key={i}
                      className="text-lg font-semibold flex items-center gap-2"
                    >
                      <Phone /> {c}
                    </span>
                  );
                })}
              </div>
            </div>
            {/* Cinematic Article Body */}
            <article
              className="prose prose-stone prose-lg max-w-none 
              prose-headings: prose-headings:font-bold 
              prose-img:rounded-2xl prose-img:shadow-lg
              prose-p:leading-relaxed prose-p:text-gray-600"
            >
              <BlogContent value={activityData.body} />
            </article>
          </div>
        </div>
      </section>

      {/* --- RECOMMENDATIONS SECTION --- */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="space-y-6">
            <h2 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
              Things to Do in {destination.name}
            </h2>
            <RecommandedActivities
              activityTypes={activityTypes}
              locationRef={locationRef}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
              Essential Products
            </h2>
            <RecommandedProducts
              locationRef={locationRef}
              productTypes={productTypes}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
              Nearby Places
            </h2>
            <RecommandedPlaces
              locationRef={locationRef}
              placesTypes={placeTypes}
            />
          </div>
        </div>
      </section> */}

      <RecommandedItems locationRef={locationRef} />

      <Footer />
    </main>
  );
};

export default Page;
