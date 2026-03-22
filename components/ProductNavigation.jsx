"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductNavigation = ({ data }) => {
  const pathname = usePathname();

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-[72px] z-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start space-x-6 overflow-x-auto no-scrollbar py-3 scroll-smooth">
          {data.map((item) => {
            const isActive = pathname === `/products/${item.slug.current}`;
            return (
              <Link
                key={item._id}
                href={`/products/${item.slug.current}`}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-orange-600"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductNavigation;
