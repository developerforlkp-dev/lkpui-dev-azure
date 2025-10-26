import React from "react";
import cn from "classnames";
import styles from "./Destinations.module.sass";
import Slider from "react-slick";
import Destination from "../Destination";
import Icon from "../Icon";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Destinations = ({ items }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <h2 className={cn("h2", styles.title)}>Popular destinations</h2>
            <div className={cn("info", styles.info)}>for car rentals</div>
          </div>
          <div className={styles.wrapper}>
            <Slider className="destinations-slider" {...settings}>
              {items.map((x, index) => (
                <Destination
                  className={styles.destination}
                  item={x}
                  key={index}
                />
              ))}
            </Slider>
          </div>
          <button className={cn("button-stroke", styles.button)}>
            <span>Show more</span>
            <Icon name="arrow-right" size="16" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
