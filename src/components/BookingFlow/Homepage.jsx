import React, { useEffect, useState } from "react";
import Hero from "../Misc/Hero";
import About from "../Misc/About";
import Features from "../Misc/Features";
import Gallery from "../Misc/Gallery";
import TopItems from "../Misc/TopItems";
import axios from "axios";

const Homepage = () => {
  const [destinations, setDestinations] = useState();
  const [freelancers, setFreelancers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost/ub_back/wp-json/wp/v2/destination?per_page=4")
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost/ub_back/wp-json/wp/v2/freelancer?per_page=4")
      .then((res) => {
        setFreelancers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <TopItems heading="Top Destinations" data={destinations} />
      <TopItems heading="Top Freelancers" data={freelancers} />
    </div>
  );
};

export default Homepage;
