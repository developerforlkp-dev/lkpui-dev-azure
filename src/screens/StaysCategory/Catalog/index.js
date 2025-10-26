import React, { useState } from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Sorting from "../../../components/Sorting";
import Browse from "../../../components/Browse";
import Card from "../../../components/Card";
import Loader from "../../../components/Loader";

// data
import { browse2 } from "../../../mocks/browse";
import { stays } from "../../../mocks/stays";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Stays",
    url: "/",
  },
  {
    title: "New Zealand",
    url: "/stays-category",
  },
  {
    title: "South Island",
  },
];

const navigation = [
  "Entire homes",
  "Cancellation flexibility",
  "Closest beach",
  "For long stays",
];

const saleOptions = ["On sales", "On delivery", "In exchange"];

const Catalog = () => {
  const [sale, setSale] = useState(saleOptions[0]);

  return (
    <div className={cn("section", styles.section)}>
      <Sorting
        className={styles.sorting}
        urlHome="/"
        breadcrumbs={breadcrumbs}
        navigation={navigation}
        title="Places to stay"
        sale="300+ stays"
        details="May 1 - 14, 2 guests"
        sorting={sale}
        setSorting={setSale}
        sortingOptions={saleOptions}
      />
      <Browse
        classSection="section-mb80"
        headSmall
        classTitle="h4"
        title="Explore mountains in New Zealand"
        items={browse2}
      />
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <h4 className={cn("h4", styles.title)}>Over 300 stays</h4>
          <div className={styles.list}>
            {stays.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
          </div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              <Loader className={styles.loader} />
              <span>Show more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
