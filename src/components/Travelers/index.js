import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Travelers.module.sass";
import Icon from "../Icon";
import Counter from "../Counter";

const Travelers = ({
  className,
  title,
  description,
  icon,
  small,
  bodyDown,
}) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  const [visible, setVisible] = useState(false);

  const items = [
    {
      title: "Adults",
      content: "Ages 13 or above",
      value: adults,
      setValue: setAdults,
    },
    {
      title: "Children",
      content: "Ages 2 - 12",
      value: children,
      setValue: setChildren,
    },
    {
      title: "Adults",
      content: "Under 2",
      value: babies,
      setValue: setBabies,
    },
  ];

  const renderTitle = () => {
    const sum = adults + children + babies;
    return adults > 0 || children > 0 || babies > 0
      ? sum > 1
        ? sum + " guests"
        : sum + " guest"
      : title;
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(
          className,
          styles.travelers,
          { [styles.small]: small },
          { [styles.bodyDown]: bodyDown },
          {
            [styles.active]: visible,
          }
        )}
      >
        <div className={styles.head}>
          <div className={styles.icon}>
            <Icon name={icon} size="24" />
          </div>
          <div className={styles.content} onClick={() => setVisible(true)}>
            {renderTitle()}
          </div>
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </div>
        <div className={styles.body}>
          {items.map((x, index) => (
            <div className={styles.box} key={index}>
              <div className={styles.details}>
                <div className={styles.category}>{x.title}</div>
                <div className={styles.text}>{x.content}</div>
              </div>
              <Counter
                className={styles.counter}
                value={x.value}
                setValue={x.setValue}
                iconMinus="minus-circle"
                iconPlus="plus-circle"
              />
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Travelers;
