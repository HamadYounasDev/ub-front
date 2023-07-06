import React from "react";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Gallery from "./Gallery";
import TopItems from "./TopItems";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <TopItems />
      <TopItems />
    </div>
  );
};

export default Homepage;
