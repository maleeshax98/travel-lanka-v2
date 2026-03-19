import getImageURL from "@/libs/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ActivityCard = ({ data }) => {
  return (
    <div className="a-card cursor-pointer group">
      <figure className="shrink-0">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={getImageURL(data.image.asset)}
            alt={`Photo by`}
            className="aspect-[3/4] h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            width={300}
            height={400}
          />
          <div className="texts w-full absolute bottom-0 p-5 bg-black/50 transition-colors duration-300 group-hover:bg-black/70">
            <h1 className="text-2xl text-white font-bold transition-transform duration-300 group-hover:translate-x-2">
              {data.name}
            </h1>
            <h2 className="transition-all duration-300 ease text-white text-sm flex items-center gap-2 hover:underline hover:text-gray-300">
              EXPLORE MORE
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </h2>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ActivityCard;
