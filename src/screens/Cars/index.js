import React from "react";
import Main from "./Main";
import Destinations from "../../components/Destinations";
import Planning from "../../components/Planning";
import Catalog from "./Catalog";
import Services from "./Services";
import Faq from "./Faq";
import Brands from "../../components/Brands";
import Categories from "../../components/Categories";

// data
import { destinations } from "../../mocks/destinations";
import { categories2 } from "../../mocks/categories";

const Cars = () => {
  return (
    <>
      <Main />
      <Destinations items={destinations} />
      <Planning
        classSection="section-mb64"
        title="Rent a car in minutes with Fleet"
      />
      <Catalog items={destinations} />
      <Services />
      <Brands />
      <Faq />
      <Categories
        classSection="section"
        title="Recommended pickup locations"
        info="A lot of amazing experiences 🏝"
        items={categories2}
      />
    </>
  );
};

export default Cars;
