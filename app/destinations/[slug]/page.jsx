import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { getDestination } from "@/sanity/destinations/getDestinationsData";
// Your Sanity image helper
import {
  getActivityTypes,
  getPlacesTypes,
  getProductType,
  getRecommendedPlaces,
} from "@/sanity/destinations/getRecommended";

import RecommandedProducts from "@/components/recommanded/products/RecommandedProducts";
import RecommandedActivities from "@/components/recommanded/activities/RecommandedActivities";
import RecommandedPlaces from "@/components/recommanded/places/RecommandedPlaces";
import getImageURL from "@/libs/sanity";

const Page = async ({ params }) => {
  const { slug } = await params;
  const destinationData = await getDestination(slug);
  const destination = destinationData[0];

  if (!destination) return null;

  const locationRef = destination.city._id;
  // Parallel data fetching for better performance
  const [productTypes, activityTypes, placeTypes] = await Promise.all([
    getProductType(locationRef),
    getActivityTypes(locationRef),
    getPlacesTypes(locationRef),
  ]);

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      <Navbar />

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getImageURL(destination.mainImage.asset)}
            alt={destination.name}
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
            {destination.name}
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
                {destination?.city?.province?.name}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                Best Time
              </p>
              <p className="text-sm font-semibold text-gray-800 uppercase">
                {destination?.bestTimeToVisit}
              </p>
            </div>
            {/* Add more stats as needed */}
          </div>

          <div className="p-8 md:p-16 lg:p-20">
            {/* Cinematic Article Body */}
            <article
              className="prose prose-stone prose-lg max-w-none 
              prose-headings: prose-headings:font-bold 
              prose-img:rounded-2xl prose-img:shadow-lg
              prose-p:leading-relaxed prose-p:text-gray-600"
            >
              <BlogContent value={destination.body} />
            </article>
          </div>
        </div>
      </section>

      {/* --- RECOMMENDATIONS SECTION --- */}
      <section className="py-20 bg-gray-50">
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
      </section>

      <Footer />
    </main>
  );
};

export default Page;
