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
    <section className="mt-[120px] md:mt-[10px]">
      <div>
        <Header
          subtitle={"Unforgettable Memories"}
          title={"Popular Activities"}
          superTitle={"Around Sri Lanka"}
        />
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl p-5"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <ActivityCard data={item} key={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center items-center">
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
