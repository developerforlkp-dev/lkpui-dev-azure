import React from "react";
import cn from "classnames";
import styles from "./Receipt.module.sass";
import Icon from "../Icon";

const Receipt = ({
  className,
  items,
  children,
  priceOld,
  priceActual,
  time,
  stacked,
  onItemClick,
  renderItem, // Custom render function for items
}) => {
  return (
    <div className={cn(className, styles.receipt)}>
      <div className={styles.head}>
        <div className={styles.details}>
          <div className={styles.cost}>
            <div className={styles.old}>{priceOld}</div>
            <div className={styles.actual}>{priceActual}</div>
            <div className={styles.note}>/{time}</div>
          </div>
          <div className={styles.rating}>
            <Icon name="star" size="20" />
            <div className={styles.number}>4.8</div>
            <div className={styles.reviews}>(256 reviews)</div>
          </div>
        </div>
        <div className={styles.avatar}>
          <img src="/images/content/avatar.jpg" alt="Avatar" />
          <div className={styles.check}>
            <Icon name="check" size="12" />
          </div>
        </div>
      </div>
      <div
        className={cn(styles.description, {
          [styles.flex]: items.length > 1 && !stacked,
        })}
      >
        {items.map((x, index) => {
          // Use custom render function if provided
          if (renderItem) {
            const customRender = renderItem(x, index);
            if (customRender) {
              return <div key={index} className={styles.itemWrapper}>{customRender}</div>;
            }
          }
          
          // Default rendering
          return (
            <div
              className={styles.item}
              key={index}
              onClick={onItemClick ? () => onItemClick(index) : undefined}
              role={onItemClick ? "button" : undefined}
            >
              <div className={styles.icon}>
                <Icon name={x.icon} size="24" />
              </div>
              <div className={styles.box}>
                <div className={styles.category}>{x.category}</div>
                <div className={styles.subtitle}>{x.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Receipt;
