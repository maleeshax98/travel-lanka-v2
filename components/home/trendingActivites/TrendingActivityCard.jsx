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

const TrendingActivityCard = () => {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="/Assets/Images/smaple.webp"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover"
        />
        <div className="flex justify-between p-1">
          <CardAction>
            <Badge variant="secondary">Type</Badge>
          </CardAction>
          <CardAction>
            <Badge variant="secondary">Rating</Badge>
            <Badge variant="secondary">Location</Badge>
          </CardAction>
        </div>
        <CardHeader>
          <CardTitle>Design systems meetup</CardTitle>
          <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
          <CardDescription>
            <h1>Price $40</h1>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">
            Visit <ArrowRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrendingActivityCard;
