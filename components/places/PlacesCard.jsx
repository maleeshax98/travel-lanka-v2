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
          <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="w-full">
            {/* <a href={data?.link}> */}
            <Button className="w-full">
              Visit <ArrowRight />
            </Button>
            {/* </a> */}
            {/* <a href={data?.link}> */}
            <Button className="w-full">
              Read More <ArrowRight />
            </Button>
            {/* </a> */}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PlacesCard;
