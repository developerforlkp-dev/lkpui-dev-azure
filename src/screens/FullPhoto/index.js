import React from "react";
import cn from "classnames";
import styles from "./FullPhoto.module.sass";
import Product from "../../components/Product";
import Icon from "../../components/Icon";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const breakpointCols = {
  default: 2,
  768: 1,
};

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Stays",
    url: "/",
  },
  {
    title: "New Zealand",
    url: "/stays-category",
  },
  {
    title: "South Island",
  },
];

const gallery = [
  "/images/content/photo-2.1.jpg",
  "/images/content/photo-2.2.jpg",
  "/images/content/photo-2.6.jpg",
  "/images/content/photo-2.3.jpg",
  "/images/content/photo-2.7.jpg",
  "/images/content/photo-2.4.jpg",
  "/images/content/photo-2.8.jpg",
  "/images/content/photo-2.5.jpg",
  "/images/content/photo-2.9.jpg",
];

const options = [
  {
    title: "Superhost",
    icon: "home",
  },
  {
    title: "Queenstown, Otago, New Zealand",
    icon: "flag",
  },
];

const FullPhoto = () => {
  return (
    <>
      <Product
        classSection="section-mb64"
        urlHome="/"
        title="Spectacular views of Queenstown"
        breadcrumbs={breadcrumbs}
        options={options}
      ></Product>
      <div className={cn("section-mb80", styles.section)}>
        <div className={cn("container", styles.container)}>
          {gallery.map(
            (x, index) =>
              index === 0 && (
                <div className={styles.preview} key={index}>
                  <img src={x} alt="Nature" />
                </div>
              )
          )}
          <div className={styles.inner}>
            <Masonry
              className={styles.grid}
              columnClassName={styles.column}
              breakpointCols={breakpointCols}
            >
              {gallery.map(
                (x, index) =>
                  index > 0 && (
                    <div className={styles.preview} key={index}>
                      <img src={x} alt="Nature" />
                    </div>
                  )
              )}
            </Masonry>
          </div>
          <div className={styles.foot}>
            <Link
              to="/stays-product"
              className={cn("button-circle-stroke button-small", styles.button)}
            >
              <Icon name="close" size="24" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPhoto;
