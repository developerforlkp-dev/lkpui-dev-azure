import React from "react";
import Main from "./Main";
import Catalog from "./Catalog";
import Browse from "../../components/Browse";
import Categories from "../../components/Categories";

// data
import { browse3 } from "../../mocks/browse";
import { categories2 } from "../../mocks/categories";

const Cars = () => {
  return (
    <>
      <Main />
      <Catalog />
      <Browse
        classSection="section"
        classTitle="h2"
        title="Discover more"
        info="for car rentals"
        items={browse3}
      />
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
