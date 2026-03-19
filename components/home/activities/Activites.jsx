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

const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

const Activites = () => {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));
  return (
    <section className="mt-[120px] md:mt-[10px]">
      <div>
        <div className=" header">
          <h4 className="font-caveat text-4xl text-center text-orange-500">
            Unforgettable Memories
          </h4>

          <h1 className="flex flex-col text-5xl font-bold text-center">
            <span>Activities</span>
            <span className="text-orange-600">Around Sri Lanka</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-2xl p-5"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {works.map((artwork, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <ActivityCard artwork={artwork} key={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center items-center">
        <ButtonMain
          text="Explore More"
          icon={<ArrowRight className="w-4 h-4" />}
        />
      </div>
    </section>
  );
};

export default Activites;
