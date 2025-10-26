import React from "react";
import Main from "./Main";
import Adventure from "../../components/Adventure";
import Travel from "../../components/Travel";
import Live from "../../components/Live";
import Planning from "../../components/Planning";
import Browse from "../../components/Browse";
import Places from "../../components/Places";
import Hosts from "../../components/Hosts";
import Categories from "../../components/Categories";

// data
import { browse1 } from "../../mocks/browse";
import { categories1 } from "../../mocks/categories";

const Home = () => {
  return (
    <>
      <Main />
      <Adventure />
      <Travel />
      <Live title="Live anywhere" />
      <Planning title="Travel to make memories all around the world" />
      <Browse
        classSection="section"
        classTitle="h2"
        title="Browse by property type"
        info="Let’s go on an adventure"
        items={browse1}
      />
      <Places title="Explore nearby" info="10,789 beautiful places to go" />
      <Hosts />
      <Categories
        classSection="section"
        title="Browse by category"
        info="Let’s go on an adventure"
        items={categories1}
      />
    </>
  );
};

export default Home;
