import React from "react";
import "../../App.css";
import Hero from "../HomeSection/Hero";
import HomeAbout from "../HomeSection/HomeAbout";
import MostPopular from "../HomeSection/popular/MostPopular";
import DiscoverOurCaravan from "../HomeSection/DiscoverOurCaravan/DiscoverOurCaravan";
import Explore from "../HomeSection/Explore/Explore";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DiscoverOurCaravan />
      <Explore />
    </>
  );
};

export default Home;
