import React from "react";
import Hero from "../Components/Hero";
import FeaturedDestination from "../Components/FeaturedDestination";
import ExclusiveOffer from "../Components/ExclusiveOffer";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffer />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
