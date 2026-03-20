import { getPlacesData } from "@/sanity/places/getPlacesData";
import { useState, useEffect } from "react";

export const useGetPlacesData = (ref) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ref) {
      setData([]);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let result = await getPlacesData(ref);
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
  }, [ref]);

  return { data, loading, error };
};
