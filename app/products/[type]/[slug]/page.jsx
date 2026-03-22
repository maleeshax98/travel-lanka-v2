import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import getImageURL from "@/libs/sanity";
import { getSingleProduct } from "@/sanity/products/getProduct";

const Page = async ({ params }) => {
  const { type, slug } = await params;
  const productData = await getSingleProduct(type, slug);

  // Robust data check
  if (!productData || productData.length === 0) return null;
  const product = productData[0];

  // Map data from the JSON structure
  const primaryCity = product.cities?.[0]; // Accessing first city from array
  const provinceName = primaryCity?.province?.name || "Sri Lanka";
  const cityName = primaryCity?.name;

  return (
    <main className="bg-[#fcfcfc] min-h-screen font-sans">
      <Navbar />

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageURL(product.mainImage.asset)}
            alt={product.name}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#fcfcfc]" />
        </div>

        <div className="relative z-10 text-center space-y-4 px-4">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs tracking-[0.3em] uppercase mb-4 border border-white/20">
            {product.productCategory?.name || "Destination"}
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight drop-shadow-2xl">
            {product.name}
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
            {cityName} • {provinceName}
          </p>
        </div>
      </section>

      {/* --- CONTENT LAYER --- */}
      <section className="relative z-20 -mt-24 w-full max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          {/* Quick Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-50 text-center py-10 bg-gray-50/30">
            <div className="border-r border-gray-100">
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                Location
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {provinceName}
              </p>
            </div>
            <div className="border-r border-gray-100">
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                Starting From
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {product.price || "Contact for Price"}
              </p>
            </div>
            <div className="border-r border-gray-100">
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                Rating
              </p>
              <p className="text-sm font-semibold text-gray-800">
                ★ {product.rating} / 5.0
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                Trending
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {product.isTrending ? "High Demand" : "Available"}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Details */}
            <div className="flex-1 p-8 md:p-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {product.name}
              </h2>
              <p className="text-gray-500 italic mb-8 border-l-4 border-gray-200 pl-4">
                {product.introduction}
              </p>

              <article className="prose prose-stone prose-lg max-w-none prose-p:text-gray-600">
                <BlogContent value={product.body} />
              </article>
            </div>

            {/* Right Column: Contact Sidebar */}
            <div className="w-full lg:w-80 bg-gray-50/50 p-8 border-l border-gray-50">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">
                Contact & Booking
              </h3>
              <div className="space-y-4">
                {product.contactNumbers?.map((num, index) => (
                  <a
                    key={index}
                    href={`tel:${num}`}
                    className="block w-full py-3 px-4 bg-white border border-gray-200 rounded-xl text-center text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    Call: {num}
                  </a>
                ))}
                <a
                  href={product.link}
                  target="_blank"
                  className="block w-full py-4 px-4 bg-black text-white rounded-xl text-center text-sm font-bold shadow-lg hover:opacity-90 transition-opacity"
                >
                  Visit Official Site
                </a>
              </div>
              <div className="mt-10">
                <p className="text-xs text-gray-400 leading-relaxed">
                  <span className="font-bold">Address:</span>
                  <br />
                  {product.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
