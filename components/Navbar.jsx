import React from "react";
import Navigation from "./Navigation";
import { getNavbarData } from "@/sanity/getNavbarData";

const Navbar = async () => {
  const navData = await getNavbarData();
  return (
    <>
      <Navigation
        data={[
          // {
          //   name: "Home",
          //   subItems: [],
          //   slug: { _type: "slug", current: "" },
          // },
          // {
          //   name: "The Island",
          //   subItems: [],
          //   slug: { _type: "slug", current: "sri-lanka" },
          // },
          // {
          //   name: "Travel Tips",
          //   subItems: [],
          //   slug: { _type: "slug", current: "tips" },
          // },
          ...navData,
        ]}
      />
    </>
  );
};

export default Navbar;
