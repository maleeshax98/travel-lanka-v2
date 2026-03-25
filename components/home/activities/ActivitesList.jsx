"use client";
import { useRef } from "react";
import Image from "next/image";
import ActivityCard from "./ActivityCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ButtonMain from "@/components/ui/ButtonMain";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

const ActivitesList = ({ data }) => {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));
  return (
    <section className="mt-[120px] md:mt-[10px] w-full overflow-x-hidden py-4">
      <div className="container mx-auto px-4">
        <Header
          subtitle={"Thrilling Adventures"}
          title={"Experience the Best"}
          superTitle={"Activities Sri Lanka Has to Offer"}
        />
      </div>

      {/* 2. Simplified centering and ensured max-width doesn't break layout */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {data.map((item, index) => (
              /* 3. Changed mobile basis to 1/1 or 1/1.2 for better UX/stability */
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ActivityCard data={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* 4. Hidden arrows on mobile to prevent them from pushing screen width */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <div className="flex justify-center items-center mt-8">
        <Link href={"/things-to-do"}>
          <ButtonMain
            text="Explore More"
            icon={<ArrowRight className="w-4 h-4" />}
          />
        </Link>
      </div>
    </section>
  );
};

export default ActivitesList;
