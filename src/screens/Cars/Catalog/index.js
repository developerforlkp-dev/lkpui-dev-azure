import React from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Destination from "../../../components/Destination";
import Icon from "../../../components/Icon";

const Catalog = ({ items }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Popular destinations</h2>
          <div className={cn("info", styles.info)}>for car rentals</div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <Destination className={styles.destination} item={x} key={index} />
          ))}
        </div>
        <button className={cn("button-stroke", styles.button)}>
          <span>Show more</span>
          <Icon name="arrow-right" size="16" />
        </button>
      </div>
    </div>
  );
};

export default Catalog;
