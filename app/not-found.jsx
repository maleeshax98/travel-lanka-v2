import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow relative flex items-center justify-center py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Assets/Images/Gemini_Generated_Image_5lrf7h5lrf7h5lrf.png"
            alt="Sri Lanka Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/80 via-transparent to-white/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-extrabold text-orange-600/20 absolute -top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lost in Paradise?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              It seems you've wandered off the beaten path. Even in Sri Lanka, some places are yet to be discovered. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <button className="primary-button px-8 py-3 text-lg font-semibold shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
                Return Home
              </button>
            </Link>
            <Link href="/tips">
              <button className="px-8 py-3 text-lg font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                Explore Travel Tips
              </button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 bg-blue-50/50 rounded-full blur-3xl" />
      </main>
      <Footer />
    </div>
  );
}
