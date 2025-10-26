import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Location.module.sass";
import Icon from "../Icon";

const items = [
  "New York, NY",
  "New York, Manhattan, New York, NY",
  "New Zealand",
  "New Smyrna Beach, FL",
  "Newark, NJ",
];

const Location = ({
  className,
  icon,
  description,
  placeholder,
  small,
  bodyDown,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(
          className,
          styles.location,
          { [styles.small]: small },
          { [styles.bodyDown]: bodyDown },
          { [styles.active]: visible }
        )}
      >
        <div className={styles.head}>
          <div className={styles.icon}>
            <Icon name={icon} size="24" />
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder={placeholder}
            onChange={() => setVisible(true)}
          />
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          <button className={styles.clear} onClick={() => setVisible(false)}>
            <Icon name="close-circle" size="24" />
          </button>
        </div>
        <div className={styles.body}>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Location;
