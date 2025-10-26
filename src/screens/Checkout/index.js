import React from "react";
import cn from "classnames";
import styles from "./Checkout.module.sass";
import Control from "../../components/Control";
import ConfirmAndPay from "../../components/ConfirmAndPay";
import PriceDetails from "../../components/PriceDetails";

const breadcrumbs = [
  {
    title: "Things to do",
    url: "/#",
  },
  {
    title: "Confirm and pay",
  },
];

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

const table = [
  {
    title: "$128 x 2 adults",
    value: "$256",
  },
  {
    title: "Service fee",
    value: "$0,00",
  },
  {
    title: "Total (USD)",
    value: "$256",
  },
];

const Checkout = () => {
  return (
    <div className={cn("section-mb80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Control
          className={styles.control}
          urlHome="/"
          breadcrumbs={breadcrumbs}
        />
        <div className={styles.wrapper}>
          <ConfirmAndPay
            className={styles.confirm}
            title="Your trip"
            buttonUrl="/checkout-complete"
            guests
          />
          <PriceDetails
            className={styles.price}
            image="/images/content/photo-checkout.jpg"
            title="Spectacular views of Queenstown"
            discoundCode
            items={items}
            table={table}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
