import { getRecommandedProducts } from "@/sanity/destinations/getRecommended";
import { useState, useEffect } from "react";

export const useRecommendedProducts = (locationRef, productType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!locationRef || !productType) {
      setData([]);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let result = await getRecommandedProducts(locationRef, productType);
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
  }, [locationRef, productType]);

  return { data, loading, error };
};
