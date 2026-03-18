"use client";
import getImageURL from "@/libs/sanity";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const CategoryList = ({ data }) => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(
    () => {
      const viewportWidth = window.innerWidth;
      const containerWidth = containerRef.current?.scrollWidth;
      console.log(containerWidth, viewportWidth);
      const scrollDistance =
        containerWidth && containerWidth !== viewportWidth
          ? viewportWidth - containerWidth
          : 0;

      const scroll = gsap.fromTo(
        containerRef.current,
        {
          x: 0,
        },
        {
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `bottom top`,
            scrub: 2,
            pin: true,
            invalidateOnRefresh: true,
            markers: true,
          },
          x: scrollDistance,
          ease: "none",
        },
      );

      return () => scroll.kill();
    },
    {
      scope: triggerRef,
    },
  );
  return (
    <section>
      <div ref={triggerRef} className="overflow-hidden h-full">
        <section
          ref={containerRef}
          className="flex flex-nowrap gap-10 p-10 w-full h-screen items-center justify-between  "
        >
          {data.map((d, i) => (
            <div
              key={i}
              className="cato-card shrink-0 relative w-[50vw] h-[500px] bg-yellow-200 rounded-2xl flex items-center justify-center overflow-hidden"
            >
              <Image
                src={getImageURL(d.mainImage.asset)}
                alt={"title"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex items-end justify-between">
                <div className="flex flex-col text-white">
                  <h3 className="text-2xl font-bold mb-1">{d.name}</h3>
                  <div className="flex items-center text-sm text-gray-200">
                    <MapPin size={14} className="mr-1" />
                    {d.location}
                  </div>
                </div>

                {/* Explore Button / Arrow Icon */}
                <button className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-black hover:border-white text-white rounded-full p-2 transition-all duration-300">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default CategoryList;
