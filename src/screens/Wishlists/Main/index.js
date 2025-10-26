import React, { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Control from "../../../components/Control";
import Dropdown from "../../../components/Dropdown";
import Flight from "../../../components/Flight";
import Card from "../../../components/Card";
import Loader from "../../../components/Loader";

import { wishlists } from "../../../mocks/wishlists";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Wishlists",
  },
];

const Main = () => {
  const options = [];
  wishlists.map((x) => options.push(x.title));

  const [activeTab, setActiveTab] = useState(options[0]);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Control
          className={styles.control}
          urlHome="/"
          breadcrumbs={breadcrumbs}
        />
        <div className={styles.head}>
          <div className={styles.wrap}>
            <h1 className={cn("h2", styles.title)}>Wishlists</h1>
            <div className={styles.counter}>You added 8 items to wishlists</div>
          </div>
          <div className={styles.nav}>
            {wishlists.map((x, index) => (
              <button
                className={cn(styles.link, {
                  [styles.active]: x.title === activeTab,
                })}
                onClick={() => setActiveTab(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={cn("mobile-show", styles.dropdown)}
            value={activeTab}
            setValue={setActiveTab}
            options={options}
          />
        </div>
        <div className={styles.wrapper}>
          {activeTab === options[0] && (
            <>
              <div className={styles.list}>
                {wishlists
                  .find((x) => x.title === activeTab)
                  .items.map((x, index) => (
                    <Card className={styles.card} item={x} key={index} />
                  ))}
              </div>
              <div className={styles.btns}>
                <button className={cn("button-stroke", styles.button)}>
                  <Loader className={styles.loader} />
                  <span>Show more</span>
                </button>
              </div>
            </>
          )}
          {activeTab === options[1] && (
            <div className={styles.group}>
              {wishlists
                .find((x) => x.title === activeTab)
                .items.map((x, index) => (
                  <Flight className={styles.flight} item={x} key={index} />
                ))}
            </div>
          )}
          {activeTab === options[2] && (
            <div className={styles.list}>
              {wishlists
                .find((x) => x.title === activeTab)
                .items.map((x, index) => (
                  <Card className={styles.card} item={x} key={index} car />
                ))}
            </div>
          )}
          {activeTab === options[3] && (
            <div className={styles.list}>
              {wishlists
                .find((x) => x.title === activeTab)
                .items.map((x, index) => (
                  <Card className={styles.card} item={x} key={index} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
