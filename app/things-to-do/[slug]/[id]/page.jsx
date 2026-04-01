import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import getImageURL from "@/libs/sanity";
import RecommandedItems from "@/components/recommanded/RecommandedItems";
import { getSingleActivity } from "@/sanity/things-to-do/getThings";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Coins, Phone, Info } from "lucide-react";
import GYGActivitiesWidget from "@/components/getYourGuide/GYGActivitiesWidget";

const Page = async ({ params }) => {
  const { slug, id } = await params;
  const activityData = await getSingleActivity(id);

  if (!activityData) return null;

  const locationRef = activityData.cities?.[0]?.province?._id;
  const provinceName = activityData?.cities?.[0]?.province?.name;

  console.log(activityData);
  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      <Navbar />

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageURL(activityData.mainImage.asset)}
            alt={activityData.name}
            className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in duration-1000"
          />
          {/* Enhanced Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fcfcfc]" />
        </div>

        <div className="relative z-10 text-center space-y-4 px-4">
          <p className="text-white/90 uppercase tracking-[0.4em] text-xs md:text-sm font-medium drop-shadow-md">
            Experience {provinceName}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl text-white font-bold tracking-tight drop-shadow-2xl max-w-5xl mx-auto">
            {activityData.name}
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full opacity-80" />
        </div>
      </section>

      {/* --- CONTENT LAYER --- */}
      <section className="relative z-20 -mt-24 w-full max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
          {/* Quick Stats / Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 border-b border-gray-50 text-center py-10 bg-gray-50/30">
            <div className="border-r border-gray-100">
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em] mb-1">
                Province
              </p>
              <p className="text-sm font-semibold text-gray-800 uppercase">
                {provinceName}
              </p>
            </div>
            <div className="border-r border-gray-100">
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em] mb-1">
                Price Guide
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {activityData.price || "Free"}
              </p>
            </div>
            {/* <div className="hidden md:block">
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em] mb-1">
                Capacity
              </p>
              <p className="text-sm font-semibold text-gray-800">
                Up to 8 Guests
              </p>
            </div> */}
          </div>

          <div className="p-8 md:p-16 lg:p-20">
            {/* Action & Info Grid */}
            <div className="grid lg:grid-cols-3 gap-16 mb-20">
              {/* Left Side: Article Content */}
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                    <Info size={16} /> Overview
                  </h3>
                  <p className="text-2xl text-gray-700 leading-relaxed font-light italic">
                    "{activityData.introduction}"
                  </p>
                </div>

                <article
                  className="prose prose-stone prose-lg max-w-none 
                  prose-headings:font-bold 
                  prose-p:leading-relaxed prose-p:text-gray-600
                  prose-strong:text-gray-900"
                >
                  <BlogContent value={activityData.body} />
                </article>
              </div>

              {/* Right Side: Contact & Location Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                <div className="p-8 bg-gray-50 rounded-3xl space-y-6 border border-gray-100 sticky top-10">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                    Activity Details
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <MapPin className="text-gray-600" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">
                          Location
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          {activityData.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Coins className="text-gray-600" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">
                          Booking Price
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          {activityData.price}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter mb-3">
                        Contact Support
                      </p>
                      <div className="flex flex-col gap-2">
                        {activityData.contactNumbers.map((num, i) => (
                          <a
                            href={`tel:${num}`}
                            key={i}
                            className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-black transition-colors"
                          >
                            <Phone size={14} /> {num}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {activityData?.link && (
                    <Link href={activityData?.link} target="_blank">
                      <Button className="w-full h-14 rounded-2xl text-md font-bold hover:gap-4 transition-all duration-300 shadow-lg shadow-black/10">
                        Book Now <ArrowRight size={20} />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <GYGActivitiesWidget data={activityData.gygActivities} />
      </div>
      {/* Recommendations */}
      <div className="mt-20">
        <RecommandedItems locationRef={locationRef} />
      </div>

      <Footer />
    </main>
  );
};

export default Page;
