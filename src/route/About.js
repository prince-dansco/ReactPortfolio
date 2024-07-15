import React from "react";
import Navbar from "../components/Navbar";
import Footers from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";
import Skiller from "../components/skiller";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading=" ABOUT." text="Im a friendly Front-End Developer." />
      <AboutContent />
    <Skiller />
      <Footers />
    </div>
  );
};

export default About;
