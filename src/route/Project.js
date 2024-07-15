import React from "react";
import Navbar from "../components/Navbar";
import Footers from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="some of my most recent works" />
      <Work />
      <PricingCard />
      <Footers />
    </div>
  );
};

export default Project;
