import React, { useState } from "react";
import Main from "./Main";
import Catalog from "./Catalog";
import Testimonials from "../../components/Testimonials";

// data
import { flights } from "../../mocks/flights";

const FlightsCategory = () => {
  const [activeTab, setActiveTab] = useState(flights[0].title);

  return (
    <>
      <Main items={flights} value={activeTab} setValue={setActiveTab} />
      <Catalog items={flights} value={activeTab} />
      <Testimonials classSection="section-pd section-mb0 section-bg" />
    </>
  );
};

export default FlightsCategory;
