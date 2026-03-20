"use client";
import { useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import getImageURL from "@/libs/sanity";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
const DestinationCard = ({ data }) => {
  let mapImageRef = useRef(null);
  let cardRef = useRef(null);

  useGSAP(() => {
    if (cardRef !== null) {
      gsap.to(cardRef.current, {
        opacity: 1,
        // duration: 0.5,
        // ease: "power1.inOut",
      });
      if (mapImageRef !== null) {
        cardRef.current.addEventListener("mouseover", () => {
          gsap.to(mapImageRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        });
        cardRef.current.addEventListener("mouseout", () => {
          gsap.to(mapImageRef.current, {
            opacity: 0,
            duration: 0.5,
          });
        });
      }
    }
  }, []);
  return (
    <div className="relative">
      <Link href={`destinations/${data.slug.current}`}>
        <Card
          ref={cardRef}
          className="relative mx-auto w-full max-w-sm cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out pt-0 opacity-0"
        >
          <div className="absolute  z-30 aspect-video bg-black/35" />
          <img
            src={
              data.mainImage.asset._ref && getImageURL(data.mainImage.asset)
                ? getImageURL(data.mainImage.asset)
                : "https://avatar.vercel.sh/shadcn1"
            }
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="font-bold text-lg">{data.name}</CardTitle>
            <Badge variant="secondary">{data?.location?.location}</Badge>
          </CardHeader>
        </Card>
      </Link>
      <div>
        {data.mapImage &&
          data.mapImage.asset._ref &&
          getImageURL(data.mapImage.asset) && (
            <div className="">
              <img
                src={getImageURL(data.mapImage.asset)}
                alt="Map"
                className="w-[50%] h-auto object-contain absolute top-[-60px] left-0  z-1 opacity-0"
                ref={mapImageRef}
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default DestinationCard;
