import React, { useState } from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Control from "../../../components/Control";
import Dropdown from "../../../components/Dropdown";
import Loader from "../../../components/Loader";
import Flight from "../../../components/Flight";
import Filters from "./Filters";

const breadcrumbs = [
  {
    title: "Home",
    url: "/flights",
  },
  {
    title: "Flights",
  },
];

const navigation = ["Cheapest", "Best", "Quickest"];

const statusOptions = ["Recommended", "Popular", "With transfers"];
const sortingOptions = [];
navigation.map((x) => sortingOptions.push(x));

const Catalog = ({ items, value }) => {
  const [status, setStatus] = useState(statusOptions[0]);
  const [sorting, setSorting] = useState(sortingOptions[0]);

  const [visible, setVisible] = useState(false);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Control
          className={styles.control}
          urlHome="/flights"
          breadcrumbs={breadcrumbs}
        />
        <div className={styles.sorting}>
          <div className={styles.box}>
            <Dropdown
              className={styles.dropdown}
              value={status}
              setValue={setStatus}
              options={statusOptions}
            />
          </div>
          <div className={cn("mobile-show", styles.box)}>
            <Dropdown
              className={styles.dropdown}
              value={sorting}
              setValue={setSorting}
              options={sortingOptions}
            />
            <button
              className={cn("button-stroke", styles.button, {
                [styles.active]: visible,
              })}
              onClick={() => setVisible(!visible)}
            >
              Advanced filter
            </button>
          </div>
          <div className={styles.nav}>
            {navigation.map((x, index) => (
              <button
                className={cn(styles.link, {
                  [styles.active]: x === sorting,
                })}
                onClick={() => setSorting(x)}
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <Filters
            className={cn(styles.filters, { [styles.active]: visible })}
          />
          <div className={styles.inner}>
            <div className={styles.list}>
              {items
                .find((x) => x.title === value)
                .items.map((x, index) => (
                  <Flight className={styles.flight} item={x} key={index} />
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
    </div>
  );
};

export default Catalog;
