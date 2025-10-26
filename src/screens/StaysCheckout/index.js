import React from "react";
import cn from "classnames";
import styles from "./StaysCheckout.module.sass";
import Control from "../../components/Control";
import ConfirmAndPay from "../../components/ConfirmAndPay";
import PriceDetails from "../../components/PriceDetails";

const breadcrumbs = [
  {
    title: "Spectacular views of Queenstown",
    url: "/stays-product",
  },
  {
    title: "Confirm and pay",
  },
];

const items = [
  {
    title: "May 15, 2021",
    category: "Check-in",
    icon: "calendar",
  },
  {
    title: "May 22, 2021",
    category: "Check-out",
    icon: "calendar",
  },
  {
    title: "2 guests",
    category: "Guest",
    icon: "user",
  },
];

const table = [
  {
    title: "$119 x 7 nights",
    value: "$833",
  },
  {
    title: "10% campaign discount",
    value: "-$125",
  },
  {
    title: "Service fee",
    value: "$103",
  },
  {
    title: "Total (USD)",
    value: "$833",
  },
];

const Checkout = () => {
  return (
    <div className={cn("section-mb80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Control
          className={styles.control}
          urlHome="/stays-product"
          breadcrumbs={breadcrumbs}
        />
        <div className={styles.wrapper}>
          <ConfirmAndPay
            className={styles.confirm}
            title="Your trip"
            buttonUrl="/stays-checkout-complete"
            guests
          />
          <PriceDetails
            className={styles.price}
            more
            image="/images/content/photo-1.1.jpg"
            title="Spectacular views of Queenstown"
            items={items}
            table={table}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
