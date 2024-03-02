import React from "react";
import "../../App.css";
import Hero from "../HomeSection/Hero";
import HomeAbout from "../HomeSection/HomeAbout";
import MostPopular from "../HomeSection/popular/MostPopular";
import DiscoverOurCaravan from "../HomeSection/DiscoverOurCaravan/DiscoverOurCaravan";
import Works from "../HomeSection/Works/Works";
import Gallery from "../HomeSection/gallery/Gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DiscoverOurCaravan />
      <Works />
      <Gallery />
    </>
  );
};

export default Home;
