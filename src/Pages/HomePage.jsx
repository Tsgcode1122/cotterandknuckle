import React from "react";
import HeroSection from "../Component/HeroSection";
import WhyUs from "../Component/WhyUs";
import How from "../Component/How";
import Offer from "../Component/Offer";
import Customers from "../Component/Customers";
import WhyChooseUs from "../Component/WhyChooseUs";
import Ready from "../Component/Ready";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <How />
      <Offer />
      <Customers />
      <WhyChooseUs />
      <Ready />
    </div>
  );
};

export default HomePage;
