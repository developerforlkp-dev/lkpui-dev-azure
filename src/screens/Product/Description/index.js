import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Icon from "../../../components/Icon";
import Details from "./Details";
import Receipt from "../../../components/Receipt";

const items = [
  {
    title: "May 15, 2021",
    category: "Date",
    icon: "calendar",
  },
  {
    title: "2 guests",
    category: "Guests",
    icon: "user",
  },
];

const price = [
  {
    date: "Wed, June 23",
    time: "7:30 AM - 7:30PM",
    price: "$256",
  },
  {
    date: "Wed, June 24",
    time: "7:30 AM - 7:30PM",
    price: "$230",
  },
  {
    date: "Wed, June 25",
    time: "7:30 AM - 7:30PM",
    price: "$270",
  },
  {
    date: "Wed, June 26",
    time: "7:30 AM - 7:30PM",
    price: "$190",
  },
];

const Description = ({ classSection }) => {
  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <Details className={styles.details} />
          <Receipt
            className={styles.receipt}
            items={items}
            priceOld="$119"
            priceActual="$102"
            time="person"
          >
            <div className={styles.group}>
              {price.map((x, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.wrap}>
                    <div className={styles.date}>{x.date}</div>
                    <div className={styles.time}>{x.time}</div>
                  </div>
                  <Link
                    className={cn("button-stroke", styles.button)}
                    to="/checkout"
                  >
                    <span className={styles.cost}>
                      <span className={styles.price}>{x.price}</span> / person
                    </span>
                    <Icon name="bag" size="16" />
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.foot}>
              <button className={styles.more}>See more dates</button>
            </div>
          </Receipt>
        </div>
      </div>
    </div>
  );
};

export default Description;
