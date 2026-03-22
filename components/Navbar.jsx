import React from "react";
import Navigation from "./Navigation";
import { getNavbarData, productNavbarData } from "@/sanity/getNavbarData";
import ProductNavigation from "./ProductNavigation";

const Navbar = async () => {
  const navData = await getNavbarData();
  const productNavData = await productNavbarData();

  return (
    <>
      <Navigation
        data={[
          ...navData,
        ]}
      />
      <ProductNavigation data={productNavData} />
    </>
  );
};

export default Navbar;
