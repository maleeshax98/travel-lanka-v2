import ActivitiesCard from "@/components/activities/ActivitiesCard";
import BlogContent from "@/components/BlogContent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import TrendingProductCard from "@/components/home/trendingProducts/TrendingProductCard";
import Navbar from "@/components/Navbar";
import PlacesCard from "@/components/places/PlacesCard";
import { getDestination } from "@/sanity/destinations/getDestinationsData";
import {
  getActivityTypes,
  getPlacesTypes,
  getProductType,
  getRecommandedProducts,
  getRecommendedActivites,
  getRecommendedPlaces,
} from "@/sanity/destinations/getRecommended";

import RecommandedProducts from "@/components/recommanded/products/RecommandedProducts";
import RecommandedActivities from "@/components/recommanded/activities/RecommandedActivities";
import RecommandedPlaces from "@/components/recommanded/places/RecommandedPlaces";

const page = async ({ params }) => {
  const { slug } = await params;
  const destination = await getDestination(slug);

  const rPlaces = await getRecommendedPlaces(destination[0].location._ref);

  const productTypes = await getProductType(destination[0].location._ref);
  const activityTypes = await getActivityTypes(destination[0].location._ref);
  const placeTypes = await getPlacesTypes(destination[0].location._ref);

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className=" flex flex-col justify-center items-center w-full ">
        <div>
          <Header subtitle={"Explore Sri Lanka"} title={destination[0].name} />
        </div>
        <div className="p-10 max-w-7xl mx-auto">
          <BlogContent value={destination[0].body} />
        </div>
      </div>
      <div>
        {/* Products */}
        <RecommandedProducts
          locationRef={destination[0].location._ref}
          productTypes={productTypes}
        />
        {/* Activites */}

        <RecommandedActivities
          activityTypes={activityTypes}
          locationRef={destination[0].location._ref}
        />

        {/* Places */}
        <RecommandedPlaces
          locationRef={destination[0].location._ref}
          placesTypes={placeTypes}
        />
        {/* <div className="w-full  flex flex-wrap  justify-left items-center gap-4 mt-10 p-5">
          {rPlaces && rPlaces.length > 0 ? (
            rPlaces.map((item) => <PlacesCard key={item._id} data={item} />)
          ) : (
            <h1>No Data Found</h1>
          )}
        </div> */}
      </div>
      <Footer />
    </section>
  );
};

export default page;
