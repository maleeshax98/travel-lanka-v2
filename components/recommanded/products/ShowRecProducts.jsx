"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ShowRecProducts = ({ productTypes }) => {
  const [selectedValue, setSelectedValue] = useState(productTypes[0]);
  console.log(selectedValue);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getRecommandedProducts(selectedValue);
      setProducts(res);
    };
    fetchProducts();
  }, [selectedValue]);

  return (
    <div>
      <Tabs defaultValue={productTypes[0]} className="w-[400px]">
        <TabsList>
          {productTypes.map((d, i) => (
            <TabsTrigger key={i} value={d} onClick={() => setSelectedValue(d)}>
              {d}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ShowRecProducts;
