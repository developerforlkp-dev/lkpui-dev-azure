import React from "react";
import Main from "./Main";
import Browse from "../../components/Browse";
import Categories from "../../components/Categories";

import { browse1 } from "../../mocks/browse";
import { categories1 } from "../../mocks/categories";

const Bookings = () => {
  return (
    <>
      <Main />
      <Browse
        classSection="section"
        classTitle="h2"
        title="You may also like"
        info="Let’s go on an adventure"
        items={browse1}
      />
      <Categories
        classSection="section"
        title="Browse by category"
        info="Let’s go on an adventure"
        items={categories1}
      />
    </>
  );
};

export default Bookings;
