import React from "react";
import cn from "classnames";
import styles from "./Brands.module.sass";

const brands = [
  "/images/content/rotashow.svg",
  "/images/content/waves.png",
  "/images/content/velocity9.svg",
  "/images/content/travelers.png",
  "/images/content/goldlines.svg",
  "/images/content/rotashow.svg",
];

const Brands = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.list}>
            {brands.map((x, index) => (
              <div className={styles.item} key={index}>
                <img src={x} alt="Brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
