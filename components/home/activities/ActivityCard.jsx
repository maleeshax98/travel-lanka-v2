import getImageURL from "@/libs/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ActivityCard = ({ data }) => {
  return (
    <div className="a-card cursor-pointer group">
      <figure className="shrink-0">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={getImageURL(data.mainImage.asset)}
            alt={`Photo by`}
            className="aspect-[3/4] h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            width={300}
            height={400}
          />
          <div className="texts w-full absolute bottom-0 p-5 bg-black/50 transition-colors duration-300 group-hover:bg-black/70">
            <h1 className="text-lg md:text-2xl text-white font-bold transition-transform duration-300 group-hover:translate-x-2">
              {data.name}
            </h1>
            <Link href={`/things-to-do/${data.slug.current}`}>
              <h2 className="transition-all duration-300 ease text-white text-xs md:text-sm flex items-center gap-2 hover:underline hover:text-gray-300">
                EXPLORE MORE
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </h2>
            </Link>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ActivityCard;
