import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import getImageURL from "@/libs/sanity";
import Link from "next/link";
import { MapPin } from "lucide-react";

const PlacesCard = ({ data }) => {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={getImageURL(data.mainImage.asset)}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover"
        />
        <div className="flex justify-between p-1">
          <CardAction>
            <Badge variant="secondary">{data?.placeType?.name}</Badge>
          </CardAction>
          <CardAction>
            {/* <Badge variant="secondary">{data?.rating}</Badge> */}
            <Badge variant="secondary">{data.location[0].location}</Badge>
          </CardAction>
        </div>
        <CardHeader>
          <CardTitle className={"text-lg font-semibold"}>
            {data?.name}
          </CardTitle>
          <CardDescription>{data?.description}</CardDescription>
          <CardDescription className="flex items-center gap-2 mt-5">
            <MapPin className="w-4 h-4 text-gray-500" />
            {data?.address}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between flex-wrap bg-white ">
          <Link href={`/places/${data?.slug.current}`}>
            <Button className="w-full cursor-pointer bg-black text-white rounded-full hover:translate-x-2 transition-all duration-300 p-5">
              Read More <ArrowRight />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PlacesCard;
