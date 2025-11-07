import React from "react";
import cn from "classnames";
import styles from "./Counter.module.sass";
import Icon from "../Icon";

const Counter = ({ className, value, setValue, iconPlus }) => {
  return (
    <div className={cn(className, styles.counter)}>
      <div className={styles.number}>{value}</div>
      <button className={styles.button} onClick={() => setValue(value + 1)}>
        <Icon name={iconPlus} size="24" />
      </button>
    </div>
  );
};

export default Counter;
