"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = ({ title, subtitle, superTitle }) => {
  useGSAP(() => {
    gsap.set(".header", { opacity: 0 });

    gsap.to(".header", {
      scrollTrigger: {
        trigger: ".header",
        start: "top 90%",
        end: "top 70%",
        scrub: 1,
      },
      duration: 2,
      opacity: 1,
      autoAlpha: 1,
    });
  });
  return (
    <div className=" header">
      <h4 className="font-caveat text-4xl text-center text-orange-500">
        {subtitle}
      </h4>

      <h1 className="flex flex-col text-4xl md:text-5xl font-bold text-center">
        <span>{title}</span>
        <span className="text-orange-600">{superTitle}</span>
      </h1>
    </div>
  );
};

export default Header;
