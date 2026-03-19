"use client";
import React from "react";
import { ArrowUpRight, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full min-h-[60vh] flex flex-col justify-between overflow-hidden bg-black text-white">
      {/* --- VIDEO BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50" // Adjust opacity to keep text readable
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* --- CONTENT LAYER (z-10 to stay above video) --- */}
      <div className="relative z-10 px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <p className="text-gray-300 max-w-sm text-lg mb-6 leading-relaxed">
            Crafting bespoke travel experiences across the emerald isle.
            Discover the soul of Sri Lanka with CeylanÉvasion.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white transition-all"
          >
            Back to top{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
            Explore
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:line-through cursor-pointer transition-all">
              Destinations
            </li>
            <li className="hover:line-through cursor-pointer transition-all">
              Luxury Stays
            </li>
            <li className="hover:line-through cursor-pointer transition-all">
              Private Tours
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
            Social
          </h4>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
            <Twitter className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
            <Github className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>

      {/* --- BRANDING LAYER --- */}
      <div className="relative z-10 w-full h-[30vh] md:h-[40vh] flex items-end overflow-hidden">
        <h1 className="w-full text-[15vw] font-extrabold leading-[0.8] tracking-tighter text-orange-600 select-none pointer-events-none translate-y-4">
          CeylanÉvasion
        </h1>
      </div>

      {/* --- UTILITY LAYER --- */}
      <div className="relative z-10 px-10 py-6 border-t border-white/10 flex flex-wrap justify-between text-[10px] uppercase tracking-widest text-gray-400 backdrop-blur-sm bg-black/20">
        <p>© 2026 CeylanÉvasion. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
