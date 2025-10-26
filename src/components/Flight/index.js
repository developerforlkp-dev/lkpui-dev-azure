import React from "react";
import cn from "classnames";
import styles from "./Flight.module.sass";
import Icon from "../Icon";

const Flight = ({ className, item }) => {
  return (
    <div className={cn(className, styles.flight)}>
      <div className={styles.wrap}>
        {item.directions.map((x, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.logo}>
              <img src={x.logo} alt="Logo" />
            </div>
            <div className={styles.details}>
              <div className={styles.box}>
                <div className={styles.title}>{x.flightFrom}</div>
                <div className={styles.time}>{x.timeFlightFrom}</div>
              </div>
              <div className={styles.note}>nonstop</div>
              <div className={styles.box}>
                <div className={styles.title}>{x.flightTo}</div>
                <div className={styles.time}>{x.timeFlightTo}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.control}>
        <div className={styles.info}>
          <Icon name="tick" size="20" />
          {item.info}
        </div>
        <button className={cn("button-stroke", styles.button)}>
          <span className={styles.price}>{item.price}</span>
          <span className={styles.more}>
            <span>View deal</span>
            <Icon name="arrow-next" size="16" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Flight;
