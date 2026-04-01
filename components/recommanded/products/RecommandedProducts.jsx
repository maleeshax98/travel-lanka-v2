"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingProductCard from "@/components/home/trendingProducts/TrendingProductCard";
import { useRecommendedProducts } from "@/hooks/useRecommendedProducts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const RecommandedProducts = ({ locationRef, productTypes }) => {
  const [selectedValue, setSelectedValue] = useState(productTypes[0]);
  const { data, loading, error } = useRecommendedProducts(
    locationRef,
    selectedValue,
  );

  if (error)
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-md">
        Error: {error}
      </div>
    );

  if (!data?.length && data.length <= 0) {
    return;
  }

  return (
    <div>
      <h2 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
        Essential Products
      </h2>
      <div className="p-5">
        <Tabs defaultValue={productTypes[0]} className="w-full">
          <TabsList className="w-full">
            {productTypes.map((d, i) => (
              <TabsTrigger
                key={i}
                value={d}
                onClick={() => setSelectedValue(d)}
              >
                {d}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="w-full  flex flex-wrap  justify-left items-start gap-4  p-5">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <Card key={i} className="w-full max-w-xs">
              <CardHeader>
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="aspect-video w-full" />
              </CardContent>
            </Card>
          ))
        ) : data.length > 0 ? (
          data && data.length > 0 ? (
            data.map((item) => (
              <TrendingProductCard key={item._id} data={item} />
            ))
          ) : (
            <h1>No Data Found</h1>
          )
        ) : (
          <p className="text-gray-400 italic">
            No products found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecommandedProducts;
