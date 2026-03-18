import React from "react";
import SriLankaMap from "./SriLankaMap";

const HeroSection = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="text-center md:text-left">
          <h1 className="font-caveat text-4xl">
            Discover the Pearl of the Indian Ocean
          </h1>
          <p>
            Explore the rich culture, stunning landscapes, and warm hospitality
            of,
          </p>
          <h1 className="font-extrabold text-9xl">Sri Lanka</h1>
          <button className="primary-button mt-5">Explore Now</button>
        </div>

        <div>
          <SriLankaMap />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
