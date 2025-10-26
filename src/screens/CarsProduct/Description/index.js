import React, { useState } from "react";
import cn from "classnames";
import styles from "./Description.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import Details from "./Details";
import Receipt from "../../../components/Receipt";
import Counter from "../../../components/Counter";

const items = [
  {
    title: "May 15, 2021 - May 18, 2021",
    category: "Date",
    icon: "calendar",
  },
];

const receipt = [
  {
    title: "$500 x 3 days",
    content: "$1500",
  },
  {
    title: "10% campaign discount",
    content: "-$150",
  },
  {
    title: "1 child seat",
    content: "$50",
  },
  {
    title: "Service fee",
    content: "$110",
  },
  {
    title: "Total (USD)",
    content: "$1460",
  },
];

const Description = ({ classSection }) => {
  const [service, setService] = useState(0);
  const [seat, setSeat] = useState(0);

  const controls = [
    {
      title: "Payable on collection",
      content:
        "If you reserve any of these extras, you'll pay for them at the counter.",
      value: service,
      setValue: setService,
    },
    {
      title: "Child seat",
      content: "$50",
      value: seat,
      setValue: setSeat,
    },
  ];

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <Details className={styles.details} />
          <Receipt
            className={styles.receipt}
            items={items}
            priceOld="$620"
            priceActual="$500"
            time="day"
          >
            <div className={styles.box}>
              <div className={styles.category}>Extras</div>
              <div className={styles.group}>
                {controls.map((x, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.wrap}>
                      <div className={styles.subtitle}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                    </div>
                    <Counter
                      className={styles.counter}
                      value={x.value}
                      setValue={x.setValue}
                      iconMinus="minus"
                      iconPlus="plus"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.category}>Price details</div>
              <div className={styles.table}>
                {receipt.map((x, index) => (
                  <div className={styles.line} key={index}>
                    <div className={styles.cell}>{x.title}</div>
                    <div className={styles.cell}>{x.content}</div>
                  </div>
                ))}
              </div>
              <div className={styles.foot}>
                <div className={styles.note}>
                  <Icon name="coin" size="12" />
                  Free cancellation until 3:00 PM on May 15, 2021
                </div>
                <Link
                  className={cn("button", styles.button)}
                  to="/cars-checkout"
                >
                  <span>Rent this car</span>
                  <Icon name="bag" size="16" />
                </Link>
              </div>
            </div>
          </Receipt>
        </div>
      </div>
    </div>
  );
};

export default Description;
