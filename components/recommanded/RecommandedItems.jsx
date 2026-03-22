import React from "react";
import {
  getActivityTypes,
  getPlacesTypes,
  getProductType,
  getRecommendedPlaces,
} from "@/sanity/destinations/getRecommended";
import RecommandedProducts from "@/components/recommanded/products/RecommandedProducts";
import RecommandedActivities from "@/components/recommanded/activities/RecommandedActivities";
import RecommandedPlaces from "@/components/recommanded/places/RecommandedPlaces";

const RecommandedItems = async ({ locationRef }) => {
  const [productTypes, activityTypes, placeTypes] = await Promise.all([
    getProductType(locationRef),
    getActivityTypes(locationRef),
    getPlacesTypes(locationRef),
  ]);

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="space-y-6">
            <h2 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
              Things to Do
            </h2>
            <RecommandedActivities
              activityTypes={activityTypes}
              locationRef={locationRef}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
              Essential Products
            </h2>
            <RecommandedProducts
              locationRef={locationRef}
              productTypes={productTypes}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl  font-bold text-gray-900 border-l-4 border-black pl-6">
              Nearby Places
            </h2>
            <RecommandedPlaces
              locationRef={locationRef}
              placesTypes={placeTypes}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommandedItems;
