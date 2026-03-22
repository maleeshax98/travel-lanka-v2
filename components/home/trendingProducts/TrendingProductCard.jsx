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

const TrendingProductCard = ({ data }) => {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={getImageURL(data.mainImage.asset)}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover hover:scale-105 transition-all duration-300"
        />
        <div className="flex justify-between p-1">
          <CardAction>
            <Badge variant="secondary">{data?.productType?.title}</Badge>
          </CardAction>
          <CardAction>
            <Badge variant="secondary">{data?.rating}</Badge>
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
          <CardDescription>
            <h1>Price {data?.price}</h1>
          </CardDescription>
        </CardHeader>
        <CardFooter className='flex justify-between flex-wrap'>
          <Link href={data?.link}>
            <Button className="w-full cursor-pointer">
              View Product <ArrowRight />
            </Button>
          </Link>
          <Link href={`/products/${data?.slug.current}`}>
            <Button className="w-full cursor-pointer bg-gray-500">
              Read More <ArrowRight />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrendingProductCard;
