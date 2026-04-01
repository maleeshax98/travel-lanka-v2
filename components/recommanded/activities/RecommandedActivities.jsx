"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecommendedActivities } from "@/hooks/useRecommendedActivities";
import ActivitiesCard from "@/components/activities/ActivitiesCard";

const RecommandedActivities = ({ locationRef, activityTypes }) => {
  const [selectedValue, setSelectedValue] = useState(activityTypes[0]);
  const { data, loading, error } = useRecommendedActivities(
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
        Things to Do
      </h2>

      <div className="p-5">
        <Tabs defaultValue={activityTypes[0]} className="w-full">
          <TabsList className="w-full">
            {activityTypes.map((d, i) => (
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
            data.map((item) => <ActivitiesCard key={item._id} data={item} />)
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

export default RecommandedActivities;
