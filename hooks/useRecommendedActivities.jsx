import { getRecommendedActivites } from "@/sanity/destinations/getRecommended";
import { useState, useEffect } from "react";

export const useRecommendedActivities = (locationRef, activityCategory) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!locationRef || !activityCategory) {
      setData([]);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let result = await getRecommendedActivites(
          locationRef,
          activityCategory,
        );
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch products");
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [locationRef, activityCategory]);

  return { data, loading, error };
};
