"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

const ProductNavigation = ({ data }) => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to toggle arrow visibility
  const updateArrows = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      // We use a small buffer (5px) for precision issues
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
      // Initial check
      updateArrows();
      return () => container.removeEventListener("scroll", updateArrows);
    }
  }, [data]);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const target =
        containerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      // Using GSAP for a buttery smooth programmatic scroll
      gsap.to(containerRef.current, {
        scrollLeft: target,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="group relative max-w-7xl mx-auto px-4">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/90 shadow-lg rounded-full border border-gray-100 transition-opacity duration-300 ${
          showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="flex items-center space-x-4 overflow-x-auto no-scrollbar py-4 scroll-smooth"
      >
        {data.map((item) => (
          <Link
            key={item._id}
            href={`/products/${item.slug.current}`}
            className={`shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              pathname === `/products/${item.slug.current}`
                ? "bg-orange-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/90 shadow-lg rounded-full border border-gray-100 transition-opacity duration-300 ${
          showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};

export default ProductNavigation;
