"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  useGSAP(() => {
    const split = new SplitText(".introduction", {
      type: "lines, words, chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=1500%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.from(split.chars, {
      yPercent: 100,
      opacity: 0,
      rotateX: -20,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    }).to(
      split.words,
      {
        color: "oklch(70.5% 0.213 47.604)", // Highlight effect (Yellow-500) as they scroll
        stagger: 0.1,
      },
      0,
    );

    tl.to(".introduction", {
      opacity: 0,
      // x: "-100vw",
      duration: 1,
      ease: "power1.inOut",
    });

    tl.to(".second-section", {
      // x: "0",
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      anticipatePin: 1,
    });

    gsap.to(".map-container", {
      yPercent: -3,
      repeat: -1,
      duration: 2,
      yoyo: true,
      ease: "power1.inOut",
    });

    tl.to(".second-section", {
      x: "-100vw",
      // opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      anticipatePin: 1,
      duration: 2,
    });

    // return () => split.revert();
  }, []);

  return (
    <div className="main-container p-10 h-screen flex flex-col justify-center items-center ">
      <div>
        <h1 className="introduction text-center text-2xl md:text-5xl font-bold max-w-6xl leading-tight">
          Tucked away in the Indian Ocean, Sri Lanka may look small on the map —
          but its story is anything but. This island is a world of its own,
          where lush landscapes, diverse wildlife, and centuries of culture come
          together in perfect harmony. It’s not just a destination — it’s an
          experience you don’t forget.
        </h1>
      </div>

      <div className="opacity-0 absolute inset-0 z-10 w-full max-w-7xl mx-auto px-6 flex flex-wrap md:flex-nowrap justify-center items-center gap-10 second-section h-screen  ">
        <div className="map-container ">
          <div className="relative max-w-[350px] w-[200px] md:w-auto  mt-[80px] md:mt-[0px]">
            <Image
              src="/Assets/Images/intro-sri-lanka.png"
              alt="Sri Lanka Map"
              width={500}
              height={650}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] object-contain"
              priority
            />
          </div>
        </div>

        <div className="second-text-container flex flex-col items-center lg:items-start text-center lg:text-left ">
          <span className="font-caveat text-2xl md:text-3xl text-orange-600 mb-2">
            Timeless Island Experiences
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Discover the Soul <br className="hidden md:block" /> of Sri Lanka
          </h2>

          <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full" />

          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
            From misty mountains to golden shores, Sri Lanka blends raw nature,
            rich heritage, and warm hospitality into experiences that stay with
            you long after the journey ends.
          </p>
          <Link href={"/destinations"}>
            <button className="mt-8 px-10 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-black/5">
              Explore Destinations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
