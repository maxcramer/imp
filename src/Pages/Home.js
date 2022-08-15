import React from "react";

import Hero from "../components/Hero/Hero";
import Experiences from "../components/Experiences/Experiences";
import Who from "../components/Who/Who";
import How from "../components/How/How";
import News from "../components/News/News";

const Home = () => {
  return (
    <div>
      <Hero />
      <Experiences />
      <Who />
      <How />
      <News />
    </div>
  );
};

export default Home;
