"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import activityData from "@/data/activityData.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ActivitiesLL = () => {
  const [selectedActivity, setSelectedActivity] = useState(
    activityData.activities[0],
  );
  const containerRef = useRef(null); // For scoping

  // 1. Permanent ScrollTrigger for the Header
  useGSAP(
    () => {
      gsap.from(".activities-section-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".activities-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  // 2. Content Swapping Animation (Runs every time selectedActivity changes)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      // Reset initial state to avoid "flash of unstyled content"
      tl.fromTo(
        ".activity-details-content",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
      ).fromTo(
        ".location-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          onComplete: () => ScrollTrigger.refresh(), // Recalculate positions
        },
        "-=0.4", // Start slightly before the content finish
      );

      return () => tl.kill(); // Cleanup
    },
    { dependencies: [selectedActivity], scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="activities-section py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="activities-section-header mb-16">
          <span className="font-caveat text-3xl text-orange-600 mb-4 block">
            Unforgettable Memories
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Activities in Sri Lanka
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mt-6 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Navigation List */}
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col space-y-2 border-l border-gray-100 text-lg">
              {activityData.activities.map((activity, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedActivity(activity)}
                  className={`group text-left px-8 py-5 transition-all duration-300 text-lg relative rounded-r-2xl outline-hidden ${
                    selectedActivity.name === activity.name
                      ? "bg-orange-50/50 text-orange-600"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {/* Indicator Line Animation handled by Tailwind but synced with state */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600 rounded-full transition-all duration-300 ${
                      selectedActivity.name === activity.name
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  <span
                    className={`text-lg md:text-xl font-medium transition-transform duration-300 inline-block ${
                      selectedActivity.name === activity.name
                        ? "translate-x-2"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    {activity.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full lg:w-2/3 activity-details-content">
            <div className="flex flex-col h-full">
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-orange-500/30 decoration-4 underline-offset-8">
                  {selectedActivity.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl ">
                  {selectedActivity.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {selectedActivity.locations.map((location, locIndex) => (
                  <div
                    key={`${selectedActivity.name}-${locIndex}`}
                    className="location-card group relative overflow-hidden rounded-3xl shadow-xl shadow-black/5 aspect-square"
                  >
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Industrial UI: Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-0.5 bg-orange-500" />
                        <p className="text-orange-400 font-medium tracking-wider uppercase text-xs">
                          {location.district}
                        </p>
                      </div>
                      <p className="font-bold text-2xl md:text-3xl tracking-tight leading-tight">
                        {location.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button className="px-10 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-3 shadow-lg shadow-black/10 group cursor-pointer">
                  View Full Itinerary
                  <svg
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesLL;
