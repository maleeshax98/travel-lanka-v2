import React from "react";
import Navigation from "./Navigation";
import { getNavbarData } from "@/sanity/getNavbarData";

const Navbar = async () => {
  const navData = await getNavbarData();
  console.log(navData);
  return (
    <>
      <Navigation
        data={[
          {
            title: "Home",
            subItems: [],
          },
          {
            title: "The Island",
            subItems: [],
          },
          {
            title: "Travel Tips",
            subItems: [],
          },
          ...navData,
        ]}
      />
    </>
  );
};

export default Navbar;
