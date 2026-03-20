"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import PlacesCard from "@/components/places/PlacesCard";
import { useRecommendedPlaces } from "@/hooks/useRecommendedPlaces";

const RecommandedPlaces = ({ locationRef, placesTypes }) => {
  const [selectedValue, setSelectedValue] = useState(placesTypes[0]);
  const { data, loading, error } = useRecommendedPlaces(
    locationRef,
    selectedValue,
  );

  if (error)
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-md">
        Error: {error}
      </div>
    );
  return (
    <div>
      <div className="p-5">
        <Tabs defaultValue={placesTypes[0]} className="w-full">
          <TabsList className="w-full">
            {placesTypes && placesTypes.length > 0
              ? placesTypes.map((item) => (
                  <TabsTrigger
                    key={item}
                    value={item}
                    onClick={() => setSelectedValue(item)}
                  >
                    {item}
                  </TabsTrigger>
                ))
              : null}
          </TabsList>
        </Tabs>
      </div>
      <div className="w-full  flex flex-wrap  justify-left items-center gap-4  p-5">
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
            data.map((item) => <PlacesCard key={item._id} data={item} />)
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

export default RecommandedPlaces;
