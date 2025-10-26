import React from "react";
import cn from "classnames";
import styles from "./Places.module.sass";
import Slider from "react-slick";
import Item from "./Item";
import Icon from "../Icon";

// data
import { places } from "../../mocks/places";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Places = ({ title, info, classSection }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section", classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <h2 className={cn("h2", styles.title)}>{title}</h2>
            <div className={cn("info", styles.info)}>{info}</div>
          </div>
          <div className={styles.wrapper}>
            <Slider
              className={cn("places-slider", styles.slider)}
              {...settings}
            >
              {places.map((x, index) => (
                <Item className={styles.item} item={x} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
