"use client";
import React from "react";
import SriLankaMap from "./SriLankaMap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    let split = SplitText.create(".sri-lanka", { type: "words, chars" });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      duration: 1,
      x: -100, // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.1, // 0.05 seconds between each
    });

    gsap.to(".main-text", {
      duration: 2,
      opacity: 1,
      autoAlpha: 1,
    });

    gsap.to(".map", {
      duration: 2,
      opacity: 1,
      autoAlpha: 1,
    });

    gsap.to(".map", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".map-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="mt-20 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="text-center md:text-left">
          <div className="main-text opacity-0">
            <h1 className="font-extrabold  text-5xl md:text-7xl ">
              CeylanÉvasion
            </h1>
            <h1 className="font-caveat text-2xl md:text-4xl">
              Discover the Pearl of the Indian Ocean
            </h1>
            <p className="text-sm md:text-base">
              Explore the rich culture, stunning landscapes, and warm
              hospitality of,
            </p>
            <button className="primary-button mt-5">Explore Now</button>
          </div>

          <h1 className="sri-lanka font-extrabold text-[140px] text-left md:text-[320px] md:leading-[270px] z-[-10]  absolute left-0 bottom-0 opacity-10">
            Sri <br />
            Lanka
          </h1>
        </div>

        <div className="map-container">
          <div className="map opacity-0 scale-100 md:scale-115">
            <SriLankaMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
