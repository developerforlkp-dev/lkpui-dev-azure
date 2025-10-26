import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ className, item }) => {
  return (
    <div className={cn(className, styles.item)}>
      <div className={styles.icon}>
        <img src={item.image} alt="Service" />
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.content}>{item.content}</div>
    </div>
  );
};

export default Item;
