import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Icon from "../../../../components/Icon";

const parameters = [
  {
    title: "2 guests",
    icon: "home",
  },
  {
    title: "1 bedroom",
    icon: "flag",
  },
  {
    title: "1 private bath",
    icon: "flag",
  },
];

const options = [
  {
    title: "Free wifi 24/7",
    icon: "modem",
  },
  {
    title: "Free clean bathroom",
    icon: "toilet-paper",
  },
  {
    title: "Free computer",
    icon: "monitor",
  },
  {
    title: "Breakfast included",
    icon: "burger",
  },
  {
    title: "Free wifi 24/7",
    icon: "medical-case",
  },
  {
    title: "ATM",
    icon: "credit-card",
  },
  {
    title: "Free wifi 24/7",
    icon: "modem",
  },
  {
    title: "Nearby city",
    icon: "building",
  },
];

const Details = ({ className }) => {
  return (
    <div className={cn(className, styles.details)}>
      <h4 className={cn("h4", styles.title)}>Private room in house</h4>
      <div className={styles.profile}>
        <span>Hosted by</span>
        <div className={styles.avatar}>
          <img src="/images/content/avatar.jpg" alt="Avatar" />
        </div>
        <div className={styles.name}>Zoe Towne</div>
      </div>
      <div className={styles.parameters}>
        {parameters.map((x, index) => (
          <div className={styles.parameter} key={index}>
            <Icon name={x.icon} size="20" />
            {x.title}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <p>
          Described by Queenstown House & Garden magazine as having 'one of the
          best views we've ever seen' you will love relaxing in this newly
          built, architectural house sitting proudly on Queenstown Hill.
        </p>
        <p>
          Enjoy breathtaking 180' views of Lake Wakatipu from your well
          appointed & privately accessed bedroom with modern en suite and
          floor-to-ceiling windows.
        </p>
        <p>
          Your private patio takes in the afternoon sun, letting you soak up
          unparalleled lake and mountain views by day and the stars & city
          lights by night.
        </p>
      </div>
      <div className={styles.info}>Amenities</div>
      <div className={styles.options}>
        {options.map((x, index) => (
          <div className={styles.option} key={index}>
            <Icon name={x.icon} size="24" />
            {x.title}
          </div>
        ))}
      </div>
      <button className={cn("button-stroke button-small", styles.button)}>
        More detail
      </button>
    </div>
  );
};

export default Details;
