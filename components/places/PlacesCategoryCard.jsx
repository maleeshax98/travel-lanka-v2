"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import getImageURL from "@/libs/sanity";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlacesCategoryCard = ({ data }) => {
  return (
    <div className="relative">
      <Link href={`places/${data.slug.current}`}>
        <Card className="relative mx-auto w-full max-w-sm cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out pt-0 ">
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

            <div className="flex gap-2 flex-wrap">
              {data.cities.map((c, i) => {
                return <Badge variant="outline" key={i}>{c.name}</Badge>;
              })}
            </div>
            <CardDescription className="text-xs mt-3">
              {data?.introduction}
            </CardDescription>
          </CardHeader>
          <CardFooter className={"bg-white"}>
            <Button
              className={
                "bg-black text-white hover:translate-x-1 transition-all duration-300 ease-in-out p-5 rounded-full cursor-pointer"
              }
            >
              View <ArrowRight />{" "}
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default PlacesCategoryCard;
