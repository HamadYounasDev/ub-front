import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Gallery from "./Gallery";
import TopItems from "./TopItems";
import axios from "axios";

const Homepage = () => {

  const [destinations, setDestinations] = useState()
  const [freelancers, setFreelancers] = useState()

  useEffect(()=>{ 
    axios.get('http://localhost/ub_back/wp-json/wp/v2/destination?per_page=4')
    .then((res)=>{
      setDestinations(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    axios.get('http://localhost/ub_back/wp-json/wp/v2/freelancer?per_page=4')
    .then((res)=>{
      console.log(res.data)
      setFreelancers(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <TopItems heading='Top Destinations' data={destinations} />
      <TopItems heading='Top Freelancers' data={freelancers} />
    </div>
  );
};

export default Homepage;
