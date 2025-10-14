import React from "react";
import ExclusiveOffers from "../Components/ExclusiveOffers";
import FeaturedDestination from "../Components/FeaturedDestination";
import Hero from "../Components/Hero";
import Newsletter from "../Components/Newsletter";
import Testimonial from "../Components/Testimonial";


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <Newsletter />
    </>
  );
}

export default Home;