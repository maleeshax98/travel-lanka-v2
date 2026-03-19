import React from "react";
import Navigation from "./Navigation";
import { getNavbarData } from "@/sanity/getNavbarData";

const Navbar = async () => {
  const navData = await getNavbarData();
  return (
    <>
      <Navigation
        data={[
          {
            name: "Home",
            subItems: [],
          },
          {
            name: "The Island",
            subItems: [],
          },
          {
            name: "Travel Tips",
            subItems: [],
          },
          ...navData,
        ]}
      />
    </>
  );
};

export default Navbar;
