import React from "react";
import Main from "./Main";
import Adventure from "../../components/Adventure";
import Travel from "../../components/Travel";
import Categories from "../../components/Categories";

// data
import { categories1 } from "../../mocks/categories";

const Flights = () => {
  return (
    <>
      <Main />
      <Adventure />
      <Travel />
      <Categories
        classSection="section"
        title="Browse by category"
        info="Let’s go on an adventure"
        items={categories1}
      />
    </>
  );
};

export default Flights;
