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

const ActivityCatoCard = ({ data }) => {
  return (
    <div>
      <Link href={`/things-to-do/${data.slug.current}`}>
        <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-110  transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 z-30 aspect-video " />
          <img
            src={data.image !== null ? getImageURL(data?.mainImage?.asset) : ""}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover"
          />
          <div className="flex justify-between p-1">
            {/* <CardAction>
            <Badge variant="secondary">{data?.rating}</Badge>
            <Badge variant="secondary">{data.location[0].location}</Badge>
          </CardAction> */}
          </div>
          <CardHeader>
            <CardTitle className={"text-lg font-semibold"}>
              {data?.name}
            </CardTitle>
            <CardDescription>{data.introduction}</CardDescription>
            <CardFooter>
              {/* <Link href={`/things-to-do/${data.slug.current}`}> */}
                <Button
                  className={
                    "bg-black text-white hover:translate-x-1 transition-all duration-300 ease-in-out p-5 rounded-full cursor-pointer"
                  }
                >
                  View <ArrowRight />{" "}
                </Button>
              {/* </Link> */}
            </CardFooter>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default ActivityCatoCard;
